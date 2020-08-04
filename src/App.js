import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
      <Router>
        <div>Movie Card Library CRUD</div>
        <header>
          <Link to="/movies/new">Adicionar Cartao</Link>
        </header>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route
            path="/movies/new"
            render={(props) => <NewMovie {...props} movie={NewMovie} />}
          />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route
            path="/movies/"
            render={(props) => <MovieDetails {...props} />}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
  );
}

export default App;
