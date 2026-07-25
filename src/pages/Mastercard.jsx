import PackageCard from "../components/PackageCard";

function Mastercard() {
  return (
    <section className="package-page">
      <div className="package-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          alt="Mastercard"
          className="package-logo"
        />

        <h1>Mastercard Packages</h1>

        <p>
          Choose the package that best suits your needs.
        </p>
      </div>

      <div className="package-grid">

        <PackageCard
          logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          name="Mastercard Basic"
          price="650"
        />

        <PackageCard
          logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          name="Mastercard Silver"
          price="850"
        />

        <PackageCard
          logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          name="Mastercard Gold"
          price="999"
          popular={true}
        />

        <PackageCard
          logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          name="Mastercard Platinum"
          price="1299"
        />

        <PackageCard
          logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          name="Mastercard Diamond"
          price="1699"
        />

        <PackageCard
          logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          name="Mastercard Elite"
          price="2199"
        />

        <PackageCard
          logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          name="Mastercard Black"
          price="2999"
        />

      </div>
    </section>
  );
}

export default Mastercard;
