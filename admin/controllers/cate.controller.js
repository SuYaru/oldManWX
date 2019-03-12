const mongoose = require('mongoose');
var Cate = require('../models/cate.model');

  exports.create = function(req, res, next) {
      console.log(675675);
      const cate = new Cate(req.body);
      cate.save().then((data) => res.json(data));
  }

  exports.update = function(req,res,next){
    const id = req.params.id;

    Cate.findByIdAndUpdate(id,{$set: req.body},{new:false}).then(data=>{
      res.json(data);
    })
  }

  exports.remove = function(req,res,next){

  }

  // pid === parentId
  function reverseTree(data,pid){

    var result = [], temp;

    // data的对象是什么对象？model数据模型的对象
    // 数据模型的对象转成字符串，再转成对象，而这时候的对象变成了JsonObject
    var data = JSON.parse(JSON.stringify(data));
    for(var i in data){
      if(data[i].parentId === pid){ // 如果查询到的对象内容的parentId和传递过来的pid是相同的
          result.push(data[i]);
          temp = reverseTree(data,data[i]._id);
          if(temp.length >0){
            data[i].children = temp;
          }
      }
    }
    return result;
  }

  exports.list = function(req,res,next){
    var type = req.params.type;
    console.log(type);
    Cate.find({type:type},function(err,data){
      console.log(data);
      res.json( reverseTree(data,null) );
    })

  }

  exports.get = function(req,res,next){
    const id = req.params.id;
    Cate.findById(id).then(data=>{
      res.json(data);
    })
  }