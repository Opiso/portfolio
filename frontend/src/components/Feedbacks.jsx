import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Feedbacks = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/user/message/approved`)
      .then((res) => setMessages(res.data.data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-gray-100">
      <div>
        <nav
          aria-label="breadcrumb"
          className="sticky top-0 bg-gray-100 flex justify-between items-center py-2 px-4 shadow z-10"
        >
          {/* Breadcrumbs */}
          <ol className="flex space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:underline text-blue-600 hover:text-blue-800">
                Back 
              </a>
              <span className="mx-1">/</span>
            </li>
            <li className="text-gray-500" aria-current="page">
              Feedbacks
            </li>
          </ol>
        </nav>
      </div>
      <div className="p-10" id="feedbacks">
        <h2 className="text-2xl font-bold mb-4">Feedbacks</h2>
        {messages.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className="bg-white p-4 mb-4 shadow rounded">
              <p>
                <strong>From:</strong> {msg.email}
              </p>
              <p>
                <strong>Subject:</strong> {msg.subject}
              </p>
              <p>
                <strong>Message:</strong> {msg.message}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Feedbacks;
