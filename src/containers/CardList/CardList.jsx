import React from 'react'
import Card from '../../components/Card/Card'

const CardList = (props) => {
    const { beerArr } = props;
    // const exampleBeer = beerArr[0]

  return (
    <div className='card-list'>
      {beerArr.map((beer) => {
        return (
          <Card 
          image={beer.image_url} 
          name={beer.name} 
          description={beer.description}/>
        )
      })
      }
    </div>
  )
}

export default CardList