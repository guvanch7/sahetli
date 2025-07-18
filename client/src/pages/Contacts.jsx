import { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBCard, MDBCol, MDBRow, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import '../style.css';
import './pagecss.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios'

import license1 from './assets/constr/constr4.jpg';
import license2 from './assets/constr/constr5.jpg';
import background from './assets/constrBg.jpg'
import background2 from './assets/serve.jpg'
import Button from '../components/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };


    const [email, setEmail] = useState("k.guvanch@sanly.tm");
    const [subject, setSubject] = useState("Вы получили новое сообщение с сайта!");
    const [emailAddress, setEmailAddress] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");




    const sendMail = () => {

        axios
            .get("http://localhost:5000/api", {
                params: {
                    email,
                    subject,
                    message,
                    phone,
                    name,
                    emailAddress
                },
            })
            .then(() => {
                // success
                console.log("Email sent successfully");
                setName('')
                setPhone('')
                setEmailAddress('')
                setMessage('')
                toast.success("Success!", {
                    autoClose: 5000,
                });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert(`Error sending email: ${error.response ? error.response.data : error.message}`);
            });


    };

    return (
        <>
            <MDBContainer style={{ marginTop: '9.5rem' }} >
                <h1 className='text-black'>{t("contactPageTitle")}</h1>
                <div className='d-flex'>
                    <div className='line2'></div>
                    <h6 className='logo-color'>{t("contactMapTxt")}</h6>
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
                        <h3 className='text-black'>
                            {t("navLink4")}
                        </h3>

                        <p>
                            {t("contactPageTxt")}
                        </p>


                        <div className="d-flex py-2">
                            <MDBIcon className='px-3 logo-color' size='2x' fas icon="phone-alt" />
                            <p>+993 (65) 56-84-67 </p>
                        </div>




                        <div className="d-flex py-2">
                            <MDBIcon className='px-3 logo-color' size='2x' fas icon="fax" />
                            <p>+993 (12) 76-11-85 </p>
                        </div>




                        <div className="d-flex py-2">
                            <MDBIcon className='px-3 logo-color' size='2x' fas icon="envelope" />
                            <p>info@sahetli.com</p>
                        </div>

                        <div className="d-flex py-2">
                            <MDBIcon className='px-3 logo-color' size='2x' fas icon="map-marker-alt" />
                            <p>{t("address")}</p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            <MDBContainer className='mt-4'>
                <MDBRow className='align-items-center'>
                    <MDBCol lg={6}>
                        <h5 className='text-black'>{t("contactPageFormTxt1")}</h5>
                        <p className='mt-unset'>{t("contactPageFormTxt2")}</p>
                        <p>{t("contactPageFormTxt3")}</p>


                        {/* <h5 className='text-black'>{t("socialTxt")}</h5>
                        <div className="d-flex  gap-3">
                            <MDBBtn size='lg' className='m-1' floating style={{ backgroundColor: '#0082ca' }} href='#'>
                                <MDBIcon size='xl' fab icon='linkedin-in' />
                            </MDBBtn>
                            <MDBBtn size='lg' className='m-1' floating style={{ backgroundColor: '#3b5998' }} href='#'>
                                <MDBIcon size='xl' fab icon='facebook-f' />
                            </MDBBtn>
                            <MDBBtn size='lg' className='m-1' floating style={{ backgroundColor: '#dd4b39' }} href='#'>
                                <MDBIcon size='xl' fab icon='google' />
                            </MDBBtn>
                            <MDBBtn size='lg' className='m-1' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
                                <MDBIcon size='xl' fab icon='instagram' />
                            </MDBBtn>
                            <MDBBtn size='lg' className='m-1' floating style={{ backgroundColor: '#25d366' }} href='#'>
                                <MDBIcon size='xl' fab icon='whatsapp' />
                            </MDBBtn>
                        </div> */}
                    </MDBCol>

                    <MDBCol className='bg-white rounded-5 p-5 mb-5 shadow-5' lg={6}>
                        <h5 className='text-black text-center mb-4'>{t("inputTxt")}</h5>
                         
                            <input
                                placeholder={t("placeholderName")}
                                type="text"
                                name="fullName"
                                className="mb-3 form"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />

                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                className="mb-3 form"
                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                required
                            />

                            <input
                                placeholder={t("placeholderPhone")}
                                type="tel"
                                name="telephone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="mb-3 form"
                                required
                            />


                            <textarea
                                placeholder={t("placeholderMessage")}
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mb-3 form"
                                rows={4}
                                required
                            />



                            <div className="text-center d-grid gap-2  mx-auto"  >
                                <MDBBtn type="submit" onClick={sendMail}  className="text-white fw-bolder" style={{ backgroundColor: '#1c3f7e' }}>
                                    {t("buttonSend")}
                                </MDBBtn>
                            </div>
                      

                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Button />

        </>
    );
}

export default Contact;
