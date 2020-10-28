import React from "react";
import { 
  MDBCarousel, MDBCarouselCaption, MDBCarouselInner, 
  MDBCarouselItem, MDBView, MDBMask, MDBBtn, MDBNavLink } from "mdbreact";

import './Carousel.css'

const CarouselPage = () => {
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
              className="d-block w-100 img-carousel"
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="First slide"
              height="600px"
              style={{objectFit:'cover'}}
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <MDBNavLink to="/rooms/">
              <MDBBtn outline color="white" size="md">Nuestro Departamentos</MDBBtn>
            </MDBNavLink>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 img-carousel"
              src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Second slide"
              height="600px"
              style={{objectFit:'cover'}}
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <MDBNavLink to="/rooms/">
              <MDBBtn outline color="white" size="md">Nuestro Departamentos</MDBBtn>
            </MDBNavLink>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 img-carousel"
              src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Third slide"
              height="600px"
              style={{objectFit:'cover'}}
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <MDBNavLink to="/rooms/">
              <MDBBtn outline color="white" size="md">Nuestro Departamentos</MDBBtn>
            </MDBNavLink>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;