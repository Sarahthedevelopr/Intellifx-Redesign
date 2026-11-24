import "./GlobalContactButtons.css";
import { MessageCircle, Send } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/447520665843?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20IntelliFX%20Solutions.";

const TELEGRAM_URL = "https://t.me/IntelliFX";

export default function GlobalContactButtons() {
  return (
    <div className="global-contact-rail" aria-label="Quick contact options">
      <a
        className="global-contact-button global-contact-whatsapp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <span className="global-contact-icon" aria-hidden="true">
          <MessageCircle size={23} strokeWidth={2.2} />
        </span>
        <span className="global-contact-label">WhatsApp</span>
      </a>

      <a
        className="global-contact-button global-contact-telegram"
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on Telegram"
      >
        <span className="global-contact-icon" aria-hidden="true">
          <Send size={22} strokeWidth={2.2} />
        </span>
        <span className="global-contact-label">Telegram</span>
      </a>
    </div>
  );
}
