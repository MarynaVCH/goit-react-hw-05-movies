import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  MovieInput,
  MovieSearchBtn,
} from '../components/MovieCard/MovieCard.styled';
import * as moviesAPI from '../services/movies-api';
import MovieList from '../components/MovieList/MovieList';
import toast, { Toaster } from 'react-hot-toast';

export default function MoviesPage() {
  const [value, setValue] = useState(null);
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const queryValue = new URLSearchParams(location.search).get('query');
    setValue(queryValue);
  }, [location.search]);

  useEffect(() => {
    if (!value) return;
    moviesAPI.fetchSearchMovies(value).then(movies => {
      if (movies.length === 0) toast.error('Please type correct movie name');
      setMovies(movies);
    });
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.searchValue.value;
    history.push({
      ...location,
      search: `query=${query}`,
    });
    setValue(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <MovieInput
          name="searchValue"
          type="text"
          autoComplete="off"
        ></MovieInput>
        <MovieSearchBtn type="submit">Search</MovieSearchBtn>
      </form>
      {movies && <MovieList movies={movies} />}
      <Toaster />
    </>
  );
}
