import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo / Name */}
        <div className="text-xl font-semibold mb-4">I am Capis Otieno</div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row flex-wrap md:justify-center items-center gap-4 mb-6 text-sm text-gray-300">
          <a
            href="#navbar"
            className="cursor-pointer hover:underline hover:text-blue-300 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-pointer hover:underline hover:text-blue-300 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="cursor-pointer hover:underline hover:text-blue-300 transition"
          >
            Contact
          </a>
          <a
            href="#skills"
            className="cursor-pointer hover:underline hover:text-blue-300 transition"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="cursor-pointer hover:underline hover:text-blue-300 transition"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="cursor-pointer hover:underline hover:text-blue-300 transition"
          >
            Projects
          </a>
        </nav>
        <div className="flex justify-center ">
          <a
            href="/feedbacks"
            className="me-3 text-white-600 text-2xl cursor-pointer hover:underline hover:text-blue-600 transition"
          >
            Feedbacks
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6 text-2xl">
          <a
            href="https://wa.me/+254706641957/?text=Thanks+for+reaching+Capis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition bi bi-whatsapp"
          />
          <a
            href="https://www.linkedin.com/in/capis-otieno-506526332/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition bi bi-linkedin"
          />
          <a
            href="https://github.com/Opiso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition bi bi-github"
          />
          <a
            href="#"
            className="text-red-400 hover:text-red-500 transition bi bi-x"
          />
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; 2025 Capis Otieno. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
