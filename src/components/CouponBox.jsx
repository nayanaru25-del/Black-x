import { useState } from "react";
import coupons from "../config/coupons";

function CouponBox({ price, setPrice }) {
  const [coupon, setCoupon] = useState("");

  function applyCoupon() {
    const foundCoupon = coupons.find(
      (item) => item.code.toUpperCase() === coupon.toUpperCase()
    );

    if (!foundCoupon) {
      alert("❌ Invalid Coupon");
      return;
    }

    const today = new Date();
    const expiry = new Date(foundCoupon.expiry);

    if (today > expiry) {
      alert("❌ Coupon Expired");
      return;
    }

    let finalPrice = price;

    if (foundCoupon.type === "fixed") {
      finalPrice = price - foundCoupon.value;
    }

    if (foundCoupon.type === "percent") {
      finalPrice = price - (price * foundCoupon.value) / 100;
    }

    if (finalPrice < 0) finalPrice = 0;

    setPrice(finalPrice);

    alert("✅ Coupon Applied Successfully");
  }

  return (
    <div style={{ marginTop: "25px" }}>
      <h3>🎁 Coupon Code</h3>

      <input
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="Enter Coupon"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={applyCoupon}
        style={{
          width: "100%",
          padding: "12px",
          cursor: "pointer",
        }}
      >
        Apply Coupon
      </button>
    </div>
  );
}

export default CouponBox;