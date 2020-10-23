import React, { useState } from 'react';
import FilterBar from "./components/filterBar"
import BeerDisplay from "./components/display"

import './App.css';

function App() {

  let [searchFilter, setSearchFilter] = useState("")
  let [selectsFilter, setSelectsFilter] = useState([])

  const searchFilterFtn = (param) => { 
    setSearchFilter(param)
    }
  

  const selectsFilterFtn = (param) => { 
    setSelectsFilter(param);
    
  }


  return (
    <div className="App">
      <FilterBar selectsFilterFtn={selectsFilterFtn} searchFilterFtn={searchFilterFtn}/> 
      <BeerDisplay searchFilter={searchFilter} selectsFilter={selectsFilter}/>
     <p>{selectsFilter}</p>
    </div>
  );
}

export default App;
