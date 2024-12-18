import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import './Service.css'
const Service = () => {
    const services = [
        {
            title: "Construction",
            image: "https://via.placeholder.com/300x200",
            description: "",
        },
        {
            title: "Manufactory",
            image: "https://via.placeholder.com/300x200",
            description: " ",
        },
        {
            title: "Service",
            image: "https://via.placeholder.com/300x200",
            description: "",
        },
    ];

    return (
        <MDBContainer className="py-5">
            <h1 className='text-black'>What we do</h1>

            <div className='d-flex'>
                <div className='line2'></div>
                <h6 className='logo-color'>Our Services</h6>
            </div>
            <MDBRow className="justify-content-center">
                {services.map((service, index) => (
                    <MDBCol key={index} md="4" className="mb-4">
                        <MDBCard className="shadow-lg border-0">
                            <MDBCardImage src={service.image} position="top" alt={service.title} className="rounded-top" />
                            <MDBCardBody>
                                <MDBCardTitle className="text-center text-black">{service.title}</MDBCardTitle>
                                <p className="text-muted text-center">{service.description}</p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    );
};

export default Service;
