import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SuccessPopup() {

  const navigate = useNavigate();

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

      <motion.div

        initial={{ scale: .5, opacity:0 }}

        animate={{ scale:1, opacity:1 }}

        transition={{ duration:.5 }}

        style={{
          width:"420px",
          background:"#111827",
          borderRadius:"25px",
          padding:"35px",
          textAlign:"center",
          color:"white",
          boxShadow:"0 0 35px #00f5ff",
        }}
      >

        <h1>🎉</h1>

        <h2>Payment Submitted</h2>

        <p>
          Verification Time
        </p>

        <h3 style={{color:"#00f5ff"}}>
          5 - 15 Minutes
        </h3>

        <button

          onClick={()=>navigate("/")}

          style={{
            marginTop:"25px",
            width:"100%",
            padding:"15px",
            border:"none",
            borderRadius:"12px",
            cursor:"pointer",
            fontSize:"17px",
            background:"#00f5ff",
            color:"black",
            fontWeight:"bold"
          }}
        >

          Return Home

        </button>

      </motion.div>

    </div>

  );

}

export default SuccessPopup;