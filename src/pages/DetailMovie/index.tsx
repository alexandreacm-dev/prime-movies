import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Movies } from "../../models/movie.model";
import { api } from "../../services/api.movie";
import { KEY_MOVIE, image_base_path } from "../../constants";

import "./detail-movie.css";
import { toast } from "react-toastify";

function DetailMovie() {
  const [movie, setMovie] = useState<Movies>();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function loadingDetailMovie() {
      try {
        const response = await api.detailMovie(id);
        const data = await response.json();

        if (!response.ok) {
          navigate("/", { replace: true });
          return;
        }

        setMovie(data);
        setLoading(false);

        // console.log(response.ok);
        // console.log(response.status);

        // const data = response.json();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    loadingDetailMovie();

    return () => {
      console.log("unmount component...");
    };
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="info-movie">
        <h2>Loading...</h2>
      </div>
    );
  }

  function onSaveMovie() {
    const movieList = localStorage.getItem(KEY_MOVIE);
    let savedMovies = movieList !== null ? JSON.parse(movieList) : [];

    const hasMovie = savedMovies.some(
      (savedMovie: Movies) => savedMovie.id === movie?.id
    );

    if (hasMovie) {
      toast.warn("This movie already saved in favorites");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem(KEY_MOVIE, JSON.stringify(savedMovies));
    toast.success("Movie Saved");
  }

  return (
    <div className="info-movie">
      <h1>{movie?.title}</h1>
      <img
        src={`${image_base_path}/${movie?.backdrop_path}`}
        alt={movie?.title}
      />

      <h3>Overview</h3>
      <span>{movie?.overview}</span>
      <strong>Vote Average {movie?.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={onSaveMovie}>Save</button>
        <button>
          <a
            href={`https://www.youtube.com/results?search_query=${movie?.title} Trailer`}
            target="blank"
            rel="external noreferrer"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default DetailMovie;
