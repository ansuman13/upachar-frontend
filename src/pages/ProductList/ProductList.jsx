import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import qs from 'qs'
import Search from '../../components/search/search'
import ProductCard from '../../components/ProductCard/ProductCard'
import './ProductList.css'

export default class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            filters: [],
            query: '',
            loading: true
        }
    }
    BASE_URL = 'https://www.upachar.com.np'

    async componentDidMount() {
        const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).q
        const url = this.BASE_URL + `/api/v1/pharmacy/get-suggestions/?q=${query}`
        this.setState({ query })
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ items: data.success[0].items, filters: data.success[0].filters, loading: false })
        console.log(response)
    }

    showProductList = (query) => {
        this.props.history.push(`/product/list/?q=${query}`)
    }

    getItems = () => {
        const items = Object.values(this.state.items)
        console.log(items)
        return items.map((item) => {
            if (item.index === 'pharma_product_index_dev') {
                return <ProductCard
                    title={item.name}
                    UOM={item.UOM}
                    price={item.price}
                    image={item.thumbnails[0]}
                    url={`/products/details/${item.id}`}
                    manufacturer={item.manufacturer}
                />
            }

        }
        )
    }

    showFilters = () => {

        const keys = Object.keys(this.state.filters)
        return keys.map((item) =>
            <p>
                <label>
                    <input type="checkbox" />
                    <span>{item}</span>
                </label>
            </p>
        )

        console.log('filter objects', Object.values(this.state.filters))
        // this.state.filters.map((item)=><select>item</select>)
    }


    render() {
        return (
            <div>
                <Navbar />
                <Search submit={this.showProductList} />
                <div className='row'>
                    <div className="col sm12 md3">
                        {this.state.loading ? <p>Loading...</p> :
                            <div className="ProductList-filters">filters;{this.showFilters()}</div>
                        }
                    </div>
                    <div className="col sm12 md8 container">
                        {this.state.loading ? <p>Loading...</p> :
                            <div className="ProductList-items">{this.getItems()}</div>
                        }

                    </div>

                </div>

            </div>
        )
    }
}
