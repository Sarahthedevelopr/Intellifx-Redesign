import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Gauge,
  Layers3,
  Network,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  Workflow,
  Zap,
  ChartNoAxesCombined,
  UserRoundCog,
  Settings2,
  Activity,
} from "lucide-react";
import "./PropTradingTechnology.css";

const features = [
  { icon: Users, title: "Trader Management", text: "Keep trader profiles, account information, and activity organized in one connected workspace." },
  { icon: ClipboardCheck, title: "Challenge Management", text: "Configure and manage evaluation programs, stages, objectives, and progression rules." },
  { icon: Layers3, title: "Account Provisioning", text: "Structure account creation and account lifecycle workflows around your operating model." },
  { icon: ShieldCheck, title: "Risk Management", text: "Monitor trading activity against your defined risk parameters and account conditions." },
  { icon: Gauge, title: "Rule Monitoring", text: "Track applicable trading rules, limits, and evaluation requirements with better visibility." },
  { icon: BarChart3, title: "Trader Dashboard", text: "Bring account status, performance information, and progress into a centralized view." },
  { icon: Network, title: "CRM Integration", text: "Connect leads, traders, and communication workflows with your CRM environment." },
  { icon: CircleDollarSign, title: "Payment Integration", text: "Connect compatible payment infrastructure to support your business workflows." },
  { icon: UserRoundCog, title: "Affiliate Management", text: "Organize partners, referrals, and commission-related operations." },
  { icon: ChartNoAxesCombined, title: "Reporting & Analytics", text: "Bring trading, sales, payment, and operational reporting together." },
  { icon: Workflow, title: "API Integrations", text: "Connect supporting third-party systems as your technology requirements evolve." },
];

const benefits = [
  { icon: Workflow, title: "Streamline Trader Operations", text: "Simplify registration, account creation, challenge participation, performance monitoring, and administration." },
  { icon: Zap, title: "Automate Repetitive Processes", text: "Reduce manual tasks around provisioning, notifications, rule monitoring, reporting, and day-to-day workflows." },
  { icon: ShieldCheck, title: "Improve Risk Visibility", text: "Gain clearer visibility into account activity, trading behaviour, exposure, and defined risk parameters." },
  { icon: Layers3, title: "Centralize Data", text: "Connect trader details, accounts, payments, performance metrics, and operational information." },
  { icon: ChartNoAxesCombined, title: "Scale Your Operations", text: "Support growing trader volumes, additional programs, new integrations, and changing requirements." },
  { icon: Users, title: "Improve Trader Experience", text: "Provide a more consistent digital experience through connected dashboards and streamlined processes." },
];

const components = [
  "Trader management",
  "Challenge management",
  "Trading account provisioning",
  "Risk management",
  "Rule monitoring",
  "Trader dashboards",
  "CRM integration",
  "Payment integration",
  "Affiliate management",
  "Reporting and analytics",
  "Administrative tools",
  "API integrations",
];

const challengeItems = [
  "Account types",
  "Evaluation stages",
  "Trading objectives",
  "Drawdown parameters",
  "Risk limits",
  "Trading conditions",
  "Progression rules",
  "Account status",
  "Performance tracking",
];

const businessModels = [
  { n: "01", icon: Zap, title: "New Prop Firms", text: "Establish the technology foundation required to launch a new proprietary trading business." },
  { n: "02", icon: Settings2, title: "Established Prop Firms", text: "Upgrade existing technology, automate operations, improve integrations, or expand infrastructure." },
  { n: "03", icon: SlidersHorizontal, title: "Multi-Program Prop Firms", text: "Manage multiple challenge structures, account types, and trader programs through configurable technology." },
  { n: "04", icon: ChartNoAxesCombined, title: "Growing Prop Firms", text: "Scale infrastructure for larger trader volumes, additional programs, new markets, and evolving needs." },
];

const dashboardTabs = ["Overview", "Challenges", "Risk monitor"];

