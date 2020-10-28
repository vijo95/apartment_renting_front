import React, { Component } from 'react'
import Slider from './Slider'
import Selector from './Selector'
import './Filters.css'

export default class Filters extends Component {
  render() {
    return (
      <section className="filter-container">
        <h4 style={{textAlign:'center', marginBottom:'30px'}}>Filtrar Departamentos</h4>
        <form className="filter-form">
        {/* room price */}
        <div className="form-group">
          <Slider 
            roomFilter={this.props.roomFilter}
          />
        </div>
        {/* end room price */}

        {/* number of guests */}
        <div className="form-group">
          <Selector 
            roomFilter={this.props.roomFilter}
          />
        </div>
        {/* end number of guests */}
      </form>
      </section>
    )
  }
}