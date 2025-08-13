import React from "react";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-100 px-6 py-12 md:px-12 lg:px-24 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 border-b-4 border-green-600 inline-block">
          WORK
        </h2>

        <div className="relative border-l-4 border-green-600 ml-4">
          <div className="mb-10 ml-6">
            <span className="absolute w-4 h-4 bg-green-600 rounded-full -left-2 top-1.5"></span>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800">
                Intern at ICT Authority - Kenya
              </h3>
              <p className="text-sm text-gray-500 mb-2">Jan 2025 – Present</p>
              <ul className="list-disc list-inside">
                <li>Software development, scripting, and system integration</li>
                <li>
                  Network setup, monitoring and troubleshooting in real
                  enterprise IT environments.
                </li>
                <li>
                  {" "}
                  Cybersecurity Best Practices: Implementing basic security
                  measures in network setups, ensuring safe data flow, and
                  performing vulnerability assessments.
                </li>
                <li>
                  Automation and Scripting: Writing Python and Bash scripts for
                  task automation and system integration, improving workflow
                  efficiency.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Item 2 */}
          {/* <div className="mb-10 ml-6">
            <span className="absolute w-4 h-4 bg-green-600 rounded-full -left-2 top-1.5"></span>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800">Freelance Software Developer</h3>
              <p className="text-sm text-gray-500 mb-2">Jan 2024 – Dec 2024</p>
              <p>
                Worked on a variety of projects in both frontend and backend development while also building my design skills.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Experience;
