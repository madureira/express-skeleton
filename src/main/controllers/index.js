var express = require('express'),
    router = express.Router();


router.use('/comments', require('./comments'));

router.get('/', function(req, res) {
    res.send('Root');
});


module.exports = router;
