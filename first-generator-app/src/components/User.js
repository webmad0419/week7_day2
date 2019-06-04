import React from 'react'

const User = props => {
    return (
        <article>
            <h2 style={{ backgroundColor: props.theColor }}>
                Hello, {props.firstName} {props.lastName}!
      </h2>
            <img src={props.image} width="370" height="300" />
        </article>
    )
}

export default User