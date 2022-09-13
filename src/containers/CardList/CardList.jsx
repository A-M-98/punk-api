import React from 'react'
import Card from '../../components/Card/Card'

const CardList = (props) => {
    const { beerArr } = props;
    const exampleBeer = beerArr[0]

  return (
    <div>
        {/* <Card image={image} name={name} description={description}/> */}
    </div>
  )
}

export default CardList