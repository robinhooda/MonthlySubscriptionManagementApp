const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const UploadSchema = new Schema({
 
 username:{
    type : String,
    required : true
},
Address:{
    type: String,
    required: true
},
 mobileno:{
     type : Number,
     required : true
 }
})

module.exports = Store = mongoose.model('information',UploadSchema);