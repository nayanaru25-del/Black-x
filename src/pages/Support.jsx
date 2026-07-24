import { motion } from "framer-motion";

export default function Support() {
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          width: "700px",
          background: "#111827",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ color: "#00f5ff" }}>
          Support Center
        </h1>

        <h3 style={{ marginTop: "30px" }}>
          Frequently Asked Questions
        </h3>

        <p>• Payment verification takes 5–20 minutes.</p>
        <p>• Digital cards are delivered after verification.</p>
        <p>• Contact Telegram if you face any issue.</p>

        <a
          href="https://t.me/+Mel5fluwOnw4N2Zl"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "15px 30px",
            background: "#22c55e",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          Open Telegram Support
        </a>
      </motion.div>
    </div>
  );
}