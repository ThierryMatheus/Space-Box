const MoveableElement = require('./MoveableElement.js');
    life = 0;
    angle =0;

class Player extends MoveableElement{
    constructor(w , h, vel){
        super(25, 25, 2, w, h);
    }
}
module.exports = Player;