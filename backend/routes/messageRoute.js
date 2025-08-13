require("dotenv").config();
const express = require("express");
const router = express.Router();
const Message = require("../models/messagesModel");
const { dot } = require("node:test/reporters");

router.post("/message", async (req, res) => {
  const { subject, email, message } = req.body;

  if (!subject || !email || !message) {
    return res
      .status(400)
      .send({ success: false, message: "All fields are required" });
  }

  try {
    const newMessage = new Message({
      subject,
      email,
      message,
      approved: false,
    });
    await newMessage.save();
    res
      .status(201)
      .send({ success: true, message: "Message sent successfully" });
  } catch (error) {
        console.error("Error saving message:", error); 
    res.status(500).send({ success: false, message: "Server error", error: error.message });
  }
});

// Approve message by ID
router.post("/message/:id/approve", async (req, res) => {
  const key = req.query.key;
  if (key !== process.env.REVIEW_KEY) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const updated = await Message.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    res.json({ success: true, message: "Approved", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Fetch all unapproved messages (for review UI)
router.get("/message/pending", async (req, res) => {
  const key = req.query.key;
  if (key !== process.env.REVIEW_KEY) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const pendingMessages = await Message.find({ approved: false });
    res.json({ success: true, data: pendingMessages });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// routes/message.js
router.get("/message/approved", async (req, res) => {
  try {
    const approvedMessages = await Message.find({ approved: true }).sort({ createdAt: -1 });
    res.json({ success: true, data: approvedMessages });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});


module.exports = router;
