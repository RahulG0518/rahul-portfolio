
import {
  Download,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.13,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 110px 30px 70px;
          background: #ffffff;
          color: #151b2a;
          isolation: isolate;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -2;
          display: block;
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.50) 0%,
            rgba(255, 255, 255, 0.42) 35%,
            rgba(255, 255, 255, 0.18) 65%,
            rgba(255, 255, 255, 0.02) 100%
          );
        }

        .hero-container {
          position: relative;
          width: 100%;
          max-width: 1380px;
          margin: auto;
        }

        .hero-content {
          max-width: 650px;
        }

        .hero-intro {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #155eef;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 22px;
        }

        .hero-status-dot {
          width: 8px;
          height: 8px;
          background: #12b76a;
          border-radius: 50%;
        }

        .hero-content h1 {
          color: #151b2a;
          font-size: clamp(42px, 5.5vw, 68px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -3px;
          white-space: nowrap;
        }

        .hero-content h1 span {
          color: #155eef;
        }

        .hero-role {
          color: #344054;
          font-size: 20px;
          font-weight: 500;
          margin-top: 18px;
        }

        .hero-description {
          max-width: 510px;
          color: #667085;
          font-size: 14px;
          line-height: 2;
          margin-top: 19px;
        }

        .hero-location {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #667085;
          font-size: 12px;
          margin-top: 22px;
        }

        .hero-location svg {
          color: #155eef;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 32px;
        }

        .hero-primary-button,
        .hero-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 19px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition:
            background 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .hero-primary-button {
          color: #ffffff;
          background: #155eef;
          border: 1px solid #155eef;
        }

        .hero-primary-button:hover {
          background: #084dcc;
          transform: translateY(-2px);
        }

        .hero-secondary-button {
          color: #344054;
          border: 1px solid #d0d5dd;
          background: #ffffff;
        }

        .hero-secondary-button:hover {
          color: #155eef;
          border-color: #155eef;
          transform: translateY(-2px);
        }

        .hero-actions svg {
          width: 16px;
          height: 16px;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 35px;
        }

        .hero-socials a {
          display: flex;
          color: #667085;
          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .hero-socials a:hover {
          color: #155eef;
          transform: translateY(-3px);
        }

        .hero-socials svg {
          width: 19px;
          height: 19px;
        }

        @media (max-width: 850px) {
          .hero-section {
            min-height: 100svh;
            padding: 110px 25px 75px;
          }

          .hero-background {
            object-position: 62% center;
            filter: blur(6px);
            transform: scale(1.08);
          }

          .hero-overlay {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.88) 0%,
              rgba(255, 255, 255, 0.82) 55%,
              rgba(255, 255, 255, 0.72) 100%
            );
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-content h1 {
            color: #101828;
          }

          .hero-role {
            color: #1d2939;
          }

          .hero-description,
          .hero-location,
          .hero-socials a {
            color: #344054;
          }
        }

        @media (max-width: 550px) {
          .hero-section {
            padding: 100px 22px 65px;
          }

          .hero-background {
            object-position: 61% center;
            filter: blur(7px);
            transform: scale(1.12);
          }

          .hero-overlay {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.92) 0%,
              rgba(255, 255, 255, 0.88) 55%,
              rgba(255, 255, 255, 0.80) 100%
            );
          }

          .hero-content h1 {
            font-size: clamp(32px, 8.5vw, 42px);
            letter-spacing: -2px;
            color: #101828;
            white-space: normal;
          }

          .hero-role {
            font-size: 17px;
            color: #1d2939;
          }

          .hero-description {
            font-size: 13px;
            color: #344054;
            line-height: 1.9;
          }

          .hero-location {
            color: #344054;
          }

          .hero-socials a {
            color: #344054;
          }

          .hero-actions {
            gap: 10px;
          }

          .hero-primary-button,
          .hero-secondary-button {
            padding: 13px 15px;
            font-size: 12px;
          }
        }

        @media (max-width: 360px) {
          .hero-content h1 {
            font-size: 30px;
            letter-spacing: -1.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-primary-button,
          .hero-secondary-button,
          .hero-socials a {
            transition: none;
          }
        }
      `}</style>

      <section className="hero-section" id="home">
        <img
          className="hero-background"
          src={personalInfo.image}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />

        <div className="hero-overlay" />

        <div className="hero-container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="hero-intro"
              variants={itemVariants}
            >
              <span className="hero-status-dot" />
              DEVELOPER PORTFOLIO
            </motion.div>

            <motion.h1 variants={itemVariants}>
              Hi, I'm <span>Rahul Gowda.</span>
            </motion.h1>

            <motion.p
              className="hero-role"
              variants={itemVariants}
            >
              {personalInfo.role}
            </motion.p>

            <motion.p
              className="hero-description"
              variants={itemVariants}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              className="hero-location"
              variants={itemVariants}
            >
              <MapPin size={16} />
              {personalInfo.location}
            </motion.div>

            <motion.div
              className="hero-actions"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="hero-primary-button"
              >
                View Projects
              </a>

              <a
                href={personalInfo.resume}
                className="hero-secondary-button"
                download
              >
                Download Resume
                <Download />
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              variants={containerVariants}
            >
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                variants={socialVariants}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.92 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                variants={socialVariants}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.92 }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                variants={socialVariants}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.92 }}
              >
                <FaInstagram />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
