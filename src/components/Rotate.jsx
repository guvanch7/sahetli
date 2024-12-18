import React, { useState } from "react";
import {
    MDBInput,
    MDBTextArea,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdb-react-ui-kit";
import '../App.css'
import './rotate.css'
import work2 from '../assets/image/work2.jpg'


const Rotate = () => {


    return (
        <MDBContainer className='flip-container-wrapper mt-4 text-black'>
            <MDBRow className='align-items-center'>
                <MDBCol lg={3} className="flip-container">
                    <div className="flip-card">
                        {/* Передняя сторона */}
                        <div className="flip-card-front">
                            <h5>Expertise & Experience</h5>
                            <div className="line mb-3"></div>
                            <img src={work2} className="img-fluid rounded-7" alt="" />
                        </div>
                        {/* Задняя сторона */}
                        <div className="flip-card-back">
                            <h5>More Information</h5>
                            <p>This is the back of the card, with additional details or information.</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol lg={3} className="flip-container">
                    <div className="flip-card">
                        {/* Передняя сторона */}
                        <div className="flip-card-front">
                            <h5>Efficient Project Management</h5>
                            <div className="line mb-3"></div>
                            <img src={work2} className="img-fluid rounded-7" alt="" />
                        </div>
                        {/* Задняя сторона */}
                        <div className="flip-card-back">
                            <h5>More Information</h5>
                            <p>This is the back of the card, with additional details or information.</p>
                        </div>
                    </div>
                </MDBCol>
               
                <MDBCol lg={3} className="flip-container  ">
                    <div className="flip-card">
                        {/* Передняя сторона */}
                        <div className="flip-card-front">
                            <h5>Comprehensive Services</h5>
                            <div className="line mb-3"></div>
                            <img src={work2} className="img-fluid rounded-7" alt="" />
                        </div>
                        {/* Задняя сторона */}
                        <div className="flip-card-back">
                            <h5>More Information</h5>
                            <p>This is the back of the card, with additional details or information.</p>
                        </div>
                    </div>
                </MDBCol>
                 
                <MDBCol lg={3} className="flip-container">
                    <div className="flip-card">
                        {/* Передняя сторона */}
                        <div className="flip-card-front">
                            <h5>Quality Assurance</h5>
                            <div className="line mb-3"></div>
                            <img src={work2} className="img-fluid rounded-7" alt="" />
                        </div>
                        {/* Задняя сторона */}
                        <div className="flip-card-back">
                            <h5>More Information</h5>
                            <p>This is the back of the card, with additional details or information.</p>
                        </div>
                    </div>
                </MDBCol>
                 
                  
            </MDBRow>
        </MDBContainer>
    );
};

export default Rotate;
