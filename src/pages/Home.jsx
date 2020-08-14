import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/search/search'
import TopProducts from '../components/TopProducts/TopProducts'
import TopMedicines from '../components/TopMedicines/TopMedicines'
import { Container } from '@material-ui/core'
import Asynchronous from '../components/autocomplete/Asynchronous'

const Home = (props) => {

  const BASE_URL = 'https://upachar.com.np/'

  const showProductList = (query) => {
    props.history.push(`/product/list/?q=${query}`)
  }

  return (
    <div>
      <Navbar />
      <Container>
      <div className="Home-search">
        <Search submit={showProductList} />
      </div>
        <TopProducts limit={5} />
        <TopMedicines limit={5} />
      </Container>
    </div>
  )
}

export default Home