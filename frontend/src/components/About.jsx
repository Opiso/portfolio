import React from "react";

function About() {
  return (
    <section
      id="about"
      className="px-6 py-12 md:px-12 lg:px-24 bg-gray-100 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-green-600 inline-block">
          ABOUT
        </h2>

        <div className="space-y-6 text-lg leading-relaxed bg-white shadow-lg rounded-lg p-6">
          <p>
            <span className="font-semibold text-green-700">Capis</span> — a
            passionate and versatile <strong>Software Developer</strong> and{" "}
            <strong>Network Engineer</strong> with a strong academic foundation
            in Electrical & Electronics Engineering, majoring in IT and
            Telecommunications.
          </p>

          <p>
            I am a certified <strong>HCIA - Datacom</strong> professional,
            skilled in designing, implementing, and troubleshooting modern
            network infrastructure. My background also includes hands-on
            experience with networking technologies from vendors like{" "}
            <strong>Huawei</strong> and <strong>Cisco</strong>, complemented by
            Linux system administration knowledge.
          </p>

          <p>
            In parallel with my networking expertise, I have completed multiple
            certifications in <strong>Software Development</strong>, focusing on
            technologies such as{" "}
            <strong>Python, Django, JavaScript, React, Node.js</strong>, and
            both <strong>SQL</strong> and <strong>NoSQL databases</strong>. I
            enjoy working across the stack and have built scalable full-stack
            applications using the <strong>MERN</strong> stack.
          </p>

          <p>
            My passion lies in solving real-world problems by bridging the gap
            between software systems and reliable digital infrastructure.
            Whether I’m building APIs or configuring network topologies, I bring
            a problem-solving mindset and a drive to deliver high-quality,
            secure, and efficient solutions.
          </p>

          <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-800">
              💡 Areas of Expertise:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Full-stack Web Development (MERN Stack, REST APIs)</li>
              <li>
                Enterprise Network Design & Management (Cisco, Huawei, Linux)
              </li>
              <li>Python Scripting & Automation</li>
              <li>Database Management (MongoDB, MySQL, PostgreSQL)</li>
              <li>Cloud & Virtualization Fundamentals (AWS, Docker)</li>
              <li>Cybersecurity Basics & Network Security</li>
            </ul>
            <div className="flex justify-center mt-7">
              <button className=" button-expand" style={{cursor: 'default'}}>
                Open To Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
