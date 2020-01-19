import React from 'react';

const CardFilter = ({selectFilter, filter}) => {
  return (
    <div className="card-filter">
      <p onClick={() => selectFilter(filter.name)}>{filter.name}</p>
      <div
        id={filter.name}
        className={filter.name}>
        <img src="" alt=""></img>
      </div>
    </div>
  )
}

export default CardFilter;