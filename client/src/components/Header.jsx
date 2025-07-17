import { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBBtn,
} from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
// import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import slider1 from '../assets/sliders/slider1.jpg'
import slider2 from '../assets/sliders/slider2.jpg'
import slider3 from '../assets/sliders/slider3.jpg'
import slider4 from '../assets/sliders/slider4.jpg'


import '../App.css';


function Header() {
    const [activeIndex, setActiveIndex] = useState(0);

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    const slides = [
        { image: slider1, text: `${t("header1")}` },
        { image: slider2, text: `${t("header2")}` },
        { image: slider3, text: `${t("header3")}` },
        { image: slider4, text: `${t("header4")}` },
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // 5000 мс = 5 секунд

        return () => clearInterval(interval); // очищаем интервал при размонтировании
    }, [slides.length]);
    return (
        <>
            <div className="header-container">
                {/* Блок с анимированной сменой фонового изображения */}
                <div className="background-wrapper bg-image">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={slides[activeIndex].image}
                            src={slides[activeIndex].image}

                            className="background-image img-fluid"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                </div>

                {/* Затемненная маска */}
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <MDBContainer className="h-100 ">
                        <MDBRow className="align-items-center justify-content-lg-end h-100">


                            <MDBCol lg={12} md={12} sm={12} className="text-white mt-7">



                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key={activeIndex}
                                        className="mb-3 fw-bolder mb-5  display-3"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                    >

                                        {t(slides[activeIndex].text)}
                                    </motion.h1>
                                </AnimatePresence>

                            </MDBCol>


                            <MDBCol
  className={`slider-controls d-flex flex-column gap-4`}
>
  {slides.map((_, index) => (
    <MDBBtn
      key={index}
      floating
      className={`btn-design slider-btn ${activeIndex === index ? "active" : ""}`}
      onClick={() => handleSlideChange(index)}
    />
  ))}
</MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        </>
    )






}


export default Header