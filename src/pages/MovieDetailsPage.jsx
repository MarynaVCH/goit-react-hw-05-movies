import { useState, useEffect } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  Route,
  Switch,
} from 'react-router-dom';

import {
  LinkButton,
  RouteLink,
} from '../components/MovieCard/MovieCard.styled';

import * as moviesAPI from '../services/movies-api';
import MovieCard from '../components/MovieCard/MovieCard';
import CastCard from '../components/CastCard/CastCard';
import ReviewCard from '../components/ReviewCard/ReviewCard';

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [review, setReview] = useState([]);

  useEffect(() => {
    moviesAPI.fetchDetailsMovie(moviesId).then(setMovie);
    moviesAPI.fetchCastsMovie(moviesId).then(setCast);
    moviesAPI.fetchReviewsMovie(moviesId).then(setReview);
  }, [moviesId]);

  return (
    <>
      <LinkButton to={location?.state?.from ?? '/'}>Go back</LinkButton>
      {movie && (
        <div>
          <MovieCard movie={movie} />
          <hr />
          <h4>Additional information</h4>
          <RouteLink
            to={{
              pathname: `${url}/cast`,
              state: { ...location.state },
            }}
          >
            Cast
          </RouteLink>
          <RouteLink
            to={{
              pathname: `${url}/reviews`,
              state: { ...location.state },
            }}
          >
            Reviews
          </RouteLink>
        </div>
      )}

      <hr />

      <Switch>
        <Route path={`${path}/cast`}>{cast && <CastCard casts={cast} />}</Route>

        <Route path={`${path}/reviews`}>
          {review.length === 0 ? (
            <p>We don't have any reviews for this movie.</p>
          ) : (
            <ReviewCard reviews={review} />
          )}
        </Route>
      </Switch>
    </>
  );
}
