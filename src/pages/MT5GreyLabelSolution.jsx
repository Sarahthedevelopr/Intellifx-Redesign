import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDollarSign,
  Gauge,
  Layers3,
  LifeBuoy,
  Link2,
  MonitorSmartphone,
  Network,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import "./MT5GreyLabelSolution.css";

const includedItems = [
  "Branded MT5 trading platform",
  "MT5 server configuration",
  "Customized platform branding",
  "Liquidity connectivity",
  "Forex CRM integration",
  "Client management infrastructure",
  "Website integration",
  "Payment integration",
  "Risk management connectivity",
  "Technical support and maintenance",
];

const features = [
  {
    title: "MT5 Platform",
    description: "A professional MetaTrader 5 trading environment for your brokerage.",
    icon: MonitorSmartphone,
  },
  {
    title: "Custom Branding",
    description: "Present a consistent brokerage identity across the client-facing experience.",
    icon: Sparkles,
  },
  {
    title: "Liquidity Connectivity",
    description: "Connect with selected liquidity infrastructure according to your setup.",
    icon: Network,
  },
  {
    title: "Forex CRM",
    description: "Integrate client and brokerage management workflows in one environment.",
    icon: Workflow,
  },
  {
    title: "Website Integration",
    description: "Connect your brokerage website with the trading technology environment.",
    icon: Link2,
  },
  {
    title: "Client Area",
    description: "Provide clients with a centralized environment for their brokerage activity.",
    icon: Layers3,
  },
  {
    title: "Payment Integration",
    description: "Connect compatible payment providers based on business requirements.",
    icon: CircleDollarSign,
  },
  {
    title: "Risk Management",
    description: "Integrate relevant risk management tools into the brokerage setup.",
    icon: ShieldCheck,
  },
  {
    title: "Technical Support",
    description: "Get ongoing technical assistance for your trading infrastructure.",
    icon: LifeBuoy,
  },
  {
    title: "Scalable Infrastructure",
    description: "Build on an environment designed to evolve with changing requirements.",
    icon: TrendingUp,
  },
];

