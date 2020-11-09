import React, { useState, useEffect } from 'react'
import styles from "./cards.module.scss"

const Cards = (props) => {
    const { selectsFilter, searchFilter } = props

    const [beers, setBeers] = useState([])

    useEffect(() => {
        handleSearch(selectsFilter, searchFilter)
        console.log("onchangeofprops")
    }, [selectsFilter, searchFilter])


    const handleSearch = () => {
        let url = "https://api.punkapi.com/v2/beers"

        if (searchFilter !== "" && selectsFilter.length == 0){ 
            url += `?beer_name=${searchFilter}`
            console.log("HERE@S THE SEARCH URL " + url)
        } 
        if (searchFilter == "" && selectsFilter.length !== 0) {
            url += `?abv_lt=${selectsFilter}`
            console.log("HERE@S THE SELECT URL " + url)
        } 
        if(selectsFilter.length !== 0 && searchFilter !== "")
            url += `?beer_name=${searchFilter}&abv_lt=${selectsFilter}`
            console.log("HERE@S THE SELECT URL " + url)

        fetch(url)
            .then(data => data.json())
            .then(data => {
                setBeers(data);
            }) 
    }
console.log(beers)

    return (
        
        <div className={styles.beersDisplay}>

                {
                    beers.map((beer) => (
                        <div className={styles.beerCont}>
                        <p className={styles.beerName}>{beer.name}</p>
                        <img src={beer.image_url}></img>
                        <p className={styles.description}>{beer.tagline}</p>
                        </div>
                       
                    ))
                }
        </div>
        
    )
}


export default Cards

//it works!!!!! what to do now: 
//go to selects filters and change the button titles 
//add labels to make it more intuitive