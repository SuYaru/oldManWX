var express = require('express');
var router = express.Router();
// var User=require('../models/user.model');   // 引入用户实例
//const Cat = mongoose.model('Cat', { name: String });
/* const mongoose = require('mongoose');
mongoose.connect('mongodb://10.31.162.31:27017/test0307', {useNewUrlParser: true}); */
var dataCtrl=require('../controllers/user.controllers');

router.post('/',dataCtrl.create);
router.put('/:id',dataCtrl.update);
router.delete('/:id',dataCtrl.remove);
router.post('/list',dataCtrl.list);
router.get('/:id',dataCtrl.getById);
router.post('/removes',dataCtrl.removes);


/*

    http://localhost:3000/users/123     put
    http://localhost:3000/users/123     delete
    http://localhost:3000/users/123     get
    http://localhost:3000/users/        post
    http://localhost:3000/users/list    list

    */


module.exports = router;
