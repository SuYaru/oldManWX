const mongoose = require('mongoose');
var Info = require('../models/info.model');

exports.creat = function(req,res,next){
    const person = new Info(req.body);
    var myDate = new Date();
    person.time = myDate.toLocaleString();
    person.save().then(data=>res.json(data));
}

exports.update = function(req,res,next){
    const id = req.params.id;

    Info.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
        res.json(data);
    })
}

exports.delete = function(req,res,next){
    const id = req.params.id;

    Info.findByIdAndDelete(id,(err,data)=>{
        res.json(data);
    })
}

exports.deleteChoose = function(req,res,next){
    const ids = req.body.ids.split(',');
    if(ids.length>0){
        Info.remove({_id: {$in:ids}}).then(data=>{
            res.json({'message':'已删除'})
        })
    }
}

exports.list = function(req,res,next){
    var page = req.body.page?req.body.page:1;
    var rows = req.body.rows?req.body.rows:10;

    var queryCondition = {};
    console.log(req.body);
    if(req.body.name && req.body.name.trim().length>0){
        queryCondition = {
            "name": new RegExp(req.body.name,'i')
        }
    };
    
    //console.log(page,limit);//此时是string，应该转换为Number类型
    Info.paginate(queryCondition, { page: +page, limit: +rows }, function(err, result) {
        result.rows = result.docs;
        delete result.docs;
        res.json(result);
    });
}

exports.search = function(req,res,next){
    var id = req.params.id;
    Info.findById(id).then(data=>{
        res.json(data);
    })
}