import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import './Service.css'
import constr from '../pages/assets/constrBg.jpg';
import serve from '../pages/assets/serve.jpg';
import manufactory from '../assets/image/manufactory.jpg';

const Service = () => {

    return (
        <MDBContainer className="py-5">
            <h1 className='text-black'>What we do</h1>

            <div className='d-flex'>
                <div className='line2'></div>
                <h6 className='logo-color'>Our Services</h6>
            </div>
            <MDBRow className="justify-content-center">

                <MDBCol md="4" className="mb-4">
                    <MDBCard className="shadow-lg border-0">
                        <MDBCardImage
                            src={constr}
                            position="top"
                            className="rounded-top card-image"
                        />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center text-black">Construction</MDBCardTitle>
                            <p className="text-muted">Building a future with solid foundations and innovative designs.</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md="4" className="mb-4">
                    <MDBCard className="shadow-lg border-0">
                        <MDBCardImage
                            src={manufactory}
                            position="top"
                            className="rounded-top card-image"
                        />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center text-black">Manufactory</MDBCardTitle>
                            <p className="text-muted  ">Crafting quality products with precision and reliability.</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md="4" className="mb-4">
                    <MDBCard className="shadow-lg border-0">
                        <MDBCardImage
                            src={serve}
                            position="top"
                            className="rounded-top card-image"
                        />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center text-black">Service</MDBCardTitle>
                            <p className="text-muted  ">Delivering solutions tailored to meet your unique needs.</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>


            </MDBRow>
        </MDBContainer>
    );
};

export default Service;
