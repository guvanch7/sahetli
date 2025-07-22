import { useState, useEffect, useRef } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../style.css';
import './pagecss.css';
import bg from '../assets/image/about-bg.png'
import about from '../assets/image/about.jpg'
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';


import Button from '../components/Button';


function About() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const yPos = useMotionValue(0);
    const ySpring = useSpring(yPos, { stiffness: 200, damping: 40 }); // для плавности

    useEffect(() => {
        const handleScroll = () => {
            yPos.set(window.scrollY * 0.9); // регулируй коэффициент: 0.3 — скорость движения
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Заголовок */}
            <div
                className="bg-image"
                style={{
                    height: '350px',
                    backgroundImage: `url(${bg})`,
                    transition: '1s' // Фиксированное изображение
                }}
            >
                <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                >
                    <div className="container mt-7">
                        <div className="pages-txt pt-5 text-white">
                            <h1 className="mt-4" style={{ marginLeft: '10rem' }}>
                                <span className='fw-bolder display-3' style={{ textTransform: "uppercase" }}>{t("aboutUs")}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>




            <MDBContainer>
                <MDBRow>
                    <motion.h1
                        className='fw-bolder display-3'
                        style={{ color: '#b2dfe8' }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        {t("who_we_are")}
                    </motion.h1>

                    <motion.h1
                        className='fw-bolder logo-txt-color display-3'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {t("about_company")}
                    </motion.h1>

                    <motion.h1
                        className='fw-bolder logo-txt-color display-3'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        SÄHETLI HYZMAT
                    </motion.h1>

                    <MDBCol lg={6}>
                        <p>{t("company_description")}</p>
                        <p>{t("team_description")} </p>

                        <div className='d-flex mt-4 '>
                            <div className='line3'></div>
                            <h4 className='logo-txt-color fw-bolder mb-2'>{t("our_directions")}</h4>
                        </div>

                        <ul>
                            <p>{t("services_intro")}</p>
                            <li>{t("equipment_supply")}</li>
                            <li>{t("equipment_rental")}</li>
                            <li>{t("engineering_solutions")}</li>
                            <li>{t("ventilation_cleaning2")}</li>

                        </ul>
                    </MDBCol>

                    <MDBCol
                        lg={6}
                        style={{ marginTop: '-25rem', zIndex: '999', position: 'relative', overflow: 'hidden' }}
                    >
                        <motion.img
                            src={about}
                            alt="О компании"
                            className="img-fluid"
                            style={{
                                y: ySpring,
                                willChange: 'transform',
                            }}
                        />
                    </MDBCol>


                </MDBRow>
            </MDBContainer>




            <Button />
        </>
    );
}

export default About;
