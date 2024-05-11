const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://fahmihanafi680:ElYV3ayjmXUQJeXN@dbbackend.osjtpi9.mongodb.net/?retryWrites=true&w=majority&appName=dbBackend");

//check database connection
connect.then(() => {
    console.log("Database connected");
})
.catch(() => {
    console.log("Database not connected");
});

//create schema
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

//collection part
const collection = new mongoose.model("users",Loginschema);

module.exports = collection;