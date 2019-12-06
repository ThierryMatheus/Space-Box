
let socket = io();
let world = new World(window)

let game = new Vue({
	el: '#game',
	data: {
		world : world,
		player: world.player,
		viewport: world.viewport,
		bullet: world.bullet,
		frequency: 60,
		time: 0,
		conections:0,

		gameControl:{
			isMove: false
			isShot: false
		}
	},
	mounted: function(){
		this.$el.focus()
		setInterval(this.loop, 1000/ this.frequency)
	}
	mothods:{
	}
})