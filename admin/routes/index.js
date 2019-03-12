var express = require('express');
var router = express.Router();
// var User=require('../models/user.model');   // 引入用户实例
//const Cat = mongoose.model('Cat', { name: String });
/* const mongoose = require('mongoose');
mongoose.connect('mongodb://10.31.162.31:27017/test0307', {useNewUrlParser: true}); */
var dataCtrl=require('../controllers/user.controllers');

router.get('/',dataCtrl.create);
router.post('/',dataCtrl.create);

/* GET home page. */
/* router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // console.log(mongoose);

    const kitty = new User({ name: '123',password:"3453",age:213 });
    kitty.save().then((data) => res.json(data));
    // res.render('index');
}); */

module.exports = router;
