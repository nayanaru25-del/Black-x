import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import LivePurchase from "./components/LivePurchase";

import Mastercard from "./pages/Mastercard";
import Visa from "./pages/Visa";
import Rupay from "./pages/Rupay";
import Checkout from "./pages/Checkout";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";

import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

import Success from "./pages/Success";

import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <LivePurchase />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />

        {/* Card Pages */}
        <Route path="/mastercard" element={<Mastercard />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/rupay" element={<Rupay />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;