import { useState, useEffect } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBRow, MDBCol,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBFooter,

} from 'mdb-react-ui-kit';
import './components/navbar.css';
import './App.css';
import logo from './assets/logo.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import tmIcon from './assets/icons/TM.png'
import ruIcon from './assets/icons/RU.png'
import enIcon from './assets/icons/EN.png'



import Header from './components/Header';
import Button from './components/Button';
import Home from './pages/Home';
import About from './pages/About';
import Construction from './pages/Construction';
import Contacts from './pages/Contacts';
import LangDrop from './components/LangDrop';

function App() {
  const [openBasic, setOpenBasic] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [hovered, setHovered] = useState(false);





  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <div>

        <Router>


          <MDBNavbar
            expand="xl"
            light
            className={`container navbar ${scrolled ? 'scrolled' : ''} ${openBasic ? 'menu-open' : ''} ${hovered ? "menu-open" : ""} ${location.pathname === '/contacts' ? 'contacts-navbar' : ''}`}
            fixed="top"
            onMouseLeave={() => setHovered(false)}
            onMouseEnter={() => setHovered(true)}
            
          >
            <MDBContainer fluid>
              <MDBNavbarBrand className='mx-5' href="#">
                <img src={hovered || scrolled ? logo : logo} style={{ height: '70px', transition: "0.3s ease-in-out" }}
                  alt="Brand Logo" />
              </MDBNavbarBrand>

              <MDBNavbarToggler
                className="text-white"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setOpenBasic(!openBasic)}
              >
                <MDBIcon icon="bars" fas />
              </MDBNavbarToggler>

              <MDBCollapse navbar className="justify-content-end" open={openBasic}>
                <MDBNavbarNav className="mb-2 mb-lg-0 align-items-center justify-content-center">
                  <MDBNavbarItem className="me-3">
                    <MDBNavbarLink className="nav-link">
                      <Link to="/" className="nav-link">
                          {t("navLink")}
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-3">
                    <MDBNavbarLink>
                      <Link to="/about " className="nav-link">
                        {t("navLink3")}
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-3">
                    <MDBDropdown>
                      <MDBDropdownToggle tag="a" className="nav-link" role="button">
                        {t("navLink2")}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link><Link to=' '>{t("oilgas")}</Link></MDBDropdownItem>
                        <MDBDropdownItem link><Link to=' '>{t("vehicle")}</Link></MDBDropdownItem>
                        <MDBDropdownItem link><Link to=' '>{t("electric")}</Link></MDBDropdownItem>
                        <MDBDropdownItem link><Link to='/ '>{t("hvac")}</Link></MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>


                  <MDBNavbarItem className="me-3">
                    <MDBNavbarLink>
                      <Link to="/contacts" className="nav-link">
                        {t("navLink4")}
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem  >
                    <MDBNavbarLink>
                     <LangDrop />
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                

                </MDBNavbarNav>
              </MDBCollapse>


            </MDBContainer>
          </MDBNavbar>

          {/* <Header /> */}


          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/about' Component={About}></Route>
            {/* <Route path='/certifications' Component={Certifications}></Route> */}
            <Route path='/construction' Component={Construction}></Route>
            {/* <Route path='/laboratory' Component={Laboratory}></Route> */}
            <Route path='/contacts' Component={Contacts}></Route>
            {/* <Route path='/suwulag' Component={}></Route> */}
            {/* <Route path='/betbagtchylyk' Component={}></Route> */}
            {/* <Route path='/karhana' Component={}></Route> */}
            {/* <Route path='/rayatHukuk' Component={}></Route> */}
            {/* <Route path='/hususyEyechilik' Component={eyHukuk}></Route> */}
            {/* <Route path='/contacts' Component={Contacts}></Route> */}
          </Routes>



          <MDBFooter bgColor='light' className=' text-center text-lg-start text-muted'>


            <section className='text-black'>
              <MDBContainer className='text-center text-md-start  '>
                <MDBRow className='pt-5'>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      <img src={logo} className='img-fluid w-75' alt="" />

                    </h6>
                    <p>

                    </p>
                  </MDBCol>

                  <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Esasy</h6>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        Home
                      </Link>
                    </p>
                    <p>
                      <Link to={'/about'} className='text-reset'>
                        About Us
                      </Link>
                    </p>
                    <p>
                      <Link to={'/contacts'} className='text-reset'>
                        Construction
                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        Manufactory
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Goşmaça</h6>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        AI Technologies

                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        Certifications
                      </Link>
                    </p>
                    <p>
                      <Link to={'/contacts'} className='text-reset'>
                        Contacts
                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        Request
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Habarlaşmak üçin</h6>
                    <p>
                      <MDBIcon color='secondary' icon='home' className='me-2' />
                      Туркменистан, г. Ашхабад, ул. Нобат Багшы (Ленинградская) дом-2
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='envelope' className='me-3' />
                       info@sahetli.com
                       
                    </p>
                    
                    <p>
                      <MDBIcon color='secondary' icon='phone' className='me-3' /> +993 (65) 56 84 67
                    </p>

                    <p>
                      <MDBIcon color='secondary' icon='fax' className='me-3' />
                       +993 (12) 76 11 85
                    </p>
                    <p>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              <p>© Sahetli Hyzmat. Ähli hukuklar goragly</p>
            </div>
          </MDBFooter>

        </Router>
      </div>

    </>
  )
}

export default App
