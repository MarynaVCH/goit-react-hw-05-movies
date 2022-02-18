import axios from 'axios';

const API_KEY = 'e993d78c8d5e0d9feb56b30fcf5cb0e3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
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

export async function fetchCastsMovie(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return data.cast;
}

export async function fetchReviewsMovie(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
  return data.results;
}
