import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import qrImage from "../assets/qr.png";

function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const logo = state?.logo;
  const name = state?.name;
  const price = state?.price;

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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          width: "420px",
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          border: "1px solid #00f5ff",
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            width: "80px",
            marginBottom: "10px",
          }}
        />

        <h2 style={{ color: "white" }}>
          {name}
        </h2>

        <h1 style={{ color: "#22c55e" }}>
          ₹ {price}
        </h1>

        <img
          src={qrImage}
          alt=""
          style={{
            width: "220px",
            margin: "20px auto",
            display: "block",
            background: "white",
            padding: "10px",
            borderRadius: "12px",
          }}
        />

        <button
          onClick={() => navigate("/verifying")}
          style={{
            width: "100%",
            padding: "15px",
            background: "#00f5ff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          I Have Paid
        </button>
      </motion.div>
    </div>
  );
}

export default Payment;