import React from 'react';
import { 
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, 
  MDBNavbarToggler, MDBCollapse, MDBNavItem, 
  MDBNavLink } from 'mdbreact';
import ReservationsModal from '../ReservationsModal/ReservationsModal'
import './Navbar.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <MDBNavbar fixed="top" dark expand="md" scrolling transparent>
            <MDBNavbarBrand href="/">
              <strong>Inicio</strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/rooms/">
                  <i className="fas fa-building ml-3 mr-2"></i>
                  Departamentos
                </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/checkout/">
                    <i className="fas fa-handshake ml-3 mr-2"></i>
                    Checkout
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <ReservationsModal />
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;