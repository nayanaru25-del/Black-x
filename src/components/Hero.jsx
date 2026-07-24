import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            marginBottom: "15px",
            color: "#ffffff",
            letterSpacing: "1px",
          }}
        >
          Black <span style={{ color: "#ff2d2d" }}>X</span> Community
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            marginBottom: "8px",
            fontWeight: "500",
          }}
        >
          Premium Virtual Debit Cards
        </p>

        <p
          style={{
            fontSize: "17px",
            color: "#00f5ff",
            marginBottom: "35px",
            fontWeight: "600",
          }}
        >
          
          ⭐ 23,789+ Trusted Users
        </p>

        <button className="hero-btn">
          Explore
        </button>

        <div className="card-categories">

          {/* Mastercard */}
          <div className="category-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
            />

            <h2>Mastercard</h2>

            <p>Starting ₹650</p>

            <Link to="/mastercard">
              <button>View All</button>
            </Link>
          </div>

          {/* Visa */}
          <div className="category-card">
            <img
              src="https://cdn.simpleicons.org/visa"
              alt="Visa"
            />

            <h2>Visa</h2>

            <p>Starting ₹650</p>

            <Link to="/visa">
              <button>View All</button>
            </Link>
          </div>

          {/* RuPay */}
          <div className="category-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg"
              alt="RuPay"
            />

            <h2>RuPay</h2>

            <p>Starting ₹650</p>

            <Link to="/rupay">
              <button>View All</button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;