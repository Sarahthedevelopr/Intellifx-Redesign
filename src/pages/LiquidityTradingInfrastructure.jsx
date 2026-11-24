import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Cable,
  CheckCircle2,
  CircleDot,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  Radar,
  RefreshCw,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import "./LiquidityTradingInfrastructure.css";

const components = [
  { icon: Network, title: "Liquidity providers", text: "Connectivity with selected liquidity sources." },
  { icon: Activity, title: "Price feeds", text: "Market pricing connectivity and distribution." },
  { icon: GitBranch, title: "Order routing", text: "Structured connections for trading order workflows." },
  { icon: Zap, title: "Execution systems", text: "Technology supporting trade execution." },
  { icon: ShieldCheck, title: "Risk management", text: "Visibility into trading activity and exposure." },
  { icon: Database, title: "Client & CRM systems", text: "Connected account and client management workflows." },
  { icon: BarChart3, title: "Reporting", text: "Trading and operational reporting tools." },
  { icon: Radar, title: "Monitoring", text: "Operational and infrastructure monitoring." },
];

const features = [
  { icon: Cable, title: "Liquidity connectivity", text: "Connect your brokerage environment with selected liquidity providers." },
  { icon: Activity, title: "Price feeds", text: "Support market pricing connectivity and distribution across compatible systems." },
  { icon: GitBranch, title: "Order routing", text: "Connect the technology involved in routing client trading orders." },
  { icon: Zap, title: "Execution infrastructure", text: "Build a structured technology layer to support trade execution workflows." },
  { icon: Layers3, title: "Liquidity aggregation", text: "Integrate multiple liquidity sources where applicable to your setup." },
  { icon: ShieldCheck, title: "Risk management", text: "Use supporting tools to monitor trading activity and exposure." },
  { icon: Server, title: "Trading servers", text: "Establish infrastructure that supports brokerage operations." },
  { icon: Radar, title: "Monitoring & reporting", text: "Keep operational visibility with monitoring and reporting capabilities." },
  { icon: Cpu, title: "API connectivity", text: "Connect compatible technology systems through available APIs." },
  { icon: Boxes, title: "CRM integration", text: "Link trading infrastructure with client management technology." },
];

const benefits = [
  { icon: Cable, title: "Reliable connectivity", text: "Stable connectivity between the brokerage, liquidity providers, and supporting systems is essential for an efficient trading environment." },
  { icon: Zap, title: "Efficient execution", text: "Well-structured execution infrastructure helps facilitate the processing and routing of client trading activity." },
  { icon: SlidersHorizontal, title: "Flexible liquidity strategy", text: "Connectivity with appropriate liquidity sources gives brokers flexibility when structuring their liquidity environment." },
  { icon: ShieldCheck, title: "Improved risk visibility", text: "Integrated risk technology can provide greater visibility into client exposure, trading activity, and operational risk." },
  { icon: Workflow, title: "Centralized infrastructure", text: "Connect liquidity, execution, trading, risk, and operational systems in a more structured technology environment." },
  { icon: TrendingUp, title: "Scalable operations", text: "Configure infrastructure around changing client volumes, trading activity, integrations, and operational requirements." },
];

const models = [
  { number: "01", title: "New Forex Brokers", text: "Establish the core liquidity, execution, and trading infrastructure required for a new brokerage operation.", tags: ["Foundation", "Connectivity"] },
  { number: "02", title: "Established Brokers", text: "Upgrade existing connectivity, introduce additional liquidity sources, or improve infrastructure capabilities.", tags: ["Upgrade", "Integration"] },
  { number: "03", title: "Multi-Brand Brokers", text: "Support separate operational environments and liquidity structures where required.", tags: ["Multi-brand", "Flexible setup"] },
  { number: "04", title: "Institutional Trading Businesses", text: "Configure connectivity and execution infrastructure around institutional trading requirements.", tags: ["Connectivity", "Execution"] },
  { number: "05", title: "Growing Brokerages", text: "Expand infrastructure to support increasing trading activity, additional clients, and new markets.", tags: ["Scale", "Expansion"] },
];

