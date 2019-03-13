const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

var schema = new mongoose.Schema({
    name:String,
    age:Number,
    birthday:Date,
    password:String,
    tel:Number,//电话z
    card:String,//身份证
    email:String,//邮箱
    interest:String,//兴趣爱好
    address:String,//住址
    sex:String,//性别
    know:Boolean,//是否了解本网站
    time:Date,//注册时间
});

schema.plugin(mongoosePaginate);
// const User = mongoose.model('Users', { name: String,password:String,age:Number });


module.exports=mongoose.model('User',schema);;