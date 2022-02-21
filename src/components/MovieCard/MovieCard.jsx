import React from 'react';
import {
  MovieTitle,
  WrappMovie,
  ImageMovie,
  GenresList,
} from './MovieCard.styled';

export default function MovieCard({ movie }) {
  return (
    <WrappMovie>
      <ImageMovie
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <MovieTitle>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </MovieTitle>
        <p>User score: {movie.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres.map(genre => (
            <GenresList key={genre.name}>{genre.name}</GenresList>
          ))}
        </ul>
      </div>
    </WrappMovie>
  );
}
