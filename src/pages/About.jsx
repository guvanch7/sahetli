// import { useState, useEffect } from 'react';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
// import '../style.css';
// import './pagecss.css';


// import about1 from './assets/constr/constr4.jpg';
// import about2 from './assets/constr/constr5.jpg';
// import work1 from '../assets/image/work2.jpg';
// import work2 from '../assets/image/work3.jpg';
// import work3 from '../assets/nightPlant.jpg';
// import Recommend from '../components/Recommend';
// import Button from '../components/Button';


// function About() {
//     const images = [work1, work2, work3]; // Список изображений
//     const [currentImage, setCurrentImage] = useState(0); // Индекс текущей картинки
//     const [activeLine, setActiveLine] = useState(-1); // Индекс текущей активной линии

//     const [experience, setExperience] = useState(0);
//     const imagesHeader = [about1, about2]
//     const [currentImageHeader, setCurrentImageHeader] = useState(0); // Индекс текущей картинки

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // Обнуляем активную линию
//             setActiveLine(-1);

//             setTimeout(() => {
//                 setActiveLine((prev) => {
//                     const next = (currentImageHeader + 1) % imagesHeader.length;
//                     setCurrentImageHeader(next); // Меняем изображение
//                     return next; // Устанавливаем линию под новое изображение
//                 });
//             }, 0); // Время для сброса линии (чтобы был визуальный эффект обнуления)
//         }, 5000); // Интервал 3 секунды

//         return () => clearInterval(interval);
//     }, [currentImageHeader, imagesHeader.length]);



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
//         }, 3000); // Интервал 3 секунды

//         return () => clearInterval(interval);
//     }, [currentImage, images.length]);

//     useEffect(() => {
//         if (experience < 30) {  // Устанавливаем максимальное значение
//             const experienceInterval = setInterval(() => {
//                 setExperience((prev) => Math.min(prev + 1, 2));  // Увеличиваем на 1 до 30
//             }, 200); // Интервал увеличения каждые 100 миллисекунд

//             return () => clearInterval(experienceInterval);
//         }
//     }, [experience]);



//     return (
//         <>
//             {/* Заголовок */}
//             <div
//                 className="bg-image"
//                 style={{
//                     height: '800px',
//                     backgroundImage: `url(${imagesHeader[currentImageHeader]})`,
//                     transition: '1s' // Фиксированное изображение
//                 }}
//             >
//                 <div
//                     className="mask"
//                     style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//                 >
//                     <div className="container mt-7">
//                         <div className="pages-txt pt-5 text-white">
//                             <h1 className="mb-3">
//                                 <span>Gysgaça taryhy</span>
//                             </h1>
//                             <p className="mb-3 w-100 fs-4">
//                                 “Halkyň önümi” hususy kärhanasy  “Karhanalar hakynda” kanunyň esasynda döredildi. Gysga taryhynyň barlygyna garamazdan, kärhana 2 ga hususy böleg ýerinde   öz hususy zowydyny guryp, gurlyşyk-gurnama işleri ýerine ýetimek bilen  we barlaghanalaryny açmak bilen, önümçilikde, hyzmatda hem-de täze önümleri oýlap tapmakda tejribesi bar.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>






//             <MDBContainer className='mt-5'>
//                 <MDBRow>
//                     <MDBCol lg={6}>
//                         <h1 className='display-5 text-black fw-bold'>Biz Barada</h1>
//                     </MDBCol>
//                     <MDBCol lg={6}>
//                         <p>
//                             Biziň kompaniýamyz ekologiýa we ykdysady durnukly çözgütleri döretmäge gönükdirilen öňdebaryjy kärhanadyr. Esasy maksadymyz – dünýä bazarynda ýokary hilli önümler we innowasion hyzmatlar bilen öz ornumyzy üpjün etmek we daşky gurşawy goramak bilen baglanyşykly işleri ilerletmekdir.
//                         </p>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>

//             {/* Опыт */}
//             <MDBContainer className="mt-5">
//                 <MDBRow>
//                     <MDBCol lg={6}>
//                         <p>Önümçilik bazarda</p>
//                         <h1 className="display-1 fw-bolder text-black">{experience}+</h1>
//                     </MDBCol>
//                     <MDBCol lg={6}>
//                         <div
//                             style={{
//                                 height: '400px',
//                                 backgroundImage: `url(${images[currentImage]})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 borderRadius: '8px',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                                 transition: 'background-image 1s ease-in-out',
//                             }}
//                         ></div>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>

//             {/* Анимация линий */}
//             <MDBContainer className='bg-dark' fluid>

//                 <MDBContainer className="mt-5">
//                     <MDBRow className='mt-5'>
//                         {images.map((_, index) => (
//                             <MDBCol className="mt-5 mb-5 text-white" lg={4} key={index}>
//                                 <div
//                                     className={`line ${activeLine === index ? 'active' : ''}`}
//                                 ></div>
//                                 <h5 className='mt-4'>0{index + 1}</h5>
//                                 <h4 className='fw-bolder mt-4'>
//                                     {index === 0
//                                         ? 'Kärhananyň maksady'
//                                         : index === 1
//                                             ? 'Önümçilikde'
//                                             : 'Hyzmatda'}
//                                 </h4>
//                                 <p className='mt-4'>
//                                     {index === 0
//                                         ? 'Kärhananyň esasy maksady dünýa bazarynda öz ornuny ýokary hilli  önümçilikler we hyzmatlar bilen tanatmak. '
//                                         : index === 1
//                                             ? 'Tebigata hem-de daşky gurşaga zyýan ýetirýan nebit galyndylaryny we polmir galyndylaryny reginerasiýa  önümçiligini ýerine ýetirmek. '
//                                             : 'Esasan nebit-gaz himiýa we beýleki pudaklarda senagat howpsuzlygy, hill we ölçegleriň takyklygy boýunça hyzmat işlerini ýerine ýetirmek.  '}
//                                 </p>
//                             </MDBCol>
//                         ))}
//                     </MDBRow>
//                 </MDBContainer>


//             </MDBContainer>

//             <MDBContainer className='my-5'>
//                 <h1 className="text-black">Biziň sertifikatlarymyz we Ygtyýarnamalarymyz</h1>

//                 <div className='d-flex mb-5'>
//                     <div className='line2'></div>
//                     <h6 className='logo-color'>Sertifikat & Ygtyýarnama</h6>
//                 </div>
//                 Biziň maksadymyz müşderilerimize iň gowy hyzmaty hödürlemekdir — wagt bilen synagdan geçen we hünärmenler tarapyndan tassyklanan ygtybarly çözgütler.
//                 <p></p>

//                 <Recommend />
//             </MDBContainer>


//             <Button />
//         </>
//     );
// }

// export default About;
