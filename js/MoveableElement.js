class MoveableElement extends Element {
	vel = [0, 0]

	lastPos = [0, 0]

	constructor(x, y , width, height) {
		super(x, y, width, height)
		this.lastPos = [x, y]
	}

	last(){
		let clone = new Player(this.width, this.height)
		clone.x = this.lastPos[0]
		clone.y = this.lastPos[1]
		clone.lastPos = this.lastPos
		clone.vel = this.vel
		return clone
	}
}