const express = require("express");
const router = express.Router();
const user = require("../models/userSchema")

router.post("/", async(req,res) => {
    const {username, password} = req.body;
    console.log(req.body);
    try {
        const loginUser = await user.findOne({username});
        console.log(loginUser)
        if(password === loginUser.password) {
            res.json({payload: loginUser});
        } else {
            throw "Password is incorrect";
        }

    } catch(e) {
        console.log(e);
        res.sendStatus(400)
    }


})
module.exports = router;