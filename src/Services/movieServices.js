import httpService from "./httpService";
import CONFIG from "../Utilities/Config";


export const getMoviesList = (querySearch, pageOffset) => {
    return httpService.get(`${CONFIG.baseURL}&s=${querySearch}&page=${pageOffset}`)
}

export const getMovieDetail = (id) => {
    return httpService.get(`${CONFIG.baseURL}&i=${id}`)
}

