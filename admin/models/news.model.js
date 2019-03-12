const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

var schema=new mongoose.Schema({ title: String,content:String});
schema.plugin(mongoosePaginate);
// const User = mongoose.model('Users', { name: String,password:String,age:Number });


module.exports=mongoose.model('News',schema);;