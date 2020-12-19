// Import files and modules
const { Router } = require("express");
const path = require("path");
const router = require("express").Router();

// Establish htmlRoutes
// Get request for notes to return the notes to 'notes.html' file located inside the 'public' directory
router.get("./notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// Get request for all other requests to return to the 'index.html' file located inside the 'public' directory
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// Export the module
module.exports = router


