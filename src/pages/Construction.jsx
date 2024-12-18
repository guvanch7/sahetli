import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../style.css';
import './pagecss.css';

import license1 from './assets/certs/015.jpg';
import background from './assets/constrBg.jpg'

import license2 from './assets/certs/037.jpg';

function Construction() {
    // Слайды с картинками и текстами
    const slides = [
        { image: license1, text: 'This is text for the first image.' },
        { image: license2, text: 'This is text for the second image.' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Функция для изменения слайда
    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div
                className="bg-image"
                style={{
                    height: '500px',
                    backgroundImage: `url(${background})`, // Фиксированное изображение
                }}
            >
                <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <div className="container mt-7">
                        <div className="pages-txt pt-5 text-white">
                            <h1 className="mb-3">
                                <span>Construction</span>
                            </h1>
                            <p className="mb-3 w-75">
                                We ensure high-quality and reliable construction, meetingWe ensure high-quality and reliable construction, meeting modern standards of safety and efficiency.
                                Our experienced team delivers sustainable and innovative solutions for every project.

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol lg={5} className="d-flex align-items-center">
                        {/* Текст синхронизирован с картинкой */}
                        <p className="text-black fw-bold transition-text">
                            {slides[currentIndex].text}
                        </p>
                    </MDBCol>
                    <MDBCol lg={6} className="d-flex justify-content-center align-items-center">
                        {/* Картинка с плавной анимацией */}
                        <div className="image-container">
                            <img
                                src={slides[currentIndex].image}
                                className="img-fluid transition-image"
                                alt={`Slide ${currentIndex + 1}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '500px',
                                    objectFit: 'contain',
                                    
                                }}
                            />
                            <div className="d-flex justify-content-center mt-3">
                                <button
                                    onClick={handlePrevSlide}
                                    className="btn btn-light mx-2 btn-arrow"
                                    style={{ fontSize: '24px' }}
                                >
                                    &#8592; {/* Стрелка налево */}
                                </button>
                                <button
                                    onClick={handleNextSlide}
                                    className="btn btn-light mx-2 btn-arrow"
                                    style={{ fontSize: '24px' }}
                                >
                                    &#8594; {/* Стрелка направо */}
                                </button>
                            </div>
                        </div>


                    </MDBCol>
                </MDBRow>

                {/* Кнопки-стрелки для перелистывания */}

            </MDBContainer>



        </>
    );
}

export default Construction;
