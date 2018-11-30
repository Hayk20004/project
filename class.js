class Grass{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.multiply = 0;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }



    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
     }


     mult(){

        var empty = random(this.chooseCell(0));
        this.multiply++
        if(empty && this.multiply > 0){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 1;
        var gr = new Grass(newX,newY,1)
        grassArr.push(gr);
        }
     }
    }



    class Xotaker {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.energy = 5;
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ]
        }
    
        getNewDirections(){
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ]
        }
    
        chooseCell(character) {
            this.getNewDirections()
            var found = []
            for (var i in this.directions) {
                var x = this.directions[i][0]
                var y = this.directions[i][1]
                if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                    if (matrix[y][x] == character) {
                        found.push(this.directions[i])
                    }
                }
               
            }
            return found;
           
        }
    
        mult() {
            var empty = random(this.chooseCell(0))
            if (empty && this.energy > 10) {
                var newX = empty[0]
                var newY = empty[1]
                matrix[newY][newX] = 2
                var xt = new Xotaker(newX, newY)
                xotakerArr.push(xt)
            }
        }
    
        move(){
            var empty = random(this.chooseCell(0))
            this.energy--;
            if (empty){
                var newX = empty[0]
                var newY = empty[1]
                matrix[newY][newX] = 2
                matrix[this.y][this.x] = 0
    
                this.x = newX
                this.y = newY
            }
        }
    
        eat(){
            var food = random(this.chooseCell(1))
            if (food){
                var newX = food[0]
                var newY = food[1]
                matrix[newY][newX] = 2
                matrix[this.y][this.x] = 0
    
                for(var i in grassArr){
                    if(grassArr[i].x==newX && grassArr[i].y==newY){
                        grassArr.splice(i,1)
                    }
                }
    
                this.x = newX
                this.y = newY
                this.energy+=2
            }
        }
    
        die(){
            if(this.energy<=0){
                matrix[this.y][this.x] = 0
                for(var i in xotakerArr){
                    if(xotakerArr[i].x==this.x && xotakerArr[i].y==this.y){
                        xotakerArr.splice(i,1)
                    }
                }
            }
        }
    }

class Gishatich{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.energy = 9;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }


    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
            
        ];

    }



    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
     }


     mult(){

        var empty = random(this.chooseCell(0));
      
        if(empty && this.energy > 15){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 3;
        var gsh = new Gishatich(newX,newY,1)
        gishatichArr.push(gsh);
        }
     }


     move(){

        var empty = random(this.chooseCell(0));
      this.energy-=2
        if(empty){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 3;
       matrix[this.y][this.x]=0;
       this.x =newX
        this.y =newY;
        }
     }






     eat(){
        var food = random(this.chooseCell(2));
        if(food){
            var newX =food[0]
            var newY =food[1]
            matrix[newY][newX] = 3;
       matrix[this.y][this.x]=0;
       for (var i in xotakerArr) {
        if (newX == xotakerArr[i].x && newY ==xotakerArr[i].y) {
        xotakerArr.splice(i, 0);
         
            
        }
    }
    

       this.x =newX
        this.y =newY;
        this.energy+=2;
        }
     }


die(){
if(this.energy<=0){
matrix[this.y][this.x] =0;
for (var i in gishatichArr) {
if (gishatichArr[i].x == this.x &&  gishatichArr[i].y==this.y) {
    gishatichArr.splice(i, 1);
    
}
}

    }
}



}


