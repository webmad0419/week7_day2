import React from 'react'

import Card from './Card'

const CitiesList = ['Madrid', 'Barcelona', 'Gijón', 'Gijón']
export const listItems = CitiesList.map((city, idx) => <li key={idx}>{city}</li>)


const movies = [
    { title: "Jurassic Park", director: "Steven Spielberg" },
    { title: "Sharknado", director: "Anthony C. Ferrante" },
    { title: "Campamento Flippy", director: "Amenábar" },
    { title: "Titanic", director: "James Cameron" }
]
export const MoviesList = () => {
    return (
        <ul>
            {movies.map((movie, idx) => <Card key={idx} title={movie.title} director={movie.director} />)}
        </ul>
    )
}