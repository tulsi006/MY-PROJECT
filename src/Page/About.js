import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Web & App Development",
    description: "Fast, modern websites & apps that grow your business.",
    points: [
      "Custom websites",
      "PWAs",
      "iOS & Android apps",
      "API integrations",
      "Optimization",
    ],
    image: "/images/services/img1.jpg",
  },
  {
    title: "Software Development",
    description: "Smart solutions to automate your business.",
    points: [
      "Enterprise software",
      "ERP & CRM",
      "Automation tools",
      "SaaS platforms",
    ],
    image: "/images/services/img2.webp",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and user-friendly designs.",
    points: [
      "User research",
      "Wireframes",
      "Responsive UI",
      "UX optimization",
    ],
    image: "/images/services/img3.jpg",
  },
  {
    title: "IT Support",
    description: "Reliable IT services & security.",
    points: ["24/7 monitoring", "Cybersecurity", "Network management"],
    image: "/images/services/img4.webp",
  },
  {
    title: "Digital Services",
    description: "Marketing & branding that stands out.",
    points: ["Branding", "SEO", "Social media"],
    image: "/images/services/img5.webp",
  },
  {
    title: "Emerging Tech",
    description: "AI, blockchain & future solutions.",
    points: ["AI/ML", "Blockchain", "IoT"],
    image: "/images/services/img6.jpg",
  },
];

const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f1f5f9",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "38px", fontWeight: "bold" }}>
        Our Services
      </h2>
      <p style={{ color: "#64748b", marginBottom: "50px" }}>
        We deliver powerful digital solutions 🚀
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              cursor: "pointer",
            }}
            onClick={() => setActive(active === index ? null : index)}
          >
            {/* Image */}
            <motion.img
              src={service.image}
              alt={service.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              whileHover={{ scale: 1.1 }}
            />

            {/* Overlay Gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
              }}
            />

            {/* Content */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                color: "#fff",
                padding: "20px",
                textAlign: "left",
                width: "100%",
              }}
            >
              <h3 style={{ marginBottom: "5px" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "14px", opacity: 0.9 }}>
                {service.description}
              </p>

              <AnimatePresence>
                {active === index && (
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      marginTop: "10px",
                      paddingLeft: "18px",
                    }}
                  >
                    {service.points.map((point, i) => (
                      <li key={i} style={{ marginBottom: "5px" }}>
                        ✔ {point}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;