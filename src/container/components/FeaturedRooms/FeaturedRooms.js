import React, { Component } from 'react'
import Room from './Room'
import { Link } from 'react-router-dom';
import './FeaturedRooms.css'

export default class FeaturedRooms extends Component {
  render() {
    return (
      <section className="featured-rooms">
        <h4 style={{textAlign:'center',marginBottom:'2rem'}}>Algunos de Nuestros Departamentos</h4>
        <div className="featured-rooms-center">
          <Link to="/rooms/">
            <Room
              price={this.props.price1}
              name={this.props.name1}
              img={this.props.img1}/>
          </Link>
          <Link to="/rooms/">
            <Room
              price={this.props.price2}
              name={this.props.name2}
              img={this.props.img2}/>
          </Link>
          <Link to="/rooms/">
            <Room 
              price={this.props.price3}
              name={this.props.name3}
              img={this.props.img3}/>
          </Link>
        </div>
      </section>
    )
  }
}
