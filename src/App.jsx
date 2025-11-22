import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout"; // fixed: was ./components/Layout
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Contact from "./pages/Contact.jsx"; // fixed: was Contacts
import News from "./pages/News.jsx";
import Services from "./pages/Services.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Layout>
  );
}
