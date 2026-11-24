import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Clock3, Mail, MapPin,
  MessageCircle, Phone, Send, ShieldCheck, ChevronDown, Copy, Check,
  Globe2, Headphones, CircleHelp, ExternalLink
} from "lucide-react";
import "./Contact.css";

const contactDetails = {
  email: "sales@intellifxsolutions.com",
  whatsapp: "+44 7520 665843",
  whatsappDigits: "447520665843",
  skype: "IntelliFX Solutions",
  telegram: "IntelliFX",
  address: "4th Floor, Administrative Building, Granby Street, Kingstown, St. Vincent and The Grenadines",
};

const faqs = [
  {
    q: "Is a demo account provided?",
    a: "The website says that in most cases a demo manager is provided. Otherwise, a demo account is given so you can become familiar with the platform.",
  },
  {
    q: "How long does it take to deliver?",
    a: "The website states that delivery of the product or service can take up to 24 hours. Confirm the timeline for your specific requirements with the team.",
  },
  {
    q: "What are the payment methods?",
    a: "The website lists USDT or PayPal, depending on the client's location. Please confirm the available method for your location directly with IntelliFX Solutions.",
  },
  {
    q: "How can I discuss my brokerage requirements?",
    a: "Use the contact form to prepare an enquiry, or reach out by email or WhatsApp. Include the solution you are interested in and a brief description of your requirements.",
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [activeFaq, setActiveFaq] = useState(0);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");

  const reveal = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.13 },
        variants: revealVariants,
      };

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
    setStatus("");
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Please include your phone number with country code.";
    if (!form.message.trim()) next.message = "Please tell us briefly about your requirements.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // This front-end-only form prepares an email in the visitor's email application.
  // To send messages directly in the background, connect a backend or an email form provider.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      setStatus("Please check the highlighted fields.");
      return;
    }

    const subject = `Website enquiry from ${form.name.trim()}`;
    const body = [
      "Hello IntelliFX Solutions,",
      "",
      "I would like to discuss my requirements.",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      "",
      "Message:",
      form.message.trim(),
      "",
      "Sent from the IntelliFX Solutions website contact page.",
    ].join("\n");

    const mailto = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email draft is ready. Send it from your email app to complete the enquiry.");
    window.location.href = mailto;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setStatus(`Email address: ${contactDetails.email}`);
    }
  };

  const openWhatsApp = () => {
    const message = `Hello IntelliFX Solutions, my name is ${form.name.trim() || "[Your name]"}. I would like to discuss my brokerage technology requirements.`;
    window.open(`https://wa.me/${contactDetails.whatsappDigits}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="ifx-contact">
      <section className="ifx-contact-hero">
        <div className="ifx-contact-hero-grid" aria-hidden="true" />
        <motion.div
          className="ifx-contact-orb contact-orb-one"
          aria-hidden="true"
          animate={reduceMotion ? {} : { y: [0, -14, 0], x: [0, 7, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="ifx-contact-orb contact-orb-two"
          aria-hidden="true"
          animate={reduceMotion ? {} : { y: [0, 12, 0], x: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="ifx-contact-container">
          <motion.div
            className="ifx-contact-hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="ifx-contact-eyebrow"><i /> CONTACT INTELLIFX SOLUTIONS</span>
            <h1>Let’s talk about <span>your next move.</span></h1>
            <p>Planning to launch a Forex brokerage, improve your existing technology, or build a prop trading business? Tell us what you need and start a conversation with our team.</p>
            <div className="ifx-contact-hero-actions">
              <a href="#contact-form" className="ifx-contact-primary">Send an enquiry <ArrowUpRight size={18} /></a>
              <button type="button" className="ifx-contact-hero-link" onClick={openWhatsApp}><MessageCircle size={17} /> Chat on WhatsApp</button>
            </div>
            <div className="ifx-contact-trust-row">
              <span><CheckCircle2 size={16} /> Brokerage technology enquiries</span>
              <span><CheckCircle2 size={16} /> Direct contact options</span>
            </div>
          </motion.div>

          <motion.div
            className="ifx-contact-hero-card"
            initial={reduceMotion ? false : { opacity: 0, scale: .96, x: 15 }}
            animate={reduceMotion ? {} : { opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: .8, delay: .1 }}
          >
            <div className="ifx-contact-card-heading">
              <span className="ifx-contact-card-icon"><Headphones size={22} /></span>
              <div><span>NEED HELP?</span><h2>We’re here to help.</h2></div>
            </div>
            <p>Whether you have a question about a solution, need help with an order, or want to discuss your business requirements, choose the contact option that works for you.</p>
            <a className="ifx-contact-quick-link" href={`mailto:${contactDetails.email}`}>
              <span className="ifx-contact-quick-icon"><Mail size={18} /></span>
              <span><small>Email</small><strong>{contactDetails.email}</strong></span>
              <ArrowUpRight size={17} />
            </a>
            <button type="button" className="ifx-contact-quick-link" onClick={openWhatsApp}>
              <span className="ifx-contact-quick-icon"><MessageCircle size={18} /></span>
              <span><small>WhatsApp</small><strong>{contactDetails.whatsapp}</strong></span>
              <ArrowUpRight size={17} />
            </button>
            <div className="ifx-contact-response-note"><Clock3 size={15} /> Share your requirements and the team can advise on the next steps.</div>
          </motion.div>
        </div>
      </section>

      <section className="ifx-contact-main-section">
        <div className="ifx-contact-container ifx-contact-main-grid">
          <motion.div className="ifx-contact-form-panel" id="contact-form" {...reveal}>
            <div className="ifx-contact-section-label"><i /> CONTACT FORM</div>
            <h2>Tell us what you’re <span>looking for.</span></h2>
            <p className="ifx-contact-form-intro">Complete the form below to prepare an enquiry email. Fields marked with * are required.</p>

            <form className="ifx-contact-form" onSubmit={handleSubmit} noValidate>
              <div className="ifx-contact-form-row">
                <label>
                  Your name <em>*</em>
                  <input name="name" value={form.name} onChange={updateField} placeholder="Enter your full name" autoComplete="name" aria-invalid={!!errors.name} />
                  {errors.name && <small className="ifx-contact-error">{errors.name}</small>}
                </label>
                <label>
                  Your email <em>*</em>
                  <input type="email" name="email" value={form.email} onChange={updateField} placeholder="you@company.com" autoComplete="email" aria-invalid={!!errors.email} />
                  {errors.email && <small className="ifx-contact-error">{errors.email}</small>}
                </label>
              </div>
              <label>
                Phone with country code <em>*</em>
                <input type="tel" name="phone" value={form.phone} onChange={updateField} placeholder="e.g. +91 98765 43210" autoComplete="tel" aria-invalid={!!errors.phone} />
                {errors.phone && <small className="ifx-contact-error">{errors.phone}</small>}
              </label>
              <label>
                Your message <em>*</em>
                <textarea name="message" value={form.message} onChange={updateField} rows="5" placeholder="Tell us about your brokerage, the solution you need, or any questions..." aria-invalid={!!errors.message} />
                {errors.message && <small className="ifx-contact-error">{errors.message}</small>}
              </label>
              <div className="ifx-contact-form-bottom">
                <p><ShieldCheck size={15} /> Your details will be included in the email draft you send.</p>
                <button className="ifx-contact-submit" type="submit">Prepare enquiry <Send size={16} /></button>
              </div>
              {status && <div className="ifx-contact-status" role="status">{status}</div>}
              <p className="ifx-contact-form-footnote">Submitting opens your email application with the enquiry details filled in. You must press Send in that application to deliver the message.</p>
            </form>
          </motion.div>

          <motion.aside className="ifx-contact-details-panel" {...reveal}>
            <div className="ifx-contact-section-label"><i /> GET IN TOUCH</div>
            <h2>Choose how to <span>reach us.</span></h2>
            <p className="ifx-contact-details-intro">Use the contact details below for enquiries about IntelliFX Solutions’ products and services.</p>

            <div className="ifx-contact-detail-card">
              <span className="ifx-contact-detail-icon"><Mail size={20} /></span>
              <div className="ifx-contact-detail-copy"><small>EMAIL US</small><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a><span>For product and service enquiries</span></div>
              <button type="button" className="ifx-contact-copy" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={16} /> : <Copy size={16} />}</button>
            </div>
            <div className="ifx-contact-detail-card">
              <span className="ifx-contact-detail-icon"><MessageCircle size={20} /></span>
              <div className="ifx-contact-detail-copy"><small>WHATSAPP</small><a href={`https://wa.me/${contactDetails.whatsappDigits}`} target="_blank" rel="noreferrer">{contactDetails.whatsapp}</a><span>Start a WhatsApp conversation</span></div>
              <a className="ifx-contact-external" href={`https://wa.me/${contactDetails.whatsappDigits}`} target="_blank" rel="noreferrer" aria-label="Open WhatsApp"><ArrowUpRight size={16} /></a>
            </div>
            <div className="ifx-contact-detail-card">
              <span className="ifx-contact-detail-icon"><Globe2 size={20} /></span>
              <div className="ifx-contact-detail-copy"><small>SKYPE</small><strong>{contactDetails.skype}</strong><span>Search this name in Skype</span></div>
              <a className="ifx-contact-external" href="https://www.skype.com/" target="_blank" rel="noreferrer" aria-label="Open Skype"><ExternalLink size={15} /></a>
            </div>
            <div className="ifx-contact-detail-card">
              <span className="ifx-contact-detail-icon"><Send size={20} /></span>
              <div className="ifx-contact-detail-copy"><small>TELEGRAM</small><strong>{contactDetails.telegram}</strong><span>Search this name in Telegram</span></div>
              <a className="ifx-contact-external" href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Open Telegram"><ExternalLink size={15} /></a>
            </div>
            <div className="ifx-contact-address">
              <span className="ifx-contact-detail-icon"><MapPin size={20} /></span>
              <div><small>OFFSHORE ADDRESS</small><p>{contactDetails.address}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`} target="_blank" rel="noreferrer">View on map <ArrowUpRight size={14} /></a></div>
            </div>
            <button type="button" className="ifx-contact-whatsapp-wide" onClick={openWhatsApp}><MessageCircle size={18} /> Continue on WhatsApp <ArrowUpRight size={17} /></button>
            {copied && <div className="ifx-contact-copied" role="status">Email address copied.</div>}
          </motion.aside>
        </div>
      </section>

      <section className="ifx-contact-faq-section">
        <div className="ifx-contact-container">
          <motion.div className="ifx-contact-faq-heading" {...reveal}>
            <span className="ifx-contact-eyebrow"><i /> QUICK ANSWERS</span>
            <h2>Frequently asked <span>questions.</span></h2>
            <p>A few useful details from the current IntelliFX Solutions contact page.</p>
          </motion.div>
          <div className="ifx-contact-faq-layout">
            <motion.div className="ifx-contact-faq-side" {...reveal}>
              <span className="ifx-contact-faq-side-icon"><CircleHelp size={28} /></span>
              <h3>Need more information?</h3>
              <p>If your question isn’t covered here, send an enquiry or contact the team directly.</p>
              <a href={`mailto:${contactDetails.email}`}>Email the team <ArrowRight size={16} /></a>
            </motion.div>
            <div className="ifx-contact-faq-list">
              {faqs.map((faq, index) => (
                <motion.div className={`ifx-contact-faq-item ${activeFaq === index ? "is-open" : ""}`} key={faq.q} {...reveal}>
                  <button type="button" aria-expanded={activeFaq === index} onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                    <span>{faq.q}</span><ChevronDown size={18} />
                  </button>
                  <div className="ifx-contact-faq-answer" aria-hidden={activeFaq !== index}>
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ifx-contact-bottom-cta">
        <motion.div className="ifx-contact-container" {...reveal}>
          <div className="ifx-contact-cta-card">
            <div className="ifx-contact-cta-glow" aria-hidden="true" />
            <div className="ifx-contact-cta-copy">
              <span className="ifx-contact-eyebrow ifx-contact-eyebrow-light"><i /> LET’S START A CONVERSATION</span>
              <h2>Have a brokerage technology goal in mind?</h2>
              <p>Share your requirements with IntelliFX Solutions and discuss the technology components that may fit your business.</p>
            </div>
            <a className="ifx-contact-cta-button" href={`mailto:${contactDetails.email}?subject=${encodeURIComponent("Brokerage technology enquiry")}`}>Email IntelliFX <ArrowUpRight size={18} /></a>
          </div>
          <p className="ifx-contact-disclaimer">Disclaimer: All intellectual properties, logos, and business names are copyrighted or registered trademarks of their respective owners and not of IntelliFX Solutions.</p>
        </motion.div>
      </section>
    </main>
  );
}
