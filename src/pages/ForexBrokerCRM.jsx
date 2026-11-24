import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  ContactRound,
  FileCheck2,
  GitBranch,
  Handshake,
  Headset,
  Layers3,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import "./ForexBrokerCRM.css";

const crmTasks = [
  "Lead management",
  "Client onboarding",
  "KYC workflows",
  "Trading accounts",
  "Deposits and withdrawals",
  "Client communication",
  "Affiliate and IB management",
  "Support tickets",
  "User permissions",
  "Back-office operations",
];

const features = [
  {
    title: "Lead Management",
    description: "Capture and manage prospective clients from a centralized workspace.",
    icon: Users,
  },
  {
    title: "Client Management",
    description: "Keep client profiles, contact details and relevant information organized.",
    icon: ContactRound,
  },
  {
    title: "KYC Management",
    description: "Structure client verification workflows as part of the onboarding process.",
    icon: ShieldCheck,
  },
  {
    title: "Account Management",
    description: "Manage trading account administration through a connected workflow.",
    icon: Layers3,
  },
  {
    title: "Deposit Management",
    description: "Monitor deposit workflows and related client activity in one place.",
    icon: CircleDollarSign,
  },
  {
    title: "Withdrawal Management",
    description: "Organize withdrawal requests and their operational processing.",
    icon: GitBranch,
  },
  {
    title: "IB Management",
    description: "Manage introducing brokers, referral relationships and partner activity.",
    icon: Handshake,
  },
  {
    title: "Communication",
    description: "Bring client communications and engagement workflows together.",
    icon: Mail,
  },
  {
    title: "User Management",
    description: "Organize user access, roles and permissions for internal teams.",
    icon: ShieldCheck,
  },
  {
    title: "Integrations",
    description: "Connect the CRM with relevant systems across your brokerage technology stack.",
    icon: Network,
  },
];

const benefits = [
  {
    title: "Centralized Client Management",
    description:
      "Bring client information, account data, sales activity and operational workflows into one centralized environment.",
    icon: ContactRound,
  },
  {
    title: "Streamlined Operations",
    description:
      "Automated workflows can reduce repetitive administrative tasks and help teams manage client processes more efficiently.",
    icon: Workflow,
  },
  {
    title: "Faster Client Onboarding",
    description:
      "Structured registration and verification workflows can simplify the onboarding journey and improve internal visibility.",
    icon: ClipboardCheck,
  },
  {
    title: "Better Sales Visibility",
    description:
      "Monitor leads, follow-ups, conversions and sales performance from a centralized dashboard.",
    icon: BarChart3,
  },
  {
    title: "Efficient IB & Affiliate Management",
    description:
      "Dedicated workflows can help manage referral relationships, commissions and partner activity.",
    icon: Handshake,
  },
  {
    title: "Improved Operational Visibility",
    description:
      "Dashboards and reports help teams view client activity, sales performance and account operations.",
    icon: FileCheck2,
  },
];

