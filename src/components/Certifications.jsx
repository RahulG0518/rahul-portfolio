import {
  Award,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";

function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
        .certifications-section {
          width: 100%;
          padding: 95px 30px;
          background: #ffffff;
          border-top: 1px solid #edf0f4;
          overflow: hidden;
        }

        .certifications-container {
          max-width: 1140px;
          margin: auto;
        }

        .certifications-header {
          max-width: 650px;
          margin-bottom: 45px;
        }

        .certifications-eyebrow {
          display: inline-block;
          color: #155eef;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 13px;
        }

        .certifications-header h2 {
          color: #151b2a;
          font-size: clamp(29px, 4vw, 42px);
          font-weight: 700;
          letter-spacing: -1.5px;
          line-height: 1.3;
        }

        .certifications-header h2 span {
          color: #155eef;
        }

        .certifications-header p {
          color: #667085;
          font-size: 13px;
          line-height: 1.9;
          margin-top: 14px;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .certification-card {
          display: flex;
          flex-direction: column;
          padding: 25px;
          background: #ffffff;
          border: 1px solid #e8ebf0;
          border-radius: 8px;
          transition:
            border-color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .certification-card:hover {
          border-color: #b7ccff;
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(21, 94, 239, 0.06);
        }

        .certification-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 22px;
        }

        .certification-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #155eef;
          background: #edf3ff;
          border-radius: 7px;
        }

        .certification-category {
          padding: 6px 10px;
          color: #155eef;
          background: #edf3ff;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
        }

        .certification-card h3 {
          color: #151b2a;
          font-size: 16px;
          font-weight: 650;
          line-height: 1.6;
          margin-bottom: 8px;
        }

        .certification-platform {
          color: #667085;
          font-size: 12px;
          margin-bottom: 22px;
        }

        .certification-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #edf0f4;
          color: #155eef;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .certification-link:hover {
          color: #0b43bd;
        }

        @media (max-width: 650px) {
          .certifications-section {
            padding: 65px 22px;
          }

          .certifications-header {
            margin-bottom: 35px;
          }

          .certifications-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .certification-card {
            padding: 21px;
          }

          .certification-card h3 {
            font-size: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .certification-card {
            transition: none;
          }
        }
      `}</style>

      <section
        className="certifications-section"
        id="certifications"
      >
        <div className="certifications-container">

          <motion.div
            className="certifications-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.span
              className="certifications-eyebrow"
              variants={itemVariants}
            >
              CERTIFICATIONS
            </motion.span>

            <motion.h2 variants={itemVariants}>
              Learning & <span>Achievements.</span>
            </motion.h2>

            <motion.p variants={itemVariants}>
              Professional certifications that reflect my
              continuous learning and exploration of technology.
            </motion.p>
          </motion.div>

          <motion.div
            className="certifications-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {certifications.map((item) => (
              <motion.article
                className="certification-card"
                key={item.id}
                variants={itemVariants}
              >
                <div className="certification-card-top">
                  <div className="certification-icon">
                    <Award size={24} />
                  </div>

                  <span className="certification-category">
                    {item.category}
                  </span>
                </div>

                <h3>{item.name}</h3>

                <p className="certification-platform">
                  <ShieldCheck
                    size={14}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: "6px",
                    }}
                  />
                  {item.platform}
                </p>

                <a
                  className="certification-link"
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Credential
                  <ExternalLink size={14} />
                </a>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Certifications;