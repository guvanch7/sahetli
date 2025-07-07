import React, { useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { v4 as uuidv4 } from "uuid";

import { config } from "react-spring";
import cert1 from '../pages/assets/certs/003.jpg'
import cert2 from '../pages/assets/certs/022.jpg'
import cert3 from '../pages/assets/certs/029.jpg'
import cert4 from '../pages/assets/certs/032.jpg'
import cert5 from '../pages/assets/certs/033.jpg'
import cert6 from '../pages/assets/certs/001.jpg'
import cert7 from '../pages/assets/certs/015.jpg'
import cert8 from '../pages/assets/certs/037.jpg'

import Lightbox from "yet-another-react-lightbox";
const Recommend = () => {


  const slides = [
    {
      key: uuidv4(),
      content: <img src={cert1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={cert2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={cert3} alt="3" />
    },

    {
      key: uuidv4(),
      content: <img src={cert4} alt="3" />
    },

    {
      key: uuidv4(),
      content: <img src={cert5} alt="3" />
    },

    {
      key: uuidv4(),
      content: <img src={cert6} alt="3" />
    },

    {
      key: uuidv4(),
      content: <img src={cert7} alt="3" />
    },

    {
      key: uuidv4(),
      content: <img src={cert8} alt="3" />
    }



  ];
  const [customState, setCustomState] = useState({
    goToSlide: true,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
    autoplay: true,
    autoplaySpeed: 100
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const onChangeSlide = () => {
    const len = slides.length;
    const { goToSlide } = customState;
    if (goToSlide === len - 1) {
      setCustomState((prevState) => {
        return {
          ...prevState,
          goToSlide: 0
        };
      });
    } else {
      setCustomState((prevState) => {
        return {
          ...prevState,
          goToSlide: prevState.goToSlide + 1
        };
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      onChangeSlide();
    }, [5000]);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ width: "80%", height: "30rem", margin: "0 4.5rem" }}>
      <Carousel
        slides={slides}
        goToSlide={customState.goToSlide}
        offsetRadius={customState.offsetRadius}
        showNavigation={customState.showNavigation}
        animationConfig={customState.config}
        autoPlay={true}
        interval={customState.autoplaySpeed}
        infiniteLoop={true}
        dynamicHeight={true}
        ref={(slider) => slider}
        {...settings}
      ></Carousel>
    </div>
  );
}



export default Recommend;