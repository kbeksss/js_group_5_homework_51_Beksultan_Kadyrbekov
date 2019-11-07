import React from 'react';
import './MovieCard.css';

function MovieCard(props){
    return (
        <div className="card">
            <img src={props.link} alt={props.alt}/>
            <h3>{props.title}</h3>
            <h5>Дата выпуска: {props.year}</h5>
        </div>
    );
}

export default MovieCard;