module.exports = (app, col) => {
    app.post("/", (req, res) => {
        // console.log('/');
        
        const store={username:req.body.username, address:req.body.address, mobileno:req.body.mobileno};
        // const note = req;
        // console.log(note);
            col.collection("information").insertOne(store, function (err, result) {
                console.log("successful");
            if (err) throw err;
        });
       
        res.status(200).send('successful');
    });
    // app.put("/",(req,res)=>{
    //     console.log("run");
    //     const milk={quantity:req.body.quantity};
    //     col.collection("information").insertOne(milk, function (err, result) {
    //         console.log("quantity is added");
    //     if (err) throw err;
    // });
    // })
    

    app.get("/", (req, res) => {
        // console.log(req.parasm,postId);
        col.collection('information').find({}).toArray(function(err, document) {
            // console.log(document);
            
            res.send(document);
          });
    });
 }