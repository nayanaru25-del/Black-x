import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #050816 60%, #000 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "450px",
          background: "rgba(17,24,39,.95)",
          borderRadius: "25px",
          padding: "40px",
          textAlign: "center",
          border: "1px solid rgba(34,197,94,.4)",
          boxShadow: "0 0 50px rgba(34,197,94,.35)",
          backdropFilter: "blur(15px)",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            margin: "0 auto 30px",
            background: "#22c55e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "70px",
            color: "#fff",
            boxShadow: "0 0 45px #22c55e",
          }}
        >
          ✓
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            color: "#22c55e",
            fontSize: "38px",
            marginBottom: "10px",
          }}
        >
          Payment Successful
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: "#d1d5db",
            fontSize: "18px",
            lineHeight: "30px",
            marginBottom: "10px",
          }}
        >
          Your payment has been submitted successfully.
        </motion.p>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "30px",
          }}
        >
          Verification Time: <b>5 - 20 Minutes</b>
        </p>

        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(0,245,255,.5)",
          }}
          whileTap={{
            scale: 0.96,
          }}
          href="https://t.me/+Mel5fluwOnw4N2Zl"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            width: "100%",
            padding: "15px",
            marginBottom: "18px",
            borderRadius: "12px",
            background: "#00f5ff",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          📞 Join Telegram Support
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/")}
          style={{
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "12px",
            background: "#22c55e",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          🏠 Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Success;