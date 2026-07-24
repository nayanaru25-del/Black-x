import "./PackageCard.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function PackageCard({ logo, name, price, popular }) {

  const navigate = useNavigate();

  function buyNow() {
    navigate("/checkout", {
      state: {
        logo,
        name,
        price,
      },
    });
  }

  return (
    <motion.div
      className="package-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {popular && <span className="badge">⭐ Best Seller</span>}

      <img src={logo} alt={name} className="package-logo" />

      <h2>{name}</h2>

      <h3>₹{price}</h3>

      <ul>
        <li>✔ Instant Delivery</li>
        <li>✔ Premium Quality</li>
        <li>✔ 24/7 Support</li>
      </ul>

      <button
        className="buy-btn"
        onClick={buyNow}
      >
        Buy Now
      </button>

    </motion.div>
  );
}

export default PackageCard;