const express = require('express');
const { createTask, getAlltasksByUser, singleTask, deleteTask, updateTask } = require("../controller/taskController.js");
const router = express.Router();
const auth = require("../middleware/auth.js")

// post request
router.post("/task",auth,createTask);
// Get request ---- for getting user task
router.get("/task/:userId",auth,getAlltasksByUser);

// params for singleTask 
router.get("/singletask/:taskId",auth,singleTask)

// delet resquest, D--- for delete in CRUD
router.delete("/deletetask/:taskId",auth,deleteTask)

// update request, U ---- for update in CRUD
router.patch("/updatetask/:taskId",auth,updateTask)

module.exports = router;