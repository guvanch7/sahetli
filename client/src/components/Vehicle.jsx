import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import vehicle from '../assets/image/vehicle.jpg'
import vehicle2 from '../assets/image/vehicle2.jpg'
import vehicle3 from '../assets/image/vehicle3.png'
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
    MDBBtn,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import { useTranslation } from 'react-i18next';

function Vehicle() {

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]); // было -50
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]); // было -100

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // легкое увеличение
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]); // затемнение


    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <MDBContainer className='mt-5'>
                <MDBRow>
                    <MDBCol lg={6} className="position-relative" ref={containerRef}>
                        <motion.img
                            src={vehicle}
                            style={{ width: '28rem', y: y1, scale, opacity }}
                            className='img-fluid rounded-9'

                        />

                        <motion.div
                            className='img-secondary position-absolute d-none d-md-block'
                            style={{ y: y2 }}
                        >
                            <img
                                src={vehicle3}
                                style={{ width: '22rem' }}
                                className='img-fluid shadow-6 rounded-9'
                            />
                        </motion.div>
                    </MDBCol>

                    <MDBCol lg={6}>
                        <h1 className='text-black fw-bolder' >{t("header2")}</h1>
                        <div className='d-flex mt-4 '>
                            <div className='line3'></div>
                            <h4 className='logo-txt-color mb-2'>Спецтехника и автотранспорт</h4>
                        </div>
                        <p>Наша компания предоставляет специализированную технику для выполнения широкого спектра задач в строительной, промышленной, нефтяной и энергетической отраслях.</p>
                        <p>Мы обеспечиваем клиентов техникой, соответствующей специфике их проектов — будь то земляные работы, монтажные операции, перемещение грузов или другие технологически сложные процессы. Благодаря налаженным партнёрским связям, мы предлагаем надёжные и своевременные решения для любых производственных потребностей.</p>
                         <p>Мы предлагаем технику на удобных и понятных условиях, с учётом специфики и сроков каждого проекта.</p>
                        <MDBBtn style={{ backgroundColor: "#1c3f7e" }} className='mt-3'>
                            Подробнее
                        </MDBBtn>

                    </MDBCol>
                </MDBRow>
            </MDBContainer></>
    )
}




export default Vehicle;