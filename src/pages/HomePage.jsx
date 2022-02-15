import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { fetchTrendingMovies } from '../services/movies-api';
import * as moviesAPI from '../services/movies-api';
import Title from '../components/Title/Title';
import MovieList from '../components/MovieList/MovieList';
import Container from '../components/Container/Container';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <Container>
      {movies && (
        <>
          <Title text={'Trending today'} />
          <MovieList movies={movies} />
        </>
      )}
    </Container>
  );
}
