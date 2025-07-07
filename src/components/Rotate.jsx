// import React, { useState, useEffect } from 'react';
// import {
//     MDBInput,
//     MDBTextArea,
//     MDBBtn,
//     MDBContainer,
//     MDBRow,
//     MDBCol
// } from "mdb-react-ui-kit";
// import { useTranslation } from 'react-i18next';
// import '../App.css'
// import './rotate.css'
// import work2 from '../assets/image/work2.jpg'
// import cert1 from '../pages/assets/certs/003.jpg'
// import recycling from '../assets/image/recycling.png'
// import recycling2 from '../assets/image/recycling2.jpg'
// import recycling3 from '../assets/image/recycling3.jpg'
// import recycling4 from '../assets/image/recycling4.png'
// import worldwide from '../assets/image/worldwide.jpg'
// import worldwide2 from '../assets/image/worldwide2.png'
// import worldwide3 from '../assets/image/worldwide3.jpg'
// import worldwide4 from '../assets/image/worldwide4.jpg'
// import tech from '../assets/image/tech.jpg'
// import tech2 from '../assets/image/tech2.jpg'
// import tech3 from '../assets/image/tech3.jpg'
// import tech4 from '../assets/image/tech.jpg'
// import patent from '../assets/image/patent.jpg'
// import patent2 from '../assets/image/patent2.jpg'
// import patent3 from '../assets/image/patent3.jpg'
// // import patent4 from '../assets/image/patent.jpg'
// import { motion } from "framer-motion"; // Импорт Framer Motion



// const Rotate = () => {
//     const images = [recycling, recycling2, recycling3, recycling4]; // Массив изображений
//     const [frontImageIndex, setFrontImageIndex] = useState(0); // Индекс для передней стороны
//     const [backImageIndex, setBackImageIndex] = useState(0); // Индекс для задней стороны
//     const switchImages = () => {
//         setFrontImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Переключаем индекс для передней стороны
//         setBackImageIndex((prevIndex) => (prevIndex + 1) % images.length);  // Переключаем индекс для задней стороны
//     };
//     const { t, i18n } = useTranslation();

//     const changeLanguage = (language) => {
//         i18n.changeLanguage(language);
//     };
//     useEffect(() => {
//         const interval = setInterval(() => {
//             switchImages();
//         }, 3000); // Переключаем картинки каждые 3 секунды

//         return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
//     }, []);

//     const worldwideImages = [worldwide, worldwide2, worldwide3, worldwide4];
//     const [frontWorldwideIndex, setFrontWorldwideIndex] = useState(0);
//     const [backWorldwideIndex, setBackWorldwideIndex] = useState(0);
//     const switchWorldwideImages = () => {
//         setFrontWorldwideIndex((prevIndex) => (prevIndex + 1) % worldwideImages.length);
//         setBackWorldwideIndex((prevIndex) => (prevIndex + 1) % worldwideImages.length);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             switchWorldwideImages();
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     const techImages = [tech, tech2, tech3];
//     const [frontTechIndex, setFrontTechIndex] = useState(0);
//     const [backTechIndex, setBackTechIndex] = useState(0);
//     const switchTechImages = () => {
//         setFrontTechIndex((prevIndex) => (prevIndex + 1) % techImages.length);
//         setBackTechIndex((prevIndex) => (prevIndex + 1) % techImages.length);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             switchTechImages();
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     const patentImages = [patent, patent2, patent3];
//     const [frontPatentIndex, setFrontPatentIndex] = useState(0);
//     const [backPatentIndex, setBackPatentIndex] = useState(0);

//     const switchPatentImages = () => {
//         setFrontPatentIndex((prevIndex) => (prevIndex + 1) % patentImages.length);
//         setBackPatentIndex((prevIndex) => (prevIndex + 1) % patentImages.length);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             switchPatentImages();
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <MDBContainer className='flip-container-wrapper mt-4 text-white'>
//             <MDBRow className='align-items-center'>
//                 <MDBCol lg={3} md={6} className="flip-container">
//                     <div className="flip-card">
//                         {/* Передняя сторона с анимацией */}
//                         <motion.div
//                             className="flip-card-front"
//                             style={{ backgroundImage: `url(${images[frontImageIndex]})` }}
//                             key={`front-${frontImageIndex}`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <div
//                                 className="mask p-4"
//                                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//                             >
//                                 <h5>{t("EnvironmentalProtection")}</h5>
//                                 <div className="line mb-3"></div>
//                             </div>
//                         </motion.div>

