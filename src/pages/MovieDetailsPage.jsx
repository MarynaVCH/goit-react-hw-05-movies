import { useState, useEffect } from 'react';
import {
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
  Route,
  Switch,
} from 'react-router-dom';

import * as moviesAPI from '../services/movies-api';
import MovieCard from '../components/MovieCard/MovieCard';
import CastCard from '../components/CastCard/CastCard';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import styles from '../pages/MoviesPage';

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
      {movie && (
        <>
          <MovieCard movie={movie} />

          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to={{
              pathname: `${url}/cast`,
              state: { ...location.state },
            }}
          >
            Cast
          </NavLink>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to={{
              pathname: `${url}/reviews`,
              state: { ...location.state },
            }}
          >
            Reviews
          </NavLink>
        </>
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
