import React, { Component } from 'react';
import './App.css';

import { listItems, MoviesList } from './components/stateless/ListDemo'
import DynamicMoviesList from './components/stateful/DynamicList'

class App extends Component {

  render() {

    return (
      <div className="App">
        <h3>Listado de ciudades:</h3>
        <ul>{listItems}</ul>

        <hr></hr>

        <h3>Listado de películas stateless:</h3>
        <MoviesList />

        <hr></hr>

        <h3>Listado de películas stateful:</h3>
        <DynamicMoviesList />
      </div>
    )
  }
}

export default App;
