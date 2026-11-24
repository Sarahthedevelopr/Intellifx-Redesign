import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, CheckCircle2, Code2, Compass, Globe2,
  LayoutDashboard, Layers3, Link2, MonitorSmartphone, MousePointerClick,
  Palette, Search, ShieldCheck, Smartphone, Sparkles, TrendingUp, Users,
  Wallet, Workflow, Zap
} from "lucide-react";
import "./ForexBrokerWebsiteDevelopment.css";

const services = [
  { icon: Palette, title: "Custom Website Design", text: "Brand-aligned layouts, colors, typography, product presentations and conversion-focused landing pages." },
  { icon: MonitorSmartphone, title: "Responsive Development", text: "A consistent browsing experience across desktop, tablet and mobile screen sizes." },
  { icon: Users, title: "Client Registration", text: "Registration journeys connected to the brokerage's onboarding and CRM workflows." },
  { icon: Link2, title: "CRM Integration", text: "Connect enquiries, registrations and lead forms with a central Forex CRM." },
  { icon: ShieldCheck, title: "KYC Integration", text: "Connect compatible identity verification systems to support structured onboarding." },
  { icon: LayoutDashboard, title: "Client Portal Integration", text: "Give clients a digital entry point to relevant account services and client areas." },
  { icon: Wallet, title: "Payment Integration", text: "Connect compatible payment systems for applicable deposit and withdrawal workflows." },
  { icon: TrendingUp, title: "Affiliate & IB Integration", text: "Support partner acquisition with dedicated landing pages and referral integrations." },
];

const benefits = [
  { icon: Globe2, title: "Build a Strong Brand Presence", text: "Create a professional digital identity and a central destination for prospective and existing clients." },
  { icon: TrendingUp, title: "Generate More Qualified Leads", text: "Use purposeful landing pages, calls to action, forms and content to encourage relevant enquiries." },
  { icon: Users, title: "Improve Client Onboarding", text: "Make registration journeys clearer and help guide prospects through account opening." },
  { icon: Workflow, title: "Connect Brokerage Technology", text: "Bring CRM, KYC, payments, client portals and affiliate systems into a connected experience." },
  { icon: Search, title: "Support SEO Growth", text: "Build a foundation for search visibility, content marketing and long-term organic growth." },
  { icon: MousePointerClick, title: "Create a Better User Experience", text: "Clear navigation, responsive pages, fast-loading content and logical information architecture." },
];

const seoItems = [
  "Search-friendly website architecture", "Logical URL structures", "Metadata and heading hierarchy",
  "Internal linking", "Structured content", "Mobile responsiveness", "Page speed optimization",
  "XML sitemap", "Search engine indexing controls"
];

const audiences = [
  { n: "01", title: "New Forex Brokers", text: "Launch a professional digital presence alongside your brokerage technology infrastructure.", icon: Sparkles },
  { n: "02", title: "Established Brokers", text: "Redesign an outdated website, improve usability and introduce new functionality or integrations.", icon: Layers3 },
  { n: "03", title: "Growing Brokerages", text: "Expand architecture with new landing pages, markets, products, content and acquisition channels.", icon: TrendingUp },
  { n: "04", title: "Multi-Brand Businesses", text: "Create distinct digital experiences for separate brokerage brands or target markets.", icon: Globe2 },
  { n: "05", title: "Prop Trading Businesses", text: "Build dedicated websites and landing pages to support proprietary trading operations and trader acquisition.", icon: Compass },
];

const stack = [
  { icon: Globe2, label: "Broker Website", sub: "Brand & content" },
  { icon: Users, label: "Forex CRM", sub: "Leads & clients" },
  { icon: ShieldCheck, label: "KYC Systems", sub: "Verification flow" },
  { icon: Wallet, label: "Payments", sub: "Deposit & withdrawal" },
];

function Eyebrow({ children }) {
  return <span className="fbwd-eyebrow"><i />{children}</span>;
}

