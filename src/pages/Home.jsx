import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Search from '../components/search/search'
import DisplayCard from '../components/card/DisplayCard'
import Slider from "react-slick";
const Home = () => {

  const BASE_URL = 'https://upachar.com.np/'

  return (
    <div>
        <Navbar />
      <div className="Home-search">
        <Search />
      </div>
      <div className="Home-cards row">
        <h3>Top Health Product this month::</h3>
        <DisplayCard title='Horlicks 20% off' image={`${BASE_URL}/media/product/images/Huggies_Diapers_Medium_Size.jpeg`} />
        <DisplayCard title='Horlicks 20% off' image={`${BASE_URL}/media/product/images/Huggies_Diapers_Medium_Size.jpeg`} />
        <DisplayCard title='Horlicks 20% off' image={`${BASE_URL}/media/product/images/Huggies_Diapers_Medium_Size.jpeg`} />
        <DisplayCard title='Horlicks 20% off' image={`${BASE_URL}/media/product/images/Huggies_Diapers_Medium_Size.jpeg`} />
        <DisplayCard title='Horlicks 20% off' image={`${BASE_URL}/media/product/images/Huggies_Diapers_Medium_Size.jpeg`} />
        <DisplayCard title='Horlicks 20% off' image={`${BASE_URL}/media/product/images/Huggies_Diapers_Medium_Size.jpeg`} />
        
      </div>
      
      <div className="Home-top-medicines row">
        <h3>Medicine sold here</h3>
        <DisplayCard title='Medicine' image={`${BASE_URL}/media/product/images/Huggies_Diapers_Medium_Size.jpeg`} />
      </div>

    </div>
  )
}

export default Home