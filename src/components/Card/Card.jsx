import React from 'react'
import './Card.scss';

const Card = (props) => {
    const { image, name, description, abv } = props


  return (
    <div className='card'>
      <div className='card__image-container'>
        <img className='card__image' src={image} alt={name} />
      </div>
      <h1 className='card__name'>{name}</h1>
      <p className='card__description'>{description}</p>
      <button className='card__abv'>{abv}</button>
    </div>
  )
}

export default Card