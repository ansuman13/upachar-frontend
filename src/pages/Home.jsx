import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/search/search'
import TopProducts from '../components/TopProducts/TopProducts'
import Slider from "react-slick";
const Home = () => {

  const BASE_URL = 'https://upachar.com.np/'

  return (
    <div>
        <Navbar />
      <div className="Home-search">
        <Search />
      </div>
      <TopProducts/>
      {/* <TopMeicines/> */}

    </div>
  )
}

export default Home