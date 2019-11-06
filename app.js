const express =require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pratiksha:rBBM2fscP3UQnk4H@cluster0-8sqx5.mongodb.net/admin?retryWrites=true&w=majority";
const app = express();
const port = 3217;
const mongoose = require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser')

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
                    .then(() => console.log('Connected to MongoDB Successfully......'))
                    .catch(err => console.log('Error occured while connecting MongoDB '+err));

console.log("connect");
app.use('/', require('./javascript/route'));
app.listen(port, () => {
console.log("Port 3217 running on browser...");
});
