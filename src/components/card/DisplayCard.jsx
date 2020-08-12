import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

function DisplayCard(props) {
    return (
        <Card style={{'flex-basis': '100%'}}>
            <img src={props.image} width="248px" height="248px" />
            <CardContent>
                <Typography variant="subtitle2" component="p">
                    <b>{props.title}</b>
                </Typography>
                <Typography variant="overline" component="p">
                    From NPR. {props.min_price}
                </Typography>
                <Link to={props.url}>View Details</Link>
            </CardContent>
        </Card>
    )
}

export default DisplayCard

{/* <div className="card" style={{ 'width': '248px', height: '428px' }}>
<div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={props.image} style={{ 'width': '248px', height: '248px' }} />
</div>
<div className="card-content">
    <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
    <div><Link to={props.url}>View Details</Link></div>
</div>
<div className="card-reveal">
    <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
    <div>By: {props.manufacturer}</div>
    <div>Price Starting from: NPR.{props.min_price} per {props.UOM} </div>
    {props.tags.map((item) => <div key={uuidv4()}>{item.name}</div>)}
</div>
</div> */}

