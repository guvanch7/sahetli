import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MDBContainer, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import electric1 from "../assets/image/electric.jpg";
import electric2 from "../assets/image/electric2.jpg";
import electric3 from "../assets/image/electric3.jpg";

const images = [electric1, electric2, electric3];

const ElectricScrollSection = () => {
  const ref = useRef(null);

  const steps = images.length;
  const scrollHeight = (steps + 2) * 100;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Делим прогресс на равные шаги
  const stepSize = 1 / steps;
  const steppedIndex = useTransform(scrollYProgress, (v) =>
    Math.floor(v / stepSize)
  );

  // Плавная анимация перехода (по желанию можно убрать)
  const imageIndex = useSpring(steppedIndex, {
    stiffness: 120,
    damping: 20,
  });

  const getImageStyles = (i) => {
    const opacity = useTransform(imageIndex, (idx) => (Math.round(idx) === i ? 1 : 0));
    const scale = useTransform(imageIndex, (idx) => (Math.round(idx) === i ? 1 : 0.9));
    const x = useTransform(imageIndex, (idx) => (Math.round(idx) === i ? 0 : 100 * (i - idx)));
    const zIndex = useTransform(imageIndex, (idx) => (Math.round(idx) === i ? 10 : 0));
    const filter = useTransform(imageIndex, (idx) => (Math.round(idx) === i ? "blur(0px)" : "blur(8px)"));

    return { opacity, x, scale, filter, zIndex };
  };

  return (
    <div className="d-none d-md-block" id="electricService"
      ref={ref}
      style={{
        position: "relative",
        height: `${scrollHeight}vh`,
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 3rem",
          zIndex: 10,
        }}
      >
        <MDBContainer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <MDBCol md="6" style={{ maxWidth: "45%" }}>
            <h2 className="fw-bold logo-txt-color mb-3">⚡ Электроэнергетика</h2>
            <p className="  fs-6">
              Также наша компания предлагает транспортные услуги любой сложности – от индивидуальных до масштабных групповых перевозок.
            </p>

          </MDBCol>

          <MDBCol
            md="6"
            style={{
              position: "relative",
              maxWidth: "45%",
              height: "400px",
              overflow: "hidden",
              flexShrink: 0,
              borderRadius: "20px",
            }}
          >
            {images.map((img, i) => {
              const { opacity, x, scale, filter, zIndex } = getImageStyles(i);
              return (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Electric ${i}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    opacity,
                    x,
                    scale,
                    filter,
                    zIndex,
                    pointerEvents: "none",
                    transition: "all 0.5s ease-in-out",
                  }}
                  draggable={false}
                />
              );
            })}
          </MDBCol>
        </MDBContainer>
      </div>
    </div>
  );
};

export default ElectricScrollSection;
