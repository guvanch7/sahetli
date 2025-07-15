// import { useState, useEffect } from 'react';
// import Carousel from "react-spring-3d-carousel";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
// import '../style.css';
// import './pagecss.css';
// import { v4 as uuidv4 } from "uuid";

// import { config } from "react-spring";
// import background from './assets/about.jpg'

// import manufactory from '../assets/image/manufactory.jpg';
// import manufactory2 from '../assets/image/recycling2.jpg';
// import manufactory3 from '../assets/image/recycling4.png';
// import manufactory4 from '../assets/image/recycling3.jpg';

// import background2 from './assets/about2.jpg'
// import proto1 from './assets/protokol/proto1.jpg'
// import proto2 from './assets/protokol/proto2.jpg'
// import proto3 from './assets/protokol/proto3.jpg'
// import proto4 from './assets/protokol/proto4.jpg'
// import proto5 from './assets/protokol/proto5.jpg'
// import Button from '../components/Button';



// function Certifications() {

//     const slides = [
//         {
//             key: uuidv4(),
//             content: <img src={proto1} alt="1" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src={proto2} alt="2" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src={proto3} alt="3" />
//         },

//         {
//             key: uuidv4(),
//             content: <img src={proto4} alt="3" />
//         },

//         {
//             key: uuidv4(),
//             content: <img src={proto5} alt="3" />
//         }



//     ];


//     const [customState, setCustomState] = useState({
//         goToSlide: true,
//         offsetRadius: 2,
//         showNavigation: false,
//         config: config.gentle,
//         autoplay: true,
//         autoplaySpeed: 100
//     });

//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1
//     };

//     const onChangeSlide = () => {
//         const len = slides.length;
//         const { goToSlide } = customState;
//         if (goToSlide === len - 1) {
//             setCustomState((prevState) => {
//                 return {
//                     ...prevState,
//                     goToSlide: 0
//                 };
//             });
//         } else {
//             setCustomState((prevState) => {
//                 return {
//                     ...prevState,
//                     goToSlide: prevState.goToSlide + 1
//                 };
//             });
//         }
//     };

//     useEffect(() => {
//         const timer = setInterval(() => {
//             onChangeSlide();
//         }, [4000]);
//         return () => {
//             clearInterval(timer);
//         };
//     }, []);

//     const [activeLine, setActiveLine] = useState(-1); // Индекс текущей активной линии
//     const images = [background, background2];
//     const [currentImage, setCurrentImage] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // Обнуляем активную линию
//             setActiveLine(-1);

//             setTimeout(() => {
//                 setActiveLine((prev) => {
//                     const next = (currentImage + 1) % images.length;
//                     setCurrentImage(next); // Меняем изображение
//                     return next; // Устанавливаем линию под новое изображение
//                 });
//             }, 0); // Время для сброса линии (чтобы был визуальный эффект обнуления)
//         }, 5000); // Интервал 3 секунды

//         return () => clearInterval(interval);
//     }, [currentImage, images.length]);

//     return (
//         <>
//             {/* Заголовок */}
//             <div
//                 className="bg-image"
//                 style={{
//                     height: '800px',
//                     backgroundImage: `url(${images[currentImage]})`, // Фиксированное изображение
//                 }}
//             >
//                 <div
//                     className="mask"
//                     style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//                 >
//                     <div className="container mt-7">
//                         <div className="pages-txt pt-5 text-white">
//                             <h1 className="mb-3">
//                                 <span>Önümler</span>
//                             </h1>
//                             <p className="fs-3 mb-3 w-75">
//                             Diňe bir ykdysady tarapdan däl. Eýsem daşky gurşawa zyýan ýetirýän galyndylary regenerasiýa önümçilikleri ýerine ýetirmek bolup durýar. 
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <MDBContainer className='mt-4'>

//                 <MDBRow>
//                     <h1 className='text-black'>Önümler barada</h1>
//                     <p>Ähli pudaklarda ulanylýan ýanyjy çalgy ýaglary, sintetiki parafin we Gurum bilen hünärli, giň mümkinçilikler döredýän we ýokary hilli önümleri hödürleýäris. Bu önümler, dürli müşderi isleglerine laýyklykda, netijeli we döwrebap çözgütleri üpjün edýäris.</p>
//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={manufactory2} />
//                                 </div>
//                                 <h2 className="card__title">Ýanyjy çalgy ýaglary </h2>
//                                 <div className="card__content mt-2">
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>



//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={manufactory4} />
//                                 </div>
//                                 <h2 className="card__title">Sintetiki parafin</h2>
//                                 <div className="card__content mt-2">
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>


//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={manufactory3} />
//                                 </div>
//                                 <h2 className="card__title">Tehniki gurumy </h2>
//                                 <div className="card__content mt-2">
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>

//                 </MDBRow>
//             </MDBContainer>

//             <MDBContainer className='mt-5'>
//                 <MDBRow>
//                     <h1 className='text-black fw-bolder'>Protokollar</h1>
//                     <p>
//                         <div style={{ width: "80%", height: "30rem", margin: "0 4.5rem" }}>
//                             <Carousel
//                                 slides={slides}
//                                 goToSlide={customState.goToSlide}
//                                 offsetRadius={customState.offsetRadius}
//                                 showNavigation={customState.showNavigation}
//                                 animationConfig={customState.config}
//                                 autoPlay={true}
//                                 interval={customState.autoplaySpeed}
//                                 infiniteLoop={true}
//                                 dynamicHeight={true}
//                                 ref={(slider) => slider}
//                                 {...settings}
//                             ></Carousel>
//                         </div>
//                     </p>
//                 </MDBRow>
//             </MDBContainer>
//             <Button />









//         </>
//     );
// }

// export default Certifications;
