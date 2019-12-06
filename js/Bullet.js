const MoveableElement = require('./MoveableElement.js');

class Bullet extends MoveableElement{
    constructor(w, h, vel){
        super(5,5,4,w,h,vel);

    }
}