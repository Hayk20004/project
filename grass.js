var LivingCreature =require("/.LivingCreature.js")
module.exports = class Grass  extends LivingCreature{

    mult() {

        var empty = randomItem (this.chooseCell(0));
        this.multiply++
        if (empty && this.multiply > 0) {
            var newX = empty[0];
            var newY = empty[1];

            matrix[newY][newX] = 1;
            var gr = new Grass(newX, newY, 1)
            grassArr.push(gr);
        }
    }
    
}
var randomItem = matrix[Math.floor(Math.random()*matrix.length)];