import React, { Component } from 'react'

import axios from 'axios'
import { deptos } from '../../../constants'

import CarouselPage from '../../components/Carousel/Carousel'
import Services from '../../components/ServicesComponents/Services'
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms'

import './Home.css'
import '../../components/Carousel/Carousel.css'

export default class Home extends Component {

  state = {
    img1: null,
    img2: null,
    img3: null,

    name1: null,
    name2: null,
    name3: null,

    price1: null,
    price2: null,
    price3: null,
  }

  componentDidMount() {
    axios.get(deptos)
      .then(res => {
        this.setState({
          img1: res.data.depto_list[0].imageURL1,
          img2: res.data.depto_list[1].imageURL1,
          img3: res.data.depto_list[2].imageURL1,

          name1: res.data.depto_list[0].name,
          name2: res.data.depto_list[1].name,
          name3: res.data.depto_list[2].name,

          price1: res.data.depto_list[0].price_day,
          price2: res.data.depto_list[1].price_day,
          price3: res.data.depto_list[2].price_day,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="home">
        <CarouselPage />
        <FeaturedRooms
          price1={this.state.price1}
          price2={this.state.price2}
          price3={this.state.price3}

          name1={this.state.name1}
          name2={this.state.name2}
          name3={this.state.name3}

          img1={this.state.img1}
          img2={this.state.img2}
          img3={this.state.img3}/>
        <Services />
      </div>
    )
  }
}
