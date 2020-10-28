import React, { Component } from 'react';
import axios from 'axios'
import Cookie from 'universal-cookie'
import { deleteDeptoReservation } from '../../../constants'
import { 
  MDBBtn, MDBModal, MDBModalBody, 
  MDBModalHeader, MDBModalFooter,
} from 'mdbreact';

class ConfirmDeleteDeptoReservationModal extends Component {
  state={
    modal: false,
    customer_cookie_id: ''
  }

  componentDidMount(){
    const cookie = new Cookie();
    this.setState({
      customer_cookie_id: cookie.get('customer_id')
    })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDelete = (event) => {
    event.preventDefault()
    axios
      .post(deleteDeptoReservation, {
        depto_reservation_id: this.props.id,
        customer_cookie_id: this.state.customer_cookie_id
      })
      .then(res =>{
        console.log(res.data)
        window.location.reload('false')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <>
        <i className="fas fa-times" onClick={this.toggle}
            style={{color:'red',float:'right', fontSize:'20px', cursor:'pointer'}}
        ></i>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} side position="top-right" >
          <MDBModalHeader toggle={this.toggle}>{this.props.name}</MDBModalHeader>
          <MDBModalBody style={{textAlign:'center'}}>
            Del <span style={{color:'#00B0FF',fontWeight:'bold'}}>
                {this.props.start_date}
              </span><br/>
              al <span style={{color:'#00B0FF',fontWeight:'bold'}}>
                {this.props.end_date}
              </span>
          </MDBModalBody>
          <MDBModalFooter style={{margin:'auto'}}>
            <MDBBtn 
              style={{fontSize:'0.6rem',margin:'.275rem',padding:'0.64rem 1.14rem'}} 
              color="success" onClick={this.toggle}>Continuar Viendo</MDBBtn>
            <form onSubmit={this.handleDelete}>
              <MDBBtn onClick={this.toggle}
                style={{fontSize:'0.6rem',margin:'.275rem',padding:'0.64rem 1.14rem'}} 
                type="submit" color="danger">
                  Eliminar Reservación
              </MDBBtn>
            </form>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

export default ConfirmDeleteDeptoReservationModal;