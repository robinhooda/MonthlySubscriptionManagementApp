const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const QuantityUploadSchema = new Schema({
    username:{
        type: String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    quantity:{
        type: Number,
        required:true
    }
})
module.exports = Quantity = mongoose.model('quantity',QuantityUploadSchema);