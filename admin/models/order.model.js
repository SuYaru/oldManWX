const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

var schema=new mongoose.Schema({
    orderId:mongoose.Schema.ObjectId,
    ordername: String,
    details:String,
    sdate:Date,
    fdate :Date,
    progress:String

});
schema.plugin(mongoosePaginate);
// const User = mongoose.model('Users', { name: String,password:String,age:Number });


module.exports=mongoose.model('Order',schema);;