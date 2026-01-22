import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Contact from "./pages/Contact.jsx";
import News from "./pages/News.jsx";
import Services from "./pages/Services.jsx";
import Pricing from "./pages/Pricing.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Layout>
  );
}
