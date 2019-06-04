import React from 'react'
import logo from '../logo.svg'

import Title from './Title'
import Description from './Description'

const header = () => {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Title text="Bienvenid@s a React!" />
            <Description text="React es divertido y misterioso" />
        </header>
    )
}

export default header