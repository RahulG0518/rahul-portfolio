
import {
  GraduationCap,
  MapPin,
  CalendarDays,
} from "lucide-react";

import { motion } from "framer-motion";
import { education } from "../data/portfolio";

function Education() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  return (
    <>
      <style>{`
        .education-section {
          width: 100%;
          padding: 95px 30px;
          background: #f8faff;
          border-top: 1px solid #edf0f4;
          overflow: hidden;
        }

        .education-container {
          max-width: 1140px;
          margin: auto;
        }

        .education-header {
          max-width: 650px;
          margin-bottom: 48px;
        }

        .education-eyebrow {
          display: inline-block;
          color: #155eef;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 13px;
        }

        .education-header h2 {
          color: #151b2a;
          font-size: clamp(29px, 4vw, 42px);
          font-weight: 700;
          letter-spacing: -1.5px;
          line-height: 1.3;
        }

        .education-header h2 span {
          color: #155eef;
        }

        .education-header p {
          color: #667085;
          font-size: 13px;
          line-height: 1.9;
          margin-top: 14px;
        }

        .education-timeline {
          max-width: 850px;
          position: relative;
          padding-left: 35px;
        }

        .education-timeline::before {
          content: "";
          position: absolute;
          left: 10px;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: #dce6fb;
        }

        .education-item {
          position: relative;
          padding-bottom: 30px;
        }

        .education-item:last-child {
          padding-bottom: 0;
        }

        .education-dot {
          position: absolute;
          left: -32px;
          top: 23px;
          width: 16px;
          height: 16px;
          background: #155eef;
          border: 4px solid #dce8ff;
          border-radius: 50%;
          z-index: 1;
        }

        .education-card {
          padding: 25px 27px;
          background: #ffffff;
          border: 1px solid #e8ebf0;
          border-radius: 8px;
          transition:
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .education-card:hover {
          border-color: #b7ccff;
          transform: translateX(4px);
        }

        .education-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 18px;
        }

        .education-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #155eef;
          background: #edf3ff;
          border-radius: 7px;
        }

        .education-status {
          padding: 6px 10px;
          color: #155eef;
          background: #edf3ff;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
        }

        .education-card h3 {
          color: #151b2a;
          font-size: 17px;
          font-weight: 650;
          line-height: 1.5;
          margin-bottom: 5px;
        }

        .education-institution {
          color: #475467;
          font-size: 13px;
          font-weight: 500;
        }

        .education-details {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 17px;
          padding-top: 15px;
          border-top: 1px solid #edf0f4;
        }

        .education-detail {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #667085;
          font-size: 11px;
        }

        .education-detail svg {
          color: #155eef;
        }

        .education-result {
          display: inline-block;
          margin-top: 15px;
          color: #155eef;
          font-size: 12px;
          font-weight: 600;
        }

        @media (max-width: 650px) {
          .education-section {
            padding: 65px 22px;
          }

          .education-header {
            margin-bottom: 35px;
          }

          .education-timeline {
            padding-left: 29px;
          }

          .education-dot {
            left: -26px;
          }

          .education-card {
            padding: 20px;
          }

          .education-card h3 {
            font-size: 15px;
          }

          .education-card-top {
            margin-bottom: 14px;
          }

          .education-details {
            gap: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .education-card {
            transition: none;
          }
        }
      `}</style>

      <section className="education-section" id="education">
        <div className="education-container">

          <motion.div
            className="education-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.span
              className="education-eyebrow"
              variants={itemVariants}
            >
              EDUCATION
            </motion.span>

            <motion.h2 variants={itemVariants}>
              My Academic <span>Background.</span>
            </motion.h2>

            <motion.p variants={itemVariants}>
              My academic journey in computer applications
              and my continued pursuit of technical knowledge.
            </motion.p>
          </motion.div>

          <motion.div
            className="education-timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {education.map((item) => (
              <motion.article
                className="education-item"
                key={item.id}
                variants={itemVariants}
              >
                <div className="education-dot" />

                <div className="education-card">

                  <div className="education-card-top">
                    <div className="education-icon">
                      <GraduationCap size={23} />
                    </div>

                    <span className="education-status">
                      {item.status}
                    </span>
                  </div>

                  <h3>{item.degree}</h3>

                  <p className="education-institution">
                    {item.institution}
                  </p>

                  <div className="education-details">
                    <span className="education-detail">
                      <CalendarDays size={14} />
                      {item.period}
                    </span>

                    <span className="education-detail">
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>

                  {item.result && (
                    <span className="education-result">
                      {item.result}
                    </span>
                  )}

                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Education;
