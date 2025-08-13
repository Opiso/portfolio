require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/dbConfig");
const messageRoute = require("./routes/messageRoute");
const PORT = process.env.PORT || 5000;
const app = express();
const path = require("path");


const allowedOrigins = (process.env.FRONTEND_URLS?.split(",") || []).map(
  (origin) => origin.trim().replace(/\/+$/, "")
);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie"],
  })
);

app.use(express.json());

app.use("/api/user", messageRoute);

// Serve static files (for React app in the 'dist' folder)
app.use(express.static(path.join(__dirname, "dist")));

// // Catch-all route to serve index.html for React Router to handle frontend navigation
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/", (req, res) => {
  res.send("✅Hello World!! Backend is Smoothly running!");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
