import { motion } from "framer-motion";
import "./Features.css";

function Features() {
  return (
    <section className="support-section">
      <div className="support-container">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="support-title"
        >
          Customer Support
        </motion.h1>

        <p className="support-subtitle">
          Fast replies • Trusted support • Available every day
        </p>

        <motion.div
          className="support-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2>📱 Telegram</h2>

          <p>
            Contact us directly or join the official BlackX community.
          </p>

          <a
            href="https://t.me/BLACKXOWNER147"
            target="_blank"
            rel="noreferrer"
            className="telegram-btn"
          >
            Message Owner
          </a>

          <a
            href="https://t.me/+Mel5fluwOnw4N2Zl"
            target="_blank"
            rel="noreferrer"
            className="community-btn"
          >
            Join Community
          </a>

          <hr />

          <h2>📸 Instagram</h2>

          <p>
            Follow us for latest updates and offers.
          </p>

          <a
            href="https://www.instagram.com/blackxcommunity_?igsh=aXpnOXYwNm5uYW1y"
            target="_blank"
            rel="noreferrer"
            className="instagram-btn"
          >
            Follow Instagram
          </a>

          <div className="availability-box">
            <h3>Support Hours</h3>

            <p>
              ✅ Fast Response
              <br />
              ✅ Daily Support
              <br />
              ✅ Trusted Service
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Features;