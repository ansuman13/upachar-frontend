import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/search/search'
import TopProducts from '../components/TopProducts/TopProducts'
import TopMedicines from '../components/TopMedicines/TopMedicines'

const Home = (props) => {

  const BASE_URL = 'https://upachar.com.np/'

  const showProductList = (query) => {
    props.history.push(`/product/list/?q=${query}`)
  }

  return (
    <div>
      <Navbar />
      <div className="Home-search">
        <Search submit={showProductList} />
      </div>
      <TopProducts url='api/v1/pharmacy/hitcount/products?top=5' />
      <TopMedicines />
    </div>
  )
}

export default Home