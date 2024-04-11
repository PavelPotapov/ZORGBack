class ButtonUP {
	states = {
		isHidden: true,
	}

	attrs = {
		hide: "data-js-btn-up-hide",
	}

	stateClasses = {
		isHidden: "btn-up--hide",
	}

	constructor(instance) {
		this.instance = instance
		this.manageState()
		this.bindEvents()
	}

	manageState() {
		this.states.isHidden =
			this.instance.hasAttribute(this.attrs.hide) ||
			this.instance.classList.contains(this.stateClasses.isHidden)
	}

	show() {
		this.states.isHidden = false
		this.instance.classList.remove(this.stateClasses.isHidden)
		this.instance.removeAttribute(this.attrs.hide)
	}

	hide() {
		this.states.isHidden = true
		this.instance.classList.add(this.stateClasses.isHidden)
		this.instance.setAttribute(this.attrs.hide, "")
	}

	goUp() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		})
	}

	checkScroll() {
		const scrollY = window.scrollY || document.documentElement.scrollTop
		scrollY > 400 ? this.show() : this.hide()
	}

	bindEvents() {
		if (this.instance) {
			this.instance.addEventListener("click", () => {
				this.goUp()
			})

			window.addEventListener("scroll", () => {
				this.checkScroll()
			})
		}
	}
}



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(`[data-js-btn-up]`).forEach((el) => {
			new ButtonUP(el)
		})
})