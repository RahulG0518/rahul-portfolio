
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";

const categoryIcons = [
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
];

function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <style>{`
        .skills-section {
          padding: 100px 8%;
          background: #f8faff;
          overflow: hidden;
        }

        .skills-container {
          max-width: 1150px;
          margin: 0 auto;
        }

        .skills-heading {
          text-align: center;
          margin-bottom: 50px;
        }

        .skills-label {
          color: #155eef;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .skills-heading h2 {
          margin-top: 12px;
          color: #151b2a;
          font-size: clamp(30px, 4vw, 42px);
          font-weight: 700;
        }

        .skills-heading p {
          margin-top: 12px;
          color: #667085;
          font-size: 15px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .skill-card {
          padding: 28px;
          background: #ffffff;
          border: 1px solid #e8edf5;
          border-radius: 12px;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: #c7d7fe;
          box-shadow: 0 12px 30px rgba(21, 94, 239, 0.08);
        }

        .skill-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #155eef;
          background: #edf3ff;
          border-radius: 10px;
        }

        .skill-card h3 {
          margin: 20px 0 16px;
          color: #151b2a;
          font-size: 17px;
          font-weight: 600;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .skill-item {
          padding: 7px 11px;
          color: #475467;
          background: #f5f7fa;
          border: 1px solid #eaecf0;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .skills-section {
            padding: 75px 6%;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card {
            padding: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-card {
            transition: none;
          }
        }
      `}</style>

      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={containerVariants}
        >
          <motion.span
            className="skills-label"
            variants={cardVariants}
          >
            My Expertise
          </motion.span>

          <motion.h2 variants={cardVariants}>
            Skills & Technologies
          </motion.h2>

          <motion.p variants={cardVariants}>
            Technologies and tools I have been learning and working with.
          </motion.p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.12 }}
        >
          {skillGroups.map((group, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];

            return (
              <motion.article
                className="skill-card"
                key={group.id}
                variants={cardVariants}
              >
                <div className="skill-icon">
                  <Icon size={23} />
                </div>

                <h3>{group.category}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-item" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
