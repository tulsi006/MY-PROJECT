
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Web & App Development",
    description:
      "High-performance websites and mobile apps for seamless user experiences.",
    points: [
      "Custom website development",
      "Progressive Web Apps (PWAs)",
      "iOS & Android apps",
      "API integrations",
      "Optimization & maintenance",
    ],
    image: "/images/services/img1.jpg",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions to improve business efficiency.",
    points: [
      "Enterprise software",
      "ERP & CRM systems",
      "Automation tools",
      "SaaS platforms",
      "Legacy modernization",
    ],
    image: "/images/services/img2.webp",
  },
  {
    title: "UI/UX Design",
    description:
      "Modern, intuitive, and engaging user experiences.",
    points: [
      "User research",
      "Wireframing & prototyping",
      "Responsive UI design",
      "Design systems",
      "UX optimization",
    ],
    image: "/images/services/img3.jpg",
  },
  {
    title: "IT Consulting & Support",
    description:
      "Expert IT strategy and 24/7 support.",
    points: [
      "IT consulting",
      "24/7 monitoring",
      "Network management",
      "Cybersecurity",
      "Disaster recovery",
    ],
    image: "/images/services/img4.webp",
  },
  {
    title: "Design & Digital Services",
    description:
      "Creative branding and data-driven marketing strategies.",
    points: [
      "Brand identity & logo design",
      "UI design for web & apps",
      "SEO optimization",
      "Social media marketing",
      "Content & analytics",
    ],
    image: "/images/services/img5.webp",
  },
  {
    title: "Emerging Technologies",
    description:
      "Next-gen solutions using AI, blockchain & IoT.",
    points: [
      "AI & Machine Learning",
      "Blockchain solutions",
      "IoT integration",
      "Data analytics",
      "Automation systems",
    ],
    image: "/images/services/img6.jpg",
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Container stagger animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  // List item animation
  const listItemVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 12 } },
  };

  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#f8fafc",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>Our Services</h2>
      <p style={{ marginBottom: "40px", color: "#475569" }}>
        We provide end-to-end IT solutions to help your business grow.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateX: 4, rotateY: 4 }}
            style={{
              width: windowWidth < 768 ? "90%" : "300px",
              background: "#fff",
              borderRadius: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <motion.img
              src={service.image}
              alt={service.title}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
              whileHover={{ scale: 1.1 }}
            />

            <div style={{ padding: "15px", textAlign: "left" }}>
              <h3>{service.title}</h3>
              <p style={{ color: "#475569" }}>{service.description}</p>

              <motion.button
                onClick={() => toggleCard(index)}
                whileTap={{ scale: 0.9 }}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  border: "none",
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                {expandedIndex === index ? "Hide Details" : "View Details"}
              </motion.button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{ marginTop: "10px", paddingLeft: "18px", color: "#334155" }}
                  >
                    {service.points.map((point, i) => (
                      <motion.li
                        key={i}
                        variants={listItemVariants}
                        whileHover={{ x: 5, color: "#2563eb" }}
                        style={{ marginBottom: "6px" }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;