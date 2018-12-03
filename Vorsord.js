class Vorsord extends LivingCreature {
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
            [this.x + 1, this.y + 1],


        ];

    }



    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);


    }


    mult() {

        var empty = random(this.chooseCell(0));

        if (empty && this.energy > 10) {
            var newX = empty[0];
            var newY = empty[1];

            matrix[newY][newX] = 4;
            var vrs = new Vorsord(newX, newY, 1)
            vorsordArr.push(vrs);
        }
    }


    move() {

        var empty = random(this.chooseCell(0));
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY;
        }
    }






    eat() {


        if (food) {
            var food = random(this.chooseCell(2));
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4;
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
            var food1 = random(this.chooseCell(3));
            var newX = food1[0]
            var newY = food1[1]
            matrix[newY][newX] = 4;
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
    }



    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in vorsordArr) {
                if (vorsordArr[i].x == this.x && vorsordArr[i].y == this.y) {
                    vorsordArr.splice(i, 1);

                }
            }

        }
    }



}