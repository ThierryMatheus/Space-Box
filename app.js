let world = new World(window)

let game = new Vue({
	el: '#game',
	data: {
		world : world,
		player: world.player,
		viewport.viewport,
		keys:{},
		frequency: 60,
		time: 0,

		gameControl:{
			isMove: false
		}
	},
	mounted: function(){
		this.$el.focus()
		setInterval(this.loop, 1000/ this.frequency)
		this.player.moveBy(3)
	}
	mothods:{
		keyup: function(evt) {
			this.keys[evt.key] =false
		},
		keydown: function(evt) {
			this.keys[evt.key] =true
		},
		calcMovement(){
			let movement = [
				this.keys['ArrowRight'] ? 1 : (this.keys['ArrowLeft']? -1 :0),
       			this.keys['ArrowDown'] ? 1 : (this.keys['ArrowUp'] ? -1 : 0)
			]
			return movement
		},
	
	}
})