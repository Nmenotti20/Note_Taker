// Import files and modules
const router = require("express").Router();
const store = require("../db/store");

// Establish apiRoutes 
router.get("./notes", (req, res) => {
    store
        .getNotes()
        .then((notes)   => res.json(notes))
        .catch((err) => res.status(500).json(err))
});

// API post request
router.post("./notes", (req, res) => {
    store
        .addNote(req.body)
        .then((notes)   => res.json(notes))
        .catch((err) => res.status(500).json(err))
});

router.delete("./notes:id", (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err))
});

// Export the module
module.exports = router
