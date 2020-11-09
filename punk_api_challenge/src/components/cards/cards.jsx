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




        // if (!selectsFilter && searchFilter) {
        //     fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchFilter}&abv_lt=${selectsFilter}`)
        //         .then(data => data.json())
        //         .then(data => {
        //             setBeers(data);
        //             console.log('if1')
        //         })
        // } else if (!selectsFilter  && searchFilter) {
        //     fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchFilter}`)
        //         .then(data => data.json())
        //         .then(data => {
        //             setBeers(data);
        //             console.log('if2')

        //         })
        // } else if (selectsFilter && !searchFilter) {
        //     fetch(`https://api.punkapi.com/v2/beers?abv_lt=${selectsFilter}`)
        //         .then(data => data.json())
        //         .then(data => {
        //             setBeers(data);
        //             console.log(data)

        //         })
        // } else {
        //     fetch(`https://api.punkapi.com/v2/beers`)
        //         .then(data => data.json())
        //         .then(data => {
        //             setBeers(data);
        //             console.log(selectsFilter)
        //             console.log(searchFilter)
        //         })
        // }
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

//plan for finishing the project: 
//pseudo code each if statement for what I want out of each 
//then write it up 
//look at any errors which come up and sort them