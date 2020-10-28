import React, { Component } from 'react'

import axios from 'axios'
import { deptoDetail } from '../../../constants'

import CarouselModal from '../../components/CarouselModal/CarouselModal'
import PickDateToReserveModal from '../../components/PickDateToReserveModal/PickDateToReserveModal'
import './SingleRoom.css'

export default class SingleRoom extends Component {

 state = {
    depto_id: this.props.match.params.depto_id,
    depto_detail: null,
  }

  componentDidMount() {
    const {depto_id} = this.state
    axios
      .post(deptoDetail,{
        depto_id: depto_id
      })
      .then(res => {
        this.setState({
          depto_detail: res.data.depto
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    const { depto_detail } = this.state

    return (
      <div className="single-room-container">
        { depto_detail !== null ?
          <>
            <section className="single-room">
            <h1 style={{textAlign:'center', margin:'20px'}}>{depto_detail.name}</h1>
              <CarouselModal 
                img1={depto_detail.imageURL1}
                img2={depto_detail.imageURL2}
                img3={depto_detail.imageURL3}
              />
              <PickDateToReserveModal depto_id={depto_detail.id} />
              <div className="single-room-info">
                <article className="desc">
                  <h3>Detalles</h3>
                  <p>{depto_detail.description}</p>
                </article>
                <article className="info">
                  <h3>Info</h3>
                  <h6>Precio: ${depto_detail.price_day}</h6>
                  <h6>Capacidad: {depto_detail.capacity} Personas</h6>
                </article>
              </div>
            </section>
            <section className="room-extras">
              <h6>Extras</h6>
              <ul className="extras">
                <li>♦ Lorem</li>
                <li>♦ Ipsum</li>
                <li>♦ Nullam</li>
              </ul>
            </section>
          </> : null
        }
      </div>
    )
  }
}
