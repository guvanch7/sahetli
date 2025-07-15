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

const Form = () => {


    return (
        <MDBContainer className="py-5">
            <MDBRow className="justify-content-center">
                <MDBCol >
                    <form >
                        <input
                            placeholder="Full Name"
                            type="text"
                            name="fullName"
                            className="mb-3 form"
                            required

                        />
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            className="mb-3 form"
                            required
                        />
                        <input
                            placeholder="Phone Number"
                            type="tel"
                            name="telephone"
                            className="mb-3 form"
                            required
                        />
                        <textarea
                            placeholder="Message "
                            name="message"
                            className="mb-3 form"
                            rows={4}
                            required
                        />
                        <div className="text-center d-grid gap-2  mx-auto"  >
                            <MDBBtn type="submit" color="orange" className="text-black fw-bolder" style={{backgroundColor:'#ff6600'}}>
                                Send Message
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Form;
