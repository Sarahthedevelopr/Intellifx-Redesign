import { motion } from "framer-motion";
import "./Footer.css";

const Icon = ({ name, size = 18 }) => {
  const shapes = {
    arrowUpRight: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {shapes[name] || shapes.arrowRight}
    </svg>
  );
};

const services = [
  { name: "White Label Solution", href: "/white-label-solution/" },
  { name: "MT5 Grey Label Solution", href: "/mt5-grey-label-solution/" },
  { name: "Forex CRM", href: "/forex-broker-crm/" },
  { name: "Liquidity & Trading Infrastructure", href: "/liquidity-trading-infrastructure/" },
  { name: "Prop Trading Technology", href: "/prop-trading-technology/" },
  { name: "Forex Broker Website Development", href: "/forex-broker-website-development/" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about/" },
  { name: "Our Services", href: "/services/" },
  { name: "Blog", href: "https://intellifxsolutions.com/blog/" },
  { name: "Contact Us", href: "https://intellifxsolutions.com/contact/" },
];

const socialLinks = [
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/" },
];

const featureSlides = [
  { eyebrow: "BROKERAGE TECHNOLOGY", title: "Launch with confidence.", text: "Build your brokerage on technology designed to scale.", accent: "01" },
  { eyebrow: "TRADING INFRASTRUCTURE", title: "Connect every layer.", text: "Bring platforms, liquidity and operations into one ecosystem.", accent: "02" },
  { eyebrow: "BROKER CRM & AUTOMATION", title: "Make every workflow smarter.", text: "Streamline client journeys with connected brokerage tools.", accent: "03" },
];

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function Footer() {
  return (
    <footer className="ifx-footer">
      {/* The gradient is applied to the FOOTER background, not the page CTA card. */}
      <div className="ifx-footer-background-orbit ifx-footer-background-orbit-one" />
      <div className="ifx-footer-background-orbit ifx-footer-background-orbit-two" />

      {/* Animated technology carousel */}
      <section className="ifx-footer-motion-section" aria-label="IntelliFX technology highlights">
        <div className="ifx-footer-motion-panel">
          <div className="ifx-footer-motion-grid" />
          <div className="ifx-footer-motion-copy">
            <span className="ifx-footer-motion-label"><span className="ifx-footer-live-dot" /> TECHNOLOGY IN MOTION</span>
            <div className="ifx-footer-carousel-window">
              <motion.div
                className="ifx-footer-carousel-track"
                animate={{ y: ["0%", "-33.333%", "-66.666%", "0%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", times: [0, 0.34, 0.68, 1] }}
              >
                {featureSlides.map((slide) => (
                  <div className="ifx-footer-carousel-slide" key={slide.accent}>
                    <span className="ifx-footer-slide-number">{slide.accent} / 03</span>
                    <span className="ifx-footer-slide-eyebrow">{slide.eyebrow}</span>
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="ifx-footer-motion-progress"><span /></div>
          </div>

          <div className="ifx-footer-tech-visual" aria-hidden="true">
            <motion.div className="ifx-footer-tech-orbit orbit-a" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
            <motion.div className="ifx-footer-tech-orbit orbit-b" animate={{ rotate: -360 }} transition={{ duration: 36, repeat: Infinity, ease: "linear" }} />
            <motion.div className="ifx-footer-tech-core" animate={{ y: [0, -6, 0], scale: [1, 1.035, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <Icon name="globe" size={34} /><span>IFX</span>
            </motion.div>
            <motion.span className="ifx-footer-tech-node node-a" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.span className="ifx-footer-tech-node node-b" animate={{ y: [0, 7, 0] }} transition={{ duration: 3.5, repeat: Infinity }} />
            <motion.span className="ifx-footer-tech-node node-c" animate={{ x: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity }} />
            <div className="ifx-footer-tech-caption">CONNECTED. SECURE. SCALABLE.</div>
          </div>
        </div>
      </section>

      {/* Footer information */}
      <div className="ifx-footer-main">
        <div className="ifx-footer-grid">
          <motion.div className="ifx-footer-brand" variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            <a href="/" className="ifx-footer-logo">
              <span className="ifx-footer-logo-symbol">IFX</span>
              <span className="ifx-footer-logo-text"><strong>IntelliFX</strong><small>SOLUTIONS</small></span>
            </a>
            <p className="ifx-footer-description">
              Technology solutions for modern Forex brokers. Build, launch and scale
              your brokerage with the right technology partner.
            </p>
            <div className="ifx-footer-socials">
              {socialLinks.map((social) => (
                <motion.a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} whileHover={{ y: -4, scale: 1.06 }} whileTap={{ scale: 0.96 }} className="ifx-footer-social">
                  <Icon name={social.icon} size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="ifx-footer-column" variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0.08 }}>
            <h3>Quick Links</h3>
            <ul>{quickLinks.map((link) => <li key={link.name}><a href={link.href}><Icon name="arrowRight" size={14} /><span>{link.name}</span></a></li>)}</ul>
          </motion.div>

          <motion.div className="ifx-footer-column ifx-footer-services" variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0.16 }}>
            <h3>Our Services</h3>
            <ul>{services.map((service) => <li key={service.name}><a href={service.href}><Icon name="arrowRight" size={14} /><span>{service.name}</span></a></li>)}</ul>
          </motion.div>

          <motion.div className="ifx-footer-column ifx-footer-contact" variants={revealUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0.24 }}>
            <h3>Get in Touch</h3>
            <p className="ifx-footer-contact-intro">Have a project in mind? Let&apos;s discuss your requirements.</p>
            <a href="https://intellifxsolutions.com/contact/" className="ifx-footer-contact-item">
              <span className="ifx-footer-contact-icon"><Icon name="mail" /></span>
              <span><small>Contact Us</small><strong>Send an enquiry</strong></span>
            </a>
            <div className="ifx-footer-contact-item">
              <span className="ifx-footer-contact-icon"><Icon name="mapPin" /></span>
              <span><small>Our Focus</small><strong>Global Forex Technology</strong></span>
            </div>
            <a href="https://intellifxsolutions.com/contact/" className="ifx-footer-contact-link">Discuss Your Project <Icon name="arrowUpRight" size={16} /></a>
          </motion.div>
        </div>

        <div className="ifx-footer-bottom">
          <p>© {new Date().getFullYear()} IntelliFX Solutions. All rights reserved.</p>
          <div className="ifx-footer-bottom-links">
            <a href="/privacy-policy/">Privacy Policy</a><span /><a href="/terms-and-conditions/">Terms &amp; Conditions</a>
          </div>
          <a href="#top" className="ifx-footer-back-top">Back to top <Icon name="arrowUpRight" size={15} /></a>
        </div>
      </div>
      <div className="ifx-footer-gradient-line" />
    </footer>
  );
}

export default Footer;
