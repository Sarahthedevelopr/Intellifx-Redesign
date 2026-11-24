import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  CircleHelp,
  Globe2,
  Layers3,
  LifeBuoy,
  Mail,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import Hero from "../components/Hero";
import "./Home.css";

const CONTACT_URL = "https://intellifxsolutions.com/contact/";
const WHATSAPP_URL = "https://wa.me/447520665843";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const services = [
  {
    number: "01",
    title: "White Label Solution",
    subtitle: "Launch your own branded Forex brokerage",
    description:
      "Launch a professional brokerage under your own brand with a branded trading environment across Desktop, WebTrader, Android and iOS, plus dedicated admin and manager access.",
    features: ["Custom brokerage branding", "Multi-device access", "Admin & manager access"],
    icon: Layers3,
    image: "https://intellifxsolutions.com/wp-content/uploads/2026/09/MT5-white-label-dark-1024x720.webp",
    href: "https://intellifxsolutions.com/white-label-solution/",
    tone: "blue",
  },
  {
    number: "02",
    title: "MT5 Grey Label Solution",
    subtitle: "A cost-conscious way to launch your brokerage",
    description:
      "Enter the Forex brokerage industry using an established MT5 environment with server infrastructure, price feeds, liquidity connectivity and B-Book functionality, without building every component from scratch.",
    features: ["MT5 environment", "Liquidity connectivity", "Flexible infrastructure"],
    icon: TrendingUp,
    image: "https://intellifxsolutions.com/wp-content/uploads/2026/09/MT5-grey-label-1024x720.webp",
    href: "https://intellifxsolutions.com/mt5-grey-label-solution/",
    tone: "purple",
  },
  {
    number: "03",
    title: "Forex CRM",
    subtitle: "Bring client and brokerage workflows together",
    description:
      "Connect client information, trading accounts, financial activity and administrative workflows in one environment, with MT5 integration and MAM capabilities for day-to-day operations.",
    features: ["Client & lead management", "MT5 integration", "MAM capabilities"],
    icon: Workflow,
    image: "https://intellifxsolutions.com/wp-content/uploads/2026/09/Forex-CRM-1024x720.webp",
    href: "https://intellifxsolutions.com/forex-broker-crm/",
    tone: "yellow",
  },
  {
    number: "04",
    title: "Liquidity & Trading Infrastructure",
    subtitle: "Connect the technology behind your trading environment",
    description:
      "Configure the technology layer that connects your brokerage environment with the relevant liquidity, pricing, execution and trading infrastructure for your business model.",
    features: ["Liquidity connectivity", "Pricing & execution", "Integrated systems"],
    icon: Network,
    image: "https://intellifxsolutions.com/wp-content/uploads/2026/09/liquidity-infrastructure-1024x720.webp",
    href: "https://intellifxsolutions.com/liquidity-trading-infrastructure/",
    tone: "blue",
  },
  {
    number: "05",
    title: "Prop Trading Technology",
    subtitle: "Build a connected technology foundation for your prop firm",
    description:
      "Support trader onboarding, trading accounts, challenges, risk parameters, CRM workflows, reporting and daily administration through configurable trading technology.",
    features: ["Trader dashboards", "Risk-management tools", "Challenge workflows"],
    icon: ShieldCheck,
    image: "https://intellifxsolutions.com/wp-content/uploads/2026/09/Prop-trading-tech-1024x720.webp",
    href: "https://intellifxsolutions.com/prop-trading-technology/",
    tone: "purple",
  },
  {
    number: "06",
    title: "Forex Broker Website Development",
    subtitle: "More than a landing page",
    description:
      "Create a professional, responsive and SEO-friendly brokerage website that reflects your brand and can connect with relevant CRM, registration, client-area and payment workflows.",
    features: ["Responsive design", "SEO-friendly structure", "CRM integration"],
    icon: Sparkles,
    image: "https://intellifxsolutions.com/wp-content/uploads/2026/09/forex-website-design-1024x720.webp",
    href: "https://intellifxsolutions.com/forex-broker-website-development/",
    tone: "yellow",
  },
];

