import React, { Component } from 'react'
import './search.css'
import { withRouter } from 'react-router-dom';
import { TextField, InputAdornment, IconButton, Button } from '@material-ui/core';
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
        <form className="Search-search-bar" onSubmit={this.handleSubmit}>
            <TextField mt={3}
                id="query"
                name="query"
                label="Search for Medicine and Health Products"
                required
                fullWidth
                autoFocus
                variant="outlined"
                value={this.state.query}
                onChange={this.handleChange}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button 
                        variant="contained"
                        type="submit" >Search
                        </Button>
                      </InputAdornment>
                    ),
                  }}
             />

        </form>

    )
}
}


export default withRouter(Search)