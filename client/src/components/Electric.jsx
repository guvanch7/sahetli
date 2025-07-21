import React from "react";
import { MDBContainer, MDBCol } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import electric1 from "../assets/image/electric.jpg";
import electric2 from "../assets/image/electric2.jpg";
import electric3 from "../assets/image/electric3.jpg";

const ElectricSection = () => {
  return (
    <motion.div
      id="electricService"
      className="py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <MDBContainer
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Текст */}
        <MDBCol md="6">
          <h2 className="fw-bold logo-txt-color mb-3">⚡ Электроэнергетика</h2>
          <p className="fs-6">
            Предоставляем комплексные решения в сфере электроэнергетики, включая
            поставку оборудования, монтаж и обслуживание электросетей и систем.
          </p>
        </MDBCol>

        {/* Изображения через CSS Grid */}
        <MDBCol md="5">
          <div style={gridContainer}>
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={imgWrapperStyle}
            >
              <img src={electric1} alt="Electric 1" style={imgStyle} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              style={imgWrapperStyle}
            >
              <img src={electric2} alt="Electric 2" style={imgStyle} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                ...imgWrapperStyle,
                gridColumn: "1 / span 2",
                justifySelf: "center",
              }}
            >
              <img src={electric3} alt="Electric 3" style={imgStyle} />
            </motion.div>
          </div>
        </MDBCol>
      </MDBContainer>
    </motion.div>
  );
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "auto auto",
  gap: "1rem",
  maxWidth: "400px",
  margin: "0 auto",
};

const imgWrapperStyle = {
  width: "100%",
  height: "150px",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "20px",
};

export default ElectricSection;
