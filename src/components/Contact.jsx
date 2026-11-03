
import { Mail, MapPin } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: personalInfo.social.github,
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: personalInfo.social.linkedin,
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      url: personalInfo.social.instagram,
      icon: FaInstagram,
    },
  ];

  const reveal = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <>
      <style>{`
        .contact-section {
          width: 100%;
          padding: 100px 30px;
          background: #ffffff;
          border-top: 1px solid #edf0f4;
          overflow: hidden;
        }

        .contact-container {
          max-width: 1140px;
          margin: auto;
        }

        .contact-content {
          max-width: 760px;
        }

        .contact-eyebrow {
          display: inline-block;
          color: #155eef;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .contact-content h2 {
          color: #151b2a;
          font-size: clamp(34px, 5vw, 55px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -2px;
        }

        .contact-content h2 span {
          color: #155eef;
        }

        .contact-description {
          max-width: 570px;
          color: #667085;
          font-size: 14px;
          line-height: 2;
          margin-top: 20px;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 32px;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 19px;
          border-radius: 5px;
          background: #155eef;
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .contact-button:hover {
          background: #084dcc;
          transform: translateY(-2px);
        }

        .contact-button svg {
          width: 16px;
          height: 16px;
        }

        .contact-location {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #667085;
          font-size: 12px;
          margin-top: 32px;
        }

        .contact-location svg {
          color: #155eef;
        }

        .contact-divider {
          width: 100%;
          height: 1px;
          background: #edf0f4;
          margin: 55px 0 25px;
        }

        .contact-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .contact-bottom p {
          color: #667085;
          font-size: 11px;
        }

        .contact-socials {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .contact-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667085;
          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }

        .contact-socials a:hover {
          color: #155eef;
          transform: translateY(-3px);
        }

        .contact-socials svg {
          width: 19px;
          height: 19px;
        }

        @media (max-width: 600px) {
          .contact-section {
            padding: 75px 22px;
          }

          .contact-content h2 {
            font-size: 36px;
          }

          .contact-description {
            font-size: 13px;
          }

          .contact-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .contact-divider {
            margin: 40px 0 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-button,
          .contact-socials a {
            transition: none;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="contact-container">

          <motion.div
            className="contact-content"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.span
              className="contact-eyebrow"
              variants={reveal}
            >
              GET IN TOUCH
            </motion.span>

            <motion.h2 variants={reveal}>
              Let's build something
              <br />
              <span>meaningful together.</span>
            </motion.h2>

            <motion.p
              className="contact-description"
              variants={reveal}
            >
              I'm interested in connecting with developers,
              exploring opportunities and collaborating on
              meaningful projects. Feel free to reach out.
            </motion.p>

            <motion.div
              className="contact-actions"
              variants={reveal}
            >
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-button"
                >
                  <Mail />
                  Get In Touch
                </a>
              )}

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                Connect on LinkedIn
              </a>
            </motion.div>

            <motion.div
              className="contact-location"
              variants={reveal}
            >
              <MapPin size={16} />
              {personalInfo.location}
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-divider"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />

          <motion.div
            className="contact-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={stagger}
          >
            <motion.p variants={reveal}>
              © {new Date().getFullYear()} {personalInfo.name}.
              All rights reserved.
            </motion.p>

            <motion.div
              className="contact-socials"
              variants={stagger}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    variants={reveal}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Contact;
