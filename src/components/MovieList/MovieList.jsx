import { Link, useLocation } from 'react-router-dom';
// import { FilmsItem, FilmsList } from './MovieList.styled';
import propTypes from 'prop-types';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};
