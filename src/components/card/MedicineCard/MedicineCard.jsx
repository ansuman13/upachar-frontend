import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, CardContent } from '@material-ui/core'
import './MedicineCard.css'

const MedicineCard = (props) =>{

    // url={'/medicine/details/' + item.id}
    // title={item.name}
    // manufacturer={item.manufacturer}
    // min_price={item.price}
    // UOM={item.UOM}
    // compositions={item.compositions}
    // image={`${this.BASE_URL}/${item.thumbnails[0]}`} />
    return(
        <Card elevation={3} style={{'flex-basis': '100%'}} >
            <div className="image-container">
                <img src={props.image} className="DisplayCard-product-image"/>
            </div>
        <CardContent>
            <Typography variant="subtitle2" component="p">
                <b>{props.title}</b>
            </Typography>
            <Typography variant="body1">
                {props.manufacturer}
            </Typography>
            <Typography variant="outline">
                NPR. {props.price} per {props.UOM}
            </Typography> 
        </CardContent>
        </Card>
    )
}

export default MedicineCard