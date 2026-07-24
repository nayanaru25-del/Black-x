import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          color: "white",
          boxShadow: "0 0 25px cyan",
        }}
      >
        <h2>Processing Payment...</h2>

        <motion.div
          style={{
            height: "10px",
            background: "#00f5ff",
            borderRadius: "10px",
            marginTop: "20px",
          }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5 }}
        />

        <p style={{ marginTop: "25px" }}>
          Please wait...
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;