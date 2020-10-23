import React, { useState } from 'react';
import filterBar from "./components/filterBar"
import beerDisplay from "./components/display"

import './App.css';

function App() {

  const [searchFilter, setSearchFilter] = useState([])
  const [selectsFilter, setSelectsFilter] = useState([])

  const searchFilterFtn = (param) => { 
    setSearchFilter(searchFilter.push(param))
  }

  const selectsFilterFtn = (param) => { 
    setSelectsFilter(selectsFilter.push(param))
  }


  return (
    <div className="App">
      <filterBar selectsFilterFtn={selectsFilterFtn} searchFilterFtn={searchFilterFtn}/> 
      <beerDisplay />
     
    </div>
  );
}

export default App;
