
var socket = io();

var side = 50;


function setup() {
    frameRate(5);
   createCanvas(m * side,n * side);
    background('#acacac');


}
function drawMatrix(matrix) {

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
    
}
io.sockets.on("matrix",drawMatrix)




