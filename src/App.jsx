import { useState } from 'react';
import './App.scss';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';


function App() {

  const [searchBear setSearchBeer] = useState("");
  const getBeerSearch = (event) => {
    setSearchBeer(event.target.value)
  }

  return (
    <div className="app">
     <NavBar />
     <Main />
    </div>
  );
}

export default App;
