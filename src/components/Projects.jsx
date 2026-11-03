
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { projects } from "../data/portfolio";

function ProjectImage({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="project-image">
      {!imageError ? (
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="eager"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{
            opacity: imageLoaded ? 1 : 0,
          }}
        />
      ) : (
        <div className="project-image-fallback">
          {project.name}
        </div>
      )}
    </div>
  );
}

function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  const cardVariants = {
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
        .projects-section {
          width: 100%;
          padding: 95px 30px;
          background: #f8faff;
          border-top: 1px solid #edf0f4;
          overflow: hidden;
        }

        .projects-container {
          max-width: 1140px;
          margin: auto;
        }

        .projects-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 42px;
        }

        .projects-eyebrow {
          display: inline-block;
          color: #155eef;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 13px;
        }

        .projects-header h2 {
          color: #151b2a;
          font-size: clamp(29px, 4vw, 42px);
          font-weight: 700;
          letter-spacing: -1.5px;
          line-height: 1.3;
        }

        .projects-header h2 span {
          color: #155eef;
        }

        .projects-subtitle {
          max-width: 360px;
          color: #667085;
          font-size: 13px;
          line-height: 1.9;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .project-card {
          min-width: 0;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e8ebf0;
          border-radius: 9px;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: #c7d7fe;
          box-shadow: 0 12px 35px rgba(16, 24, 40, 0.06);
        }

        .project-image {
          width: 100%;
          height: 220px;
          background: #edf2fa;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0;
          transition:
            opacity 0.35s ease,
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-card:hover .project-image img {
          transform: scale(1.035);
        }

        .project-image-fallback {
          color: #344054;
          font-size: 16px;
          font-weight: 600;
        }

        .project-content {
          padding: 24px;
        }

        .project-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 12px;
        }

        .project-status {
          color: #155eef;
          background: #edf3ff;
          padding: 5px 9px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
        }

        .project-category {
          color: #98a2b3;
          font-size: 10px;
        }

        .project-content h3 {
          color: #151b2a;
          font-size: 20px;
          font-weight: 650;
          margin-bottom: 10px;
        }

        .project-description {
          color: #667085;
          font-size: 12px;
          line-height: 1.9;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }

        .project-tech span {
          color: #475467;
          background: #f2f4f7;
          padding: 6px 9px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 23px;
          padding-top: 17px;
          border-top: 1px solid #edf0f4;
        }

        .project-links a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #344054;
          font-size: 11px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .project-links a:hover {
          color: #155eef;
        }

        .project-links svg {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 750px) {
          .projects-section {
            padding: 75px 25px;
          }

          .projects-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 600px) {
          .projects-section {
            padding: 65px 22px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 19px;
          }

          .project-image {
            height: 200px;
          }

          .project-content {
            padding: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .project-image img {
            transition: none;
          }
        }
      `}</style>

      <section className="projects-section" id="projects">
        <div className="projects-container">
          <motion.div
            className="projects-header"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div variants={cardVariants}>
              <span className="projects-eyebrow">MY WORK</span>

              <h2>
                Featured <span>Projects.</span>
              </h2>
            </motion.div>

            <motion.p
              className="projects-subtitle"
              variants={cardVariants}
            >
              A selection of projects I've worked on while
              learning, experimenting and building practical
              applications.
            </motion.p>
          </motion.div>

          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
          >
            {projects.map((project) => (
              <motion.article
                className="project-card"
                key={project.id}
                variants={cardVariants}
              >
                <ProjectImage project={project} />

                <div className="project-content">
                  <div className="project-topline">
                    <span className="project-status">
                      {project.status}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                        Live Preview
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Projects;