function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("Overview");
  const rows = activeTab === "Challenges"
    ? [["Evaluation programme", "In progress", "blue"], ["Stage progression", "Configured", "green"], ["Performance tracking", "Connected", "green"]]
    : activeTab === "Risk monitor"
      ? [["Defined risk parameters", "Active", "green"], ["Rule monitoring", "Connected", "green"], ["Account conditions", "Monitored", "blue"]]
      : [["Trader management", "Connected", "green"], ["Challenge workflows", "Configured", "blue"], ["CRM & reporting", "Integrated", "green"]];
  return (
    <motion.div className="ptt-dashboard-wrap" initial={{ opacity: 0, x: 28, y: 12 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.75, delay: 0.15 }}>
      <motion.div className="ptt-float-tag ptt-tag-top" animate={{ y: [0, -7, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}><span className="ptt-yellow-dot" /> PROP FIRM TECHNOLOGY</motion.div>
      <div className="ptt-dashboard">
        <div className="ptt-dashboard-top"><span className="ptt-window-dots"><i /><i /><i /></span><span>PROP FIRM CONTROL CENTRE</span><span className="ptt-live"><i /> SYSTEMS CONNECTED</span></div>
        <div className="ptt-dashboard-body">
          <aside className="ptt-dashboard-rail"><span className="ptt-rail-brand"><Layers3 size={19} /></span><span className="ptt-rail-active"><BarChart3 size={18} /></span><span><Users size={18} /></span><span><ShieldCheck size={18} /></span><span><CircleDollarSign size={18} /></span></aside>
          <div className="ptt-dashboard-content">
            <div className="ptt-workspace-line"><div><small>YOUR WORKSPACE</small><h3>Prop firm overview</h3></div><span className="ptt-avatar">FX</span></div>
            <div className="ptt-tabs" role="tablist" aria-label="Dashboard preview tabs">{dashboardTabs.map(tab => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>{tab}</button>)}</div>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} className="ptt-tab-panel" initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.18 }}>
                <div className="ptt-mini-stats"><div><small>Trader workspace</small><strong>Centralized</strong><span><i /> Connected environment</span></div><div><small>Operations</small><strong>{activeTab === "Challenges" ? "Evaluation flow" : activeTab === "Risk monitor" ? "Risk visibility" : "Integrated"}</strong><span><i /> Configurable workflows</span></div></div>
                <div className="ptt-activity-card"><div className="ptt-activity-head"><strong>{activeTab === "Challenges" ? "Challenge activity" : activeTab === "Risk monitor" ? "Risk & rule activity" : "Connected workflows"}</strong><small>ILLUSTRATIVE</small></div>{rows.map(([label, status, color], i) => <div className="ptt-activity-row" key={label}><span className={`ptt-row-icon ptt-row-${i}`}><Check size={15} /></span><span>{label}</span><b className={`ptt-status-${color}`}>{status}</b></div>)}</div>
                <div className="ptt-chart-card"><div className="ptt-chart-heading"><span>Operational activity</span><small>WORKSPACE VIEW</small></div><div className="ptt-chart-bars">{[34, 48, 42, 61, 53, 70, 58, 78, 66, 84, 72, 92].map((height, i) => <motion.span key={i} initial={{ height: 4 }} animate={{ height: `${height}%` }} transition={{ duration: 0.45, delay: i * 0.035 }} />)}</div><div className="ptt-chart-foot"><span>Workflows</span><span>Accounts</span><span>Reporting</span></div></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <motion.div className="ptt-float-tag ptt-tag-bottom" animate={{ y: [0, 6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}><span className="ptt-purple-dot" /> CONNECTED WORKFLOWS</motion.div>
      <div className="ptt-orbit ptt-orbit-one" /><div className="ptt-orbit ptt-orbit-two" />
    </motion.div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function PropTradingTechnology() {
  return (
    <main className="ptt-page">
      <section className="ptt-hero">
        <div className="ptt-hero-grid" />
        <div className="ptt-hero-glow ptt-glow-one" /><div className="ptt-hero-glow ptt-glow-two" />
        <div className="ptt-container ptt-hero-layout">
          <motion.div className="ptt-hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="ptt-eyebrow"><span><Zap size={16} /></span> PROP FIRM INFRASTRUCTURE</div>
            <h1>Scalable <span>Prop Trading</span> Technology for Modern Firms</h1>
            <p className="ptt-hero-lead">Build and operate a professional proprietary trading business with reliable technology designed around the needs of modern prop firms.</p>
            <p className="ptt-hero-sub">Connect trader onboarding, accounts, challenges, risk parameters, payments, CRM workflows, reporting, and daily operations in one configurable technology environment.</p>
            <div className="ptt-hero-actions"><a className="ptt-btn ptt-btn-primary" href="/contact/">Discuss Your Prop Firm <ArrowUpRight size={18} /></a><a className="ptt-text-link" href="#ptt-features">Explore the technology <ArrowDownRight size={17} /></a></div>
            <div className="ptt-hero-proof"><span><Check size={15} /> Configurable workflows</span><span><Check size={15} /> Connected infrastructure</span></div>
          </motion.div>
          <DashboardPreview />
        </div>
        <div className="ptt-hero-bottom"><span>TRADER MANAGEMENT</span><i /><span>CHALLENGE WORKFLOWS</span><i /><span>RISK VISIBILITY</span><i /><span>REPORTING & INTEGRATIONS</span></div>
      </section>

      <section className="ptt-section ptt-intro-section" id="ptt-overview">
        <div className="ptt-container ptt-intro-grid">
          <Reveal><span className="ptt-kicker">THE TECHNOLOGY FOUNDATION</span><h2>What is <span>Prop Trading Technology?</span></h2></Reveal>
          <Reveal delay={0.1} className="ptt-intro-copy"><p>Prop trading technology refers to the software, infrastructure, integrations, and systems used to operate a proprietary trading firm.</p><p>A modern prop firm needs more than a trading environment. It needs connected technology for trader registration, account provisioning, challenge management, risk monitoring, payments, CRM, reporting, and administration.</p><p className="ptt-muted">The architecture can be configured around your business model, trading structure, operational requirements, and growth objectives.</p></Reveal>
        </div>
        <div className="ptt-container"><div className="ptt-component-strip">{components.map((item, i) => <motion.div key={item} className="ptt-component-pill" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.035 }}><Check size={14} />{item}</motion.div>)}</div></div>
      </section>

      <section className="ptt-section ptt-features-section" id="ptt-features">
        <div className="ptt-container">
          <Reveal className="ptt-section-heading"><span className="ptt-kicker">A CONNECTED TECHNOLOGY STACK</span><h2>Key features built around <span>your operations</span></h2><p>Bring the essential parts of your prop firm into a more connected and manageable technology environment.</p></Reveal>
          <div className="ptt-feature-grid">{features.map((feature, i) => { const Icon = feature.icon; return <Reveal key={feature.title} delay={(i % 3) * 0.06} className="ptt-feature-card"><div className="ptt-card-icon"><Icon size={22} /></div><span className="ptt-card-index">{String(i + 1).padStart(2, "0")}</span><h3>{feature.title}</h3><p>{feature.text}</p><span className="ptt-card-line" /></Reveal>; })}</div>
        </div>
      </section>

      <section className="ptt-section ptt-benefits-section">
        <div className="ptt-container ptt-benefit-layout">
          <Reveal className="ptt-benefit-intro"><span className="ptt-kicker">WHY CONNECT YOUR SYSTEMS</span><h2>Make daily operations <span>more efficient</span></h2><p>Integrated technology can help your team reduce manual work, improve visibility, and adapt as your prop firm evolves.</p><a href="/contact/" className="ptt-btn ptt-btn-light">Talk to our team <ArrowRight size={17} /></a><div className="ptt-benefit-decoration"><div className="ptt-deco-ring"><Layers3 size={40} /></div><span className="ptt-deco-dot" /></div></Reveal>
          <div className="ptt-benefit-list">{benefits.map((benefit, i) => { const Icon = benefit.icon; return <Reveal key={benefit.title} delay={i * 0.04} className="ptt-benefit-item"><span className="ptt-benefit-icon"><Icon size={20} /></span><div><h3>{benefit.title}</h3><p>{benefit.text}</p></div><ChevronRight size={18} className="ptt-benefit-arrow" /></Reveal>; })}</div>
        </div>
      </section>

      <section className="ptt-section ptt-challenge-section">
        <div className="ptt-container ptt-challenge-layout">
          <Reveal className="ptt-challenge-copy"><span className="ptt-kicker">EVALUATION WORKFLOWS</span><h2>Technology for <span>prop firm challenges</span></h2><p>Challenge and evaluation programs are central to many prop trading businesses. Configure the structure around the rules and operating model your firm uses.</p><p>Technology can support evaluation stages, account conditions, progression rules, and performance tracking through a connected workflow.</p><a href="/contact/" className="ptt-inline-link">Configure your technology <ArrowUpRight size={17} /></a></Reveal>
          <Reveal className="ptt-challenge-board" delay={0.12}><div className="ptt-board-top"><span><SlidersHorizontal size={18} /> Challenge configuration</span><span className="ptt-board-status"><i /> Configurable</span></div><div className="ptt-board-summary"><div><small>PROGRAM STRUCTURE</small><strong>Evaluation workflow</strong></div><div className="ptt-board-symbol"><Workflow size={22} /></div></div><div className="ptt-stage-flow"><div className="ptt-stage"><span>01</span><div><strong>Evaluation stage</strong><small>Objectives & trading conditions</small></div><Check size={16} /></div><div className="ptt-stage-connector" /><div className="ptt-stage"><span>02</span><div><strong>Progress monitoring</strong><small>Risk limits & account status</small></div><Activity size={16} /></div><div className="ptt-stage-connector" /><div className="ptt-stage"><span>03</span><div><strong>Progression rules</strong><small>Performance & stage transitions</small></div><Check size={16} /></div></div><div className="ptt-board-tags">{challengeItems.map(item => <span key={item}>{item}</span>)}</div></Reveal>
        </div>
      </section>

      <section className="ptt-section ptt-models-section">
        <div className="ptt-container"><Reveal className="ptt-section-heading"><span className="ptt-kicker">FLEXIBLE BY DESIGN</span><h2>Technology for different <span>prop firm models</span></h2><p>Whether you're starting from scratch or improving an established operation, the technology can be shaped around your requirements.</p></Reveal>
          <div className="ptt-model-grid">{businessModels.map((model, i) => { const Icon = model.icon; return <Reveal key={model.n} delay={i * 0.07} className="ptt-model-card"><div className="ptt-model-top"><span>{model.n}</span><Icon size={23} /></div><h3>{model.title}</h3><p>{model.text}</p><a href="/contact/" aria-label={`Discuss technology for ${model.title}`}>Discuss your setup <ArrowUpRight size={16} /></a></Reveal>; })}</div>
        </div>
      </section>

      <section className="ptt-final-cta"><div className="ptt-cta-grid" /><div className="ptt-container ptt-cta-content"><Reveal><span className="ptt-kicker ptt-kicker-light">BUILD YOUR TECHNOLOGY FOUNDATION</span><h2>Build your prop trading technology <span>around your business.</span></h2><p>From launching a new prop firm to upgrading an existing operation, create a connected, scalable technology environment around your needs and future growth.</p><div className="ptt-cta-actions"><a className="ptt-btn ptt-btn-white" href="/contact/">Build Your Prop Firm Infrastructure <ArrowUpRight size={18} /></a><a className="ptt-cta-email" href="mailto:sales@intellifxsolutions.com">sales@intellifxsolutions.com</a></div></Reveal><motion.div className="ptt-cta-art" animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><div className="ptt-cta-art-ring ring-a" /><div className="ptt-cta-art-ring ring-b" /><div className="ptt-cta-art-core"><Layers3 size={42} /></div><span className="ptt-cta-node node-a"><ShieldCheck size={18} /></span><span className="ptt-cta-node node-b"><BarChart3 size={18} /></span><span className="ptt-cta-node node-c"><Network size={18} /></span></motion.div></div></section>

      <section className="ptt-contact-note"><div className="ptt-container"><div><span className="ptt-contact-icon"><Users size={19} /></span><p><strong>Need help with your requirements?</strong><span>Talk to the IntelliFX Solutions team about your prop firm technology needs.</span></p></div><div className="ptt-contact-links"><a href="mailto:sales@intellifxsolutions.com">sales@intellifxsolutions.com</a><a href="https://wa.me/447520665843" target="_blank" rel="noreferrer">WhatsApp: +44 7520 665843 <ArrowUpRight size={14} /></a></div></div></section>
      <p className="ptt-disclaimer">All intellectual properties, logos, and business names are copyrighted or registered trademarks of their respective owners and not of IntelliFX Solutions. IntelliFX Solutions is a technology service provider, not a forex broker or liquidity provider, and does not hold client funds.</p>
    </main>
  );
}
