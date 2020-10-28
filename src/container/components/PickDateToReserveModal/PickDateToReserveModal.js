import React, { Component } from 'react';
import axios from 'axios'
import { reserveDepto } from '../../../constants'
import { 
  MDBContainer, MDBBtn, MDBModal, 
  MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';
import DatePickerRange from '../DatePickerRange/DatePickerRange'
import Cookie from 'universal-cookie'
import './PickDateToReserveModal.css'

class ModalPage extends Component {
  state = {
    modal13: false,

    customer_cookie_id: null,
    start_date: null,
    end_date: null,

    submit: false
  }

  componentDidMount(){
    const cookie = new Cookie();
    this.setState({
      customer_cookie_id: cookie.get('customer_id')
    })
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  getStartEndDate = (start_date,end_date) => {
    this.setState({
      start_date: start_date,
      end_date: end_date
    })
  }

  handleSubmitDeptoReservation = (event) => {
    event.preventDefault()
    const {
      customer_cookie_id, 
      start_date, 
      end_date,
    } = this.state

    if(customer_cookie_id === null || start_date === null || end_date === null){
      return
    }     

    axios
      .post(reserveDepto,{
        depto_id: parseInt(this.props.depto_id),
        customer_cookie_id: this.state.customer_cookie_id,
        start_date: [
          parseInt(this.state.start_date.split('/')[2]),
          parseInt(this.state.start_date.split('/')[0]),
          parseInt(this.state.start_date.split('/')[1]),
        ],
        end_date: [
          parseInt(this.state.end_date.split('/')[2]),
          parseInt(this.state.end_date.split('/')[0]),
          parseInt(this.state.end_date.split('/')[1]),
        ]
      })
      .then(res => {
        if(res.data.message === "New Reservation"){
          window.location.reload('false')
        } else if(res.data.message === "Already taken"){
          var hideMessageAlreadyTaken = document.getElementById("taken")
          if(hideMessageAlreadyTaken !== null){
            hideMessageAlreadyTaken.classList.remove("hideMessageAlreadyTaken")
          }
        } else if(res.data.message === "Already passed"){
          var hideMessageAlreadyPassed = document.getElementById("passed")
          if(hideMessageAlreadyPassed !== null){
            hideMessageAlreadyPassed.classList.remove("hideMessageAlreadyTaken")
          }
        }
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    const { start_date, end_date } = this.state

    return (
      <MDBContainer style={{textAlign:'center', marginTop:'30px'}}>
        <MDBBtn  
          color="primary" onClick={this.toggle(13)}>
            Hacer Reserva
        </MDBBtn>
        <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)} position="center">
          <MDBModalHeader toggle={this.toggle(13)}>
            Tiempo de Estadía <br/>
          </MDBModalHeader>
          <MDBModalBody>
            <DatePickerRange 
              depto_id={this.props.depto_id}
              getStartEndDate={this.getStartEndDate}
            />
          </MDBModalBody>
          <span style={{color:'red'}} id="taken" className="hideMessageAlreadyTaken">
            Alguien ha reservado en esos días antes que usted, 
            reinicie la página para ver los dias en rojo actualizados
          </span>
          <span style={{color:'red'}} id="passed" className="hideMessageAlreadyTaken">
            No se puede reservar para un día que ya pasó
          </span>
          <p><strong>
            El último día es cuando usted debe desalojar el departamento
          </strong></p>
          <MDBModalFooter className="date-picker-modal-footer">
            <MDBBtn color="warning" onClick={this.toggle(13)}>
              <i className="far fa-times-circle mr-2"></i>Cerrar
            </MDBBtn>
            { start_date === null || end_date === null ? null :
              <form onSubmit={this.handleSubmitDeptoReservation}>
                <MDBBtn type="submit" color="default">
                  Reservar<i className="fas fa-handshake ml-2"></i>
                </MDBBtn>
              </form>
            }
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;