import { useState } from 'react';
import './App.scss';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';


function App() {
  const [checkedArr, setCheckedArr] = useState([])
  const [searchBeer, setSearchBeer] = useState("");
  const getBeerSearch = (event) => {
    setSearchBeer(event.target.value);
  }

  // const highAbv = 
  const handleChecked = (event) => {
    if (checkedArr.includes(event.target.id)){
      const index = checkedArr.indexOf(event.target.id)
      setCheckedArr(checkedArr.splice(index, 1))
    } else {
      setCheckedArr([...checkedArr].push(event.target.id))
    }
  }


  return (
    <div className="app">
     <NavBar getBeerSearch={getBeerSearch} handleChecked={handleChecked}/>
     <Main searchBeer={searchBeer} checkedArr={checkedArr}/>
    </div>
  );
}

export default App;
