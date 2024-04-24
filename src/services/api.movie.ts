import { base_url, options } from "../constants"

const loadMovies = (page: number = 1): Promise<Response> => {
    return fetch(`${base_url}/now_playing?language=pt-BR&page=${page}`, options);
}

const detailMovie = (id: string | undefined): Promise<Response> => {
    return fetch(`${base_url}/${id}?language=pt-BR`, options);
}

export const api = { loadMovies, detailMovie };