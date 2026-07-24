import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Verifying() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/success");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          width: "430px",
          background: "#111827",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          border: "1px solid rgba(0,245,255,.3)",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          style={{
            width: "80px",
            height: "80px",
            border: "8px solid #1e293b",
            borderTop: "8px solid #00f5ff",
            borderRadius: "50%",
            margin: "auto",
          }}
        />

        <h2
          style={{
            color: "white",
            marginTop: "30px",
          }}
        >
          Verifying Payment...
        </h2>

        <p
          style={{
            color: "#9ca3af",
            marginTop: "10px",
            lineHeight: "30px",
          }}
        >
          Checking Payment...
          <br />
          Verifying UTR...
          <br />
          Confirming Transaction...
        </p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
          }}
          style={{
            height: "10px",
            background: "#00f5ff",
            borderRadius: "20px",
            marginTop: "35px",
          }}
        />
      </motion.div>
    </div>
  );
}

export default Verifying;