import { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBIcon } from 'mdb-react-ui-kit';
import '../style.css';
import './pagecss.css';

import license1 from './assets/constr/constr4.jpg';
import license2 from './assets/constr/constr5.jpg';
import background from './assets/constrBg.jpg'
// import background2 from './assets/serve.jpg'
import Button from '../components/Button';


function Construction() {





    // Слайды с картинками и текстами
    const slides = [
        {
            image: license1,
            text: '1 den -2 gata çenli raýat gurluşyk işleri',
            description: 'Biz raýat gurluşyk taslamalaryny iň häzirki zaman tehnologiýalaryny ulanyp, ýokary hilli materiallar bilen amala aşyrýarys, bu bolsa binalaryň uzak möhletleýin we ygtybarly bolmagyny'
        },
        {
            image: license2,
            text: 'Nebit-gaz toplumynyň desgalarynda hyzmat etmekdäki işleri',
            description: 'Nebit-gaz toplumynyň desgalarynda hyzmat etmek boýunça iş tejribämiz, ýokary hünärli işgärlerimiz we döwrebap enjamlar bilen, ähli işleriň howpsuzlyk standartlaryna laýyklykda ýerine ýetirilmegini kepillendirýär.',

        },
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
                    height: '800px',
                    transition: '1s',
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
                                <span>Gurluşyk</span>
                            </h1>
                            <p className="mb-3 w-75">
                                Biz, häzirki zaman gurluşyk tehnologiýalaryna esaslanyp, ýokary hilli we uzak möhletleýin ulgamlary hödürleýäris. Gurluşyk hyzmatlarymyz, giň gerimli taslamalar we müşderilerimiziň isleglerine laýyklykda, innowasion we netijeli çözgütleri üpjün edýär.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <MDBContainer className="mt-5 mb-5">
                <MDBRow className='align-items-center'>

                    <MDBCol lg={6} className=" align-items-center">
                        {/* Текст синхронизирован с картинкой */}
                        <h1 className='text-black fw-bolder '>Gurluşyk hyzmatymyz</h1>

                        <div className='d-flex mb-3'>
                            <div className='line2'></div>
                            <h6 className='logo-color'>Gurluşyk barada</h6>
                        </div>
                        <h4 className="text-black  transition-text">
                            {slides[currentIndex].text}
                        </h4>

                        <p className="text-muted">
                            {slides[currentIndex].description}
                        </p>

                        <div className="d-flex align-items-center">

                            <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart orange">
                                    <path class="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="95, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" class="percentage">95%</text>
                                </svg>
                            </div>
                            <p>Hil gurluşyk</p>


                            <div class="single-chart">
                                <svg viewBox="0 0 36 36" class="circular-chart blue">
                                    <path class="circle-bg"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path class="circle"
                                        stroke-dasharray="90, 100"
                                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" class="percentage">90%</text>
                                </svg>
                            </div>

                            <p>Ygtybarly hyzmat</p>
                        </div>

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
                                    style={{
                                        fontSize: '24px',
                                    }}
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


                    <MDBCol lg={6}>
                        <MDBCard className='shadow-5-strong'  >
                            <div className='d-flex align-items-center p-4'>
                                <div className='ps-2'>
                                    <MDBIcon fas icon="drafting-compass" style={{ color: '#ff6600' }} size='4x' />
                                </div>
                                <div className='d-block px-4'>
                                    <h5 className='text-black'>Taslama Hiline Kepillik</h5>
                                    <p>Biz müşderilere ýokary hilli we ygtybarly gurluşyk hyzmatlaryny hödürläp, ähli taslamalaryň ulanyş howpsuzlygyny we döwrebaplygyny üpjün edýäris.</p>
                                </div>

                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg={6}>
                        <MDBCard className='shadow-5-strong'  >
                            <div className='d-flex align-items-center p-4'>
                                <div className='ps-2'>
                                    <MDBIcon fas icon="hard-hat" style={{ color: '#ff6600' }} size='4x' />
                                </div>
                                <div className='d-block px-4'>
                                    <h5 className='text-black'>Tejribeli we Ussat Hünärmenler</h5>
                                    <p>Biziň hünärmenler toparymyz gurluşyk pudagynda köp ýyllyk tejribä eýe bolup, her bir taslamada innowasion we täsirli çözgütleri teklip edýär.</p>
                                </div>

                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>


                <Button />
                {/* Кнопки-стрелки для перелистывания */}

            </MDBContainer>



        </>
    );
}

export default Construction;