const benefits = [
  {
    title: "Faster Market Entry",
    description:
      "Start with an established technology foundation instead of building the complete brokerage infrastructure from scratch.",
    icon: Zap,
  },
  {
    title: "Professional Brand Experience",
    description:
      "Give clients a consistent trading experience presented under your own corporate identity.",
    icon: Sparkles,
  },
  {
    title: "Reduced Technology Complexity",
    description:
      "Bring essential brokerage technology components together instead of managing disconnected systems independently.",
    icon: Workflow,
  },
  {
    title: "Flexible Infrastructure",
    description:
      "Configure the environment around your business model, liquidity arrangements and operational workflows.",
    icon: Settings2,
  },
  {
    title: "Scalable Technology",
    description:
      "Add integrations and capabilities as your brokerage's operational requirements change.",
    icon: TrendingUp,
  },
  {
    title: "Cost-Efficient Technology Setup",
    description:
      "Reduce the upfront technology investment associated with developing and maintaining a complete platform environment independently.",
    icon: CircleDollarSign,
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Setup",
    description:
      "Define the trading environment that fits your business. Select the platform configuration, integrations and infrastructure components your operation needs.",
  },
  {
    number: "02",
    title: "Customize Your Brand",
    description:
      "Shape the client-facing experience around your identity, including your brokerage name and visual branding.",
  },
  {
    number: "03",
    title: "Connect Your Infrastructure",
    description:
      "Bring together relevant systems such as liquidity providers, Forex CRM, website, payments, client management and risk tools.",
  },
  {
    number: "04",
    title: "Launch & Operate",
    description:
      "After configuration and integration, operate your branded setup with ongoing technical support and maintenance as your business evolves.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      className={`mt5gl-section-heading mt5gl-heading-${align}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="mt5gl-eyebrow"><span />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function PlatformPreview() {
  return (
    <motion.div
      className="mt5gl-platform-scene"
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mt5gl-orbit mt5gl-orbit-one" />
      <div className="mt5gl-orbit mt5gl-orbit-two" />
      <motion.div
        className="mt5gl-floating-chip mt5gl-chip-top"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="mt5gl-chip-dot" /> MT5 TECHNOLOGY
      </motion.div>

      <div className="mt5gl-dashboard">
        <div className="mt5gl-dashboard-top">
          <div className="mt5gl-window-dots"><i /><i /><i /></div>
          <span className="mt5gl-dashboard-label">BROKER DASHBOARD</span>
          <span className="mt5gl-live"><b /> LIVE ENVIRONMENT</span>
        </div>
        <div className="mt5gl-dashboard-body">
          <aside className="mt5gl-dashboard-sidebar">
            <div className="mt5gl-mini-logo"><Layers3 size={17} /></div>
            <span className="active"><Gauge size={16} /></span>
            <span><TrendingUp size={16} /></span>
            <span><Network size={16} /></span>
            <span><Settings2 size={16} /></span>
          </aside>
          <div className="mt5gl-dashboard-main">
            <div className="mt5gl-dashboard-welcome">
              <div><small>YOUR BROKERAGE</small><strong>Trading overview</strong></div>
              <div className="mt5gl-avatar">FX</div>
            </div>
            <div className="mt5gl-stats-row">
              <div className="mt5gl-stat"><small>Platform</small><strong>MetaTrader 5</strong><span>Trading environment</span></div>
              <div className="mt5gl-stat"><small>Infrastructure</small><strong>Connected</strong><span className="mt5gl-stat-green">● Integrated systems</span></div>
            </div>
            <div className="mt5gl-chart-card">
              <div className="mt5gl-chart-title"><span>Illustrative market movement</span><small>DEMO VISUAL</small></div>
              <svg viewBox="0 0 480 145" role="img" aria-label="Decorative market trend chart">
                <defs>
                  <linearGradient id="mt5gl-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity=".22" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[28, 60, 92, 124].map((y) => <line key={y} x1="0" x2="480" y1={y} y2={y} stroke="#e7edf7" strokeDasharray="4 5" />)}
                <path d="M0 112 L35 95 L65 102 L94 72 L125 84 L157 60 L188 76 L220 48 L250 64 L281 37 L315 52 L345 24 L377 43 L408 18 L441 32 L480 10 L480 145 L0 145 Z" fill="url(#mt5gl-chart-fill)" />
                <path d="M0 112 L35 95 L65 102 L94 72 L125 84 L157 60 L188 76 L220 48 L250 64 L281 37 L315 52 L345 24 L377 43 L408 18 L441 32 L480 10" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="345" cy="24" r="4.5" fill="#facc15" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <div className="mt5gl-dashboard-bottom"><span><i /> CRM connected</span><span><i /> Liquidity link</span><span><i /> Brand configured</span></div>
          </div>
        </div>
      </div>

      <motion.div
        className="mt5gl-floating-chip mt5gl-chip-bottom"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="mt5gl-chip-icon"><Check size={15} /></span>
        Connected technology stack
      </motion.div>
      <div className="mt5gl-scene-glow" />
    </motion.div>
  );
}

export default function MT5GreyLabelSolution() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mt5gl-page">
      <section className="mt5gl-hero">
        <div className="mt5gl-hero-grid" />
        <div className="mt5gl-hero-inner">
          <motion.div
            className="mt5gl-hero-copy"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div className="mt5gl-hero-badge" variants={fadeUp}>
              <span className="mt5gl-badge-spark"><Sparkles size={14} /></span>
              FOREX BROKERAGE TECHNOLOGY
            </motion.div>
            <motion.h1 variants={fadeUp}>
              Launch Your Brokerage with an <em>MT5 Grey Label</em> Solution
            </motion.h1>
            <motion.p variants={fadeUp}>
              Establish a branded Forex brokerage with access to the MetaTrader 5 trading environment, supported by technology infrastructure, integrations and technical expertise.
            </motion.p>
            <motion.p className="mt5gl-hero-secondary" variants={fadeUp}>
              From platform setup and branding to liquidity connectivity, CRM integration and ongoing support, bring the essential parts of your brokerage technology together.
            </motion.p>
            <motion.div className="mt5gl-hero-actions" variants={fadeUp}>
              <a className="mt5gl-btn mt5gl-btn-primary" href="/contact">
                Request a Consultation <ArrowUpRight size={18} />
              </a>
              <a className="mt5gl-btn mt5gl-btn-secondary" href="#mt5gl-features">
                Explore Features <ArrowDownRight size={18} />
              </a>
            </motion.div>
            <motion.div className="mt5gl-hero-proof" variants={fadeUp}>
              <span><Check size={15} /> Branded MT5 environment</span>
              <span><Check size={15} /> Connected integrations</span>
              <span><Check size={15} /> Technical support</span>
            </motion.div>
          </motion.div>
          <PlatformPreview />
        </div>
        <a className="mt5gl-scroll-cue" href="#mt5gl-intro"><span /> Scroll to explore</a>
      </section>

      <section className="mt5gl-intro mt5gl-section" id="mt5gl-intro">
        <div className="mt5gl-container mt5gl-intro-grid">
          <motion.div
            className="mt5gl-intro-visual"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt5gl-intro-card">
              <div className="mt5gl-intro-icon"><Layers3 size={25} /></div>
              <span className="mt5gl-eyebrow"><span /> A CONNECTED FOUNDATION</span>
              <h3>Your brand.<br /><em>Your brokerage experience.</em></h3>
              <p>A technology setup built around your business requirements.</p>
              <div className="mt5gl-stack-list">
                {["MT5 trading environment", "Brokerage branding", "CRM & client area", "Liquidity & integrations"].map((item, i) => (
                  <div key={item}><span className="mt5gl-stack-number">0{i + 1}</span>{item}<Check size={15} /></div>
                ))}
              </div>
            </div>
            <div className="mt5gl-intro-deco mt5gl-intro-deco-one" />
            <div className="mt5gl-intro-deco mt5gl-intro-deco-two" />
          </motion.div>
          <div className="mt5gl-intro-copy">
            <SectionHeading
              align="left"
              eyebrow="UNDERSTAND THE MODEL"
              title="What Is an MT5 Grey Label?"
              description="An MT5 grey label solution enables Forex brokers and financial service providers to operate a branded MetaTrader 5 trading environment without developing the complete trading infrastructure independently."
            />
            <p className="mt5gl-body-copy">
              It combines the established MT5 trading environment with customized brokerage technology, branding, integrations and technical support. This structure helps businesses establish a professional technology environment while maintaining a distinct brand identity.
            </p>
            <div className="mt5gl-note"><span><Check size={17} /></span><p>The exact configuration can be tailored to your business requirements and the infrastructure components your operation needs.</p></div>
          </div>
        </div>
      </section>

      <section className="mt5gl-section mt5gl-included-section">
        <div className="mt5gl-container">
          <SectionHeading
            eyebrow="THE TECHNOLOGY STACK"
            title="What Can Your Grey Label Setup Include?"
            description="Bring key brokerage technology components into a connected environment. The final configuration depends on your operational and integration requirements."
          />
          <div className="mt5gl-included-grid">
            {includedItems.map((item, index) => (
              <motion.div
                className="mt5gl-included-item"
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (index % 5) * 0.055, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <span className="mt5gl-included-check"><Check size={16} /></span>
                <span>{item}</span>
                <ChevronRight size={16} className="mt5gl-included-arrow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt5gl-section mt5gl-features-section" id="mt5gl-features">
        <div className="mt5gl-container">
          <SectionHeading
            eyebrow="BUILT AROUND YOUR BROKERAGE"
            title="Key Features of an MT5 Grey Label Solution"
            description="A look at the core technology capabilities that can support your branded trading environment."
          />
          <div className="mt5gl-feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  className="mt5gl-feature-card"
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.14 }}
                  transition={{ delay: (index % 3) * 0.07, duration: 0.45 }}
                  whileHover={{ y: -7, transition: { duration: 0.22 } }}
                >
                  <div className="mt5gl-feature-icon"><Icon size={22} /></div>
                  <span className="mt5gl-card-index">0{index + 1}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="mt5gl-card-line" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt5gl-section mt5gl-benefits-section">
        <div className="mt5gl-container">
          <SectionHeading
            eyebrow="WHY GREY LABEL?"
            title="Benefits of an MT5 Grey Label Solution"
            description="Use an established technology foundation and focus your resources on your brokerage brand, client acquisition and operations."
          />
          <div className="mt5gl-benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.article
                  className="mt5gl-benefit-card"
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ delay: (index % 3) * 0.07, duration: 0.45 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mt5gl-benefit-icon"><Icon size={21} /></div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt5gl-section mt5gl-process-section" id="mt5gl-process">
        <div className="mt5gl-container">
          <SectionHeading
            eyebrow="FROM SETUP TO LAUNCH"
            title="How the Solution Works"
            description="A structured implementation process brings the essential technology, integrations and infrastructure together."
          />
          <div className="mt5gl-process-layout">
            <div className="mt5gl-process-tabs" role="tablist" aria-label="Implementation steps">
              {steps.map((step, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeStep === index}
                  className={`mt5gl-process-tab ${activeStep === index ? "is-active" : ""}`}
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                >
                  <span>{step.number}</span>
                  <strong>{step.title}</strong>
                  <ArrowUpRight size={17} />
                </button>
              ))}
            </div>
            <motion.div
              className="mt5gl-process-detail"
              key={activeStep}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              role="tabpanel"
            >
              <span className="mt5gl-process-kicker">STEP {steps[activeStep].number}</span>
              <div className="mt5gl-process-big-number">{steps[activeStep].number}</div>
              <div className="mt5gl-process-detail-icon"><Workflow size={25} /></div>
              <h3>{steps[activeStep].title}</h3>
              <p>{steps[activeStep].description}</p>
              <div className="mt5gl-process-progress">
                {steps.map((step, index) => <span key={step.number} className={index <= activeStep ? "complete" : ""} />)}
              </div>
              <div className="mt5gl-process-controls">
                <span>{activeStep + 1} of {steps.length} steps</span>
                <button
                  type="button"
                  onClick={() => setActiveStep((current) => (current + 1) % steps.length)}
                  aria-label="Show next implementation step"
                >
                  Next step <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt5gl-cta-section">
        <div className="mt5gl-cta-orb mt5gl-cta-orb-one" />
        <div className="mt5gl-cta-orb mt5gl-cta-orb-two" />
        <motion.div
          className="mt5gl-container mt5gl-cta-content"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mt5gl-cta-eyebrow"><Sparkles size={15} /> YOUR BROKERAGE STARTS HERE</span>
          <h2>Build a Professional <em>Brokerage Infrastructure</em></h2>
          <p>
            Establish a branded Forex brokerage with an MT5 grey label solution supported by professional technology infrastructure, flexible integrations and technical expertise. Whether you are launching a new brokerage or expanding an existing operation, build a connected environment around your business needs.
          </p>
          <div className="mt5gl-cta-actions">
            <a className="mt5gl-btn mt5gl-btn-yellow" href="/contact">
              Request a Consultation <ArrowUpRight size={18} />
            </a>
            <a className="mt5gl-cta-email" href="mailto:sales@intellifxsolutions.com">
              sales@intellifxsolutions.com <ArrowRight size={15} />
            </a>
          </div>
          <div className="mt5gl-cta-points">
            <span><Check size={15} /> Flexible integrations</span>
            <span><Check size={15} /> Branded trading environment</span>
            <span><Check size={15} /> Ongoing technical support</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
