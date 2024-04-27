const TASKS = require("../model/taskModel.js");

// post ftn, C-- for create CRUD operations

const createTask = async(req,res)=>{
    const {title,description,tags} = req.body;
    req.body.createdBy = req.user.userId;

    if (!title || !description || !tags){
        res.status(400).json({success:false,
        message:"Please fill all fields"});
        return
    }
    try {
        await TASKS.create(req.body);
        res.status(201).json({success:true,
        message:"task created successfully"});
    } catch (error) {
        res.status(500).json(error)
    }
}

// get ftn, R--- FOR READ IN CRUD
const getAlltasksByUser = async (req,res)=>{
    const {userId} = req.user;
    try{
        const task = await TASKS.find({createdBy:userId}).
        populate("createdBy");
        res.status(200).json({success:true,mesaage:"users task",task})
    }catch (error) {
        res.status(500).json(error)

    }
}

// params fn, for getting a single task created by a user

const singleTask = async (req,res)=>{
    const {taskId} = req.params;
    const {userId} = req.user;

    try {
        const task = await TASKS.findOne({
            _id:taskId,
            createdBy: userId
        }).populate("createdBy");
        res.status(200).json({success:true,task})
    } catch (error) {
        res.status(500).json(error)
    }
}

// delet ftn, D --- for delete in CRUD operation

const deleteTask = async (req,res)=>{
    const {taskId} = req.params;
    const {userId} = req.user;

    try {
        await TASKS.findOneAndDelete({_id:taskId,createdBy:userId});
        res.status(200).json({success:true, message:"deleted successfully"})
    } catch (error) {
        res.status(500).json(error)
        
    }
}



// update ftn, U--- FOR UPDATE IN CRUD OPERATIONS
const updateTask = async(req,res)=>{
    const {taskId} = req.params;
    const {userId} = req.user;
    try {
        const task = await TASKS.findOneAndUpdate({_id:taskId,createdBy:userId},req.body,{new:true,runValidators:true}).populate("createdBy");res.status(200).json({success:true,task,message:"task updated successfully"})
    } catch (error) {
        res.status(500).json(error)
        
    }
} 




module.exports = {
    createTask,
    getAlltasksByUser,
    singleTask,
    deleteTask,
    updateTask
}