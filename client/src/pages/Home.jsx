import { useState, useEffect, } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
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
import '../style.css';
import '../components/assets/graph.css'

import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Button from '../components/Button';
import Vehicle from '../components/Vehicle';
import Header from '../components/Header';
import Service from '../components/Service';
import Electric from '../components/Electric';
import Form from '../components/Form';
import Graph from '../components/Graph';
import contacts from '../assets/image/contacts.png'
import oilgas from '../assets/image/oilgas.jpg'
import oilgas2 from '../assets/image/oilgas2.jpg'
import hvac from '../assets/image/hvac.jpg'
import hvac2 from '../assets/image/hvac2.jpg'

import oilBg from '../assets/image/bg-oil.jpg'
import podhod from '../assets/icons/processing.png'
import quality from '../assets/icons/award.png'
import support from '../assets/icons/support.png'
import productivity from '../assets/icons/productivity.png'

import hvacIcon from '../assets/icons/hvac-icon.png'
import checked from '../assets/icons/checked.png'
import employee from '../assets/icons/employee.png'
import contract from '../assets/icons/contract.png'
import responsibility from '../assets/icons/responsibility.png'
import approach from '../assets/icons/approach.png'

import home from '../assets/icons/house.png'
import factory from '../assets/icons/warehouse.png'
import office from '../assets/icons/office-center.png'
import restaurant from '../assets/icons/restaurant.png'
import airport from '../assets/icons/airport.png'
import railway from '../assets/icons/station.png'

import trusted from '../assets/icons/integrity.png'
import logistic from '../assets/icons/truck.png'
import techSupport from '../assets/icons/customer-service.png'



import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ElectricScrollSection from '../components/Electric';

