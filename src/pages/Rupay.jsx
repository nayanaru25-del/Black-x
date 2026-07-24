import PackageCard from "../components/PackageCard";

function Rupay() {
  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px",
        background: "#090909",
        minHeight: "100vh",
      }}
    >
      <PackageCard
        logo="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg"
        name="RuPay Basic"
        price="650"
      />

      <PackageCard
        logo="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg"
        name="RuPay Silver"
        price="850"
      />

      <PackageCard
        logo="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg"
        name="RuPay Gold"
        price="999"
        popular={true}
      />

      <PackageCard
        logo="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg"
        name="RuPay Platinum"
        price="1299"
      />

      <PackageCard
        logo="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg"
        name="RuPay Diamond"
        price="1699"
      />

      <PackageCard
        logo="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg"
        name="RuPay Elite"
        price="2199"
      />

      <PackageCard
        logo="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg"
        name="RuPay Black"
        price="2999"
      />
    </div>
  );
}

export default Rupay;