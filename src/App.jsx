import { useState } from 'react';
import './App.scss';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';


function App() {
  const [acidic, setAcidic] = useState(false)
  const [searchBeer, setSearchBeer] = useState("");
  const [url, setUrl] = useState("https://api.punkapi.com/v2/beers?page=1&per_page=80")
  const getBeerSearch = (event) => {
    setSearchBeer(event.target.value);
  }


  const handleAbv = (event) => {
    if(event.target.checked) {
      setUrl("https://api.punkapi.com/v2/beers?abv_gt=6")
    } else {
      setUrl("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    }
  }

  const handleClassic = (event) => {
    if(event.target.checked) {
      setUrl("https://api.punkapi.com/v2/beers?brewed_before=01-2010")
    } else {
      setUrl("https://api.punkapi.com/v2/beers?page=1&per_page=80")
    }
  }

  const handleAcidic = (event) => {
    if(event.target.checked) {
      setAcidic(true)
    } else {
      setAcidic(false)
    }
  }



  return (
    <div className="app">
     <NavBar getBeerSearch={getBeerSearch} handleAbv={handleAbv} handleClassic={handleClassic} handleAcidic={handleAcidic}/>
     <Main searchBeer={searchBeer} url={url} acidic={acidic}/>
    </div>
  );
}

export default App;
