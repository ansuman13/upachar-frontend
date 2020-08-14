import React, { Component } from 'react'
import './search.css'
import { withRouter } from 'react-router-dom';
import { TextField, InputAdornment, IconButton, Button, CircularProgress } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            data: [],
            loading: false,
            open: false,
            options: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    BASE_URL = 'https://upachar.com.np/'

    async handleChange(e) {
        e.persist()
        const query = e.target.value
        if (e.target.value.length > 3) {
            this.setState({ loading: true })
            console.log(e.target.value)
            const response = await fetch(`${this.BASE_URL}api/v1/pharmacy/autocomplete/?q=${e.target.value}`)
            // console.log('data',response)
            const data = await response.json()
            console.log('e.taget.value', e.target.value)
            this.setState({ data: data.data, loading: false, query:e.target.value })
            // console.log('data',data.data)

        }
        else {
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
            <Autocomplete
                id="asynchronous-demo"
                freeSolo
                style={{ width: '100%' }}
                open={this.setState.open}
                onOpen={() => {
                    this.setState({ open: true });
                }}
                onClose={() => {
                    this.setState({ open: false });
                }}
                getOptionSelected={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option}
                options={this.state.data}
                loading={this.state.loading}
                renderInput={(params) => (
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            {...params}
                            id="query"
                            value={this.state.query}
                            onChange={this.handleChange}
                            label="Search For Medicines and Health Products"
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {this.state.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                        <InputAdornment position='end'>
                                            <Button
                                                variant="contained"
                                                type="submit" >Search
                                            </Button>
                                        </InputAdornment>
                                    </React.Fragment>
                                ),
                            }}
                        />
                    </form>
                )}
            />)

        // return (
        //     <form className="Search-search-bar" onSubmit={this.handleSubmit}>
        //         <TextField mt={3}
        //             id="query"
        //             name="query"
        //             label="Search for Medicine and Health Products"
        //             required
        //             fullWidth
        //             autoFocus
        //             variant="outlined"
        //             value={this.state.query}
        //             onChange={this.handleChange}
        //             InputProps={{
        //                 endAdornment: (
        //                   <InputAdornment position='end'>
        //                     <Button 
        //                     variant="contained"
        //                     type="submit" >Search
        //                     </Button>
        //                   </InputAdornment>
        //                 ),
        //               }}
        //          />

        //     </form>

        // )
    }
}


export default withRouter(Search)