class SpriteController {
	constructor(node) {
		//node - место, куда будут встраиваться спрайты
		this.node = node
		setInterval(() => {
			this.appendSprite()
		}, 1000)
	}

	findRandomPlace() {
		// Получаем размеры видимой области (viewport)
		const viewportWidth =
			window.innerWidth || document.documentElement.clientWidth
		const viewportHeight =
			window.innerHeight || document.documentElement.clientHeight

        
        const scrollTop =
					window.pageYOffset ||
					document.documentElement.scrollTop ||
					document.body.scrollTop

        

		// Генерируем случайные координаты в пределах размеров видимой области
		const randomX = Math.floor(Math.random() * viewportWidth)
		let randomY = Math.floor(Math.random() * viewportHeight) + scrollTop
		while (randomY + 300 >= document.documentElement.offsetHeight ) {
			randomY = Math.floor(Math.random() * viewportHeight) + scrollTop
		}

		// Возвращаем объект с координатами X и Y
		return { x: randomX, y: randomY }
	}

	appendSprite() {
		let images = []
		for (let i = 1; i <= 9; i++) {
			images = [...images, `static/assets/sprites/costume${i}.svg`]
		}

		const position = this.findRandomPlace()
		console.log('position', position)
		const sprite = new Sprite(
			position,
			Math.floor(Math.random() * 30) + 1,
			images,
			["snake"]
		)
		this.node.appendChild(sprite.node)
	}
}

class Sprite {
	constructor({ x, y }, speed, images, classes, direction) {
		this.speed = speed
		this.classes = classes
		this.direction = direction ?? this.generateDirection()

		this.images = [...images]
		this.currentImage = 0
		this.isDead = false

		this.startLiving = new Date()
		this.generateDeathTime()
		if ((x, y)) {
			this.currentX = x
			this.currentY = y
		} else {
			this.generatePosition()
		}
		this.node = this.createSprite()
		this.turnToDirection()
		this.checkSpriteDeath()
	}

	generateDeathTime() {
		// Генерируем случайное количество миллисекунд в будущем (например, от 1 до 10 минут)
		const randomMilliseconds =
			Math.floor(Math.random() * (600000 - 10000 + 1)) + 10000 // от 10 сек до 1 минут в миллисекундах

		this.deathTime = new Date(this.startLiving.getTime() + randomMilliseconds)
	}

	generateDirection() {
		// Генерируем случайный угол в радианах от 0 до 2π
		return Math.random() * 2 * Math.PI
	}

	generatePosition(currentX, currentY) {
		this.currentX = currentX
		this.currentY = currentY
	}

	clearTimer() {
		if (this.isDead) {
			clearInterval(this.timer)
		}
	}

	isSpriteBellowHTML() {
		if(this.currentY + 300 >= document.documentElement.offsetHeight) {
			return true
		} else {
			return false
		}
    }

	turnToDirection() {
		this.node.style.width = this.node.style.transform = `rotate(${
			this.direction * (180 / Math.PI)
		}deg)`
	}

	checkSpriteDeath() {
		this.timer = setInterval(() => {
			this.clearTimer()

			const currentTime = new Date()
			if (currentTime >= this.deathTime) {
				// Убиваем спрайт
				this.destroy()
				this.isDead = true
				// Дополнительные действия для удаления спрайта
			} else {
				this.moveSprite()
			}
		}, 100)
	}

	moveSprite() {
		this.currentX = this.currentX + Math.cos(this.direction) * this.speed
		this.currentY = this.currentY + Math.sin(this.direction) * this.speed
		if (this.isSpriteBellowHTML()) {
			this.destroy()
		} else {
			this.node.style.left = this.currentX + "px"
			this.node.style.top = this.currentY + "px"
			
			this.currentImage += 1

			//каждая десятая картинка
			const image = this.images[this.currentImage % 3]
			this.node.style.backgroundImage = `url("${image}")`
		}
		
	}

	makeOpacity() {}

	destroy() {
		this.node.remove()
	}

	createSprite() {
		const newDiv = document.createElement("div")
		newDiv.classList.add(...this.classes)
		return newDiv
	}
}


document.addEventListener("DOMContentLoaded", () => {
    new SpriteController(document.querySelector("[data-js-snake-container]"))
})

