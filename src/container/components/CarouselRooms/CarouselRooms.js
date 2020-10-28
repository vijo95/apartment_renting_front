import React from "react";
import { 
  MDBCarousel, MDBCarouselInner, 
  MDBCarouselItem, MDBView, MDBMask } from "mdbreact";

import './CarouselRooms.css'

const CarouselRooms = () => {
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100 img-carousel-rooms"
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="First slide"
              height="300px"
              style={{objectFit:'cover'}}
            />
          <MDBMask overlay="black-light" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 img-carousel-rooms"
              src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Second slide"
              height="300px"
              style={{objectFit:'cover'}}
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 img-carousel-rooms"
              src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Third slide"
              height="300px"
              style={{objectFit:'cover'}}
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselRooms;