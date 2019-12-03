class World{
    width = 0
    height = 0
    viewport = null
    player = null
    asteroids = null
    bullets = null

    constructor(window, w = Infinity, h = Infinity, width) {
        this.width = w
        this.height = h

        this.setViewportFor(window)
        this.player =  new Player(25,25)
    }
    setViewportFor(window){
    	this.viewport = new Viewport(
    		Math.min(window.innerWidth, this.width),
    		Math.min(window.innerHeight, this.height)
    	)
    }
}
