import React, { Component } from 'react'
import DisplayCard from '../card/DisplayCard'
import './TopProducts.css'

export default class TopProducts extends Component {

    state = {
        loading: true,
        data: []
    };
    BASE_URL = 'https://upachar.com.np/'

    async componentDidMount() {
        const url = this.BASE_URL + 'api/v1/pharmacy/hitcount/products?top=5'
        const url_response = await fetch(url)
        const response = await url_response.json()
        this.setState({ data: response.data })
        this.setState({ loading: false })
        console.log(this.state)

        // if(response.success===true){
        //     this.setState({data:response.data, loading:false})
        // }
    }



    render() {


        return (
            <p>
                {this.state.loading ?
                    <div>Loading...</div> :
                    <div className="TopProducts-cards">
                        {this.state.data.map((item) => <DisplayCard
                        url={'/products/details/'+item.id}
                        title={item.name}
                        manufacturer={item.manufacturer}
                        min_price={item.min_price}
                        UOM={item.UOM}
                        category={item.category}
                        discount_percentage={item.discount_percentage}
                        tags={item.tags}
                        image={`${this.BASE_URL}/${item.thumbnails}`}/>
                        )}
                    </div>
                }

            </p>
        )
    }
}
