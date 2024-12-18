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
import './App.css';
import './components/navbar.css';
import logo from './assets/logo.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import tmIcon from './assets/icons/TM.png'
import ruIcon from './assets/icons/RU.png'
import enIcon from './assets/icons/EN.png'

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Construction from './pages/Construction';


function App() {
  const [openBasic, setOpenBasic] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const getLanguageIcon = () => {
    switch (selectedLanguage) {
      case 'en': return enIcon;
      case 'ru': return ruIcon;
      case 'tm': return tmIcon;
      default: return enIcon;
    }
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



  return (
    <>
      <div>

        <Router>


          <MDBNavbar
            expand="lg"
            light
            className={`navbar ${scrolled ? 'scrolled' : ''} ${openBasic ? 'menu-open' : ''}`}
            fixed="top"
          >
            <MDBContainer>
              <MDBNavbarBrand href="#">
                <img src={logo} style={{height:'100px'}} alt="Brand Logo" />
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
                  <MDBNavbarItem className="me-4">
                    <MDBNavbarLink className="nav-link">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-4">
                    <MDBNavbarLink>
                      <Link to="/about" className="nav-link">
                        About Us
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-4">
                    <MDBDropdown>
                      <MDBDropdownToggle tag="a" className="nav-link" role="button">
                        Services
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link><Link to='/construction'>Construction</Link></MDBDropdownItem>
                        <MDBDropdownItem link>Manufacturing</MDBDropdownItem>
                        <MDBDropdownItem link>Artificial Intelligence</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-4">
                    <MDBNavbarLink>
                      <Link to="/certifications" className="nav-link">
                        Certifications
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem className="me-4">
                    <MDBNavbarLink>
                      <Link to="/contacts" className="nav-link">
                        Contacts
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <div className="language-selector  ms-5">
                    <select
                      className="custom-select"
                      onChange={(e) => changeLanguage(e.target.value)}
                    >
                      <option value="en">
                        <div className="d-flex align-items-center">
                          <img src={enIcon} alt="English" width="20" className="me-2" /> English
                        </div>
                      </option>
                      <option value="ru">
                        <div className="d-flex align-items-center">
                          <img src={ruIcon} alt="Русский" width="20" className="me-2" /> Русский
                        </div>
                      </option>
                      <option value="tm">
                        <div className="d-flex align-items-center">
                          <img src={tmIcon} alt="Türkmen" width="20" className="me-2" /> Türkmen
                        </div>
                      </option>
                    </select>
                  </div>
                </MDBNavbarNav>
              </MDBCollapse>

              {/* Селект в правом углу */}

            </MDBContainer>
          </MDBNavbar>

          {/* <Header /> */}


          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/about' Component={About}></Route>
            <Route path='/certifications' Component={Certifications}></Route>
            <Route path='/construction' Component={Construction}></Route>
            {/* <Route path='/isBeriji' Component={}></Route> */}
            {/* <Route path='/awtoulag' Component={}></Route> */}
            {/* <Route path='/suwulag' Component={}></Route> */}
            {/* <Route path='/betbagtchylyk' Component={}></Route> */}
            {/* <Route path='/karhana' Component={}></Route> */}
            {/* <Route path='/rayatHukuk' Component={}></Route> */}
            {/* <Route path='/hususyEyechilik' Component={eyHukuk}></Route> */}
            {/* <Route path='/contacts' Component={Contacts}></Route> */}
          </Routes>




          <MDBFooter bgColor='light' className='mt-5 text-center text-lg-start text-muted'>


            <section className='text-black'>
              <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      {/* <img src={durnukly} className='img-fluid w-75' alt="" /> */}

                    </h6>
                    <p>

                    </p>
                  </MDBCol>

                  <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>{t("footerHeader1")}</h6>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/about'} className='text-reset'>
                        {t("navLink3")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/contacts'} className='text-reset'>
                        {t("navLink4")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink5")}
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>{t("footerHeader2")}</h6>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink6")}

                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink7")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink2")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink8")}
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>{t("footerHeader3")}</h6>
                    <p>
                      <MDBIcon color='secondary' icon='home' className='me-2' />
                      {t("mapAddr")}
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='envelope' className='me-3' />
                      info@ho.com.tm
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='envelope' className='me-3' />
                      info@ho.com.tm
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='phone' className='me-3' /> +993 71 12 34 56
                    </p>
                    <p>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              <p>{t("footerTxt")}</p>
            </div>
          </MDBFooter>

        </Router>
      </div>

    </>
  )
}

export default App
