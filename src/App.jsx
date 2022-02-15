import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          {/* <MoviesPage /> */}
        </Route>

        <Route path="/movies/:moviesId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}
