
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

function Footer() {
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: personalInfo.social.github,
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: personalInfo.social.linkedin,
      icon: FaLinkedin,
    },
    {
      label: "Instagram",
      href: personalInfo.social.instagram,
      icon: FaInstagram,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <style>{`
        .footer {
          width: 100%;
          padding: 32px 30px;
          background: #f8faff;
          border-top: 1px solid #edf0f4;
          overflow: hidden;
        }

        .footer-container {
          max-width: 1140px;
          margin: auto;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 35px;
          padding-bottom: 28px;
        }

        .footer-brand h3 {
          color: #151b2a;
          font-size: 23px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .footer-brand h3 span {
          color: #155eef;
        }

        .footer-brand p {
          max-width: 300px;
          margin-top: 9px;
          color: #667085;
          font-size: 11px;
          line-height: 1.8;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          justify-content: flex-end;
        }

        .footer-nav a {
          color: #667085;
          font-size: 11px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-nav a:hover {
          color: #155eef;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 22px;
          border-top: 1px solid #e8ebf0;
        }

        .footer-bottom p {
          color: #98a2b3;
          font-size: 10px;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-socials a {
          display: flex;
          color: #667085;
          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .footer-socials a:hover {
          color: #155eef;
          transform: translateY(-3px);
        }

        .footer-socials svg {
          width: 17px;
          height: 17px;
        }

        .footer-top {
          display: inline-flex;
          align-items: center;
          color: #155eef;
          font-size: 10px;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.25s ease;
        }

        .footer-top:hover {
          opacity: 0.7;
        }

        @media (max-width: 650px) {
          .footer {
            padding: 30px 22px;
          }

          .footer-main {
            flex-direction: column;
            gap: 25px;
          }

          .footer-nav {
            justify-content: flex-start;
            gap: 15px;
          }

          .footer-bottom {
            flex-wrap: wrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-nav a,
          .footer-socials a,
          .footer-top {
            transition: none;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">

          <motion.div
            className="footer-main"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="footer-brand"
              variants={itemVariants}
            >
              <h3>
                RAHUL<span>.</span>
              </h3>

              <p>
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.nav
              className="footer-nav"
              aria-label="Footer navigation"
              variants={containerVariants}
            >
              {footerLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              © {new Date().getFullYear()} {personalInfo.name}.
              All rights reserved.
            </motion.p>

            <motion.div
              className="footer-socials"
              variants={containerVariants}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.a
              className="footer-top"
              href="#home"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              Back to top
            </motion.a>
          </motion.div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
