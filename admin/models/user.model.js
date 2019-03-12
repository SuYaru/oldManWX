const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

var schema=new mongoose.Schema({ name: String,password:String,age:Number });
schema.plugin(mongoosePaginate);
// const User = mongoose.model('Users', { name: String,password:String,age:Number });


module.exports=mongoose.model('User',schema);;