import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Container animation with stagger
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  // Slide-in + fade animation for items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  // Why Choose Us list items
  const whyChooseUs = [
    {
      title: "End-to-End Services",
      description:
        "From design to deployment, Techstota handles the complete lifecycle of your project.",
      bgColor: "#e0f2fe",
    },
    {
      title: "Custom Solutions",
      description:
        "Every solution is tailored to your business goals and audience for maximum impact.",
      bgColor: "#fef3c7",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We use modern frameworks and best practices to build fast, scalable, and reliable products.",
      bgColor: "#ecfdf5",
    },
    {
      title: "Collaborative Approach",
      description:
        "We work closely with you using transparent communication and agile workflows.",
      bgColor: "#fce7f3",
    },
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#f0f4f8",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "36px", color: "#0f172a", marginBottom: "15px" }}>
          About Techstrota
        </h2>
        <p style={{ color: "#475569", fontSize: "18px", marginBottom: "30px" }}>
          Techstroota is a team of passionate developers and designers dedicated
          to creating modern, responsive, and scalable web solutions. Our mission is
          to help businesses grow online with high-quality websites and web apps.
        </p>
      </motion.div>

      {/* Why Choose Techstrota Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          fontSize: "30px",
          color: "#0f172a",
          marginTop: "40px",
        }}
      >
        Why Choose our Techstrota
      </motion.h2>

      {/* Why Choose Us Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {whyChooseUs.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            style={{
              background: item.bgColor,
              borderRadius: "12px",
              padding: "20px",
              width: "250px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <h3 style={{ fontSize: "20px", color: "#0f172a", marginBottom: "10px" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "16px", color: "#475569" }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;