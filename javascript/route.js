module.exports = (app, col) => {
    app.post("/", (req, res) => {
        // console.log('/');
        console.log("run");
        const note={username:req.body.username, address:req.body.address, mobileno:req.body.mobileno};
        // const note = req;
        console.log(note);
            col.collection("information").insertOne(note, function (err, result) {
                console.log("successful");
            if (err) throw err;
        });
        res.status(200).send('successful');
    });

    app.get("/", (req, res) => {
        col.collection('information').findOne({username:"pradeep"}, function(err, document) {
            console.log(document.username);
            res.send(document);
          });
    });
 }