
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Track window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive sizes
  let headingSize = "36px";
  let infoSize = "18px";
  let inputSize = "16px";
  let sectionPadding = "60px 20px";
  let formGap = "15px";

  if (windowWidth < 768) {
    headingSize = "28px";
    infoSize = "16px";
    inputSize = "14px";
    sectionPadding = "40px 15px";
    formGap = "10px";
  } else if (windowWidth >= 768 && windowWidth < 1024) {
    headingSize = "32px";
    infoSize = "17px";
    inputSize = "15px";
    sectionPadding = "50px 20px";
    formGap = "12px";
  }

  // Inline styles
  const styles = {
    section: {
      padding: sectionPadding,
      backgroundColor: "#f9fafb",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
    },
    heading: {
      fontSize: headingSize,
      marginBottom: "20px",
      color: "#0f172a",
    },
    info: {
      fontSize: infoSize,
      marginBottom: "10px",
      color: "#1e293b",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: formGap,
      marginTop: "30px",
    },
    input: {
      padding: "12px",
      fontSize: inputSize,
      borderRadius: "5px",
      border: "1px solid #cbd5e1",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
    },
    textarea: {
      padding: "12px",
      fontSize: inputSize,
      borderRadius: "5px",
      border: "1px solid #cbd5e1",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
    },
    button: {
      padding: "12px 25px",
      fontSize: inputSize,
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#38bdf8",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      style={styles.section}
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 style={styles.heading}>Contact Us</h2>
      
      <p style={styles.info}>Email: info@techstrotawebsite.com</p>
      <p style={styles.info}>Phone: +123 456 7890</p>
      <p style={styles.info}>Address: 123 Tech Street, City, Country</p>
      
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Message" rows="5" style={styles.textarea} required />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </motion.section>
  );
};

export default Contact;