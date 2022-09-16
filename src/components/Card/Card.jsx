import React from 'react'
import './Card.scss';

const Card = (props) => {
    const { image, name, description, abv } = props


  return (
    <div className='card'>
      <div className='card__image-container'>
        <img className='card__image' src={image} alt={name} />
      </div>
      <h2 className='card__name'>{name}</h2>
      <div className='card__description'>{description}</div>
      <div className='card__abv'>
      <button className='card__button'>{abv}%</button>
      </div>
    </div>
  )
}

export default Card