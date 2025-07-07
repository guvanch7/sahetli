import { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBCard, MDBCol, MDBRow, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import '../style.css';
import './pagecss.css';

import license1 from './assets/constr/constr4.jpg';
import license2 from './assets/constr/constr5.jpg';
import background from './assets/constrBg.jpg'
import background2 from './assets/serve.jpg'
import Button from '../components/Button';


function Contact() {


    return (
        <>
            <MDBContainer style={{ marginTop: '9.5rem' }} >
                <h1 className='text-black'>Habarlaşmak üçin</h1>
                <div className='d-flex'>
                    <div className='line2'></div>
                    <h6 className='logo-color'>Biziň salgylarymyz</h6>
                </div>
            </MDBContainer>

            <MDBContainer>
                <MDBRow className=''>
                    <MDBCol lg={6}>
                        <div className='map-container' style={{ position: 'relative', overflow: 'hidden', borderRadius: '50px' }}>
                            <a
                                href="https://yandex.ru/maps/10324/ashgabat/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                            >
                                Ашхабад
                            </a>
                            <a
                                href="https://yandex.ru/maps/10324/ashgabat/?ll=58.356021%2C37.887625&utm_medium=mapframe&utm_source=maps&z=18"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                            >
                                Ашхабад — Яндекс Карты
                            </a>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=58.356021%2C37.887625&z=18"
                                width="560"
                                height="400"
                                frameBorder="1"
                                allowFullScreen
                                style={{ position: 'relative' }}
                                title="Yandex Map"
                            ></iframe>
                        </div>

                    </MDBCol>

                    <MDBCol className='' lg={5}>
                        <h3 className='text-black'>Kontaklarymyz:</h3>
                        <p>Siz bize ýüz tutup, islendik soraglaryňyz boýunça habarlaşyp bilersiňiz. Biz Size tiz wagtda jogap bereris we gerekli kömegi bereris.</p>


                        <div className="d-flex py-2">
                            <MDBIcon className='px-3 logo-color' size='2x' fas icon="phone-alt" />
                            <p>+993 (12) 12-34-56 </p>
                        </div>

                     


                        <div className="d-flex py-2">
                            <MDBIcon className='px-3 logo-color' size='2x' fas icon="phone-alt" />
                            <p>+993 (65) 11-22-33</p>
                        </div>

                        


                        <div className="d-flex py-2">
                            <MDBIcon className='px-3 logo-color' size='2x' fas icon="envelope" />
                            <p>info@ho.com.tm</p>
                        </div>

                        <div className="d-flex py-2">
                            <MDBIcon className='px-3 logo-color' size='2x' fas icon="map-marker-alt" />
                            <p>Türkmenistan, ş. Aşgabat, Arçabil köçe ...</p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            <MDBContainer className='mt-4'>
                <MDBRow className='align-items-center'>
                    <MDBCol lg={6}>
                        <h5 className='text-black'>SORAGYŇYZ BARMY?</h5>
                        <p className='mt-unset'>Ýa-da maslahat gerekmi?</p>
                        <p>Formany dolduryň ýa-da bize jaň ediň.</p>


                        <h5 className='text-black'>Bize goşulyň:</h5> 
                        <div className="d-flex  gap-3">
                            <MDBBtn size='lg' className='m-1' floating style={{ backgroundColor: '#0082ca' }} href='#'>
                                <MDBIcon size='xl' fab icon='linkedin-in' />
                            </MDBBtn>
                            <MDBBtn size='lg' className='m-1' floating style={{ backgroundColor: '#3b5998' }} href='#'>
                                <MDBIcon size='xl' fab icon='facebook-f' />
                            </MDBBtn>
                            <MDBBtn size='lg'  className='m-1' floating style={{ backgroundColor: '#dd4b39' }} href='#'>
                                <MDBIcon size='xl' fab icon='google' />
                            </MDBBtn>
                            <MDBBtn size='lg' className='m-1' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
                                <MDBIcon size='xl' fab icon='instagram' />
                            </MDBBtn>
                            <MDBBtn size='lg' className='m-1' floating style={{ backgroundColor: '#25d366' }} href='#'>
                                <MDBIcon size='xl' fab icon='whatsapp' />
                            </MDBBtn>
                        </div>
                    </MDBCol>

                    <MDBCol className='bg-white rounded-5 p-5 mb-5 shadow-5' lg={6}>
                        <h5 className='text-black text-center mb-4'>FORMANY DOLDURYŇ</h5>
                        <form >
                            <input
                                placeholder="Full Name"
                                type="text"
                                name="fullName"
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
                                <MDBBtn type="submit" color="orange" className="text-white fw-bolder" style={{ backgroundColor: '#ff6600' }}>
                                    UGRAT
                                </MDBBtn>
                            </div>
                        </form>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Button />

        </>
    );
}

export default Contact;
