import React from 'react';

const improvedCard = props => {
    return (
        <li className="movies-list-item">
            <h2>{props.title}</h2>
            <p>Director: {props.director}</p>

            {props.hasOscars ? <p>¡Ganó algunos Oscars!</p> : <p>Sin Orcars</p>}

            {/*
            {props.hasOscars && <p>¡Ganó algunos Oscars!</p>}
            {!props.hasOscars && <p>¡No ganó algunos Oscars!</p>}
            */}

            <button onClick={props.removeMovieFromState}>Eliminar</button>
        </li>
    )
};

export default improvedCard;