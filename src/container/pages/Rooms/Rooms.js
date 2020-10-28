import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios'
import { deptos } from '../../../constants'

import Room from '../../components/FeaturedRooms/Room'
import Filters from '../../components/Filters/Filters'
import CarouselRooms from '../../components/CarouselRooms/CarouselRooms'
import './Rooms.css'

export default class Rooms extends Component {

  state = {
    depto_list: null,
    depto_list_final: null,

    price_filter_value: 5000,
    guests_filter_value: 6,
  }

  componentDidMount() {
    axios.get(deptos)
      .then(res => {
        this.setState({
          depto_list: res.data.depto_list,
          depto_list_final: res.data.depto_list,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  roomFilter = (filter,value) => {
    var depto_list_temp = [...this.state.depto_list]
    if(filter === "price") {
      this.setState({price_filter_value: value})
      depto_list_temp = depto_list_temp.filter(
        depto => depto.price_day <= value &&
        depto.capacity <= this.state.guests_filter_value)
    } else if (filter === 'guests') {
      this.setState({guests_filter_value: value})
      depto_list_temp = depto_list_temp.filter(
        depto => depto.price_day <= this.state.price_filter_value &&
        depto.capacity <= value)
    } else {
      return
    }
    
    this.setState({
      depto_list_final: depto_list_temp
    })
  }

  render() {

    const { depto_list_final } = this.state

    return (
      <div className="all-rooms">
        <CarouselRooms />
        <Filters 
          roomFilter={this.roomFilter}
        />
        <section className="roomslist">
          <div className="roomslist-center">
            { depto_list_final !== null ?
              0 < depto_list_final.length ?
              depto_list_final.map((depto,index) => (
                <Link key={index} to={`/single-room/${depto.id}`}>
                  <Room
                    img={depto.imageURL1}
                    name={depto.name}
                    price={depto.price_day}
                  />
                </Link>
              )) : 
              <h3>No hay departamentos con esas características</h3> : null
            }
          </div>
        </section>
      </div>
    )
  }
}