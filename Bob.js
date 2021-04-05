class Bob {
    constructor(x, y, r, options){
        var options = {
            isStatic : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
    
       }
       x = 600;
       y = 650;
       r = 70;
       Bob =  Bodies.circle(x, y, r, options);
    }
    