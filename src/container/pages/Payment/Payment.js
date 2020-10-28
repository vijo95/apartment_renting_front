import React, { Component } from 'react'
import Cookie from 'universal-cookie'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { customerReservations } from '../../../constants'
import { 
  MDBCard, MDBCardBody, MDBCol,
  MDBListGroup, MDBListGroupItem
} from 'mdbreact';
import PaymentForm from './PaymentForm'
import './Payment.css'


const monthsInSpanish = [
  'Enero', 'Febrero', 'Marzo',
  'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre',
  'Octubre', 'Noviembre', 'Diciembre'
]

export default class Payment extends Component {

  state = {
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

  translateMonth = (month) => {
    for (let i = 1; i <= 12; i++) {
      return monthsInSpanish[parseInt(month)]
    }
  }

  translateDateToWordFormat = (date) => {
    return `${date.split('-')[2]} de 
      ${this.translateMonth(date.split('-')[1])} 
      del ${date.split('-')[0]}`
  }

  render() {
    
    const { depto_reservation_list, reservation, customer_cookie_id } = this.state

    if(reservation === undefined){
      return <Redirect to='/' />
    } else if(reservation !== null){
      if(reservation.total <= 0){
        return <Redirect to='/' />
      }
    }

    return (
      <div className="pago" 
        style={{padding:'120px 0px 60px 0px', backgroundColor:'#E1F5FE'}}>
        <h1 
          style={{
            textAlign:'center', 
            marginBottom:'30px',
            color:'#40C4FF',
            fontWeight:'bold'}}>
          Pago
        </h1>
        <MDBCol>
          <MDBCard className="form-card-payment">
            <MDBCardBody style={{backgroundColor:'white'}}>
              { reservation !== null && reservation !== undefined ?
                <PaymentForm 
                  amount={reservation.total}
                  reservation_id={reservation.id}
                  customer_cookie_id={customer_cookie_id}
                /> : null
              }
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="form-card-payment" style={{marginTop:'15px'}}>
          { depto_reservation_list !== null && reservation !== null && 
            reservation !== undefined && depto_reservation_list !== undefined ?
            <MDBListGroup>
              { depto_reservation_list !== null ?
                depto_reservation_list.map((depto,index) => 
                  <MDBListGroupItem key={index}>
                    <div>
                      <h6 className="my-0">{depto.depto_name}</h6>
                      <small className="text-muted">
                        Del <span style={{color:'#00B0FF'}}>
                          {this.translateDateToWordFormat(depto.start_date)}
                        </span><br/>
                        al <span style={{color:'#00B0FF'}}>
                          {this.translateDateToWordFormat(depto.end_date)}
                        </span> 
                      </small>
                      <span style={{float:'right'}} className="text-muted">Subtotal: ${depto.total}</span>
                    </div>
                  </MDBListGroupItem>
                ) : null }
              <MDBListGroupItem>
                <span style={{fontWeight:'bold'}}>Total</span>
                <span style={{fontWeight:'bold',float:'right'}}>
                  ${reservation.total}
                </span>
              </MDBListGroupItem>
            </MDBListGroup> : null
          }
          </MDBCard>
        </MDBCol>
      </div>
    )
  }
}
