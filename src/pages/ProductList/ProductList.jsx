import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import qs from 'qs'
import Search from '../../components/search/search'
import ProductCard from '../../components/ProductCard/ProductCard'
import './ProductList.css'
import { withRouter } from 'react-router-dom'

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            filters: [],
            loading: true
        }
    }
    BASE_URL = 'https://www.upachar.com.np'

    async componentDidMount() {
        const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).q
        const url = this.BASE_URL + `/api/v1/pharmacy/get-suggestions/?q=${query}`
        const response = await fetch(url)
        const data = await response.json()
        console.log('filters')
        let filters = data.success[0].filters
        const rawFilters = []
        for (let item in filters) {
            const itemBucket = filters[item].buckets
            const itemName = { [item]: itemBucket }
            rawFilters.push(itemName)
        }
        this.setState({ items: data.success[0].items, filters: rawFilters, loading: false })
    }

    showProductList = (query) => {
        this.props.history.push(`/product/list/?q=${query}`)
    }

    getItems = () => {
        const items = Object.values(this.state.items)
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
        console.log('filters in showFilters... ', this.state.filters)
        return this.state.filters.map((item) =>
            <p key={Object.keys(item)}>
                    <p>{item[Object.keys(item)].length>0 && Object.keys(item)}</p>
                    { item[Object.keys(item)].length>0 && item[Object.keys(item)].map((bucketItem) => 
                    <label>
                        <input type="checkbox" />
                        <span>{bucketItem['key']}({bucketItem['doc_count']})</span> 
                    </label>
                    )}
            </p>
        )

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

export default withRouter(ProductList)