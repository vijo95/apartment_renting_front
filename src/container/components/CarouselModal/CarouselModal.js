import React, { Component } from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import CarouselModalImgs from '../CarouselModalImgs/CrouselModalImgs'
import './CarouselModal.css'

class CarouselModal extends Component {

  state = {
    modal4: false,
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <>
        <div className="single-room-images">
          <img
            style={{cursor:'pointer',boxShadow:'0 0 10px 10px rgba(0,0,0,0.2)'}}
            alt=""
            onClick={this.toggle(4)}
            src={this.props.img1}
          />
          <img
            style={{cursor:'pointer',boxShadow:'0 0 10px 10px rgba(0,0,0,0.2)'}}
            alt=""
            onClick={this.toggle(4)}
            src={this.props.img2}
          />
          <img
            style={{cursor:'pointer',boxShadow:'0 0 10px 10px rgba(0,0,0,0.2)'}}
            alt=""
            onClick={this.toggle(4)}
            src={this.props.img3}
          />
        </div>
        <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="lg">
          <MDBModalHeader toggle={this.toggle(4)}>
            Fotos
          </MDBModalHeader>
          <MDBModalBody>
            <CarouselModalImgs
              img1={this.props.img1}
              img2={this.props.img2}
              img3={this.props.img3}
            />
          </MDBModalBody>
        </MDBModal>
      </>
    );
  }
}

export default CarouselModal;