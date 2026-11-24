import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  Building2,
  CheckCircle2,
  CircleDot,
  Compass,
  Globe2,
  Layers3,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const services = [
  {
    number: "01",
    icon: Layers3,
    title: "White Label Solutions",
    text: "Build a branded trading environment with a technology foundation configured around your brokerage requirements.",
  },
  {
    number: "02",
    icon: Network,
    title: "MT5 Grey Label",
    text: "Explore a practical route to launching a brokerage with trading infrastructure and connectivity in place.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Forex Broker CRM",
    text: "Bring client information, account activity, and everyday brokerage workflows into a more connected environment.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Liquidity & Infrastructure",
    text: "Connect the technology layers supporting pricing, liquidity connectivity, execution, and risk workflows.",
  },
  {
    number: "05",
    icon: Target,
    title: "Prop Trading Technology",
    text: "Set up trading and operational technology suited to your prop firm model and management requirements.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Brokerage Website Development",
    text: "Create a professional, responsive web presence designed to connect with your brokerage technology stack.",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Reliability by design",
    text: "Technology decisions should support dependable day-to-day operations, not add unnecessary complexity.",
  },
  {
    icon: Blocks,
    title: "Connected systems",
    text: "We focus on how the different parts of a brokerage environment work together as one technology stack.",
  },
  {
    icon: Compass,
    title: "Built around your model",
    text: "The right setup starts with understanding your business goals, operating model, and requirements.",
  },
  {
    icon: TrendingUp,
    title: "Ready to evolve",
    text: "Choose a foundation that can adapt as your brokerage operations and technology needs change.",
  },
];

