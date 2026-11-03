import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const scrollDistance = useRef(0);
  const ticking = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const difference = currentY - lastScrollY.current;

        if (menuOpen) {
          setVisible(true);
          scrollDistance.current = 0;
        } else if (currentY < 100) {
          setVisible(true);
          scrollDistance.current = 0;
        } else {
          scrollDistance.current += difference;

          if (scrollDistance.current > 15) {
            setVisible(false);
            scrollDistance.current = 0;
          } else if (scrollDistance.current < -15) {
            setVisible(true);
            scrollDistance.current = 0;
          }
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    setVisible(true);

    const target = document.querySelector(href);

    if (!target) return;

    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -85,
        duration: 1.2,
      });
    } else {
      target.scrollIntoView({
        behavior: reduceMotion ? "instant" : "smooth",
        block: "start",
      });
    }

    window.history.replaceState(null, "", href);
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 18px;
          left: 0;
          width: 100%;
          padding: 0 30px;
          z-index: 1000;
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.35s ease;
        }

        .navbar.hidden {
          transform: translateY(-120px);
          opacity: 0;
          pointer-events: none;
        }

        .navbar-container {
          position: relative;
          z-index: 1003;
          width: 100%;
          max-width: 1380px;
          height: 68px;
          margin: auto;
          padding: 0 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border: 1px solid #edf0f4;
          border-radius: 50px;
          box-shadow: 0 8px 30px rgba(21, 27, 42, 0.08);
        }

        .navbar-logo {
          color: #151b2a;
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -2px;
          text-decoration: none;
        }

        .navbar-logo span {
          color: #155eef;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .desktop-links a {
          color: #344054;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .desktop-links a:hover {
          color: #155eef;
        }

        .navbar-contact {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 23px;
          border-radius: 30px;
          background: #155eef;
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.25s ease;
        }

        .navbar-contact:hover {
          background: #084dcc;
        }

        .navbar-menu-button {
          display: none;
          align-items: center;
          justify-content: center;
          padding: 5px;
          border: none;
          background: transparent;
          color: #151b2a;
          cursor: pointer;
        }

        .mobile-links {
          display: none;
        }

        @media (max-width: 850px) {
          .desktop-links {
            gap: 17px;
          }

          .desktop-links a {
            font-size: 12px;
          }
        }

        @media (max-width: 700px) {
          .navbar {
            top: 12px;
            padding: 0 15px;
          }

          .navbar-container {
            height: 60px;
            padding: 0 20px;
            border-radius: 40px;
            background: #ffffff;
            border: 1px solid #edf0f4;
            box-shadow: 0 6px 25px rgba(21, 27, 42, 0.10);
          }

          .navbar-logo {
            font-size: 28px;
          }

          .desktop-links,
          .navbar-contact {
            display: none;
          }

          .navbar-menu-button {
            display: flex;
          }

          .mobile-links {
            position: fixed;
            inset: 0;
            z-index: 1002;
            width: 100%;
            height: 100vh;
            height: 100dvh;
            padding: 105px 30px 40px;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            gap: 0;
            overflow-y: auto;
          }

          .mobile-menu-heading {
            color: #155eef;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 20px;
          }

          .mobile-links a {
            display: block;
            padding: 15px 0;
            color: #151b2a;
            font-size: clamp(26px, 7vw, 36px);
            font-weight: 600;
            letter-spacing: -1px;
            text-decoration: none;
            border-bottom: 1px solid #edf0f4;
            transition: color 0.2s ease;
          }

          .mobile-links a:hover {
            color: #155eef;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar {
            transition: none;
          }
        }
      `}</style>

      <header
        className={`navbar ${!visible && !menuOpen ? "hidden" : ""}`}
      >
        <div className="navbar-container">

          <a
            href="#home"
            className="navbar-logo"
            onClick={(event) => scrollToSection(event, "#home")}
          >
            R<span>.</span>
          </a>

          <nav
            className="desktop-links"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) =>
                  scrollToSection(event, link.href)
                }
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="navbar-contact"
            onClick={(event) =>
              scrollToSection(event, "#contact")
            }
          >
            Let's Talk
          </a>

          <button
            className="navbar-menu-button"
            onClick={() => {
              setMenuOpen((previous) => !previous);
              setVisible(true);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
              </motion.span>
            </AnimatePresence>
          </button>

        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              className="mobile-links"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="mobile-menu-heading">
                NAVIGATION
              </span>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(event) =>
                    scrollToSection(event, link.href)
                  }
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.3,
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;