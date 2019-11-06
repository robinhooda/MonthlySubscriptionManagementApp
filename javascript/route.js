const express = require('express');
const router = express.Router();
const Store =require("../Model/upload");
const Quantity = require("../Model/quantity");
    
router.post("/alldata", (req, res) => {

    const note={username:req.body.username, address:req.body.address, mobileno:req.body.mobileno};
    
    console.log(note);
    const newStore = new Store({
        username:note.username,
        address:note.address,
        mobileno:note.mobileno
    })
    
    newStore.save().then(userdata=>{
        if(!userdata)
            return res.status(404).json({"error":"user notstored"})
            console.log(userdata);
            res.status(200).json({"success":"user stored successfully"})
    })
    .catch(err => console.log(err)); 
                
});
            // col.collection("information").insertOne(store, function (err, result) {
            //     console.log("successful");
            // if (err) throw err;
router.post("/Quantityperday",(req,res)=>{
    console.log("here");
    const storedata= {username:req.body.username, date:req.body.date, quantity:req.body.quantity};
    
    const newQuantity = new Quantity({
        username:storedata.username,
        date:storedata.date,
        quantity:storedata.quantity
    });

    newQuantity.save().then(quant=>{
        if(!quant)
        return res.status(404).json({"error":"Quantity is not stored"})
        console.log(quant);
        res.status(200).json({"success":"Quantity stored successfully"})
    })
    .catch(err => console.log(err));
});

   
router.get("/alldata", (req, res) => {
    Store.find()
        .then((h)=>{
            res.json({"res":h})
        })
});
router.get("/Quantityperday", (req, res) => {
    Quantity.find()
        .then((d)=>{
            console.log(d)
            res.json({"res":d});
        });
});
 
module.exports = router;