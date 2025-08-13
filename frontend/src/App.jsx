import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Feedbacks from "./components/Feedbacks";
import AdminReview from "./components/Admin-Review";
import { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux';

const App = ({ message }) => {
  const {loading} = useSelector((state) => state.alerts);
  return (
    <div>
      {loading && (
        <div className="loader-parent m-3 bg-gray-100">
          <div className="loader"></div>
        </div>
      )}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            marginTop: "10px",
          },
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div id="navbar">
              <Home />
            </div>
          }
        />
        <Route
          path="/feedbacks"
          element={
            <div id="feedbacks">
              <Feedbacks />
            </div>
          }
        />
        <Route
          path="/admin-review"
          element={
            <div>
              <AdminReview />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
