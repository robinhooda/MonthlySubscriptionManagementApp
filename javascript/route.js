module.exports = (app, col) => {
    app.post("/alldata", (req, res) => {
        // console.log('/');
        const store={username:req.body.username, address:req.body.address, mobileno:req.body.mobileno};
        // const note = req;
        // console.log(note);
            col.collection("information").insertOne(store, function (err, result) {
                console.log("successful");
            if (err) throw err;
        });
        res.status(200).json({"success":"User Registred Successfully"});
    });
    app.post("/quantity",(req,res)=>{
        console.log(req.body);
        const milk= {username:req.body.username, month:req.body.month, quantity:req.body.quantity};
        col.collection("quantity").insertOne(milk, function (err, result) {
            console.log("quantity is added");
        if (err) throw err;
    });
    })

    app.get("/", (req, res) => {
        // console.log(req.parasm,postId);
        col.collection('information').find({}).toArray(function(err, document) {
            // console.log(document);
            
            res.send(document);
          });
    });
    app.get("/quantity", (req, res) => {
        // console.log(req.parasm,postId);
        col.collection('quantity').find({}).toArray(function(err, document) {
            // console.log(document);
            
            res.send(document);
          });
    });
 }