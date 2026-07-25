import { motion } from "framer-motion";
import "./Features.css";

function Features() {
  return (
    <section className="support-section">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="support-title"
      >
        💬 Customer Support
      </motion.h1>

      <p className="support-subtitle">
        Need help? Contact us anytime.
      </p>

      <motion.div
        className="support-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 0 40px rgba(0,245,255,.25)",
        }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="telegram-title">📱 Telegram Support</h2>

        <p className="support-text">
          Contact us directly or join our official community.
        </p>

        <motion.a
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          href="https://t.me/BLACKXOWNER147"
          target="_blank"
          rel="noreferrer"
          className="telegram-btn"
        >
          💬 Message @BLACKXOWNER147
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          href="https://t.me/+Mel5fluwOnw4N2Zl"
          target="_blank"
          rel="noreferrer"
          className="community-btn"
        >
          🚀 BlackX Official Community
        </motion.a>

        <hr className="support-divider" />

        <h2 className="instagram-title">📸 Instagram</h2>

        <p className="support-text">
          Follow us for updates and offers.
        </p>

        <motion.a
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          href="https://www.instagram.com/blackxcommunity_?igsh=aXpnOXYwNm5uYW1y"
          target="_blank"
          rel="noreferrer"
          className="instagram-btn"
        >
          📸 @blackxcommunity_
        </motion.a>

        <motion.div
          className="availability-box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>⚡ Support Availability</h3>

          <p>
            🟢 Fast Replies
            <br />
            🕒 Daily Support
            <br />
            🔒 Safe & Trusted Assistance
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Features;