function Home() {
    const { t, i18n } = useTranslation();
    const [basicActive, setBasicActive] = useState('tab1');
    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };


    const { state, hash } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // 1) если передали через navigate({state})
        if (state?.scrollTo) {
            const id = state.scrollTo;
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // очищаем state, чтобы больше не скроллить при дальнейших mounts
            navigate(location.pathname, { replace: true, state: {} });
        }
        // 2) (дополнительно) если кто-то всё-таки заходит с хешем в URL
        else if (hash) {
            const id = hash.replace('#', '');
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // удаляем хеш из адресной строки
            window.history.replaceState(null, '', window.location.pathname);
        }
    }, [state, hash, navigate]);


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


    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const cleaningCounter1 = useCounter(185, 1000);  // 12 лет, скорость 10 (чтобы увеличивалось быстрее)
    const cleaningCounter2 = useCounter(15, 1000);  // 12 лет, скорость 10 (чтобы увеличивалось быстрее)
    const productiveWork = useCounter(5, 1000);  // 12 лет, скорость 10 (чтобы увеличивалось быстрее)
    const employees = useCounter(21, 1000);      // 120 специалистов, скорость 10
    const customers = useCounter(64, 1000);

    return (
        <>


            <Header />


            <Service />


            <MDBContainer className="bg-image" id="oilSolutions"
                style={{
                    minHeight: '800px', // минимальная, но не жёсткая высота
                    backgroundPosition: 'center',
                    backgroundImage: `url(${oilBg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    transition: '1s',
                    paddingTop: '4rem',
                    paddingBottom: '4rem'
                }} fluid>
                <MDBContainer>
                    <MDBRow>
                        <div className='d-flex mt-5 '>
                            <div className='line3'></div>
                            <h4 className='logo-txt-color fw-bolder '>{t("footerLink1")}</h4>


                        </div>

                        <MDBCol data-aos='fade-right' data-aos-delay="300" data-aos-duration="800" lg={6}>
                            <h2 className='text-black fw-bolder'>{t("headerShort")}<span className='logo-txt-color'> {t("headerContinue")}</span></h2>

                            <p>{t("oil_equipment_description")}</p>

                            <img src={oilgas} className='img-fluid rounded-9' alt="" />
                        </MDBCol>

                        <MDBCol lg={6}>
                            <img src={oilgas2} className='img-fluid rounded-9' alt="" />
                            <h2 className='text-black fw-bolder'>
                                {t('why_clients_choose')} <br />
                                <span
                                    className='logo-color'
                                    data-aos='fade-right'
                                    data-aos-duration='520'
                                    data-aos-delay='300'
                                >
                                    {t('brand_name_question')}
                                </span>
                            </h2>

                            <div className='row justify-content-center '>

                                <div className='col-lg-4 text-center' data-aos='fade-up' data-aos-duration="320" data-aos-delay="300">
                                    <img src={trusted} style={{ width: '4rem' }} alt="" />
                                    <p className='text-black fw-bold'>{t('quality_and_reliability')}</p>
                                </div>

                                <div className='col-lg-4 text-center' data-aos='fade-up' data-aos-duration="320" data-aos-delay="400">
                                    <img src={logistic} style={{ width: '4rem' }} alt="" />
                                    <p className='text-black fw-bold'>{t('fast_logistics')}</p>
                                </div>

                                <div className='col-lg-4 text-center' data-aos='fade-up' data-aos-duration="320" data-aos-delay="500">
                                    <img src={techSupport} style={{ width: '4rem' }} alt="" />
                                    <p className='text-black fw-bold'>{t('technical_support')}</p>
                                </div>
                            </div>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>


            <Vehicle />

            <ElectricScrollSection />

            <MDBContainer className='mb-6'>
                <MDBRow>
                    <div className='d-flex mt-2 mb-4'>
                        <div className='line3'></div>
                        <h4 className='logo-txt-color fw-bolder mb-2'> {t("ventilation_services")}</h4>
                    </div>
                    <MDBCol lg={6}>
                        <MDBRow>
                            <MDBCol className='mt-7' data-aos='fade-up' data-aos-delay="300" data-aos-duration="800" lg={6}>
                                <img src={hvac} className='img-fluid rounded-9' alt="" />
                                <div className='rounded-9 text-white px-4 py-3 text-center mt-4' style={{ backgroundColor: "#1c3f7e" }}>
                                    <img src={hvacIcon} className='img-fluid ' alt="" />
                                    <h5  > {t("professional_equipment")}</h5>
                                </div>
                            </MDBCol>

                            <MDBCol className='mt-3' data-aos='fade-down' data-aos-duration="1000" data-aos-delay="500" lg={6}>
                                <div className='rounded-9 text-white text-center px-4 py-3  mb-4' style={{ backgroundColor: "#70c2f5" }}>
                                    <img src={checked} className='img-fluid' alt="" />
                                    <h5> {t("proven_quality")}</h5>
                                </div>
                                <img src={hvac2} className='img-fluid rounded-9' alt="" />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol lg={6}>
                        <MDBTabs className='mb-3'>

                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                    {t("cleaning")}
                                </MDBTabsLink>
                            </MDBTabsItem>

                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                    {t("maintenance")}
                                </MDBTabsLink>
                            </MDBTabsItem>

                            <MDBTabsItem>

                            </MDBTabsItem>

                        </MDBTabs>

                        <MDBTabsContent id='hvacService'>
                            <MDBTabsPane open={basicActive === 'tab1'} >



                                <div className='d-flex mt-2 '>
                                    <div className='line3'></div>
                                    <h4 className='logo-txt-color fw-bolder mb-2'> {t("ventilation_cleaning")}</h4>
                                </div>

                                <p  >
                                    {t("duct_cleaning_info")}


                                    <br />
                                    <br />

                                    {t("cleaning_capability")}

                                    <div className="row justify-content-between mt-2">

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="1000" data-aos-delay="300">
                                            <img className='img-fluid' style={{ width: "5rem" }} src={home} alt="" />
                                            <p className='text-black'> {t("residential_buildings")}</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="2000" data-aos-delay="500">
                                            <img className='img-fluid' style={{ width: "5rem" }} src={factory} alt="" />
                                            <p className='text-black'> {t("enterprises")}</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="3000" data-aos-delay="700">
                                            <img className='img-fluid ' style={{ width: "5rem" }} src={office} alt="" />
                                            <p className='text-black'> {t("office_centers")}</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="4000" data-aos-delay="900">
                                            <img className='img-fluid ' style={{ width: "5rem" }} src={restaurant} alt="" />
                                            <p className='text-black'> {t("restaurants")}</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="5000" data-aos-delay="1100">
                                            <img className='img-fluid ' style={{ width: "5rem" }} src={airport} alt="" />
                                            <p className='text-black'> {t("airports")}</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="6000" data-aos-delay="1300">
                                            <img className='img-fluid ' style={{ width: "5rem" }} src={railway} alt="" />
                                            <p className='text-black'> {t("stations")}</p>
                                        </div>
                                    </div>
                                </p>


                            </MDBTabsPane>

                            <MDBTabsPane open={basicActive === 'tab2'}>
                                <div className='d-flex mt-2 '>
                                    <div className='line3'></div>
                                    <h4 className='logo-txt-color fw-bolder mb-2'> {t("ventilation_maintenance")}</h4>
                                </div>
                                <h5 className='text-black'> {t("video_diagnostics")}</h5>
                                <p>
                                    {t("video_diagnostics")}
                                    <br />
                                    <br />

                                    {t("video_inspection_order")}
                                </p>

                                {/* <MDBBtn style={{ backgroundColor: "#1c3f7e" }}>
                                    Подробнее
                                </MDBBtn> */}
                            </MDBTabsPane>

                        </MDBTabsContent>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            <MDBContainer
                className=" mt-4"

            >
                <MDBRow className="justify-content-lg-  mt-5 text-black">
                    <div className='d-flex mt-5 '>
                        <div className='line3'></div>
                        <h4 className='logo-txt-color fw-bolder '>{t("what_you_get")}</h4>
                    </div>

                    <MDBCol className='mt-3' lg={6}>


                        <div class="list-2__item " data-aos='fade-right' data-aos-duration="320" data-aos-delay="200">
                            <div class="we-work__item bg-light px-5 py-4 rounded-2xl   ">
                                <div class="we-work__img  mb-4">
                                    <img loading="lazy" style={{ width: '6rem' }} src={podhod} alt="" />
                                </div>
                                <h5 class="mb-2 fw-bolder">
                                   {t("integrated_approach")}
                                </h5>
                                <p class=" ">
                                    {t("full_support")}
                                </p>
                            </div>
                        </div>
                    </MDBCol>


                    <MDBCol className='mt-3' lg={6}>


                        <div class="list-2__item " data-aos='fade-left' data-aos-duration="320" data-aos-delay="300">
                            <div class="we-work__item bg-light px-5 py-4 rounded-2xl   ">
                                <div class="we-work__img  mb-4">
                                    <img loading="lazy img-fluid" style={{ width: '6rem' }} src={quality} alt="" />
                                </div>
                                <h5 class="mb-2 fw-bolder">
                                   {t("high_quality_reliability")} 
                                </h5>
                                <p class=" ">
                                    {t("trusted_tech_suppliers")} 
                                </p>
                            </div>
                        </div>
                    </MDBCol>



                    <MDBCol className='mt-3' lg={6}>


                        <div class="list-2__item " data-aos='fade-right' data-aos-duration="320" data-aos-delay="400">
                            <div class="we-work__item bg-light px-5 py-4 rounded-2xl   ">
                                <div class="we-work__img  mb-4">
                                    <img loading="lazy" style={{ width: '6rem' }} src={productivity} alt="" />
                                </div>
                                <h5 class="mb-2 fw-bolder">
                                    {t("efficiency_and_flexibility")} 
                                </h5>
                                <p class=" ">
                                    {t("responsive_service")} 
                                </p>
                            </div>
                        </div>
                    </MDBCol>


                    <MDBCol className='mt-3' lg={6}>


                        <div class="list-2__item " data-aos='fade-left' data-aos-duration="320" data-aos-delay="500">
                            <div class="we-work__item bg-light px-5 py-4 rounded-2xl   ">
                                <div class="we-work__img  mb-4">
                                    <img loading="lazy" style={{ width: '6rem' }} src={support} alt="" />
                                </div>
                                <h5 class="mb-2 fw-bolder">
                                    {t("expertise_and_support")} 
                                </h5>
                                <p class=" ">
                                    {t("deep_industry_understanding")} 
                                </p>
                            </div>
                        </div>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>






            <MDBContainer className='mt-5'>
                <MDBRow>


                    <MDBCol lg={6}>
                        <div className='d-flex mt-2 '>
                            <div className='line3'></div>
                            <h4 className='logo-txt-color fw-bolder mb-2'>{t("contactPageTitle")} </h4>
                        </div>

                        <h5 className='text-black'>{t("clear_and_quick_explanation")}</h5>

                        <p>{t("best_solutions_offer")}</p>



                        <MDBRow className='justify-content-center  '>
                            <MDBCol className="bg-light mx-3 p-3 my-1 text-center shadow-5 rounded-8" data-aos="flip-up" data-aos-duration="620" data-aos-delay="300" lg={4}>
                                <img src={employee} alt="" />
                                <p className='mt-3'>{t("experienced_specialists")}</p>
                            </MDBCol>
                            <MDBCol className="bg-light  mx-3 p-3 my-1  text-center rounded shadow-5" data-aos="flip-up" data-aos-duration="620" data-aos-delay="400" lg={4}>
                                <img src={contract} className='img-fluid' alt="" />
                                <p className='mt-3'> {t("transparent_conditions")} </p>
                            </MDBCol>
                            <MDBCol className="bg-light  mx-3 p-3 my-4 text-center shadow-5 rounded" data-aos="flip-up" data-aos-duration="620" data-aos-delay="500" lg={4}>
                                <img src={responsibility} alt="" />
                                <p className='mt-3'>{t("reliability_and_responsibility")}</p>
                            </MDBCol>

                            <MDBCol className="bg-light  mx-3 p-3 my-4 text-center  shadow-5 rounded" data-aos="flip-up" data-aos-duration="620" data-aos-delay="600" lg={4}>
                                <img src={approach} alt="" />
                                <p className='mt-3'>{t("individual_approach")}</p>
                            </MDBCol>
                        </MDBRow>


                    </MDBCol>

                    <MDBCol className='bg-white rounded-5 p-5 mb-5 shadow-5' lg={6}>
                        <h5 className='logo-txt-color text-center mb-4'>{t("leave_request_now")}</h5>
                        <form >
                            <input
                                placeholder={t("placeholderName")}
                                type="text"
                                name="fullName"
                                className="mb-3 form"
                                required

                            />

                            <input
                                placeholder={t("placeholderPhone")}
                                type="tel"
                                name="telephone"
                                className="mb-3 form"
                                required
                            />
                            <textarea
                                placeholder={t("placeholderMessage")}
                                name="message"
                                className="mb-3 form"
                                rows={4}
                                required
                            />
                            <div className="text-center d-grid gap-2  mx-auto"  >
                                <MDBBtn type="submit" color="" className="text-white fw-bolder" style={{ backgroundColor: '#1c3f7e' }}>
                                    {t("buttonSend")}
                                </MDBBtn>
                            </div>
                        </form>

                    </MDBCol>
                </MDBRow>


            </MDBContainer>

















            <Button />


        </>
    )


}


export default Home