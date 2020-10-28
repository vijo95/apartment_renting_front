import React, { Component } from 'react'
import './Room.css'

export default class Room extends Component {
  render() {
    return (
      <article className="room">
        <div className="img-container">
          <img alt="" src={this.props.img}/>
          <div className="price-top">
            <h6>${this.props.price}</h6>
          </div>
        </div>
        <p style={{color:'black'}} className="room-info">{this.props.name}</p>
      </article>
    )
  }
}
