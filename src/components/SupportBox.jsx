import { FaTelegramPlane, FaInstagram, FaCopy } from "react-icons/fa";
import payment from "../config/payment";

function SupportBox() {

  function copyUPI() {
    navigator.clipboard.writeText(payment.upiId);
    alert("✅ UPI ID Copied");
  }

  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <h2 style={{ color: "#00f5ff" }}>
        Need Help?
      </h2>

      <button
        onClick={copyUPI}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "10px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaCopy /> Copy UPI ID
      </button>

      <button
        onClick={() => window.open(payment.telegram)}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "10px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaTelegramPlane /> Telegram Support
      </button>

      <button
        onClick={() => window.open(payment.instagram)}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "10px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaInstagram /> Instagram Support
      </button>
    </div>
  );
}

export default SupportBox;