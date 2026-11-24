import { motion } from "framer-motion";
import "./WhiteLabelSolution.css";

const Icon = ({ name, size = 22 }) => {
  const icons = {
    platform: <><rect x="3" y="4" width="18" height="15" rx="2" /><path d="M8 21h8M12 19v2M7 8h10M7 12h4M7 15h7" /></>,
    brand: <><path d="M12 3 19 7v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" /><path d="m9 12 2 2 4-4" /></>,
    liquidity: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    crm: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M5.5 16c.6-2 6.4-2 7 0M14 9h4M14 13h4M14 17h2" /></>,
    portal: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5" /></>,
    website: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13h4M8 16h8" /></>,
    payment: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
    risk: <><path d="M12 3 20 7v5c0 4-3.4 7.2-8 9-4.6-1.8-8-5-8-9V7l8-4Z" /><path d="m9 12 2 2 4-4" /></>,
    backoffice: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M8 4v16M8 9h13M8 14h13" /></>,
    report: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    scalable: <><path d="M4 17 10 11l4 4 7-8" /><path d="M15 7h6v6" /></>,
    support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="12" width="4" height="7" rx="2" /><rect x="17" y="12" width="4" height="7" rx="2" /><path d="M17 20h-5" /></>,
    arrow: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    arrowUp: <><path d="M7 17 17 7M7 7h10v10" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    rocket: <><path d="M5 15c-2 1-2 4-2 4s3 0 4-2" /><path d="M9 13 6 10c3-5 8-7 13-7 0 5-2 10-7 13l-3-3Z" /><circle cx="14" cy="8" r="2" /><path d="m11 16 2 2c1-1 2-3 2-4" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name] || icons.layers}</svg>;
};

const features = [
  ["platform", "Trading Infrastructure", "A professional brokerage trading environment configured around your operational requirements."],
  ["brand", "Custom Brokerage Branding", "Company-specific brand identity across your client-facing trading experience."],
  ["liquidity", "Liquidity Connectivity", "Integration with selected liquidity providers based on your brokerage setup."],
  ["crm", "Forex CRM", "Client and operational management to support day-to-day brokerage workflows."],
  ["portal", "Client Portal", "Centralized client access for a more connected customer experience."],
  ["website", "Website Development", "A professional brokerage website aligned with your brand and technology environment."],
  ["payment", "Payment Integration", "Connectivity with compatible payment systems and providers."],
  ["risk", "Risk Management", "Integration with relevant risk-management tools and processes."],
  ["backoffice", "Back-Office Systems", "Administrative infrastructure to support brokerage operations."],
  ["report", "Reporting", "Trading and operational reporting for business visibility."],
  ["scalable", "Scalable Infrastructure", "A technology foundation designed to evolve as business requirements change."],
  ["support", "Technical Support & Maintenance", "Technical assistance for configuration, integration, troubleshooting and maintenance."],
];

const benefits = [
  { number: "01", title: "Build Under Your Own Brand", text: "Operate under a distinct corporate identity while using established technology infrastructure. Maintain a consistent brand across your website, client portal, trading environment and communication channels.", icon: "brand" },
  { number: "02", title: "Integrated Technology", text: "Bring trading infrastructure, CRM, liquidity, payments, website, client management and back-office systems into a connected technology ecosystem.", icon: "layers" },
  { number: "03", title: "Flexible Infrastructure", text: "Configure technology around your business model, operational processes, liquidity requirements and future plans.", icon: "platform" },
  { number: "04", title: "Faster Market Entry", text: "Use an established technology foundation to simplify preparation for launch instead of building every component independently.", icon: "rocket" },
  { number: "05", title: "Scalable Operations", text: "Introduce additional systems, integrations and capabilities as your brokerage grows and operational requirements evolve.", icon: "scalable" },
  { number: "06", title: "Dedicated Technical Support", text: "Access technical expertise for configuration, integration, troubleshooting, maintenance and ongoing infrastructure needs.", icon: "support" },
];

