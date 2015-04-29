var express = require('express'),
    router = express.Router();


router.get('/', function(req, res) {
    res.send('Comments controller');
});

router.get('/:id', function(req, res) {
    res.send('Comments: ' + req.params.id);
});


module.exports = router;