const integrations = [
  {
    number: "01",
    title: "Trading Infrastructure",
    description:
      "Connect applicable trading systems to synchronize relevant client and account information.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Liquidity Infrastructure",
    description:
      "Integrate relevant liquidity and brokerage technology where supported by the selected infrastructure.",
    icon: Network,
  },
  {
    number: "03",
    title: "Payment Systems",
    description:
      "Connect compatible payment providers to support deposit and withdrawal workflows.",
    icon: CircleDollarSign,
  },
  {
    number: "04",
    title: "KYC & Verification",
    description:
      "Integrate identity verification and compliance-related systems to support onboarding processes.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Website",
    description:
      "Connect the brokerage website with CRM registration, lead capture and client onboarding workflows.",
    icon: GitBranch,
  },
  {
    number: "06",
    title: "Email & Communication",
    description:
      "Integrate communication tools to support automated notifications and client engagement.",
    icon: Mail,
  },
  {
    number: "07",
    title: "Affiliate Systems",
    description:
      "Connect affiliate and referral technology to support partner management and commission workflows.",
    icon: Handshake,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      className={`fbcrm-section-heading fbcrm-heading-${align}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="fbcrm-eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function CRMPreview() {
  const [selectedTab, setSelectedTab] = useState("Overview");
  const tabs = ["Overview", "Leads", "Accounts"];

  return (
    <motion.div
      className="fbcrm-preview-wrap"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="fbcrm-preview-glow" />
      <motion.div
        className="fbcrm-floating-tag fbcrm-tag-top"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="fbcrm-tag-dot" /> CENTRALIZED CRM
      </motion.div>

      <div className="fbcrm-dashboard">
        <div className="fbcrm-dashboard-bar">
          <div className="fbcrm-window-dots"><i /><i /><i /></div>
          <span>FOREX BROKER CRM</span>
          <div className="fbcrm-dashboard-user">AD</div>
        </div>
        <div className="fbcrm-dashboard-layout">
          <aside className="fbcrm-sidebar">
            <div className="fbcrm-sidebar-logo"><Layers3 size={17} /></div>
            <span className="active"><BarChart3 size={16} /></span>
            <span><Users size={16} /></span>
            <span><ContactRound size={16} /></span>
            <span><CircleDollarSign size={16} /></span>
            <span><Settings2Icon /></span>
          </aside>
          <div className="fbcrm-dashboard-content">
            <div className="fbcrm-dash-heading">
              <div><small>WORKSPACE</small><h3>Brokerage overview</h3></div>
              <span className="fbcrm-status"><i /> Systems connected</span>
            </div>
            <div className="fbcrm-dashboard-tabs" role="tablist" aria-label="CRM preview tabs">
              {tabs.map((tab) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedTab === tab}
                  className={selectedTab === tab ? "active" : ""}
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="fbcrm-metrics">
              <div className="fbcrm-metric-card">
                <span>{selectedTab === "Leads" ? "Lead pipeline" : selectedTab === "Accounts" ? "Trading accounts" : "Client records"}</span>
                <strong>{selectedTab === "Leads" ? "Lead workflow" : selectedTab === "Accounts" ? "Account overview" : "Client overview"}</strong>
                <small><i /> Centralized view</small>
              </div>
              <div className="fbcrm-metric-card">
                <span>Operations</span>
                <strong>Connected workflows</strong>
                <small><i /> CRM workspace</small>
              </div>
            </div>
            <div className="fbcrm-dash-lower">
              <div className="fbcrm-activity-card">
                <div className="fbcrm-activity-heading"><strong>Workflow activity</strong><span>ILLUSTRATIVE</span></div>
                <div className="fbcrm-activity-row"><b className="blue"><Users size={14} /></b><span>Lead & client management</span><i /></div>
                <div className="fbcrm-activity-row"><b className="purple"><ShieldCheck size={14} /></b><span>Verification workflow</span><i /></div>
                <div className="fbcrm-activity-row"><b className="yellow"><CircleDollarSign size={14} /></b><span>Account & payment activity</span><i /></div>
              </div>
              <div className="fbcrm-workflow-card">
                <div className="fbcrm-workflow-orb"><Workflow size={24} /></div>
                <strong>One connected workflow</strong>
                <small>Clients · Accounts · Operations</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="fbcrm-floating-tag fbcrm-tag-bottom"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="fbcrm-tag-check"><Check size={14} /></span>
        Client lifecycle visibility
      </motion.div>
    </motion.div>
  );
}

function Settings2Icon() {
  return <Workflow size={16} />;
}

export default function ForexBrokerCRM() {
  return (
    <div className="fbcrm-page">
      <section className="fbcrm-hero">
        <div className="fbcrm-hero-grid" />
        <div className="fbcrm-hero-inner">
          <motion.div
            className="fbcrm-hero-copy"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div className="fbcrm-hero-badge" variants={reveal}>
              <span><Sparkles size={14} /></span>
              BROKERAGE OPERATIONS TECHNOLOGY
            </motion.div>
            <motion.h1 variants={reveal}>
              Powerful <em>Forex Broker CRM</em> for Smarter Client Management
            </motion.h1>
            <motion.p variants={reveal}>
              Manage leads, clients, accounts, communication, onboarding and brokerage operations from a centralized platform.
            </motion.p>
            <motion.p className="fbcrm-hero-secondary" variants={reveal}>
              Connect essential brokerage processes, streamline repetitive workflows and create a more efficient client experience with a flexible CRM environment.
            </motion.p>
            <motion.div className="fbcrm-hero-actions" variants={reveal}>
              <a className="fbcrm-btn fbcrm-btn-primary" href="/contact">
                Request a Consultation <ArrowUpRight size={18} />
              </a>
              <a className="fbcrm-btn fbcrm-btn-secondary" href="#fbcrm-features">
                Explore CRM Features <ArrowRight size={17} />
              </a>
            </motion.div>
            <motion.div className="fbcrm-hero-points" variants={reveal}>
              <span><Check size={15} /> Centralized client data</span>
              <span><Check size={15} /> Connected workflows</span>
              <span><Check size={15} /> Flexible integrations</span>
            </motion.div>
          </motion.div>
          <CRMPreview />
        </div>
        <a className="fbcrm-scroll-cue" href="#fbcrm-intro"><span /> Explore the CRM</a>
      </section>

      <section className="fbcrm-section fbcrm-intro-section" id="fbcrm-intro">
        <div className="fbcrm-container fbcrm-intro-grid">
          <motion.div
            className="fbcrm-intro-visual"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="fbcrm-intro-card">
              <span className="fbcrm-intro-card-kicker">THE CRM WORKSPACE</span>
              <div className="fbcrm-intro-symbol"><Workflow size={27} /></div>
              <h3>One connected view of your brokerage.</h3>
              <p>Bring key client and operational processes together in one configurable environment.</p>
              <div className="fbcrm-intro-list">
                {["Lead acquisition", "Client onboarding", "Trading accounts", "Financial workflows"].map((item, index) => (
                  <div key={item}><span>0{index + 1}</span>{item}<Check size={15} /></div>
                ))}
              </div>
            </div>
            <span className="fbcrm-intro-decoration fbcrm-intro-decoration-one" />
            <span className="fbcrm-intro-decoration fbcrm-intro-decoration-two" />
          </motion.div>
          <div className="fbcrm-intro-copy">
            <SectionHeading
              align="left"
              eyebrow="UNDERSTAND THE PLATFORM"
              title="What Is a Forex CRM?"
              description="A Forex broker CRM is a specialized customer relationship management system designed around the operational requirements of Forex and online trading businesses."
            />
            <p className="fbcrm-body-copy">
              Unlike a conventional CRM, a Forex broker CRM can connect client management with brokerage-specific workflows such as account registration, trading account management, deposits, withdrawals, KYC processes, affiliate management and internal operations.
            </p>
            <div className="fbcrm-note">
              <span><Check size={17} /></span>
              <p>The CRM can be configured and integrated according to your brokerage’s business model, operational processes and technology infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fbcrm-section fbcrm-tasks-section">
        <div className="fbcrm-container">
          <SectionHeading
            eyebrow="ONE CENTRALIZED ENVIRONMENT"
            title="Manage the Essential Brokerage Workflows"
            description="A comprehensive Forex broker CRM can help teams organize client-facing and internal processes in a connected workspace."
          />
          <div className="fbcrm-task-grid">
            {crmTasks.map((task, index) => (
              <motion.div
                className="fbcrm-task-item"
                key={task}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (index % 5) * 0.045, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <span><Check size={16} /></span>
                <strong>{task}</strong>
                <ChevronRight size={16} className="fbcrm-task-arrow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="fbcrm-section fbcrm-features-section" id="fbcrm-features">
        <div className="fbcrm-container">
          <SectionHeading
            eyebrow="CORE CRM CAPABILITIES"
            title="Key Features of a Forex CRM"
            description="Explore the main features that help organize client relationships, account administration and brokerage workflows."
          />
          <div className="fbcrm-feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  className="fbcrm-feature-card"
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.13 }}
                  transition={{ delay: (index % 3) * 0.06, duration: 0.45 }}
                  whileHover={{ y: -7, transition: { duration: 0.2 } }}
                >
                  <div className="fbcrm-feature-icon"><Icon size={22} /></div>
                  <span className="fbcrm-feature-index">0{index + 1}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="fbcrm-feature-line" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="fbcrm-section fbcrm-benefits-section">
        <div className="fbcrm-container">
          <SectionHeading
            eyebrow="OPERATIONAL ADVANTAGES"
            title="Benefits of a Forex Broker CRM"
            description="Create better visibility across client management, sales and day-to-day brokerage operations."
          />
          <div className="fbcrm-benefit-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.article
                  className="fbcrm-benefit-card"
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: (index % 3) * 0.06, duration: 0.45 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="fbcrm-benefit-icon"><Icon size={21} /></div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="fbcrm-section fbcrm-integrations-section" id="fbcrm-integrations">
        <div className="fbcrm-container">
          <SectionHeading
            eyebrow="CONNECT YOUR TECHNOLOGY STACK"
            title="Forex Broker CRM Integrations"
            description="A CRM becomes more valuable when it connects with the other systems used by a brokerage. Integrations depend on the selected systems and supported infrastructure."
          />
          <div className="fbcrm-integrations-layout">
            <div className="fbcrm-integration-list">
              {integrations.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    className="fbcrm-integration-item"
                    key={item.number}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.16 }}
                    transition={{ delay: (index % 4) * 0.05, duration: 0.4 }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="fbcrm-integration-number">{item.number}</span>
                    <span className="fbcrm-integration-icon"><Icon size={19} /></span>
                    <span className="fbcrm-integration-copy">
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>
                    <ArrowUpRight size={17} className="fbcrm-integration-arrow" />
                  </motion.article>
                );
              })}
            </div>
            <motion.div
              className="fbcrm-ecosystem-card"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <div className="fbcrm-ecosystem-orbit fbcrm-ecosystem-orbit-one" />
              <div className="fbcrm-ecosystem-orbit fbcrm-ecosystem-orbit-two" />
              <div className="fbcrm-ecosystem-center"><Workflow size={29} /><strong>Forex CRM</strong><small>Central workflow</small></div>
              {[
                { label: "Trading", className: "node-trading", icon: Layers3 },
                { label: "Payments", className: "node-payments", icon: CircleDollarSign },
                { label: "KYC", className: "node-kyc", icon: ShieldCheck },
                { label: "Website", className: "node-website", icon: GitBranch },
                { label: "Email", className: "node-email", icon: Mail },
                { label: "Affiliates", className: "node-affiliates", icon: Handshake },
              ].map((node) => {
                const Icon = node.icon;
                return <motion.div key={node.label} className={`fbcrm-ecosystem-node ${node.className}`} whileHover={{ scale: 1.07, y: -3 }}><Icon size={17} /><span>{node.label}</span></motion.div>;
              })}
              <p className="fbcrm-ecosystem-caption">Illustrative technology ecosystem</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="fbcrm-cta-section">
        <div className="fbcrm-cta-orb fbcrm-cta-orb-one" />
        <div className="fbcrm-cta-orb fbcrm-cta-orb-two" />
        <motion.div
          className="fbcrm-container fbcrm-cta-content"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.6 }}
        >
          <span className="fbcrm-cta-eyebrow"><Sparkles size={15} /> CONNECT YOUR BROKERAGE OPERATIONS</span>
          <h2>Build a More Efficient Brokerage with a <em>Forex CRM</em></h2>
          <p>
            Bring client management, sales, onboarding, account administration, payments, IB management and operational workflows into one connected environment. IntelliFX Solutions provides CRM technology designed to help Forex brokers centralize client information, automate processes and build a scalable technology infrastructure.
          </p>
          <div className="fbcrm-cta-actions">
            <a className="fbcrm-btn fbcrm-btn-yellow" href="/contact">
              Request a Consultation <ArrowUpRight size={18} />
            </a>
            <a className="fbcrm-email-link" href="mailto:sales@intellifxsolutions.com">
              <Mail size={16} /> sales@intellifxsolutions.com
            </a>
          </div>
          <div className="fbcrm-cta-points">
            <span><Check size={15} /> Centralized client information</span>
            <span><Check size={15} /> Connected operational workflows</span>
            <span><Check size={15} /> Scalable technology infrastructure</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
