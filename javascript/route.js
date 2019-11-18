const express = require('express');
const router = express.Router();
const Store =require("../Model/upload");
const Quantity = require("../Model/quantity");
const logic = require('./logic');
  
// This post method used for storing customer data from database
router.post("/alldata", (req, res) => {

    const note={username:req.body.username, address:req.body.address, mobileno:req.body.mobileno};
    // Display on console
    console.log(note);

    const newStore = new Store({ 
        username:note.username,
        address:note.address,
        mobileno:note.mobileno
    });
    // Save data
    newStore.save().then(userdata=>{
        if(!userdata)
            return res.status(404).json({"error":"user not stored"});
            res.status(200).json({"success":"user stored successfully"});
    })
    // if error is occured 
    .catch(err => console.log(err));              
});
// Fetching all data from database
router.get("/alldata", (req, res) => {
    Store.find()
        .then(result=>{
            res.json(result);
        });
});
   
// this post method for storing quantity into database
router.post("/quantities",(req,res)=>{
    
    const storedata= {username:req.body.username, date:req.body.date, quantity:req.body.quantity};
    
    const newQuantity = new Quantity({
        username:storedata.username,
        date:storedata.date,
        quantity:storedata.quantity
    });
    // save data
    newQuantity.save().then(quant=>{
        if(!quant)
        return res.status(404).json({"error":"Quantity is not stored"});
        res.status(200).json({"success":"Quantity stored successfully"});
    })
    // if error is occured
    .catch(err => console.log(err));
});

// Fetching quantity related data from database
router.get("/quantities", (req, res) => {
    Quantity.find()
        .then(document=>{
            const d = logic.findQuantity(document);
            const b = logic.findUserQuantity(document);
            res.send({document, d, b});
        });
});

// exports router module
module.exports = router;