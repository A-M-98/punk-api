import React from 'react'
import './CardList.scss'
import Card from '../../components/Card/Card'

const CardList = (props) => {
    const { beerArr, searchBeer} = props;
    // const exampleBeer = beerArr[0]

    // beerArr.filter(beer => {
    //   if (searchBeer === ''){
    //     return beer;
    //   } else if (beer.name.toLowerCase().includes(searchBeer.toLowerCase())) {
    //     return beer;
    //   }
    // })

  return (
    <div className='card-list'>
      {beerArr.filter((beer) => 
      beer.name.toLowerCase().includes(searchBeer.toLowerCase())
      ).map((beer, index) => {
          return (
            <div key={index}>
            <Card 
            image={beer.image_url} 
            name={beer.name} 
            description={beer.description}
            abv={beer.abv}
            />
            </div>
          )
        })
      }
    </div>
  )
}

export default CardList