//                         {/* Задняя сторона с анимацией */}
//                         <motion.div
//                             className="flip-card-back"
//                             style={{ backgroundImage: `url(${images[backImageIndex]})` }}
//                             key={`back-${backImageIndex}`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <div
//                                 className="mask d-flex flex-column justify-content-center align-items-center p-4"
//                                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//                             >
//                                 <p className="text-white mx-auto mb-3">
//                                     {t("RecyclingAndEnvironmentalProtection")}
//                                 </p>
//                                 <div className="line mb-3"></div>

//                             </div>
//                         </motion.div>
//                     </div>
//                 </MDBCol>


//                 <MDBCol lg={3} md={6} className="flip-container">
//                     <div className="flip-card">
//                         {/* Передняя сторона с анимацией */}
//                         <motion.div
//                             className="flip-card-front"
//                             style={{ backgroundImage: `url(${worldwideImages[frontWorldwideIndex]})` }}
//                             key={`front-worldwide-${frontWorldwideIndex}`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <div
//                                 className="mask p-4"
//                                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//                             >
//                                 <h5>{t("ProtectingTheEnvironment")}</h5>
//                                 <div className="line mb-3"></div>
//                             </div>
//                         </motion.div>

//                         {/* Задняя сторона с анимацией */}
//                         <motion.div
//                             className="flip-card-back"
//                             style={{ backgroundImage: `url(${worldwideImages[backWorldwideIndex]})` }}
//                             key={`back-worldwide-${backWorldwideIndex}`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <div
//                                 className="mask d-flex flex-column justify-content-center align-items-center p-4"
//                                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//                             >
//                                 <p className="text-white mb-3">
//                                     {t("RecyclingAndEnvironmentalProtection")}
//                                 </p>
//                                 <div className="line mb-3"></div>

//                             </div>
//                         </motion.div>
//                     </div>
//                 </MDBCol>

//                 <MDBCol lg={3} md={6} className="flip-container">
//                     <div className="flip-card">
//                         <motion.div
//                             className="flip-card-front"
//                             style={{ backgroundImage: `url(${techImages[frontTechIndex]})` }}
//                             key={`front-tech-${frontTechIndex}`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <div className="mask p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//                                 <h5>{t("Laboratory")}</h5>
//                                 <div className="line mb-3"></div>
//                             </div>
//                         </motion.div>
//                         <motion.div
//                             className="flip-card-back"
//                             style={{ backgroundImage: `url(${techImages[backTechIndex]})` }}
//                             key={`back-tech-${backTechIndex}`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <div className="mask d-flex flex-column justify-content-center align-items-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//                                 <p className="text-white mb-3">
//                                     {t("AddingInnovationsInProductionAndServices")}
//                                 </p>
//                                 <div className="line mb-3"></div>

//                             </div>
//                         </motion.div>
//                     </div>
//                 </MDBCol>

//                 <MDBCol lg={3} md={6} className="flip-container">
//                     <div className="flip-card">
//                         {/* Передняя сторона с анимацией */}
//                         <motion.div
//                             className="flip-card-front"
//                             style={{ backgroundImage: `url(${patentImages[frontPatentIndex]})` }}
//                             key={`front-patent-${frontPatentIndex}`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <div
//                                 className="mask p-4"
//                                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//                             >
//                                 <h5>{t("Patent")}</h5>
//                                 <div className="line mb-3"></div>
//                             </div>
//                         </motion.div>

//                         {/* Задняя сторона с анимацией */}
//                         <motion.div
//                             className="flip-card-back"
//                             style={{ backgroundImage: `url(${patentImages[backPatentIndex]})` }}
//                             key={`back-patent-${backPatentIndex}`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                         >
//                             <div
//                                 className="mask d-flex flex-column justify-content-center align-items-center p-4"
//                                 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//                             >
//                                 <p className="text-white  mb-3">
//                                     {t("InventingAndPatentingNewProducts")}
//                                 </p>
//                                 <div className="line mb-3"></div>

//                             </div>
//                         </motion.div>
//                     </div>
//                 </MDBCol>




//             </MDBRow>
//         </MDBContainer>
//     );
// };

// export default Rotate;
