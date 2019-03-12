const mongoose = require('mongoose');
var News = require('../models/news.model');
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/sage03';

exports.creat = function(req,res,next){
    const person = new News(req.body);
    person.save().then(data=>res.json(data));
}

exports.update = function(req,res,next){
    const id = req.params.id;

    News.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
        res.json(data);
    })
}

exports.delete = function(req,res,next){
    const id = req.params.id;

    News.findByIdAndDelete(id,(err,data)=>{
        res.json(data);
    })
}

exports.list = function(req,res,next){
    var page = req.body.page?req.body.page:1;
    var limit = req.body.limit?req.body.limit:2;
    console.log(page,limit);//此时是string，应该转换为Number类型
    News.paginate({}, { page: +page, limit: +limit }, function(err, result) {
        res.json(result);
    });
}

exports.search = function(req,res,next){
    var id = req.params.id;
    News.findById(id).then(data=>{
        res.json(data);
    })
}

exports.sendnews = function(req,res,next){
    MongoClient.connect(DB_CONN_STR,(err,client)=>{
        var conn = client.db().collection('news');
        conn.find({title:'天气'}).toArray(function(err,results){
            res.json(results);
        })//寻找标题为天气的数据，传递至news.js文件路由文件中
        // conn.find({title:'天气'}).then(data=>{
        //     res.json(data);
        // })
    }); 
}