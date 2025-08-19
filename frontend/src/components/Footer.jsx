import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const smoothScroll = (targetEl, duration) => {
      const target = document.querySelector(targetEl);
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    };

    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        smoothScroll(href, 500); 
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-xl font-semibold mb-4">I am Capis Otieno</div>

        <nav className="flex flex-col md:flex-row flex-wrap md:justify-center items-center gap-4 mb-6 text-sm text-gray-300">
          <a href="#navbar" className="cursor-pointer hover:underline hover:text-blue-300 transition">Home</a>
          <a href="#about" className="cursor-pointer hover:underline hover:text-blue-300 transition">About</a>
          <a href="#contact" className="cursor-pointer hover:underline hover:text-blue-300 transition">Contact</a>
          <a href="#skills" className="cursor-pointer hover:underline hover:text-blue-300 transition">Skills</a>
          <a href="#experience" className="cursor-pointer hover:underline hover:text-blue-300 transition">Experience</a>
          <a href="#projects" className="cursor-pointer hover:underline hover:text-blue-300 transition">Projects</a>
        </nav>

        <div className="flex justify-center ">
          <a href="/feedbacks" className="me-3 text-white-600 text-2xl cursor-pointer hover:underline hover:text-blue-600 transition">Feedbacks</a>
        </div>

        <div className="flex justify-center gap-4 mb-6 text-2xl">
          <a href="https://wa.me/+254706641957/?text=Thanks+for+reaching+Capis" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 transition bi bi-whatsapp" />
          <a href="https://www.linkedin.com/in/capis-otieno-506526332/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition bi bi-linkedin" />
          <a href="https://github.com/Opiso" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition bi bi-github" />
          <a href="#" className="text-red-400 hover:text-red-500 transition bi bi-x" />
        </div>

        <p className="text-sm text-gray-500">
          &copy; 2025 Capis Otieno. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
