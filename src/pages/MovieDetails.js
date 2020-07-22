import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
    };
    this.updateState = this.updateState.bind(this);
  }

  async componentDidMount() {
    const data = await movieAPI.getMovies();
    this.updateState(data);
  }

  updateState(parametro) {
    this.setState({
      movies: parametro,
    });
  }

  render() {
    // Change the condition to check the state
    if (this.state.movies === '') return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/movies/:id/edit">EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
