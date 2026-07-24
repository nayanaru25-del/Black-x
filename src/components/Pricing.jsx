
const cardData = {
  Mastercard: [
    { name: "Mastercard Basic", price: 650 },
    { name: "Mastercard Silver", price: 799 },
    { name: "Mastercard Gold", price: 999 },
    { name: "Mastercard Platinum", price: 1299 },
    { name: "Mastercard Diamond", price: 1699 },
    { name: "Mastercard Elite", price: 2199 },
    { name: "Mastercard Black", price: 2999 },
  ],

  Visa: [
    { name: "Visa Basic", price: 650 },
    { name: "Visa Silver", price: 850 },
    { name: "Visa Gold", price: 1099 },
    { name: "Visa Platinum", price: 1499 },
    { name: "Visa Signature", price: 1999 },
    { name: "Visa Infinite", price: 2499 },
    { name: "Visa Luxury", price: 3199 },
  ],

  RuPay: [
    { name: "RuPay Basic", price: 650 },
    { name: "RuPay Classic", price: 750 },
    { name: "RuPay Select", price: 950 },
    { name: "RuPay Platinum", price: 1250 },
    { name: "RuPay Premium", price: 1650 },
    { name: "RuPay Elite", price: 2150 },
    { name: "RuPay Black", price: 2850 },
  ],
};

const logos = {
  Mastercard:
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  Visa:
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  RuPay:
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg",
};

function Pricing() {
  const buyNow = (cardName, price) => {
    alert(`Selected: ${cardName}\nPrice: ₹${price}`);
  };

  return (
    <section className="pricing">
      <h1>Choose Your Card</h1>

      {Object.keys(cardData).map((type) => (
        <div key={type}>
          <h2 className="category">{type}</h2>

          <div className="pricing-grid">
            {cardData[type].map((card, index) => (
              <div className="price-card" key={index}>
                <img src={logos[type]} alt={type} />

                <h3>{card.name}</h3>

                <h4>₹ {card.price}</h4>

                <ul>
                  <li>✔ Premium Quality</li>
                  <li>✔ Fast Delivery</li>
                  <li>✔ 24/7 Support</li>
                  <li>✔ Secure Purchase</li>
                </ul>

                <button
                  onClick={() => buyNow(card.name, card.price)}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Pricing;