const journey = [
  {
    step: "01",
    label: "LAUNCH",
    title: "New Brokerage",
    description: "Establish the technology foundation for a new brokerage operation.",
    stack: ["MT5", "CRM", "Liquidity", "Website"],
    icon: Zap,
  },
  {
    step: "02",
    label: "SCALE",
    title: "Existing Broker",
    description: "Upgrade your technology stack, connect workflows and improve existing operations.",
    stack: ["CRM", "MAM", "Integrations", "Website"],
    icon: TrendingUp,
  },
  {
    step: "03",
    label: "EXPAND",
    title: "Prop Firm",
    description: "Build trading infrastructure around your prop firm model and operating requirements.",
    stack: ["Trading", "Risk", "Management", "Reporting"],
    icon: ShieldCheck,
  },
];

const ecosystem = [
  { n: "01", title: "Trading platform", desc: "Branded trading environment and platform access.", icon: TrendingUp },
  { n: "02", title: "Brokerage CRM", desc: "Client records, onboarding and operational workflows.", icon: Workflow },
  { n: "03", title: "Liquidity & pricing", desc: "Connectivity for the relevant pricing and execution setup.", icon: Network },
  { n: "04", title: "Digital experience", desc: "Brokerage website and connected client journeys.", icon: Globe2 },
];

