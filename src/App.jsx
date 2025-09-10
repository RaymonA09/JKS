import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout"; // fixed: was ./components/Layout
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import Contact from "./Pages/Contact"; // fixed: was Contacts
import News from "./Pages/News";
import Services from "./Pages/Services";

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
