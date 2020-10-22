import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

function FilmRow(props) {
  return (
    <div className="film-row" onClick={() => { props.handleDetailsClick(props.film) }}>
      <FilmPoster src={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`} alt={`Poster of the ${props.film.release_date.split("-")[0]} film ${props.film.title}`} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{props.film.release_date.split("-")[0]}</p>
      </div>
      <Fave onFaveToggle={() => { props.onFaveToggle(props.film) }} isFave={props.isFave} />
    </div>
  )
}

export default FilmRow