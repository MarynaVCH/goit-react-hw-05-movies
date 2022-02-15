import axios from 'axios';

const API_KEY = 'e993d78c8d5e0d9feb56b30fcf5cb0e3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return data.results;
};

export async function fetchSearchMovies(query) {
  const { data } = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  );
  return data.results;
}

export async function fetchDetailsMovie(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  return data;
}

export async function fetchCastsMovie(id) {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return data.cast;
}

export async function fetchReviewsMovie(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`,
  );
  return data.results;
}

// async function fetchMovies(url = '', config = {}) {
//   const { data } = await axios.get(url, config);
//   return data.results;
// }

// export function fetchTrending() {
//   return fetchMovies(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
// }

// export function fetchByQuery(query) {
//   return fetchMovies(
//     `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`,
//   );
// }

// export function fetchMovieById(movieId) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
//   );
// }

// export function fetchActors(movieId) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
//   );
// }

// export function fetchReviews(movieId) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&`,
//   );
// }
