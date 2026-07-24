import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import qrImage from "../assets/qr.png";

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#050816",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px",
        }}
      >
        No Product Selected
      </div>
    );
  }

  const [utr, setUtr] = useState("");
  const [loading, setLoading] = useState(false);

  const logo = state.logo;
  const name = state.name;
  const price = state.price;

  const [showPayment, setShowPayment] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
  if (!showPayment) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [showPayment]);

const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
const seconds = String(timeLeft % 60).padStart(2, "0");

const submitPayment = () => {
  if (utr.length !== 12) {
    alert("Please enter a valid 12-digit UTR.");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    navigate("/success");
  }, 2000);
};

return (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#050816,#0f172a)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        width: "430px",
        background: "#161b22",
        borderRadius: "25px",
        padding: "35px",
        textAlign: "center",
        border: "1px solid rgba(0,245,255,.25)",
        boxShadow: "0 0 25px rgba(0,245,255,.25)",
      }}
    >
      <h1
        style={{
          color: "#00f5ff",
          fontSize: "26px",
          marginBottom: "10px",
        }}
      >
        ⚡ BlackX Secure Checkout
      </h1>

      <p
        style={{
          color: "#8b949e",
          marginBottom: "20px",
        }}
      >
        Fast • Secure • Trusted
      </p>

      <motion.img
        src={logo}
        alt={name}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        style={{
          width: "90px",
          height: "90px",
          objectFit: "contain",
          marginBottom: "15px",
        }}
      />

      <h2
        style={{
          color: "#fff",
          fontSize: "28px",
        }}
      >
        {name}
      </h2>

      <h1
        style={{
          color: "#22c55e",
          fontSize: "36px",
          marginTop: "10px",
        }}
      >
        ₹ {price}
      </h1>

      <div
        style={{
          marginTop: "25px",
          background: "#0b1220",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <h3 style={{ color: "#22c55e" }}>
          🔒 100% Secure Payment
        </h3>

        <p
          style={{
            color: "#8b949e",
            marginTop: "8px",
          }}
        >
          Instant Verification & Lifetime Access
        </p>
      </div>

      <button
        onClick={() => setShowPayment(true)}
        style={{
          marginTop: "25px",
          width: "100%",
          padding: "15px",
          border: "none",
          borderRadius: "12px",
          background: "#00f5ff",
          color: "#000",
          fontWeight: "bold",
          fontSize: "17px",
          cursor: "pointer",
        }}
      >
        Continue Payment
      </button>

            {showPayment && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: "30px",
            background: "#101827",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <h2
            style={{
              color: "#00f5ff",
              marginBottom: "20px",
            }}
          >
            Payment Section
          </h2>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px",
              background: "rgba(34,197,94,.15)",
              borderRadius: "30px",
              marginBottom: "20px",
            }}
          >
            <span>⏳</span>

            <span
              style={{
                color: "#22c55e",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              {minutes}:{seconds}
            </span>
          </div>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "220px",
              height: "220px",
              background: "#fff",
              margin: "0 auto",
              padding: "10px",
              borderRadius: "15px",
              boxShadow: "0 0 25px rgba(0,245,255,.3)",
            }}
          >
            <img
              src={qrImage}
              alt="QR"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              border: "none",
              borderRadius: "12px",
              background: "#00f5ff",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            📋 Copy UPI ID
          </motion.button>
                    <div
            style={{
              marginTop: "25px",
              background: "#111827",
              padding: "18px",
              borderRadius: "15px",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <h3
              style={{
                color: "#FFD700",
                marginBottom: "12px",
                textAlign: "left",
              }}
            >
              🎟 Coupon Code
            </h3>

            <input
              placeholder="Enter Coupon Code"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #334155",
                background: "#0f172a",
                color: "white",
                outline: "none",
                marginBottom: "12px",
                boxSizing: "border-box",
              }}
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%",
                padding: "13px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                background: "linear-gradient(90deg,#FFD700,#FFC107)",
                color: "#111",
                fontWeight: "bold",
              }}
            >
              Apply Coupon
            </motion.button>
          </div>

          <motion.input
            value={utr}
            onChange={(e) => setUtr(e.target.value)}
            maxLength={12}
            placeholder="Enter 12 Digit UTR Number"
            whileFocus={{
              scale: 1.02,
            }}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #334155",
              background: "#111827",
              color: "white",
              outline: "none",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={submitPayment}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              border: "none",
              borderRadius: "12px",
              background: "linear-gradient(90deg,#00f5ff,#22c55e)",
              color: "#000",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading
              ? "🔄 Verifying Payment..."
              : "✅ Confirm Payment"}
          </motion.button>
                  </motion.div>
      )}

    </motion.div>
  </div>
);

}

export default Checkout;