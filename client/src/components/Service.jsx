import React, { useEffect, useState } from "react";
import './Service.css';
import {
    MDBContainer, MDBRow, MDBCol, MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import '../App.css';
import { useTranslation } from 'react-i18next';

import slider1 from '../assets/sliders/slider1.jpg';
import slider2 from '../assets/sliders/slider2.jpg';
import slider3 from '../assets/sliders/slider3.jpg';
import slider4 from '../assets/sliders/slider4.jpg';



// Анимация фона
const imageVariants = {
    initial: { scale: 1 },
    animate: {
        scale: 1.05,
        transition: { duration: 6, ease: 'easeInOut' }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

// Анимация текста
const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.3 }
    }
};

const Service = () => {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };

    const { t, i18n } = useTranslation();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    const slides = [
        {
            image: slider1,
            title: `${t("header1")}`,
            subtitle: `${t("oilgas")}`,
        },
        {
            image: slider2,
            title: `${t("header2")}`,
            subtitle: `${t("footerLink3")}`,
        },

        {
            image: slider3,
            title: `${t("header3")}`,
            subtitle: `${t("footerLink4")}`,
        },

        {
            image: slider4,
            title: `${t("header4")}`,
            subtitle: `${t("hvac")}`,
        }
    ];
    const current = slides[index];

    return (
        <MDBContainer className="py-5">
            <MDBRow className="justify-content-evenly">
                <MDBCol lg={5}>
                    <div className="position-relative rounded-8 overflow-hidden" style={{ height: '600px' }}>
                        {/* Фоновое изображение */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.image}
                                className="position-absolute w-100 h-100"
                                style={{
                                    backgroundImage: `url(${current.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1
                                }}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            />
                        </AnimatePresence>

                        {/* Текст поверх маски */}
                        {/* Текст поверх маски */}
                        <div className="mask w-100 h-100 position-absolute" style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            zIndex: 2,
                            top: 0,
                            left: 0
                        }}>
                            <MDBContainer className="h-100 d-flex px-5 flex-column justify-content-center">
                                <AnimatePresence mode="wait" >
                                    <motion.div
                                        key={current.title}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                    >
                                        {/* Subtitle с задержкой 0s */}
                                        <motion.div
                                            variants={{
                                                initial: { opacity: 0, y: 20 },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.8, ease: 'easeOut', delay: 0 }
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -10,
                                                    transition: { duration: 0.3 }
                                                }
                                            }}
                                        >
                                            <div className='d-flex mb-4 align-items-center' >
                                                <div className='line3'></div>
                                                <h6 className='logo-color fw-bolder mb-2'>{current.subtitle}</h6>
                                            </div>
                                        </motion.div>

                                        {/* Title с задержкой 0.3s */}
                                        <motion.h3
                                            className='text-white'
                                            variants={{
                                                initial: { opacity: 0, y: 20 },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 }
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -10,
                                                    transition: { duration: 0.3 }
                                                }
                                            }}
                                        >
                                            {current.title}
                                        </motion.h3>
                                    </motion.div>
                                </AnimatePresence>
                            </MDBContainer>
                        </div>

                    </div>
                </MDBCol>


                <MDBCol lg={6}>
                    <MDBTabs className='mb-3'>

                        <MDBTabsItem style={{padding:'2rem unset'}}>
                            <MDBTabsLink style={{padding:'1rem 0'}} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                {t("about_us")}
                            </MDBTabsLink>
                        </MDBTabsItem>

                        <MDBTabsItem>
                            <MDBTabsLink style={{padding:'1rem 0'}} onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                {t("our_vision")}
                            </MDBTabsLink>
                        </MDBTabsItem>

                        <MDBTabsItem>
                            <MDBTabsLink style={{padding:'1rem 0'}} className="text-left" onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                {t("our_mission")}
                            </MDBTabsLink>
                        </MDBTabsItem>

                    </MDBTabs>

                    <MDBTabsContent  >
                        <MDBTabsPane open={basicActive === 'tab1'}>



                            <div className='d-flex mt-4 '>
                                <div className='line3'></div>
                                <h4 className='logo-txt-color fw-bolder mb-2' >{t("ourCompany")}</h4>
                            </div>
                            <p>{t("welcome_message")}</p>

                            <p>{t("about_description")}</p>

                            <p>{t("activity_scope")}</p>

                            <ul>
                                <li>{t("oil_equipment_supply")}</li>
                                <li>{t("vehicle_services")}</li>
                                <li>{t("electric_power_support")}</li>
                                <li>{t("ventilation_services")}</li>
                            </ul>

                            <p>{t("our_approach")}</p>


                        </MDBTabsPane>

                        <MDBTabsPane open={basicActive === 'tab2'}>
                            <div className='d-flex mt-5 '>
                                <div className='line3'></div>
                                <h4 className='logo-txt-color fw-bolder mb-2'>{t("our_vision")}</h4>
                            </div>
                            <p>{t("our_goal")}</p>

                        </MDBTabsPane>
                        <MDBTabsPane open={basicActive === 'tab3'}>
                            <div className='d-flex mt-5 '>
                                <div className='line3'></div>
                                <h4 className='logo-txt-color fw-bolder mb-2'> {t("our_mission")}</h4>
                            </div>
                            <p>{t("company_intro")}</p>

                           
                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Service;
