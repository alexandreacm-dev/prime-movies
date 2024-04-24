const image_base_path = 'https://image.tmdb.org/t/p/original';
const size_path = 'w500/';
const size_path_w220 = 'w220_and_h330_face';
const base_url = 'https://api.themoviedb.org/3/movie';
const api_key = 'da1ee9a37e77390b12639d0fcbd05286';
export const KEY_MOVIE = "@movie";

const options: RequestInit = {
    method: 'GET',
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTFlZTlhMzdlNzczOTBiMTI2MzlkMGZjYmQwNTI4NiIsInN1YiI6IjU5ZWJlYTgzYzNhMzY4MzEzZTAwMGQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImNyalqALxf1dpJlbiiEwmlvghR1VJfSOBepcr-9n_s ',
    },
};

export { image_base_path, base_url, size_path, options, size_path_w220, api_key };