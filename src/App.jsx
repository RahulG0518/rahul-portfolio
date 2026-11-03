import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { personalInfo, projects } from "./data/portfolio";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  // Preload website resources
  useEffect(() => {
    let cancelled = false;

    const loadWebsite = async () => {
      const imageSources = [
        personalInfo.image,
        ...projects.map((project) => project.image),
      ].filter(Boolean);

      const uniqueImages = [...new Set(imageSources)];

      const totalTasks = uniqueImages.length + 2;
      let completedTasks = 0;

      const updateProgress = () => {
        completedTasks += 1;

        if (!cancelled) {
          setProgress(
            Math.min(
              100,
              Math.round((completedTasks / totalTasks) * 100)
            )
          );
        }
      };

      // Wait for document resources
      const documentReady = new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", resolve, { once: true });
        }
      });

      await documentReady;
      updateProgress();

      // Wait for fonts
      await document.fonts.ready;
      updateProgress();

      // Preload and decode all project and hero images
      await Promise.all(
        uniqueImages.map((src) => {
          return new Promise((resolve) => {
            const image = new Image();
            let finished = false;

            const finishLoading = async () => {
              if (finished) return;
              finished = true;

              try {
                if (image.decode) {
                  await image.decode();
                }
              } catch {
                // Continue if image decoding is unsupported.
              }

              updateProgress();
              resolve();
            };

            image.onload = finishLoading;

            image.onerror = () => {
              if (finished) return;
              finished = true;
              updateProgress();
              resolve();
            };

            image.src = src;

            if (image.complete) {
              finishLoading();
            }
          });
        })
      );

      if (!cancelled) {
        setProgress(100);

        // Briefly show completed loading state
        await new Promise((resolve) => setTimeout(resolve, 350));

        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadWebsite();

    return () => {
      cancelled = true;
    };
  }, []);

  // Initialize Lenis after loading
  useEffect(() => {
    if (loading || reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      anchors: true,
    });

    window.lenis = lenis;

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();

      if (window.lenis === lenis) {
        delete window.lenis;
      }
    };
  }, [loading, reduceMotion]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: auto;
          scroll-padding-top: 85px;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          color: #151b2a;
          overflow-x: hidden;
        }

        button,
        input,
        textarea {
          font-family: inherit;
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }

        ::selection {
          background: #155eef;
          color: #ffffff;
        }

        .app-content {
          width: 100%;
          min-height: 100vh;
        }

        .loader-screen {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          padding: 25px;
        }

        .loader-content {
          width: 100%;
          max-width: 280px;
          text-align: center;
        }

        .loader-logo {
          color: #151b2a;
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -4px;
        }

        .loader-logo span {
          color: #155eef;
        }

        .loader-label {
          margin-top: 12px;
          color: #667085;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .loader-track {
          width: 100%;
          height: 3px;
          margin-top: 35px;
          overflow: hidden;
          background: #edf0f4;
        }

        .loader-progress {
          height: 100%;
          background: #155eef;
          transition: width 0.25s ease;
        }

        .loader-percentage {
          display: block;
          margin-top: 12px;
          color: #98a2b3;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader-screen"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: reduceMotion ? 0 : 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <div className="loader-content">

              <motion.h1
                className="loader-logo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                R<span>.</span>
              </motion.h1>

              <motion.p
                className="loader-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                LOADING PORTFOLIO
              </motion.p>

              <div className="loader-track">
                <motion.div
                  className="loader-progress"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  style={{ height: "100%" }}
                />
              </div>

              <span className="loader-percentage">
                {progress}%
              </span>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="app-content"
        initial={{ opacity: 0 }}
        animate={{
          opacity: loading ? 0 : 1,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          ease: "easeOut",
        }}
        style={{
          visibility: loading ? "hidden" : "visible",
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}

export default App;