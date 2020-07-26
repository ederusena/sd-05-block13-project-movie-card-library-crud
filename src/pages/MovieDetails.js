import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: null,
    };
  }
  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((arrMovie) =>
      this.setState({
        isLoading: false,
        movie: arrMovie,
      }));
  }
  render() {
    // Change the condition to check the state
    const { isLoading, movie } = this.state;
    if (isLoading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}
MovieDetails.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
