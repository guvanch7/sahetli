// import { useState, useEffect } from 'react';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
// import '../style.css';
// import './pagecss.css';
// import './labor.css';

// import background from './assets/about.jpg'
// import background2 from './assets/serve.jpg'

// // import background2 from './assets/about2.jpg'
// import license1 from './assets/certs/015.jpg'
// import license2 from './assets/certs/037.jpg'
// import process from '../assets/image/process.jpg'
// import gidrostatiki from '../pages/assets/service/serve4.jpg'
// import pnewmatiki from '../pages/assets/service/serve5.jpg'
// import analiz from '../pages/assets/service/serve6.jpg'
// import dinamiki from '../pages/assets/service/serve7.jpg'
// import permit from '../pages/assets/service/serve8.png'
// import ellik from '../pages/assets/service/serve1.jpg'
// import ortuk from '../pages/assets/service/serve3.jpg'
// import Button from '../components/Button';

// import cert1 from './assets/certs/003.jpg'
// import cert2 from './assets/certs/022.jpg'
// import cert3 from './assets/certs/029.jpg'
// import cert4 from './assets/certs/032.jpg'
// import cert5 from './assets/certs/033.jpg'


// function Laboratory() {


//     return (
//         <>

//             <div
//                 className="bg-image"
//                 style={{
//                     height: '800px',
//                     transition: '1s',
//                     backgroundImage: `url(${background2})`, // Фиксированное изображение
//                 }}
//             >
//                 <div
//                     className="mask"
//                     style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//                 >
//                     <div className="container mt-7">
//                         <div className="pages-txt pt-5 text-white">
//                             <h1 className="mb-3">
//                                 <span> Barlaghana Hyzmatlary</span>
//                             </h1>
//                             <p className="mb-3 fs-3 w-75">
//                                 Barlaghanalary akkreditasiýa ýa-da hyzmat çägini döredip we enjamlary üpjün edip bermek hyzmatlaryň tejribesi bar.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             <MDBContainer className='mt-5'>
//                 <MDBRow className=''>
//                     <h3 className='text-black'>Senagat hopwuzlyk boýunça hil gözegçilik işleri</h3>
//                     <p>  Biziň barlaghana hyzmatlarymyz senagat howpsuzlygy boýunça ähli talaplara laýyklykda ýerine ýetirilýär. Gidrostatiki, pnewmatiki, mehaniki barlaglardan başlap, bozulmaýan usulda hil gözegçilige çenli, şeýle hem örtükleriň we rezin önümleriň synagy bilen, müşderilerimize iň ygtybarly we anyk netijeleri hödürleýäris.  </p>
//                     <div className="cell medium-4">
//                         <MDBCol  className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={gidrostatiki} />
//                                 </div>
//                                 <h2 className="card__title">Gidrostatiki gözegçilik</h2>
//                                 <div className="card__content mt-2">
//                                     <p>Klapynlar, gorag klapynlar, ýokary basyşly gaplar.</p>

//                                 </div>
//                             </a>
//                         </MDBCol>



//                     </div>

//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={pnewmatiki} />
//                                 </div>
//                                 <h2 className="card__title">Pnewmatiki gözegçilik </h2>
//                                 <div className="card__content mt-2">
//                                     <p>Ýokary basyşly  howa datçik görkezijiler.</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>


//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={analiz} />
//                                 </div>
//                                 <h2 className="card__title">Mehaniçeski (fiziki-himiki analiz) </h2>
//                                 <div className="card__content mt-2">
//                                     <p>Döwme, gysma, speketor anliz.</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>


//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={process} />
//                                 </div>
//                                 <h2 className="card__title">Bozulmaýan usuly boýunça hil gözgeçilik </h2>
//                                 <div className="card__content mt-2">
//                                     <p>a)	Ultro ses gözegçilik (fazaly gözenekli) <br /> b)	Metalyň ýadawlygy <br /> c)	Metalyň gatylygy <br /> d) Magnit suspenziýaly</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>

//                     <h3 className='text-black'>Senagat gurnaw sekiler (scaffolding) gözegçilik </h3>

//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={dinamiki} />
//                                 </div>
//                                 <h2 className="card__title">Dinamki synag </h2>
//                                 <div className="card__content mt-2">
//                                     <p>Turbalar, muftalary, sekiler</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>

//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={permit} />
//                                 </div>
//                                 <h2 className="card__title">Işe goýbermek (permit)    </h2>
//                                 <div className="card__content mt-2">
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>

//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={ellik} />
//                                 </div>
//                                 <h2 className="card__title">Rezin ellikler we ş.m    </h2>
//                                 <div className="card__content mt-2">
//                                     <p>Rezin ellikler, gorag izolireleýji açarlar (atagzy we ş.m)</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>


//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={ortuk} />
//                                 </div>
//                                 <h2 className="card__title">Örtükleriň barlagy</h2>
//                                 <div className="card__content mt-2">
//                                     <p>Ýokary naprýaženiýada sarymyň ortükleriniň barlagy</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>


//                     <h3 className='text-black'>Kadalaşdyryjy resminamalar taslamak</h3>

//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={dinamiki} />
//                                 </div>
//                                 <h2 className="card__title">Pasport dikeltme </h2>
//                                 <div className="card__content mt-2">
//                                     <p>TDS-2.601 Kadalaşdyryjy resminamanyň esasynda enjamlarynyň tehniki passportlary dikeltme</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>


//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={dinamiki} />
//                                 </div>
//                                 <h2 className="card__title">Tehniki şertler </h2>
//                                 <div className="card__content mt-2">
//                                     <p>Önümiň tehniki şertlerini taslamak we düzmek</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>


//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={dinamiki} />
//                                 </div>
//                                 <h2 className="card__title">Tehniki reglament</h2>
//                                 <div className="card__content mt-2">
//                                     <p>Önümçilik prosessiniň taslamak we düzmek</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>



//                     <div className="cell medium-4">
//                         <MDBCol className='m-3'>

//                             <a href="#" className="card">
//                                 <div className="card__image">
//                                     <img src={dinamiki} />
//                                 </div>
//                                 <h2 className="card__title">Inžener çözgütleriň maslahaty</h2>
//                                 <div className="card__content mt-2">
//                                     <p>Kemşirlemäniň kartasyny düzüp bermek, metal konstruksiýasynyň  mehaniki dinamiki hasaplamasy</p>
//                                 </div>
//                             </a>
//                         </MDBCol>
//                     </div>
                    
//                 </MDBRow>
//             </MDBContainer>

//             <Button />
//         </>
//     );
// }

// export default Laboratory;