const stages = [
  { number: "01", title: "Launch", icon: Rocket, text: "Establish your brokerage technology foundation with the components your business needs to get started." },
  { number: "02", title: "Operate", icon: Workflow, text: "Connect trading, CRM, liquidity, and web workflows to support daily brokerage operations." },
  { number: "03", title: "Scale", icon: TrendingUp, text: "Review your technology stack and adapt it as your business requirements grow." },
  { number: "04", title: "Expand", icon: Globe2, text: "Explore additional capabilities and connected systems to support your next stage." },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.16 },
          variants: fadeUp,
          transition: { delay },
        };

  return (
    <div className="ifx-about">
      <section className="ifx-about-hero">
        <div className="ifx-about-hero-grid" aria-hidden="true" />
        <motion.div
          className="ifx-about-orb ifx-about-orb-one"
          aria-hidden="true"
          animate={reduceMotion ? {} : { y: [0, -16, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="ifx-about-orb ifx-about-orb-two"
          aria-hidden="true"
          animate={reduceMotion ? {} : { y: [0, 14, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="ifx-about-container ifx-about-hero-layout">
          <motion.div
            className="ifx-about-hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="ifx-eyebrow"><span className="ifx-eyebrow-dot" /> ABOUT INTELLIFX SOLUTIONS</span>
            <h1>Technology built around <span>your brokerage.</span></h1>
            <p className="ifx-about-hero-lead">
              We provide technology solutions for Forex brokers and prop trading businesses—from trading infrastructure to the connected systems that support daily operations.
            </p>
            <p className="ifx-about-hero-sub">
              Our focus is to help you bring the right technology components together, aligned with your business model, operating requirements, and plans for growth.
            </p>
            <div className="ifx-about-hero-actions">
              <a className="ifx-about-primary" href="/contact/">Discuss Your Requirements <ArrowUpRight size={18} /></a>
              <a className="ifx-about-text-link" href="#ifx-about-story">Discover who we are <ArrowDownRight size={17} /></a>
            </div>
            <div className="ifx-about-hero-note">
              <span><CheckCircle2 size={17} /> Brokerage-focused technology</span>
              <span><CheckCircle2 size={17} /> Connected solutions</span>
            </div>
          </motion.div>

          <motion.div
            className="ifx-about-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
          >
            <div className="ifx-about-visual-top">
              <span><span className="ifx-live-dot" /> TECHNOLOGY ECOSYSTEM</span>
              <span className="ifx-about-status"><CircleDot size={14} /> Connected view</span>
            </div>
            <div className="ifx-about-ecosystem">
              <div className="ifx-about-ring ring-one" />
              <div className="ifx-about-ring ring-two" />
              <svg className="ifx-about-connectors" viewBox="0 0 600 410" preserveAspectRatio="none" aria-hidden="true">
                <line x1="300" y1="204" x2="115" y2="88" />
                <line x1="300" y1="204" x2="485" y2="88" />
                <line x1="300" y1="204" x2="112" y2="322" />
                <line x1="300" y1="204" x2="488" y2="322" />
              </svg>
              <motion.div
                className="ifx-about-core"
                animate={reduceMotion ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="ifx-about-core-icon"><Layers3 size={31} strokeWidth={1.8} /></div>
                <strong>IntelliFX</strong>
                <span>Technology partner</span>
              </motion.div>
              <div className="ifx-about-node node-liquidity"><span><Network size={19} /></span><b>Liquidity</b></div>
              <div className="ifx-about-node node-platform"><span><Layers3 size={19} /></span><b>Trading platforms</b></div>
              <div className="ifx-about-node node-operations"><span><Workflow size={19} /></span><b>Operations</b></div>
              <div className="ifx-about-node node-risk"><span><ShieldCheck size={19} /></span><b>Risk & control</b></div>
            </div>
            <div className="ifx-about-visual-bottom">
              <span><i className="dot-blue" /> Connectivity</span>
              <span><i className="dot-purple" /> Operations</span>
              <span><i className="dot-yellow" /> Infrastructure</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="ifx-about-story ifx-about-section" id="ifx-about-story">
        <div className="ifx-about-container ifx-about-story-grid">
          <motion.div className="ifx-about-section-heading" {...reveal()}>
            <span className="ifx-eyebrow"><span className="ifx-eyebrow-dot" /> WHO WE ARE</span>
            <h2>A technology partner for the <span>brokerage journey.</span></h2>
          </motion.div>
          <motion.div className="ifx-about-story-copy" {...reveal(0.1)}>
            <p className="ifx-about-large-copy">
              IntelliFX Solutions specializes in technology for Forex brokers and trading businesses. We bring together solutions such as trading platforms, CRM, liquidity connectivity, and brokerage website development.
            </p>
            <p>
              Every brokerage has its own operating model and priorities. Our approach starts with understanding those requirements, then identifying the technology components that best fit the business—not treating every project as a one-size-fits-all setup.
            </p>
            <a href="/contact/" className="ifx-about-inline-link">Talk to our team <ArrowRight size={17} /></a>
          </motion.div>
        </div>
      </section>

      <section className="ifx-about-purpose ifx-about-section">
        <div className="ifx-about-container">
          <motion.div className="ifx-about-centered-heading" {...reveal()}>
            <span className="ifx-eyebrow"><span className="ifx-eyebrow-dot" /> OUR PURPOSE</span>
            <h2>Clear goals. <span>Connected technology.</span></h2>
            <p>We focus on helping brokerage businesses choose and connect technology that supports their needs today and their plans for tomorrow.</p>
          </motion.div>
          <div className="ifx-about-purpose-grid">
            <motion.article className="ifx-purpose-card purpose-featured" {...reveal()}>
              <div className="ifx-purpose-icon"><Target size={23} /></div>
              <span className="ifx-card-kicker">OUR GOAL</span>
              <h3>Build lasting technology partnerships.</h3>
              <p>Our goal is to build long-term strategic partnerships with Forex brokers worldwide through dependable technology infrastructure, tailored solutions, and responsive service.</p>
              <span className="ifx-purpose-index">01</span>
            </motion.article>
            <motion.article className="ifx-purpose-card" {...reveal(0.08)}>
              <div className="ifx-purpose-icon"><Zap size={23} /></div>
              <span className="ifx-card-kicker">OUR MISSION</span>
              <h3>Make brokerage technology work together.</h3>
              <p>We aim to deliver robust, scalable, and innovative technology solutions that help brokers operate with greater efficiency, reliability, and confidence.</p>
              <span className="ifx-purpose-index">02</span>
            </motion.article>
            <motion.article className="ifx-purpose-card" {...reveal(0.16)}>
              <div className="ifx-purpose-icon"><Globe2 size={23} /></div>
              <span className="ifx-card-kicker">OUR VISION</span>
              <h3>Be a trusted partner for evolving businesses.</h3>
              <p>We aspire to be recognized for technology, reliability, service, and innovation—helping brokers adapt and grow in a changing financial ecosystem.</p>
              <span className="ifx-purpose-index">03</span>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="ifx-about-services ifx-about-section">
        <div className="ifx-about-container">
          <motion.div className="ifx-about-services-heading" {...reveal()}>
            <div>
              <span className="ifx-eyebrow"><span className="ifx-eyebrow-dot" /> WHAT WE DO</span>
              <h2>Technology for every <span>part of the stack.</span></h2>
            </div>
            <p>Explore the core technology areas we support across brokerage and prop trading businesses.</p>
          </motion.div>
          <div className="ifx-about-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.a
                  className="ifx-about-service-card"
                  href={[
                    "/white-label-solution/",
                    "/mt5-grey-label-solution/",
                    "/forex-broker-crm/",
                    "/liquidity-trading-infrastructure/",
                    "/prop-trading-technology/",
                    "/forex-broker-website-development/",
                  ][index]}
                  key={service.number}
                  {...reveal(index * 0.05)}
                  whileHover={reduceMotion ? {} : { y: -7 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="ifx-service-card-top">
                    <span className="ifx-service-icon"><Icon size={22} /></span>
                    <span className="ifx-service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="ifx-service-more">Explore solution <ArrowUpRight size={16} /></span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ifx-about-principles ifx-about-section">
        <div className="ifx-about-container ifx-about-principles-layout">
          <motion.div className="ifx-about-principles-intro" {...reveal()}>
            <span className="ifx-eyebrow"><span className="ifx-eyebrow-dot" /> HOW WE THINK</span>
            <h2>Technology choices should serve <span>your business.</span></h2>
            <p>We believe the strongest technology setup is one that fits the way your business operates, connects the right systems, and leaves room to adapt.</p>
            <a href="/contact/" className="ifx-about-inline-link">Discuss your setup <ArrowRight size={17} /></a>
          </motion.div>
          <div className="ifx-about-principles-list">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article className="ifx-principle-row" key={item.title} {...reveal(index * 0.06)}>
                  <div className="ifx-principle-icon"><Icon size={22} /></div>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <ArrowUpRight className="ifx-principle-arrow" size={19} />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ifx-about-journey ifx-about-section">
        <div className="ifx-about-container">
          <motion.div className="ifx-about-centered-heading" {...reveal()}>
            <span className="ifx-eyebrow"><span className="ifx-eyebrow-dot" /> YOUR BUSINESS JOURNEY</span>
            <h2>From first launch to <span>what comes next.</span></h2>
            <p>Technology requirements change as your business develops. The right starting point depends on where you are today.</p>
          </motion.div>
          <div className="ifx-about-journey-grid">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.article className="ifx-journey-card" key={stage.number} {...reveal(index * 0.08)}>
                  <div className="ifx-journey-card-head">
                    <span className="ifx-journey-icon"><Icon size={22} /></span>
                    <span className="ifx-journey-number">{stage.number}</span>
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                  {index < stages.length - 1 && <ArrowRight className="ifx-journey-connector" size={18} />}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ifx-about-cta-wrap">
        <motion.div className="ifx-about-container" {...reveal()}>
          <div className="ifx-about-cta">
            <div className="ifx-about-cta-glow" aria-hidden="true" />
            <div className="ifx-about-cta-copy">
              <span className="ifx-eyebrow ifx-eyebrow-light"><span className="ifx-eyebrow-dot" /> LET'S BUILD THE RIGHT SETUP</span>
              <h2>Have a brokerage technology goal in mind?</h2>
              <p>Tell us where you are in your journey and what you want your technology stack to support. Let's discuss the requirements together.</p>
            </div>
            <a href="/contact/" className="ifx-about-cta-button">Talk to IntelliFX <ArrowUpRight size={18} /></a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
