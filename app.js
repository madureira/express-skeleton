var express = require('express'),
    app = express();


app.use(express.static(__dirname + '/public'));
app.use(require('./src/main/controllers'));

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});