const architecture = [
  { icon: Network, label: "Liquidity providers", sub: "Selected sources" },
  { icon: Activity, label: "Pricing & feeds", sub: "Market data flow" },
  { icon: GitBranch, label: "Routing & execution", sub: "Order workflows" },
  { icon: ShieldCheck, label: "Risk & monitoring", sub: "Operational visibility" },
  { icon: Database, label: "CRM & reporting", sub: "Client operations" },
];

function SectionEyebrow({ children }) {
  return <span className="lti-eyebrow"><span className="lti-eyebrow-dot" />{children}</span>;
}

function InfrastructureVisual() {
  return (
    <motion.div
      className="lti-visual"
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="lti-visual-top">
        <div><span className="lti-live-dot" /> INFRASTRUCTURE OVERVIEW</div>
        <span className="lti-visual-status"><CircleDot size={13} /> Connected architecture</span>
      </div>
      <div className="lti-visual-grid" aria-label="Illustration of connected trading infrastructure">
        <div className="lti-visual-orbit lti-orbit-one" />
        <div className="lti-visual-orbit lti-orbit-two" />
        <motion.div className="lti-core-node" animate={{ boxShadow: ["0 0 0 0 rgba(56, 121, 255, .2)", "0 0 0 18px rgba(56, 121, 255, 0)", "0 0 0 0 rgba(56, 121, 255, 0)"] }} transition={{ duration: 2.8, repeat: Infinity }}>
          <Layers3 size={29} />
          <strong>Broker</strong>
          <small>Technology core</small>
        </motion.div>
        {[
          { cls: "node-a", icon: Network, title: "Liquidity" },
          { cls: "node-b", icon: Activity, title: "Price feeds" },
          { cls: "node-c", icon: GitBranch, title: "Execution" },
          { cls: "node-d", icon: ShieldCheck, title: "Risk" },
        ].map((node, i) => {
          const Icon = node.icon;
          return (
            <motion.div key={node.cls} className={`lti-orbit-node ${node.cls}`} animate={{ y: [0, i % 2 ? -5 : 5, 0] }} transition={{ duration: 3.2 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}>
              <span><Icon size={18} /></span><strong>{node.title}</strong>
            </motion.div>
          );
        })}
        <svg className="lti-connection-lines" viewBox="0 0 520 350" preserveAspectRatio="none" aria-hidden="true">
          <path d="M260 175 L92 72 M260 175 L428 72 M260 175 L92 278 M260 175 L428 278" />
          <path className="lti-line-dash" d="M260 175 L92 72 M260 175 L428 72 M260 175 L92 278 M260 175 L428 278" />
        </svg>
      </div>
      <div className="lti-visual-bottom">
        <span><span className="lti-mini-dot blue" /> Connectivity</span>
        <span><span className="lti-mini-dot violet" /> Execution</span>
        <span><span className="lti-mini-dot yellow" /> Monitoring</span>
      </div>
    </motion.div>
  );
}

export default function LiquidityTradingInfrastructure() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <main className="lti-page">
      <section className="lti-hero">
        <div className="lti-hero-glow lti-glow-one" />
        <div className="lti-hero-glow lti-glow-two" />
        <div className="lti-hero-inner">
          <motion.div
            className="lti-hero-copy"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionEyebrow>FOREX BROKER TECHNOLOGY</SectionEyebrow>
            <h1>Liquidity &amp; Trading <span>Infrastructure</span></h1>
            <h2>Reliable Liquidity and Trading Infrastructure for Forex Brokers</h2>
            <p className="lti-hero-description">
              Build a professional brokerage environment with reliable liquidity and trading infrastructure designed to support efficient execution, connectivity, risk management, and scalable operations.
            </p>
            <p className="lti-hero-note">
              Configure the technology layer connecting liquidity providers, pricing, execution, and trading systems around your brokerage’s operational requirements.
            </p>
            <div className="lti-hero-actions">
              <a className="lti-button lti-button-primary" href="/contact/">Discuss Your Requirements <ArrowUpRight size={17} /></a>
              <a className="lti-text-link" href="#lti-architecture">Explore the infrastructure <ArrowDown size={16} /></a>
            </div>
            <div className="lti-hero-proof">
              <span><CheckCircle2 size={16} /> Configured around your model</span>
              <span><CheckCircle2 size={16} /> Connected technology layers</span>
            </div>
          </motion.div>
          <InfrastructureVisual />
        </div>
        <div className="lti-hero-bottom-line" />
      </section>

      <section className="lti-intro lti-section">
        <div className="lti-container lti-intro-grid">
          <motion.div className="lti-section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <SectionEyebrow>THE TECHNOLOGY FOUNDATION</SectionEyebrow>
            <h2>What is liquidity &amp; trading infrastructure?</h2>
          </motion.div>
          <motion.div className="lti-intro-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}>
            <p>Liquidity and trading infrastructure forms the technology foundation that enables Forex brokers to connect with liquidity providers, manage trading activity, facilitate execution, and operate their brokerage environment efficiently.</p>
            <p>The architecture can connect multiple components and be configured according to your business model, execution requirements, liquidity arrangements, client base, and operational objectives.</p>
          </motion.div>
        </div>
        <div className="lti-container">
          <div className="lti-component-grid">
            {components.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article className="lti-component-card" key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.045 }} whileHover={{ y: -5 }}>
                  <span className="lti-card-icon"><Icon size={20} /></span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <ArrowUpRight className="lti-card-arrow" size={17} />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lti-architecture lti-section" id="lti-architecture">
        <div className="lti-container">
          <div className="lti-center-heading">
            <SectionEyebrow>CONNECTED BY DESIGN</SectionEyebrow>
            <h2>Bring your trading technology into <span>one connected environment.</span></h2>
            <p>Build a structured technology stack that links liquidity, pricing, execution, risk, and day-to-day brokerage operations.</p>
          </div>
          <div className="lti-architecture-flow">
            {architecture.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="lti-flow-item-wrap" key={item.label}>
                  <motion.div className="lti-flow-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.09, duration: 0.45 }} whileHover={{ y: -6, scale: 1.02 }}>
                    <span className="lti-flow-icon"><Icon size={22} /></span>
                    <strong>{item.label}</strong><small>{item.sub}</small>
                  </motion.div>
                  {index < architecture.length - 1 && <motion.div className="lti-flow-arrow" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.09 + 0.12 }}><ArrowRight size={17} /></motion.div>}
                </div>
              );
            })}
          </div>
          <div className="lti-architecture-caption"><span className="lti-live-dot" /> A configurable architecture—not a one-size-fits-all setup.</div>
        </div>
      </section>

      <section className="lti-features lti-section">
        <div className="lti-container">
          <div className="lti-split-heading">
            <div><SectionEyebrow>CORE CAPABILITIES</SectionEyebrow><h2>Infrastructure built around the way your brokerage operates.</h2></div>
            <p>Explore the key capabilities that can form part of a professional liquidity and trading environment. Availability depends on the selected setup and compatible systems.</p>
          </div>
          <div className="lti-feature-layout">
            <div className="lti-feature-list" role="tablist" aria-label="Infrastructure capabilities">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button type="button" role="tab" aria-selected={activeFeature === index} className={`lti-feature-tab ${activeFeature === index ? "is-active" : ""}`} key={item.title} onClick={() => setActiveFeature(index)}>
                    <span className="lti-feature-tab-icon"><Icon size={19} /></span><span>{item.title}</span><ArrowRight size={16} className="lti-feature-tab-arrow" />
                  </button>
                );
              })}
            </div>
            <div className="lti-feature-detail">
              <AnimatePresence mode="wait">
                <motion.div key={activeFeature} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.22 }}>
                  {(() => { const Icon = features[activeFeature].icon; return <span className="lti-feature-detail-icon"><Icon size={27} /></span>; })()}
                  <span className="lti-detail-index">CAPABILITY / {String(activeFeature + 1).padStart(2, "0")}</span>
                  <h3>{features[activeFeature].title}</h3>
                  <p>{features[activeFeature].text}</p>
                  <div className="lti-detail-points"><span><CheckCircle2 size={16} /> Compatible integrations</span><span><CheckCircle2 size={16} /> Configurable architecture</span><span><CheckCircle2 size={16} /> Brokerage-focused setup</span></div>
                </motion.div>
              </AnimatePresence>
              <div className="lti-detail-decoration"><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="lti-benefits lti-section">
        <div className="lti-container">
          <div className="lti-center-heading">
            <SectionEyebrow>WHY INFRASTRUCTURE MATTERS</SectionEyebrow>
            <h2>Designed for clarity, connectivity, and growth.</h2>
            <p>A well-structured environment helps bring essential brokerage technology into a more coordinated operating model.</p>
          </div>
          <div className="lti-benefit-grid">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article className="lti-benefit-card" key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.48, delay: index * 0.06 }} whileHover={{ y: -6 }}>
                  <div className="lti-benefit-top"><span className="lti-benefit-icon"><Icon size={21} /></span><span className="lti-benefit-number">0{index + 1}</span></div>
                  <h3>{item.title}</h3><p>{item.text}</p><span className="lti-benefit-accent" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lti-models lti-section">
        <div className="lti-container">
          <div className="lti-split-heading">
            <div><SectionEyebrow>BUILT AROUND YOUR BUSINESS</SectionEyebrow><h2>Infrastructure for different brokerage models.</h2></div>
            <p>From establishing a new trading environment to upgrading an existing stack, the configuration can reflect your business stage and operational needs.</p>
          </div>
          <div className="lti-model-list">
            {models.map((item, index) => (
              <motion.article className="lti-model-row" key={item.number} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} whileHover={{ x: 5 }}>
                <span className="lti-model-number">{item.number}</span>
                <div className="lti-model-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
                <div className="lti-model-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ArrowUpRight size={19} className="lti-model-arrow" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="lti-cta-section">
        <div className="lti-cta-orb lti-cta-orb-one" /><div className="lti-cta-orb lti-cta-orb-two" />
        <motion.div className="lti-container lti-cta-inner" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="lti-cta-icon"><Gauge size={25} /></div>
          <SectionEyebrow>LET’S CONNECT YOUR STACK</SectionEyebrow>
          <h2>Build a stronger trading infrastructure.</h2>
          <p>Whether you are launching a new brokerage or upgrading an existing environment, discuss a technology setup aligned with your liquidity, execution, risk management, and operational requirements.</p>
          <div className="lti-cta-actions">
            <a href="/contact/" className="lti-button lti-button-light">Connect to Discuss <ArrowUpRight size={17} /></a>
            <a href="mailto:sales@intellifxsolutions.com" className="lti-cta-email">sales@intellifxsolutions.com <ArrowRight size={15} /></a>
          </div>
          <div className="lti-cta-footnote"><RefreshCw size={14} /> Configured around your brokerage’s requirements</div>
        </motion.div>
      </section>

      <section className="lti-disclaimer">
        <div className="lti-container"><p><strong>Disclaimer:</strong> All intellectual properties, logos, and business names are copyrighted or registered® trademarks of their respective owners and not of IntelliFX Solutions.</p><div className="lti-disclaimer-contact"><a href="mailto:sales@intellifxsolutions.com">sales@intellifxsolutions.com</a><span>•</span><a href="https://wa.me/447520665843" target="_blank" rel="noreferrer">WhatsApp: +44 7520 665843</a></div></div>
      </section>
    </main>
  );
}
