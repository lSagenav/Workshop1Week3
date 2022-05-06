var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource users');
});

router.get('/cool/', function (req,res,next){
  res.send('ERES GENIAL INGENIERO ');
});

module.exports = router;
