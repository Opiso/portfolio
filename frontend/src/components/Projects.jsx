import React, { useEffect, useRef, useState } from "react";
import Portfolio from "../../src/assets/portfolio.JPG";
import Wellpoint from "../../src/assets/wellpoint.JPG";
import Blogsite from "../../src/assets/blogsite.JPG";
import Poncho from "../../src/assets/poncho.JPG";

function Projects() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [showReadmoreBtn1, setshowReadmoreBtn1] = useState(false);
  const ref1 = useRef(null);

  const [isExpanded2, setIsExpanded2] = useState(false);
  const [showReadmoreBtn2, setshowReadmoreBtn2] = useState(false);
  const ref2 = useRef(null);

  const [isExpanded3, setIsExpanded3] = useState(false);
  const [showReadmoreBtn3, setshowReadmoreBtn3] = useState(false);
  const ref3 = useRef(null);

  useEffect(() => {
    if (ref1.current) {
      setshowReadmoreBtn1(
        ref1.current.scrollHeight > ref1.current.clientHeight
      );
    }
    if (ref2.current) {
      setshowReadmoreBtn2(
        ref2.current.scrollHeight > ref2.current.clientHeight
      );
    }
    if (ref3.current) {
      setshowReadmoreBtn3(
        ref3.current.scrollHeight > ref3.current.clientHeight
      );
    }
  }, []);

  const descriptionStyles = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  return (
    <section className="bg-gray-100 px-6 py-12 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-green-600 inline-block">
          PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-5">
            <img
              src={Portfolio}
              alt="Portfolio"
              className="w-full h-40 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-108 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p>
              {" "}
              <span ref={ref1} style={!isExpanded1 ? descriptionStyles : {}}>
                This is a personal portfolio website built using React,
                showcasing my skills and projects.
              </span>
              {showReadmoreBtn1 && (
                <span
                  onClick={() => setIsExpanded1(!isExpanded1)}
                  className="text-blue-400 mt-0 hover:underline hover:cursor-pointer hover:text-blue-700"
                >
                  {isExpanded1 ? "Read Less" : "Read More..."}
                </span>
              )}
            </p>
            <a
              href=""
              className="inline-block mt-4 px-4 py-2 border border-green-800 text-green-800 rounded hover:bg-green-800 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-5">
            <img
              src={Wellpoint}
              alt="Pisto WellPoint"
              className="w-full h-40 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-108 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Pisto WellPoint</h3>
            <p>
              <span ref={ref2} style={!isExpanded2 ? descriptionStyles : {}}>
                A  trusted space for connecting with highly experienced doctors. 
                We make healthcare access simple, smart, and secure.
              </span>
              {showReadmoreBtn2 && (
                <span
                  onClick={() => setIsExpanded2(!isExpanded2)}
                  className="text-blue-400 mt-1 hover:underline hover:cursor-pointer hover:text-blue-700"
                >
                  {isExpanded2 ? "Read Less" : "Read More..."}
                </span>
              )}
            </p>
            <a
              href=""
              className="inline-block mt-4 px-4 py-2 border border-green-800 text-green-800 rounded hover:bg-green-800 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-5">
            <img
              src={Blogsite}
              alt="Capital Blogs"
              className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out hover:scale-108"
            />
            <h3 className="text-xl font-semibold mb-2">Capital Blogs</h3>
            <p>
              <span ref={ref2} style={!isExpanded2 ? descriptionStyles : {}}>
                The website allows users to create, edit, and publish blog
                posts. It includes features like user authentication, comments,
                categories, and an admin dashboard for content management.
              </span>
              {showReadmoreBtn2 && (
                <span
                  onClick={() => setIsExpanded2(!isExpanded2)}
                  className="text-blue-400 mt-1 hover:underline hover:cursor-pointer hover:text-blue-700"
                >
                  {isExpanded2 ? "Read Less" : "Read More..."}
                </span>
              )}
            </p>
            <a
              href=""
              className="inline-block mt-4 px-4 py-2 border border-green-800 text-green-800 rounded hover:bg-green-800 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-5">
            <img
              src={Poncho}
              alt="Poncho Stores"
              className="w-full h-40 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-108 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Poncho Stores</h3>
            <p>
              <span ref={ref3} style={!isExpanded3 ? descriptionStyles : {}}>
                This is an online platform that enables users to browse, search,
                and purchase products. It includes user registration, product
                listings, shopping cart, secure checkout, and order tracking.
              </span>
              {showReadmoreBtn3 && (
                <span
                  onClick={() => setIsExpanded3(!isExpanded3)}
                  className="text-blue-400 mt-1 hover:underline cursor-pointer hover:text-blue-700"
                >
                  {isExpanded3 ? "Read Less" : "Read More..."}
                </span>
              )}
            </p>
            <a
              href=""
              className="inline-block mt-4 px-4 py-2 border border-green-800 text-green-800 rounded hover:bg-green-800 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
