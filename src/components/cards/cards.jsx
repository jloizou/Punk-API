import React, { useState } from 'react'

const Cards = (props) => {

    let [beers, setBeers] = useState([])

    fetch('https://api.punkapi.com/v2/beers')
    .then(data => data.json())
    .then(data => { 
        setBeers(data)
    })



    return (
        <div>
            
        </div>
    )
}

export default Cards


//to do this, first look at the data and how it could be filtered with the selects