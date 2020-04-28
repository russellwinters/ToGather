const express = require("express");
const path = require("path");
const router = express.Router();



router.post("/create", (req,res) => {
    const payload = JSON.stringify({title: "hello"});


});


module.exports = router;
