// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import FsLightbox from "fslightbox-react";
// import {
//     MDBNavbar,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBNavbarToggler,
//     MDBContainer,
//     MDBCard,
//     MDBIcon,
//     MDBCol,
//     MDBRow,
//     MDBCollapse,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardBody,
//     MDBCardImage,
// } from 'mdb-react-ui-kit';

// import license from '../pages/assets/certs/001.jpg'
// import license2 from '../pages/assets/certs/015.jpg'
// import license3 from '../pages/assets/certs/037.jpg'


// import cert1 from '../pages/assets/certs/003.jpg'
// import cert2 from '../pages/assets/certs/022.jpg'
// import cert3 from '../pages/assets/certs/029.jpg'
// import cert4 from '../pages/assets/certs/032.jpg'
// import cert5 from '../pages/assets/certs/033.jpg'
// import { useTranslation } from 'react-i18next';


// function CarouselCert() {
//     const { t, i18n } = useTranslation();

//     const changeLanguage = (language) => {
//       i18n.changeLanguage(language);
//     };


//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         arrows:false,
//         autoplaySpeed: 2500,
//         cssEase: "linear",
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };


//     const settings2 = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         arrows:false,
//         autoplaySpeed: 2500,
//         cssEase: "linear",
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <div className="slider-container mb-5 mt-4">
//             <h1 className="text-black">{t("OurCertificates")}</h1>

//             <div className='d-flex mb-5'>
//                 <div className='line2'></div>
//                 <h6 className='logo-color'>  {t("OurCertificates")}</h6>
//             </div>

//             <p>
//             {t("OurCertificatesDescription")}


//                 <br />
//                 <br />

//                 {t("OurGoal")}

//             </p>
//             <Slider className="justify-content-evenly" {...settings}>


//                 <MDBCol className="p-3"><img src={cert1} className="img-fluid" alt="" /></MDBCol>
//                 <MDBCol className="p-3"><img src={cert2} className="img-fluid" alt="" /></MDBCol>
//                 <MDBCol className="p-3"><img src={cert3} className="img-fluid" alt="" /></MDBCol>
//                 <MDBCol className="p-3"><img src={cert4} className="img-fluid" alt="" /></MDBCol>
//                 <MDBCol className="p-3"><img src={cert5} className="img-fluid" alt="" /></MDBCol>
//             </Slider>

//             <h1 className="text-black mt-5">{t("OurLicenses")}</h1>

//             <Slider className="justify-content-evenly" {...settings2}>


//                 <MDBCol className="p-3"><img src={license} className="img-fluid" alt="" /></MDBCol>
//                 <MDBCol className="p-3"><img src={license2} className="img-fluid" alt="" /></MDBCol>
//                 <MDBCol className="p-3"><img src={license3} className="img-fluid" alt="" /></MDBCol>
//             </Slider>
//         </div>
//     );
// }

// export default CarouselCert;
