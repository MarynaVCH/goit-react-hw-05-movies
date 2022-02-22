import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListMovie, ImgMovie } from './MovieList.styled';
import propTypes from 'prop-types';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ListMovie>
      {movies &&
        movies.map(movie => (
          <Link
            key={movie.id}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <ImgMovie
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt=""
            />
          </Link>
        ))}
    </ListMovie>
  );
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};