class Vorsord{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.energy = 5;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]
    ];
    }


    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1],
      
            
        ];

    }



    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
     }


     mult(){

        var empty = random(this.chooseCell(0));
      
        if(empty && this.energy >10){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 4;
        var vrs = new Vorsord(newX,newY,1)
        vorsordArr.push(vrs);
        }
     }


     move(){

        var empty = random(this.chooseCell(0));
      this.energy--;
        if(empty){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 4;
       matrix[this.y][this.x]=0;
       this.x =newX
        this.y =newY;
        }
     }






     eat(){
        
        
        if(food){
            var food = random(this.chooseCell(2));
            var newX =food[0]
            var newY =food[1]
            matrix[newY][newX] = 4;
       matrix[this.y][this.x]=0;
       for (var i in xotakerArr) {
        if (newX == xotakerArr[i].x && newY ==xotakerArr[i].y) {
        xotakerArr.splice(i, 0);
      
            
        }
      
    }
   
    

       this.x =newX
        this.y =newY;
        this.energy++
        }
       
        if(food1){
            var food1 = random(this.chooseCell(3));
            var newX =food1[0]
            var newY =food1[1]
            matrix[newY][newX] = 4;
       matrix[this.y][this.x]=0;
       for (var i in gishatichArr) {
        if (newX == gishatichArr[i].x && newY ==gishatichArr[i].y) {
            gishatichArr.splice(i, 0);
      
            
        }
      
    }
   
    

       this.x =newX
        this.y =newY;
        this.energy++
        }
     }
    


die(){
if(this.energy<=0){
matrix[this.y][this.x] =0;
for (var i in vorsordArr) {
if (vorsordArr[i].x == this.x &&  vorsordArr[i].y==this.y) {
    vorsordArr.splice(i, 1);
    
}
}

    }
}



}


class Gazan{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.index = index;
       this.energy = 9;
       this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1],
      


    ];
    }


    getNewDirections(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1],
            
            
         
      
            
        ];

    }



    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        }
        return found;
     }


     mult(){

        var empty = random(this.chooseCell(0));
      
        if(empty && this.energy >15){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 5;
        var gz = new Gazan(newX,newY,1)
        gazanArr.push(gz);
        }
     }


     move(){

        var empty = random(this.chooseCell(0));
      this.energy-=2
        if(empty){
        var newX = empty[0];
        var newY = empty[1];

        matrix[newY][newX] = 5;
       matrix[this.y][this.x]=0;
       this.x =newX
        this.y =newY;
        }
     }






     eat(){
        var food = random(this.chooseCell(2));
        var food1 = random(this.chooseCell(3));
        var food2 = random(this.chooseCell(4));
        var food3 = random(this.chooseCell(1));
        if(food3){
            var newX =food3[0]
            var newY =food3[1]
            matrix[newY][newX] = 5;
       matrix[this.y][this.x]=0;
       for (var i in grassArr) {
        if (newX == grassArr[i].x && newY ==grassArr[i].y) {
            grassArr.splice(i, 0);
      
            
        }
      
    }
       this.x =newX
        this.y =newY;
        this.energy++
        }
        if(food){
            var newX =food[0]
            var newY =food[1]
            matrix[newY][newX] = 5;
       matrix[this.y][this.x]=0;
       for (var i in xotakerArr) {
        if (newX == xotakerArr[i].x && newY ==xotakerArr[i].y) {
        xotakerArr.splice(i, 0);
      
            
        }
      
    }
       this.x =newX
        this.y =newY;
        this.energy++
        }
       
        if(food1){
            var newX =food1[0]
            var newY =food1[1]
            matrix[newY][newX] = 5;
       matrix[this.y][this.x]=0;
       for (var i in gishatichArr) {
        if (newX == gishatichArr[i].x && newY ==gishatichArr[i].y) {
            gishatichArr.splice(i, 0);
      
            
        }
      
    }
   
    

       this.x =newX
        this.y =newY;
        this.energy++
        }
        
        if(food2){
            var newX =food2[0]
            var newY =food2[1]
            matrix[newY][newX] = 5;
       matrix[this.y][this.x]=0;
       for (var i in vorsordArr) {
        if (newX == vorsordArr[i].x && newY ==vorsordArr[i].y) {
            vorsordArr.splice(i, 0);
      
            
        }
      
    }
   
    

       this.x =newX
        this.y =newY;
        this.energy++
        }
       
     }
    


die(){
if(this.energy<=0){
matrix[this.y][this.x] =0;
for (var i in gazanArr) {
if (gazanArr[i].x == this.x &&  gazanArr[i].y==this.y) {
    gazanArr.splice(i, 1);
    
}
}

    }
}



}




