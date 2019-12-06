const MoveableElement = require('./MoveableElement.js');
    life = 0;
    angular =0;

class SpaceShip extends MoveableElement{
    constructor(w , h){
        super(25, 25, w, h);
    }

}
module.exports = SpaceShip;