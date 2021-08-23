import React from 'react'
import './Card.css'
import Board from './Board'
function Card(props) {
    return (
        <div className="card" >
            <img src={props.image} id={props.id} onClick={props.onClick} ></img>
        </div>
        )
}

export default Card
