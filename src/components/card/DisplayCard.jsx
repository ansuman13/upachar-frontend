import React from 'react'

export default function DisplayCard(props) {
    return (
        <div>
                <div class="col s12 m2">
                    <div class="card">
                        <div class="card-image">
                            <img src={props.image} alt='banner-card'/>
                                <span class="card-title">{props.title}</span>
                        </div>
                    </div>
                </div>
            </div>

    )
}
