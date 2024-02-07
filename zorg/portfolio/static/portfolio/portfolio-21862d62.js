import {
	g as c,
	c as n,
	b as p,
	a as r,
	d as h,
	e as u,
	f,
	h as g,
} from "../assets/colorTheme-68c1091f.js"
import { L as v } from "../assets/loader-896b65bd.js"
class a {
	constructor() {
		return (
			a.instance || (a.instance = this),
			(this.state = { open: !1 }),
			(this.selectors = {
				popup: '[data-js="popup-block"]',
				cross: '[data-js="popup-cross"]',
				logo: '[data-js="popup-logo"]',
				container: '[data-js="popup-container-images"]',
				images: '[data-js="popup-image"]',
				text: '[data-js="popup-text"]',
				date: '[data-js="popup-date"]',
				title: '[data-js="popup-title"]',
				detail: "data-js-portfolio-detail",
				htmlDetail: "data-js-portfolio-detail-start",
				overlay: '[data-js="popup-overlay"]',
				item: '[data-js="game-item"]',
				itemsContainer: '[data-js="portfolio-content"]',
			}),
			(this.dataAttributes = {
				images: { name: "data-js", value: "popup-image" },
			}),
			(this.classes = {
				images: {
					block: "portfolio__main-game-card",
					image: "portfolio__main-game-card-img",
				},
				popup: "portfolio__main-block--open",
				overlay: "active",
			}),
			this.findElements(),
			this.acceptEvents(),
			this.getStartConfiguration(),
			a.instance
		)
	}
	getStartConfiguration() {
		;(this.htmlDetail = c(document.documentElement, this.selectors.htmlDetail)),
			this.htmlDetail &&
				this.togglePopup(document.documentElement, this.selectors.htmlDetail)
	}
	findElements() {
		;(this.popup = document.querySelector(this.selectors.popup)),
			(this.cross = this.popup.querySelector(this.selectors.cross)),
			(this.logo = this.popup.querySelector(this.selectors.logo)),
			(this.container = this.popup.querySelector(this.selectors.container)),
			(this.images = this.popup.querySelectorAll(this.selectors.images)),
			(this.text = this.popup.querySelector(this.selectors.text)),
			(this.date = this.popup.querySelector(this.selectors.date)),
			(this.title = this.popup.querySelector(this.selectors.title)),
			(this.items = document.querySelectorAll(this.selectors.item)),
			(this.itemsContainer = document.querySelector(
				this.selectors.itemsContainer
			)),
			(this.overlay = document.querySelector(this.selectors.overlay))
	}
	clearImages() {
		return new Promise((t, e) => {
			try {
				n(this.container),
					(this.logo.src = ""),
					(this.title.innerText = ""),
					(this.text.innerText = ""),
					(this.date.innerText = ""),
					t()
			} catch {
				e()
			}
		})
	}
	async togglePopup(t, e) {
		if (((this.state.open = !this.state.open), this.state.open)) {
			p(), await this.clearImages()
			const s = c(t, e)
				(this.logo.src = s.logo),
				(this.title.innerText = s.title),
				(this.text.innerText = s.text),
				(this.date.innerText = s.date),
				s.images.forEach((i) => {
					const m = r(
						"div",
						{
							class: this.classes.images.block,
							[this.dataAttributes.images.name]: [
								this.dataAttributes.images.value,
							],
						},
						this.container
					)
					r("img", { src: i, class: this.classes.images.image }, m)
				}),
				this.overlay.classList.toggle(this.classes.overlay),
				this.popup.classList.toggle(this.classes.popup),
				h(1e3).then(() => (this.popup.style.overflowY = "auto"))
		} else
			u(),
				this.popup.classList.toggle(this.classes.popup),
				this.overlay.classList.toggle(this.classes.overlay),
				(this.popup.style.overflowY = "hidden")
	}
	findGameItems() {
		;(this.items = document.querySelectorAll(this.selectors.item)),
			this.bindItemsClick()
	}
	bindCrossClick() {
		this.cross &&
			this.cross.addEventListener("click", () => {
				this.togglePopup()
			})
	}
	bindClickOverlay() {
		this.overlay &&
			this.overlay.addEventListener("click", (t) => {
				this.cross.click()
			})
	}
	itemClick(t) {
		this.togglePopup(t, this.selectors.detail)
	}
	bindItemsClick() {
		this.items.forEach((t) =>
			t.addEventListener("click", this.itemClick.bind(this, t))
		)
	}
	acceptEvents() {
		this.bindItemsClick(), this.bindCrossClick(), this.bindClickOverlay()
	}
}
class o {
	constructor() {
		return (
			o.instance || (o.instance = this),
			(this.selectors = {
				gameItems: "[data-js='game-item']",
				portfolioContent: "[data-js='portfolio-content']",
			}),
			(this.state = { isRequesting: !1 }),
			(this.classes = {
				gameItem: "portfolio__item",
				gameItemImage: "portfolio__item-img",
			}),
			this.findElements(),
			o.instance
		)
	}
	findElements() {
		;(this.portfolioContent = document.querySelector(
			this.selectors.portfolioContent
		)),
			(this.gameItems = document.querySelectorAll(this.selectors.gameItems))
	}
	clearContents() {
		return new Promise((t, e) => {
			try {
				n(this.portfolioContent), t()
			} catch {
				e()
			}
		})
	}
	createItems(t) {
		t.forEach((e) => {
			const s = r(
				"div",
				{
					class: this.classes.gameItem,
					"data-js": "game-item",
					"data-js-portfolio-detail": JSON.stringify(e),
				},
				this.portfolioContent
			)
				r(
					"img",
					{ class: this.classes.gameItemImage, src: e.logo, alt: e.title },
					s
				),
				this.portfolioContent.appendChild(s)
		})
	}
}
async function b(d, t) {
	try {
		const e = await fetch(d, { method: "POST", body: t })
		if (!e.ok) throw new Error("Ошибка выполнения запроса")
		return e.json()
	} catch (e) {
		throw new Error(e)
	}
}
class l {
	constructor({ maxWidth: t }) {
		return (
			l.instance || (l.instance = this),
			(this.selectors = {
				submitBtn: "[data-js='filter-submit']",
				clearBtn: "[data-js='filter-clear']",
				filterBtn: "[data-js='filter']",
				filterList: "[data-js='filter-list']",
				form: "[data-js='form-filter']",
				checkboxes: "[data-js='filter-check']",
			}),
			(this.state = {
				filterActive: !1,
				clearBtnShown: !1,
				searchBtnShown: !0,
			}),
			(this.classes = {
				activeFilter: "portfolio__filter-list--active",
				activeSubmit: "portfolio__filter-submit--active",
				activeClearBtn: "portfolio__filter-clear--active",
				hiddenClearBtn: "portfolio__filter-clear--hidden",
			}),
			(this.dataAttributes = { form: "data-js-details" }),
			(this.maxWidth = t),
			(this.isMobileSize = !1),
			(this.isSearching = !1),
			(this.currentChecked = 0),
			(this.gameItemsHelper = new o()),
			(this.loader = new v()),
			(this.popupHelper = new a()),
			this.findElements(),
			this.acceptEvents(),
			l.instance
		)
	}
	findElements() {
		;(this.filterBtn = document.querySelector(this.selectors.filterBtn)),
			(this.filterList = document.querySelector(this.selectors.filterList)),
			(this.clearBtn = document.querySelector(this.selectors.clearBtn)),
			(this.submitBtn = document.querySelector(this.selectors.submitBtn)),
			(this.form = document.querySelector(this.selectors.form)),
			(this.checkboxes = document.querySelectorAll(this.selectors.checkboxes)),
			(this.overlay = document.querySelector(this.selectors.overlay))
	}
	emptyData(t) {
		const e = r("p", {
			style:
				"color: var(--color-white); font-size: 20px; font-family: Montserrat",
			"data-js": "game-item",
		})
		;(e.textContent = t), this.gameItemsHelper.portfolioContent.appendChild(e)
	}
	async submitHandler(t) {
		;(this.isSearching = !0),
			t.preventDefault(),
			this.isMobileSize && this.toggleFilter()
		const e = new FormData(this.form),
			s = c(this.form, this.dataAttributes.form)
		await this.gameItemsHelper.clearContents(), this.loader.showLoader()
		try {
			const i = await b(s.url, e)
			i
				? (await this.gameItemsHelper.clearContents(),
				  this.gameItemsHelper.createItems(i),
				  this.popupHelper.findGameItems())
				: (this.emptyData("По данному запросу ничего не найдено 🙌🙌🙌"),
				  f("Попробуйте другие фильтры 🙃)"))
		} catch {
			this.emptyData("Ошибка запроса. Попробуйте позже 🗿🗿🗿"),
				g("Что-то случилось на сервере...Попробуйте позже 🤔")
		} finally {
			h(500).then(() => {
				this.loader.hideLoader()
			})
		}
	}
	bindFormSubmit() {
		this.form.addEventListener("submit", (t) => {
			this.submitHandler(t)
		})
	}
	bindCheckboxesClick() {
		this.checkboxes.forEach((t) => {
			t.addEventListener("change", (e) => {
				e.target.checked
					? ((this.state.clearBtnShown = !0),
					  (this.currentChecked += 1),
					  this.clearBtn.classList.add(this.classes.activeClearBtn))
					: ((this.currentChecked -= 1),
					  this.currentChecked === 0 &&
							((this.state.clearBtnShown = !1),
							this.clearBtn.classList.remove(this.classes.activeClearBtn)))
			})
		})
	}
	bindClearBtnClick() {
		this.clearBtn.addEventListener("click", () => {
			this.checkboxes.forEach((t) => {
				t.checked = !1
			}),
				(this.currentChecked = 0),
				(this.state.clearBtnShown = !1),
				this.clearBtn.classList.remove(this.classes.activeClearBtn),
				this.isSearching && (this.submitBtn.click(), (this.isSearching = !1))
		})
	}
	bindFilterClick() {
		this.filterBtn.addEventListener("click", () => {
			this.toggleFilter()
		})
	}
	toggleFilter() {
		;(this.state.filterActive = !this.state.filterActive),
			this.state.filterActive
				? (this.filterList.classList.add(this.classes.activeFilter),
				  this.submitBtn.classList.add(this.classes.activeSubmit),
				  this.state.clearBtnShown &&
						this.clearBtn.classList.remove(this.classes.hiddenClearBtn))
				: (this.state.clearBtnShown &&
						this.clearBtn.classList.add(this.classes.hiddenClearBtn),
				  this.filterList.classList.remove(this.classes.activeFilter),
				  this.submitBtn.classList.remove(this.classes.activeSubmit))
	}
	hideFilter(t) {
		t &&
			((this.state.filterActive = !1),
			this.state.clearBtnShown &&
				this.clearBtn.classList.add(this.classes.hiddenClearBtn),
			this.filterList.classList.remove(this.classes.activeFilter),
			this.submitBtn.classList.remove(this.classes.activeSubmit))
	}
	bindMediaQuery() {
		const t = window.matchMedia(`(max-width: ${this.maxWidth}px)`)
		;(this.isMobileSize = t.matches),
			t.addEventListener("change", (e) => {
				this.isMobileSize = e.matches
			})
	}
	acceptEvents() {
		this.bindMediaQuery(),
			this.bindFilterClick(),
			this.bindCheckboxesClick(),
			this.bindClearBtnClick(),
			this.bindFormSubmit()
	}
}
new l({ maxWidth: 1056 })