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
                        <MDBRow className=" align-items-end justify-content-lg-end h-100">
                            <MDBCol lg={7} md={12} sm={12} className="positionary text-white  mt-7">
                                <h1 className='mb-3 fw-bolder  display-3'>Önümçilik, Hyzmat, Hil - Bizden!</h1>
                            </MDBCol>





                        </MDBRow>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>

        </>
    )






}


export default Header