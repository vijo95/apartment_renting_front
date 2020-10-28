import React,{Component} from "react";
import { 
  MDBCarousel, MDBCarouselInner, 
  MDBCarouselItem, MDBView, MDBMask } from "mdbreact";

class CarouselModalImgs extends Component {

  render(){

    return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={false}
      className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={this.props.img1}
                alt="First slide"
              />
            <MDBMask overlay="black-light" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={this.props.img2}
                alt="Second slide"
              />
            <MDBMask overlay="black-strong" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={this.props.img3}
                alt="Third slide"
              />
            <MDBMask overlay="black-slight" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    );
  }
}

export default CarouselModalImgs;