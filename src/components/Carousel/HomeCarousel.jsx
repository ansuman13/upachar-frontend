import React from 'react'
import { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import Skeleton from '@material-ui/lab/Skeleton'

function HomeCarousel() {

    const [images, setimages] = useState([])
    const [Loading, setLoading] = useState(true)

    const BASE_URL = 'https://upachar.com.np/'

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${BASE_URL}api/v1/management/carousel-images`)
            const data = await response.json()
            console.log('carousel-data', data.data)
            setimages(data.data)
            setLoading(false)
        }
        fetchData()
    },[])


    return (
        <div className="Home-carousel">
            { Loading ? <Skeleton variant="rect" animation="wave" width={700} height={400} />: 
                <Carousel>
                    {images.map((item) => <img key={item.id} src={BASE_URL + item.images} />)}
                </Carousel>
            }
        </div>
    )
}
export default HomeCarousel

