import { base_url, options } from "../constants"

const loadMovies = (page: number = 1): Promise<Response> => {
    return fetch(`${base_url}/now_playing?language=pt-BR&page=${page}`, options);
}

export const api = { loadMovies };