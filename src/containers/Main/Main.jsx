import React, { useState, useEffect } from 'react'
import './Main.scss'
import CardList from '../CardList/CardList'



const Main = ({searchBeer}) => {
  const [beerArr, setBeerArr] = useState([]);

  
  const getData = async() => {
    const res = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    const data = await res.json()
    console.log(data);
    setBeerArr(data);
  }

  useEffect(() => {
    getData()
  },[])


  return (
    <div className='main'>
      <CardList beerArr={beerArr} searchBeer={searchBeer}/>
    </div>
  )
}

export default Main