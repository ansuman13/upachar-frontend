import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import qs from 'qs'
import Search from '../../components/search/search'
import ProductCard from '../../components/ProductCard/ProductCard'
import './ProductList.css'
import { withRouter } from 'react-router-dom'
import DisplayCard from '../../components/card/ProductCard/DisplayCard'
import MedicineCard from '../../components/card/MedicineCard/MedicineCard'
import { Grid, Button, Box, Checkbox, Typography, Link, Slider } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import Pagination from '@material-ui/lab/Pagination';

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            filters: [],
            loading: true,
            params: [],
            price: [],
            pages: 7,
            currentPage: 1
        }
    }
    BASE_URL = 'https://www.upachar.com.np'
    MIN_PRICE = 0
    MAX_PRICE = 100

    async componentDidMount() {
        const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
        console.log('query from', query.from)
        if (query.from) {
            this.setState({ currentPage: Number(query.from) })
        }
        console.log('query', this.props.location)
        const url = this.BASE_URL + `/api/v1/pharmacy/get-suggestions/${this.props.location.search}`
        const response = await fetch(url)
        const data = await response.json()
        let filters = data.success[0].filters
        const rawFilters = []
        for (let item in filters) {
            const itemBucket = filters[item].buckets
            const itemName = { [item]: itemBucket }
            rawFilters.push(itemName)
        }
        this.setState({
            items: data.success[0].items,
            filters: rawFilters,
            loading: false,
            query: query.q,
            pages: Math.ceil(data.success[0].total_hits / 10)
        })
        console.log('items', this.state.items)
        let priceArray = []
        const temp0 = this.state.items
        for (let i in temp0) {
            priceArray.push(temp0[i].price)
        }
        this.MAX_PRICE = Math.max.apply(Math, priceArray)
        this.MIN_PRICE = Math.min.apply(Math, priceArray)
        this.setState({ price: [this.MIN_PRICE, this.MAX_PRICE] })
    }

    showProductList = (query) => {
        this.props.history.push(`/product/list/?q=${query}`)
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.state.params !== prevState.params) {
            // console.log('params changed')
            this.props.history.push(`/product/list/?q=${this.state.query}&${this.state.params[0]}`)
        }
    }



    getItems = () => {
        const items = Object.values(this.state.items)
        if (items.length < 1) {
            return <div>
                <Typography variant="h4">
                    Sorry! No item found for searched keyword:
                <b>{this.state.query}</b> <br />
                   Try Modifing the search term, or leave a message at <Link>infinia@gmail.com</Link>
                </Typography>
            </div>
        }
        return items.map((item) => {
            if (item.index === 'pharma_product_index_dev') {
                return <DisplayCard
                    title={item.name}
                    UOM={item.UOM}
                    price={item.price}
                    image={this.BASE_URL + item.thumbnails[0]}
                    url={`/products/details/${item.id}`}
                    manufacturer={item.manufacturer}
                />
            }
            else if (item.index === 'pharma_medicine_index_dev') {
                return <MedicineCard
                    url={'/medicine/details/' + item.id}
                    title={item.name}
                    manufacturer={item.manufacturer}
                    price={item.price}
                    UOM={item.UOM}
                    compositions={item.compositions}
                    image={`${this.BASE_URL}/${item.thumbnails[0]}`} />
            }
        }
        )
    }

    showFilters = () => {
        console.log('filters in showFilters... ', this.state.filters)

        return this.state.filters.map((item) =>
            <div key={Object.keys(item)}>
                <p> <b> {item[Object.keys(item)].length > 0 && Object.keys(item)} </b></p>

                {item[Object.keys(item)].length > 0 && item[Object.keys(item)].map((bucketItem) =>
                    <p style={{ 'margin': 0 }}>
                        <label>
                            <Checkbox onChange={this.handleFilterChange} value={`${Object.keys(item)}=${bucketItem['key']}`} />
                            <span> {bucketItem['key']} ({bucketItem['doc_count']})</span>
                        </label>
                    </p>
                )}
            </div>
        )



    }

    handleFilterChange = (e) => {
        let params = []

        if (e.target.checked) {
            params.push(e.target.value)
        }
        else {
            const index = params.indexOf(e.target.value)
            if (index > -1) {
                params.splice(index, 1)
            }
        }
        this.setState({ params })
        console.log('filter-Changed', params)
    }

    handlePriceChange = (event, newValue) => {
        console.log('PriceHandler', newValue)
        this.setState({ price: newValue })
        const newParams = this.state.params
        newParams.push(`&price-gte=${newValue[0]}&price-lte=${newValue[1]}`)
        this.setState({ params: newParams })
    };

    handlePageChange = (event, newValue) => {
        this.props.history.push(`/product/list/?q=${this.state.query}&from=${newValue}`)
        console.log('handle page change called', newValue)
    }

    valuetext = (value) => {
        return `${value}°C`;
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="ProductList-searchbar">
                    <Search />
                </div>
                <Grid container className='row' className="ProductList-container">
                    <Grid xs={12} md={3} className="ProductList-filters">

                        {/* Filters_here */}
                        {this.state.loading ? <Box pt={0.5}>
                            <Skeleton width="50%" />
                            <Skeleton width="60%" />
                            <Skeleton height="150px" />
                            <Skeleton width="60%" />
                        </Box> :
                            <div className="ProductList-filters-list">
                                {/* <Typography id="range-slider" gutterBottom>
                                    Price Between (NPR)
                                </Typography> */}
                                {/* <Slider
                                    value={this.state.price}
                                    style={{
                                        'width': '80%',
                                        'display': 'flex',
                                        'margin': 'auto'
                                    }}
                                    min={this.MIN_PRICE}
                                    max={this.MAX_PRICE}

                                    onChange={this.handlePriceChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={this.valuetext}
                                /> */}
                                {this.state.filters && this.showFilters()}
                            </div>
                        }
                    </Grid>

                    <Grid sm={12} md={8} className="ProductList-items">
                        {this.state.loading ? <div className="ProductList-Skeletons">
                            <Skeleton variant="rect" width="248px" height="250px" />
                            <Skeleton variant="rect" width="248px" height="250px" />
                            <Skeleton variant="rect" width="248px" height="250px" />
                        </div> :
                            <div className="ProductList-items-card">{this.getItems()}</div>
                        }

                        {this.state.loading ? <Skeleton width="60%" /> :
                            <div className="ProductList-pagination">
                                <Pagination className='pagination' onChange={this.handlePageChange}

                                    page={this.state.currentPage}
                                    color="primary"
                                    count={this.state.pages} size="small" />
                            </div>
                        }

                    </Grid>

                </Grid>

            </div>
        )
    }
}

export default withRouter(ProductList)