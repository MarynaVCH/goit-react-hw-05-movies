import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import MovieCard from '../components/MovieCard/MovieCard';

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchDetailsMovie(moviesId).then(setMovie);
  }, [moviesId]);

  return <>{movie && <MovieCard movie={movie} />}</>;
}
