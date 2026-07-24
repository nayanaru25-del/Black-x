import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (
      username === "Metrix" &&
      password === "#Shiv_17"
    ) {
      navigate("/admin");
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#111827",
          padding: "35px",
          borderRadius: "20px",
          border: "1px solid rgba(0,245,255,.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#00f5ff",
            marginBottom: "30px",
          }}
        >
          BlackX Admin
        </h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "25px",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "15px",
            background: "#00f5ff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;



