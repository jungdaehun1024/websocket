"use strict"
module.exports = (app)=>{
    const express = require("express");
    const router = express.Router();
    const mainController = require("../controller/mainController");
    
    router.get("/",mainController.index);    

    app.use("/", router);
}