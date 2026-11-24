import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  ChevronDown,
  Globe2,
  Layers3,
  Menu,
  Network,
  Server,
  X,
} from "lucide-react";

import "./Navbar.css";

const WHATSAPP_URL =
  "https://wa.me/447520665843?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20IntelliFX%20Solutions.";

const services = [
  {
    title: "MT5 White Label Solution",
    description: "Launch your branded trading platform.",
    href: "/white-label-solution/",
    icon: Layers3,
  },
  {
    title: "MT5 Grey Label Solution",
    description: "Explore flexible MT5 technology options.",
    href: "/mt5-grey-label-solution/",
    icon: Server,
  },
  {
    title: "Forex Broker CRM",
    description: "Manage your brokerage operations.",
    href: "/forex-broker-crm/",
    icon: Building2,
  },
  {
    title: "Prop Trading Technology",
    description: "Technology for prop trading businesses.",
    href: "/prop-trading-technology/",
    icon: BarChart3,
  },
  {
    title: "Forex Website Development",
    description: "Create your brokerage's digital presence.",
    href: "/forex-broker-website-development/",
    icon: Globe2,
  },
  {
    title: "Liquidity & Trading Infrastructure",
    description: "Connect your brokerage technology stack.",
    href: "/liquidity-trading-infrastructure/",
    icon: Network,
  },
];

const navigation = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen, servicesOpen]);

  const servicesActive = services.some((service) =>
    isActivePath(pathname, service.href)
  );

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const handleServicesMouseEnter = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setServicesOpen(true);
    }
  };

  const handleServicesMouseLeave = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setServicesOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={`ifx-navbar-shell ${
          scrolled ? "ifx-navbar-scrolled" : ""
        }`}
        initial={{ opacity: 0, y: -22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="ifx-navbar-container">
          {/* LOGO */}

          <a
            href="/"
            className="ifx-navbar-logo"
            aria-label="IntelliFX Solutions home"
            onClick={closeMenus}
          >
            <motion.span
              className="ifx-logo-mark"
              whileHover={{
                rotate: -8,
                scale: 1.07,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Layers3 size={25} strokeWidth={2.2} />
              <span className="ifx-logo-spark" />
            </motion.span>

            <span className="ifx-logo-copy">
              <span className="ifx-logo-name">
                Intelli<span>FX</span>
              </span>

              <span className="ifx-logo-subtitle">
                SOLUTIONS
              </span>
            </span>
          </a>

          {/* DESKTOP / MOBILE NAVIGATION */}

          <nav
            className={`ifx-navbar-navigation ${
              menuOpen ? "ifx-navigation-open" : ""
            }`}
            aria-label="Main navigation"
          >
            {/* HOME */}

            {navigation.slice(0, 1).map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={closeMenus}
                  className={`ifx-nav-link ${
                    active ? "ifx-nav-active" : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.title}

                  {active && (
                    <motion.span
                      layoutId="ifx-active-indicator"
                      className="ifx-active-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* SERVICES DROPDOWN */}

            <div
              className={`ifx-services-dropdown ${
                servicesOpen ? "ifx-services-expanded" : ""
              }`}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                className={`ifx-nav-link ifx-services-trigger ${
                  servicesActive ? "ifx-nav-active" : ""
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() =>
                  setServicesOpen((open) => !open)
                }
              >
                Services

                <motion.span
                  animate={{
                    rotate: servicesOpen ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="ifx-chevron"
                >
                  <ChevronDown size={15} />
                </motion.span>

                {servicesActive && (
                  <span className="ifx-active-indicator" />
                )}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="ifx-services-menu"
                    initial={{
                      opacity: 0,
                      y: 12,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                  >
                    {/* DROPDOWN HEADING */}

                    <div className="ifx-dropdown-heading">
                      <div>
                        <span className="ifx-dropdown-eyebrow">
                          OUR EXPERTISE
                        </span>

                        <h3>Brokerage Technology</h3>

                        <p>
                          Explore our technology solutions.
                        </p>
                      </div>

                      <span className="ifx-dropdown-icon">
                        <Layers3 size={22} />
                      </span>
                    </div>

                    {/* SERVICES GRID */}

                    <div className="ifx-services-grid">
                      {services.map((service, index) => {
                        const Icon = service.icon;

                        const active = isActivePath(
                          pathname,
                          service.href
                        );

                        return (
                          <motion.a
                            key={service.title}
                            href={service.href}
                            className={`ifx-service-item ${
                              active
                                ? "ifx-service-item-active"
                                : ""
                            }`}
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: index * 0.035,
                              duration: 0.2,
                            }}
                            onClick={closeMenus}
                          >
                            <span className="ifx-service-icon">
                              <Icon size={19} />
                            </span>

                            <span className="ifx-service-copy">
                              <strong>{service.title}</strong>

                              <small>
                                {service.description}
                              </small>
                            </span>

                            <ArrowUpRight
                              size={16}
                              className="ifx-service-arrow"
                            />
                          </motion.a>
                        );
                      })}
                    </div>

                    {/* DROPDOWN FOOTER */}

                    <a
                      href="/contact"
                      className="ifx-dropdown-footer"
                      onClick={closeMenus}
                    >
                      Discuss your requirements
                      <ArrowRight size={16} />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ABOUT / BLOG / CONTACT */}

            {navigation.slice(1).map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={closeMenus}
                  className={`ifx-nav-link ${
                    active ? "ifx-nav-active" : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.title}

                  {active && (
                    <motion.span
                      layoutId="ifx-active-indicator"
                      className="ifx-active-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT CTA */}

          <div className="ifx-navbar-actions">
            <a
              href={WHATSAPP_URL}
              className="ifx-navbar-cta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Let's Talk with IntelliFX Solutions on WhatsApp"
              onClick={closeMenus}
            >
              <span>Let's Talk</span>

              <span className="ifx-cta-arrow">
                <ArrowUpRight size={17} />
              </span>
            </a>

            {/* MOBILE MENU TOGGLE */}

            <button
              type="button"
              className="ifx-mobile-toggle"
              aria-label={
                menuOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((open) => !open);
                setServicesOpen(false);
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{
                    opacity: 0,
                    rotate: -35,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 35,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? (
                    <X size={22} />
                  ) : (
                    <Menu size={22} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY */}

      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            className="ifx-mobile-overlay"
            aria-label="Close navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenus}
          />
        )}
      </AnimatePresence>
    </>
  );
}