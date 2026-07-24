import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          maxWidth: "800px",
          background: "#111827",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          border: "1px solid #00f5ff",
        }}
      >
        <h1 style={{ color: "#00f5ff", fontSize: "40px" }}>
          About BlackX
        </h1>

        <p style={{ marginTop: "25px", lineHeight: "32px", color: "#d1d5db" }}>
          BlackX is a premium digital card platform that provides instant
          delivery, secure payment verification and fast customer support.
          Our goal is to offer reliable digital services with a smooth user
          experience.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "40px",
          }}
        >
          <div>
            <h2 style={{ color: "#22c55e" }}>1000+</h2>
            <p>Customers</p>
          </div>

          <div>
            <h2 style={{ color: "#22c55e" }}>24/7</h2>
            <p>Support</p>
          </div>

          <div>
            <h2 style={{ color: "#22c55e" }}>100%</h2>
            <p>Secure</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}