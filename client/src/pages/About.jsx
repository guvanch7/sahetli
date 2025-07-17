import { useState, useEffect, useRef } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../style.css';
import './pagecss.css';
import bg from '../assets/image/about-bg.png'
import about from '../assets/image/about.jpg'
import { motion, useMotionValue, useSpring } from 'framer-motion';


import Button from '../components/Button';


function About() {



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
                                <span className='fw-bolder display-3'>О НАС</span>
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
                        КТО МЫ?
                    </motion.h1>

                    <motion.h1
                        className='fw-bolder logo-txt-color display-3'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        О КОМПАНИИ
                    </motion.h1>

                    <motion.h1
                        className='fw-bolder logo-txt-color display-3'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        SÄHETLI ÖNÜM
                    </motion.h1>

                    <MDBCol lg={6}>
                        <p>Sähetli Hyzmat — это надёжный партнёр в сфере поставок оборудования, аренды спецтехники и инженерных решений для промышленных предприятий. Мы работаем на рынке с многолетним опытом, специализируясь на комплексном обеспечении предприятий нефтегазовой, энергетической и других отраслей промышленности.</p>
                        <p> Наша команда объединяет профессионалов, которые глубоко понимают требования и вызовы современного производства. Мы не просто поставляем продукцию — мы решаем задачи клиентов, обеспечивая высокое качество, точность и оперативность на каждом этапе сотрудничества.</p>

                        <div className='d-flex mt-4 '>
                            <div className='line3'></div>
                            <h4 className='logo-txt-color fw-bolder mb-2'>НАШИ НАПРАВЛЕНИЯ</h4>
                        </div>

                        <ul>
                            <p>Мы предоставляем широкий спектр услуг:</p>
                            <li>Поставка оборудования и материалов — от базовых компонентов до сложных промышленных установок. Сотрудничаем с проверенными производителями и гарантируем качество на каждом этапе поставки.</li>
                            <li>Аренда специализированной техники — предлагаем современные и надёжные машины для выполнения различных видов работ, включая строительство, обслуживание и ремонт объектов.</li>
                            <li>Инженерные решения в сфере электроэнергетики — проектирование, монтаж и техническое сопровождение электросетей и систем энергоснабжения.</li>
                            <li>Очистка и обслуживание систем вентиляции — профессиональный подход к поддержанию безопасности и эффективности на объектах, включая промышленную и коммерческую недвижимость.</li>

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
