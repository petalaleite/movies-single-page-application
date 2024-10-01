import axios from 'axios';
const API_KEY = 'c3aba1b07d3381dbe0274cc1fd6bb628';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl('movie/popular'));
  }

  static getMovieById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}