import { motion } from "framer-motion";

function Features() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#050816",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          color: "#00f5ff",
          fontSize: "40px",
          marginBottom: "10px",
        }}
      >
        💬 Customer Support
      </motion.h1>

      <p
        style={{
          color: "#9ca3af",
          fontSize: "17px",
          marginBottom: "40px",
        }}
      >
        Need help? Contact us anytime.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 0 40px rgba(0,245,255,.25)",
        }}
        transition={{ duration: 0.4 }}
        style={{
          maxWidth: "720px",
          margin: "auto",
          background: "rgba(16,24,39,.9)",
          borderRadius: "22px",
          padding: "40px",
          border: "1px solid rgba(0,245,255,.2)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Telegram */}
        <h2
          style={{
            color: "#22c55e",
            marginBottom: "15px",
            fontSize: "30px",
          }}
        >
          📱 Telegram Support
        </h2>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "25px",
          }}
        >
          Contact us directly or join our official community.
        </p>

        {/* DM */}
        <motion.a
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{ scale: 0.97 }}
          href="https://t.me/BLACKXOWNER147"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            textDecoration: "none",
            margin: "0 auto 18px",
            maxWidth: "350px",
            padding: "15px",
            borderRadius: "50px",
            background: "linear-gradient(90deg,#00f5ff,#2563eb)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "17px",
            boxShadow: "0 0 20px rgba(0,245,255,.35)",
          }}
        >
          💬 Message @BLACKXOWNER147
        </motion.a>

        {/* Community */}
        <motion.a
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{ scale: 0.97 }}
          href="https://t.me/+Mel5fluwOnw4N2Zl"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            textDecoration: "none",
            margin: "0 auto 35px",
            maxWidth: "350px",
            padding: "15px",
            borderRadius: "50px",
            background: "#101827",
            color: "#00f5ff",
            fontWeight: "bold",
            fontSize: "17px",
            border: "1px solid rgba(0,245,255,.35)",
            boxShadow: "0 0 20px rgba(0,245,255,.2)",
          }}
        >
          🚀 BlackX Official Community
        </motion.a>

        <hr
          style={{
            border: "1px solid #1f2937",
            margin: "30px 0",
          }}
        />

        {/* Instagram */}
        <h2
          style={{
            color: "#ff4da6",
            marginBottom: "15px",
            fontSize: "30px",
          }}
        >
          📸 Instagram
        </h2>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "25px",
          }}
        >
          Follow us for updates and offers.
        </p>

        <motion.a
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{ scale: 0.97 }}
          href="https://www.instagram.com/blackxcommunity_?igsh=aXpnOXYwNm5uYW1y"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            textDecoration: "none",
            margin: "0 auto",
            maxWidth: "350px",
            padding: "15px",
            borderRadius: "50px",
            background:
              "linear-gradient(90deg,#833AB4,#E1306C,#FCAF45)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "17px",
            boxShadow: "0 0 20px rgba(225,48,108,.35)",
          }}
        >
          📸 @blackxcommunity_
        </motion.a>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: "45px",
            padding: "18px",
            borderRadius: "14px",
            background: "#0b1220",
            border: "1px solid rgba(0,245,255,.15)",
          }}
        >
          <h3
            style={{
              color: "#22c55e",
              marginBottom: "10px",
            }}
          >
            ⚡ Support Availability
          </h3>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "28px",
            }}
          >
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