const audiences = [
  { number: "01", title: "New Forex Brokers", text: "Launch a branded brokerage using established technology infrastructure and supporting systems.", icon: "rocket" },
  { number: "02", title: "Financial Service Providers", text: "Expand an existing financial services business with online trading capabilities.", icon: "layers" },
  { number: "03", title: "Fintech Companies", text: "Add brokerage technology to an existing financial technology ecosystem.", icon: "platform" },
  { number: "04", title: "Introducing Brokers", text: "Establish a branded trading operation with client management and brokerage infrastructure.", icon: "users" },
  { number: "05", title: "Trading Businesses", text: "Create a professional online trading environment supported by integrated technology.", icon: "liquidity" },
  { number: "06", title: "Existing Brokers", text: "Upgrade infrastructure, integrate additional systems or improve existing operational capabilities.", icon: "scalable" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function WhiteLabelSolution() {
  return (
    <main className="wls-page" id="top">
      <section className="wls-hero">
        <div className="wls-hero-grid" />
        <div className="wls-hero-orb wls-orb-one" />
        <div className="wls-hero-orb wls-orb-two" />
        <div className="wls-container wls-hero-layout">
          <motion.div className="wls-hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.22, 1, .36, 1] }}>
            <div className="wls-kicker"><span /> FOREX BROKERAGE TECHNOLOGY</div>
            <h1>White Label <em>Solution</em></h1>
            <h2>Launch a Branded Forex Brokerage with a White Label Solution</h2>
            <p>A White Label solution provides the technology infrastructure businesses need to launch and operate a professional Forex brokerage under their own brand.</p>
            <p className="wls-hero-subtext">Build your brand on a connected technology foundation—from trading infrastructure and liquidity connectivity to CRM, website, client management and technical support.</p>
            <div className="wls-hero-actions">
              <a className="wls-button wls-button-primary" href="https://intellifxsolutions.com/contact/">Start Your Brokerage <Icon name="arrowUp" size={17} /></a>
              <a className="wls-button wls-button-glass" href="#wls-features">Explore Features <Icon name="arrow" size={17} /></a>
            </div>
            <div className="wls-hero-trust"><span><Icon name="check" size={15} /> Brand-led setup</span><span><Icon name="check" size={15} /> Connected systems</span><span><Icon name="check" size={15} /> Scalable technology</span></div>
          </motion.div>

          <motion.div className="wls-hero-visual" initial={{ opacity: 0, scale: .92, x: 22 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .9, delay: .12 }}>
            <div className="wls-visual-glow" />
            <motion.div className="wls-platform-card wls-platform-main" animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <div className="wls-card-top"><div className="wls-mini-brand"><span>IFX</span><div><b>Broker Console</b><small>TECHNOLOGY OVERVIEW</small></div></div><span className="wls-status"><i /> CONNECTED</span></div>
              <div className="wls-dashboard-heading"><div><small>YOUR BROKERAGE</small><h3>One connected ecosystem</h3></div><span className="wls-dashboard-icon"><Icon name="layers" size={20} /></span></div>
              <div className="wls-dashboard-lines"><span /><span /><span /></div>
              <div className="wls-dashboard-modules">
                <div><Icon name="platform" size={19} /><span>Trading</span></div><div><Icon name="crm" size={19} /><span>CRM</span></div><div><Icon name="liquidity" size={19} /><span>Liquidity</span></div><div><Icon name="website" size={19} /><span>Website</span></div>
              </div>
              <div className="wls-connection-line"><span /><i /><span /><i /><span /><i /><span /></div>
              <div className="wls-card-footer"><span>BRANDED EXPERIENCE</span><span>BUILT TO SCALE <Icon name="arrowUp" size={12} /></span></div>
            </motion.div>
            <motion.div className="wls-float-card wls-float-brand" animate={{ y: [0, 8, 0], rotate: [0, 1, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}><span className="wls-float-icon"><Icon name="brand" size={18} /></span><div><b>Your brand</b><small>Your trading identity</small></div><span className="wls-float-check"><Icon name="check" size={13} /></span></motion.div>
            <motion.div className="wls-float-card wls-float-network" animate={{ y: [0, -7, 0] }} transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: .5 }}><span className="wls-network-pulse"><Icon name="liquidity" size={18} /></span><div><b>Connected systems</b><small>Technology working together</small></div></motion.div>
            <div className="wls-visual-ring wls-visual-ring-one" /><div className="wls-visual-ring wls-visual-ring-two" />
          </motion.div>
        </div>
        <a className="wls-scroll-cue" href="#wls-intro"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="wls-intro wls-section" id="wls-intro">
        <div className="wls-container wls-intro-layout">
          <motion.div className="wls-section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={itemVariants}>
            <span className="wls-section-kicker">UNDERSTANDING THE MODEL</span>
            <h2>What is a <em>White Label Solution?</em></h2>
          </motion.div>
          <motion.div className="wls-intro-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={itemVariants}>
            <p>A White Label solution enables a business to launch a branded Forex brokerage using established technology infrastructure provided by a specialized technology partner.</p>
            <p>The infrastructure is configured around the brokerage’s brand, business model and operational requirements, allowing the business to deliver a professional client experience without developing an entire brokerage technology ecosystem from the ground up.</p>
            <div className="wls-note"><Icon name="layers" size={22} /><span><b>Configured around your business</b><small>The exact technology configuration depends on your business model, operational requirements, liquidity structure, target markets and applicable regulatory framework.</small></span></div>
          </motion.div>
        </div>
      </section>

      <section className="wls-features wls-section" id="wls-features">
        <div className="wls-container">
          <motion.div className="wls-centered-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={itemVariants}>
            <span className="wls-section-kicker">A CONNECTED TECHNOLOGY STACK</span>
            <h2>Everything your brokerage <em>may need</em></h2>
            <p>A comprehensive White Label setup can bring the following technology components into one coordinated environment.</p>
          </motion.div>
          <motion.div className="wls-feature-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }}>
            {features.map(([icon, title, text], index) => (
              <motion.article className="wls-feature-card" variants={itemVariants} key={title} whileHover={{ y: -7, transition: { duration: .22 } }}>
                <div className="wls-feature-card-top"><span className="wls-feature-icon"><Icon name={icon} size={21} /></span><span className="wls-feature-number">{String(index + 1).padStart(2, "0")}</span></div>
                <h3>{title}</h3><p>{text}</p><span className="wls-feature-arrow"><Icon name="arrowUp" size={16} /></span>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="wls-benefits wls-section">
        <div className="wls-container">
          <div className="wls-benefits-layout">
            <motion.div className="wls-benefits-sticky" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={itemVariants}>
              <span className="wls-section-kicker">WHY WHITE LABEL?</span>
              <h2>A foundation to <em>launch and grow</em></h2>
              <p>Build around your brand while connecting the technology and operational systems your brokerage needs.</p>
              <a href="https://intellifxsolutions.com/contact/" className="wls-text-link">Discuss your requirements <Icon name="arrowUp" size={16} /></a>
              <div className="wls-benefits-decoration"><div className="wls-benefit-orbit" /><span><Icon name="layers" size={34} /></span></div>
            </motion.div>
            <motion.div className="wls-benefit-list" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }}>
              {benefits.map((benefit) => (
                <motion.article className="wls-benefit-item" variants={itemVariants} key={benefit.number}>
                  <span className="wls-benefit-number">{benefit.number}</span>
                  <span className="wls-benefit-icon"><Icon name={benefit.icon} size={20} /></span>
                  <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
                  <span className="wls-benefit-check"><Icon name="check" size={15} /></span>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="wls-audience wls-section">
        <div className="wls-container">
          <motion.div className="wls-centered-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={itemVariants}>
            <span className="wls-section-kicker">WHO IS IT FOR?</span>
            <h2>Designed for different <em>business journeys</em></h2>
            <p>A White Label solution can be suitable for businesses looking to establish or expand a Forex brokerage operation.</p>
          </motion.div>
          <motion.div className="wls-audience-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }}>
            {audiences.map((audience) => (
              <motion.article className="wls-audience-card" variants={itemVariants} key={audience.number} whileHover={{ y: -6 }}>
                <div className="wls-audience-card-head"><span>{audience.number}</span><Icon name={audience.icon} size={22} /></div>
                <h3>{audience.title}</h3><p>{audience.text}</p><div className="wls-audience-line"><span /></div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="wls-process wls-section">
        <div className="wls-container wls-process-inner">
          <motion.div className="wls-process-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={itemVariants}>
            <span className="wls-section-kicker">YOUR BROKERAGE. YOUR BRAND.</span>
            <h2>Bring your technology <em>into one ecosystem</em></h2>
            <p>From trading infrastructure and liquidity connectivity to Forex CRM, website development, payments, risk management and technical support, the solution can be configured around your requirements.</p>
            <a className="wls-button wls-button-primary" href="https://intellifxsolutions.com/contact/">Build Your White Label Brokerage <Icon name="arrowUp" size={17} /></a>
          </motion.div>
          <motion.div className="wls-process-visual" initial={{ opacity: 0, scale: .95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7 }}>
            <div className="wls-process-center"><span>YOUR<br />BRAND</span><small>WHITE LABEL</small></div>
            <div className="wls-process-node node-platform"><Icon name="platform" size={19} /><span>Trading</span></div>
            <div className="wls-process-node node-crm"><Icon name="crm" size={19} /><span>CRM</span></div>
            <div className="wls-process-node node-liquidity"><Icon name="liquidity" size={19} /><span>Liquidity</span></div>
            <div className="wls-process-node node-web"><Icon name="website" size={19} /><span>Website</span></div>
            <svg className="wls-process-connectors" viewBox="0 0 500 390" fill="none" aria-hidden="true"><path d="M250 195 110 85M250 195 390 85M250 195 110 305M250 195 390 305" /><circle cx="250" cy="195" r="125" /><circle cx="250" cy="195" r="165" /></svg>
          </motion.div>
        </div>
      </section>

      <section className="wls-final-cta">
        <div className="wls-final-orb" />
        <motion.div className="wls-container wls-final-inner" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }}>
          <div><span className="wls-section-kicker">START WITH THE RIGHT FOUNDATION</span><h2>Build Your Brokerage with a <em>White Label Solution</em></h2><p>Establish a professional Forex brokerage with a solution designed around your brand, business model and technology requirements.</p></div>
          <a className="wls-button wls-button-white" href="https://intellifxsolutions.com/contact/">Start Your White Label Brokerage <Icon name="arrowUp" size={17} /></a>
        </motion.div>
      </section>
    </main>
  );
}

export default WhiteLabelSolution;
