const Element = require('./Element.js')

//import Element from 'Element.js'
//const Element = require('./Element.js')
vel = 0;

class MoveableElement extends Element {
	constructor(x, y , width, height) {
		super(x, y, width, height)
	}

}

module.exports = MoveableElement