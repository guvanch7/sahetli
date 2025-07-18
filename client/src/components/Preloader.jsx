import { useEffect, useState } from 'react';
import './preloader.css';
import logo from '../assets/preloader.png';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [showImage, setShowImage] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Через 2 сек рисования ромба показываем картинку
    const imgTimer = setTimeout(() => setShowImage(true), 2000);

    // Через ещё 1 сек скрываем прелоудер
    const endTimer = setTimeout(() => setFinished(true), 3000);

    return () => {
      clearTimeout(imgTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="preloader-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 2} }}
        >
          <svg viewBox="0 0 500 500" className="diamond-svg">
            <path
              className="diamond-path"
              d="
                M100,100
                L400,100
                L475,250
                L250,475
                L25,250
                Z
              "
            />
          </svg>

          {showImage && (
            <motion.img
              src={logo}
              alt="logo"
              className="preloader-logo mt-4"
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 2.3 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
