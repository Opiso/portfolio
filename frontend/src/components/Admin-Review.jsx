// pages/AdminReview.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const ADMIN_KEY = import.meta.env.VITE_REVIEW_KEY;

function AdminReview() {
  const [messages, setMessages] = useState([]);
  const [searchParams] = useSearchParams();
  const accessKey = searchParams.get("key");

  useEffect(() => {
    if (accessKey !== ADMIN_KEY) {
      toast.error("Unauthorized Access");
      return;
    }
    axios
      .get(
        `${
          import.meta.env.VITE_API_URL
        }/api/user/message/pending?key=${ADMIN_KEY}`
      )
      .then((res) => setMessages(res.data.data))
      .catch(console.error);
  }, [accessKey]);
  if (accessKey !== ADMIN_KEY) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        You are not authorized to view this page.
      </div>
    );
  }

  const approveMessage = async (id) => {
    await axios.post(
      `${
        import.meta.env.VITE_API_URL
      }/api/user/message/${id}/approve?key=${ADMIN_KEY}`
    );
    setMessages(messages.filter((msg) => msg._id !== id));
  };

  return (
    <div className="bg-gray-100 p-10" id="admin-review">
           <div >
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
      <h2 className="text-2xl font-bold mb-4">Pending Messages</h2>
      {messages.length === 0 ? (
        <div>No pending messages</div>
      ) : (
        <div>
          {messages.map((msg) => (
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
              <button
                onClick={() => approveMessage(msg._id)}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminReview;
