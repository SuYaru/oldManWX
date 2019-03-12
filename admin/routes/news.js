var express = require('express');
var router = express.Router();

var dataCtrl = require('../control/news.control');

router.post('/', dataCtrl.creat);
router.put('/:id', dataCtrl.update);
router.delete('/:id',dataCtrl.delete);
router.post('/list',dataCtrl.list);
router.get('/:id',dataCtrl.search);
router.get('/',dataCtrl.sendnews,function(req,res,next){
    res.render('/',{})
});//得到标题为天气的数据,渲染到http://localhost:3000/news中去


module.exports = router;
