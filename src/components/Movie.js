import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import { Link } from 'react-router-dom';

function Movie({id, year, title, summary, poster, genres}) {
  return (
  <Link to= {{
    pathname : '/detail',
    state : {
      id,
      year,
      title,
      summary,
      poster,
      genres
    }

  }}>
    <div className="movie">
      <img src={poster} alt ={poster} title ={title}/>
      <div className= "movie_data">
        <h3 className="movie__title">{title}</h3>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
          <li key = {index} className="movie__genre">
            {genre}
          </li>
          ))}
        </ul>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.slice(0,140)}...</p>
      </div>
    </div>
  </Link>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;