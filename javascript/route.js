const express = require('express');
const router = express.Router();
const Store =require("../Model/upload");

    router.post("/alldata", (req, res) => {
        // console.log('/');
        // const store={username:req.body.username, address:req.body.address, mobileno:req.body.mobileno};
        const note = req.body;
        console.log(note);
            const newStore = new Store({
                username:note.username,
                address:note.address,
                mobileno:note.mobileno
            })
            newStore.save().then(cust=>{
                if(!cust)
                return res.status(404).json({"error":"user notstored"})
                console.log(user);
                res.status(200).json({"success":"user stored successfully"})
              })
              .catch(err => console.log(err)); 
                
            })
            // col.collection("information").insertOne(store, function (err, result) {
            //     console.log("successful");
            // if (err) throw err;
    // app.post("/Quantityperday",(req,res)=>{
    //     console.log(req.body);
    //     const storedata= {username:req.body.username, date:req.body.date, quantity:req.body.quantity};
    //     col.collection("Quantityperday").insertOne(storedata, function (err, result) {
    //         console.log("quantity is added");
    //     if (err) throw err;
    // });
    // })
   
    router.get("/alldata", (req, res) => {
        Store.find({}).toArray(function(err, document) {
            // console.log(document);
            res.send(document);
          });
    });
    // app.get("/Quantityperday", (req, res) => {
    //     col.collection('Quantityperday').find({}).toArray(function(err, document) {
    //         // console.log(document); 
    //         res.send(document);
    //       });
    // });
 module.exports = router;