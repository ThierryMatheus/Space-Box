vel = [0, 0];

class MoveableElement extends Element {
	constructor(x, y , width, height) {
		super(x, y, width, height)
		this.lastPos = [x, y]
	}

}