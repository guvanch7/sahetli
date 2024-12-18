import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FsLightbox from "fslightbox-react";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBCard,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBCollapse,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';

import cert1 from '../pages/assets/certs/003.jpg'
import cert2 from '../pages/assets/certs/022.jpg'
import cert3 from '../pages/assets/certs/029.jpg'
import cert4 from '../pages/assets/certs/032.jpg'
import cert5 from '../pages/assets/certs/033.jpg'


function CarouselCert() {
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container mb-5">
            <h1 className="text-black">Our certificates</h1>

            <div className='d-flex'>
                <div className='line2'></div>
                <h6 className='logo-color'>Licenses & Certificates</h6>
            </div>
                <Slider {...settings}>

                    <MDBCol><img src={cert1} className="img-fluid" alt="" /></MDBCol>
                    <MDBCol><img src={cert2} className="img-fluid" alt="" /></MDBCol>
                    <MDBCol><img src={cert3} className="img-fluid" alt="" /></MDBCol>
                    <MDBCol><img src={cert4} className="img-fluid" alt="" /></MDBCol>
                    <MDBCol><img src={cert5} className="img-fluid" alt="" /></MDBCol>
                </Slider>
        </div>
    );
}

export default CarouselCert;
