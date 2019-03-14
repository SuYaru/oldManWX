const mongoose=require('mongoose');

var User= require('../models/user.model');

/* exports.create=function(req,res,next){
    const user=new User({name:'dadda',password:"2wer",age:23123});
    console.log(req.body);
    const user=new User(req.body);
    user.save().then((data)=>res.json(data));
} */
exports.create = function(req,res,next){
    const user = new User(req.body);
    var myDate = new Date();
    user.time = myDate;
    console.log(user);
    user.save().then(data=>res.json(data));
}

exports.update=function(req,res,next){
    const id=req.params.id;
    User.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
        //console.log(data);
        res.json(data);
    });
}
exports.remove=function(req,res,next){
    const id=req.params.id;
    User.findByIdAndDelete(id,(err,data)=>{
        res.json(data);
    });
}
exports.removes=function(req,res,next){
    const ids=req.body.ids.split(',');
    if(ids.length>0){
        User.deleteMany({_id:{$in:ids}}).then(data=>{
            res.json({"message":'所选数据已经被删除'});
        });
    }
}
exports.list=function(req,res,next){
    var page=req.body.page ?req.body.page:1;
    var rows=req.body.rows ? req.body.rows :10;

    var queryCondition = {};
    // console.log(req.body);
    // console.log(12313);
    if(req.body.name && req.body.name.trim().length>0){
      queryCondition = {
          "name": new RegExp(req.body.name,'i')
        }
    }

    // page limit 是字符串类型
    User.paginate(queryCondition,{page:+page,limit:+rows},function(err,result){
        result.rows=result.docs;
        delete result.docs;
        // console.log(result);
        res.json(result);
    });
    /* User.find().then(data=>{
        res.json(data);
    }); */
}

exports.getById=function(req,res,next){
    var id=req.params.id;
    //console.log(id);
    User.findById(id).then(data=>{
        res.json(data);
    });
}