import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import FooterPagePro from '../components/Footer/Footer'

export default class Layout extends Component {

  render() {
    
    return (
      <div>
        <Navbar cookie={this.props.cookie}/>

        {this.props.children}

        <FooterPagePro />
      </div>
    )
  }
}
