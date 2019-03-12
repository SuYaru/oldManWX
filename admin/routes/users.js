var express = require('express');
var router = express.Router();

var dataCtrl = require('../control/info.control');

router.post('/', dataCtrl.creat);
router.put('/:id', dataCtrl.update);
router.delete('/:id',dataCtrl.delete);
router.post('/deleteChoose',dataCtrl.deleteChoose);
router.post('/list',dataCtrl.list);
router.get('/:id',dataCtrl.search);

module.exports = router;
