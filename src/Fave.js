import React from 'react';

function Fave(props) {

  const handleClick = (e) => {
    e.stopPropagation()
    props.onFaveToggle()
  }

  return (
    <div className={`film-row-fave ${!props.isFave ? 'add_to_queue' : 'remove_from_queue'}`} onClick={handleClick} >
      <p className="material-icons">{props.isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
    </div>
  );
}

export default Fave