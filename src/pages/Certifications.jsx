import { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../style.css';
import './pagecss.css';

import background from './assets/certBg.jpg'
import license1 from './assets/certs/015.jpg'
import license2 from './assets/certs/037.jpg'

import cert1 from './assets/certs/003.jpg'
import cert2 from './assets/certs/022.jpg'
import cert3 from './assets/certs/029.jpg'
import cert4 from './assets/certs/032.jpg'
import cert5 from './assets/certs/033.jpg'


function Certifications() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (image) => {
        setCurrentImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentImage(null);
    };


    return (
        <>
            {/* Заголовок */}
            <div
                className="bg-image"
                style={{
                    height: '500px',
                    backgroundImage: `url(${background})`, // Фиксированное изображение
                }}
            >
                <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div className="container mt-7">
                        <div className="pages-txt pt-5 text-white">
                            <h1 className="mb-3">
                                <span> Licenses & Certifications</span>
                            </h1>
                            <p className="mb-3 w-75">
                                We take pride in our certifications that demonstrate our commitment to
                                the highest industry standards
                                and excellence. Our certificates reflect the trust our clients place in us and our
                                dedication to continuous improvement in every project we undertake.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <MDBContainer className='mt-5'>
                <MDBRow>
                    <h1 className='text-black fw-bolder'>Our Licenses</h1>
                    <p>
                        Our licenses, granted by the Ministry of Construction of
                        Turkmenistan and Turkmenstandartlary, affirm our compliance
                        with the highest standards of quality and safety in the
                        construction industry. These licenses reflect our authority and
                        responsibility in executing projects in accordance with national
                        regulations and requirements.
                    </p>

                    <MDBCol lg={6}>
                        <img
                            src={license1}
                            className='img-fluid'
                            alt='License 1'
                            onClick={() => openModal(license1)}
                            style={{ cursor: 'pointer' }}
                        />
                    </MDBCol>
                    <MDBCol lg={6}>
                        <img
                            src={license2}
                            className='img-fluid'
                            alt='License 2'
                            onClick={() => openModal(license2)}
                            style={{ cursor: 'pointer' }}
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            {modalIsOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                    onClick={closeModal}
                >
                    <img
                        src={currentImage}
                        alt='License'
                        style={{
                            maxHeight: '80%',
                            maxWidth: '80%',
                            objectFit: 'contain',
                        }}
                    />
                </div>
            )}


<MDBContainer className="mt-5">
            <MDBRow className="justify-content-evenly">
                <h1 className="text-black fw-bolder">Our Certificates</h1>
                <p>
                    Our certifications, granted by Turkmenstandartlary, reflect our commitment to meeting the highest quality standards and compliance with national regulations in the construction and industry sectors. These certifications demonstrate our expertise and responsibility in carrying out projects while adhering to the established norms and ensuring the quality and safety of our work.
                </p>

                <MDBCol lg={4}>
                    <img
                        src={cert1}
                        className="img-fluid"
                        alt="Certificate 1"
                        onClick={() => openModal(cert1)}
                        style={{ cursor: 'pointer' }}
                    />
                </MDBCol>
                <MDBCol lg={4}>
                    <img
                        src={cert2}
                        className="img-fluid"
                        alt="Certificate 2"
                        onClick={() => openModal(cert2)}
                        style={{ cursor: 'pointer' }}
                    />
                </MDBCol>
                <MDBCol lg={4}>
                    <img
                        src={cert3}
                        className="img-fluid"
                        alt="Certificate 3"
                        onClick={() => openModal(cert3)}
                        style={{ cursor: 'pointer' }}
                    />
                </MDBCol>
                <MDBCol lg={4}>
                    <img
                        src={cert4}
                        className="img-fluid"
                        alt="Certificate 4"
                        onClick={() => openModal(cert4)}
                        style={{ cursor: 'pointer' }}
                    />
                </MDBCol>
                <MDBCol lg={4}>
                    <img
                        src={cert5}
                        className="img-fluid"
                        alt="Certificate 5"
                        onClick={() => openModal(cert5)}
                        style={{ cursor: 'pointer' }}
                    />
                </MDBCol>
            </MDBRow>

            {/* Custom modal for displaying the image */}
            {modalIsOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                    onClick={closeModal}
                >
                    <img
                        src={currentImage}
                        alt="Certificate"
                        style={{
                            maxHeight: '80%',
                            maxWidth: '80%',
                            objectFit: 'contain',
                        }}
                    />
                </div>
            )}
        </MDBContainer>


           

        </>
    );
}

export default Certifications;
