import { useEffect, useState } from 'react';
import './preloader.css';
import logo from '../assets/logo.png';
import preloader from '../assets/preloader.png';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  // const [showImage, setShowImage] = useState(false);
  // const [finished, setFinished] = useState(false);

  // useEffect(() => {
  //   // Через 2 сек рисования ромба показываем картинку
  //   const imgTimer = setTimeout(() => setShowImage(true), 2000);

  //   // Через ещё 1 сек скрываем прелоудер
  //   const endTimer = setTimeout(() => setFinished(true), 3000);

  //   return () => {
  //     clearTimeout(imgTimer);
  //     clearTimeout(endTimer);
  //   };
  // }, []);

  const [showShine, setShowShine] = useState(false);
  const [finished, setFinished] = useState(false);

useEffect(() => {
  // Ждём окончания увеличения (2 сек), запускаем блеск
  const shineTimer = setTimeout(() => setShowShine(true), 2000);

  // Через 2 (scale) + 1 (shine) + 1 (pause) = 4 сек — убираем прелоадер
  const endTimer = setTimeout(() => setFinished(true), 5500);

  return () => {
    clearTimeout(shineTimer);
    clearTimeout(endTimer);
  };
}, []);


  return (
    // <AnimatePresence>
    //   {!finished && (
    //     <motion.div
    //       className="preloader-container"
    //       initial={{ opacity: 1 }}
    //       animate={{ opacity: 1 }}
    //       exit={{ opacity: 0, transition: { duration: 2} }}
    //     >
    //       <svg viewBox="0 0 500 500" className="diamond-svg">
    //         <path
    //           className="diamond-path"
    //           d="
    //             M100,100
    //             L400,100
    //             L475,250
    //             L250,475
    //             L25,250
    //             Z
    //           "
    //         />
    //       </svg>

    //       {showImage && (
    //         <motion.img
    //           src={logo}
    //           alt="logo"
    //           className="preloader-logo mt-4"
    //           initial={{ opacity: 0, scale: 2 }}
    //           animate={{ opacity: 1, scale: 2.3 }}
    //           transition={{ duration: 0.8 }}
    //         />
    //       )}
    //     </motion.div>
    //   )}
    // </AnimatePresence>
    <>

       <AnimatePresence>
      {!finished && (
        <motion.div
          className="preloader-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.div
            className="preloader-logo-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.7 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <img src={logo} alt="logo" className="preloader-logo" />
            {showShine && <div className="shine" />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Preloader;
