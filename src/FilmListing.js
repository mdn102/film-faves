import React, { useState } from 'react';
import FilmRow from './FilmRow';

function FilmListing(props) {
  const [filter, setFilter] = useState('all');
  const [faves, setFaves] = useState([]);

  let handleFilterClick = (filter) => {
    console.log(`Setting filter to ${filter}`);
    setFilter(filter);
  }

  let handleFaveToggle = (film) => {
    let faveIndex = faves.indexOf(film);
    if (faveIndex < 0) {
      setFaves([...faves, film]);
    } else {
      let newFaves = [...faves];
      newFaves.splice(faveIndex, 1);
      setFaves(newFaves);
    }
  }

  let filmsToDisplay = filter === 'all' ? props.films : faves;
  let allFilms = filmsToDisplay.map(film => {
    return (
      <FilmRow
        film={film}
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(film)}
        handleDetailsClick={props.handleDetailsClick} />
    )
  })

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => {
          handleFilterClick("all")
        }}>
          ALL
            <span className="section-count">{props.films.length}</span>
        </div>
        <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => {
          handleFilterClick("faves")
        }}>
          FAVES
        <span className="section-count">{faves.length}</span>
        </div>
      </div>

      {allFilms}
    </div>
  )
}

export default FilmListing