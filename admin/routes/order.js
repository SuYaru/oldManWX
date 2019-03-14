var express = require('express');
var router = express.Router();
var dataCtrl=require('../controllers/order.controllers');

router.post('/',dataCtrl.create);
router.put('/:id',dataCtrl.update);
router.delete('/:id',dataCtrl.remove);
router.post('/list',dataCtrl.list);
router.get('/:id',dataCtrl.getById);
router.post('/removes',dataCtrl.removes);


module.exports = router;