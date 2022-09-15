import { useState } from 'react';
import './App.scss';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';


function App() {

  const [searchBeer, setSearchBeer] = useState("");
  const getBeerSearch = (event) => {
    setSearchBeer(event.target.value);
  }

  return (
    <div className="app">
     <NavBar getBeerSearch={getBeerSearch}/>
     <Main searchBeer={searchBeer}/>
    </div>
  );
}

export default App;
