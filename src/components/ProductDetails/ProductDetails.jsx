import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Parser from 'html-react-parser';
import './ProductDetails.css'
import TopProducts from '../TopProducts/TopProducts';
import Search from '../search/search';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
        }
    }

    BASE_URL = 'https://upachar.com.np/'

    async componentDidMount() {
        const id = this.props.match.params.id
        const url = `${this.BASE_URL}api/v1/pharmacy/products/${id}`
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ data: data.data, loading: false })
        console.log(this.state.data)
    }

    getImages = () => {
        return this.state.data.images.map(
            function (item, self) {
                const BASE_URL = this.BASE_URL.substring(0, this.BASE_URL.length - 1);
                return <img src={`${BASE_URL}${item}`} alt="image" style={{ 'height': '248px', 'width': '248px' }} />
            }, this)
    }

    getVariants = () => {
        return this.state.data.variants.map((item) => <div><ul>
            <p><b>Variant:</b> {item.name} <br /> <strong>Npr: </strong> {item.price}/{this.state.data.UOM.name}</p>
        </ul>
        </div>, this)
    }

    // async getRecommendedProducts(){
    //     const url = this.BASE_URL + `api/v1/pharmacy/related-products/${this.props.match.params.id}`
    //     const response2 = await fetch(url)
    //     // const data = await response.json()
    //     console.log('recommended products', url)
    //     return <p>hello</p>
    // }

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <Navbar />
                <Search />
                <div className="container">
                    <h2 className='ProductDetails-title'>{this.state.data.name}</h2>
                    <div className="row">
                        <div className="col sm12 md6">
                            <div className='ProductDetails-product-images'>{this.getImages()}</div>
                        </div>

                        <div className="col sm12 md3">
                            <div className='ProductDetail-variants'>{this.getVariants()}</div>
                        </div>
                    </div>
                    <div className='ProductDetails-details'>{Parser(this.state.data.details)}</div>
                    <div className="ProductDetails-see-also">
                        <h3>Recommendations:</h3>
                        {/* {this.getRecommendedProducts()} */}
                    </div>
                </div>
            </div>
        )
    }
}
