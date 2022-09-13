import React, { useState } from 'react'
import CardList from '../CardList/CardList'



const Main = () => {
    const [beerArr, setBeerArr] = useState([])
  const getData = async() => {
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    console.log(data);
    setBeerArr(data);
  }

  getData()


  return (
    <div>
        <CardList beerArr={beerArr}/>
    </div>
  )
}

export default Main