import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          width: "500px",
          background: "#111827",
          padding: "35px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#00f5ff" }}>Contact Us</h1>

        <p style={{ marginTop: "25px" }}>
          Need help? Contact our support team.
        </p>

        <a
          href="https://t.me/+Mel5fluwOnw4N2Zl"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            marginTop: "25px",
            padding: "15px",
            background: "#00f5ff",
            color: "#000",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Join Telegram Support
        </a>

        <p style={{ marginTop: "25px", color: "#9ca3af" }}>
          Email: support@blackx.com
        </p>
      </motion.div>
    </div>
  );
}