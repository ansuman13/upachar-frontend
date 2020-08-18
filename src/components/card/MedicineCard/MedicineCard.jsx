import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, CardContent, Grid } from '@material-ui/core'
import './MedicineCard.css'

const MedicineCard = (props) => {

  
    return (
        <div>
            <Card style={{ 'flexBasis': '100%', 'height':'100%'}} elevation={2} >
                <div className="MedicineCard-image-container">
                    <img src={props.image} className="DisplayCard-medicine-image" />
                </div>
                <CardContent>
                    <Typography variant="body1" component="p">
                        <b>{props.title}</b>
                    </Typography>
                    <Typography variant="subtitle2">
                        {props.manufacturer}
                    </Typography>
                    <Typography variant="overline" component="p">
                        NPR. {props.price} per {props.UOM}
                    </Typography>
                    <Link to={props.url}>View Details</Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default MedicineCard