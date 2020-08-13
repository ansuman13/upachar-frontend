import React, { Component } from 'react'
import MedicineCard from '../card/MedicineCard/MedicineCard'
import { v4 as uuidv4 } from 'uuid'
import { Typography } from '@material-ui/core';
import './TopMedicines.css'

class TopMedicines extends Component {

    state = {
        loading: true,
        data: []
    };
    BASE_URL = 'https://upachar.com.np/'

    async componentDidMount() {
        const url = this.BASE_URL + 'api/v1/pharmacy/hitcount/medicines?top=5'
        const url_response = await fetch(url)
        const response = await url_response.json()
        this.setState({ data: response.data })
        this.setState({ loading: false })
        console.log('top medicines', this.state.data)
    }

    render() {
        return (
            <div className="TopMedicines-medicine-list">
                <Typography variant="h4">
                    Top Medicines
                </Typography>
                
                {this.state.loading ?
                    <div>Loading...</div> :
                    <div className="TopMedicine-cards">
                        {this.state.data.map((item) => <MedicineCard key={uuidv4()}
                            url={'/medicine/details/' + item.id}
                            title={item.name}
                            manufacturer={item.manufacturer}
                            min_price={item.price}
                            UOM={item.UOM}
                            compositions={item.compositions}
                            image={`${this.BASE_URL}/${item.thumbnails[0]}`} />
                        )}
                    </div>
                }

            </div>
        )
    }
}

export default TopMedicines