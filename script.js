

var matrix = [
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
];

var n = 20
var elemm = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5,]
for (y = 0; y < n; y++) {
    matrix.push([])
    for (x = 0; x < n; x++) {
        var r = Math.floor(Math.random() * elemm.length);
        matrix[y].push(elemm[r]);
    }
}


var gr = new Grass(5, 4, 1);
var d = gr.chooseCell(1);
console.log(d);



var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var vorsordArr = [];
var gazanArr = [];



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

console.log(grassArr);
console.log(xotakerArr);
console.log(gishatichArr);
console.log(vorsordArr);
console.log(gazanArr);




var side = 50;


function setup() {




    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
            }



            rect(x * side, y * side, side, side);


            fill("black")
            text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }
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

}





