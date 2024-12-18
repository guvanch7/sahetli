import { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../style.css';
import './pagecss.css';
import work1 from '../assets/image/work2.jpg';
import work2 from '../assets/image/work3.png';
import work3 from '../assets/nightPlant.jpg';

function About() {
    const images = [work1, work2, work3]; // Список изображений
    const [currentImage, setCurrentImage] = useState(0); // Индекс текущей картинки
    const [activeLine, setActiveLine] = useState(-1); // Индекс текущей активной линии

    const [experience, setExperience] = useState(0);

    const useCounter = (target, speed) => {
        const [counter, setCounter] = useState(0);

        useEffect(() => {
            if (counter < target) {
                const interval = setInterval(() => {
                    setCounter((prev) => Math.min(prev + Math.ceil(target / speed), target));
                }, 10); // Увеличение счетчика каждые 100 миллисекунд

                return () => clearInterval(interval);
            }
        }, [counter, target, speed]);

        return counter;
    };

    const productiveWork = useCounter(12, 1000);  // 12 лет, скорость 10 (чтобы увеличивалось быстрее)
    const employees = useCounter(120, 1000);      // 120 специалистов, скорость 10
    const customers = useCounter(132, 1000);

    useEffect(() => {
        const interval = setInterval(() => {
            // Обнуляем активную линию
            setActiveLine(-1);

            setTimeout(() => {
                setActiveLine((prev) => {
                    const next = (currentImage + 1) % images.length;
                    setCurrentImage(next); // Меняем изображение
                    return next; // Устанавливаем линию под новое изображение
                });
            }, 0); // Время для сброса линии (чтобы был визуальный эффект обнуления)
        }, 3000); // Интервал 3 секунды

        return () => clearInterval(interval);
    }, [currentImage, images.length]);

    useEffect(() => {
        if (experience < 30) {  // Устанавливаем максимальное значение
            const experienceInterval = setInterval(() => {
                setExperience((prev) => Math.min(prev + 1, 30));  // Увеличиваем на 1 до 30
            }, 200); // Интервал увеличения каждые 100 миллисекунд
    
            return () => clearInterval(experienceInterval);
        }
    }, [experience]);



    return (
        <>
            {/* Заголовок */}
            <div
                className="bg-image"
                style={{
                    height: '500px',
                    backgroundImage: `url(${work2})`, // Фиксированное изображение
                }}
            >
                <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div className="container mt-7">
                        <div className="pages-txt pt-5 text-white">
                            <h1 className="mb-3">
                                <span>History of Our Excellence</span>
                            </h1>
                            <p className="mb-3 w-75">
                                Since our establishment, we have been working
                                with all our strength to transform the
                                construction industry in a positive way by doing
                                our job well, constantly improving ourselves and
                                keeping our promises.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <MDBContainer
                className="counters-container"
                style={{
                    position: 'relative',
                    marginTop: '-50px',
                    zIndex: 2,
                }}
            >
                <MDBRow className="justify-content-lg-evenly text-black">
                    <MDBCol className="bg-light  shadow-5 p-3 rounded" lg={3}>
                        <p>Productive work</p>
                        <h2 className='fw-bolder'>{productiveWork} years</h2>
                    </MDBCol>
                    <MDBCol className="bg-light p-3 rounded shadow-5" lg={3}>
                        <p>Number of employees</p>
                        <h3 className='fw-bolder'>{employees}+</h3>
                    </MDBCol>
                    <MDBCol className="bg-light p-3 shadow-5 rounded" lg={3}>
                        <p>Satisfied customers</p>
                        <h3 className='fw-bolder'>{customers}+</h3>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>




            <MDBContainer className='mt-5'>
                <MDBRow>
                    <MDBCol lg={6}>
                        <h1 className='display-5 text-black fw-bold'>About Us</h1>
                    </MDBCol>
                    <MDBCol lg={6}>
                        <p>
                            Our company is known for its commitment to excellence and expertise. We aim to provide high quality service to our customers by approaching each project with care. Our company is known for its commitment to excellence and expertise. Our company is known for its commitment to excellence and expertise. To provide high quality service to our customers by approaching each project with care.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* Опыт */}
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol lg={6}>
                        <p>Our Experience</p>
                        <h1 className="display-1 fw-bolder text-black">{experience}+</h1>
                    </MDBCol>
                    <MDBCol lg={6}>
                        <div
                            style={{
                                height: '300px',
                                backgroundImage: `url(${images[currentImage]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                transition: 'background-image 1s ease-in-out',
                            }}
                        ></div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* Анимация линий */}
            <MDBContainer className='bg-dark' fluid>

                <MDBContainer className="mt-5">
                    <MDBRow className='mt-5'>
                        {images.map((_, index) => (
                            <MDBCol className="mt-5 mb-5 text-white" lg={4} key={index}>
                                <div
                                    className={`line ${activeLine === index ? 'active' : ''}`}
                                ></div>
                                <h5 className='mt-4'>0{index + 1}</h5>
                                <h4 className='fw-bolder mt-4'>
                                    {index === 0
                                        ? 'INNOVATOR'
                                        : index === 1
                                            ? 'COMPETITIVE'
                                            : 'RESISTANT'}
                                </h4>
                                <p className='mt-4'>
                                    Our company is known for its commitment to
                                    excellence and expertise. By approaching each
                                    project with care, we provide our customers with
                                    high quality.
                                </p>
                            </MDBCol>
                        ))}
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>


            <MDBContainer className='mt-5'>
                <MDBRow className='custom-row-gap'> {/* Кастомный класс */}
                    <MDBCol className='card-bg hover-effect' lg={4} md={6} sm={12}>
                        <h5>Infrastructure - Superstructure</h5>
                        <p>23 projects</p>
                    </MDBCol>
                    <MDBCol className='card-bg hover-effect' lg={4} md={6} sm={12}>
                        <h5>Industrial</h5>
                        <p>23 projects</p>
                    </MDBCol>
                    <MDBCol className='card-bg hover-effect' lg={4} md={6} sm={12}>
                        <h5>Health</h5>
                        <p>23 projects</p>
                    </MDBCol>
                    <MDBCol className='card-bg hover-effect' lg={4} md={6} sm={12}>
                        <h5>Residential Construction</h5>
                        <p>23 projects</p>
                    </MDBCol>
                    <MDBCol className='card-bg hover-effect' lg={4} md={6} sm={12}>
                        <h5>Business services</h5>
                        <p>23 projects</p>
                    </MDBCol>
                    <MDBCol className='card-bg hover-effect' lg={4} md={6} sm={12}>
                        <h5>Administrative centers</h5>
                        <p>23 projects</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </>
    );
}

export default About;
