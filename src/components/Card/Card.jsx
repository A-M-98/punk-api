import React from 'react'
import './Card.scss';

const Card = (props) => {
    const { image, name, description } = props


  return (
    <div className='card'>
        <img className='card__image' src={image} alt={name} />
        <h1 className='card__name'>{name}</h1>
        <p className='card__description'>{description}</p>
    </div>
  )
}

export default Card