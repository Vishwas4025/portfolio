import React from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Projects from "./comps/Projects";
import SkillsSection from "./comps/SkillsSection";
import Hero from "./comps/Hero";
import Education from "./comps/Education";
import Contact from "./comps/Contact";
// import ResumePage from "./comps/ResumePage";

const Home = () => {
  return (
    <Box
      bgGradient="linear(45deg, rgb(126, 99, 99), rgb(75, 9, 9))"
      color="white"
      minH="100vh"
      px={6}
      pt="80px" // Adds space so content doesn't hide under fixed navbar
    >
      {/* Assigning IDs to sections for smooth scrolling */}
      <Box id="hero"><Hero /></Box>
      <Box id="education"><Education /></Box>
      <Box id="projects"><Projects /></Box>
      <Box id="skills"><SkillsSection /></Box>
      <Box id="contact"><Contact /></Box>
    </Box>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Fixed Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/resume" element={<ResumePage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;