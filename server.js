var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


//matrix = [
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,3, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,5,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,4,0,2,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,1,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0,],
//];
Grass = require("./Grass.js")
Xotaker = require("./Xotaker.js")
Gishatich = require("./Gishatich.js")
Vorsord = require("./Vorsord.js")
Gazan = require("./Gazan.js")
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;

}
function FillMatrix(n, m) {
    matrix = []
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i].push(Math.round(getRandomArbitrary(0, 5)))
        }
    }
    return matrix
}



grassArr = [];
xotakerArr = [];
gishatichArr = [];
vorsordArr = [];
gazanArr = [];




for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {

            var xot1 = new Grass(x, y, 1);
            grassArr.push(xot1);
        }
        else if (matrix[y][x] == 2) {

            var xotaker = new Xotaker(x, y, 1);
            xotakerArr.push(xotaker);
        }
        else if (matrix[y][x] == 3) {

            var gishatich = new Gishatich(x, y, 1);
            gishatichArr.push(gishatich);
        }
        else if (matrix[y][x] == 4) {

            var vorsord = new Vorsord(x, y, 1);

            vorsordArr.push(vorsord);
        }
        else if (matrix[y][x] == 5) {

            var gazan = new Gazan(x, y, 1);

            gazanArr.push(gazan);
        }

    }
}






setInterval(drawServerayin, 200)
function drawServerayin() {


    for (var i in grassArr) {

        grassArr[i].mult();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat();
        xotakerArr[i].mult();
        xotakerArr[i].move();
        xotakerArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
        gishatichArr[i].mult();
        gishatichArr[i].move();
        gishatichArr[i].die();
    }
    for (var i in vorsordArr) {

        vorsordArr[i].eat();
        vorsordArr[i].mult();
        vorsordArr[i].move();
        vorsordArr[i].die();
    }
    for (var i in gazanArr) {

        gazanArr[i].eat();
        gazanArr[i].mult();
        gazanArr[i].move();
        gazanArr[i].die();
    }
    io.sockets.emit("matrix", matrix)

}
