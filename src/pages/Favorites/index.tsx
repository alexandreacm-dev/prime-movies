import { useEffect, useState } from "react";
import { Movies } from "../../models/movie.model";
import { KEY_MOVIE, image_base_path } from "../../constants";
import { useNavigate } from "react-router-dom";

import "./favorites.css";
import { toast } from "react-toastify";

function Favorites() {
  const [movies, setMovies] = useState<Array<Movies>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    function loadingLocalMovies() {
      const localMovies = localStorage.getItem(KEY_MOVIE);

      if (localMovies !== null) {
        setMovies(JSON.parse(localMovies));
      }
    }

    loadingLocalMovies();
  }, []);

  function onNavigate(movieId: number) {
    navigate(`/detail-movie/${movieId}`);
  }

  function onDeleteMovie(movieId: number) {
    const filteredMovies = movies.filter(
      (movie: Movies) => movie.id !== movieId
    );

    setMovies(filteredMovies);
    localStorage.setItem(KEY_MOVIE, JSON.stringify(filteredMovies));
    toast.success("Movie deleted");
  }

  return (
    <>
      <div className="div-header">
        <h1>Favorites Movies</h1>
      </div>
      <div className="container">
        {!movies.length ? (
          <span>
            <h2>There is no movies yet :)</h2>
          </span>
        ) : (
          <div className="favorite-list">
            {movies.map((movie) => {
              return (
                <article key={movie?.id}>
                  {/* <strong>{movie?.title}</strong> */}
                  <img src={`${image_base_path}/${movie.poster_path}`} alt="" />
                  <div className="div-buttons">
                    <button
                      className="detail"
                      onClick={() => onNavigate(movie?.id)}
                    >
                      Detail Movie
                    </button>
                    <button
                      onClick={() => onDeleteMovie(movie?.id)}
                      className="delete"
                    >
                      Delete Movie
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites;
