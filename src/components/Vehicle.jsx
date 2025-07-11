import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import vehicle from '../assets/image/vehicle.jpg'
import vehicle2 from '../assets/image/vehicle2.jpg'
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
                            style={{ width: '28rem', y: y1, scale, opacity  }}
                            className='img-fluid rounded-9'
                            
                        />

                        <motion.div
                            className='img-secondary position-absolute d-none d-md-block'
                            style={{ y: y2 }}
                        >
                            <img
                                src={vehicle2}
                                style={{ width: '22rem' }}
                                className='img-fluid shadow-8 rounded-9'
                            />
                        </motion.div>
                    </MDBCol>

                    <MDBCol lg={6}>
                        <h1 className='text-black fw-bolder' >{t("header2")}</h1>
                        <div className='d-flex mt-5 '>
                            <div className='line3'></div>
                            <h4 className='logo-txt-color mb-2'>Спецтехника</h4>
                        </div>
                        <p>Наша компания предоставляет специализированную технику для выполнения широкого спектра работ в строительной, промышленной, нефтяной и энергетической отраслях.</p>

                        <p>Наш автопарк сформирован с учётом потребностей различных отраслей, что позволяет нам оперативно предоставлять спецтехнику для самых разнообразных задач. В наличии — широкий выбор техники, включая:</p>

                        <ul>
                            <li>экскаваторы, бульдозеры и автогрейдеры</li>
                            <li>автокраны, самосвалы и автовышки</li>
                            <li>катки, тракторы, погрузчики разных типов</li>
                            <li>длинномерные шаланды, гидравлические ножницы и другое оборудование</li>
                        </ul>
                        <MDBBtn style={{ backgroundColor: "#1c3f7e" }} className='mt-3'>
                            Подробнее
                        </MDBBtn>

                    </MDBCol>
                </MDBRow>
            </MDBContainer></>
    )
}




export default Vehicle;