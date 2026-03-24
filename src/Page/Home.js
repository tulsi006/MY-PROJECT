import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  // Track window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
  const textVariant = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const buttonVariant = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } };
  const imageVariant = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } } };

  // Responsive container style
  const isMobile = windowWidth < 768;
  const styles = {
    section: { padding: "60px 20px", backgroundColor: "#f0f4f8" },
    container: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row", // stack on mobile
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1200px",
      margin: "0 auto",
      gap: "20px",
    },
    text: { flex: 1, minWidth: "280px", textAlign: isMobile ? "center" : "left" },
    heading: { fontSize: isMobile ? "28px" : "40px", color: "#0f172a", marginBottom: "20px" },
    paragraph: { fontSize: isMobile ? "16px" : "18px", marginBottom: "30px", color: "#1e293b" },
    button: {
      backgroundColor: "#38bdf8",
      color: "white",
      padding: isMobile ? "10px 20px" : "12px 25px",
      borderRadius: "5px",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
      outline: "none",
    },
    imageContainer: { flex: 1, minWidth: "280px", display: "flex", justifyContent: "center", marginBottom: isMobile ? "20px" : "0" },
    image: { maxWidth: "100%", borderRadius: "10px", boxShadow: "0 15px 40px rgba(0,0,0,0.2)" },
  };

  return (
    <section style={styles.section}>
      <motion.div style={styles.container} variants={containerVariants} initial="hidden" animate="visible">
        {/* Text */}
        <motion.div style={styles.text} variants={textVariant}>
          <h1 style={styles.heading}>Welcome to Techstrotawebsite</h1>
          <p style={styles.paragraph}>
            We create modern, responsive, and scalable web solutions for your business.
          </p>
          <motion.button
            style={styles.button}
            variants={buttonVariant}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div style={styles.imageContainer} variants={imageVariant}>
          <img src="/images/home/img1.jpg" alt="Tech solutions" style={styles.image} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;