import React from 'react'
import Card from '../../components/Card/Card'

const CardList = (props) => {
    const { beerArr } = props;
    // const exampleBeer = beerArr[0]
    // const {
    //   name,
    //   description,
    //   image_url
    // } = exampleBeer

  return (
    <div className='card-list'>
      {beerArr.map((beers) => {
        return (
          <Card 
          image={beerArr.image_url} 
          name={beerArr.name} 
          description={beerArr.description}/>
        )
      })
      }
    </div>
  )
}

export default CardList