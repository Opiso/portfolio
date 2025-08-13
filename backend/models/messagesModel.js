const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    subject: {  type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    approved: { type: Boolean, default: false  },
}, {
    timestamps: true,   // Automatically manage createdAt and updatedAt fields
});

module.exports = mongoose.model("Message", messageSchema);