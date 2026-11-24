import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Search, Clock3, BookOpen, TrendingUp,
  Brain, Smartphone, ShieldCheck, BriefcaseBusiness, Layers3, Cpu,
  ChartNoAxesCombined, Bot, ChevronDown, Sparkles, X
} from "lucide-react";
import "./Blog.css";

const articles = [
  {
    title: "Forex Trading Psychology 101: Mastering Your Mind for Market Success",
    category: "Trading Education",
    date: "Trading psychology",
    read: "7 min read",
    excerpt: "Explore the role of mindset in trading and why emotional discipline matters when navigating the foreign exchange market.",
    icon: Brain,
    featured: true,
    tags: ["psychology", "mindset", "discipline"],
  },
  {
    title: "Forex Trading Apps: A Guide to Mobile Trading",
    category: "Trading Technology",
    date: "Mobile trading",
    read: "6 min read",
    excerpt: "Learn how mobile trading apps help traders stay connected to markets and manage their trading activity while on the move.",
    icon: Smartphone,
    tags: ["mobile", "apps", "technology"],
  },
  {
    title: "Understanding Forex Brokerage Business: A Comprehensive Guide",
    category: "Brokerage Business",
    date: "Brokerage basics",
    read: "9 min read",
    excerpt: "Understand the role of Forex brokers, common brokerage business models, and key considerations when entering the industry.",
    icon: BriefcaseBusiness,
    tags: ["brokerage", "business", "broker"],
  },
  {
    title: "The Importance of Risk Management in Forex Trading",
    category: "Risk Management",
    date: "Risk management",
    read: "8 min read",
    excerpt: "Discover why risk management matters and review practical concepts traders use to manage exposure and protect capital.",
    icon: ShieldCheck,
    tags: ["risk", "capital", "trading"],
  },
  {
    title: "Forex Brokerage Account Types: Which One is Right for You?",
    category: "Brokerage Business",
    date: "Account types",
    read: "7 min read",
    excerpt: "Compare common Forex brokerage account types and the features that can help different traders choose an appropriate setup.",
    icon: Layers3,
    tags: ["accounts", "brokerage", "traders"],
  },
  {
    title: "Essential Services Required by Forex Brokers: A Comprehensive Guide",
    category: "Brokerage Technology",
    date: "Broker technology",
    read: "8 min read",
    excerpt: "Explore the essential services and technology components that support an efficient brokerage operation and client experience.",
    icon: Cpu,
    tags: ["services", "CRM", "liquidity", "technology"],
  },
  {
    title: "Choosing the Right Forex Broker: A Comprehensive Guide for Traders",
    category: "Trading Education",
    date: "Broker selection",
    read: "6 min read",
    excerpt: "Review useful factors to consider when comparing Forex brokers, from trading conditions to the services available.",
    icon: ChartNoAxesCombined,
    tags: ["broker", "selection", "trading"],
  },
  {
    title: "5 Ways Technology is Transforming Forex Trading",
    category: "Trading Technology",
    date: "Technology trends",
    read: "5 min read",
    excerpt: "Take a closer look at how evolving technology is changing the tools, connectivity, and workflows used in Forex trading.",
    icon: TrendingUp,
    tags: ["technology", "innovation", "trading"],
  },
  {
    title: "Top 10 Forex Trading Strategies",
    category: "Trading Education",
    date: "Trading strategies",
    read: "10 min read",
    excerpt: "Get an overview of widely discussed trading strategy approaches and why strategy selection should fit a trader's own plan and risk tolerance.",
    icon: BookOpen,
    tags: ["strategies", "education", "trading"],
  },
  {
    title: "Trade Bots in Forex Trading",
    category: "Trading Technology",
    date: "Automated trading",
    read: "6 min read",
    excerpt: "Learn what trading bots are, how rule-based automated trading works, and what traders should understand before using automated tools.",
    icon: Bot,
    tags: ["bots", "automation", "algorithms"],
  },
];

