
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  Code2,
  Server,
  Cloud,
  GraduationCap,
} from "lucide-react";

import { personalInfo } from "../data/portfolio";

const interests = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive and user-focused web applications using modern frontend technologies.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Exploring server-side development, APIs, databases and application architecture.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "Learning Linux, cloud infrastructure, automation and modern deployment practices.",
  },
];

const smoothEase = [0.22, 1, 0.36, 1];

function About() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.15,
  });

  const reveal = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: smoothEase,
      },
    },
  };

  const slideLeft = {
    hidden: {
      opacity: 0,
      x: -35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: smoothEase,
      },
    },
  };

  const slideRight = {
    hidden: {
      opacity: 0,
      x: 35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: smoothEase,
      },
    },
  };

  return (
    <>
      <style>{`
        .about-section {
          width: 100%;
          padding: 95px 30px;
          background: #ffffff;
          border-top: 1px solid #edf0f4;
          overflow: hidden;
        }

        .about-container {
          max-width: 1140px;
          margin: auto;
        }

        .about-heading {
          max-width: 680px;
          margin-bottom: 45px;
        }

        .about-eyebrow {
          display: inline-block;
          color: #155eef;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 14px;
        }

        .about-heading h2 {
          color: #151b2a;
          font-size: clamp(29px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -1.5px;
        }

        .about-heading h2 span {
          color: #155eef;
        }

        .about-main {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: start;
        }

        .about-description {
          color: #667085;
          font-size: 14px;
          line-height: 2;
        }

        .about-description p + p {
          margin-top: 18px;
        }

        .about-profile {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 30px;
          padding-top: 23px;
          border-top: 1px solid #edf0f4;
        }

        .about-profile-icon {
          width: 45px;
          height: 45px;
          border-radius: 8px;
          background: #edf3ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #155eef;
          flex-shrink: 0;
        }

        .about-profile-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .about-profile-info strong {
          color: #151b2a;
          font-size: 13px;
          font-weight: 600;
        }

        .about-profile-info span {
          color: #667085;
          font-size: 11px;
        }

        .about-interests {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .about-interest-card {
          padding: 19px 20px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          border: 1px solid #e8ebf0;
          border-radius: 8px;
          background: #ffffff;
          transition: border-color 0.3s ease,
                      transform 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .about-interest-card:hover {
          border-color: #b7ccff;
          transform: translateX(4px);
          box-shadow: 0 8px 24px rgba(21, 94, 239, 0.06);
        }

        .about-interest-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #155eef;
          background: #edf3ff;
          border-radius: 7px;
        }

        .about-interest-content h3 {
          color: #151b2a;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .about-interest-content p {
          color: #667085;
          font-size: 11px;
          line-height: 1.8;
        }

        .about-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 55px;
          padding: 25px 28px;
          background: #f7f9fc;
          border: 1px solid #edf0f4;
          border-radius: 8px;
        }

        .about-bottom p {
          color: #344054;
          font-size: 13px;
          font-weight: 500;
        }

        .about-bottom a {
          display: inline-flex;
          align-items: center;
          color: #155eef;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .about-bottom a:hover {
          color: #084dcc;
        }

        @media (max-width: 850px) {
          .about-main {
            gap: 35px;
          }

          .about-section {
            padding: 75px 25px;
          }
        }

        @media (max-width: 650px) {
          .about-section {
            padding: 65px 22px;
          }

          .about-heading {
            margin-bottom: 30px;
          }

          .about-heading h2 {
            font-size: 30px;
          }

          .about-main {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .about-description {
            font-size: 13px;
          }

          .about-interest-card {
            padding: 17px;
          }

          .about-bottom {
            padding: 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
            margin-top: 35px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-interest-card {
            transition: none;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="about-section"
        id="about"
      >
        <div className="about-container">

          {/* SECTION HEADING */}

          <motion.div
            variants={reveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="about-heading"
          >
            <span className="about-eyebrow">
              ABOUT ME
            </span>

            <h2>
              A little about me and
              <br />
              what I <span>love building.</span>
            </h2>
          </motion.div>

          <div className="about-main">

            {/* INTRODUCTION */}

            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="about-description"
            >
              <p>
                Hello! I'm <strong>{personalInfo.name}</strong>,
                a developer from {personalInfo.location}.
                I enjoy exploring technology, understanding
                how things work and building practical
                digital solutions.
              </p>

              <p>
                My journey started with computer applications
                and gradually developed into an interest in
                modern web development, backend systems
                and application architecture.
              </p>

              <p>
                Currently, I'm pursuing my MCA and continuously
                improving my technical knowledge through
                hands-on projects, experimentation and learning.
              </p>

              <div className="about-profile">
                <div className="about-profile-icon">
                  <GraduationCap size={23} />
                </div>

                <div className="about-profile-info">
                  <strong>Computer Applications</strong>
                  <span>
                    BCA Graduate · MCA Student
                  </span>
                </div>
              </div>
            </motion.div>

            {/* INTERESTS */}

            <div className="about-interests">
              {interests.map((interest, index) => {
                const Icon = interest.icon;

                return (
                  <motion.article
                    className="about-interest-card"
                    key={interest.title}
                    initial={{
                      opacity: 0,
                      x: 35,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      x: isInView ? 0 : 35,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: isInView ? 0.12 + index * 0.12 : 0,
                      ease: smoothEase,
                    }}
                  >
                    <div className="about-interest-icon">
                      <Icon size={21} />
                    </div>

                    <div className="about-interest-content">
                      <h3>{interest.title}</h3>
                      <p>{interest.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

          </div>

          {/* BOTTOM CTA */}

          <motion.div
            variants={reveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: 0.8,
              delay: isInView ? 0.35 : 0,
              ease: smoothEase,
            }}
            className="about-bottom"
          >
            <p>
              Interested in exploring my work?
            </p>

            <a href="#projects">
              Explore My Projects
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default About;
