/**
 * Created by Maurice on 10/26/2014.
 */

var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path');
var open = require('open');
var port = process.env.PORT || 8080;
var app = connect();

app.use(serveStatic(path.join(__dirname, 'wwwroot')));

app.listen(port, function () {
    console.info('The server is listening at port ' + port);
    open('http://localhost:' + port, 'chrome');
});
