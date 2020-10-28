import React, { Component } from 'react';
import Cookie from 'universal-cookie'
import axios from 'axios'
import { customerReservations } from '../../../constants'
import { 
  MDBBtn, MDBModal, 
  MDBModalBody, MDBModalHeader, 
  MDBModalFooter, MDBNavLink 
} from 'mdbreact';
import { Link } from 'react-router-dom'
import DeptoReservationCard from '../DeptoReservationCard/DeptoReservationCard'


class ReservationsModal extends Component {
  
  state = {
    modal8: false,
    customer_cookie_id: null,

    depto_reservation_list: null,
    reservation: null,
  }

  componentDidMount(){
    const cookie = new Cookie();
    this.setState({
      customer_cookie_id: cookie.get('customer_id')
    }, this.getCustomerReservations(cookie.get('customer_id')))
  }
  
  getCustomerReservations = (customer_cookie_id) => {
    axios
    .post(customerReservations, {
      customer_cookie_id: customer_cookie_id
    })
    .then(res => {
      this.setState({
        reservation: res.data.reservation,
        depto_reservation_list: res.data.depto_reservation_list
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {

    const { depto_reservation_list, reservation } = this.state


    return (
      <>
        {depto_reservation_list !== null && reservation !== null && 
        depto_reservation_list !== undefined && reservation !== undefined ?
          <>
            <MDBNavLink to="#" onClick={this.toggle(8)}>
              <span className="badge badge-pill success-color ml-2 mr-2">
                {depto_reservation_list.length}
              </span> 
              Reservaciones
            </MDBNavLink>
            <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
              <MDBModalHeader toggle={this.toggle(8)}>
                Reservaciones 
                <span className="badge badge-pill success-color ml-2">
                  {depto_reservation_list.length}
                </span>
              </MDBModalHeader>
              <MDBModalBody>
               {depto_reservation_list.map((depto,index) => 
                <DeptoReservationCard 
                  key={index}
                  name={depto.depto_name}
                  total={depto.total}
                  capacity={depto.depto_capacity}
                  start_date={depto.start_date}
                  end_date={depto.end_date}
                  id={depto.id}
                />
               )}
              </MDBModalBody>
              <MDBModalFooter style={{margin:'auto'}}>
                <h3 style={{width:'100%', textAlign:'center', fontWeight:'bolder'}}>
                  Total: ${reservation.total}
                </h3>
                <div style={{width:'100%', textAlign:'center'}}>
                  <MDBBtn color="warning" onClick={this.toggle(8)}>
                    <i className="far fa-times-circle mr-2"></i> Cerrar
                  </MDBBtn>
                  <Link to="/checkout/">
                    <MDBBtn color="default" onClick={this.toggle(8)}>
                      <i className="fas fa-handshake mr-2"></i>
                      Checkout
                    </MDBBtn>
                  </Link>
                </div>
              </MDBModalFooter>
            </MDBModal>
          </> : null
        }
      </>
    );
  }
}

export default ReservationsModal;