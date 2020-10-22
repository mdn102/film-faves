import React, {useState} from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';



function App() {
  const [current, setCurrent] = useState({});
  const [films, setfilms] = useState(TMDB.films);

  let handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
    setCurrent(film);
  }

  return (
    <div className="film-library">
      <FilmListing films={films} handleDetailsClick={handleDetailsClick} />
      <FilmDetails film={current} />
    </div>
  );
}

export default App;
