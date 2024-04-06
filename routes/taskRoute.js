const express = require('express');
const { createTask, getAlltasksByUser } = require("../controller/taskController.js");
const router = express.Router();
const auth = require("../middleware/auth.js")

// post request
router.post("/task",auth,createTask);
// Get request ---- for getting user task
router.get("/task/:userId",auth,getAlltasksByUser);

module.exports = router;