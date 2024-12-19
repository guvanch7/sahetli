import { useState, useEffect } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
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
import '../style.css';
import '../components/assets/graph.css'
import constr1 from '../pages/assets/constr/constr1.jpg'
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';


import Header from '../components/Header';
import Service from '../components/Service';
import CarouselCert from '../components/CarouselCert';
import Rotate from '../components/Rotate';
import Form from '../components/Form';
import Graph from '../components/Graph';
import work1 from '../assets/image/work1.png'
import work2 from '../assets/image/work2.jpg'
import contacts from '../assets/image/contacts.svg'
import work4 from '../assets/image/work3.png'
import work3 from '../assets/nightPlant.jpg'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {


    return (
        <>
            <Header />

            <Service />
            <ParallaxProvider>
                <ParallaxBanner className='bg-image'
                    layers={[
                        { image: constr1, speed: 40 },
                        {
                            speed: -15,
                            children: (
                                <div className='mask ' style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    marginTop: '60px'

                                }}>
                                    <MDBContainer>

                                        <h1 className='text-white mt-7' style={{ fontWeight: '600' }}>Biz Barada</h1>
                                        <div className='d-flex'>
                                            <div className='line2'></div>
                                            <h6 className='logo-color'>Biziň kompaniýamyz</h6>
                                        </div>
                                        <MDBCol className='text-white'>
                                            <p>Kärhananyň esasy maksady dünýa bazarynda öz ornuny ýokary hilli  önümçilikler we hyzmatlar bilen tanatmak. </p>
                                            <h6>Önümçilikde:</h6>
                                            <p>Esasan nebit-gaz himiýa we beýleki pudaklarda senagat howpsuzlygy, hill we ölçegleriň takyklygy boýunça hyzmat işlerini ýerine ýetirmek.  </p>
                                        </MDBCol>
                                    </MDBContainer>
                                </div>
                            ),
                        },
                    ]}
                    style={{ aspectRatio: '5 / 1' }}
                />
            </ParallaxProvider>

            <MDBContainer>
                <MDBRow>
                    <CarouselCert />
                </MDBRow>
            </MDBContainer>

            <MDBContainer>
                <MDBRow className=''>
                    <MDBCol className='mt-4' lg={6}>
                        <img src={work2} className='img-fluid rounded-8' alt="" />
                    </MDBCol>

                    <MDBCol className='mt-4' lg={6}>
                        <div className='d-flex'>
                            <div className='line2'></div>
                            <h6 className='logo-color'>Our Introductions</h6>
                        </div>
                        <h1 className='text-black ' style={{ fontWeight: '600' }}>Pioneering Construction Solutions Since 2024</h1>
                        <p>Specializing in both wet and dry hire of plant machinery
                            culvert installation and comprehensive civil engineering services
                        </p>


                        <div class="flex-wrapper">
                            <MDBCol className='d-flex align-items-center text-black' lg={6}>
                                <div class="single-chart">
                                    <svg viewBox="0 0 36 36" class="circular-chart orange">
                                        <path class="circle-bg"
                                            d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path class="circle"
                                            stroke-dasharray="95, 100"
                                            d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <text x="18" y="20.35" class="percentage">95%</text>
                                    </svg>
                                </div>
                                <p>Technical Proficiency</p>
                            </MDBCol>


                            <MDBCol className='d-flex align-items-center text-black' lg={6}>

                                <div class="single-chart">
                                    <svg viewBox="0 0 36 36" class="circular-chart blue">
                                        <path class="circle-bg"
                                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path class="circle"
                                            stroke-dasharray="90, 100"
                                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <text x="18" y="20.35" class="percentage">90%</text>
                                    </svg>
                                </div>

                                <p>Project Management</p>
                            </MDBCol>

                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Rotate />


            <MDBContainer className=' bg-black' fluid >
                <MDBContainer className='mt-5'>
                    <MDBRow className='align-items-center justify-content-center'>
                        <h1 className=' mt-5 text-white text-center'>Financial Performance Trends: Income, Cashflow, and Revenue</h1>
                        <MDBCol lg={6}>
                            <Graph />
                        </MDBCol>
                        <MDBCol lg={6}>
                            <img className='img-fluid' src={work3} alt="" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>


            <MDBContainer>
                <div className='mt-4 d-flex justify-content-center'>
                    <div className='line2 '></div>
                    <h6 className='logo-color'>Why Choose Us</h6>
                </div>
                <h1 className=' display-4 fw-bolder text-center text-black'>Crafting Your Success, Powered by Our Expertise</h1>

                <MDBRow className='align-items-center'>
                    <MDBCol className='text-black' lg={6}>
                        <h6 className='fw-bold'>Elevate with Expert Care</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque temporibus facilis voluptatum optio quam iusto accusamus dolorum a vero quidem libero nemo quod explicabo, nam dicta! Atque expedita aperiam officia!</p>
                        <h6 className='mt-5'>Elevaing Every Project</h6>
                        <p><MDBIcon fas icon="check tick  " /> Inspiring Excellence, Transforming Visions into Reality.</p>
                        <p><MDBIcon fas icon="check tick  " /> Inspiring Excellence, Transforming Visions into Reality.</p>
                        <p><MDBIcon fas icon="check tick  " /> Inspiring Excellence, Transforming Visions into Reality.</p>
                    </MDBCol>
                    <MDBCol lg={6}>
                        <img src={work4} className='img-fluid' alt="" />
                    </MDBCol>
                </MDBRow>

                <MDBRow className='mt-4'>
                    <MDBCol lg={6}>
                        <MDBCard className='shadow-5-strong'  >
                            <div className='d-flex align-items-center p-4'>
                                <div className='ps-2'>
                                    <MDBIcon fas icon="drafting-compass" style={{ color: '#ff6600' }} size='4x' />
                                </div>
                                <div className='d-block px-4'>
                                    <h5 className='text-black'>Exceptional Project Management</h5>
                                    <p>Exceptional project management ensures timely delivery, efficient resource allocation, clear communication, and successful achievment of goals.</p>
                                </div>

                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg={6}>
                        <MDBCard className='shadow-5-strong'  >
                            <div className='d-flex align-items-center p-4'>
                                <div className='ps-2'>
                                    <MDBIcon fas icon="drafting-compass" style={{ color: '#ff6600' }} size='4x' />
                                </div>
                                <div className='d-block px-4'>
                                    <h5 className='text-black'>Innovative Construction Techniques</h5>
                                    <p>Exceptional project management ensures timely delivery, efficient resource allocation, clear communication, and successful achievment of goals.</p>
                                </div>

                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer className=' mt-5 pt-5 bg-light pb-5' fluid>

                <MDBContainer className='mt-5 '>

                    <MDBRow className='justify-content-evenly align-items-center'>
                        <MDBCol lg={8}>
                            <div className='d-flex'>
                                <div className='line2'></div>
                                <h6 className='logo-color'>Our Projects</h6>
                            </div>
                            <h1 className='text-black fw-bold display-3'>Our Completed Works</h1>
                            <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis veritatis quidem odit modi aliquam corporis molestias!</p>
                        </MDBCol>
                        <MDBCol className='text-end' lg={4}>
                            <Link className='btn btn-lg btn-outline-dark fw-bold'>See All <MDBIcon fas icon="arrow-right" /></Link>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol lg={6}>

                            <MDBCard className="mb-3" style={{ maxWidth: '100%' }}>
                                <MDBRow className="g-0 align-items-center">
                                    <MDBCol md="4" className="d-flex justify-content-center align-items-center">
                                        <MDBCardImage
                                            src={work3}
                                            alt="Card image"
                                            style={{ width: '80%', height: 'auto', borderRadius: '5px' }}
                                        />
                                    </MDBCol>
                                    <MDBCol md="8">
                                        <MDBCardBody>
                                            <MDBCardTitle className='text-black'>Corporate Horizonts: Building Tomorrow's Workspaces</MDBCardTitle>
                                            <MDBCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci sit tempora!</MDBCardText>
                                            <MDBCardText>
                                                <small className="text-muted">August 12, 2024</small>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg={6}>

                            <MDBCard className="mb-3" style={{ maxWidth: '100%' }}>
                                <MDBRow className="g-0 align-items-center">
                                    <MDBCol md="4" className="d-flex justify-content-center align-items-center">
                                        <MDBCardImage
                                            src={work3}
                                            alt="Card image"
                                            style={{ width: '80%', height: 'auto', borderRadius: '5px' }}
                                        />
                                    </MDBCol>
                                    <MDBCol md="8">
                                        <MDBCardBody>
                                            <MDBCardTitle className='text-black'>Corporate Horizonts: Building Tomorrow's Workspaces</MDBCardTitle>
                                            <MDBCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci sit tempora!</MDBCardText>
                                            <MDBCardText>
                                                <small className="text-muted">August 12, 2024</small>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>


                        <MDBCol lg={6}>

                            <MDBCard className="mb-3" style={{ maxWidth: '100%' }}>
                                <MDBRow className="g-0 align-items-center">
                                    <MDBCol md="4" className="d-flex justify-content-center align-items-center">
                                        <MDBCardImage
                                            src={work3}
                                            alt="Card image"
                                            style={{ width: '80%', height: 'auto', borderRadius: '5px' }}
                                        />
                                    </MDBCol>
                                    <MDBCol md="8">
                                        <MDBCardBody>
                                            <MDBCardTitle className='text-black'>Corporate Horizonts: Building Tomorrow's Workspaces</MDBCardTitle>
                                            <MDBCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci sit tempora!</MDBCardText>
                                            <MDBCardText>
                                                <small className="text-muted">August 12, 2024</small>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg={6}>

                            <MDBCard className="mb-3" style={{ maxWidth: '100%' }}>
                                <MDBRow className="g-0 align-items-center">
                                    <MDBCol md="4" className="d-flex justify-content-center align-items-center">
                                        <MDBCardImage
                                            src={work3}
                                            alt="Card image"
                                            style={{ width: '80%', height: 'auto', borderRadius: '5px' }}
                                        />
                                    </MDBCol>
                                    <MDBCol md="8">
                                        <MDBCardBody>
                                            <MDBCardTitle className='text-black'>Corporate Horizonts: Building Tomorrow's Workspaces</MDBCardTitle>
                                            <MDBCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci sit tempora!</MDBCardText>
                                            <MDBCardText>
                                                <small className="text-muted">August 12, 2024</small>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </MDBContainer>

            <MDBContainer>
                <MDBRow className='align-items-center'>
                    <MDBCol lg={6}>
                        <img src={contacts} className='img-fluid' alt="" />
                    </MDBCol>

                    <MDBCol className='text-black' lg={6}>
                        <h1 className='px-4'>Get in touch</h1>

                        <Form />
                    </MDBCol>
                </MDBRow>

            </MDBContainer>

        </>
    )


}


export default Home