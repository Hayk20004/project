var LivingCreature =require("./LivingCreature.js")
module.exports =class Gazan extends LivingCreature{
    constructor(x, y, index){
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
            [this.x + 1, this.y + 1],





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

            matrix[newY][newX] = 5;
            var gz = new Gazan(newX, newY, 1)
            gazanArr.push(gz);
        }
    }


    move() {

        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];
        this.energy -= 2
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY;
        }
    }






    eat() {
        var arr = this.chooseCell(2);
        var food = arr[Math.floor(Math.random() * arr.length)];
        var arr = this.chooseCell(3);
        var food1 = arr[Math.floor(Math.random() * arr.length)];
        var arr = this.chooseCell(4);
        var food2 = arr[Math.floor(Math.random() * arr.length)];
        var arr = this.chooseCell(1);
        var food3 = arr[Math.floor(Math.random() * arr.length)];
        
        
        



        
        if (food3) {
            var newX = food3[0]
            var newY = food3[1]
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 0);


                }

            }
            this.x = newX
            this.y = newY;
            this.energy++
        }
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
                    xotakerArr.splice(i, 0);


                }

            }
            this.x = newX
            this.y = newY;
            this.energy++
        }

        if (food1) {
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 0);


                }

            }



            this.x = newX
            this.y = newY;
            this.energy++
        }

        if (food2) {
            var newX = food2[0]
            var newY = food2[1]
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for (var i in vorsordArr) {
                if (newX == vorsordArr[i].x && newY == vorsordArr[i].y) {
                    vorsordArr.splice(i, 0);


                }

            }



            this.x = newX
            this.y = newY;
            this.energy++
        }

    }



    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gazanArr) {
                if (gazanArr[i].x == this.x && gazanArr[i].y == this.y) {
                    gazanArr.splice(i, 1);

                }
            }

        }
    }



}
 