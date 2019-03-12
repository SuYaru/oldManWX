const mongoose=require('mongoose');

var News= require('../models/news.model');

exports.create=function(req,res,next){
    /* const user=new User({name:'dadda',password:"2wer",age:23123}); */
    console.log(12313);
    const news=new News(req.body);
    news.save().then((data)=>res.json(data));
}

exports.update=function(req,res,next){
    const id=req.params.id;
    News.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
        console.log(data);
        res.json(data);
    });
}
exports.remove=function(req,res,next){
    const id=req.params.id;
    News.findByIdAndDelete(id,(err,data)=>{
        res.json(data);
    });
}
exports.list=function(req,res,next){
    var page=req.body.page ?req.body.page:1;
    var limit=req.body.limit ? req.body.limit :1;

    // page limit 是字符串类型
    News.paginate({},{page:+page,limit:+limit},function(err,results){
        res.json(results);
    });
    /* User.find().then(data=>{
        res.json(data);
    }); */
}

exports.getById=function(req,res,next){
    var id=req.params.id;
    News.findById(id).then(data=>{
        res.json(data);
    });
}