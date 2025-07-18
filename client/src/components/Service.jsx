import React, { useEffect, useState } from "react";
import {
    MDBContainer, MDBRow, MDBCol, MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import './Service.css';
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
            subtitle: `${t("vehicle")}`,
        },

        {
            image: slider3,
            title: `${t("header3")}`,
            subtitle: `${t("electric")}`,
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

                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                О нас
                            </MDBTabsLink>
                        </MDBTabsItem>

                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                Наше видение
                            </MDBTabsLink>
                        </MDBTabsItem>

                        <MDBTabsItem>
                            <MDBTabsLink className="text-left" onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                Наша цель
                            </MDBTabsLink>
                        </MDBTabsItem>

                    </MDBTabs>

                    <MDBTabsContent  >
                        <MDBTabsPane open={basicActive === 'tab1'}>



                            <div className='d-flex mt-5 '>
                                <div className='line3'></div>
                                <h4 className='logo-txt-color fw-bolder mb-2' >Наша компания</h4>
                            </div>
                            <p>Мы рады приветствовать вас на сайте нашей компании!</p>

                            <p>Мы динамично развивающаяся компания, специализирующаяся на предоставлении широкого спектра услуг для различных отраслей промышленности.</p>

                            <p>Наша деятельность охватывает несколько клюевых направлений, в каждом из которых мы гарантируем профессионализм и качество:</p>

                            <ul>
                                <li>Поставка оборудования для нефтяной отрасли;</li>
                                <li>Услуги по предоставлению спецтехники и автотранспорта;</li>
                                <li>Комплексная поддержка в электроэнергетике;</li>
                                <li>Очистка и обслуживание вентиляционных систем.</li>
                            </ul>

                            <p>Мы ценим индивидуальный подход и стремимся к долгосрочному сотрудничеству, чтобы быть надёжным партнёром для каждого клиента.</p>


                        </MDBTabsPane>

                        <MDBTabsPane open={basicActive === 'tab2'}>
                            <div className='d-flex mt-5 '>
                                <div className='line3'></div>
                                <h4 className='logo-txt-color fw-bolder mb-2'>Наше видение</h4>
                            </div>
                            <p>Стать ключевым партнером в формировании сильной и современной экономики
                                Туркменистана, благодаря нашему комплексному подходу и высоким стандартам сервиса.</p>

                        </MDBTabsPane>
                        <MDBTabsPane open={basicActive === 'tab3'}>
                            <div className='d-flex mt-5 '>
                                <div className='line3'></div>
                                <h4 className='logo-txt-color fw-bolder mb-2'>Наша цель</h4>
                            </div>
                            <p>ИП «САХЕТЛИ ХЫЗМАТ» активно способствует развитию страны, предоставляя
надежные и эффективные услуги в нескольких стратегически важных направлениях:
обеспечение транспортных и строительных нужд через аренду спецтехники и
пассажирские перевозки; комплексное снабжение нефтяной отрасли
специализированным оборудованием; укрепление энергетического сектора посредством
передовых решений; и поддержание здоровой и безопасной среды через обслуживание
вентиляционных систем. Мы строим доверие через качество, ответственность и
стремление к общим успехам.</p>

                           
                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Service;
