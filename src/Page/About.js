import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  // WHY CHOOSE US
  const whyChooseUs = [
    {
      title: "End-to-End Services",
      desc: "We handle everything from idea to deployment with complete responsibility.",
      color: "#e0f2fe",
    },
    {
      title: "Custom Solutions",
      desc: "Every project is uniquely designed based on your business goals.",
      color: "#fef3c7",
    },
    {
      title: "Modern Technology",
      desc: "We use the latest tools to ensure fast, scalable, and secure applications.",
      color: "#ecfdf5",
    },
    {
      title: "Client Collaboration",
      desc: "We work closely with clients using transparent and agile methods.",
      color: "#fce7f3",
    },
  ];

  // CORE VALUES
  const values = [
    {
      title: "Innovation",
      desc: "We constantly explore new technologies to stay ahead.",
    },
    {
      title: "Integrity",
      desc: "We maintain honesty and transparency in every project.",
    },
    {
      title: "Quality",
      desc: "Delivering high-quality work is our top priority.",
    },
    {
      title: "Growth",
      desc: "We grow when our clients grow.",
    },
  ];

  // JOURNEY
  const journey = [
    { year: "2020", text: "Founded with a vision to create impactful digital products." },
    { year: "2021", text: "Delivered multiple successful client projects." },
    { year: "2022", text: "Expanded team and improved technical expertise." },
    { year: "2023", text: "Worked with startups and global clients." },
    { year: "2024", text: "Established as a trusted digital partner." },
  ];

  // STATS
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "10+", label: "Team Members" },
  ];

  return (
    <section style={{ background: "#f8fafc", padding: "70px 20px" }}>
      
      {/* HEADER */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}
      >
        <h1 style={{ fontSize: "42px", color: "#0f172a" }}>
          About Techstrota
        </h1>
        <p style={{ color: "#475569", fontSize: "18px", marginTop: "15px" }}>
          Techstrota is a passionate digital solutions company focused on building
          modern, scalable, and user-friendly web applications. We help businesses
          transform ideas into powerful digital experiences that drive growth.
        </p>
      </motion.div>

      {/* STORY */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ textAlign: "center", maxWidth: "800px", margin: "60px auto" }}
      >
        <h2>Our Story</h2>
        <p style={{ color: "#64748b", marginTop: "10px" }}>
          Our journey began with a simple goal — to provide high-quality web solutions
          that are accessible, reliable, and impactful. Over the years, we have evolved
          into a team of skilled professionals delivering solutions across industries.
        </p>
      </motion.div>

      {/* WHY CHOOSE US */}
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ textAlign: "center" }}
      >
        Why Choose Us
      </motion.h2>

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
            whileHover={{ scale: 1.05 }}
            style={{
              background: item.color,
              padding: "20px",
              borderRadius: "12px",
              width: "250px",
            }}
          >
            <h3>{item.title}</h3>
            <p style={{ color: "#475569" }}>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* VISION & MISSION */}
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <motion.h2 initial="hidden" animate="visible" variants={fadeUp}>
          Our Vision
        </motion.h2>
        <p style={{ color: "#64748b" }}>
          To become a globally recognized technology partner known for innovation and quality.
        </p>

        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ marginTop: "30px" }}
        >
          Our Mission
        </motion.h2>
        <p style={{ color: "#64748b" }}>
          To deliver scalable and impactful digital solutions that help businesses grow.
        </p>
      </div>

      {/* CORE VALUES */}
      <div style={{ marginTop: "70px" }}>
        <motion.h2 style={{ textAlign: "center" }} initial="hidden" animate="visible" variants={fadeUp}>
          Core Values
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
            maxWidth: "1000px",
            marginInline: "auto",
          }}
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3>{item.title}</h3>
              <p style={{ color: "#64748b" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* JOURNEY */}
      <div style={{ marginTop: "70px", textAlign: "center" }}>
        <motion.h2 initial="hidden" animate="visible" variants={fadeUp}>
          Our Journey
        </motion.h2>

        {journey.map((item, index) => (
          <motion.p
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ color: "#475569", marginTop: "10px" }}
          >
            <strong>{item.year}:</strong> {item.text}
          </motion.p>
        ))}
      </div>

      {/* STATS */}
      <div style={{ marginTop: "70px", background: "#0f172a", padding: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} style={{ color: "#fff", textAlign: "center" }}>
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CULTURE */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ textAlign: "center", maxWidth: "800px", margin: "70px auto 0" }}
      >
        <h2>Our Culture</h2>
        <p style={{ color: "#64748b" }}>
          We believe in teamwork, continuous learning, and innovation. Our culture
          encourages creativity and collaboration to deliver the best results.
        </p>
      </motion.div>
    </section>
  );
};

export default About;