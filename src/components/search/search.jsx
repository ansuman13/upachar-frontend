import React, { Component } from 'react'
import './search.css'
import { withRouter } from 'react-router-dom';
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            data: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    BASE_URL = 'https://upachar.com.np/'

    async handleChange(e) {
        const query = e.target.value
        if (e.target.value.length > 3) {
            console.log(e.target.value)
            const response = await fetch(`${this.BASE_URL}api/v1/pharmacy/get-suggestions/?q=${e.target.value}`)
            const data = await response.json()
            this.setState({ data: data.success, query })
            console.log(this.state.data)
        }
        else{
            this.setState({ query })

        }

    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({ query: e.target.value })
        this.props.history.push(`/product/list/?q=${this.state.query}`)
    }


render() {
    return (
        <nav className='Search-nav'>
            <div className="nav-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input id="search" type="search" onChange={this.handleChange} value={this.state.query} placeholder='Search for Products and Medicine' required />
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons">search</i>
                        </label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>

    )
}
}


export default withRouter(Search)