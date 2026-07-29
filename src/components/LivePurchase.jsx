import { useEffect, useState } from "react";
import "./LivePurchase.css";

const purchases = [
  { name: "Rahul", city: "Mumbai", card: "Mastercard Gold", price: "₹1250" },
  { name: "Aman", city: "Delhi", card: "Visa Platinum", price: "₹1699" },
  { name: "Arjun", city: "Pune", card: "RuPay Premium", price: "₹999" },
  { name: "Rohit", city: "Hyderabad", card: "Mastercard Silver", price: "₹850" },
  { name: "Karan", city: "Bangalore", card: "Visa Gold", price: "₹1450" },
  { name: "Vivek", city: "Surat", card: "RuPay Gold", price: "₹1199" },
  { name: "Nikhil", city: "Ahmedabad", card: "Mastercard Platinum", price: "₹1999" },
  { name: "Sahil", city: "Nagpur", card: "Visa Classic", price: "₹750" }
];

function LivePurchase() {
  const [purchase, setPurchase] = useState(purchases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        purchases[Math.floor(Math.random() * purchases.length)];
      setPurchase(random);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-purchase">
      <div className="live-dot"></div>

      <div>
        <small>Just Purchased</small>

        <h4>{purchase.name} • {purchase.city}</h4>

        <p>
          {purchase.card} • {purchase.price}
        </p>
      </div>
    </div>
  );
}

export default LivePurchase;