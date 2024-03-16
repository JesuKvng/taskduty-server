const mongoose = require("mongoose");
const DB_URI = process.env.MONGDB_URI
const connect = async()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log("mongoDb coonected successfully");
    } catch (error) {
        console.log(error);
    
    }
}
module.exports = connect