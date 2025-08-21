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
                Technical IT Officer, ICT Authority 
              </h3>
              <p className="text-md text-gray-800 mb-2">📍 Nairobi, Kenya</p>
              <p className="text-sm text-gray-500 mb-2">Jan 2025 – Present</p>
              <ul className="list-none list-inside">
                <li className="before:content-['✓'] before:text-green-600 before:mr-2">Software development, scripting, and system integration</li>
                <li className="before:content-['✓'] before:text-green-600 before:mr-2">
                  Network setup, monitoring and troubleshooting in real
                  enterprise IT environments.
                </li>
                <li className="before:content-['✓'] before:text-green-600 before:mr-2">
                  {" "}
                  Cybersecurity Best Practices: Implementing basic security
                  measures in network setups, ensuring safe data flow, and
                  performing vulnerability assessments.
                </li>
                <li className="before:content-['✓'] before:text-green-600 before:mr-2">
                  Automation and Scripting: Writing Python and Bash scripts for
                  task automation and system integration, improving workflow
                  efficiency.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Item 2  */}
          <div className="mb-10 ml-6">
            <span className="absolute w-4 h-4 bg-green-600 rounded-full -left-2 top-1.5"></span>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800">
                Electrical & IT Technician, Contract {" "}
              </h3>
              <p className="text-md text-gray-800 mb-2">📍 Oyugis, Kenya</p>
              <p className="text-sm text-gray-500 mb-2">Jan 2023 – Mar 2024</p>
              <ul className="list-none list-inside">
                <li className="before:content-['✓'] before:text-green-600 before:mr-2">
                  Installation and maintenance of electrical systems including
                  wiring, power backups (inverters), and lighting for homes and
                  small businesses.{" "}
                </li>
                <li className="before:content-['✓'] before:text-green-600 before:mr-2">
                  {" "}
                  Providing IT support services such as setting up computers,
                  home routers, printers, and CCTV systems for clients.
                </li>
                <li className="before:content-['✓'] before:text-green-600 before:mr-2">
                  {" "}
                  Diagnosing and repaired faults in both electrical circuits
                  and IT hardware, ensuring minimal downtime.
                </li>
                <li className="before:content-['✓'] before:text-green-600 before:mr-2">
                  Providing advisory services to clients on energy-efficient
                  solutions and best practices for equipment usage and digital
                  safety.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
