import React, { Component } from 'react';

import Card from './ImprovedCard'

class DynamicMoviesList extends Component {

    constructor() {

        super()

        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
                { title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 },
                { title: "Campamento Flappy", director: "Almodóvar", hasOscars: true, IMDbRating: 9.9 }
            ],
            showOscarAwarded: false
        }
    }


    deleteMovie = idx => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(idx, 1)
        this.setState({
            movies: moviesCopy
        })
    }


    toggleMovies = () => {
        this.setState({ showOscarAwarded: !this.state.showOscarAwarded });
    }


    filteredMovies = undefined


    render() {

        this.filteredMovies = this.state.movies.filter(movie => movie.hasOscars == this.state.showOscarAwarded)

        return (
            <div>
                <button onClick={() => this.toggleMovies()}>
                    {this.state.showOscarAwarded ? 'Ocultar ganadoras del Oscar' : 'Mostrar ganadoras del Oscar'}
                </button>
                <ul className="movies-list">
                    {
                        this.filteredMovies.map((movie, idx) => <Card key={idx} {...movie} removeMovieFromState={() => this.deleteMovie(idx)} />)
                    }
                </ul>
            </div>
        )
    }
}

export default DynamicMoviesList