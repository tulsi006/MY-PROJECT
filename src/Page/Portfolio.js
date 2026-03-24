import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A modern, responsive online store that allows users to browse products, add to cart, and checkout securely. Optimized for speed, mobile devices, and smooth user experience.",
      features: [
        "Product Catalog: Categories, filters, and search",
        "Shopping Cart: Real-time updates and discounts",
        "Secure Checkout: Stripe / PayPal integration",
        "User Accounts: Login/signup, order history",
        "Admin Dashboard: Manage products, inventory, orders",
        "Responsive Design: Works on desktop, tablet, mobile",
      ],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Stripe/PayPal"],
      image: "/images/portfolio/img1.avif",
      liveLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills, built with modern web technologies and interactive UI.",
      features: ["Interactive UI", "Responsive design", "Project showcase", "Smooth animations", "SEO optimized"],
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      image: "/images/portfolio/img2.webp",
      liveLink: "#",
    },
    {
      title: "Blog Platform",
      description: "Full-stack blog application using MERN stack with content management, authentication, and comment features.",
      features: ["Content Management System", "User authentication", "Comment system", "Responsive layout", "SEO optimized"],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: "/images/portfolio/img3.webp",
      liveLink: "#",
    },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive adjustments
  let cardWidth = "300px";
  let imgHeight = "180px";
  let titleSize = "20px";
  let descSize = "16px";
  let gridGap = "20px";

  if (windowWidth < 768) {
    cardWidth = "90%";
    imgHeight = "150px";
    titleSize = "18px";
    descSize = "14px";
    gridGap = "15px";
  } else if (windowWidth >= 768 && windowWidth < 1024) {
    cardWidth = "45%";
    imgHeight = "160px";
    titleSize = "19px";
    descSize = "15px";
    gridGap = "20px";
  }

  const handleClick = (index) => setActiveIndex(activeIndex === index ? null : index);

  const styles = {
    section: { padding: "60px 20px", textAlign: "center", backgroundColor: "#f0f4f8" },
    heading: { fontSize: "36px", marginBottom: "10px", color: "#0f172a" },
    paragraph: { fontSize: "18px", marginBottom: "40px", color: "#1e293b" },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: gridGap,
    },
    card: {
      flex: `0 0 ${cardWidth}`,
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      cursor: "pointer",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      overflow: "hidden",
    },
    cardActive: { border: "2px solid #38bdf8" },
    img: { width: "100%", height: imgHeight, objectFit: "cover", borderRadius: "8px", marginBottom: "15px" },
    title: { fontSize: titleSize, marginBottom: "10px", color: "#0f172a" },
    desc: { fontSize: descSize, color: "#1e293b", marginBottom: "10px" },
    list: { textAlign: "left", marginBottom: "10px", color: "#475569", fontSize: descSize },
    techTag: {
      display: "inline-block",
      background: "#e2e8f0",
      color: "#475569",
      padding: "4px 8px",
      borderRadius: "6px",
      fontSize: "12px",
      margin: "4px",
    },
    button: { display: "inline-block", backgroundColor: "#38bdf8", color: "#fff", padding: "8px 20px", borderRadius: "5px", fontWeight: "bold", textDecoration: "none", transition: "background 0.3s ease" },
  };

  return (
    <section style={styles.section} id="portfolio">
      <h2 style={styles.heading}>Our Portfolio</h2>
      <p style={styles.paragraph}>Check out some of our recent projects demonstrating our skills.</p>

      <motion.div style={styles.grid} initial="hidden" animate="visible">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={{ ...styles.card, ...(activeIndex === index ? styles.cardActive : {}) }}
            onClick={() => handleClick(index)}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} style={styles.img} />
            <h3 style={styles.title}>{project.title}</h3>
            {activeIndex === index && (
              <motion.div
                style={{ overflow: "hidden" }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
              >
                <p style={styles.desc}>{project.description}</p>

                {/* Features List with stagger animation */}
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                  style={styles.list}
                >
                  {project.features.map((feature, i) => (
                    <motion.li key={i} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Technologies Tags */}
                <div>
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      style={styles.techTag}
                      whileHover={{ scale: 1.1, backgroundColor: "#38bdf8", color: "#fff" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <a href={project.liveLink} target="_blank" rel="noreferrer" style={styles.button}>
                  View Project
                </a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;