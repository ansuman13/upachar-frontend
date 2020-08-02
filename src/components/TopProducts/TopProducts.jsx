import React, { Component } from 'react'
import DisplayCard from '../card/DisplayCard'
import './TopProducts.css'
import { v4 as uuidv4 } from 'uuid'

export default class TopProducts extends Component {

    state = {
        loading: true,
        data: []
    };
    BASE_URL = 'https://upachar.com.np/'

    async componentDidMount() {
        const url = this.BASE_URL + this.props.url
        const url_response = await fetch(url)
        const response = await url_response.json()
        this.setState({ data: response.data })
        this.setState({ loading: false })
    }

    render() {
        return (
            <div>
                {this.state.loading ?
                    <div>Loading...</div> :
                    <div className="TopProducts-cards">
                        {this.state.data.map((item) => <DisplayCard key={uuidv4()}
                            url={'/products/details/' + item.id}
                            title={item.name}
                            manufacturer={item.manufacturer}
                            min_price={item.min_price}
                            UOM={item.UOM}
                            category={item.category}
                            discount_percentage={item.discount_percentage}
                            tags={item.tags}
                            image={`${this.BASE_URL}/${item.thumbnails}`} />
                        )}
                    </div>
                }

            </div>
        )
    }
}