const categories = ["All Articles", "Trading Education", "Trading Technology", "Brokerage Business", "Risk Management", "Brokerage Technology"];

const variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const reduceMotion = useReducedMotion();

  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "All Articles" || article.category === activeCategory;
      const matchesSearch = !normalized ||
        `${article.title} ${article.category} ${article.excerpt} ${article.tags.join(" ")}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  const featured = articles[0];

  const reveal = {
    initial: reduceMotion ? false : "hidden",
    whileInView: reduceMotion ? undefined : "visible",
    viewport: { once: true, amount: 0.12 },
    variants,
  };

  return (
    <main className="ifx-blog">
      <section className="ifx-blog-hero">
        <div className="ifx-blog-hero-grid" aria-hidden="true" />
        <motion.div
          className="ifx-blog-orb ifx-blog-orb-a"
          aria-hidden="true"
          animate={reduceMotion ? {} : { y: [0, -14, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="ifx-blog-orb ifx-blog-orb-b"
          aria-hidden="true"
          animate={reduceMotion ? {} : { y: [0, 12, 0], x: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="ifx-blog-container ifx-blog-hero-layout">
          <motion.div
            className="ifx-blog-hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="ifx-blog-eyebrow"><i /> INTELLIFX INSIGHTS</span>
            <h1>Ideas for smarter <span>trading technology.</span></h1>
            <p>Explore perspectives on Forex trading, brokerage operations, risk management, and the technology shaping modern trading businesses.</p>
            <a className="ifx-blog-primary" href="#ifx-blog-library">Explore articles <ArrowRight size={17} /></a>
            <div className="ifx-blog-hero-tags">
              <span><BookOpen size={15} /> Industry guides</span>
              <span><TrendingUp size={15} /> Trading insights</span>
              <span><Cpu size={15} /> Technology</span>
            </div>
          </motion.div>
          <motion.div
            className="ifx-blog-feature-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: .96, x: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: .8, delay: .1 }}
          >
            <div className="ifx-blog-feature-top">
              <span><span className="ifx-blog-status-dot" /> EDITOR'S PICK</span>
              <span className="ifx-blog-feature-badge"><Sparkles size={14} /> Featured insight</span>
            </div>
            <div className="ifx-blog-feature-art">
              <div className="ifx-blog-art-grid" />
              <div className="ifx-blog-art-ring art-ring-1" />
              <div className="ifx-blog-art-ring art-ring-2" />
              <div className="ifx-blog-art-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <motion.div
                className="ifx-blog-art-core"
                animate={reduceMotion ? {} : { y: [0, -5, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <TrendingUp size={34} />
                <strong>Market mindset</strong>
                <span>Knowledge • Strategy • Discipline</span>
              </motion.div>
              <div className="ifx-blog-floating-chip chip-one"><Brain size={16} /> Psychology</div>
              <div className="ifx-blog-floating-chip chip-two"><ShieldCheck size={16} /> Risk awareness</div>
            </div>
            <div className="ifx-blog-feature-caption">
              <span className="ifx-blog-category">TRADING EDUCATION</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <a href="#ifx-blog-library" onClick={() => { setActiveCategory("Trading Education"); setQuery(""); }}>Browse trading education <ArrowRight size={16} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="ifx-blog-library" id="ifx-blog-library">
        <div className="ifx-blog-container">
          <motion.div className="ifx-blog-library-heading" {...reveal}>
            <div>
              <span className="ifx-blog-eyebrow"><i /> THE KNOWLEDGE HUB</span>
              <h2>Explore our <span>latest insights.</span></h2>
              <p>Guides and perspectives for traders, brokers, and trading businesses.</p>
            </div>
            <div className="ifx-blog-search">
              <Search size={18} />
              <input
                type="search"
                aria-label="Search articles"
                placeholder="Search articles..."
                value={query}
                onChange={(event) => { setQuery(event.target.value); setVisibleCount(6); }}
              />
              {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")}><X size={16} /></button>}
            </div>
          </motion.div>

          <div className="ifx-blog-filter-row" role="group" aria-label="Filter articles by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "active" : ""}
                onClick={() => { setActiveCategory(category); setVisibleCount(6); }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="ifx-blog-results-line">
            <span>{filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}</span>
            {(activeCategory !== "All Articles" || query) && (
              <button type="button" onClick={() => { setActiveCategory("All Articles"); setQuery(""); setVisibleCount(6); }}>
                Clear filters <X size={13} />
              </button>
            )}
          </div>

          {filteredArticles.length ? (
            <div className="ifx-blog-grid">
              {filteredArticles.slice(0, visibleCount).map((article, index) => {
                const Icon = article.icon;
                return (
                  <motion.article
                    className="ifx-blog-card"
                    key={article.title}
                    {...(reduceMotion ? {} : {
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: true, amount: .1 },
                      variants,
                      transition: { delay: (index % 3) * .06 },
                    })}
                    whileHover={reduceMotion ? {} : { y: -7 }}
                  >
                    <div className={`ifx-blog-card-art art-variant-${index % 5}`}>
                      <div className="ifx-blog-card-art-grid" />
                      <span className="ifx-blog-card-icon"><Icon size={28} strokeWidth={1.7} /></span>
                      <span className="ifx-blog-card-art-number">{String(index + 1).padStart(2, "0")}</span>
                      <div className="ifx-blog-card-orbit" />
                    </div>
                    <div className="ifx-blog-card-body">
                      <div className="ifx-blog-card-meta">
                        <span>{article.category}</span>
                        <span><Clock3 size={13} /> {article.read}</span>
                      </div>
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <div className="ifx-blog-card-footer">
                        <span className="ifx-blog-topic">{article.date}</span>
                        <a href="https://intellifxsolutions.com/blog/" target="_blank" rel="noreferrer" aria-label={`Read ${article.title} on the original blog`}>
                          Read article <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <div className="ifx-blog-empty">
              <Search size={26} />
              <h3>No matching articles found</h3>
              <p>Try a different keyword or choose another category.</p>
              <button type="button" onClick={() => { setActiveCategory("All Articles"); setQuery(""); }}>Show all articles</button>
            </div>
          )}

          {filteredArticles.length > visibleCount && (
            <div className="ifx-blog-load-wrap">
              <button className="ifx-blog-load-more" type="button" onClick={() => setVisibleCount((count) => count + 4)}>
                Load more articles <ChevronDown size={17} />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="ifx-blog-topics">
        <div className="ifx-blog-container ifx-blog-topics-layout">
          <motion.div {...reveal}>
            <span className="ifx-blog-eyebrow"><i /> EXPLORE BY INTEREST</span>
            <h2>Knowledge for every part of the <span>trading journey.</span></h2>
          </motion.div>
          <div className="ifx-blog-topic-pills">
            {[
              ["Trading psychology", "Trading Education"],
              ["Brokerage operations", "Brokerage Business"],
              ["Risk management", "Risk Management"],
              ["Trading technology", "Trading Technology"],
            ].map(([label, category]) => (
              <button key={label} type="button" onClick={() => {
                setActiveCategory(category);
                setQuery("");
                setVisibleCount(6);
                document.getElementById("ifx-blog-library")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
              }}>
                {label} <ArrowUpRight size={15} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="ifx-blog-cta-wrap">
        <motion.div className="ifx-blog-container" {...reveal}>
          <div className="ifx-blog-cta">
            <div className="ifx-blog-cta-glow" aria-hidden="true" />
            <div>
              <span className="ifx-blog-eyebrow ifx-blog-eyebrow-light"><i /> BUILD WITH INTELLIFX</span>
              <h2>Looking for the right technology for your brokerage?</h2>
              <p>Explore our solutions or speak with our team about your business requirements.</p>
            </div>
            <a href="/contact/" className="ifx-blog-cta-button">Discuss your requirements <ArrowUpRight size={18} /></a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
