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

                        <MDBCol  lg={6}>
                            <img src={oilgas2} className='img-fluid rounded-9' alt="" />
                            <h2 className='text-black fw-bolder'>Почему клиенты выбирают <br />  <span className='logo-color' data-aos='fade-right' data-aos-duration="520" data-aos-delay="300"> Sahetli Hyzmat?</span></h2>

                            <div className='row justify-content-center '>

                                <div className='col-lg-4 text-center' data-aos='fade-up' data-aos-duration="320" data-aos-delay="300">
                                    <img src={trusted} style={{ width: '4rem' }} alt="" />
                                    <p className='text-black fw-bold'>Качество и надёжность</p>
                                </div>

                                <div className='col-lg-4 text-center' data-aos='fade-up' data-aos-duration="320" data-aos-delay="400">
                                    <img src={logistic} style={{ width: '4rem' }} alt="" />
                                    <p className='text-black fw-bold'>Оперативная логистика</p>
                                </div>

                                <div className='col-lg-4 text-center' data-aos='fade-up' data-aos-duration="320" data-aos-delay="500">
                                    <img src={techSupport} style={{ width: '4rem' }} alt="" />
                                    <p className='text-black fw-bold'>Техническая поддержка</p>
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
                        <h4 className='logo-txt-color fw-bolder mb-2'>Очистка и обслуживание вентиляционных систем</h4>
                    </div>
                    <MDBCol lg={6}>
                        <MDBRow>
                            <MDBCol className='mt-7' data-aos='fade-up' data-aos-delay="300" data-aos-duration="800" lg={6}>
                                <img src={hvac} className='img-fluid rounded-9' alt="" />
                                <div className='rounded-9 text-white px-4 py-3 text-center mt-4' style={{ backgroundColor: "#1c3f7e" }}>
                                    <img src={hvacIcon} className='img-fluid ' alt="" />
                                    <h5  >Профессиональное оборудование</h5>
                                </div>
                            </MDBCol>

                            <MDBCol className='mt-3' data-aos='fade-down' data-aos-duration="1000" data-aos-delay="500" lg={6}>
                                <div className='rounded-9 text-white text-center px-4 py-3  mb-4' style={{ backgroundColor: "#70c2f5" }}>
                                    <img src={checked} className='img-fluid' alt="" />
                                    <h5>Проверенное качество</h5>
                                </div>
                                <img src={hvac2} className='img-fluid rounded-9' alt="" />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol lg={6}>
                        <MDBTabs className='mb-3'>

                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                    Очистка
                                </MDBTabsLink>
                            </MDBTabsItem>

                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                    Обслуживание
                                </MDBTabsLink>
                            </MDBTabsItem>

                            <MDBTabsItem>

                            </MDBTabsItem>

                        </MDBTabs>

                        <MDBTabsContent id='hvacService'>
                            <MDBTabsPane open={basicActive === 'tab1'} >



                                <div className='d-flex mt-2 '>
                                    <div className='line3'></div>
                                    <h4 className='logo-txt-color fw-bolder mb-2'>Очистка вентиляционных систем</h4>
                                </div>

                                <p  >
                                    Чистка воздуховодов позволяет выполнить санитарные нормы, от соблюдения которых зависит самочувствие и здоровье каждого человека. Это важно как в жилых помещениях, так и на рабочих местах, где люди проводят много времени.


                                    <br />
                                    <br />

                                    Мы полностью оснащены современным оборудованием и имеем штат квалифицированных специалистов для эффективного и качественного проведения процесса очистки и дезинфекции

                                    <div className="row justify-content-between mt-2">

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="1000" data-aos-delay="300">
                                            <img className='img-fluid' style={{ width: "5rem" }} src={home} alt="" />
                                            <p className='text-black'>Жилые дома</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="2000" data-aos-delay="500">
                                            <img className='img-fluid' style={{ width: "5rem" }} src={factory} alt="" />
                                            <p className='text-black'>Предприятия</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="3000" data-aos-delay="700">
                                            <img className='img-fluid ' style={{ width: "5rem" }} src={office} alt="" />
                                            <p className='text-black'>Офисные центры</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="4000" data-aos-delay="900">
                                            <img className='img-fluid ' style={{ width: "5rem" }} src={restaurant} alt="" />
                                            <p className='text-black'>Рестораны</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="5000" data-aos-delay="1100">
                                            <img className='img-fluid ' style={{ width: "5rem" }} src={airport} alt="" />
                                            <p className='text-black'>Аэропорты</p>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-6' data-aos='fade-up' data-aos-duration="6000" data-aos-delay="1300">
                                            <img className='img-fluid ' style={{ width: "5rem" }} src={railway} alt="" />
                                            <p className='text-black'>Вокзалы</p>
                                        </div>
                                    </div>
                                </p>


                            </MDBTabsPane>

                            <MDBTabsPane open={basicActive === 'tab2'}>
                                <div className='d-flex mt-2 '>
                                    <div className='line3'></div>
                                    <h4 className='logo-txt-color fw-bolder mb-2'>Обслуживание вентиляционных систем</h4>
                                </div>
                                <h5 className='text-black'>Видеодиагностика</h5>
                                <p>Диагностика воздуховодного канала с помощью специальной аппаратуры позволяет в режиме реального времени оценить состояние внутренних стенок, степень засорения, разновидность отложений. Видеоинспекция вентиляции позволяет эффективно и качественно прочистить систему, улучшить микроклиматические показатели производственных помещений.

                                    <br />
                                    <br />

                                    Заказать видеоинспекцию объекта можно в нашей компании. Опытный специалист с соответствующей квалификацией и подготовкой быстро выявит дефект сети, оценит степень деградации материала, выявит причину засора. Закажите чистку вентиляции  у нашей компании, мы комплексно устраним проблемы воздуховодов.
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
                        <h4 className='logo-txt-color fw-bolder '>Обратившись к нам вы получите:</h4>
                    </div>

                    <MDBCol className='mt-3' lg={6}>


                        <div class="list-2__item " data-aos='fade-right' data-aos-duration="320" data-aos-delay="200">
                            <div class="we-work__item bg-light px-5 py-4 rounded-2xl   ">
                                <div class="we-work__img  mb-4">
                                    <img loading="lazy" style={{ width: '6rem' }} src={podhod} alt="" />
                                </div>
                                <h5 class="mb-2 fw-bolder">
                                    Комплексный подход
                                </h5>
                                <p class=" ">
                                    От консультации до внедрения — мы сопровождаем клиента на каждом этапе, предлагая полное решение под задачу.
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
                                    Высокое качество и надёжность
                                </h5>
                                <p class=" ">
                                    Работаем с проверенными технологиями и поставщиками, обеспечивая стабильный результат.
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
                                    Оперативность и гибкость
                                </h5>
                                <p class=" ">
                                    Быстро реагируем на запросы, адаптируемся под задачи, обеспечиваем своевременные поставки и выполнение.
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
                                    Экспертизу и поддержку
                                </h5>
                                <p class=" ">
                                    Глубокое понимание отрасли позволяет предлагать обоснованные и грамотные технические решения.
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
                            <h4 className='logo-txt-color fw-bolder mb-2'>Для связи</h4>
                        </div>

                        <h5 className='text-black'>Мы быстро и ясно разъясняем любые ваши вопросы.</h5>

                        <p>Мы готовы предложить вам наилучшие решения. Мы будем тесно работать с вами на каждом этапе и предоставлять необходимые консультации.</p>



                        <MDBRow className='justify-content-center  '>
                            <MDBCol className="bg-light mx-3 p-3 my-1 text-center shadow-5 rounded-8" data-aos="flip-up" data-aos-duration="620" data-aos-delay="300" lg={4}>
                                <img src={employee} alt="" />
                                <p className='mt-3'>Опытные специлисты</p>
                            </MDBCol>
                            <MDBCol className="bg-light  mx-3 p-3 my-1  text-center rounded shadow-5" data-aos="flip-up" data-aos-duration="620" data-aos-delay="400" lg={4}>
                                <img src={contract} className='img-fluid' alt="" />
                                <p className='mt-3'>  Прозрачные условия</p>
                            </MDBCol>
                            <MDBCol className="bg-light  mx-3 p-3 my-4 text-center shadow-5 rounded" data-aos="flip-up" data-aos-duration="620" data-aos-delay="500" lg={4}>
                                <img src={responsibility} alt="" />
                                <p className='mt-3'>Надёжность и ответственность</p>
                            </MDBCol>

                            <MDBCol className="bg-light  mx-3 p-3 my-4 text-center  shadow-5 rounded" data-aos="flip-up" data-aos-duration="620" data-aos-delay="600" lg={4}>
                                <img src={approach} alt="" />
                                <p className='mt-3'>Индивидуальный подход</p>
                            </MDBCol>
                        </MDBRow>


                    </MDBCol>

                    <MDBCol className='bg-white rounded-5 p-5 mb-5 shadow-5' lg={6}>
                        <h5 className='logo-txt-color text-center mb-4'>Оставь заявку прямо сейчас!</h5>
                        <form >
                            <input
                                placeholder="Имя фамилия"
                                type="text"
                                name="fullName"
                                className="mb-3 form"
                                required

                            />

                            <input
                                placeholder="Номер телефона"
                                type="tel"
                                name="telephone"
                                className="mb-3 form"
                                required
                            />
                            <textarea
                                placeholder="Сообщение "
                                name="message"
                                className="mb-3 form"
                                rows={4}
                                required
                            />
                            <div className="text-center d-grid gap-2  mx-auto"  >
                                <MDBBtn type="submit" color="" className="text-white fw-bolder" style={{ backgroundColor: '#1c3f7e' }}>
                                    Отправить
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