function WebsitePreview() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Services", "Client Area"];
  return (
    <motion.div className="fbwd-preview-wrap" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .12 }}>
      <div className="fbwd-preview-glow" />
      <motion.div className="fbwd-float-tag fbwd-tag-top" animate={{ y: [0, -7, 0] }} transition={{ duration: 4.2, repeat: Infinity }}>
        <span className="fbwd-tag-icon"><CheckCircle2 size={17} /></span><span><b>Responsive by design</b><small>Desktop · Tablet · Mobile</small></span>
      </motion.div>
      <motion.div className="fbwd-browser" whileHover={{ y: -4 }} transition={{ duration: .25 }}>
        <div className="fbwd-browser-bar">
          <div className="fbwd-browser-dots"><i /><i /><i /></div>
          <div className="fbwd-address"><ShieldCheck size={11} /> brokerwebsite.com</div>
          <span className="fbwd-browser-status"><i /> LIVE PREVIEW</span>
        </div>
        <div className="fbwd-browser-body">
          <div className="fbwd-site-nav">
            <div className="fbwd-site-brand"><span><Layers3 size={16} /></span><b>YOUR<span>BROKER</span></b></div>
            <div className="fbwd-site-links"><span>Markets</span><span>Platforms</span><span>About</span></div>
            <span className="fbwd-site-login">Client Login <ArrowUpRight size={11} /></span>
          </div>
          <div className="fbwd-site-hero">
            <div className="fbwd-site-copy">
              <span className="fbwd-site-kicker"><i /> YOUR TRADING JOURNEY STARTS HERE</span>
              <h3>{activeTab === "Overview" ? <>Trade with <em>clarity.</em><br />Move with confidence.</> : activeTab === "Services" ? <>Explore markets.<br /><em>Find your edge.</em></> : <>Your account.<br /><em>One clear view.</em></>}</h3>
              <p>A professional digital experience built around your brokerage and your clients.</p>
              <div className="fbwd-site-buttons"><span>Explore services <ArrowRight size={11} /></span><span className="fbwd-site-secondary">Learn more</span></div>
              <div className="fbwd-site-trust"><span><Check size={11} /> Clear information</span><span><Check size={11} /> Responsive design</span></div>
            </div>
            <div className="fbwd-site-art">
              <div className="fbwd-art-orbit fbwd-art-orbit-one" /><div className="fbwd-art-orbit fbwd-art-orbit-two" />
              <div className="fbwd-art-card">
                <div className="fbwd-art-card-head"><span>MARKET OVERVIEW</span><span className="fbwd-art-live">● SAMPLE</span></div>
                <div className="fbwd-art-market"><span><b>EUR/USD</b><small>Euro / US Dollar</small></span><strong>1.0842</strong><em>+0.42%</em></div>
                <svg viewBox="0 0 240 92" role="img" aria-label="Illustrative market line chart"><defs><linearGradient id="fbwdChartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b6df6" stopOpacity=".24"/><stop offset="100%" stopColor="#3b6df6" stopOpacity="0"/></linearGradient></defs><path d="M0 72 C18 65 20 76 35 59 S56 63 72 47 S93 61 109 43 S130 51 147 30 S169 45 183 25 S205 36 220 14 L240 10 L240 92 L0 92Z" fill="url(#fbwdChartFill)"/><path d="M0 72 C18 65 20 76 35 59 S56 63 72 47 S93 61 109 43 S130 51 147 30 S169 45 183 25 S205 36 220 14 L240 10" fill="none" stroke="#3267ee" strokeWidth="2.5" strokeLinecap="round"/></svg>
                <div className="fbwd-art-stats"><span><small>Website visits</small><b>+18.6%</b></span><span><small>Lead enquiries</small><b>+12.4%</b></span></div>
              </div>
              <div className="fbwd-art-orb-dot" />
            </div>
          </div>
          <div className="fbwd-site-bottom"><span>BUILT FOR YOUR BUSINESS</span><div><i /><i /><i /><i /></div><span>DESIGN · TECHNOLOGY · INTEGRATION</span></div>
        </div>
      </motion.div>
      <motion.div className="fbwd-float-tag fbwd-tag-bottom" animate={{ y: [0, 6, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
        <span className="fbwd-tag-icon fbwd-tag-purple"><Zap size={17} /></span><span><b>Connected ecosystem</b><small>Website + CRM + client flows</small></span>
      </motion.div>
    </motion.div>
  );
}

export default function ForexBrokerWebsiteDevelopment() {
  return (
    <main className="fbwd-page">
      <section className="fbwd-hero">
        <div className="fbwd-hero-grid" /><div className="fbwd-orb fbwd-orb-one" /><div className="fbwd-orb fbwd-orb-two" />
        <div className="fbwd-hero-inner">
          <motion.div className="fbwd-hero-copy" initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65 }}>
            <Eyebrow>FOREX BROKER WEBSITE DEVELOPMENT</Eyebrow>
            <h1>Professional websites for <em>modern brokerages.</em></h1>
            <h2>Build a digital experience that connects your brand, clients and brokerage technology.</h2>
            <p>A professional Forex brokerage website combines custom design, responsive technology, client-focused functionality and integrations that support brokerage operations.</p>
            <p className="fbwd-hero-small">From corporate websites and landing pages to registration flows, CRM integration and payment connectivity, create a digital foundation around your business requirements.</p>
            <div className="fbwd-actions">
              <a className="fbwd-btn fbwd-btn-primary" href="/contact">Start Your Website <ArrowUpRight size={17} /></a>
              <a className="fbwd-btn fbwd-btn-secondary" href="#fbwd-solutions">Explore Solutions <ArrowRight size={16} /></a>
            </div>
            <div className="fbwd-proof"><span><CheckCircle2 size={15} /> Responsive experience</span><span><CheckCircle2 size={15} /> SEO-ready foundations</span><span><CheckCircle2 size={15} /> Brokerage integrations</span></div>
          </motion.div>
          <WebsitePreview />
        </div>
        <a href="#fbwd-solutions" className="fbwd-scroll-cue"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="fbwd-section fbwd-solutions" id="fbwd-solutions">
        <div className="fbwd-container">
          <motion.div className="fbwd-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }}>
            <Eyebrow>COMPLETE WEBSITE SOLUTIONS</Eyebrow>
            <h2>More than a website.<br /><em>A connected client experience.</em></h2>
            <p>A modern Forex broker website should do more than present information. It should connect prospective and existing clients with the brokerage's wider technology ecosystem.</p>
          </motion.div>
          <div className="fbwd-service-grid">
            {services.map((item, index) => { const Icon = item.icon; return (
              <motion.article className="fbwd-service-card" key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ delay: (index % 4) * .07, duration: .45 }} whileHover={{ y: -6 }}>
                <div className="fbwd-service-top"><span className="fbwd-service-icon"><Icon size={21} /></span><small>0{index + 1}</small></div>
                <h3>{item.title}</h3><p>{item.text}</p><span className="fbwd-card-arrow"><ArrowUpRight size={17} /></span>
              </motion.article>
            ); })}
          </div>
        </div>
      </section>

      <section className="fbwd-section fbwd-benefits">
        <div className="fbwd-container">
          <div className="fbwd-benefit-layout">
            <motion.div className="fbwd-benefit-intro" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Eyebrow>WHY PROFESSIONAL DEVELOPMENT</Eyebrow>
              <h2>Designed to support your brokerage's <em>next stage.</em></h2>
              <p>Your website is often the first point of contact for a potential client. Clear information, useful journeys and connected systems help create a more consistent digital experience.</p>
              <a href="/contact" className="fbwd-text-link">Discuss your requirements <ArrowRight size={16} /></a>
              <div className="fbwd-benefit-art"><div className="fbwd-benefit-ring" /><span><Globe2 size={30} /></span><i /><i /><i /></div>
            </motion.div>
            <div className="fbwd-benefit-list">
              {benefits.map((item, index) => { const Icon = item.icon; return <motion.article className="fbwd-benefit-row" key={item.title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06 }}><span className="fbwd-benefit-num">0{index + 1}</span><span className="fbwd-benefit-icon"><Icon size={20} /></span><div><h3>{item.title}</h3><p>{item.text}</p></div><CheckCircle2 className="fbwd-benefit-check" size={19} /></motion.article>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="fbwd-section fbwd-seo">
        <div className="fbwd-container fbwd-seo-layout">
          <motion.div className="fbwd-seo-copy" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Eyebrow>SEO-READY FOUNDATIONS</Eyebrow>
            <h2>Build search visibility into your website <em>from day one.</em></h2>
            <p>A strong website needs to be built with search visibility in mind from the beginning. Technical structure and organized content create a foundation for future SEO campaigns and content development.</p>
            <div className="fbwd-seo-note"><Search size={19} /><span><b>Built for discoverability</b><small>Structured foundations for ongoing content and SEO work.</small></span></div>
          </motion.div>
          <motion.div className="fbwd-seo-panel" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="fbwd-seo-panel-head"><span><Search size={18} /> SEO FOUNDATION CHECKLIST</span><small>TECHNICAL BASE</small></div>
            <div className="fbwd-seo-items">{seoItems.map((item, i) => <motion.div key={item} initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .045 }}><span><Check size={14} /></span>{item}</motion.div>)}</div>
            <div className="fbwd-seo-panel-foot"><span><i /> FOUNDATIONAL ELEMENTS</span><b>{seoItems.length} areas</b></div>
          </motion.div>
        </div>
      </section>

      <section className="fbwd-section fbwd-audience">
        <div className="fbwd-container">
          <motion.div className="fbwd-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Eyebrow>BUILT AROUND YOUR BUSINESS STAGE</Eyebrow>
            <h2>Website development for <em>different business needs.</em></h2>
            <p>Whether you're launching, refreshing or expanding, the website can be structured around your brand, audience and business requirements.</p>
          </motion.div>
          <div className="fbwd-audience-grid">{audiences.map((item, i) => { const Icon = item.icon; return <motion.article className="fbwd-audience-card" key={item.title} whileHover={{ y: -5 }} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .06 }}><div className="fbwd-audience-top"><span><Icon size={21} /></span><small>{item.n}</small></div><h3>{item.title}</h3><p>{item.text}</p><div className="fbwd-audience-line"><i /></div></motion.article>; })}</div>
        </div>
      </section>

      <section className="fbwd-section fbwd-ecosystem">
        <div className="fbwd-container">
          <div className="fbwd-ecosystem-heading"><Eyebrow>CONNECTED BROKERAGE ECOSYSTEM</Eyebrow><h2>Bring the digital journey <em>together.</em></h2><p>The website can act as a primary digital entry point, connecting visitors to the systems and workflows that support your brokerage.</p></div>
          <div className="fbwd-ecosystem-map">
            <svg className="fbwd-ecosystem-lines" viewBox="0 0 1000 330" preserveAspectRatio="none" aria-hidden="true"><path d="M500 160 C500 105 190 135 125 62" /><path d="M500 160 C500 105 810 135 875 62" /><path d="M500 160 C500 215 190 195 125 268" /><path d="M500 160 C500 215 810 195 875 268" /></svg>
            <motion.div className="fbwd-ecosystem-center" animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}><span><Globe2 size={28} /></span><b>Broker Website</b><small>Digital entry point</small></motion.div>
            {stack.map((item, i) => { const Icon = item.icon; return <motion.div className={`fbwd-stack-node fbwd-stack-${i + 1}`} key={item.label} whileHover={{ y: -4, scale: 1.025 }}><span><Icon size={20} /></span><div><b>{item.label}</b><small>{item.sub}</small></div><CheckCircle2 size={16} className="fbwd-node-check" /></motion.div>; })}
          </div>
          <p className="fbwd-integration-note"><ShieldCheck size={16} /> Integrations depend on compatible third-party systems and the brokerage's operational requirements.</p>
        </div>
      </section>

      <section className="fbwd-final-cta">
        <div className="fbwd-cta-grid" /><div className="fbwd-cta-orb" />
        <div className="fbwd-container fbwd-cta-inner">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Eyebrow>LET'S BUILD YOUR DIGITAL FOUNDATION</Eyebrow>
            <h2>Build a professional Forex brokerage <em>website.</em></h2>
            <p>IntelliFX Solutions focuses on professional design, responsive technology, SEO-ready architecture, brokerage integrations and scalable functionality—structured around your brand and business requirements.</p>
            <div className="fbwd-cta-actions"><a href="/contact" className="fbwd-btn fbwd-btn-yellow">Start Your Website <ArrowUpRight size={17} /></a><a className="fbwd-cta-email" href="mailto:sales@intellifxsolutions.com">sales@intellifxsolutions.com <ArrowRight size={15} /></a></div>
            <div className="fbwd-cta-points"><span><Check size={14} /> Custom design</span><span><Check size={14} /> Responsive development</span><span><Check size={14} /> Connected integrations</span></div>
          </motion.div>
          <motion.div className="fbwd-cta-mark" animate={{ rotate: [0, 4, 0, -4, 0] }} transition={{ duration: 12, repeat: Infinity }}><div className="fbwd-cta-mark-ring"><span><Code2 size={45} /></span></div><i /><i /><i /></motion.div>
        </div>
        <div className="fbwd-disclaimer">All intellectual property, logos and business names are trademarks or registered trademarks of their respective owners and not of IntelliFX Solutions.</div>
      </section>
    </main>
  );
}
