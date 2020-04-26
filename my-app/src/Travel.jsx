import React from 'react';

function Travel(props) {
  const { name, imageUrl, locationUrl } = props;
  return (
    <li className='travel-item'>
      <img className='travel-image' src={imageUrl} alt={name} />
      <span>{name}</span> <br />
      <a href={locationUrl}> Check the location </a>
    </li>
  );
}

export default Travel;
