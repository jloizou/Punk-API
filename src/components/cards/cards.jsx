import React, { useState } from 'react'

const Cards = (props) => {
   const {selectsFilter, searchFilter} = props


   let beersArr = []
    const filteredBeers= (searchFilter) => { 
        fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchFilter}`)
        .then(data => data.json())
        .then(data => { 
            beersArr.push(data);
        })
    }

 console.log(beersArr)

filteredBeers(selectsFilter, searchFilter)

    return (
        <div>
            {/* {
                beers.forEach((beer) => { 
                    return( 
                        <div>
                            <p>{beer.name}</p>
                            <img>{beer.img}</img>
                            <p>{beer.description}</p>
                        </div>
                    )
                })
            } */}
        </div>
    )
}


export default Cards

//notes when finished with morning 
//this is broken, the fetch will continuously loop as the set state will trigger a rerender 
//how to fix: 
//andy mentioned 'use effects' unsure of what that is, chase up with him if needed 
//test the if statement one at a time, make sure those work 
//set the result of the if statement to something chill and test it 
//once that is done, then look at ways to stop the loop
// one way could be to replace the state with an empty array, this would not trigger a rerender hopefully


 
//all outcomes: 
//no input or select 
//only input 
//only select 
//both done