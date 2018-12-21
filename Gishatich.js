var LivingCreature =require("./LivingCreature.js")
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }



    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];

    }



    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }




    mult() {

        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];

        if (newCell && this.energy > 15) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 3;
            var gsh = new Gishatich(newX, newY, 1)
            gishatichArr.push(gsh);
        }
    }


    move() {

        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];
        this.energy -= 2
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY;
        }
    }






    eat() {
        var arr = this.chooseCell(2);
        var food = arr[Math.floor(Math.random() * arr.length)];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
                    xotakerArr.splice(i, 0);


                }
            }


            this.x = newX
            this.y = newY;
            this.energy += 2;
        }
    }


    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);

                }
            }

        }
    }



}
