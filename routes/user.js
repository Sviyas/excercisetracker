import express from "express";

const Users = express.Router();

Users.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
});


// Users.post



export default Users;