import React, { useState } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import Background from "../../src/assets/bg_pic.jpg";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function Contact() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const ADMIN_KEY = import.meta.env.VITE_REVIEW_KEY;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/message`,
        { subject, email, message },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data.success) {
        toast.success(
          "Message sent. The admin will contact you shortly via Email"
        );
        setSubject("");
        setEmail("");
        setMessage("");
        navigate("/");
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Failed to contact admin");
    }
  };
  return (
    <section
      id="contact"
      className="px-6 py-12 md:px-12 lg:px-24 bg-gray-100 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-green-600 inline-block">
          CONTACT
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Get in Touch
            </h3>
            <p className="mb-4">
              If you have any questions or just want to say hi, feel free to
              reach out!
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-medium text-blue-600">📞 Call:</span>{" "}
                <span className="text-gray-700">0706641957</span>
              </p>
              <p>
                <span className="font-medium text-blue-600">📧 Email:</span>{" "}
                <span className="text-gray-700">capisokoth@gmail.com</span>
              </p>
            </div>

            <div className="relative mt-6 rounded-lg overflow-hidden group aspect-[4/4]">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-300"
                style={{
                  backgroundImage: `url(${Background})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
              <div className="relative p-6 z-20 text-white h-full flex flex-col  justify-center">
                <h5 className="text-lg font-semibold mb-2">Follow Me:</h5>
                <div className="flex justify-around space-x-4 text-2xl">
                  <a
                    href="https://wa.me/+254706641957/?text=Capis+Here,+thank+you"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-300 hover:text-green-600"
                  >
                    <FaWhatsapp />{" "}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/capis-otieno-506526332/"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-blue-700 hover:text-blue-900"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/Opiso"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-gray-700 hover:text-gray-900"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Message Me
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">
                 Subject: 
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
