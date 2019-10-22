module.exports = (app, col) => {
    app.post("/", (req, res) => {
        // console.log('/');
        const note={req.email;
        // console.log(email)
        // console.log(req);
            col.collection("information").insertOne(note, function (err, result) {
            if (err) throw err;
            col.close();
        });
        res.status(200).send('successful');
    });

    // app.get("/api", (req, res) => {
    //     col.collection('Questions').findOne({test_id: 1}, function(err, document) {
    //         console.log(document)
    //         res.send(document);
    //       });
    // });
 }