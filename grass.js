var LivingCreature =require("./LivingCreature.js")
module.exports = class Grass  extends LivingCreature{

    mult() {
        var arr = this.chooseCell(0);
        var newCell = arr[Math.floor(Math.random() * arr.length)];
        this.multiply++
        if (newCell && this.multiply > 0) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 1;
            var gr = new Grass(newX, newY, 1)
            grassArr.push(gr);
        }
    }
    
}
