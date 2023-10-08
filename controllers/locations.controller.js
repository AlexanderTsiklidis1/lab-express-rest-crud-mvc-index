const express = require("express");


const locations = express.Router();

const locationsData = require("../models/location.model");


locations.get("/", (req, res) => {
   
    console.log("sending all locations data")
    
    res.json(locationsData);
})

module.exports = locations;