import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { 
  MDBCard, MDBCardBody, MDBCardTitle, 
  MDBCardText, MDBCardHeader, 
  MDBCardFooter, MDBBtn, MDBContainer 
} from "mdbreact";

class PaymentInfo extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCard style={{ width: "22rem", margin: "120px auto 60px auto" }} className="text-center">
          <MDBCardHeader color={this.props.color}>{this.props.header}</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>{this.props.title}</MDBCardTitle>
            <MDBCardText>
              {this.props.description} 
            </MDBCardText>
            <Link to="/">
              <MDBBtn color={this.props.color2} size="sm">
                Volver al inicio
              </MDBBtn>
            </Link>
          </MDBCardBody>
          <MDBCardFooter color={this.props.color}></MDBCardFooter>
        </MDBCard>
      </MDBContainer>
    );
  }
};

export default PaymentInfo;