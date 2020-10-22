import React from 'react';

function FilmPoster(props) {
  return (
    <img src={props.src} alt={props.alt} />
  )
}

export default FilmPoster