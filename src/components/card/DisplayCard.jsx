import React from 'react'
import { Link } from 'react-router-dom'

export default function DisplayCard(props) {
    console.log(props.tags)
    return (
        <div class="card" style={{ 'width': '248px', height: '428px' }}>
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={props.image} style={{ 'width': '248px', height: '248px' }} />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{props.title}<i class="material-icons right">more_vert</i></span>
                <p><Link to={props.url}>View Details</Link></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
                <p>By: {props.manufacturer}</p>
                <p>Price Starting from: NPR.{props.min_price} per {props.UOM} </p>
                {props.tags.map((item) => <p>{item.name}</p>)}
            </div>
        </div>

    )
}
