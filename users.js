var express = require('express');
var router = express.Router();
var dataCtrl = require('../controllers/user.controller');
router.post('/',dataCtrl.create);
router.put('/:id',dataCtrl.update);
router.delete('/:id',dataCtrl.remove);
module.exports = router;
