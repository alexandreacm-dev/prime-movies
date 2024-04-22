type BaseResponseType = {
    status: string;
    message: string;
};

export interface Movies {
    id: number;
    name: string;
    adult: boolean;
    backdrop_path: string;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
}

export type ResponseType = BaseResponseType & {
    results: Movies[];
    total_pages: number;
    total_results: number;
}