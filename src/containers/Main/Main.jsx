import React, { useState, useEffect } from 'react'
import './Main.scss'
import CardList from '../CardList/CardList'



const Main = ({searchBeer, url, acidic}) => {
  const [beerArr, setBeerArr] = useState([]);

  // const [url, setUrl] = useState("https://api.punkapi.com/v2/beers?page=1&per_page=80")
  
  const getData = async() => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    setBeerArr(data);
  }

  useEffect(() => {
    if (!acidic) {
      getData()
    } else {
      const acidicBeers = beerArr.filter((beer) => beer.ph < 4)
      setBeerArr(acidicBeers)
    }
  },[url, acidic])


  return (
    <div className='main'>
      <CardList beerArr={beerArr} searchBeer={searchBeer}/>
    </div>
  )
}

export default Main