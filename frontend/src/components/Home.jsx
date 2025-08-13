import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import AdminReview from "./Admin-Review";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";

const Home = () => {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHomepage = async () => {
      try {
        dispatch(showLoading());
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/`);
        dispatch(hideLoading());
        setMessage(response.data);
      } catch (err) {
        dispatch(hideLoading());
        console.error("Fetch failed", err);
        setError(true);
      }
    };

    fetchHomepage();
  }, []);

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
