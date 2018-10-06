import React from 'react';

const Card = (props) => {
    return (
        <div class="card">
            <h2 className="character-name">{props.char.name}</h2>
            <p>Birth Year: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Eye Color: {props.char.eye_color}</p>
            <p>Hair Color: {props.char.hair_color}</p>
            <p>Skin Color: {props.char.skin_color}</p>
            <p>Mass: {props.char.mass} kg</p>
            <p>Height: {props.char.height} cm</p>
        </div>
    )
}

export default Card;