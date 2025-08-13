import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Feedbacks from "./components/Feedbacks";
import AdminReview from "./components/Admin-Review";

const App = ({ message }) => {
  return (
    <div>
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
