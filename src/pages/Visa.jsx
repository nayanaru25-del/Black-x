import PackageCard from "../components/PackageCard";

function Visa() {

  const visaLogo = "https://cdn.simpleicons.org/visa";

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
        logo={visaLogo}
        name="Visa Basic"
        price="650"
      />

      <PackageCard
        logo={visaLogo}
        name="Visa Silver"
        price="850"
      />

      <PackageCard
        logo={visaLogo}
        name="Visa Gold"
        price="999"
        popular={true}
      />

      <PackageCard
        logo={visaLogo}
        name="Visa Platinum"
        price="1299"
      />

      <PackageCard
        logo={visaLogo}
        name="Visa Diamond"
        price="1699"
      />

      <PackageCard
        logo={visaLogo}
        name="Visa Elite"
        price="2199"
      />

      <PackageCard
        logo={visaLogo}
        name="Visa Black"
        price="2999"
      />

    </div>
  );
}

export default Visa;