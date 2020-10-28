import React,{Component} from 'react';
import { 
  MDBCard, MDBCardBody, MDBCardTitle, 
  MDBCardText, MDBCardHeader, 
  MDBContainer, MDBCardFooter,
} from "mdbreact";
import ConfirmDeleteDeptoReservationModal from '../ConfirmDeleteDeptoReservationModal/ConfirmDeleteDeptoReservationModal'

  const monthsInSpanish = [
    'Enero', 'Febrero', 'Marzo',
    'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'
  ]

class DeptoReservationCard extends Component {
  
  translateMonth = (month) => {
    for (let i = 1; i <= 12; i++) {
      return monthsInSpanish[parseInt(month)-1]
    }
  }

  translateDateToWordFormat = (date) => {
    return `${date.split('-')[2]} de 
      ${this.translateMonth(date.split('-')[1])} 
      del ${date.split('-')[0]}`
  }

  render() {
    
    return (
      <MDBContainer>
        <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
          <MDBCardHeader>
            {this.props.name}
            <ConfirmDeleteDeptoReservationModal 
              name={this.props.name}
              start_date={this.translateDateToWordFormat(this.props.start_date)}
              end_date={this.translateDateToWordFormat(this.props.end_date)}
              id={this.props.id}
            />
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Subtotal: ${this.props.total}</MDBCardTitle>
            <MDBCardText>
              Capacidad: {this.props.capacity} Personas
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            Del <span style={{color:'#00B0FF',fontWeight:'bold'}}>
              {this.translateDateToWordFormat(this.props.start_date)}
            </span><br/>
            al <span style={{color:'#00B0FF',fontWeight:'bold'}}>
              {this.translateDateToWordFormat(this.props.end_date)}
            </span>
          </MDBCardFooter>
        </MDBCard>
      </MDBContainer>
      )
  }
}

export default DeptoReservationCard;