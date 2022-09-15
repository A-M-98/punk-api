import React from 'react'
import './CardList.scss'
import Card from '../../components/Card/Card'

const CardList = (props) => {
    const { beerArr, searchBeer } = props;
    // const exampleBeer = beerArr[0]

    const filterCards = (beerArr, searchBeer) => {
      return beerArr.filter((beer)=> beer.name.toLowerCase().includes(searchBeer.toLowerCase()))
    }

  return (
    <div className='card-list'>
      {beerArr.map((beer) => {
        return (
          <Card 
          image={beer.image_url} 
          name={beer.name} 
          description={beer.description}
          abv={beer.abv}
          />
        )
      })
      }
    </div>
  )
}

export default CardList