function SectionHeading({ eyebrow, title, description, align = "center", dark = false }) {
  return (
    <motion.div
      className={`home-section-heading home-section-heading--${align}${dark ? " is-dark" : ""}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="home-eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="ifx-home">
      {/* Keep the existing Hero component. Navbar should remain in App.jsx only. */}
      <Hero />

      <section className="home-about section-shell" id="about">
        <motion.div className="home-about-copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <span className="home-eyebrow"><i />WHO WE ARE</span>
          <h2>Technology infrastructure for <em>modern Forex brokers.</em></h2>
          <p>
            IntelliFX Solutions is a technology service provider focused on reliable and scalable solutions for Forex brokers. From MT5 Grey Label and White Label solutions to Forex CRM, liquidity connectivity and website development, the company provides technology infrastructure to help businesses launch and manage brokerage operations.
          </p>
          <p className="home-about-secondary">
            The aim is to support brokers with connected technology, tailored configurations and responsive service as their operational needs evolve.
          </p>
          <a className="home-text-link" href={CONTACT_URL}>Discuss your requirements <ArrowUpRight size={17} /></a>
        </motion.div>

        <motion.div className="home-purpose-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="home-purpose-top"><span>OUR IDENTITY, MISSION & VISION</span><div className="home-purpose-icon"><Globe2 size={21} /></div></div>
          <div className="home-purpose-item">
            <span className="home-purpose-index">01</span>
            <div><h3>Our Goal</h3><p>Build long-term partnerships with Forex brokers worldwide through dependable infrastructure, tailored solutions and exceptional service.</p></div>
          </div>
          <div className="home-purpose-divider" />
          <div className="home-purpose-item">
            <span className="home-purpose-index">02</span>
            <div><h3>Our Mission</h3><p>Deliver robust, scalable technology that helps brokers operate with greater efficiency, reliability and confidence.</p></div>
          </div>
          <div className="home-purpose-divider" />
          <div className="home-purpose-item">
            <span className="home-purpose-index">03</span>
            <div><h3>Our Vision</h3><p>Become a globally trusted technology partner for the brokerage industry through innovation, reliability and service.</p></div>
          </div>
        </motion.div>
      </section>

      <section className="home-solutions section-shell" id="solutions">
        <SectionHeading
          eyebrow="SOLUTIONS FOR FOREX BROKERS"
          title={<>The technology behind your <em>next stage.</em></>}
          description="Explore the core technology services available to support brokerage launch, daily operations and future growth."
        />
        <div className="home-solution-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                className={`home-solution-card home-solution-card--${service.tone}`}
                key={service.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: (index % 3) * 0.07 }}
                whileHover={{ y: -7 }}
              >
                <a className="home-solution-image-link" href={service.href} target="_blank" rel="noreferrer" aria-label={`Learn more about ${service.title}`}>
                  <img src={service.image} alt={`${service.title} technology preview`} loading="lazy" />
                  <span className="home-image-number">{service.number}</span>
                  <span className="home-image-arrow"><ArrowUpRight size={18} /></span>
                </a>
                <div className="home-solution-content">
                  <div className="home-solution-card-top"><span className="home-solution-category">INTELLIFX SOLUTIONS</span><span className="home-solution-icon"><Icon size={20} strokeWidth={1.8} /></span></div>
                  <h3>{service.title}</h3>
                  <h4>{service.subtitle}</h4>
                  <p>{service.description}</p>
                  <ul className="home-solution-features">
                    {service.features.map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}
                  </ul>
                  <a href={service.href} className="home-card-link" target="_blank" rel="noreferrer">Know more <ArrowUpRight size={17} /></a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Supplemental design section: a visual explanation of how the listed services relate. */}
      <section className="home-ecosystem-section">
        <div className="section-shell home-ecosystem-layout">
          <motion.div className="home-ecosystem-copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <span className="home-eyebrow"><i />CONNECTED TECHNOLOGY</span>
            <h2>Bring the key parts of your brokerage into <em>one connected picture.</em></h2>
            <p>
              A brokerage typically relies on several systems working together. Depending on the selected setup, trading technology, CRM, liquidity connectivity and the website can be configured as parts of a connected operating environment.
            </p>
            <div className="home-ecosystem-note"><CheckCircle2 size={18} /><span>Configuration depends on your business model, integrations and operational requirements.</span></div>
            <a className="home-text-link" href={CONTACT_URL}>Talk through your setup <ArrowUpRight size={17} /></a>
          </motion.div>
          <motion.div className="home-ecosystem-visual" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <div className="home-ecosystem-orbit home-ecosystem-orbit-one" />
            <div className="home-ecosystem-orbit home-ecosystem-orbit-two" />
            <div className="home-ecosystem-core"><Layers3 size={29} /><strong>Brokerage</strong><span>Technology stack</span></div>
            {ecosystem.map((item, index) => {
              const Icon = item.icon;
              return <motion.div className={`home-ecosystem-node home-ecosystem-node-${index + 1}`} key={item.n} whileHover={{ y: -4, scale: 1.025 }}>
                <span className="home-ecosystem-node-icon"><Icon size={19} /></span>
                <span className="home-ecosystem-node-copy"><small>{item.n} / LAYER</small><strong>{item.title}</strong><em>{item.desc}</em></span>
              </motion.div>;
            })}
            <span className="home-ecosystem-dot home-ecosystem-dot-one" /><span className="home-ecosystem-dot home-ecosystem-dot-two" />
          </motion.div>
        </div>
      </section>

      <section className="home-journey-section">
        <div className="section-shell">
          <SectionHeading
            eyebrow="BUILT FOR BROKERS AT EVERY STAGE"
            title={<>Launch. Operate. <em>Scale. Expand.</em></>}
            description="Technology priorities change as your business evolves. Start with the setup that fits where you are today."
          />
          <div className="home-journey-grid">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return <motion.article className="home-journey-card" key={item.step} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6 }}>
                <div className="home-journey-card-top"><span>{item.step}</span><Icon size={21} /></div>
                <span className="home-journey-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="home-journey-items">{item.stack.map((part) => <span key={part}>{part}</span>)}</div>
                <a href={CONTACT_URL} className="home-journey-link">Plan your setup <ArrowRight size={15} /></a>
              </motion.article>;
            })}
          </div>
        </div>
      </section>

      <section className="home-cta-wrap section-shell" id="contact">
        <motion.div className="home-cta-panel" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="home-cta-orb home-cta-orb-one" /><div className="home-cta-orb home-cta-orb-two" />
          <div className="home-cta-copy">
            <span className="home-cta-kicker"><i />LET'S TALK ABOUT YOUR REQUIREMENTS</span>
            <h2>Ready to build your brokerage technology stack?</h2>
            <p>Whether you're launching a new Forex brokerage, upgrading an existing technology environment or building a prop trading business, IntelliFX Solutions can help you discuss the technology infrastructure suited to your requirements.</p>
          </div>
          <a className="home-cta-button" href={CONTACT_URL} target="_blank" rel="noreferrer">Request a Consultation <ArrowUpRight size={18} /></a>
        </motion.div>
      </section>

      <section className="home-support section-shell">
        <div className="home-support-icon"><LifeBuoy size={25} /></div>
        <div className="home-support-copy"><span>NEED HELP?</span><h2>We're here to help you move forward.</h2><p>Contact the team to discuss brokerage technology requirements and available solutions.</p><small><CircleHelp size={13} /> Website states WhatsApp and Skype support is available 24/7.</small></div>
        <div className="home-support-actions">
          <a href="mailto:sales@intellifxsolutions.com"><Mail size={17} /> Email us <ArrowUpRight size={15} /></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp <ArrowUpRight size={15} /></a>
        </div>
      </section>
    </main>
  );
}
