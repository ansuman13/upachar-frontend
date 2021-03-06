import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Parser from 'html-react-parser';
import './ProductDetails.css'
import Search from '../../components/search/search';
import ProductCard from '../../components/ProductCard/ProductCard'
import { v4 as uuid4 } from 'uuid'
import { withRouter } from 'react-router-dom';
import { Container, Grid, CircularProgress } from '@material-ui/core';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            recommendedData: [],
            id: this.props.id
        }
        this.fetchData = this.fetchData.bind(this)
    }

    BASE_URL = 'https://upachar.com.np/'

    async fetchData() {
        console.log('fetchData')
        const id = this.props.id
        const url = `${this.BASE_URL}api/v1/pharmacy/products/${id}`
        const response = await fetch(url)
        const data = await response.json()
        const recommendedUrl = this.BASE_URL + `api/v1/pharmacy/related-products/${id}`
        const recommendedResponse = await fetch(recommendedUrl)
        const recommendedData = await recommendedResponse.json()
        console.log('component did mount recommended product', recommendedData.data)
        this.setState({ data: data.data, loading: false, recommendedData: recommendedData.data })
    }


    getImages = () => {
        return this.state.data.images.map(
            function (item, self) {
                const BASE_URL = this.BASE_URL.substring(0, this.BASE_URL.length - 1);
                return <img key={uuid4()} src={`${BASE_URL}${item}`} alt="image" style={{ 'height': '248px', 'width': '248px' }} />
            }, this)
    }

    getVariants = () => {
        return this.state.data.variants.map((item) => <div key={uuid4()}><ul>
            <p><b>Variant:</b> {item.name} <br /> <strong>Npr: </strong> {item.price}/{this.state.data.UOM.name}</p>
        </ul>
        </div>, this)
    }

    getRecommendedProducts() {
        return this.state.recommendedData.map((item) => {
            return <ProductCard
                title={item.name}
                UOM={item.UOM}
                price={item.price}
                image={item.thumbnails[0]}
                url={`/products/details/${item.id}`}
                manufacturer={item.manufacturer}
            />
        })
    }

    render() {
        if (this.state.loading) {
            { this.fetchData() }
            return <div class="ProductDetails-progress-container">
                <div class="ProductDetails-progress-center">
                    <CircularProgress />
                </div>
            </div>
               

        }
        return (
            <div>
                <Navbar />
                <div className="Product-details-searchbar">
                    <Search />
                </div>

                <Container>
                    <Grid container>
                        <Grid item md={12} xs={12}>
                            <h2 className='ProductDetails-title'>{this.props.match.params.id} {this.state.data.name}</h2>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item className="ProductDetails-image" sm={12} md={6}>
                            <div className='ProductDetails-product-images'>{this.getImages()}</div>
                        </Grid>

                        <Grid item className="ProductDetails-variants"
                            direction="column"
                            md={3}>
                            <div className='ProductDetail-variants'>{this.getVariants()}</div>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item sm={12}>
                            <div className='ProductDetails-details'>{Parser(this.state.data.details)}</div>
                        </Grid>
                    </Grid>

                    <Grid container>

                        <h4>Recommendations:</h4>
                        <Grid item xs={12}>
                            <div className="ProductDetails-see-also">
                                {this.getRecommendedProducts()}
                            </div>
                        </Grid>
                    </Grid>

                </Container>
            </div >
        )
    }
}

export default withRouter(ProductDetails)