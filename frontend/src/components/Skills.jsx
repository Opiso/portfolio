import React from "react";

function Skills() {
  return (
    <section className="px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-green-600 inline-block">
          SKILLS
        </h2>

        {/* Technical Skills */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">
            Technical Skills
          </h3>

          <div className="mb-4">
            <h4 className="text-lg font-medium text-gray-700 mb-2">
              Software Development
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML/CSS",
                "JavaScript",
                "Python",
                "React",
                "Node",
                "Express",
                "Django",
                "MongoDB",
                "MySQL",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-green-200 text-green-900 text-sm rounded-full font-medium hover:bg-green-300 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-2">Networks</h4>
            <div className="flex flex-wrap gap-2">
              {["HCIA - Datacom", "CCNA", "CyberOps"].map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-200 text-blue-900 text-sm rounded-full font-medium hover:bg-blue-300 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Communication",
              "Team work",
              "Quick Learner",
              "Multitasking",
              "Exploring new Challenges",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-yellow-200 text-yellow-900 text-sm rounded-full font-medium hover:bg-yellow-300 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
