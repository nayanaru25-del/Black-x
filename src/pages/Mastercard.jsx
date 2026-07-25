import PackageCard from "../components/PackageCard";

function Mastercard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "25px",
        padding: "120px 20px 50px",
        background: "#090909",
        minHeight: "100vh",
      }}
    >
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
  );
}

export default Mastercard;