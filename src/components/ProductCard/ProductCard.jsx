import React from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function DisplayCard({ title,
    UOM,
    price,
    image,
    url,
    manufacturer }) {
    const BASE_URL = 'http://www.upachar.com.np'
    return (

        <div className="card" style={{ 'width': '248px', height: '428px', 'margin': '20px' }}>
            <div className="card-image waves-effect waves-block waves-light" style={{ 'cursor': 'default' }}>
                <img className="card-image" src={`${BASE_URL}/${image}`} style={{ 'width': '248px', height: '248px' }} />
            </div>
            <Link to={url}>
                <div className="card-content">
                    <span className="card-title grey-text text-darken-4">{title}</span>
                    <div>By: {manufacturer}</div>
                    <div>Price : NPR.{price} per {UOM} </div>
                </div>
            </Link>
        </div>

    )
}


export default withRouter(DisplayCard)