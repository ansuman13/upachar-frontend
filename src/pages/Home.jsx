import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/search/search'
import TopProducts from '../components/TopProducts/TopProducts'
import TopMedicines from '../components/TopMedicines/TopMedicines'
import { Container, Grid } from '@material-ui/core'
import HomeCarousel from '../components/Carousel/HomeCarousel'

const Home = (props) => {

  const BASE_URL = 'https://upachar.com.np/'

  

  const showProductList = (query) => {
    props.history.push(`/product/list/?q=${query}`)
  }

  return (
    <div>
      <Navbar />
      <Container>

        <Grid container className="Home-search">
          <Grid item xs={12}>
            <Search submit={showProductList} />
          </Grid>
        </Grid>

        <Grid container className="Home-search">
          <Grid item xs={12}>
            <HomeCarousel />
          </Grid>
        </Grid>




        <TopProducts limit={5} />
        <TopMedicines limit={5} />
      </Container>
    </div>
  )
}

export default Home