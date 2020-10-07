import React, { Component } from 'react'
import DisplayCard from '../card/ProductCard/DisplayCard'
import './TopProducts.css'
import { v4 as uuidv4 } from 'uuid'
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { connect } from 'react-redux';


class TopProducts extends Component {

    state = {
        loading: true,
    };
    BASE_URL = 'https://upachar.com.np/'

    async componentDidMount() {

        const { top5Products, dispatch } = this.props
        dispatch({type:'FETCH_N_TOP_PRODUCTS', payload:5})


        const url_2 = `api/v1/pharmacy/hitcount/products?top=${this.props.limit}`
        const url = this.BASE_URL + url_2
        const url_response = await fetch(url)
        const response = await url_response.json()
        // this.setState({ data: response.data })
        this.setState({ loading: false })
        // console.log('top-products data here is the ', response.data)
    }

    render() 
    {
        console.log('hello this is top5products',this.props)
        return (
            <div className="TopProducts-product-list">
                <Typography variant="h4">
                    Popular Products
                </Typography>
                {this.state.loading ?
                    <div className="TopProducts-loading-skeleton">
                       <Skeleton variant="rect" animation="wave" width={248} height={248} />
                        <Skeleton variant="rect" animation="wave" width={248} height={248} />
                        <Skeleton variant="rect" animation="wave" width={248} height={248} />
                        <Skeleton variant="rect" animation="wave" width={248} height={248} />
                        <Skeleton variant="rect" animation="wave" width={248} height={248} /> 
                    </div>
                    :
                    <div className="TopProducts-cards">
                        {this.props.top5Products.map((item) => <DisplayCard key={uuidv4()}
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

const mapStateToProps = (state) => {
    return {
        'top5Products':state.topProduct.top5Products
    }
}

export default connect(mapStateToProps)(TopProducts)