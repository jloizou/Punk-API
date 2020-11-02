import React, { useState } from 'react'
import styles from "./cards.module.scss"

const Cards = (props) => {
   const {selectsFilter, searchFilter} = props

   let selFil = selectsFilter;
   let searFil = searchFilter;
   let beersArr = [];


    const filteredBeers= (selectsFilter , searchFilter) => { 
        if(selectsFilter && searchFilter)
       { fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchFilter}&abv_lt=${selectsFilter}`)
        .then(data => data.json())
        .then(data => { 
            beersArr.push(data);
        })} else if (!selectsFilter && searchFilter){ 
            fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchFilter}`)
        .then(data => data.json())
        .then(data => { 
            beersArr.push(data);
        })
        } else { 
            fetch(`https://api.punkapi.com/v2/beers?abv_lt=${selectsFilter}`)
        .then(data => data.json())
        .then(data => { 
            beersArr.push(data);
        }) 
    }
}
filteredBeers(selFil, searFil)

console.log(beersArr)



    return (
        <div>
            {
                beersArr.map((beer) => ( 
                        <div className={styles.beerCard}>
                            <p>{beer.name}</p>
                            <img>{beer.img}</img>
                            <p>{beer.description}</p>
                        </div>
                    )
                )
            }
        </div>
    )
}


export default Cards

//All the filters work except for the middle one, for now thats ok and get to rendering them on the page
//