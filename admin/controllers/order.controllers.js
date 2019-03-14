const mongoose=require('mongoose');

var Order= require('../models/order.model');

exports.create=function(req,res,next){
    const order=new Order(req.body);
    order.save().then((data)=>res.json(data));
}

exports.update=function(req,res,next){
    const id=req.params.id;
    Order.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
        res.json(data);
    });
}
exports.remove=function(req,res,next){
    const id=req.params.id;
    Order.findByIdAndDelete(id,(err,data)=>{
        res.json(data);
    });
}
exports.removes=function(req,res,next){
    const ids=req.body.ids.split(',');
    if(ids.length>0){
        Order.deleteMany({_id:{$in:ids}}).then(data=>{
            res.json({"message":'所选数据已经被删除'});
        });
    }
}
exports.list=function(req,res,next){
    var page=req.body.page ?req.body.page:1;
    var rows=req.body.rows ? req.body.rows :1;
    var queryCondition = {};
    if(req.body.ordername && req.body.ordername.trim().length>0){
      queryCondition = {
          "ordername": new RegExp(req.body.ordername,'i')
        }
    }

    if(req.body.orderId && req.body.orderId.trim().length>0){
        queryCondition = {
            "orderId":req.body.orderId
          }
      }
    // page limit 是字符串类型
    console.log(queryCondition);
    Order.paginate(queryCondition,{page:+page,limit:+rows},function(err,result){
        result.rows=result.docs;
        delete result.docs;
        res.json(result);
    });
}

exports.getById=function(req,res,next){
    var id=req.params.id;
    Order.findById(id).then(data=>{
        res.json(data);
    });
}