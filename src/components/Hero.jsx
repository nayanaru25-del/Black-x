import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1 className="hero-title">
          Black <span>X</span> Community
        </h1>

        <p className="hero-subtitle">
          Premium Virtual Debit Cards
        </p>

        <p className="hero-users">
          ⭐ 23,789+ Trusted Users
        </p>

        <div className="hero-buttons">
          <button
            className="hero-btn"
            onClick={() =>
              document
                .querySelector(".card-categories")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Cards
          </button>
        </div>

        <div className="card-categories">

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