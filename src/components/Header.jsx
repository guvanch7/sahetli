import { useState, useEffect } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCard,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBRow,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import backgr from '../assets/1.jpg'
import header from '../assets/image/header.jpg'

import '../App.css';


function Header() {
    return (
        <>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[{ image: { backgr }, speed: -15 }]}
                    className="p-5 aspect-[2/1] bg-image parallax-header"
                    style={{ backgroundImage: `url(${backgr})` }}
                >
                    <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <MDBRow className="mt-7 justify-content-lg-center h-100">
                            <MDBCol lg={7} md={7} sm={12} className="positionary text-white  mt-7">
                                {/* <h1 className="mb-3 display-3 fw-bolder companyName ">CONSTRUCTION </h1>
                                <h1 className="mb-3 display-3 fw-bolder companyName ">MANUFACTORY</h1>
                                <h1 className="mb-3 display-3 fw-bolder companyName">SERVICE</h1>
                                <h1 className="mb-3 display-3 fw-bolder companyName">COMPANY</h1> */}
                                <h1 className='fw-bolder  display-3'>Önümçilik, Hyzmat, Hil - Bizden!</h1>
                                {/* <h5 className='mt-3'>CONSTRUCTION MANUFACTORY SERVICE COMPANY</h5> */}
                                <button class="download-btn mt-2 pixel-corners">
                                    <div class="button-content">
                                        <div class="svg-container">
                                            <svg
                                                class="download-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div class="text-container">
                                            <div class="text">Download PDF Catalog</div>
                                        </div>
                                    </div>
                                </button>
                            </MDBCol>





                        </MDBRow>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>

        </>
    )






}


export default Header