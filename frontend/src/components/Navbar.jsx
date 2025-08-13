import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import profile from "../../src/assets/capital.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const spacerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    const spacer = spacerRef.current;

    if (!row1 || !row2 || !spacer) {
      console.warn("One or more refs not set yet");
      return;
    }

    const topRowHeight = row1.offsetHeight;
    const row2Height = row2.offsetHeight;

    setOffsetY(row2Height);

    const handleScroll = () => {
      if (window.scrollY >= topRowHeight) {
        row2.classList.add("fixed", "top-0", "z-50", "bg-black", "w-[100%]");
        spacer.style.display = "block";
        spacer.style.height = `${row2Height * 0.5}px`;
      } else {
        row2.classList.remove("fixed", "top-0", "z-50", "bg-black");
        spacer.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = (onClick) => (
    <>
      <Link
        to="about"
        smooth
        offset={-offsetY}
        duration={500}
        className="cursor-pointer hover:underline hover:text-blue-300 me-4"
        onClick={onClick}
      >
        About
      </Link>
      <Link
        to="skills"
        smooth
        offset={-offsetY}
        duration={500}
        className="cursor-pointer hover:underline hover:text-blue-300 me-4"
        onClick={onClick}
      >
        Skills
      </Link>
      <Link
        to="experience"
        smooth
        duration={500}
        offset={-offsetY}
        className="cursor-pointer hover:underline hover:text-blue-300 me-4"
        onClick={onClick}
      >
        Experience
      </Link>
      <Link
        to="projects"
        smooth
        offset={-offsetY}
        duration={500}
        className="cursor-pointer hover:underline hover:text-blue-300 me-4"
        onClick={onClick}
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth
        offset={-offsetY}
        duration={500}
        className="cursor-pointer hover:underline hover:text-blue-300"
        onClick={onClick}
      >
        Contact
      </Link>
    </>
  );

  return (
    <div className="bg-green-800 mb-3">
      <div className="row">
        <div className="row1 text-center" ref={row1Ref}>
          <div className=" flex justify-center items-center text-center">
            <img
              className="mt-1 w-[15%] aspect-square object-cover rounded-full "
              src={profile}
              alt="CAPIS"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <p className="p-3 text-white">Capis Otieno</p>
          <div className="flex justify-center">
            {" "}
            <hr className="text-white w-[50%] " />
          </div>
          <div className="text-center mt-4 text-gray-300">
            SOFTWARE | NETWORKS | ELECTRICAL ENGINEERING
          </div>
        </div>
        <div
          className="row2 flex flex-col md:flex-row md:justify-center justify-start w-full"
          ref={row2Ref}
        >
          <div className="md:flex justify-center text-white hidden">
            <div className="m-3 p-2">{navLinks()}</div>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex flex-col">
            <div className="flex justify-start md:hidden p-3 text-white">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            {/* Mobile Dropdown */}
            {isOpen && (
              <div
                ref={mobileMenuRef}
                className="flex flex-col ms-3 text-white bg-green-900 py-4 md:hidden space-y-4"
              >
                {navLinks(() => setIsOpen(false))}
              </div>
            )}
          </div>
        </div>
        <div className="spacer bg-black" ref={spacerRef}></div>
      </div>
    </div>
  );
};

export default Navbar;
