import React, { useState } from 'react';
import FilterBar from "./components/filterBar"
import BeerDisplay from "./components/display"
import styles from "./App.module.scss"

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
    <body>
   <div className={styles.page}>
    <div className={styles.filterBar}>
      <h1>Punk API Beer Search!</h1>
      <h3>Search for Beers below, by text and by max ABV content</h3>
      <FilterBar selectsFilterFtn={selectsFilterFtn} searchFilterFtn={searchFilterFtn}/> 
      </div>
      <div className={styles.beerDisplay}>
      <BeerDisplay searchFilter={searchFilter} selectsFilter={selectsFilter} searchFilterFtn={searchFilterFtn}/>
    </div>
    </div>
    
    <script src="/__/firebase/8.0.2/firebase-app.js"></script>
    <script src="/__/firebase/8.0.2/firebase-analytics.js"></script>
    <script src="/__/firebase/init.js"></script>
    </body>
  );
}

export default App;
