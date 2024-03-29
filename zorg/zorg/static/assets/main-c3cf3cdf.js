import { d as Qe } from "./colorTheme-a717ec87.js"
import "./contactForm-88fff915.js"
import {
	s as Je,
	S as et,
	T as De,
	a as ne,
	b as U,
	P as te,
} from "./index-fcca7198.js"
import "./loader-896b65bd.js"
function Ve(s) {
	return (
		s !== null &&
		typeof s == "object" &&
		"constructor" in s &&
		s.constructor === Object
	)
}
function ke(s, e) {
	s === void 0 && (s = {}),
		e === void 0 && (e = {}),
		Object.keys(e).forEach((t) => {
			typeof s[t] > "u"
				? (s[t] = e[t])
				: Ve(e[t]) && Ve(s[t]) && Object.keys(e[t]).length > 0 && ke(s[t], e[t])
		})
}
const qe = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: { blur() {}, nodeName: "" },
	querySelector() {
		return null
	},
	querySelectorAll() {
		return []
	},
	getElementById() {
		return null
	},
	createEvent() {
		return { initEvent() {} }
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return []
			},
		}
	},
	createElementNS() {
		return {}
	},
	importNode() {
		return null
	},
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: "",
	},
}
function Y() {
	const s = typeof document < "u" ? document : {}
	return ke(s, qe), s
}
const tt = {
	document: qe,
	navigator: { userAgent: "" },
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: "",
	},
	history: { replaceState() {}, pushState() {}, go() {}, back() {} },
	CustomEvent: function () {
		return this
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return ""
			},
		}
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {}
	},
	requestAnimationFrame(s) {
		return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0)
	},
	cancelAnimationFrame(s) {
		typeof setTimeout > "u" || clearTimeout(s)
	},
}
function R() {
	const s = typeof window < "u" ? window : {}
	return ke(s, tt), s
}
function Q(s) {
	return (
		s === void 0 && (s = ""),
		s
			.trim()
			.split(" ")
			.filter((e) => !!e.trim())
	)
}
function st(s) {
	const e = s
	Object.keys(e).forEach((t) => {
		try {
			e[t] = null
		} catch {}
		try {
			delete e[t]
		} catch {}
	})
}
function ie(s, e) {
	return e === void 0 && (e = 0), setTimeout(s, e)
}
function j() {
	return Date.now()
}
function it(s) {
	const e = R()
	let t
	return (
		e.getComputedStyle && (t = e.getComputedStyle(s, null)),
		!t && s.currentStyle && (t = s.currentStyle),
		t || (t = s.style),
		t
	)
}
function ze(s, e) {
	e === void 0 && (e = "x")
	const t = R()
	let i, a, r
	const c = it(s)
	return (
		t.WebKitCSSMatrix
			? ((a = c.transform || c.webkitTransform),
			  a.split(",").length > 6 &&
					(a = a
						.split(", ")
						.map((f) => f.replace(",", "."))
						.join(", ")),
			  (r = new t.WebKitCSSMatrix(a === "none" ? "" : a)))
			: ((r =
					c.MozTransform ||
					c.OTransform ||
					c.MsTransform ||
					c.msTransform ||
					c.transform ||
					c
						.getPropertyValue("transform")
						.replace("translate(", "matrix(1, 0, 0, 1,")),
			  (i = r.toString().split(","))),
		e === "x" &&
			(t.WebKitCSSMatrix
				? (a = r.m41)
				: i.length === 16
				? (a = parseFloat(i[12]))
				: (a = parseFloat(i[4]))),
		e === "y" &&
			(t.WebKitCSSMatrix
				? (a = r.m42)
				: i.length === 16
				? (a = parseFloat(i[13]))
				: (a = parseFloat(i[5]))),
		a || 0
	)
}
function ce(s) {
	return (
		typeof s == "object" &&
		s !== null &&
		s.constructor &&
		Object.prototype.toString.call(s).slice(8, -1) === "Object"
	)
}
function rt(s) {
	return typeof window < "u" && typeof window.HTMLElement < "u"
		? s instanceof HTMLElement
		: s && (s.nodeType === 1 || s.nodeType === 11)
}
function _() {
	const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
		e = ["__proto__", "constructor", "prototype"]
	for (let t = 1; t < arguments.length; t += 1) {
		const i = t < 0 || arguments.length <= t ? void 0 : arguments[t]
		if (i != null && !rt(i)) {
			const a = Object.keys(Object(i)).filter((r) => e.indexOf(r) < 0)
			for (let r = 0, c = a.length; r < c; r += 1) {
				const f = a[r],
					n = Object.getOwnPropertyDescriptor(i, f)
				n !== void 0 &&
					n.enumerable &&
					(ce(s[f]) && ce(i[f])
						? i[f].__swiper__
							? (s[f] = i[f])
							: _(s[f], i[f])
						: !ce(s[f]) && ce(i[f])
						? ((s[f] = {}), i[f].__swiper__ ? (s[f] = i[f]) : _(s[f], i[f]))
						: (s[f] = i[f]))
			}
		}
	}
	return s
}
function fe(s, e, t) {
	s.style.setProperty(e, t)
}
function je(s) {
	let { swiper: e, targetPosition: t, side: i } = s
	const a = R(),
		r = -e.translate
	let c = null,
		f
	const n = e.params.speed
	;(e.wrapperEl.style.scrollSnapType = "none"),
		a.cancelAnimationFrame(e.cssModeFrameID)
	const u = t > r ? "next" : "prev",
		o = (d, m) => (u === "next" && d >= m) || (u === "prev" && d <= m),
		l = () => {
			;(f = new Date().getTime()), c === null && (c = f)
			const d = Math.max(Math.min((f - c) / n, 1), 0),
				m = 0.5 - Math.cos(d * Math.PI) / 2
			let w = r + m * (t - r)
			if ((o(w, t) && (w = t), e.wrapperEl.scrollTo({ [i]: w }), o(w, t))) {
				;(e.wrapperEl.style.overflow = "hidden"),
					(e.wrapperEl.style.scrollSnapType = ""),
					setTimeout(() => {
						;(e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [i]: w })
					}),
					a.cancelAnimationFrame(e.cssModeFrameID)
				return
			}
			e.cssModeFrameID = a.requestAnimationFrame(l)
		}
	l()
}
function re(s) {
	return (
		s.querySelector(".swiper-slide-transform") ||
		(s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform")) ||
		s
	)
}
function N(s, e) {
	return e === void 0 && (e = ""), [...s.children].filter((t) => t.matches(e))
}
function we(s) {
	try {
		console.warn(s)
		return
	} catch {}
}
function W(s, e) {
	e === void 0 && (e = [])
	const t = document.createElement(s)
	return t.classList.add(...(Array.isArray(e) ? e : Q(e))), t
}
function ye(s) {
	const e = R(),
		t = Y(),
		i = s.getBoundingClientRect(),
		a = t.body,
		r = s.clientTop || a.clientTop || 0,
		c = s.clientLeft || a.clientLeft || 0,
		f = s === e ? e.scrollY : s.scrollTop,
		n = s === e ? e.scrollX : s.scrollLeft
	return { top: i.top + f - r, left: i.left + n - c }
}
function at(s, e) {
	const t = []
	for (; s.previousElementSibling; ) {
		const i = s.previousElementSibling
		e ? i.matches(e) && t.push(i) : t.push(i), (s = i)
	}
	return t
}
function nt(s, e) {
	const t = []
	for (; s.nextElementSibling; ) {
		const i = s.nextElementSibling
		e ? i.matches(e) && t.push(i) : t.push(i), (s = i)
	}
	return t
}
function J(s, e) {
	return R().getComputedStyle(s, null).getPropertyValue(e)
}
function pe(s) {
	let e = s,
		t
	if (e) {
		for (t = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (t += 1)
		return t
	}
}
function se(s, e) {
	const t = []
	let i = s.parentElement
	for (; i; ) e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement)
	return t
}
function ue(s, e) {
	function t(i) {
		i.target === s && (e.call(s, i), s.removeEventListener("transitionend", t))
	}
	e && s.addEventListener("transitionend", t)
}
function $e(s, e, t) {
	const i = R()
	return t
		? s[e === "width" ? "offsetWidth" : "offsetHeight"] +
				parseFloat(
					i
						.getComputedStyle(s, null)
						.getPropertyValue(e === "width" ? "margin-right" : "margin-top")
				) +
				parseFloat(
					i
						.getComputedStyle(s, null)
						.getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
				)
		: s.offsetWidth
}
let Me
function lt() {
	const s = R(),
		e = Y()
	return {
		smoothScroll:
			e.documentElement &&
			e.documentElement.style &&
			"scrollBehavior" in e.documentElement.style,
		touch: !!(
			"ontouchstart" in s ||
			(s.DocumentTouch && e instanceof s.DocumentTouch)
		),
	}
}
function Ue() {
	return Me || (Me = lt()), Me
}
let Ce
function ot(s) {
	let { userAgent: e } = s === void 0 ? {} : s
	const t = Ue(),
		i = R(),
		a = i.navigator.platform,
		r = e || i.navigator.userAgent,
		c = { ios: !1, android: !1 },
		f = i.screen.width,
		n = i.screen.height,
		u = r.match(/(Android);?[\s\/]+([\d.]+)?/)
	let o = r.match(/(iPad).*OS\s([\d_]+)/)
	const l = r.match(/(iPod)(.*OS\s([\d_]+))?/),
		d = !o && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		m = a === "Win32"
	let w = a === "MacIntel"
	const v = [
		"1024x1366",
		"1366x1024",
		"834x1194",
		"1194x834",
		"834x1112",
		"1112x834",
		"768x1024",
		"1024x768",
		"820x1180",
		"1180x820",
		"810x1080",
		"1080x810",
	]
	return (
		!o &&
			w &&
			t.touch &&
			v.indexOf(`${f}x${n}`) >= 0 &&
			((o = r.match(/(Version)\/([\d.]+)/)),
			o || (o = [0, 1, "13_0_0"]),
			(w = !1)),
		u && !m && ((c.os = "android"), (c.android = !0)),
		(o || d || l) && ((c.os = "ios"), (c.ios = !0)),
		c
	)
}
function dt(s) {
	return s === void 0 && (s = {}), Ce || (Ce = ot(s)), Ce
}
let Pe
function ct() {
	const s = R()
	let e = !1
	function t() {
		const i = s.navigator.userAgent.toLowerCase()
		return (
			i.indexOf("safari") >= 0 &&
			i.indexOf("chrome") < 0 &&
			i.indexOf("android") < 0
		)
	}
	if (t()) {
		const i = String(s.navigator.userAgent)
		if (i.includes("Version/")) {
			const [a, r] = i
				.split("Version/")[1]
				.split(" ")[0]
				.split(".")
				.map((c) => Number(c))
			e = a < 16 || (a === 16 && r < 2)
		}
	}
	return {
		isSafari: e || t(),
		needPerspectiveFix: e,
		isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
			s.navigator.userAgent
		),
	}
}
function ft() {
	return Pe || (Pe = ct()), Pe
}
function ut(s) {
	let { swiper: e, on: t, emit: i } = s
	const a = R()
	let r = null,
		c = null
	const f = () => {
			!e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"))
		},
		n = () => {
			!e ||
				e.destroyed ||
				!e.initialized ||
				((r = new ResizeObserver((l) => {
					c = a.requestAnimationFrame(() => {
						const { width: d, height: m } = e
						let w = d,
							v = m
						l.forEach((g) => {
							let { contentBoxSize: y, contentRect: h, target: p } = g
							;(p && p !== e.el) ||
								((w = h ? h.width : (y[0] || y).inlineSize),
								(v = h ? h.height : (y[0] || y).blockSize))
						}),
							(w !== d || v !== m) && f()
					})
				})),
				r.observe(e.el))
		},
		u = () => {
			c && a.cancelAnimationFrame(c),
				r && r.unobserve && e.el && (r.unobserve(e.el), (r = null))
		},
		o = () => {
			!e || e.destroyed || !e.initialized || i("orientationchange")
		}
	t("init", () => {
		if (e.params.resizeObserver && typeof a.ResizeObserver < "u") {
			n()
			return
		}
		a.addEventListener("resize", f), a.addEventListener("orientationchange", o)
	}),
		t("destroy", () => {
			u(),
				a.removeEventListener("resize", f),
				a.removeEventListener("orientationchange", o)
		})
}
function pt(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	const r = [],
		c = R(),
		f = function (o, l) {
			l === void 0 && (l = {})
			const d = c.MutationObserver || c.WebkitMutationObserver,
				m = new d((w) => {
					if (e.__preventObserver__) return
					if (w.length === 1) {
						a("observerUpdate", w[0])
						return
					}
					const v = function () {
						a("observerUpdate", w[0])
					}
					c.requestAnimationFrame
						? c.requestAnimationFrame(v)
						: c.setTimeout(v, 0)
				})
			m.observe(o, {
				attributes: typeof l.attributes > "u" ? !0 : l.attributes,
				childList: typeof l.childList > "u" ? !0 : l.childList,
				characterData: typeof l.characterData > "u" ? !0 : l.characterData,
			}),
				r.push(m)
		},
		n = () => {
			if (e.params.observer) {
				if (e.params.observeParents) {
					const o = se(e.hostEl)
					for (let l = 0; l < o.length; l += 1) f(o[l])
				}
				f(e.hostEl, { childList: e.params.observeSlideChildren }),
					f(e.wrapperEl, { attributes: !1 })
			}
		},
		u = () => {
			r.forEach((o) => {
				o.disconnect()
			}),
				r.splice(0, r.length)
		}
	t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
		i("init", n),
		i("destroy", u)
}
var mt = {
	on(s, e, t) {
		const i = this
		if (!i.eventsListeners || i.destroyed || typeof e != "function") return i
		const a = t ? "unshift" : "push"
		return (
			s.split(" ").forEach((r) => {
				i.eventsListeners[r] || (i.eventsListeners[r] = []),
					i.eventsListeners[r][a](e)
			}),
			i
		)
	},
	once(s, e, t) {
		const i = this
		if (!i.eventsListeners || i.destroyed || typeof e != "function") return i
		function a() {
			i.off(s, a), a.__emitterProxy && delete a.__emitterProxy
			for (var r = arguments.length, c = new Array(r), f = 0; f < r; f++)
				c[f] = arguments[f]
			e.apply(i, c)
		}
		return (a.__emitterProxy = e), i.on(s, a, t)
	},
	onAny(s, e) {
		const t = this
		if (!t.eventsListeners || t.destroyed || typeof s != "function") return t
		const i = e ? "unshift" : "push"
		return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t
	},
	offAny(s) {
		const e = this
		if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e
		const t = e.eventsAnyListeners.indexOf(s)
		return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
	},
	off(s, e) {
		const t = this
		return (
			!t.eventsListeners ||
				t.destroyed ||
				!t.eventsListeners ||
				s.split(" ").forEach((i) => {
					typeof e > "u"
						? (t.eventsListeners[i] = [])
						: t.eventsListeners[i] &&
						  t.eventsListeners[i].forEach((a, r) => {
								;(a === e || (a.__emitterProxy && a.__emitterProxy === e)) &&
									t.eventsListeners[i].splice(r, 1)
						  })
				}),
			t
		)
	},
	emit() {
		const s = this
		if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s
		let e, t, i
		for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
			r[c] = arguments[c]
		return (
			typeof r[0] == "string" || Array.isArray(r[0])
				? ((e = r[0]), (t = r.slice(1, r.length)), (i = s))
				: ((e = r[0].events), (t = r[0].data), (i = r[0].context || s)),
			t.unshift(i),
			(Array.isArray(e) ? e : e.split(" ")).forEach((n) => {
				s.eventsAnyListeners &&
					s.eventsAnyListeners.length &&
					s.eventsAnyListeners.forEach((u) => {
						u.apply(i, [n, ...t])
					}),
					s.eventsListeners &&
						s.eventsListeners[n] &&
						s.eventsListeners[n].forEach((u) => {
							u.apply(i, t)
						})
			}),
			s
		)
	},
}
function ht() {
	const s = this
	let e, t
	const i = s.el
	typeof s.params.width < "u" && s.params.width !== null
		? (e = s.params.width)
		: (e = i.clientWidth),
		typeof s.params.height < "u" && s.params.height !== null
			? (t = s.params.height)
			: (t = i.clientHeight),
		!((e === 0 && s.isHorizontal()) || (t === 0 && s.isVertical())) &&
			((e =
				e -
				parseInt(J(i, "padding-left") || 0, 10) -
				parseInt(J(i, "padding-right") || 0, 10)),
			(t =
				t -
				parseInt(J(i, "padding-top") || 0, 10) -
				parseInt(J(i, "padding-bottom") || 0, 10)),
			Number.isNaN(e) && (e = 0),
			Number.isNaN(t) && (t = 0),
			Object.assign(s, { width: e, height: t, size: s.isHorizontal() ? e : t }))
}
function gt() {
	const s = this
	function e(T, L) {
		return parseFloat(T.getPropertyValue(s.getDirectionLabel(L)) || 0)
	}
	const t = s.params,
		{ wrapperEl: i, slidesEl: a, size: r, rtlTranslate: c, wrongRTL: f } = s,
		n = s.virtual && t.virtual.enabled,
		u = n ? s.virtual.slides.length : s.slides.length,
		o = N(a, `.${s.params.slideClass}, swiper-slide`),
		l = n ? s.virtual.slides.length : o.length
	let d = []
	const m = [],
		w = []
	let v = t.slidesOffsetBefore
	typeof v == "function" && (v = t.slidesOffsetBefore.call(s))
	let g = t.slidesOffsetAfter
	typeof g == "function" && (g = t.slidesOffsetAfter.call(s))
	const y = s.snapGrid.length,
		h = s.slidesGrid.length
	let p = t.spaceBetween,
		S = -v,
		I = 0,
		C = 0
	if (typeof r > "u") return
	typeof p == "string" && p.indexOf("%") >= 0
		? (p = (parseFloat(p.replace("%", "")) / 100) * r)
		: typeof p == "string" && (p = parseFloat(p)),
		(s.virtualSize = -p),
		o.forEach((T) => {
			c ? (T.style.marginLeft = "") : (T.style.marginRight = ""),
				(T.style.marginBottom = ""),
				(T.style.marginTop = "")
		}),
		t.centeredSlides &&
			t.cssMode &&
			(fe(i, "--swiper-centered-offset-before", ""),
			fe(i, "--swiper-centered-offset-after", ""))
	const k = t.grid && t.grid.rows > 1 && s.grid
	k ? s.grid.initSlides(o) : s.grid && s.grid.unsetSlides()
	let $
	const P =
		t.slidesPerView === "auto" &&
		t.breakpoints &&
		Object.keys(t.breakpoints).filter(
			(T) => typeof t.breakpoints[T].slidesPerView < "u"
		).length > 0
	for (let T = 0; T < l; T += 1) {
		$ = 0
		let L
		if (
			(o[T] && (L = o[T]),
			k && s.grid.updateSlide(T, L, o),
			!(o[T] && J(L, "display") === "none"))
		) {
			if (t.slidesPerView === "auto") {
				P && (o[T].style[s.getDirectionLabel("width")] = "")
				const M = getComputedStyle(L),
					x = L.style.transform,
					b = L.style.webkitTransform
				if (
					(x && (L.style.transform = "none"),
					b && (L.style.webkitTransform = "none"),
					t.roundLengths)
				)
					$ = s.isHorizontal() ? $e(L, "width", !0) : $e(L, "height", !0)
				else {
					const E = e(M, "width"),
						D = e(M, "padding-left"),
						O = e(M, "padding-right"),
						A = e(M, "margin-left"),
						z = e(M, "margin-right"),
						G = M.getPropertyValue("box-sizing")
					if (G && G === "border-box") $ = E + A + z
					else {
						const { clientWidth: B, offsetWidth: V } = L
						$ = E + D + O + A + z + (V - B)
					}
				}
				x && (L.style.transform = x),
					b && (L.style.webkitTransform = b),
					t.roundLengths && ($ = Math.floor($))
			} else
				($ = (r - (t.slidesPerView - 1) * p) / t.slidesPerView),
					t.roundLengths && ($ = Math.floor($)),
					o[T] && (o[T].style[s.getDirectionLabel("width")] = `${$}px`)
			o[T] && (o[T].swiperSlideSize = $),
				w.push($),
				t.centeredSlides
					? ((S = S + $ / 2 + I / 2 + p),
					  I === 0 && T !== 0 && (S = S - r / 2 - p),
					  T === 0 && (S = S - r / 2 - p),
					  Math.abs(S) < 1 / 1e3 && (S = 0),
					  t.roundLengths && (S = Math.floor(S)),
					  C % t.slidesPerGroup === 0 && d.push(S),
					  m.push(S))
					: (t.roundLengths && (S = Math.floor(S)),
					  (C - Math.min(s.params.slidesPerGroupSkip, C)) %
							s.params.slidesPerGroup ===
							0 && d.push(S),
					  m.push(S),
					  (S = S + $ + p)),
				(s.virtualSize += $ + p),
				(I = $),
				(C += 1)
		}
	}
	if (
		((s.virtualSize = Math.max(s.virtualSize, r) + g),
		c &&
			f &&
			(t.effect === "slide" || t.effect === "coverflow") &&
			(i.style.width = `${s.virtualSize + p}px`),
		t.setWrapperSize &&
			(i.style[s.getDirectionLabel("width")] = `${s.virtualSize + p}px`),
		k && s.grid.updateWrapperSize($, d),
		!t.centeredSlides)
	) {
		const T = []
		for (let L = 0; L < d.length; L += 1) {
			let M = d[L]
			t.roundLengths && (M = Math.floor(M)),
				d[L] <= s.virtualSize - r && T.push(M)
		}
		;(d = T),
			Math.floor(s.virtualSize - r) - Math.floor(d[d.length - 1]) > 1 &&
				d.push(s.virtualSize - r)
	}
	if (n && t.loop) {
		const T = w[0] + p
		if (t.slidesPerGroup > 1) {
			const L = Math.ceil(
					(s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup
				),
				M = T * t.slidesPerGroup
			for (let x = 0; x < L; x += 1) d.push(d[d.length - 1] + M)
		}
		for (let L = 0; L < s.virtual.slidesBefore + s.virtual.slidesAfter; L += 1)
			t.slidesPerGroup === 1 && d.push(d[d.length - 1] + T),
				m.push(m[m.length - 1] + T),
				(s.virtualSize += T)
	}
	if ((d.length === 0 && (d = [0]), p !== 0)) {
		const T =
			s.isHorizontal() && c ? "marginLeft" : s.getDirectionLabel("marginRight")
		o.filter((L, M) =>
			!t.cssMode || t.loop ? !0 : M !== o.length - 1
		).forEach((L) => {
			L.style[T] = `${p}px`
		})
	}
	if (t.centeredSlides && t.centeredSlidesBounds) {
		let T = 0
		w.forEach((M) => {
			T += M + (p || 0)
		}),
			(T -= p)
		const L = T - r
		d = d.map((M) => (M <= 0 ? -v : M > L ? L + g : M))
	}
	if (t.centerInsufficientSlides) {
		let T = 0
		if (
			(w.forEach((L) => {
				T += L + (p || 0)
			}),
			(T -= p),
			T < r)
		) {
			const L = (r - T) / 2
			d.forEach((M, x) => {
				d[x] = M - L
			}),
				m.forEach((M, x) => {
					m[x] = M + L
				})
		}
	}
	if (
		(Object.assign(s, {
			slides: o,
			snapGrid: d,
			slidesGrid: m,
			slidesSizesGrid: w,
		}),
		t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
	) {
		fe(i, "--swiper-centered-offset-before", `${-d[0]}px`),
			fe(
				i,
				"--swiper-centered-offset-after",
				`${s.size / 2 - w[w.length - 1] / 2}px`
			)
		const T = -s.snapGrid[0],
			L = -s.slidesGrid[0]
		;(s.snapGrid = s.snapGrid.map((M) => M + T)),
			(s.slidesGrid = s.slidesGrid.map((M) => M + L))
	}
	if (
		(l !== u && s.emit("slidesLengthChange"),
		d.length !== y &&
			(s.params.watchOverflow && s.checkOverflow(),
			s.emit("snapGridLengthChange")),
		m.length !== h && s.emit("slidesGridLengthChange"),
		t.watchSlidesProgress && s.updateSlidesOffset(),
		!n && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
	) {
		const T = `${t.containerModifierClass}backface-hidden`,
			L = s.el.classList.contains(T)
		l <= t.maxBackfaceHiddenSlides
			? L || s.el.classList.add(T)
			: L && s.el.classList.remove(T)
	}
}
function vt(s) {
	const e = this,
		t = [],
		i = e.virtual && e.params.virtual.enabled
	let a = 0,
		r
	typeof s == "number"
		? e.setTransition(s)
		: s === !0 && e.setTransition(e.params.speed)
	const c = (f) => (i ? e.slides[e.getSlideIndexByData(f)] : e.slides[f])
	if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
		if (e.params.centeredSlides)
			(e.visibleSlides || []).forEach((f) => {
				t.push(f)
			})
		else
			for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
				const f = e.activeIndex + r
				if (f > e.slides.length && !i) break
				t.push(c(f))
			}
	else t.push(c(e.activeIndex))
	for (r = 0; r < t.length; r += 1)
		if (typeof t[r] < "u") {
			const f = t[r].offsetHeight
			a = f > a ? f : a
		}
	;(a || a === 0) && (e.wrapperEl.style.height = `${a}px`)
}
function wt() {
	const s = this,
		e = s.slides,
		t = s.isElement
			? s.isHorizontal()
				? s.wrapperEl.offsetLeft
				: s.wrapperEl.offsetTop
			: 0
	for (let i = 0; i < e.length; i += 1)
		e[i].swiperSlideOffset =
			(s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
			t -
			s.cssOverflowAdjustment()
}
function yt(s) {
	s === void 0 && (s = (this && this.translate) || 0)
	const e = this,
		t = e.params,
		{ slides: i, rtlTranslate: a, snapGrid: r } = e
	if (i.length === 0) return
	typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset()
	let c = -s
	a && (c = s),
		i.forEach((n) => {
			n.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
		}),
		(e.visibleSlidesIndexes = []),
		(e.visibleSlides = [])
	let f = t.spaceBetween
	typeof f == "string" && f.indexOf("%") >= 0
		? (f = (parseFloat(f.replace("%", "")) / 100) * e.size)
		: typeof f == "string" && (f = parseFloat(f))
	for (let n = 0; n < i.length; n += 1) {
		const u = i[n]
		let o = u.swiperSlideOffset
		t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset)
		const l =
				(c + (t.centeredSlides ? e.minTranslate() : 0) - o) /
				(u.swiperSlideSize + f),
			d =
				(c - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - o) /
				(u.swiperSlideSize + f),
			m = -(c - o),
			w = m + e.slidesSizesGrid[n],
			v = m >= 0 && m <= e.size - e.slidesSizesGrid[n]
		;((m >= 0 && m < e.size - 1) ||
			(w > 1 && w <= e.size) ||
			(m <= 0 && w >= e.size)) &&
			(e.visibleSlides.push(u),
			e.visibleSlidesIndexes.push(n),
			i[n].classList.add(t.slideVisibleClass)),
			v && i[n].classList.add(t.slideFullyVisibleClass),
			(u.progress = a ? -l : l),
			(u.originalProgress = a ? -d : d)
	}
}
function bt(s) {
	const e = this
	if (typeof s > "u") {
		const o = e.rtlTranslate ? -1 : 1
		s = (e && e.translate && e.translate * o) || 0
	}
	const t = e.params,
		i = e.maxTranslate() - e.minTranslate()
	let { progress: a, isBeginning: r, isEnd: c, progressLoop: f } = e
	const n = r,
		u = c
	if (i === 0) (a = 0), (r = !0), (c = !0)
	else {
		a = (s - e.minTranslate()) / i
		const o = Math.abs(s - e.minTranslate()) < 1,
			l = Math.abs(s - e.maxTranslate()) < 1
		;(r = o || a <= 0), (c = l || a >= 1), o && (a = 0), l && (a = 1)
	}
	if (t.loop) {
		const o = e.getSlideIndexByData(0),
			l = e.getSlideIndexByData(e.slides.length - 1),
			d = e.slidesGrid[o],
			m = e.slidesGrid[l],
			w = e.slidesGrid[e.slidesGrid.length - 1],
			v = Math.abs(s)
		v >= d ? (f = (v - d) / w) : (f = (v + w - m) / w), f > 1 && (f -= 1)
	}
	Object.assign(e, { progress: a, progressLoop: f, isBeginning: r, isEnd: c }),
		(t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
			e.updateSlidesProgress(s),
		r && !n && e.emit("reachBeginning toEdge"),
		c && !u && e.emit("reachEnd toEdge"),
		((n && !r) || (u && !c)) && e.emit("fromEdge"),
		e.emit("progress", a)
}
function St() {
	const s = this,
		{ slides: e, params: t, slidesEl: i, activeIndex: a } = s,
		r = s.virtual && t.virtual.enabled,
		c = s.grid && t.grid && t.grid.rows > 1,
		f = (l) => N(i, `.${t.slideClass}${l}, swiper-slide${l}`)[0]
	e.forEach((l) => {
		l.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
	})
	let n, u, o
	if (r)
		if (t.loop) {
			let l = a - s.virtual.slidesBefore
			l < 0 && (l = s.virtual.slides.length + l),
				l >= s.virtual.slides.length && (l -= s.virtual.slides.length),
				(n = f(`[data-swiper-slide-index="${l}"]`))
		} else n = f(`[data-swiper-slide-index="${a}"]`)
	else
		c
			? ((n = e.filter((l) => l.column === a)[0]),
			  (o = e.filter((l) => l.column === a + 1)[0]),
			  (u = e.filter((l) => l.column === a - 1)[0]))
			: (n = e[a])
	n &&
		(n.classList.add(t.slideActiveClass),
		c
			? (o && o.classList.add(t.slideNextClass),
			  u && u.classList.add(t.slidePrevClass))
			: ((o = nt(n, `.${t.slideClass}, swiper-slide`)[0]),
			  t.loop && !o && (o = e[0]),
			  o && o.classList.add(t.slideNextClass),
			  (u = at(n, `.${t.slideClass}, swiper-slide`)[0]),
			  t.loop && !u === 0 && (u = e[e.length - 1]),
			  u && u.classList.add(t.slidePrevClass))),
		s.emitSlidesClasses()
}
const ve = (s, e) => {
		if (!s || s.destroyed || !s.params) return
		const t = () => (s.isElement ? "swiper-slide" : `.${s.params.slideClass}`),
			i = e.closest(t())
		if (i) {
			let a = i.querySelector(`.${s.params.lazyPreloaderClass}`)
			!a &&
				s.isElement &&
				(i.shadowRoot
					? (a = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`))
					: requestAnimationFrame(() => {
							i.shadowRoot &&
								((a = i.shadowRoot.querySelector(
									`.${s.params.lazyPreloaderClass}`
								)),
								a && a.remove())
					  })),
				a && a.remove()
		}
	},
	Le = (s, e) => {
		if (!s.slides[e]) return
		const t = s.slides[e].querySelector('[loading="lazy"]')
		t && t.removeAttribute("loading")
	},
	Oe = (s) => {
		if (!s || s.destroyed || !s.params) return
		let e = s.params.lazyPreloadPrevNext
		const t = s.slides.length
		if (!t || !e || e < 0) return
		e = Math.min(e, t)
		const i =
				s.params.slidesPerView === "auto"
					? s.slidesPerViewDynamic()
					: Math.ceil(s.params.slidesPerView),
			a = s.activeIndex
		if (s.params.grid && s.params.grid.rows > 1) {
			const c = a,
				f = [c - e]
			f.push(...Array.from({ length: e }).map((n, u) => c + i + u)),
				s.slides.forEach((n, u) => {
					f.includes(n.column) && Le(s, u)
				})
			return
		}
		const r = a + i - 1
		if (s.params.rewind || s.params.loop)
			for (let c = a - e; c <= r + e; c += 1) {
				const f = ((c % t) + t) % t
				;(f < a || f > r) && Le(s, f)
			}
		else
			for (let c = Math.max(a - e, 0); c <= Math.min(r + e, t - 1); c += 1)
				c !== a && (c > r || c < a) && Le(s, c)
	}
function Et(s) {
	const { slidesGrid: e, params: t } = s,
		i = s.rtlTranslate ? s.translate : -s.translate
	let a
	for (let r = 0; r < e.length; r += 1)
		typeof e[r + 1] < "u"
			? i >= e[r] && i < e[r + 1] - (e[r + 1] - e[r]) / 2
				? (a = r)
				: i >= e[r] && i < e[r + 1] && (a = r + 1)
			: i >= e[r] && (a = r)
	return t.normalizeSlideIndex && (a < 0 || typeof a > "u") && (a = 0), a
}
function xt(s) {
	const e = this,
		t = e.rtlTranslate ? e.translate : -e.translate,
		{ snapGrid: i, params: a, activeIndex: r, realIndex: c, snapIndex: f } = e
	let n = s,
		u
	const o = (m) => {
		let w = m - e.virtual.slidesBefore
		return (
			w < 0 && (w = e.virtual.slides.length + w),
			w >= e.virtual.slides.length && (w -= e.virtual.slides.length),
			w
		)
	}
	if ((typeof n > "u" && (n = Et(e)), i.indexOf(t) >= 0)) u = i.indexOf(t)
	else {
		const m = Math.min(a.slidesPerGroupSkip, n)
		u = m + Math.floor((n - m) / a.slidesPerGroup)
	}
	if ((u >= i.length && (u = i.length - 1), n === r && !e.params.loop)) {
		u !== f && ((e.snapIndex = u), e.emit("snapIndexChange"))
		return
	}
	if (n === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
		e.realIndex = o(n)
		return
	}
	const l = e.grid && a.grid && a.grid.rows > 1
	let d
	if (e.virtual && a.virtual.enabled && a.loop) d = o(n)
	else if (l) {
		const m = e.slides.filter((v) => v.column === n)[0]
		let w = parseInt(m.getAttribute("data-swiper-slide-index"), 10)
		Number.isNaN(w) && (w = Math.max(e.slides.indexOf(m), 0)),
			(d = Math.floor(w / a.grid.rows))
	} else if (e.slides[n]) {
		const m = e.slides[n].getAttribute("data-swiper-slide-index")
		m ? (d = parseInt(m, 10)) : (d = n)
	} else d = n
	Object.assign(e, {
		previousSnapIndex: f,
		snapIndex: u,
		previousRealIndex: c,
		realIndex: d,
		previousIndex: r,
		activeIndex: n,
	}),
		e.initialized && Oe(e),
		e.emit("activeIndexChange"),
		e.emit("snapIndexChange"),
		(e.initialized || e.params.runCallbacksOnInit) &&
			(c !== d && e.emit("realIndexChange"), e.emit("slideChange"))
}
function Tt(s, e) {
	const t = this,
		i = t.params
	let a = s.closest(`.${i.slideClass}, swiper-slide`)
	!a &&
		t.isElement &&
		e &&
		e.length > 1 &&
		e.includes(s) &&
		[...e.slice(e.indexOf(s) + 1, e.length)].forEach((f) => {
			!a && f.matches && f.matches(`.${i.slideClass}, swiper-slide`) && (a = f)
		})
	let r = !1,
		c
	if (a) {
		for (let f = 0; f < t.slides.length; f += 1)
			if (t.slides[f] === a) {
				;(r = !0), (c = f)
				break
			}
	}
	if (a && r)
		(t.clickedSlide = a),
			t.virtual && t.params.virtual.enabled
				? (t.clickedIndex = parseInt(
						a.getAttribute("data-swiper-slide-index"),
						10
				  ))
				: (t.clickedIndex = c)
	else {
		;(t.clickedSlide = void 0), (t.clickedIndex = void 0)
		return
	}
	i.slideToClickedSlide &&
		t.clickedIndex !== void 0 &&
		t.clickedIndex !== t.activeIndex &&
		t.slideToClickedSlide()
}
var Mt = {
	updateSize: ht,
	updateSlides: gt,
	updateAutoHeight: vt,
	updateSlidesOffset: wt,
	updateSlidesProgress: yt,
	updateProgress: bt,
	updateSlidesClasses: St,
	updateActiveIndex: xt,
	updateClickedSlide: Tt,
}
function Ct(s) {
	s === void 0 && (s = this.isHorizontal() ? "x" : "y")
	const e = this,
		{ params: t, rtlTranslate: i, translate: a, wrapperEl: r } = e
	if (t.virtualTranslate) return i ? -a : a
	if (t.cssMode) return a
	let c = ze(r, s)
	return (c += e.cssOverflowAdjustment()), i && (c = -c), c || 0
}
function Pt(s, e) {
	const t = this,
		{ rtlTranslate: i, params: a, wrapperEl: r, progress: c } = t
	let f = 0,
		n = 0
	const u = 0
	t.isHorizontal() ? (f = i ? -s : s) : (n = s),
		a.roundLengths && ((f = Math.floor(f)), (n = Math.floor(n))),
		(t.previousTranslate = t.translate),
		(t.translate = t.isHorizontal() ? f : n),
		a.cssMode
			? (r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
					? -f
					: -n)
			: a.virtualTranslate ||
			  (t.isHorizontal()
					? (f -= t.cssOverflowAdjustment())
					: (n -= t.cssOverflowAdjustment()),
			  (r.style.transform = `translate3d(${f}px, ${n}px, ${u}px)`))
	let o
	const l = t.maxTranslate() - t.minTranslate()
	l === 0 ? (o = 0) : (o = (s - t.minTranslate()) / l),
		o !== c && t.updateProgress(s),
		t.emit("setTranslate", t.translate, e)
}
function Lt() {
	return -this.snapGrid[0]
}
function It() {
	return -this.snapGrid[this.snapGrid.length - 1]
}
function At(s, e, t, i, a) {
	s === void 0 && (s = 0),
		e === void 0 && (e = this.params.speed),
		t === void 0 && (t = !0),
		i === void 0 && (i = !0)
	const r = this,
		{ params: c, wrapperEl: f } = r
	if (r.animating && c.preventInteractionOnTransition) return !1
	const n = r.minTranslate(),
		u = r.maxTranslate()
	let o
	if (
		(i && s > n ? (o = n) : i && s < u ? (o = u) : (o = s),
		r.updateProgress(o),
		c.cssMode)
	) {
		const l = r.isHorizontal()
		if (e === 0) f[l ? "scrollLeft" : "scrollTop"] = -o
		else {
			if (!r.support.smoothScroll)
				return (
					je({ swiper: r, targetPosition: -o, side: l ? "left" : "top" }), !0
				)
			f.scrollTo({ [l ? "left" : "top"]: -o, behavior: "smooth" })
		}
		return !0
	}
	return (
		e === 0
			? (r.setTransition(0),
			  r.setTranslate(o),
			  t && (r.emit("beforeTransitionStart", e, a), r.emit("transitionEnd")))
			: (r.setTransition(e),
			  r.setTranslate(o),
			  t && (r.emit("beforeTransitionStart", e, a), r.emit("transitionStart")),
			  r.animating ||
					((r.animating = !0),
					r.onTranslateToWrapperTransitionEnd ||
						(r.onTranslateToWrapperTransitionEnd = function (d) {
							!r ||
								r.destroyed ||
								(d.target === this &&
									(r.wrapperEl.removeEventListener(
										"transitionend",
										r.onTranslateToWrapperTransitionEnd
									),
									(r.onTranslateToWrapperTransitionEnd = null),
									delete r.onTranslateToWrapperTransitionEnd,
									t && r.emit("transitionEnd")))
						}),
					r.wrapperEl.addEventListener(
						"transitionend",
						r.onTranslateToWrapperTransitionEnd
					))),
		!0
	)
}
var zt = {
	getTranslate: Ct,
	setTranslate: Pt,
	minTranslate: Lt,
	maxTranslate: It,
	translateTo: At,
}
function $t(s, e) {
	const t = this
	t.params.cssMode ||
		((t.wrapperEl.style.transitionDuration = `${s}ms`),
		(t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
		t.emit("setTransition", s, e)
}
function Ke(s) {
	let { swiper: e, runCallbacks: t, direction: i, step: a } = s
	const { activeIndex: r, previousIndex: c } = e
	let f = i
	if (
		(f || (r > c ? (f = "next") : r < c ? (f = "prev") : (f = "reset")),
		e.emit(`transition${a}`),
		t && r !== c)
	) {
		if (f === "reset") {
			e.emit(`slideResetTransition${a}`)
			return
		}
		e.emit(`slideChangeTransition${a}`),
			f === "next"
				? e.emit(`slideNextTransition${a}`)
				: e.emit(`slidePrevTransition${a}`)
	}
}
function Ot(s, e) {
	s === void 0 && (s = !0)
	const t = this,
		{ params: i } = t
	i.cssMode ||
		(i.autoHeight && t.updateAutoHeight(),
		Ke({ swiper: t, runCallbacks: s, direction: e, step: "Start" }))
}
function Dt(s, e) {
	s === void 0 && (s = !0)
	const t = this,
		{ params: i } = t
	;(t.animating = !1),
		!i.cssMode &&
			(t.setTransition(0),
			Ke({ swiper: t, runCallbacks: s, direction: e, step: "End" }))
}
var kt = { setTransition: $t, transitionStart: Ot, transitionEnd: Dt }
function Gt(s, e, t, i, a) {
	s === void 0 && (s = 0),
		e === void 0 && (e = this.params.speed),
		t === void 0 && (t = !0),
		typeof s == "string" && (s = parseInt(s, 10))
	const r = this
	let c = s
	c < 0 && (c = 0)
	const {
		params: f,
		snapGrid: n,
		slidesGrid: u,
		previousIndex: o,
		activeIndex: l,
		rtlTranslate: d,
		wrapperEl: m,
		enabled: w,
	} = r
	if ((r.animating && f.preventInteractionOnTransition) || (!w && !i && !a))
		return !1
	const v = Math.min(r.params.slidesPerGroupSkip, c)
	let g = v + Math.floor((c - v) / r.params.slidesPerGroup)
	g >= n.length && (g = n.length - 1)
	const y = -n[g]
	if (f.normalizeSlideIndex)
		for (let p = 0; p < u.length; p += 1) {
			const S = -Math.floor(y * 100),
				I = Math.floor(u[p] * 100),
				C = Math.floor(u[p + 1] * 100)
			typeof u[p + 1] < "u"
				? S >= I && S < C - (C - I) / 2
					? (c = p)
					: S >= I && S < C && (c = p + 1)
				: S >= I && (c = p)
		}
	if (
		r.initialized &&
		c !== l &&
		((!r.allowSlideNext &&
			(d
				? y > r.translate && y > r.minTranslate()
				: y < r.translate && y < r.minTranslate())) ||
			(!r.allowSlidePrev &&
				y > r.translate &&
				y > r.maxTranslate() &&
				(l || 0) !== c))
	)
		return !1
	c !== (o || 0) && t && r.emit("beforeSlideChangeStart"), r.updateProgress(y)
	let h
	if (
		(c > l ? (h = "next") : c < l ? (h = "prev") : (h = "reset"),
		(d && -y === r.translate) || (!d && y === r.translate))
	)
		return (
			r.updateActiveIndex(c),
			f.autoHeight && r.updateAutoHeight(),
			r.updateSlidesClasses(),
			f.effect !== "slide" && r.setTranslate(y),
			h !== "reset" && (r.transitionStart(t, h), r.transitionEnd(t, h)),
			!1
		)
	if (f.cssMode) {
		const p = r.isHorizontal(),
			S = d ? y : -y
		if (e === 0) {
			const I = r.virtual && r.params.virtual.enabled
			I &&
				((r.wrapperEl.style.scrollSnapType = "none"),
				(r._immediateVirtual = !0)),
				I && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
					? ((r._cssModeVirtualInitialSet = !0),
					  requestAnimationFrame(() => {
							m[p ? "scrollLeft" : "scrollTop"] = S
					  }))
					: (m[p ? "scrollLeft" : "scrollTop"] = S),
				I &&
					requestAnimationFrame(() => {
						;(r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1)
					})
		} else {
			if (!r.support.smoothScroll)
				return (
					je({ swiper: r, targetPosition: S, side: p ? "left" : "top" }), !0
				)
			m.scrollTo({ [p ? "left" : "top"]: S, behavior: "smooth" })
		}
		return !0
	}
	return (
		r.setTransition(e),
		r.setTranslate(y),
		r.updateActiveIndex(c),
		r.updateSlidesClasses(),
		r.emit("beforeTransitionStart", e, i),
		r.transitionStart(t, h),
		e === 0
			? r.transitionEnd(t, h)
			: r.animating ||
			  ((r.animating = !0),
			  r.onSlideToWrapperTransitionEnd ||
					(r.onSlideToWrapperTransitionEnd = function (S) {
						!r ||
							r.destroyed ||
							(S.target === this &&
								(r.wrapperEl.removeEventListener(
									"transitionend",
									r.onSlideToWrapperTransitionEnd
								),
								(r.onSlideToWrapperTransitionEnd = null),
								delete r.onSlideToWrapperTransitionEnd,
								r.transitionEnd(t, h)))
					}),
			  r.wrapperEl.addEventListener(
					"transitionend",
					r.onSlideToWrapperTransitionEnd
			  )),
		!0
	)
}
function Ht(s, e, t, i) {
	s === void 0 && (s = 0),
		e === void 0 && (e = this.params.speed),
		t === void 0 && (t = !0),
		typeof s == "string" && (s = parseInt(s, 10))
	const a = this,
		r = a.grid && a.params.grid && a.params.grid.rows > 1
	let c = s
	if (a.params.loop)
		if (a.virtual && a.params.virtual.enabled) c = c + a.virtual.slidesBefore
		else {
			let f
			if (r) {
				const d = c * a.params.grid.rows
				f = a.slides.filter(
					(m) => m.getAttribute("data-swiper-slide-index") * 1 === d
				)[0].column
			} else f = a.getSlideIndexByData(c)
			const n = r
					? Math.ceil(a.slides.length / a.params.grid.rows)
					: a.slides.length,
				{ centeredSlides: u } = a.params
			let o = a.params.slidesPerView
			o === "auto"
				? (o = a.slidesPerViewDynamic())
				: ((o = Math.ceil(parseFloat(a.params.slidesPerView, 10))),
				  u && o % 2 === 0 && (o = o + 1))
			let l = n - f < o
			if ((u && (l = l || f < Math.ceil(o / 2)), l)) {
				const d = u
					? f < a.activeIndex
						? "prev"
						: "next"
					: f - a.activeIndex - 1 < a.params.slidesPerView
					? "next"
					: "prev"
				a.loopFix({
					direction: d,
					slideTo: !0,
					activeSlideIndex: d === "next" ? f + 1 : f - n + 1,
					slideRealIndex: d === "next" ? a.realIndex : void 0,
				})
			}
			if (r) {
				const d = c * a.params.grid.rows
				c = a.slides.filter(
					(m) => m.getAttribute("data-swiper-slide-index") * 1 === d
				)[0].column
			} else c = a.getSlideIndexByData(c)
		}
	return (
		requestAnimationFrame(() => {
			a.slideTo(c, e, t, i)
		}),
		a
	)
}
function Bt(s, e, t) {
	s === void 0 && (s = this.params.speed), e === void 0 && (e = !0)
	const i = this,
		{ enabled: a, params: r, animating: c } = i
	if (!a) return i
	let f = r.slidesPerGroup
	r.slidesPerView === "auto" &&
		r.slidesPerGroup === 1 &&
		r.slidesPerGroupAuto &&
		(f = Math.max(i.slidesPerViewDynamic("current", !0), 1))
	const n = i.activeIndex < r.slidesPerGroupSkip ? 1 : f,
		u = i.virtual && r.virtual.enabled
	if (r.loop) {
		if (c && !u && r.loopPreventsSliding) return !1
		if (
			(i.loopFix({ direction: "next" }),
			(i._clientLeft = i.wrapperEl.clientLeft),
			i.activeIndex === i.slides.length - 1 && r.cssMode)
		)
			return (
				requestAnimationFrame(() => {
					i.slideTo(i.activeIndex + n, s, e, t)
				}),
				!0
			)
	}
	return r.rewind && i.isEnd
		? i.slideTo(0, s, e, t)
		: i.slideTo(i.activeIndex + n, s, e, t)
}
function Xt(s, e, t) {
	s === void 0 && (s = this.params.speed), e === void 0 && (e = !0)
	const i = this,
		{
			params: a,
			snapGrid: r,
			slidesGrid: c,
			rtlTranslate: f,
			enabled: n,
			animating: u,
		} = i
	if (!n) return i
	const o = i.virtual && a.virtual.enabled
	if (a.loop) {
		if (u && !o && a.loopPreventsSliding) return !1
		i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft)
	}
	const l = f ? i.translate : -i.translate
	function d(y) {
		return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y)
	}
	const m = d(l),
		w = r.map((y) => d(y))
	let v = r[w.indexOf(m) - 1]
	if (typeof v > "u" && a.cssMode) {
		let y
		r.forEach((h, p) => {
			m >= h && (y = p)
		}),
			typeof y < "u" && (v = r[y > 0 ? y - 1 : y])
	}
	let g = 0
	if (
		(typeof v < "u" &&
			((g = c.indexOf(v)),
			g < 0 && (g = i.activeIndex - 1),
			a.slidesPerView === "auto" &&
				a.slidesPerGroup === 1 &&
				a.slidesPerGroupAuto &&
				((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
				(g = Math.max(g, 0)))),
		a.rewind && i.isBeginning)
	) {
		const y =
			i.params.virtual && i.params.virtual.enabled && i.virtual
				? i.virtual.slides.length - 1
				: i.slides.length - 1
		return i.slideTo(y, s, e, t)
	} else if (a.loop && i.activeIndex === 0 && a.cssMode)
		return (
			requestAnimationFrame(() => {
				i.slideTo(g, s, e, t)
			}),
			!0
		)
	return i.slideTo(g, s, e, t)
}
function Rt(s, e, t) {
	s === void 0 && (s = this.params.speed), e === void 0 && (e = !0)
	const i = this
	return i.slideTo(i.activeIndex, s, e, t)
}
function Nt(s, e, t, i) {
	s === void 0 && (s = this.params.speed),
		e === void 0 && (e = !0),
		i === void 0 && (i = 0.5)
	const a = this
	let r = a.activeIndex
	const c = Math.min(a.params.slidesPerGroupSkip, r),
		f = c + Math.floor((r - c) / a.params.slidesPerGroup),
		n = a.rtlTranslate ? a.translate : -a.translate
	if (n >= a.snapGrid[f]) {
		const u = a.snapGrid[f],
			o = a.snapGrid[f + 1]
		n - u > (o - u) * i && (r += a.params.slidesPerGroup)
	} else {
		const u = a.snapGrid[f - 1],
			o = a.snapGrid[f]
		n - u <= (o - u) * i && (r -= a.params.slidesPerGroup)
	}
	return (
		(r = Math.max(r, 0)),
		(r = Math.min(r, a.slidesGrid.length - 1)),
		a.slideTo(r, s, e, t)
	)
}
function Vt() {
	const s = this,
		{ params: e, slidesEl: t } = s,
		i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView
	let a = s.clickedIndex,
		r
	const c = s.isElement ? "swiper-slide" : `.${e.slideClass}`
	if (e.loop) {
		if (s.animating) return
		;(r = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
			e.centeredSlides
				? a < s.loopedSlides - i / 2 ||
				  a > s.slides.length - s.loopedSlides + i / 2
					? (s.loopFix(),
					  (a = s.getSlideIndex(
							N(t, `${c}[data-swiper-slide-index="${r}"]`)[0]
					  )),
					  ie(() => {
							s.slideTo(a)
					  }))
					: s.slideTo(a)
				: a > s.slides.length - i
				? (s.loopFix(),
				  (a = s.getSlideIndex(
						N(t, `${c}[data-swiper-slide-index="${r}"]`)[0]
				  )),
				  ie(() => {
						s.slideTo(a)
				  }))
				: s.slideTo(a)
	} else s.slideTo(a)
}
var Yt = {
	slideTo: Gt,
	slideToLoop: Ht,
	slideNext: Bt,
	slidePrev: Xt,
	slideReset: Rt,
	slideToClosest: Nt,
	slideToClickedSlide: Vt,
}
function Ft(s) {
	const e = this,
		{ params: t, slidesEl: i } = e
	if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
	const a = () => {
			N(i, `.${t.slideClass}, swiper-slide`).forEach((l, d) => {
				l.setAttribute("data-swiper-slide-index", d)
			})
		},
		r = e.grid && t.grid && t.grid.rows > 1,
		c = t.slidesPerGroup * (r ? t.grid.rows : 1),
		f = e.slides.length % c !== 0,
		n = r && e.slides.length % t.grid.rows !== 0,
		u = (o) => {
			for (let l = 0; l < o; l += 1) {
				const d = e.isElement
					? W("swiper-slide", [t.slideBlankClass])
					: W("div", [t.slideClass, t.slideBlankClass])
				e.slidesEl.append(d)
			}
		}
	if (f) {
		if (t.loopAddBlankSlides) {
			const o = c - (e.slides.length % c)
			u(o), e.recalcSlides(), e.updateSlides()
		} else
			we(
				"Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
			)
		a()
	} else if (n) {
		if (t.loopAddBlankSlides) {
			const o = t.grid.rows - (e.slides.length % t.grid.rows)
			u(o), e.recalcSlides(), e.updateSlides()
		} else
			we(
				"Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
			)
		a()
	} else a()
	e.loopFix({
		slideRealIndex: s,
		direction: t.centeredSlides ? void 0 : "next",
	})
}
function _t(s) {
	let {
		slideRealIndex: e,
		slideTo: t = !0,
		direction: i,
		setTranslate: a,
		activeSlideIndex: r,
		byController: c,
		byMousewheel: f,
	} = s === void 0 ? {} : s
	const n = this
	if (!n.params.loop) return
	n.emit("beforeLoopFix")
	const {
			slides: u,
			allowSlidePrev: o,
			allowSlideNext: l,
			slidesEl: d,
			params: m,
		} = n,
		{ centeredSlides: w } = m
	if (
		((n.allowSlidePrev = !0),
		(n.allowSlideNext = !0),
		n.virtual && m.virtual.enabled)
	) {
		t &&
			(!m.centeredSlides && n.snapIndex === 0
				? n.slideTo(n.virtual.slides.length, 0, !1, !0)
				: m.centeredSlides && n.snapIndex < m.slidesPerView
				? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0)
				: n.snapIndex === n.snapGrid.length - 1 &&
				  n.slideTo(n.virtual.slidesBefore, 0, !1, !0)),
			(n.allowSlidePrev = o),
			(n.allowSlideNext = l),
			n.emit("loopFix")
		return
	}
	let v = m.slidesPerView
	v === "auto"
		? (v = n.slidesPerViewDynamic())
		: ((v = Math.ceil(parseFloat(m.slidesPerView, 10))),
		  w && v % 2 === 0 && (v = v + 1))
	const g = m.slidesPerGroupAuto ? v : m.slidesPerGroup
	let y = g
	y % g !== 0 && (y += g - (y % g)),
		(y += m.loopAdditionalSlides),
		(n.loopedSlides = y)
	const h = n.grid && m.grid && m.grid.rows > 1
	u.length < v + y
		? we(
				"Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
		  )
		: h &&
		  m.grid.fill === "row" &&
		  we(
				"Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
		  )
	const p = [],
		S = []
	let I = n.activeIndex
	typeof r > "u"
		? (r = n.getSlideIndex(
				u.filter((x) => x.classList.contains(m.slideActiveClass))[0]
		  ))
		: (I = r)
	const C = i === "next" || !i,
		k = i === "prev" || !i
	let $ = 0,
		P = 0
	const T = h ? Math.ceil(u.length / m.grid.rows) : u.length,
		M = (h ? u[r].column : r) + (w && typeof a > "u" ? -v / 2 + 0.5 : 0)
	if (M < y) {
		$ = Math.max(y - M, g)
		for (let x = 0; x < y - M; x += 1) {
			const b = x - Math.floor(x / T) * T
			if (h) {
				const E = T - b - 1
				for (let D = u.length - 1; D >= 0; D -= 1)
					u[D].column === E && p.push(D)
			} else p.push(T - b - 1)
		}
	} else if (M + v > T - y) {
		P = Math.max(M - (T - y * 2), g)
		for (let x = 0; x < P; x += 1) {
			const b = x - Math.floor(x / T) * T
			h
				? u.forEach((E, D) => {
						E.column === b && S.push(D)
				  })
				: S.push(b)
		}
	}
	if (
		((n.__preventObserver__ = !0),
		requestAnimationFrame(() => {
			n.__preventObserver__ = !1
		}),
		k &&
			p.forEach((x) => {
				;(u[x].swiperLoopMoveDOM = !0),
					d.prepend(u[x]),
					(u[x].swiperLoopMoveDOM = !1)
			}),
		C &&
			S.forEach((x) => {
				;(u[x].swiperLoopMoveDOM = !0),
					d.append(u[x]),
					(u[x].swiperLoopMoveDOM = !1)
			}),
		n.recalcSlides(),
		m.slidesPerView === "auto"
			? n.updateSlides()
			: h &&
			  ((p.length > 0 && k) || (S.length > 0 && C)) &&
			  n.slides.forEach((x, b) => {
					n.grid.updateSlide(b, x, n.slides)
			  }),
		m.watchSlidesProgress && n.updateSlidesOffset(),
		t)
	) {
		if (p.length > 0 && k) {
			if (typeof e > "u") {
				const x = n.slidesGrid[I],
					E = n.slidesGrid[I + $] - x
				f
					? n.setTranslate(n.translate - E)
					: (n.slideTo(I + $, 0, !1, !0),
					  a &&
							((n.touchEventsData.startTranslate =
								n.touchEventsData.startTranslate - E),
							(n.touchEventsData.currentTranslate =
								n.touchEventsData.currentTranslate - E)))
			} else if (a) {
				const x = h ? p.length / m.grid.rows : p.length
				n.slideTo(n.activeIndex + x, 0, !1, !0),
					(n.touchEventsData.currentTranslate = n.translate)
			}
		} else if (S.length > 0 && C)
			if (typeof e > "u") {
				const x = n.slidesGrid[I],
					E = n.slidesGrid[I - P] - x
				f
					? n.setTranslate(n.translate - E)
					: (n.slideTo(I - P, 0, !1, !0),
					  a &&
							((n.touchEventsData.startTranslate =
								n.touchEventsData.startTranslate - E),
							(n.touchEventsData.currentTranslate =
								n.touchEventsData.currentTranslate - E)))
			} else {
				const x = h ? S.length / m.grid.rows : S.length
				n.slideTo(n.activeIndex - x, 0, !1, !0)
			}
	}
	if (
		((n.allowSlidePrev = o),
		(n.allowSlideNext = l),
		n.controller && n.controller.control && !c)
	) {
		const x = {
			slideRealIndex: e,
			direction: i,
			setTranslate: a,
			activeSlideIndex: r,
			byController: !0,
		}
		Array.isArray(n.controller.control)
			? n.controller.control.forEach((b) => {
					!b.destroyed &&
						b.params.loop &&
						b.loopFix({
							...x,
							slideTo: b.params.slidesPerView === m.slidesPerView ? t : !1,
						})
			  })
			: n.controller.control instanceof n.constructor &&
			  n.controller.control.params.loop &&
			  n.controller.control.loopFix({
					...x,
					slideTo:
						n.controller.control.params.slidesPerView === m.slidesPerView
							? t
							: !1,
			  })
	}
	n.emit("loopFix")
}
function Wt() {
	const s = this,
		{ params: e, slidesEl: t } = s
	if (!e.loop || (s.virtual && s.params.virtual.enabled)) return
	s.recalcSlides()
	const i = []
	s.slides.forEach((a) => {
		const r =
			typeof a.swiperSlideIndex > "u"
				? a.getAttribute("data-swiper-slide-index") * 1
				: a.swiperSlideIndex
		i[r] = a
	}),
		s.slides.forEach((a) => {
			a.removeAttribute("data-swiper-slide-index")
		}),
		i.forEach((a) => {
			t.append(a)
		}),
		s.recalcSlides(),
		s.slideTo(s.realIndex, 0)
}
var qt = { loopCreate: Ft, loopFix: _t, loopDestroy: Wt }
function jt(s) {
	const e = this
	if (
		!e.params.simulateTouch ||
		(e.params.watchOverflow && e.isLocked) ||
		e.params.cssMode
	)
		return
	const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl
	e.isElement && (e.__preventObserver__ = !0),
		(t.style.cursor = "move"),
		(t.style.cursor = s ? "grabbing" : "grab"),
		e.isElement &&
			requestAnimationFrame(() => {
				e.__preventObserver__ = !1
			})
}
function Ut() {
	const s = this
	;(s.params.watchOverflow && s.isLocked) ||
		s.params.cssMode ||
		(s.isElement && (s.__preventObserver__ = !0),
		(s[
			s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
		].style.cursor = ""),
		s.isElement &&
			requestAnimationFrame(() => {
				s.__preventObserver__ = !1
			}))
}
var Kt = { setGrabCursor: jt, unsetGrabCursor: Ut }
function Zt(s, e) {
	e === void 0 && (e = this)
	function t(i) {
		if (!i || i === Y() || i === R()) return null
		i.assignedSlot && (i = i.assignedSlot)
		const a = i.closest(s)
		return !a && !i.getRootNode ? null : a || t(i.getRootNode().host)
	}
	return t(e)
}
function Ye(s, e, t) {
	const i = R(),
		{ params: a } = s,
		r = a.edgeSwipeDetection,
		c = a.edgeSwipeThreshold
	return r && (t <= c || t >= i.innerWidth - c)
		? r === "prevent"
			? (e.preventDefault(), !0)
			: !1
		: !0
}
function Qt(s) {
	const e = this,
		t = Y()
	let i = s
	i.originalEvent && (i = i.originalEvent)
	const a = e.touchEventsData
	if (i.type === "pointerdown") {
		if (a.pointerId !== null && a.pointerId !== i.pointerId) return
		a.pointerId = i.pointerId
	} else
		i.type === "touchstart" &&
			i.targetTouches.length === 1 &&
			(a.touchId = i.targetTouches[0].identifier)
	if (i.type === "touchstart") {
		Ye(e, i, i.targetTouches[0].pageX)
		return
	}
	const { params: r, touches: c, enabled: f } = e
	if (
		!f ||
		(!r.simulateTouch && i.pointerType === "mouse") ||
		(e.animating && r.preventInteractionOnTransition)
	)
		return
	!e.animating && r.cssMode && r.loop && e.loopFix()
	let n = i.target
	if (
		(r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(n)) ||
		("which" in i && i.which === 3) ||
		("button" in i && i.button > 0) ||
		(a.isTouched && a.isMoved)
	)
		return
	const u = !!r.noSwipingClass && r.noSwipingClass !== "",
		o = i.composedPath ? i.composedPath() : i.path
	u && i.target && i.target.shadowRoot && o && (n = o[0])
	const l = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
		d = !!(i.target && i.target.shadowRoot)
	if (r.noSwiping && (d ? Zt(l, n) : n.closest(l))) {
		e.allowClick = !0
		return
	}
	if (r.swipeHandler && !n.closest(r.swipeHandler)) return
	;(c.currentX = i.pageX), (c.currentY = i.pageY)
	const m = c.currentX,
		w = c.currentY
	if (!Ye(e, i, m)) return
	Object.assign(a, {
		isTouched: !0,
		isMoved: !1,
		allowTouchCallbacks: !0,
		isScrolling: void 0,
		startMoving: void 0,
	}),
		(c.startX = m),
		(c.startY = w),
		(a.touchStartTime = j()),
		(e.allowClick = !0),
		e.updateSize(),
		(e.swipeDirection = void 0),
		r.threshold > 0 && (a.allowThresholdMove = !1)
	let v = !0
	n.matches(a.focusableElements) &&
		((v = !1), n.nodeName === "SELECT" && (a.isTouched = !1)),
		t.activeElement &&
			t.activeElement.matches(a.focusableElements) &&
			t.activeElement !== n &&
			t.activeElement.blur()
	const g = v && e.allowTouchMove && r.touchStartPreventDefault
	;(r.touchStartForcePreventDefault || g) &&
		!n.isContentEditable &&
		i.preventDefault(),
		r.freeMode &&
			r.freeMode.enabled &&
			e.freeMode &&
			e.animating &&
			!r.cssMode &&
			e.freeMode.onTouchStart(),
		e.emit("touchStart", i)
}
function Jt(s) {
	const e = Y(),
		t = this,
		i = t.touchEventsData,
		{ params: a, touches: r, rtlTranslate: c, enabled: f } = t
	if (!f || (!a.simulateTouch && s.pointerType === "mouse")) return
	let n = s
	if (
		(n.originalEvent && (n = n.originalEvent),
		n.type === "pointermove" &&
			(i.touchId !== null || n.pointerId !== i.pointerId))
	)
		return
	let u
	if (n.type === "touchmove") {
		if (
			((u = [...n.changedTouches].filter((C) => C.identifier === i.touchId)[0]),
			!u || u.identifier !== i.touchId)
		)
			return
	} else u = n
	if (!i.isTouched) {
		i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", n)
		return
	}
	const o = u.pageX,
		l = u.pageY
	if (n.preventedByNestedSwiper) {
		;(r.startX = o), (r.startY = l)
		return
	}
	if (!t.allowTouchMove) {
		n.target.matches(i.focusableElements) || (t.allowClick = !1),
			i.isTouched &&
				(Object.assign(r, { startX: o, startY: l, currentX: o, currentY: l }),
				(i.touchStartTime = j()))
		return
	}
	if (a.touchReleaseOnEdges && !a.loop) {
		if (t.isVertical()) {
			if (
				(l < r.startY && t.translate <= t.maxTranslate()) ||
				(l > r.startY && t.translate >= t.minTranslate())
			) {
				;(i.isTouched = !1), (i.isMoved = !1)
				return
			}
		} else if (
			(o < r.startX && t.translate <= t.maxTranslate()) ||
			(o > r.startX && t.translate >= t.minTranslate())
		)
			return
	}
	if (
		e.activeElement &&
		n.target === e.activeElement &&
		n.target.matches(i.focusableElements)
	) {
		;(i.isMoved = !0), (t.allowClick = !1)
		return
	}
	i.allowTouchCallbacks && t.emit("touchMove", n),
		(r.previousX = r.currentX),
		(r.previousY = r.currentY),
		(r.currentX = o),
		(r.currentY = l)
	const d = r.currentX - r.startX,
		m = r.currentY - r.startY
	if (t.params.threshold && Math.sqrt(d ** 2 + m ** 2) < t.params.threshold)
		return
	if (typeof i.isScrolling > "u") {
		let C
		;(t.isHorizontal() && r.currentY === r.startY) ||
		(t.isVertical() && r.currentX === r.startX)
			? (i.isScrolling = !1)
			: d * d + m * m >= 25 &&
			  ((C = (Math.atan2(Math.abs(m), Math.abs(d)) * 180) / Math.PI),
			  (i.isScrolling = t.isHorizontal()
					? C > a.touchAngle
					: 90 - C > a.touchAngle))
	}
	if (
		(i.isScrolling && t.emit("touchMoveOpposite", n),
		typeof i.startMoving > "u" &&
			(r.currentX !== r.startX || r.currentY !== r.startY) &&
			(i.startMoving = !0),
		i.isScrolling)
	) {
		i.isTouched = !1
		return
	}
	if (!i.startMoving) return
	;(t.allowClick = !1),
		!a.cssMode && n.cancelable && n.preventDefault(),
		a.touchMoveStopPropagation && !a.nested && n.stopPropagation()
	let w = t.isHorizontal() ? d : m,
		v = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY
	a.oneWayMovement &&
		((w = Math.abs(w) * (c ? 1 : -1)), (v = Math.abs(v) * (c ? 1 : -1))),
		(r.diff = w),
		(w *= a.touchRatio),
		c && ((w = -w), (v = -v))
	const g = t.touchesDirection
	;(t.swipeDirection = w > 0 ? "prev" : "next"),
		(t.touchesDirection = v > 0 ? "prev" : "next")
	const y = t.params.loop && !a.cssMode,
		h =
			(t.touchesDirection === "next" && t.allowSlideNext) ||
			(t.touchesDirection === "prev" && t.allowSlidePrev)
	if (!i.isMoved) {
		if (
			(y && h && t.loopFix({ direction: t.swipeDirection }),
			(i.startTranslate = t.getTranslate()),
			t.setTransition(0),
			t.animating)
		) {
			const C = new window.CustomEvent("transitionend", {
				bubbles: !0,
				cancelable: !0,
			})
			t.wrapperEl.dispatchEvent(C)
		}
		;(i.allowMomentumBounce = !1),
			a.grabCursor &&
				(t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
				t.setGrabCursor(!0),
			t.emit("sliderFirstMove", n)
	}
	let p
	if (
		(new Date().getTime(),
		i.isMoved &&
			i.allowThresholdMove &&
			g !== t.touchesDirection &&
			y &&
			h &&
			Math.abs(w) >= 1)
	) {
		Object.assign(r, {
			startX: o,
			startY: l,
			currentX: o,
			currentY: l,
			startTranslate: i.currentTranslate,
		}),
			(i.loopSwapReset = !0),
			(i.startTranslate = i.currentTranslate)
		return
	}
	t.emit("sliderMove", n),
		(i.isMoved = !0),
		(i.currentTranslate = w + i.startTranslate)
	let S = !0,
		I = a.resistanceRatio
	if (
		(a.touchReleaseOnEdges && (I = 0),
		w > 0
			? (y &&
					h &&
					!p &&
					i.allowThresholdMove &&
					i.currentTranslate >
						(a.centeredSlides
							? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1]
							: t.minTranslate()) &&
					t.loopFix({
						direction: "prev",
						setTranslate: !0,
						activeSlideIndex: 0,
					}),
			  i.currentTranslate > t.minTranslate() &&
					((S = !1),
					a.resistance &&
						(i.currentTranslate =
							t.minTranslate() -
							1 +
							(-t.minTranslate() + i.startTranslate + w) ** I)))
			: w < 0 &&
			  (y &&
					h &&
					!p &&
					i.allowThresholdMove &&
					i.currentTranslate <
						(a.centeredSlides
							? t.maxTranslate() +
							  t.slidesSizesGrid[t.slidesSizesGrid.length - 1]
							: t.maxTranslate()) &&
					t.loopFix({
						direction: "next",
						setTranslate: !0,
						activeSlideIndex:
							t.slides.length -
							(a.slidesPerView === "auto"
								? t.slidesPerViewDynamic()
								: Math.ceil(parseFloat(a.slidesPerView, 10))),
					}),
			  i.currentTranslate < t.maxTranslate() &&
					((S = !1),
					a.resistance &&
						(i.currentTranslate =
							t.maxTranslate() +
							1 -
							(t.maxTranslate() - i.startTranslate - w) ** I))),
		S && (n.preventedByNestedSwiper = !0),
		!t.allowSlideNext &&
			t.swipeDirection === "next" &&
			i.currentTranslate < i.startTranslate &&
			(i.currentTranslate = i.startTranslate),
		!t.allowSlidePrev &&
			t.swipeDirection === "prev" &&
			i.currentTranslate > i.startTranslate &&
			(i.currentTranslate = i.startTranslate),
		!t.allowSlidePrev &&
			!t.allowSlideNext &&
			(i.currentTranslate = i.startTranslate),
		a.threshold > 0)
	)
		if (Math.abs(w) > a.threshold || i.allowThresholdMove) {
			if (!i.allowThresholdMove) {
				;(i.allowThresholdMove = !0),
					(r.startX = r.currentX),
					(r.startY = r.currentY),
					(i.currentTranslate = i.startTranslate),
					(r.diff = t.isHorizontal()
						? r.currentX - r.startX
						: r.currentY - r.startY)
				return
			}
		} else {
			i.currentTranslate = i.startTranslate
			return
		}
	!a.followFinger ||
		a.cssMode ||
		(((a.freeMode && a.freeMode.enabled && t.freeMode) ||
			a.watchSlidesProgress) &&
			(t.updateActiveIndex(), t.updateSlidesClasses()),
		a.freeMode && a.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
		t.updateProgress(i.currentTranslate),
		t.setTranslate(i.currentTranslate))
}
function es(s) {
	const e = this,
		t = e.touchEventsData
	let i = s
	i.originalEvent && (i = i.originalEvent)
	let a
	if (i.type === "touchend" || i.type === "touchcancel") {
		if (
			((a = [...i.changedTouches].filter((S) => S.identifier === t.touchId)[0]),
			!a || a.identifier !== t.touchId)
		)
			return
	} else {
		if (t.touchId !== null || i.pointerId !== t.pointerId) return
		a = i
	}
	if (
		["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
			i.type
		) &&
		!(
			["pointercancel", "contextmenu"].includes(i.type) &&
			(e.browser.isSafari || e.browser.isWebView)
		)
	)
		return
	;(t.pointerId = null), (t.touchId = null)
	const {
		params: c,
		touches: f,
		rtlTranslate: n,
		slidesGrid: u,
		enabled: o,
	} = e
	if (!o || (!c.simulateTouch && i.pointerType === "mouse")) return
	if (
		(t.allowTouchCallbacks && e.emit("touchEnd", i),
		(t.allowTouchCallbacks = !1),
		!t.isTouched)
	) {
		t.isMoved && c.grabCursor && e.setGrabCursor(!1),
			(t.isMoved = !1),
			(t.startMoving = !1)
		return
	}
	c.grabCursor &&
		t.isMoved &&
		t.isTouched &&
		(e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
		e.setGrabCursor(!1)
	const l = j(),
		d = l - t.touchStartTime
	if (e.allowClick) {
		const S = i.path || (i.composedPath && i.composedPath())
		e.updateClickedSlide((S && S[0]) || i.target, S),
			e.emit("tap click", i),
			d < 300 && l - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i)
	}
	if (
		((t.lastClickTime = j()),
		ie(() => {
			e.destroyed || (e.allowClick = !0)
		}),
		!t.isTouched ||
			!t.isMoved ||
			!e.swipeDirection ||
			(f.diff === 0 && !t.loopSwapReset) ||
			(t.currentTranslate === t.startTranslate && !t.loopSwapReset))
	) {
		;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
		return
	}
	;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
	let m
	if (
		(c.followFinger
			? (m = n ? e.translate : -e.translate)
			: (m = -t.currentTranslate),
		c.cssMode)
	)
		return
	if (c.freeMode && c.freeMode.enabled) {
		e.freeMode.onTouchEnd({ currentPos: m })
		return
	}
	let w = 0,
		v = e.slidesSizesGrid[0]
	for (
		let S = 0;
		S < u.length;
		S += S < c.slidesPerGroupSkip ? 1 : c.slidesPerGroup
	) {
		const I = S < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup
		typeof u[S + I] < "u"
			? m >= u[S] && m < u[S + I] && ((w = S), (v = u[S + I] - u[S]))
			: m >= u[S] && ((w = S), (v = u[u.length - 1] - u[u.length - 2]))
	}
	let g = null,
		y = null
	c.rewind &&
		(e.isBeginning
			? (y =
					c.virtual && c.virtual.enabled && e.virtual
						? e.virtual.slides.length - 1
						: e.slides.length - 1)
			: e.isEnd && (g = 0))
	const h = (m - u[w]) / v,
		p = w < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup
	if (d > c.longSwipesMs) {
		if (!c.longSwipes) {
			e.slideTo(e.activeIndex)
			return
		}
		e.swipeDirection === "next" &&
			(h >= c.longSwipesRatio
				? e.slideTo(c.rewind && e.isEnd ? g : w + p)
				: e.slideTo(w)),
			e.swipeDirection === "prev" &&
				(h > 1 - c.longSwipesRatio
					? e.slideTo(w + p)
					: y !== null && h < 0 && Math.abs(h) > c.longSwipesRatio
					? e.slideTo(y)
					: e.slideTo(w))
	} else {
		if (!c.shortSwipes) {
			e.slideTo(e.activeIndex)
			return
		}
		e.navigation &&
		(i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
			? i.target === e.navigation.nextEl
				? e.slideTo(w + p)
				: e.slideTo(w)
			: (e.swipeDirection === "next" && e.slideTo(g !== null ? g : w + p),
			  e.swipeDirection === "prev" && e.slideTo(y !== null ? y : w))
	}
}
function Fe() {
	const s = this,
		{ params: e, el: t } = s
	if (t && t.offsetWidth === 0) return
	e.breakpoints && s.setBreakpoint()
	const { allowSlideNext: i, allowSlidePrev: a, snapGrid: r } = s,
		c = s.virtual && s.params.virtual.enabled
	;(s.allowSlideNext = !0),
		(s.allowSlidePrev = !0),
		s.updateSize(),
		s.updateSlides(),
		s.updateSlidesClasses()
	const f = c && e.loop
	;(e.slidesPerView === "auto" || e.slidesPerView > 1) &&
	s.isEnd &&
	!s.isBeginning &&
	!s.params.centeredSlides &&
	!f
		? s.slideTo(s.slides.length - 1, 0, !1, !0)
		: s.params.loop && !c
		? s.slideToLoop(s.realIndex, 0, !1, !0)
		: s.slideTo(s.activeIndex, 0, !1, !0),
		s.autoplay &&
			s.autoplay.running &&
			s.autoplay.paused &&
			(clearTimeout(s.autoplay.resizeTimeout),
			(s.autoplay.resizeTimeout = setTimeout(() => {
				s.autoplay &&
					s.autoplay.running &&
					s.autoplay.paused &&
					s.autoplay.resume()
			}, 500))),
		(s.allowSlidePrev = a),
		(s.allowSlideNext = i),
		s.params.watchOverflow && r !== s.snapGrid && s.checkOverflow()
}
function ts(s) {
	const e = this
	e.enabled &&
		(e.allowClick ||
			(e.params.preventClicks && s.preventDefault(),
			e.params.preventClicksPropagation &&
				e.animating &&
				(s.stopPropagation(), s.stopImmediatePropagation())))
}
function ss() {
	const s = this,
		{ wrapperEl: e, rtlTranslate: t, enabled: i } = s
	if (!i) return
	;(s.previousTranslate = s.translate),
		s.isHorizontal()
			? (s.translate = -e.scrollLeft)
			: (s.translate = -e.scrollTop),
		s.translate === 0 && (s.translate = 0),
		s.updateActiveIndex(),
		s.updateSlidesClasses()
	let a
	const r = s.maxTranslate() - s.minTranslate()
	r === 0 ? (a = 0) : (a = (s.translate - s.minTranslate()) / r),
		a !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
		s.emit("setTranslate", s.translate, !1)
}
function is(s) {
	const e = this
	ve(e, s.target),
		!(
			e.params.cssMode ||
			(e.params.slidesPerView !== "auto" && !e.params.autoHeight)
		) && e.update()
}
function rs() {
	const s = this
	s.documentTouchHandlerProceeded ||
		((s.documentTouchHandlerProceeded = !0),
		s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"))
}
const Ze = (s, e) => {
	const t = Y(),
		{ params: i, el: a, wrapperEl: r, device: c } = s,
		f = !!i.nested,
		n = e === "on" ? "addEventListener" : "removeEventListener",
		u = e
	t[n]("touchstart", s.onDocumentTouchStart, { passive: !1, capture: f }),
		a[n]("touchstart", s.onTouchStart, { passive: !1 }),
		a[n]("pointerdown", s.onTouchStart, { passive: !1 }),
		t[n]("touchmove", s.onTouchMove, { passive: !1, capture: f }),
		t[n]("pointermove", s.onTouchMove, { passive: !1, capture: f }),
		t[n]("touchend", s.onTouchEnd, { passive: !0 }),
		t[n]("pointerup", s.onTouchEnd, { passive: !0 }),
		t[n]("pointercancel", s.onTouchEnd, { passive: !0 }),
		t[n]("touchcancel", s.onTouchEnd, { passive: !0 }),
		t[n]("pointerout", s.onTouchEnd, { passive: !0 }),
		t[n]("pointerleave", s.onTouchEnd, { passive: !0 }),
		t[n]("contextmenu", s.onTouchEnd, { passive: !0 }),
		(i.preventClicks || i.preventClicksPropagation) &&
			a[n]("click", s.onClick, !0),
		i.cssMode && r[n]("scroll", s.onScroll),
		i.updateOnWindowResize
			? s[u](
					c.ios || c.android
						? "resize orientationchange observerUpdate"
						: "resize observerUpdate",
					Fe,
					!0
			  )
			: s[u]("observerUpdate", Fe, !0),
		a[n]("load", s.onLoad, { capture: !0 })
}
function as() {
	const s = this,
		{ params: e } = s
	;(s.onTouchStart = Qt.bind(s)),
		(s.onTouchMove = Jt.bind(s)),
		(s.onTouchEnd = es.bind(s)),
		(s.onDocumentTouchStart = rs.bind(s)),
		e.cssMode && (s.onScroll = ss.bind(s)),
		(s.onClick = ts.bind(s)),
		(s.onLoad = is.bind(s)),
		Ze(s, "on")
}
function ns() {
	Ze(this, "off")
}
var ls = { attachEvents: as, detachEvents: ns }
const _e = (s, e) => s.grid && e.grid && e.grid.rows > 1
function os() {
	const s = this,
		{ realIndex: e, initialized: t, params: i, el: a } = s,
		r = i.breakpoints
	if (!r || (r && Object.keys(r).length === 0)) return
	const c = s.getBreakpoint(r, s.params.breakpointsBase, s.el)
	if (!c || s.currentBreakpoint === c) return
	const n = (c in r ? r[c] : void 0) || s.originalParams,
		u = _e(s, i),
		o = _e(s, n),
		l = i.enabled
	u && !o
		? (a.classList.remove(
				`${i.containerModifierClass}grid`,
				`${i.containerModifierClass}grid-column`
		  ),
		  s.emitContainerClasses())
		: !u &&
		  o &&
		  (a.classList.add(`${i.containerModifierClass}grid`),
		  ((n.grid.fill && n.grid.fill === "column") ||
				(!n.grid.fill && i.grid.fill === "column")) &&
				a.classList.add(`${i.containerModifierClass}grid-column`),
		  s.emitContainerClasses()),
		["navigation", "pagination", "scrollbar"].forEach((y) => {
			if (typeof n[y] > "u") return
			const h = i[y] && i[y].enabled,
				p = n[y] && n[y].enabled
			h && !p && s[y].disable(), !h && p && s[y].enable()
		})
	const d = n.direction && n.direction !== i.direction,
		m = i.loop && (n.slidesPerView !== i.slidesPerView || d),
		w = i.loop
	d && t && s.changeDirection(), _(s.params, n)
	const v = s.params.enabled,
		g = s.params.loop
	Object.assign(s, {
		allowTouchMove: s.params.allowTouchMove,
		allowSlideNext: s.params.allowSlideNext,
		allowSlidePrev: s.params.allowSlidePrev,
	}),
		l && !v ? s.disable() : !l && v && s.enable(),
		(s.currentBreakpoint = c),
		s.emit("_beforeBreakpoint", n),
		t &&
			(m
				? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
				: !w && g
				? (s.loopCreate(e), s.updateSlides())
				: w && !g && s.loopDestroy()),
		s.emit("breakpoint", n)
}
function ds(s, e, t) {
	if ((e === void 0 && (e = "window"), !s || (e === "container" && !t))) return
	let i = !1
	const a = R(),
		r = e === "window" ? a.innerHeight : t.clientHeight,
		c = Object.keys(s).map((f) => {
			if (typeof f == "string" && f.indexOf("@") === 0) {
				const n = parseFloat(f.substr(1))
				return { value: r * n, point: f }
			}
			return { value: f, point: f }
		})
	c.sort((f, n) => parseInt(f.value, 10) - parseInt(n.value, 10))
	for (let f = 0; f < c.length; f += 1) {
		const { point: n, value: u } = c[f]
		e === "window"
			? a.matchMedia(`(min-width: ${u}px)`).matches && (i = n)
			: u <= t.clientWidth && (i = n)
	}
	return i || "max"
}
var cs = { setBreakpoint: os, getBreakpoint: ds }
function fs(s, e) {
	const t = []
	return (
		s.forEach((i) => {
			typeof i == "object"
				? Object.keys(i).forEach((a) => {
						i[a] && t.push(e + a)
				  })
				: typeof i == "string" && t.push(e + i)
		}),
		t
	)
}
function us() {
	const s = this,
		{ classNames: e, params: t, rtl: i, el: a, device: r } = s,
		c = fs(
			[
				"initialized",
				t.direction,
				{ "free-mode": s.params.freeMode && t.freeMode.enabled },
				{ autoheight: t.autoHeight },
				{ rtl: i },
				{ grid: t.grid && t.grid.rows > 1 },
				{
					"grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
				},
				{ android: r.android },
				{ ios: r.ios },
				{ "css-mode": t.cssMode },
				{ centered: t.cssMode && t.centeredSlides },
				{ "watch-progress": t.watchSlidesProgress },
			],
			t.containerModifierClass
		)
	e.push(...c), a.classList.add(...e), s.emitContainerClasses()
}
function ps() {
	const s = this,
		{ el: e, classNames: t } = s
	e.classList.remove(...t), s.emitContainerClasses()
}
var ms = { addClasses: us, removeClasses: ps }
function hs() {
	const s = this,
		{ isLocked: e, params: t } = s,
		{ slidesOffsetBefore: i } = t
	if (i) {
		const a = s.slides.length - 1,
			r = s.slidesGrid[a] + s.slidesSizesGrid[a] + i * 2
		s.isLocked = s.size > r
	} else s.isLocked = s.snapGrid.length === 1
	t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
		t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
		e && e !== s.isLocked && (s.isEnd = !1),
		e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock")
}
var gs = { checkOverflow: hs },
	We = {
		init: !0,
		direction: "horizontal",
		oneWayMovement: !1,
		touchEventsTarget: "wrapper",
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		eventsPrefix: "swiper",
		enabled: !0,
		focusableElements: "input, select, option, textarea, button, video, label",
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: "slide",
		breakpoints: void 0,
		breakpointsBase: "window",
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopAddBlankSlides: !0,
		loopAdditionalSlides: 0,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: "swiper-no-swiping",
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: "swiper-",
		slideClass: "swiper-slide",
		slideBlankClass: "swiper-slide-blank",
		slideActiveClass: "swiper-slide-active",
		slideVisibleClass: "swiper-slide-visible",
		slideFullyVisibleClass: "swiper-slide-fully-visible",
		slideNextClass: "swiper-slide-next",
		slidePrevClass: "swiper-slide-prev",
		wrapperClass: "swiper-wrapper",
		lazyPreloaderClass: "swiper-lazy-preloader",
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	}
function vs(s, e) {
	return function (i) {
		i === void 0 && (i = {})
		const a = Object.keys(i)[0],
			r = i[a]
		if (typeof r != "object" || r === null) {
			_(e, i)
			return
		}
		if (
			(s[a] === !0 && (s[a] = { enabled: !0 }),
			a === "navigation" &&
				s[a] &&
				s[a].enabled &&
				!s[a].prevEl &&
				!s[a].nextEl &&
				(s[a].auto = !0),
			["pagination", "scrollbar"].indexOf(a) >= 0 &&
				s[a] &&
				s[a].enabled &&
				!s[a].el &&
				(s[a].auto = !0),
			!(a in s && "enabled" in r))
		) {
			_(e, i)
			return
		}
		typeof s[a] == "object" && !("enabled" in s[a]) && (s[a].enabled = !0),
			s[a] || (s[a] = { enabled: !1 }),
			_(e, i)
	}
}
const Ie = {
		eventsEmitter: mt,
		update: Mt,
		translate: zt,
		transition: kt,
		slide: Yt,
		loop: qt,
		grabCursor: Kt,
		events: ls,
		breakpoints: cs,
		checkOverflow: gs,
		classes: ms,
	},
	Ae = {}
class F {
	constructor() {
		let e, t
		for (var i = arguments.length, a = new Array(i), r = 0; r < i; r++)
			a[r] = arguments[r]
		a.length === 1 &&
		a[0].constructor &&
		Object.prototype.toString.call(a[0]).slice(8, -1) === "Object"
			? (t = a[0])
			: ([e, t] = a),
			t || (t = {}),
			(t = _({}, t)),
			e && !t.el && (t.el = e)
		const c = Y()
		if (
			t.el &&
			typeof t.el == "string" &&
			c.querySelectorAll(t.el).length > 1
		) {
			const o = []
			return (
				c.querySelectorAll(t.el).forEach((l) => {
					const d = _({}, t, { el: l })
					o.push(new F(d))
				}),
				o
			)
		}
		const f = this
		;(f.__swiper__ = !0),
			(f.support = Ue()),
			(f.device = dt({ userAgent: t.userAgent })),
			(f.browser = ft()),
			(f.eventsListeners = {}),
			(f.eventsAnyListeners = []),
			(f.modules = [...f.__modules__]),
			t.modules && Array.isArray(t.modules) && f.modules.push(...t.modules)
		const n = {}
		f.modules.forEach((o) => {
			o({
				params: t,
				swiper: f,
				extendParams: vs(t, n),
				on: f.on.bind(f),
				once: f.once.bind(f),
				off: f.off.bind(f),
				emit: f.emit.bind(f),
			})
		})
		const u = _({}, We, n)
		return (
			(f.params = _({}, u, Ae, t)),
			(f.originalParams = _({}, f.params)),
			(f.passedParams = _({}, t)),
			f.params &&
				f.params.on &&
				Object.keys(f.params.on).forEach((o) => {
					f.on(o, f.params.on[o])
				}),
			f.params && f.params.onAny && f.onAny(f.params.onAny),
			Object.assign(f, {
				enabled: f.params.enabled,
				el: e,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return f.params.direction === "horizontal"
				},
				isVertical() {
					return f.params.direction === "vertical"
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
				},
				allowSlideNext: f.params.allowSlideNext,
				allowSlidePrev: f.params.allowSlidePrev,
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: f.params.focusableElements,
					lastClickTime: 0,
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					pointerId: null,
					touchId: null,
				},
				allowClick: !0,
				allowTouchMove: f.params.allowTouchMove,
				touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
				imagesToLoad: [],
				imagesLoaded: 0,
			}),
			f.emit("_swiper"),
			f.params.init && f.init(),
			f
		)
	}
	getDirectionLabel(e) {
		return this.isHorizontal()
			? e
			: {
					width: "height",
					"margin-top": "margin-left",
					"margin-bottom ": "margin-right",
					"margin-left": "margin-top",
					"margin-right": "margin-bottom",
					"padding-left": "padding-top",
					"padding-right": "padding-bottom",
					marginRight: "marginBottom",
			  }[e]
	}
	getSlideIndex(e) {
		const { slidesEl: t, params: i } = this,
			a = N(t, `.${i.slideClass}, swiper-slide`),
			r = pe(a[0])
		return pe(e) - r
	}
	getSlideIndexByData(e) {
		return this.getSlideIndex(
			this.slides.filter(
				(t) => t.getAttribute("data-swiper-slide-index") * 1 === e
			)[0]
		)
	}
	recalcSlides() {
		const e = this,
			{ slidesEl: t, params: i } = e
		e.slides = N(t, `.${i.slideClass}, swiper-slide`)
	}
	enable() {
		const e = this
		e.enabled ||
			((e.enabled = !0),
			e.params.grabCursor && e.setGrabCursor(),
			e.emit("enable"))
	}
	disable() {
		const e = this
		e.enabled &&
			((e.enabled = !1),
			e.params.grabCursor && e.unsetGrabCursor(),
			e.emit("disable"))
	}
	setProgress(e, t) {
		const i = this
		e = Math.min(Math.max(e, 0), 1)
		const a = i.minTranslate(),
			c = (i.maxTranslate() - a) * e + a
		i.translateTo(c, typeof t > "u" ? 0 : t),
			i.updateActiveIndex(),
			i.updateSlidesClasses()
	}
	emitContainerClasses() {
		const e = this
		if (!e.params._emitClasses || !e.el) return
		const t = e.el.className
			.split(" ")
			.filter(
				(i) =>
					i.indexOf("swiper") === 0 ||
					i.indexOf(e.params.containerModifierClass) === 0
			)
		e.emit("_containerClasses", t.join(" "))
	}
	getSlideClasses(e) {
		const t = this
		return t.destroyed
			? ""
			: e.className
					.split(" ")
					.filter(
						(i) =>
							i.indexOf("swiper-slide") === 0 ||
							i.indexOf(t.params.slideClass) === 0
					)
					.join(" ")
	}
	emitSlidesClasses() {
		const e = this
		if (!e.params._emitClasses || !e.el) return
		const t = []
		e.slides.forEach((i) => {
			const a = e.getSlideClasses(i)
			t.push({ slideEl: i, classNames: a }), e.emit("_slideClass", i, a)
		}),
			e.emit("_slideClasses", t)
	}
	slidesPerViewDynamic(e, t) {
		e === void 0 && (e = "current"), t === void 0 && (t = !1)
		const i = this,
			{
				params: a,
				slides: r,
				slidesGrid: c,
				slidesSizesGrid: f,
				size: n,
				activeIndex: u,
			} = i
		let o = 1
		if (typeof a.slidesPerView == "number") return a.slidesPerView
		if (a.centeredSlides) {
			let l = r[u] ? r[u].swiperSlideSize : 0,
				d
			for (let m = u + 1; m < r.length; m += 1)
				r[m] && !d && ((l += r[m].swiperSlideSize), (o += 1), l > n && (d = !0))
			for (let m = u - 1; m >= 0; m -= 1)
				r[m] && !d && ((l += r[m].swiperSlideSize), (o += 1), l > n && (d = !0))
		} else if (e === "current")
			for (let l = u + 1; l < r.length; l += 1)
				(t ? c[l] + f[l] - c[u] < n : c[l] - c[u] < n) && (o += 1)
		else for (let l = u - 1; l >= 0; l -= 1) c[u] - c[l] < n && (o += 1)
		return o
	}
	update() {
		const e = this
		if (!e || e.destroyed) return
		const { snapGrid: t, params: i } = e
		i.breakpoints && e.setBreakpoint(),
			[...e.el.querySelectorAll('[loading="lazy"]')].forEach((c) => {
				c.complete && ve(e, c)
			}),
			e.updateSize(),
			e.updateSlides(),
			e.updateProgress(),
			e.updateSlidesClasses()
		function a() {
			const c = e.rtlTranslate ? e.translate * -1 : e.translate,
				f = Math.min(Math.max(c, e.maxTranslate()), e.minTranslate())
			e.setTranslate(f), e.updateActiveIndex(), e.updateSlidesClasses()
		}
		let r
		if (i.freeMode && i.freeMode.enabled && !i.cssMode)
			a(), i.autoHeight && e.updateAutoHeight()
		else {
			if (
				(i.slidesPerView === "auto" || i.slidesPerView > 1) &&
				e.isEnd &&
				!i.centeredSlides
			) {
				const c = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides
				r = e.slideTo(c.length - 1, 0, !1, !0)
			} else r = e.slideTo(e.activeIndex, 0, !1, !0)
			r || a()
		}
		i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
	}
	changeDirection(e, t) {
		t === void 0 && (t = !0)
		const i = this,
			a = i.params.direction
		return (
			e || (e = a === "horizontal" ? "vertical" : "horizontal"),
			e === a ||
				(e !== "horizontal" && e !== "vertical") ||
				(i.el.classList.remove(`${i.params.containerModifierClass}${a}`),
				i.el.classList.add(`${i.params.containerModifierClass}${e}`),
				i.emitContainerClasses(),
				(i.params.direction = e),
				i.slides.forEach((r) => {
					e === "vertical" ? (r.style.width = "") : (r.style.height = "")
				}),
				i.emit("changeDirection"),
				t && i.update()),
			i
		)
	}
	changeLanguageDirection(e) {
		const t = this
		;(t.rtl && e === "rtl") ||
			(!t.rtl && e === "ltr") ||
			((t.rtl = e === "rtl"),
			(t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
			t.rtl
				? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
				  (t.el.dir = "rtl"))
				: (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
				  (t.el.dir = "ltr")),
			t.update())
	}
	mount(e) {
		const t = this
		if (t.mounted) return !0
		let i = e || t.params.el
		if ((typeof i == "string" && (i = document.querySelector(i)), !i)) return !1
		;(i.swiper = t),
			i.parentNode &&
				i.parentNode.host &&
				i.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
				(t.isElement = !0)
		const a = () =>
			`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`
		let c = (() =>
			i && i.shadowRoot && i.shadowRoot.querySelector
				? i.shadowRoot.querySelector(a())
				: N(i, a())[0])()
		return (
			!c &&
				t.params.createElements &&
				((c = W("div", t.params.wrapperClass)),
				i.append(c),
				N(i, `.${t.params.slideClass}`).forEach((f) => {
					c.append(f)
				})),
			Object.assign(t, {
				el: i,
				wrapperEl: c,
				slidesEl:
					t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : c,
				hostEl: t.isElement ? i.parentNode.host : i,
				mounted: !0,
				rtl: i.dir.toLowerCase() === "rtl" || J(i, "direction") === "rtl",
				rtlTranslate:
					t.params.direction === "horizontal" &&
					(i.dir.toLowerCase() === "rtl" || J(i, "direction") === "rtl"),
				wrongRTL: J(c, "display") === "-webkit-box",
			}),
			!0
		)
	}
	init(e) {
		const t = this
		if (t.initialized || t.mount(e) === !1) return t
		t.emit("beforeInit"),
			t.params.breakpoints && t.setBreakpoint(),
			t.addClasses(),
			t.updateSize(),
			t.updateSlides(),
			t.params.watchOverflow && t.checkOverflow(),
			t.params.grabCursor && t.enabled && t.setGrabCursor(),
			t.params.loop && t.virtual && t.params.virtual.enabled
				? t.slideTo(
						t.params.initialSlide + t.virtual.slidesBefore,
						0,
						t.params.runCallbacksOnInit,
						!1,
						!0
				  )
				: t.slideTo(
						t.params.initialSlide,
						0,
						t.params.runCallbacksOnInit,
						!1,
						!0
				  ),
			t.params.loop && t.loopCreate(),
			t.attachEvents()
		const a = [...t.el.querySelectorAll('[loading="lazy"]')]
		return (
			t.isElement && a.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
			a.forEach((r) => {
				r.complete
					? ve(t, r)
					: r.addEventListener("load", (c) => {
							ve(t, c.target)
					  })
			}),
			Oe(t),
			(t.initialized = !0),
			Oe(t),
			t.emit("init"),
			t.emit("afterInit"),
			t
		)
	}
	destroy(e, t) {
		e === void 0 && (e = !0), t === void 0 && (t = !0)
		const i = this,
			{ params: a, el: r, wrapperEl: c, slides: f } = i
		return (
			typeof i.params > "u" ||
				i.destroyed ||
				(i.emit("beforeDestroy"),
				(i.initialized = !1),
				i.detachEvents(),
				a.loop && i.loopDestroy(),
				t &&
					(i.removeClasses(),
					r.removeAttribute("style"),
					c.removeAttribute("style"),
					f &&
						f.length &&
						f.forEach((n) => {
							n.classList.remove(
								a.slideVisibleClass,
								a.slideFullyVisibleClass,
								a.slideActiveClass,
								a.slideNextClass,
								a.slidePrevClass
							),
								n.removeAttribute("style"),
								n.removeAttribute("data-swiper-slide-index")
						})),
				i.emit("destroy"),
				Object.keys(i.eventsListeners).forEach((n) => {
					i.off(n)
				}),
				e !== !1 && ((i.el.swiper = null), st(i)),
				(i.destroyed = !0)),
			null
		)
	}
	static extendDefaults(e) {
		_(Ae, e)
	}
	static get extendedDefaults() {
		return Ae
	}
	static get defaults() {
		return We
	}
	static installModule(e) {
		F.prototype.__modules__ || (F.prototype.__modules__ = [])
		const t = F.prototype.__modules__
		typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
	}
	static use(e) {
		return Array.isArray(e)
			? (e.forEach((t) => F.installModule(t)), F)
			: (F.installModule(e), F)
	}
}
Object.keys(Ie).forEach((s) => {
	Object.keys(Ie[s]).forEach((e) => {
		F.prototype[e] = Ie[s][e]
	})
})
F.use([ut, pt])
function ws(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	t({
		virtual: {
			enabled: !1,
			slides: [],
			cache: !0,
			renderSlide: null,
			renderExternal: null,
			renderExternalUpdate: !0,
			addSlidesBefore: 0,
			addSlidesAfter: 0,
		},
	})
	let r
	const c = Y()
	e.virtual = {
		cache: {},
		from: void 0,
		to: void 0,
		slides: [],
		offset: 0,
		slidesGrid: [],
	}
	const f = c.createElement("div")
	function n(w, v) {
		const g = e.params.virtual
		if (g.cache && e.virtual.cache[v]) return e.virtual.cache[v]
		let y
		return (
			g.renderSlide
				? ((y = g.renderSlide.call(e, w, v)),
				  typeof y == "string" && ((f.innerHTML = y), (y = f.children[0])))
				: e.isElement
				? (y = W("swiper-slide"))
				: (y = W("div", e.params.slideClass)),
			y.setAttribute("data-swiper-slide-index", v),
			g.renderSlide || (y.innerHTML = w),
			g.cache && (e.virtual.cache[v] = y),
			y
		)
	}
	function u(w) {
		const {
				slidesPerView: v,
				slidesPerGroup: g,
				centeredSlides: y,
				loop: h,
			} = e.params,
			{ addSlidesBefore: p, addSlidesAfter: S } = e.params.virtual,
			{ from: I, to: C, slides: k, slidesGrid: $, offset: P } = e.virtual
		e.params.cssMode || e.updateActiveIndex()
		const T = e.activeIndex || 0
		let L
		e.rtlTranslate ? (L = "right") : (L = e.isHorizontal() ? "left" : "top")
		let M, x
		y
			? ((M = Math.floor(v / 2) + g + S), (x = Math.floor(v / 2) + g + p))
			: ((M = v + (g - 1) + S), (x = (h ? v : g) + p))
		let b = T - x,
			E = T + M
		h || ((b = Math.max(b, 0)), (E = Math.min(E, k.length - 1)))
		let D = (e.slidesGrid[b] || 0) - (e.slidesGrid[0] || 0)
		h && T >= x
			? ((b -= x), y || (D += e.slidesGrid[0]))
			: h && T < x && ((b = -x), y && (D += e.slidesGrid[0])),
			Object.assign(e.virtual, {
				from: b,
				to: E,
				offset: D,
				slidesGrid: e.slidesGrid,
				slidesBefore: x,
				slidesAfter: M,
			})
		function O() {
			e.updateSlides(),
				e.updateProgress(),
				e.updateSlidesClasses(),
				a("virtualUpdate")
		}
		if (I === b && C === E && !w) {
			e.slidesGrid !== $ &&
				D !== P &&
				e.slides.forEach((H) => {
					H.style[L] = `${D - Math.abs(e.cssOverflowAdjustment())}px`
				}),
				e.updateProgress(),
				a("virtualUpdate")
			return
		}
		if (e.params.virtual.renderExternal) {
			e.params.virtual.renderExternal.call(e, {
				offset: D,
				from: b,
				to: E,
				slides: (function () {
					const X = []
					for (let q = b; q <= E; q += 1) X.push(k[q])
					return X
				})(),
			}),
				e.params.virtual.renderExternalUpdate ? O() : a("virtualUpdate")
			return
		}
		const A = [],
			z = [],
			G = (H) => {
				let X = H
				return (
					H < 0 ? (X = k.length + H) : X >= k.length && (X = X - k.length), X
				)
			}
		if (w)
			e.slides
				.filter((H) => H.matches(`.${e.params.slideClass}, swiper-slide`))
				.forEach((H) => {
					H.remove()
				})
		else
			for (let H = I; H <= C; H += 1)
				if (H < b || H > E) {
					const X = G(H)
					e.slides
						.filter((q) =>
							q.matches(
								`.${e.params.slideClass}[data-swiper-slide-index="${X}"], swiper-slide[data-swiper-slide-index="${X}"]`
							)
						)
						.forEach((q) => {
							q.remove()
						})
				}
		const B = h ? -k.length : 0,
			V = h ? k.length * 2 : k.length
		for (let H = B; H < V; H += 1)
			if (H >= b && H <= E) {
				const X = G(H)
				typeof C > "u" || w
					? z.push(X)
					: (H > C && z.push(X), H < I && A.push(X))
			}
		if (
			(z.forEach((H) => {
				e.slidesEl.append(n(k[H], H))
			}),
			h)
		)
			for (let H = A.length - 1; H >= 0; H -= 1) {
				const X = A[H]
				e.slidesEl.prepend(n(k[X], X))
			}
		else
			A.sort((H, X) => X - H),
				A.forEach((H) => {
					e.slidesEl.prepend(n(k[H], H))
				})
		N(e.slidesEl, ".swiper-slide, swiper-slide").forEach((H) => {
			H.style[L] = `${D - Math.abs(e.cssOverflowAdjustment())}px`
		}),
			O()
	}
	function o(w) {
		if (typeof w == "object" && "length" in w)
			for (let v = 0; v < w.length; v += 1) w[v] && e.virtual.slides.push(w[v])
		else e.virtual.slides.push(w)
		u(!0)
	}
	function l(w) {
		const v = e.activeIndex
		let g = v + 1,
			y = 1
		if (Array.isArray(w)) {
			for (let h = 0; h < w.length; h += 1)
				w[h] && e.virtual.slides.unshift(w[h])
			;(g = v + w.length), (y = w.length)
		} else e.virtual.slides.unshift(w)
		if (e.params.virtual.cache) {
			const h = e.virtual.cache,
				p = {}
			Object.keys(h).forEach((S) => {
				const I = h[S],
					C = I.getAttribute("data-swiper-slide-index")
				C && I.setAttribute("data-swiper-slide-index", parseInt(C, 10) + y),
					(p[parseInt(S, 10) + y] = I)
			}),
				(e.virtual.cache = p)
		}
		u(!0), e.slideTo(g, 0)
	}
	function d(w) {
		if (typeof w > "u" || w === null) return
		let v = e.activeIndex
		if (Array.isArray(w))
			for (let g = w.length - 1; g >= 0; g -= 1)
				e.params.virtual.cache &&
					(delete e.virtual.cache[w[g]],
					Object.keys(e.virtual.cache).forEach((y) => {
						y > w &&
							((e.virtual.cache[y - 1] = e.virtual.cache[y]),
							e.virtual.cache[y - 1].setAttribute(
								"data-swiper-slide-index",
								y - 1
							),
							delete e.virtual.cache[y])
					})),
					e.virtual.slides.splice(w[g], 1),
					w[g] < v && (v -= 1),
					(v = Math.max(v, 0))
		else
			e.params.virtual.cache &&
				(delete e.virtual.cache[w],
				Object.keys(e.virtual.cache).forEach((g) => {
					g > w &&
						((e.virtual.cache[g - 1] = e.virtual.cache[g]),
						e.virtual.cache[g - 1].setAttribute(
							"data-swiper-slide-index",
							g - 1
						),
						delete e.virtual.cache[g])
				})),
				e.virtual.slides.splice(w, 1),
				w < v && (v -= 1),
				(v = Math.max(v, 0))
		u(!0), e.slideTo(v, 0)
	}
	function m() {
		;(e.virtual.slides = []),
			e.params.virtual.cache && (e.virtual.cache = {}),
			u(!0),
			e.slideTo(0, 0)
	}
	i("beforeInit", () => {
		if (!e.params.virtual.enabled) return
		let w
		if (typeof e.passedParams.virtual.slides > "u") {
			const v = [...e.slidesEl.children].filter((g) =>
				g.matches(`.${e.params.slideClass}, swiper-slide`)
			)
			v &&
				v.length &&
				((e.virtual.slides = [...v]),
				(w = !0),
				v.forEach((g, y) => {
					g.setAttribute("data-swiper-slide-index", y),
						(e.virtual.cache[y] = g),
						g.remove()
				}))
		}
		w || (e.virtual.slides = e.params.virtual.slides),
			e.classNames.push(`${e.params.containerModifierClass}virtual`),
			(e.params.watchSlidesProgress = !0),
			(e.originalParams.watchSlidesProgress = !0),
			u()
	}),
		i("setTranslate", () => {
			e.params.virtual.enabled &&
				(e.params.cssMode && !e._immediateVirtual
					? (clearTimeout(r),
					  (r = setTimeout(() => {
							u()
					  }, 100)))
					: u())
		}),
		i("init update resize", () => {
			e.params.virtual.enabled &&
				e.params.cssMode &&
				fe(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
		}),
		Object.assign(e.virtual, {
			appendSlide: o,
			prependSlide: l,
			removeSlide: d,
			removeAllSlides: m,
			update: u,
		})
}
function ys(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	const r = Y(),
		c = R()
	;(e.keyboard = { enabled: !1 }),
		t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } })
	function f(o) {
		if (!e.enabled) return
		const { rtlTranslate: l } = e
		let d = o
		d.originalEvent && (d = d.originalEvent)
		const m = d.keyCode || d.charCode,
			w = e.params.keyboard.pageUpDown,
			v = w && m === 33,
			g = w && m === 34,
			y = m === 37,
			h = m === 39,
			p = m === 38,
			S = m === 40
		if (
			(!e.allowSlideNext &&
				((e.isHorizontal() && h) || (e.isVertical() && S) || g)) ||
			(!e.allowSlidePrev &&
				((e.isHorizontal() && y) || (e.isVertical() && p) || v))
		)
			return !1
		if (
			!(d.shiftKey || d.altKey || d.ctrlKey || d.metaKey) &&
			!(
				r.activeElement &&
				r.activeElement.nodeName &&
				(r.activeElement.nodeName.toLowerCase() === "input" ||
					r.activeElement.nodeName.toLowerCase() === "textarea")
			)
		) {
			if (e.params.keyboard.onlyInViewport && (v || g || y || h || p || S)) {
				let I = !1
				if (
					se(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
					se(e.el, `.${e.params.slideActiveClass}`).length === 0
				)
					return
				const C = e.el,
					k = C.clientWidth,
					$ = C.clientHeight,
					P = c.innerWidth,
					T = c.innerHeight,
					L = ye(C)
				l && (L.left -= C.scrollLeft)
				const M = [
					[L.left, L.top],
					[L.left + k, L.top],
					[L.left, L.top + $],
					[L.left + k, L.top + $],
				]
				for (let x = 0; x < M.length; x += 1) {
					const b = M[x]
					if (b[0] >= 0 && b[0] <= P && b[1] >= 0 && b[1] <= T) {
						if (b[0] === 0 && b[1] === 0) continue
						I = !0
					}
				}
				if (!I) return
			}
			e.isHorizontal()
				? ((v || g || y || h) &&
						(d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
				  (((g || h) && !l) || ((v || y) && l)) && e.slideNext(),
				  (((v || y) && !l) || ((g || h) && l)) && e.slidePrev())
				: ((v || g || p || S) &&
						(d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
				  (g || S) && e.slideNext(),
				  (v || p) && e.slidePrev()),
				a("keyPress", m)
		}
	}
	function n() {
		e.keyboard.enabled ||
			(r.addEventListener("keydown", f), (e.keyboard.enabled = !0))
	}
	function u() {
		e.keyboard.enabled &&
			(r.removeEventListener("keydown", f), (e.keyboard.enabled = !1))
	}
	i("init", () => {
		e.params.keyboard.enabled && n()
	}),
		i("destroy", () => {
			e.keyboard.enabled && u()
		}),
		Object.assign(e.keyboard, { enable: n, disable: u })
}
function bs(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	const r = R()
	t({
		mousewheel: {
			enabled: !1,
			releaseOnEdges: !1,
			invert: !1,
			forceToAxis: !1,
			sensitivity: 1,
			eventsTarget: "container",
			thresholdDelta: null,
			thresholdTime: null,
			noMousewheelClass: "swiper-no-mousewheel",
		},
	}),
		(e.mousewheel = { enabled: !1 })
	let c,
		f = j(),
		n
	const u = []
	function o(p) {
		let k = 0,
			$ = 0,
			P = 0,
			T = 0
		return (
			"detail" in p && ($ = p.detail),
			"wheelDelta" in p && ($ = -p.wheelDelta / 120),
			"wheelDeltaY" in p && ($ = -p.wheelDeltaY / 120),
			"wheelDeltaX" in p && (k = -p.wheelDeltaX / 120),
			"axis" in p && p.axis === p.HORIZONTAL_AXIS && ((k = $), ($ = 0)),
			(P = k * 10),
			(T = $ * 10),
			"deltaY" in p && (T = p.deltaY),
			"deltaX" in p && (P = p.deltaX),
			p.shiftKey && !P && ((P = T), (T = 0)),
			(P || T) &&
				p.deltaMode &&
				(p.deltaMode === 1 ? ((P *= 40), (T *= 40)) : ((P *= 800), (T *= 800))),
			P && !k && (k = P < 1 ? -1 : 1),
			T && !$ && ($ = T < 1 ? -1 : 1),
			{ spinX: k, spinY: $, pixelX: P, pixelY: T }
		)
	}
	function l() {
		e.enabled && (e.mouseEntered = !0)
	}
	function d() {
		e.enabled && (e.mouseEntered = !1)
	}
	function m(p) {
		return (e.params.mousewheel.thresholdDelta &&
			p.delta < e.params.mousewheel.thresholdDelta) ||
			(e.params.mousewheel.thresholdTime &&
				j() - f < e.params.mousewheel.thresholdTime)
			? !1
			: p.delta >= 6 && j() - f < 60
			? !0
			: (p.direction < 0
					? (!e.isEnd || e.params.loop) &&
					  !e.animating &&
					  (e.slideNext(), a("scroll", p.raw))
					: (!e.isBeginning || e.params.loop) &&
					  !e.animating &&
					  (e.slidePrev(), a("scroll", p.raw)),
			  (f = new r.Date().getTime()),
			  !1)
	}
	function w(p) {
		const S = e.params.mousewheel
		if (p.direction < 0) {
			if (e.isEnd && !e.params.loop && S.releaseOnEdges) return !0
		} else if (e.isBeginning && !e.params.loop && S.releaseOnEdges) return !0
		return !1
	}
	function v(p) {
		let S = p,
			I = !0
		if (
			!e.enabled ||
			p.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
		)
			return
		const C = e.params.mousewheel
		e.params.cssMode && S.preventDefault()
		let k = e.el
		e.params.mousewheel.eventsTarget !== "container" &&
			(k = document.querySelector(e.params.mousewheel.eventsTarget))
		const $ = k && k.contains(S.target)
		if (!e.mouseEntered && !$ && !C.releaseOnEdges) return !0
		S.originalEvent && (S = S.originalEvent)
		let P = 0
		const T = e.rtlTranslate ? -1 : 1,
			L = o(S)
		if (C.forceToAxis)
			if (e.isHorizontal())
				if (Math.abs(L.pixelX) > Math.abs(L.pixelY)) P = -L.pixelX * T
				else return !0
			else if (Math.abs(L.pixelY) > Math.abs(L.pixelX)) P = -L.pixelY
			else return !0
		else P = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * T : -L.pixelY
		if (P === 0) return !0
		C.invert && (P = -P)
		let M = e.getTranslate() + P * C.sensitivity
		if (
			(M >= e.minTranslate() && (M = e.minTranslate()),
			M <= e.maxTranslate() && (M = e.maxTranslate()),
			(I = e.params.loop
				? !0
				: !(M === e.minTranslate() || M === e.maxTranslate())),
			I && e.params.nested && S.stopPropagation(),
			!e.params.freeMode || !e.params.freeMode.enabled)
		) {
			const x = {
				time: j(),
				delta: Math.abs(P),
				direction: Math.sign(P),
				raw: p,
			}
			u.length >= 2 && u.shift()
			const b = u.length ? u[u.length - 1] : void 0
			if (
				(u.push(x),
				b
					? (x.direction !== b.direction ||
							x.delta > b.delta ||
							x.time > b.time + 150) &&
					  m(x)
					: m(x),
				w(x))
			)
				return !0
		} else {
			const x = { time: j(), delta: Math.abs(P), direction: Math.sign(P) },
				b =
					n &&
					x.time < n.time + 500 &&
					x.delta <= n.delta &&
					x.direction === n.direction
			if (!b) {
				n = void 0
				let E = e.getTranslate() + P * C.sensitivity
				const D = e.isBeginning,
					O = e.isEnd
				if (
					(E >= e.minTranslate() && (E = e.minTranslate()),
					E <= e.maxTranslate() && (E = e.maxTranslate()),
					e.setTransition(0),
					e.setTranslate(E),
					e.updateProgress(),
					e.updateActiveIndex(),
					e.updateSlidesClasses(),
					((!D && e.isBeginning) || (!O && e.isEnd)) && e.updateSlidesClasses(),
					e.params.loop &&
						e.loopFix({
							direction: x.direction < 0 ? "next" : "prev",
							byMousewheel: !0,
						}),
					e.params.freeMode.sticky)
				) {
					clearTimeout(c), (c = void 0), u.length >= 15 && u.shift()
					const A = u.length ? u[u.length - 1] : void 0,
						z = u[0]
					if (
						(u.push(x), A && (x.delta > A.delta || x.direction !== A.direction))
					)
						u.splice(0)
					else if (
						u.length >= 15 &&
						x.time - z.time < 500 &&
						z.delta - x.delta >= 1 &&
						x.delta <= 6
					) {
						const G = P > 0 ? 0.8 : 0.2
						;(n = x),
							u.splice(0),
							(c = ie(() => {
								e.slideToClosest(e.params.speed, !0, void 0, G)
							}, 0))
					}
					c ||
						(c = ie(() => {
							;(n = x),
								u.splice(0),
								e.slideToClosest(e.params.speed, !0, void 0, 0.5)
						}, 500))
				}
				if (
					(b || a("scroll", S),
					e.params.autoplay &&
						e.params.autoplayDisableOnInteraction &&
						e.autoplay.stop(),
					C.releaseOnEdges &&
						(E === e.minTranslate() || E === e.maxTranslate()))
				)
					return !0
			}
		}
		return S.preventDefault ? S.preventDefault() : (S.returnValue = !1), !1
	}
	function g(p) {
		let S = e.el
		e.params.mousewheel.eventsTarget !== "container" &&
			(S = document.querySelector(e.params.mousewheel.eventsTarget)),
			S[p]("mouseenter", l),
			S[p]("mouseleave", d),
			S[p]("wheel", v)
	}
	function y() {
		return e.params.cssMode
			? (e.wrapperEl.removeEventListener("wheel", v), !0)
			: e.mousewheel.enabled
			? !1
			: (g("addEventListener"), (e.mousewheel.enabled = !0), !0)
	}
	function h() {
		return e.params.cssMode
			? (e.wrapperEl.addEventListener(event, v), !0)
			: e.mousewheel.enabled
			? (g("removeEventListener"), (e.mousewheel.enabled = !1), !0)
			: !1
	}
	i("init", () => {
		!e.params.mousewheel.enabled && e.params.cssMode && h(),
			e.params.mousewheel.enabled && y()
	}),
		i("destroy", () => {
			e.params.cssMode && y(), e.mousewheel.enabled && h()
		}),
		Object.assign(e.mousewheel, { enable: y, disable: h })
}
function Ge(s, e, t, i) {
	return (
		s.params.createElements &&
			Object.keys(i).forEach((a) => {
				if (!t[a] && t.auto === !0) {
					let r = N(s.el, `.${i[a]}`)[0]
					r || ((r = W("div", i[a])), (r.className = i[a]), s.el.append(r)),
						(t[a] = r),
						(e[a] = r)
				}
			}),
		t
	)
}
function Ss(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	t({
		navigation: {
			nextEl: null,
			prevEl: null,
			hideOnClick: !1,
			disabledClass: "swiper-button-disabled",
			hiddenClass: "swiper-button-hidden",
			lockClass: "swiper-button-lock",
			navigationDisabledClass: "swiper-navigation-disabled",
		},
	}),
		(e.navigation = { nextEl: null, prevEl: null })
	const r = (v) => (Array.isArray(v) ? v : [v]).filter((g) => !!g)
	function c(v) {
		let g
		return v &&
			typeof v == "string" &&
			e.isElement &&
			((g = e.el.querySelector(v)), g)
			? g
			: (v &&
					(typeof v == "string" && (g = [...document.querySelectorAll(v)]),
					e.params.uniqueNavElements &&
						typeof v == "string" &&
						g.length > 1 &&
						e.el.querySelectorAll(v).length === 1 &&
						(g = e.el.querySelector(v))),
			  v && !g ? v : g)
	}
	function f(v, g) {
		const y = e.params.navigation
		;(v = r(v)),
			v.forEach((h) => {
				h &&
					(h.classList[g ? "add" : "remove"](...y.disabledClass.split(" ")),
					h.tagName === "BUTTON" && (h.disabled = g),
					e.params.watchOverflow &&
						e.enabled &&
						h.classList[e.isLocked ? "add" : "remove"](y.lockClass))
			})
	}
	function n() {
		const { nextEl: v, prevEl: g } = e.navigation
		if (e.params.loop) {
			f(g, !1), f(v, !1)
			return
		}
		f(g, e.isBeginning && !e.params.rewind), f(v, e.isEnd && !e.params.rewind)
	}
	function u(v) {
		v.preventDefault(),
			!(e.isBeginning && !e.params.loop && !e.params.rewind) &&
				(e.slidePrev(), a("navigationPrev"))
	}
	function o(v) {
		v.preventDefault(),
			!(e.isEnd && !e.params.loop && !e.params.rewind) &&
				(e.slideNext(), a("navigationNext"))
	}
	function l() {
		const v = e.params.navigation
		if (
			((e.params.navigation = Ge(
				e,
				e.originalParams.navigation,
				e.params.navigation,
				{ nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
			)),
			!(v.nextEl || v.prevEl))
		)
			return
		let g = c(v.nextEl),
			y = c(v.prevEl)
		Object.assign(e.navigation, { nextEl: g, prevEl: y }),
			(g = r(g)),
			(y = r(y))
		const h = (p, S) => {
			p && p.addEventListener("click", S === "next" ? o : u),
				!e.enabled && p && p.classList.add(...v.lockClass.split(" "))
		}
		g.forEach((p) => h(p, "next")), y.forEach((p) => h(p, "prev"))
	}
	function d() {
		let { nextEl: v, prevEl: g } = e.navigation
		;(v = r(v)), (g = r(g))
		const y = (h, p) => {
			h.removeEventListener("click", p === "next" ? o : u),
				h.classList.remove(...e.params.navigation.disabledClass.split(" "))
		}
		v.forEach((h) => y(h, "next")), g.forEach((h) => y(h, "prev"))
	}
	i("init", () => {
		e.params.navigation.enabled === !1 ? w() : (l(), n())
	}),
		i("toEdge fromEdge lock unlock", () => {
			n()
		}),
		i("destroy", () => {
			d()
		}),
		i("enable disable", () => {
			let { nextEl: v, prevEl: g } = e.navigation
			if (((v = r(v)), (g = r(g)), e.enabled)) {
				n()
				return
			}
			;[...v, ...g]
				.filter((y) => !!y)
				.forEach((y) => y.classList.add(e.params.navigation.lockClass))
		}),
		i("click", (v, g) => {
			let { nextEl: y, prevEl: h } = e.navigation
			;(y = r(y)), (h = r(h))
			const p = g.target
			if (e.params.navigation.hideOnClick && !h.includes(p) && !y.includes(p)) {
				if (
					e.pagination &&
					e.params.pagination &&
					e.params.pagination.clickable &&
					(e.pagination.el === p || e.pagination.el.contains(p))
				)
					return
				let S
				y.length
					? (S = y[0].classList.contains(e.params.navigation.hiddenClass))
					: h.length &&
					  (S = h[0].classList.contains(e.params.navigation.hiddenClass)),
					a(S === !0 ? "navigationShow" : "navigationHide"),
					[...y, ...h]
						.filter((I) => !!I)
						.forEach((I) => I.classList.toggle(e.params.navigation.hiddenClass))
			}
		})
	const m = () => {
			e.el.classList.remove(
				...e.params.navigation.navigationDisabledClass.split(" ")
			),
				l(),
				n()
		},
		w = () => {
			e.el.classList.add(
				...e.params.navigation.navigationDisabledClass.split(" ")
			),
				d()
		}
	Object.assign(e.navigation, {
		enable: m,
		disable: w,
		update: n,
		init: l,
		destroy: d,
	})
}
function Z(s) {
	return (
		s === void 0 && (s = ""),
		`.${s
			.trim()
			.replace(/([\.:!+\/])/g, "\\$1")
			.replace(/ /g, ".")}`
	)
}
function Es(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	const r = "swiper-pagination"
	t({
		pagination: {
			el: null,
			bulletElement: "span",
			clickable: !1,
			hideOnClick: !1,
			renderBullet: null,
			renderProgressbar: null,
			renderFraction: null,
			renderCustom: null,
			progressbarOpposite: !1,
			type: "bullets",
			dynamicBullets: !1,
			dynamicMainBullets: 1,
			formatFractionCurrent: (h) => h,
			formatFractionTotal: (h) => h,
			bulletClass: `${r}-bullet`,
			bulletActiveClass: `${r}-bullet-active`,
			modifierClass: `${r}-`,
			currentClass: `${r}-current`,
			totalClass: `${r}-total`,
			hiddenClass: `${r}-hidden`,
			progressbarFillClass: `${r}-progressbar-fill`,
			progressbarOppositeClass: `${r}-progressbar-opposite`,
			clickableClass: `${r}-clickable`,
			lockClass: `${r}-lock`,
			horizontalClass: `${r}-horizontal`,
			verticalClass: `${r}-vertical`,
			paginationDisabledClass: `${r}-disabled`,
		},
	}),
		(e.pagination = { el: null, bullets: [] })
	let c,
		f = 0
	const n = (h) => (Array.isArray(h) ? h : [h]).filter((p) => !!p)
	function u() {
		return (
			!e.params.pagination.el ||
			!e.pagination.el ||
			(Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
		)
	}
	function o(h, p) {
		const { bulletActiveClass: S } = e.params.pagination
		h &&
			((h = h[`${p === "prev" ? "previous" : "next"}ElementSibling`]),
			h &&
				(h.classList.add(`${S}-${p}`),
				(h = h[`${p === "prev" ? "previous" : "next"}ElementSibling`]),
				h && h.classList.add(`${S}-${p}-${p}`)))
	}
	function l(h) {
		const p = h.target.closest(Z(e.params.pagination.bulletClass))
		if (!p) return
		h.preventDefault()
		const S = pe(p) * e.params.slidesPerGroup
		if (e.params.loop) {
			if (e.realIndex === S) return
			e.slideToLoop(S)
		} else e.slideTo(S)
	}
	function d() {
		const h = e.rtl,
			p = e.params.pagination
		if (u()) return
		let S = e.pagination.el
		S = n(S)
		let I, C
		const k =
				e.virtual && e.params.virtual.enabled
					? e.virtual.slides.length
					: e.slides.length,
			$ = e.params.loop
				? Math.ceil(k / e.params.slidesPerGroup)
				: e.snapGrid.length
		if (
			(e.params.loop
				? ((C = e.previousRealIndex || 0),
				  (I =
						e.params.slidesPerGroup > 1
							? Math.floor(e.realIndex / e.params.slidesPerGroup)
							: e.realIndex))
				: typeof e.snapIndex < "u"
				? ((I = e.snapIndex), (C = e.previousSnapIndex))
				: ((C = e.previousIndex || 0), (I = e.activeIndex || 0)),
			p.type === "bullets" &&
				e.pagination.bullets &&
				e.pagination.bullets.length > 0)
		) {
			const P = e.pagination.bullets
			let T, L, M
			if (
				(p.dynamicBullets &&
					((c = $e(P[0], e.isHorizontal() ? "width" : "height", !0)),
					S.forEach((x) => {
						x.style[e.isHorizontal() ? "width" : "height"] = `${
							c * (p.dynamicMainBullets + 4)
						}px`
					}),
					p.dynamicMainBullets > 1 &&
						C !== void 0 &&
						((f += I - (C || 0)),
						f > p.dynamicMainBullets - 1
							? (f = p.dynamicMainBullets - 1)
							: f < 0 && (f = 0)),
					(T = Math.max(I - f, 0)),
					(L = T + (Math.min(P.length, p.dynamicMainBullets) - 1)),
					(M = (L + T) / 2)),
				P.forEach((x) => {
					const b = [
						...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
							(E) => `${p.bulletActiveClass}${E}`
						),
					]
						.map((E) =>
							typeof E == "string" && E.includes(" ") ? E.split(" ") : E
						)
						.flat()
					x.classList.remove(...b)
				}),
				S.length > 1)
			)
				P.forEach((x) => {
					const b = pe(x)
					b === I
						? x.classList.add(...p.bulletActiveClass.split(" "))
						: e.isElement && x.setAttribute("part", "bullet"),
						p.dynamicBullets &&
							(b >= T &&
								b <= L &&
								x.classList.add(...`${p.bulletActiveClass}-main`.split(" ")),
							b === T && o(x, "prev"),
							b === L && o(x, "next"))
				})
			else {
				const x = P[I]
				if (
					(x && x.classList.add(...p.bulletActiveClass.split(" ")),
					e.isElement &&
						P.forEach((b, E) => {
							b.setAttribute("part", E === I ? "bullet-active" : "bullet")
						}),
					p.dynamicBullets)
				) {
					const b = P[T],
						E = P[L]
					for (let D = T; D <= L; D += 1)
						P[D] &&
							P[D].classList.add(...`${p.bulletActiveClass}-main`.split(" "))
					o(b, "prev"), o(E, "next")
				}
			}
			if (p.dynamicBullets) {
				const x = Math.min(P.length, p.dynamicMainBullets + 4),
					b = (c * x - c) / 2 - M * c,
					E = h ? "right" : "left"
				P.forEach((D) => {
					D.style[e.isHorizontal() ? E : "top"] = `${b}px`
				})
			}
		}
		S.forEach((P, T) => {
			if (
				(p.type === "fraction" &&
					(P.querySelectorAll(Z(p.currentClass)).forEach((L) => {
						L.textContent = p.formatFractionCurrent(I + 1)
					}),
					P.querySelectorAll(Z(p.totalClass)).forEach((L) => {
						L.textContent = p.formatFractionTotal($)
					})),
				p.type === "progressbar")
			) {
				let L
				p.progressbarOpposite
					? (L = e.isHorizontal() ? "vertical" : "horizontal")
					: (L = e.isHorizontal() ? "horizontal" : "vertical")
				const M = (I + 1) / $
				let x = 1,
					b = 1
				L === "horizontal" ? (x = M) : (b = M),
					P.querySelectorAll(Z(p.progressbarFillClass)).forEach((E) => {
						;(E.style.transform = `translate3d(0,0,0) scaleX(${x}) scaleY(${b})`),
							(E.style.transitionDuration = `${e.params.speed}ms`)
					})
			}
			p.type === "custom" && p.renderCustom
				? ((P.innerHTML = p.renderCustom(e, I + 1, $)),
				  T === 0 && a("paginationRender", P))
				: (T === 0 && a("paginationRender", P), a("paginationUpdate", P)),
				e.params.watchOverflow &&
					e.enabled &&
					P.classList[e.isLocked ? "add" : "remove"](p.lockClass)
		})
	}
	function m() {
		const h = e.params.pagination
		if (u()) return
		const p =
			e.virtual && e.params.virtual.enabled
				? e.virtual.slides.length
				: e.grid && e.params.grid.rows > 1
				? e.slides.length / Math.ceil(e.params.grid.rows)
				: e.slides.length
		let S = e.pagination.el
		S = n(S)
		let I = ""
		if (h.type === "bullets") {
			let C = e.params.loop
				? Math.ceil(p / e.params.slidesPerGroup)
				: e.snapGrid.length
			e.params.freeMode && e.params.freeMode.enabled && C > p && (C = p)
			for (let k = 0; k < C; k += 1)
				h.renderBullet
					? (I += h.renderBullet.call(e, k, h.bulletClass))
					: (I += `<${h.bulletElement} ${
							e.isElement ? 'part="bullet"' : ""
					  } class="${h.bulletClass}"></${h.bulletElement}>`)
		}
		h.type === "fraction" &&
			(h.renderFraction
				? (I = h.renderFraction.call(e, h.currentClass, h.totalClass))
				: (I = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`)),
			h.type === "progressbar" &&
				(h.renderProgressbar
					? (I = h.renderProgressbar.call(e, h.progressbarFillClass))
					: (I = `<span class="${h.progressbarFillClass}"></span>`)),
			(e.pagination.bullets = []),
			S.forEach((C) => {
				h.type !== "custom" && (C.innerHTML = I || ""),
					h.type === "bullets" &&
						e.pagination.bullets.push(...C.querySelectorAll(Z(h.bulletClass)))
			}),
			h.type !== "custom" && a("paginationRender", S[0])
	}
	function w() {
		e.params.pagination = Ge(
			e,
			e.originalParams.pagination,
			e.params.pagination,
			{ el: "swiper-pagination" }
		)
		const h = e.params.pagination
		if (!h.el) return
		let p
		typeof h.el == "string" && e.isElement && (p = e.el.querySelector(h.el)),
			!p &&
				typeof h.el == "string" &&
				(p = [...document.querySelectorAll(h.el)]),
			p || (p = h.el),
			!(!p || p.length === 0) &&
				(e.params.uniqueNavElements &&
					typeof h.el == "string" &&
					Array.isArray(p) &&
					p.length > 1 &&
					((p = [...e.el.querySelectorAll(h.el)]),
					p.length > 1 &&
						(p = p.filter((S) => se(S, ".swiper")[0] === e.el)[0])),
				Array.isArray(p) && p.length === 1 && (p = p[0]),
				Object.assign(e.pagination, { el: p }),
				(p = n(p)),
				p.forEach((S) => {
					h.type === "bullets" &&
						h.clickable &&
						S.classList.add(...(h.clickableClass || "").split(" ")),
						S.classList.add(h.modifierClass + h.type),
						S.classList.add(
							e.isHorizontal() ? h.horizontalClass : h.verticalClass
						),
						h.type === "bullets" &&
							h.dynamicBullets &&
							(S.classList.add(`${h.modifierClass}${h.type}-dynamic`),
							(f = 0),
							h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
						h.type === "progressbar" &&
							h.progressbarOpposite &&
							S.classList.add(h.progressbarOppositeClass),
						h.clickable && S.addEventListener("click", l),
						e.enabled || S.classList.add(h.lockClass)
				}))
	}
	function v() {
		const h = e.params.pagination
		if (u()) return
		let p = e.pagination.el
		p &&
			((p = n(p)),
			p.forEach((S) => {
				S.classList.remove(h.hiddenClass),
					S.classList.remove(h.modifierClass + h.type),
					S.classList.remove(
						e.isHorizontal() ? h.horizontalClass : h.verticalClass
					),
					h.clickable &&
						(S.classList.remove(...(h.clickableClass || "").split(" ")),
						S.removeEventListener("click", l))
			})),
			e.pagination.bullets &&
				e.pagination.bullets.forEach((S) =>
					S.classList.remove(...h.bulletActiveClass.split(" "))
				)
	}
	i("changeDirection", () => {
		if (!e.pagination || !e.pagination.el) return
		const h = e.params.pagination
		let { el: p } = e.pagination
		;(p = n(p)),
			p.forEach((S) => {
				S.classList.remove(h.horizontalClass, h.verticalClass),
					S.classList.add(
						e.isHorizontal() ? h.horizontalClass : h.verticalClass
					)
			})
	}),
		i("init", () => {
			e.params.pagination.enabled === !1 ? y() : (w(), m(), d())
		}),
		i("activeIndexChange", () => {
			typeof e.snapIndex > "u" && d()
		}),
		i("snapIndexChange", () => {
			d()
		}),
		i("snapGridLengthChange", () => {
			m(), d()
		}),
		i("destroy", () => {
			v()
		}),
		i("enable disable", () => {
			let { el: h } = e.pagination
			h &&
				((h = n(h)),
				h.forEach((p) =>
					p.classList[e.enabled ? "remove" : "add"](
						e.params.pagination.lockClass
					)
				))
		}),
		i("lock unlock", () => {
			d()
		}),
		i("click", (h, p) => {
			const S = p.target,
				I = n(e.pagination.el)
			if (
				e.params.pagination.el &&
				e.params.pagination.hideOnClick &&
				I &&
				I.length > 0 &&
				!S.classList.contains(e.params.pagination.bulletClass)
			) {
				if (
					e.navigation &&
					((e.navigation.nextEl && S === e.navigation.nextEl) ||
						(e.navigation.prevEl && S === e.navigation.prevEl))
				)
					return
				const C = I[0].classList.contains(e.params.pagination.hiddenClass)
				a(C === !0 ? "paginationShow" : "paginationHide"),
					I.forEach((k) => k.classList.toggle(e.params.pagination.hiddenClass))
			}
		})
	const g = () => {
			e.el.classList.remove(e.params.pagination.paginationDisabledClass)
			let { el: h } = e.pagination
			h &&
				((h = n(h)),
				h.forEach((p) =>
					p.classList.remove(e.params.pagination.paginationDisabledClass)
				)),
				w(),
				m(),
				d()
		},
		y = () => {
			e.el.classList.add(e.params.pagination.paginationDisabledClass)
			let { el: h } = e.pagination
			h &&
				((h = n(h)),
				h.forEach((p) =>
					p.classList.add(e.params.pagination.paginationDisabledClass)
				)),
				v()
		}
	Object.assign(e.pagination, {
		enable: g,
		disable: y,
		render: m,
		update: d,
		init: w,
		destroy: v,
	})
}
function xs(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	const r = Y()
	let c = !1,
		f = null,
		n = null,
		u,
		o,
		l,
		d
	t({
		scrollbar: {
			el: null,
			dragSize: "auto",
			hide: !1,
			draggable: !1,
			snapOnRelease: !0,
			lockClass: "swiper-scrollbar-lock",
			dragClass: "swiper-scrollbar-drag",
			scrollbarDisabledClass: "swiper-scrollbar-disabled",
			horizontalClass: "swiper-scrollbar-horizontal",
			verticalClass: "swiper-scrollbar-vertical",
		},
	}),
		(e.scrollbar = { el: null, dragEl: null })
	function m() {
		if (!e.params.scrollbar.el || !e.scrollbar.el) return
		const { scrollbar: M, rtlTranslate: x } = e,
			{ dragEl: b, el: E } = M,
			D = e.params.scrollbar,
			O = e.params.loop ? e.progressLoop : e.progress
		let A = o,
			z = (l - o) * O
		x
			? ((z = -z), z > 0 ? ((A = o - z), (z = 0)) : -z + o > l && (A = l + z))
			: z < 0
			? ((A = o + z), (z = 0))
			: z + o > l && (A = l - z),
			e.isHorizontal()
				? ((b.style.transform = `translate3d(${z}px, 0, 0)`),
				  (b.style.width = `${A}px`))
				: ((b.style.transform = `translate3d(0px, ${z}px, 0)`),
				  (b.style.height = `${A}px`)),
			D.hide &&
				(clearTimeout(f),
				(E.style.opacity = 1),
				(f = setTimeout(() => {
					;(E.style.opacity = 0), (E.style.transitionDuration = "400ms")
				}, 1e3)))
	}
	function w(M) {
		!e.params.scrollbar.el ||
			!e.scrollbar.el ||
			(e.scrollbar.dragEl.style.transitionDuration = `${M}ms`)
	}
	function v() {
		if (!e.params.scrollbar.el || !e.scrollbar.el) return
		const { scrollbar: M } = e,
			{ dragEl: x, el: b } = M
		;(x.style.width = ""),
			(x.style.height = ""),
			(l = e.isHorizontal() ? b.offsetWidth : b.offsetHeight),
			(d =
				e.size /
				(e.virtualSize +
					e.params.slidesOffsetBefore -
					(e.params.centeredSlides ? e.snapGrid[0] : 0))),
			e.params.scrollbar.dragSize === "auto"
				? (o = l * d)
				: (o = parseInt(e.params.scrollbar.dragSize, 10)),
			e.isHorizontal()
				? (x.style.width = `${o}px`)
				: (x.style.height = `${o}px`),
			d >= 1 ? (b.style.display = "none") : (b.style.display = ""),
			e.params.scrollbar.hide && (b.style.opacity = 0),
			e.params.watchOverflow &&
				e.enabled &&
				M.el.classList[e.isLocked ? "add" : "remove"](
					e.params.scrollbar.lockClass
				)
	}
	function g(M) {
		return e.isHorizontal() ? M.clientX : M.clientY
	}
	function y(M) {
		const { scrollbar: x, rtlTranslate: b } = e,
			{ el: E } = x
		let D
		;(D =
			(g(M) -
				ye(E)[e.isHorizontal() ? "left" : "top"] -
				(u !== null ? u : o / 2)) /
			(l - o)),
			(D = Math.max(Math.min(D, 1), 0)),
			b && (D = 1 - D)
		const O = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * D
		e.updateProgress(O),
			e.setTranslate(O),
			e.updateActiveIndex(),
			e.updateSlidesClasses()
	}
	function h(M) {
		const x = e.params.scrollbar,
			{ scrollbar: b, wrapperEl: E } = e,
			{ el: D, dragEl: O } = b
		;(c = !0),
			(u =
				M.target === O
					? g(M) -
					  M.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
					: null),
			M.preventDefault(),
			M.stopPropagation(),
			(E.style.transitionDuration = "100ms"),
			(O.style.transitionDuration = "100ms"),
			y(M),
			clearTimeout(n),
			(D.style.transitionDuration = "0ms"),
			x.hide && (D.style.opacity = 1),
			e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
			a("scrollbarDragStart", M)
	}
	function p(M) {
		const { scrollbar: x, wrapperEl: b } = e,
			{ el: E, dragEl: D } = x
		c &&
			(M.preventDefault ? M.preventDefault() : (M.returnValue = !1),
			y(M),
			(b.style.transitionDuration = "0ms"),
			(E.style.transitionDuration = "0ms"),
			(D.style.transitionDuration = "0ms"),
			a("scrollbarDragMove", M))
	}
	function S(M) {
		const x = e.params.scrollbar,
			{ scrollbar: b, wrapperEl: E } = e,
			{ el: D } = b
		c &&
			((c = !1),
			e.params.cssMode &&
				((e.wrapperEl.style["scroll-snap-type"] = ""),
				(E.style.transitionDuration = "")),
			x.hide &&
				(clearTimeout(n),
				(n = ie(() => {
					;(D.style.opacity = 0), (D.style.transitionDuration = "400ms")
				}, 1e3))),
			a("scrollbarDragEnd", M),
			x.snapOnRelease && e.slideToClosest())
	}
	function I(M) {
		const { scrollbar: x, params: b } = e,
			E = x.el
		if (!E) return
		const D = E,
			O = b.passiveListeners ? { passive: !1, capture: !1 } : !1,
			A = b.passiveListeners ? { passive: !0, capture: !1 } : !1
		if (!D) return
		const z = M === "on" ? "addEventListener" : "removeEventListener"
		D[z]("pointerdown", h, O),
			r[z]("pointermove", p, O),
			r[z]("pointerup", S, A)
	}
	function C() {
		!e.params.scrollbar.el || !e.scrollbar.el || I("on")
	}
	function k() {
		!e.params.scrollbar.el || !e.scrollbar.el || I("off")
	}
	function $() {
		const { scrollbar: M, el: x } = e
		e.params.scrollbar = Ge(e, e.originalParams.scrollbar, e.params.scrollbar, {
			el: "swiper-scrollbar",
		})
		const b = e.params.scrollbar
		if (!b.el) return
		let E
		if (
			(typeof b.el == "string" && e.isElement && (E = e.el.querySelector(b.el)),
			!E && typeof b.el == "string")
		) {
			if (((E = r.querySelectorAll(b.el)), !E.length)) return
		} else E || (E = b.el)
		e.params.uniqueNavElements &&
			typeof b.el == "string" &&
			E.length > 1 &&
			x.querySelectorAll(b.el).length === 1 &&
			(E = x.querySelector(b.el)),
			E.length > 0 && (E = E[0]),
			E.classList.add(e.isHorizontal() ? b.horizontalClass : b.verticalClass)
		let D
		E &&
			((D = E.querySelector(Z(e.params.scrollbar.dragClass))),
			D || ((D = W("div", e.params.scrollbar.dragClass)), E.append(D))),
			Object.assign(M, { el: E, dragEl: D }),
			b.draggable && C(),
			E &&
				E.classList[e.enabled ? "remove" : "add"](
					...Q(e.params.scrollbar.lockClass)
				)
	}
	function P() {
		const M = e.params.scrollbar,
			x = e.scrollbar.el
		x &&
			x.classList.remove(
				...Q(e.isHorizontal() ? M.horizontalClass : M.verticalClass)
			),
			k()
	}
	i("init", () => {
		e.params.scrollbar.enabled === !1 ? L() : ($(), v(), m())
	}),
		i("update resize observerUpdate lock unlock", () => {
			v()
		}),
		i("setTranslate", () => {
			m()
		}),
		i("setTransition", (M, x) => {
			w(x)
		}),
		i("enable disable", () => {
			const { el: M } = e.scrollbar
			M &&
				M.classList[e.enabled ? "remove" : "add"](
					...Q(e.params.scrollbar.lockClass)
				)
		}),
		i("destroy", () => {
			P()
		})
	const T = () => {
			e.el.classList.remove(...Q(e.params.scrollbar.scrollbarDisabledClass)),
				e.scrollbar.el &&
					e.scrollbar.el.classList.remove(
						...Q(e.params.scrollbar.scrollbarDisabledClass)
					),
				$(),
				v(),
				m()
		},
		L = () => {
			e.el.classList.add(...Q(e.params.scrollbar.scrollbarDisabledClass)),
				e.scrollbar.el &&
					e.scrollbar.el.classList.add(
						...Q(e.params.scrollbar.scrollbarDisabledClass)
					),
				P()
		}
	Object.assign(e.scrollbar, {
		enable: T,
		disable: L,
		updateSize: v,
		setTranslate: m,
		init: $,
		destroy: P,
	})
}
function Ts(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({ parallax: { enabled: !1 } })
	const a =
			"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
		r = (n, u) => {
			const { rtl: o } = e,
				l = o ? -1 : 1,
				d = n.getAttribute("data-swiper-parallax") || "0"
			let m = n.getAttribute("data-swiper-parallax-x"),
				w = n.getAttribute("data-swiper-parallax-y")
			const v = n.getAttribute("data-swiper-parallax-scale"),
				g = n.getAttribute("data-swiper-parallax-opacity"),
				y = n.getAttribute("data-swiper-parallax-rotate")
			if (
				(m || w
					? ((m = m || "0"), (w = w || "0"))
					: e.isHorizontal()
					? ((m = d), (w = "0"))
					: ((w = d), (m = "0")),
				m.indexOf("%") >= 0
					? (m = `${parseInt(m, 10) * u * l}%`)
					: (m = `${m * u * l}px`),
				w.indexOf("%") >= 0
					? (w = `${parseInt(w, 10) * u}%`)
					: (w = `${w * u}px`),
				typeof g < "u" && g !== null)
			) {
				const p = g - (g - 1) * (1 - Math.abs(u))
				n.style.opacity = p
			}
			let h = `translate3d(${m}, ${w}, 0px)`
			if (typeof v < "u" && v !== null) {
				const p = v - (v - 1) * (1 - Math.abs(u))
				h += ` scale(${p})`
			}
			if (y && typeof y < "u" && y !== null) {
				const p = y * u * -1
				h += ` rotate(${p}deg)`
			}
			n.style.transform = h
		},
		c = () => {
			const { el: n, slides: u, progress: o, snapGrid: l, isElement: d } = e,
				m = N(n, a)
			e.isElement && m.push(...N(e.hostEl, a)),
				m.forEach((w) => {
					r(w, o)
				}),
				u.forEach((w, v) => {
					let g = w.progress
					e.params.slidesPerGroup > 1 &&
						e.params.slidesPerView !== "auto" &&
						(g += Math.ceil(v / 2) - o * (l.length - 1)),
						(g = Math.min(Math.max(g, -1), 1)),
						w
							.querySelectorAll(`${a}, [data-swiper-parallax-rotate]`)
							.forEach((y) => {
								r(y, g)
							})
				})
		},
		f = function (n) {
			n === void 0 && (n = e.params.speed)
			const { el: u, hostEl: o } = e,
				l = [...u.querySelectorAll(a)]
			e.isElement && l.push(...o.querySelectorAll(a)),
				l.forEach((d) => {
					let m =
						parseInt(d.getAttribute("data-swiper-parallax-duration"), 10) || n
					n === 0 && (m = 0), (d.style.transitionDuration = `${m}ms`)
				})
		}
	i("beforeInit", () => {
		e.params.parallax.enabled &&
			((e.params.watchSlidesProgress = !0),
			(e.originalParams.watchSlidesProgress = !0))
	}),
		i("init", () => {
			e.params.parallax.enabled && c()
		}),
		i("setTranslate", () => {
			e.params.parallax.enabled && c()
		}),
		i("setTransition", (n, u) => {
			e.params.parallax.enabled && f(u)
		})
}
function Ms(s) {
	let { swiper: e, extendParams: t, on: i, emit: a } = s
	const r = R()
	t({
		zoom: {
			enabled: !1,
			maxRatio: 3,
			minRatio: 1,
			toggle: !0,
			containerClass: "swiper-zoom-container",
			zoomedSlideClass: "swiper-slide-zoomed",
		},
	}),
		(e.zoom = { enabled: !1 })
	let c = 1,
		f = !1,
		n,
		u
	const o = [],
		l = {
			originX: 0,
			originY: 0,
			slideEl: void 0,
			slideWidth: void 0,
			slideHeight: void 0,
			imageEl: void 0,
			imageWrapEl: void 0,
			maxRatio: 3,
		},
		d = {
			isTouched: void 0,
			isMoved: void 0,
			currentX: void 0,
			currentY: void 0,
			minX: void 0,
			minY: void 0,
			maxX: void 0,
			maxY: void 0,
			width: void 0,
			height: void 0,
			startX: void 0,
			startY: void 0,
			touchesStart: {},
			touchesCurrent: {},
		},
		m = {
			x: void 0,
			y: void 0,
			prevPositionX: void 0,
			prevPositionY: void 0,
			prevTime: void 0,
		}
	let w = 1
	Object.defineProperty(e.zoom, "scale", {
		get() {
			return w
		},
		set(O) {
			if (w !== O) {
				const A = l.imageEl,
					z = l.slideEl
				a("zoomChange", O, A, z)
			}
			w = O
		},
	})
	function v() {
		if (o.length < 2) return 1
		const O = o[0].pageX,
			A = o[0].pageY,
			z = o[1].pageX,
			G = o[1].pageY
		return Math.sqrt((z - O) ** 2 + (G - A) ** 2)
	}
	function g() {
		if (o.length < 2) return { x: null, y: null }
		const O = l.imageEl.getBoundingClientRect()
		return [
			(o[0].pageX + (o[1].pageX - o[0].pageX) / 2 - O.x - r.scrollX) / c,
			(o[0].pageY + (o[1].pageY - o[0].pageY) / 2 - O.y - r.scrollY) / c,
		]
	}
	function y() {
		return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
	}
	function h(O) {
		const A = y()
		return !!(
			O.target.matches(A) ||
			e.slides.filter((z) => z.contains(O.target)).length > 0
		)
	}
	function p(O) {
		const A = `.${e.params.zoom.containerClass}`
		return !!(
			O.target.matches(A) ||
			[...e.hostEl.querySelectorAll(A)].filter((z) => z.contains(O.target))
				.length > 0
		)
	}
	function S(O) {
		if ((O.pointerType === "mouse" && o.splice(0, o.length), !h(O))) return
		const A = e.params.zoom
		if (((n = !1), (u = !1), o.push(O), !(o.length < 2))) {
			if (((n = !0), (l.scaleStart = v()), !l.slideEl)) {
				;(l.slideEl = O.target.closest(
					`.${e.params.slideClass}, swiper-slide`
				)),
					l.slideEl || (l.slideEl = e.slides[e.activeIndex])
				let z = l.slideEl.querySelector(`.${A.containerClass}`)
				if (
					(z &&
						(z = z.querySelectorAll(
							"picture, img, svg, canvas, .swiper-zoom-target"
						)[0]),
					(l.imageEl = z),
					z
						? (l.imageWrapEl = se(l.imageEl, `.${A.containerClass}`)[0])
						: (l.imageWrapEl = void 0),
					!l.imageWrapEl)
				) {
					l.imageEl = void 0
					return
				}
				l.maxRatio =
					l.imageWrapEl.getAttribute("data-swiper-zoom") || A.maxRatio
			}
			if (l.imageEl) {
				const [z, G] = g()
				;(l.originX = z),
					(l.originY = G),
					(l.imageEl.style.transitionDuration = "0ms")
			}
			f = !0
		}
	}
	function I(O) {
		if (!h(O)) return
		const A = e.params.zoom,
			z = e.zoom,
			G = o.findIndex((B) => B.pointerId === O.pointerId)
		G >= 0 && (o[G] = O),
			!(o.length < 2) &&
				((u = !0),
				(l.scaleMove = v()),
				l.imageEl &&
					((z.scale = (l.scaleMove / l.scaleStart) * c),
					z.scale > l.maxRatio &&
						(z.scale = l.maxRatio - 1 + (z.scale - l.maxRatio + 1) ** 0.5),
					z.scale < A.minRatio &&
						(z.scale = A.minRatio + 1 - (A.minRatio - z.scale + 1) ** 0.5),
					(l.imageEl.style.transform = `translate3d(0,0,0) scale(${z.scale})`)))
	}
	function C(O) {
		if (!h(O) || (O.pointerType === "mouse" && O.type === "pointerout")) return
		const A = e.params.zoom,
			z = e.zoom,
			G = o.findIndex((B) => B.pointerId === O.pointerId)
		G >= 0 && o.splice(G, 1),
			!(!n || !u) &&
				((n = !1),
				(u = !1),
				l.imageEl &&
					((z.scale = Math.max(Math.min(z.scale, l.maxRatio), A.minRatio)),
					(l.imageEl.style.transitionDuration = `${e.params.speed}ms`),
					(l.imageEl.style.transform = `translate3d(0,0,0) scale(${z.scale})`),
					(c = z.scale),
					(f = !1),
					z.scale > 1 && l.slideEl
						? l.slideEl.classList.add(`${A.zoomedSlideClass}`)
						: z.scale <= 1 &&
						  l.slideEl &&
						  l.slideEl.classList.remove(`${A.zoomedSlideClass}`),
					z.scale === 1 &&
						((l.originX = 0), (l.originY = 0), (l.slideEl = void 0))))
	}
	function k(O) {
		const A = e.device
		if (!l.imageEl || d.isTouched) return
		A.android && O.cancelable && O.preventDefault(), (d.isTouched = !0)
		const z = o.length > 0 ? o[0] : O
		;(d.touchesStart.x = z.pageX), (d.touchesStart.y = z.pageY)
	}
	function $(O) {
		if (!h(O) || !p(O)) return
		const A = e.zoom
		if (!l.imageEl || !d.isTouched || !l.slideEl) return
		d.isMoved ||
			((d.width = l.imageEl.offsetWidth),
			(d.height = l.imageEl.offsetHeight),
			(d.startX = ze(l.imageWrapEl, "x") || 0),
			(d.startY = ze(l.imageWrapEl, "y") || 0),
			(l.slideWidth = l.slideEl.offsetWidth),
			(l.slideHeight = l.slideEl.offsetHeight),
			(l.imageWrapEl.style.transitionDuration = "0ms"))
		const z = d.width * A.scale,
			G = d.height * A.scale
		if (z < l.slideWidth && G < l.slideHeight) return
		if (
			((d.minX = Math.min(l.slideWidth / 2 - z / 2, 0)),
			(d.maxX = -d.minX),
			(d.minY = Math.min(l.slideHeight / 2 - G / 2, 0)),
			(d.maxY = -d.minY),
			(d.touchesCurrent.x = o.length > 0 ? o[0].pageX : O.pageX),
			(d.touchesCurrent.y = o.length > 0 ? o[0].pageY : O.pageY),
			Math.max(
				Math.abs(d.touchesCurrent.x - d.touchesStart.x),
				Math.abs(d.touchesCurrent.y - d.touchesStart.y)
			) > 5 && (e.allowClick = !1),
			!d.isMoved && !f)
		) {
			if (
				e.isHorizontal() &&
				((Math.floor(d.minX) === Math.floor(d.startX) &&
					d.touchesCurrent.x < d.touchesStart.x) ||
					(Math.floor(d.maxX) === Math.floor(d.startX) &&
						d.touchesCurrent.x > d.touchesStart.x))
			) {
				d.isTouched = !1
				return
			}
			if (
				!e.isHorizontal() &&
				((Math.floor(d.minY) === Math.floor(d.startY) &&
					d.touchesCurrent.y < d.touchesStart.y) ||
					(Math.floor(d.maxY) === Math.floor(d.startY) &&
						d.touchesCurrent.y > d.touchesStart.y))
			) {
				d.isTouched = !1
				return
			}
		}
		O.cancelable && O.preventDefault(), O.stopPropagation(), (d.isMoved = !0)
		const V = (A.scale - c) / (l.maxRatio - e.params.zoom.minRatio),
			{ originX: H, originY: X } = l
		;(d.currentX =
			d.touchesCurrent.x - d.touchesStart.x + d.startX + V * (d.width - H * 2)),
			(d.currentY =
				d.touchesCurrent.y -
				d.touchesStart.y +
				d.startY +
				V * (d.height - X * 2)),
			d.currentX < d.minX &&
				(d.currentX = d.minX + 1 - (d.minX - d.currentX + 1) ** 0.8),
			d.currentX > d.maxX &&
				(d.currentX = d.maxX - 1 + (d.currentX - d.maxX + 1) ** 0.8),
			d.currentY < d.minY &&
				(d.currentY = d.minY + 1 - (d.minY - d.currentY + 1) ** 0.8),
			d.currentY > d.maxY &&
				(d.currentY = d.maxY - 1 + (d.currentY - d.maxY + 1) ** 0.8),
			m.prevPositionX || (m.prevPositionX = d.touchesCurrent.x),
			m.prevPositionY || (m.prevPositionY = d.touchesCurrent.y),
			m.prevTime || (m.prevTime = Date.now()),
			(m.x =
				(d.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2),
			(m.y =
				(d.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2),
			Math.abs(d.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0),
			Math.abs(d.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0),
			(m.prevPositionX = d.touchesCurrent.x),
			(m.prevPositionY = d.touchesCurrent.y),
			(m.prevTime = Date.now()),
			(l.imageWrapEl.style.transform = `translate3d(${d.currentX}px, ${d.currentY}px,0)`)
	}
	function P() {
		const O = e.zoom
		if (!l.imageEl) return
		if (!d.isTouched || !d.isMoved) {
			;(d.isTouched = !1), (d.isMoved = !1)
			return
		}
		;(d.isTouched = !1), (d.isMoved = !1)
		let A = 300,
			z = 300
		const G = m.x * A,
			B = d.currentX + G,
			V = m.y * z,
			H = d.currentY + V
		m.x !== 0 && (A = Math.abs((B - d.currentX) / m.x)),
			m.y !== 0 && (z = Math.abs((H - d.currentY) / m.y))
		const X = Math.max(A, z)
		;(d.currentX = B), (d.currentY = H)
		const q = d.width * O.scale,
			K = d.height * O.scale
		;(d.minX = Math.min(l.slideWidth / 2 - q / 2, 0)),
			(d.maxX = -d.minX),
			(d.minY = Math.min(l.slideHeight / 2 - K / 2, 0)),
			(d.maxY = -d.minY),
			(d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
			(d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
			(l.imageWrapEl.style.transitionDuration = `${X}ms`),
			(l.imageWrapEl.style.transform = `translate3d(${d.currentX}px, ${d.currentY}px,0)`)
	}
	function T() {
		const O = e.zoom
		l.slideEl &&
			e.activeIndex !== e.slides.indexOf(l.slideEl) &&
			(l.imageEl && (l.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
			l.imageWrapEl && (l.imageWrapEl.style.transform = "translate3d(0,0,0)"),
			l.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
			(O.scale = 1),
			(c = 1),
			(l.slideEl = void 0),
			(l.imageEl = void 0),
			(l.imageWrapEl = void 0),
			(l.originX = 0),
			(l.originY = 0))
	}
	function L(O) {
		const A = e.zoom,
			z = e.params.zoom
		if (!l.slideEl) {
			O &&
				O.target &&
				(l.slideEl = O.target.closest(`.${e.params.slideClass}, swiper-slide`)),
				l.slideEl ||
					(e.params.virtual && e.params.virtual.enabled && e.virtual
						? (l.slideEl = N(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
						: (l.slideEl = e.slides[e.activeIndex]))
			let de = l.slideEl.querySelector(`.${z.containerClass}`)
			de &&
				(de = de.querySelectorAll(
					"picture, img, svg, canvas, .swiper-zoom-target"
				)[0]),
				(l.imageEl = de),
				de
					? (l.imageWrapEl = se(l.imageEl, `.${z.containerClass}`)[0])
					: (l.imageWrapEl = void 0)
		}
		if (!l.imageEl || !l.imageWrapEl) return
		e.params.cssMode &&
			((e.wrapperEl.style.overflow = "hidden"),
			(e.wrapperEl.style.touchAction = "none")),
			l.slideEl.classList.add(`${z.zoomedSlideClass}`)
		let G, B, V, H, X, q, K, ee, Be, Xe, Re, Ne, he, ge, Se, Ee, xe, Te
		typeof d.touchesStart.x > "u" && O
			? ((G = O.pageX), (B = O.pageY))
			: ((G = d.touchesStart.x), (B = d.touchesStart.y))
		const oe = typeof O == "number" ? O : null
		c === 1 && oe && ((G = void 0), (B = void 0)),
			(A.scale =
				oe || l.imageWrapEl.getAttribute("data-swiper-zoom") || z.maxRatio),
			(c = oe || l.imageWrapEl.getAttribute("data-swiper-zoom") || z.maxRatio),
			O && !(c === 1 && oe)
				? ((xe = l.slideEl.offsetWidth),
				  (Te = l.slideEl.offsetHeight),
				  (V = ye(l.slideEl).left + r.scrollX),
				  (H = ye(l.slideEl).top + r.scrollY),
				  (X = V + xe / 2 - G),
				  (q = H + Te / 2 - B),
				  (Be = l.imageEl.offsetWidth),
				  (Xe = l.imageEl.offsetHeight),
				  (Re = Be * A.scale),
				  (Ne = Xe * A.scale),
				  (he = Math.min(xe / 2 - Re / 2, 0)),
				  (ge = Math.min(Te / 2 - Ne / 2, 0)),
				  (Se = -he),
				  (Ee = -ge),
				  (K = X * A.scale),
				  (ee = q * A.scale),
				  K < he && (K = he),
				  K > Se && (K = Se),
				  ee < ge && (ee = ge),
				  ee > Ee && (ee = Ee))
				: ((K = 0), (ee = 0)),
			oe && A.scale === 1 && ((l.originX = 0), (l.originY = 0)),
			(l.imageWrapEl.style.transitionDuration = "300ms"),
			(l.imageWrapEl.style.transform = `translate3d(${K}px, ${ee}px,0)`),
			(l.imageEl.style.transitionDuration = "300ms"),
			(l.imageEl.style.transform = `translate3d(0,0,0) scale(${A.scale})`)
	}
	function M() {
		const O = e.zoom,
			A = e.params.zoom
		if (!l.slideEl) {
			e.params.virtual && e.params.virtual.enabled && e.virtual
				? (l.slideEl = N(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
				: (l.slideEl = e.slides[e.activeIndex])
			let z = l.slideEl.querySelector(`.${A.containerClass}`)
			z &&
				(z = z.querySelectorAll(
					"picture, img, svg, canvas, .swiper-zoom-target"
				)[0]),
				(l.imageEl = z),
				z
					? (l.imageWrapEl = se(l.imageEl, `.${A.containerClass}`)[0])
					: (l.imageWrapEl = void 0)
		}
		!l.imageEl ||
			!l.imageWrapEl ||
			(e.params.cssMode &&
				((e.wrapperEl.style.overflow = ""),
				(e.wrapperEl.style.touchAction = "")),
			(O.scale = 1),
			(c = 1),
			(l.imageWrapEl.style.transitionDuration = "300ms"),
			(l.imageWrapEl.style.transform = "translate3d(0,0,0)"),
			(l.imageEl.style.transitionDuration = "300ms"),
			(l.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
			l.slideEl.classList.remove(`${A.zoomedSlideClass}`),
			(l.slideEl = void 0),
			(l.originX = 0),
			(l.originY = 0))
	}
	function x(O) {
		const A = e.zoom
		A.scale && A.scale !== 1 ? M() : L(O)
	}
	function b() {
		const O = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
			A = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0
		return { passiveListener: O, activeListenerWithCapture: A }
	}
	function E() {
		const O = e.zoom
		if (O.enabled) return
		O.enabled = !0
		const { passiveListener: A, activeListenerWithCapture: z } = b()
		e.wrapperEl.addEventListener("pointerdown", S, A),
			e.wrapperEl.addEventListener("pointermove", I, z),
			["pointerup", "pointercancel", "pointerout"].forEach((G) => {
				e.wrapperEl.addEventListener(G, C, A)
			}),
			e.wrapperEl.addEventListener("pointermove", $, z)
	}
	function D() {
		const O = e.zoom
		if (!O.enabled) return
		O.enabled = !1
		const { passiveListener: A, activeListenerWithCapture: z } = b()
		e.wrapperEl.removeEventListener("pointerdown", S, A),
			e.wrapperEl.removeEventListener("pointermove", I, z),
			["pointerup", "pointercancel", "pointerout"].forEach((G) => {
				e.wrapperEl.removeEventListener(G, C, A)
			}),
			e.wrapperEl.removeEventListener("pointermove", $, z)
	}
	i("init", () => {
		e.params.zoom.enabled && E()
	}),
		i("destroy", () => {
			D()
		}),
		i("touchStart", (O, A) => {
			e.zoom.enabled && k(A)
		}),
		i("touchEnd", (O, A) => {
			e.zoom.enabled && P()
		}),
		i("doubleTap", (O, A) => {
			!e.animating &&
				e.params.zoom.enabled &&
				e.zoom.enabled &&
				e.params.zoom.toggle &&
				x(A)
		}),
		i("transitionEnd", () => {
			e.zoom.enabled && e.params.zoom.enabled && T()
		}),
		i("slideChange", () => {
			e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && T()
		}),
		Object.assign(e.zoom, { enable: E, disable: D, in: L, out: M, toggle: x })
}
function Cs(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
		(e.controller = { control: void 0 })
	function a(u, o) {
		const l = (function () {
			let v, g, y
			return (h, p) => {
				for (g = -1, v = h.length; v - g > 1; )
					(y = (v + g) >> 1), h[y] <= p ? (g = y) : (v = y)
				return v
			}
		})()
		;(this.x = u), (this.y = o), (this.lastIndex = u.length - 1)
		let d, m
		return (
			(this.interpolate = function (v) {
				return v
					? ((m = l(this.x, v)),
					  (d = m - 1),
					  ((v - this.x[d]) * (this.y[m] - this.y[d])) /
							(this.x[m] - this.x[d]) +
							this.y[d])
					: 0
			}),
			this
		)
	}
	function r(u) {
		e.controller.spline = e.params.loop
			? new a(e.slidesGrid, u.slidesGrid)
			: new a(e.snapGrid, u.snapGrid)
	}
	function c(u, o) {
		const l = e.controller.control
		let d, m
		const w = e.constructor
		function v(g) {
			if (g.destroyed) return
			const y = e.rtlTranslate ? -e.translate : e.translate
			e.params.controller.by === "slide" &&
				(r(g), (m = -e.controller.spline.interpolate(-y))),
				(!m || e.params.controller.by === "container") &&
					((d =
						(g.maxTranslate() - g.minTranslate()) /
						(e.maxTranslate() - e.minTranslate())),
					(Number.isNaN(d) || !Number.isFinite(d)) && (d = 1),
					(m = (y - e.minTranslate()) * d + g.minTranslate())),
				e.params.controller.inverse && (m = g.maxTranslate() - m),
				g.updateProgress(m),
				g.setTranslate(m, e),
				g.updateActiveIndex(),
				g.updateSlidesClasses()
		}
		if (Array.isArray(l))
			for (let g = 0; g < l.length; g += 1)
				l[g] !== o && l[g] instanceof w && v(l[g])
		else l instanceof w && o !== l && v(l)
	}
	function f(u, o) {
		const l = e.constructor,
			d = e.controller.control
		let m
		function w(v) {
			v.destroyed ||
				(v.setTransition(u, e),
				u !== 0 &&
					(v.transitionStart(),
					v.params.autoHeight &&
						ie(() => {
							v.updateAutoHeight()
						}),
					ue(v.wrapperEl, () => {
						d && v.transitionEnd()
					})))
		}
		if (Array.isArray(d))
			for (m = 0; m < d.length; m += 1)
				d[m] !== o && d[m] instanceof l && w(d[m])
		else d instanceof l && o !== d && w(d)
	}
	function n() {
		e.controller.control &&
			e.controller.spline &&
			((e.controller.spline = void 0), delete e.controller.spline)
	}
	i("beforeInit", () => {
		if (
			typeof window < "u" &&
			(typeof e.params.controller.control == "string" ||
				e.params.controller.control instanceof HTMLElement)
		) {
			const u = document.querySelector(e.params.controller.control)
			if (u && u.swiper) e.controller.control = u.swiper
			else if (u) {
				const o = (l) => {
					;(e.controller.control = l.detail[0]),
						e.update(),
						u.removeEventListener("init", o)
				}
				u.addEventListener("init", o)
			}
			return
		}
		e.controller.control = e.params.controller.control
	}),
		i("update", () => {
			n()
		}),
		i("resize", () => {
			n()
		}),
		i("observerUpdate", () => {
			n()
		}),
		i("setTranslate", (u, o, l) => {
			!e.controller.control ||
				e.controller.control.destroyed ||
				e.controller.setTranslate(o, l)
		}),
		i("setTransition", (u, o, l) => {
			!e.controller.control ||
				e.controller.control.destroyed ||
				e.controller.setTransition(o, l)
		}),
		Object.assign(e.controller, { setTranslate: c, setTransition: f })
}
function Ps(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({
		a11y: {
			enabled: !0,
			notificationClass: "swiper-notification",
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
			firstSlideMessage: "This is the first slide",
			lastSlideMessage: "This is the last slide",
			paginationBulletMessage: "Go to slide {{index}}",
			slideLabelMessage: "{{index}} / {{slidesLength}}",
			containerMessage: null,
			containerRoleDescriptionMessage: null,
			itemRoleDescriptionMessage: null,
			slideRole: "group",
			id: null,
		},
	}),
		(e.a11y = { clicked: !1 })
	let a = null
	function r(b) {
		const E = a
		E.length !== 0 && ((E.innerHTML = ""), (E.innerHTML = b))
	}
	const c = (b) => (Array.isArray(b) ? b : [b]).filter((E) => !!E)
	function f(b) {
		b === void 0 && (b = 16)
		const E = () => Math.round(16 * Math.random()).toString(16)
		return "x".repeat(b).replace(/x/g, E)
	}
	function n(b) {
		;(b = c(b)),
			b.forEach((E) => {
				E.setAttribute("tabIndex", "0")
			})
	}
	function u(b) {
		;(b = c(b)),
			b.forEach((E) => {
				E.setAttribute("tabIndex", "-1")
			})
	}
	function o(b, E) {
		;(b = c(b)),
			b.forEach((D) => {
				D.setAttribute("role", E)
			})
	}
	function l(b, E) {
		;(b = c(b)),
			b.forEach((D) => {
				D.setAttribute("aria-roledescription", E)
			})
	}
	function d(b, E) {
		;(b = c(b)),
			b.forEach((D) => {
				D.setAttribute("aria-controls", E)
			})
	}
	function m(b, E) {
		;(b = c(b)),
			b.forEach((D) => {
				D.setAttribute("aria-label", E)
			})
	}
	function w(b, E) {
		;(b = c(b)),
			b.forEach((D) => {
				D.setAttribute("id", E)
			})
	}
	function v(b, E) {
		;(b = c(b)),
			b.forEach((D) => {
				D.setAttribute("aria-live", E)
			})
	}
	function g(b) {
		;(b = c(b)),
			b.forEach((E) => {
				E.setAttribute("aria-disabled", !0)
			})
	}
	function y(b) {
		;(b = c(b)),
			b.forEach((E) => {
				E.setAttribute("aria-disabled", !1)
			})
	}
	function h(b) {
		if (b.keyCode !== 13 && b.keyCode !== 32) return
		const E = e.params.a11y,
			D = b.target
		;(e.pagination &&
			e.pagination.el &&
			(D === e.pagination.el || e.pagination.el.contains(b.target)) &&
			!b.target.matches(Z(e.params.pagination.bulletClass))) ||
			(e.navigation &&
				e.navigation.nextEl &&
				D === e.navigation.nextEl &&
				((e.isEnd && !e.params.loop) || e.slideNext(),
				e.isEnd ? r(E.lastSlideMessage) : r(E.nextSlideMessage)),
			e.navigation &&
				e.navigation.prevEl &&
				D === e.navigation.prevEl &&
				((e.isBeginning && !e.params.loop) || e.slidePrev(),
				e.isBeginning ? r(E.firstSlideMessage) : r(E.prevSlideMessage)),
			e.pagination &&
				D.matches(Z(e.params.pagination.bulletClass)) &&
				D.click())
	}
	function p() {
		if (e.params.loop || e.params.rewind || !e.navigation) return
		const { nextEl: b, prevEl: E } = e.navigation
		E && (e.isBeginning ? (g(E), u(E)) : (y(E), n(E))),
			b && (e.isEnd ? (g(b), u(b)) : (y(b), n(b)))
	}
	function S() {
		return e.pagination && e.pagination.bullets && e.pagination.bullets.length
	}
	function I() {
		return S() && e.params.pagination.clickable
	}
	function C() {
		const b = e.params.a11y
		S() &&
			e.pagination.bullets.forEach((E) => {
				e.params.pagination.clickable &&
					(n(E),
					e.params.pagination.renderBullet ||
						(o(E, "button"),
						m(
							E,
							b.paginationBulletMessage.replace(/\{\{index\}\}/, pe(E) + 1)
						))),
					E.matches(Z(e.params.pagination.bulletActiveClass))
						? E.setAttribute("aria-current", "true")
						: E.removeAttribute("aria-current")
			})
	}
	const k = (b, E, D) => {
			n(b),
				b.tagName !== "BUTTON" &&
					(o(b, "button"), b.addEventListener("keydown", h)),
				m(b, D),
				d(b, E)
		},
		$ = () => {
			e.a11y.clicked = !0
		},
		P = () => {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					e.destroyed || (e.a11y.clicked = !1)
				})
			})
		},
		T = (b) => {
			if (e.a11y.clicked) return
			const E = b.target.closest(`.${e.params.slideClass}, swiper-slide`)
			if (!E || !e.slides.includes(E)) return
			const D = e.slides.indexOf(E) === e.activeIndex,
				O =
					e.params.watchSlidesProgress &&
					e.visibleSlides &&
					e.visibleSlides.includes(E)
			D ||
				O ||
				(b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents) ||
				(e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
				e.slideTo(e.slides.indexOf(E), 0))
		},
		L = () => {
			const b = e.params.a11y
			b.itemRoleDescriptionMessage && l(e.slides, b.itemRoleDescriptionMessage),
				b.slideRole && o(e.slides, b.slideRole)
			const E = e.slides.length
			b.slideLabelMessage &&
				e.slides.forEach((D, O) => {
					const A = e.params.loop
							? parseInt(D.getAttribute("data-swiper-slide-index"), 10)
							: O,
						z = b.slideLabelMessage
							.replace(/\{\{index\}\}/, A + 1)
							.replace(/\{\{slidesLength\}\}/, E)
					m(D, z)
				})
		},
		M = () => {
			const b = e.params.a11y
			e.el.append(a)
			const E = e.el
			b.containerRoleDescriptionMessage &&
				l(E, b.containerRoleDescriptionMessage),
				b.containerMessage && m(E, b.containerMessage)
			const D = e.wrapperEl,
				O = b.id || D.getAttribute("id") || `swiper-wrapper-${f(16)}`,
				A = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite"
			w(D, O), v(D, A), L()
			let { nextEl: z, prevEl: G } = e.navigation ? e.navigation : {}
			;(z = c(z)),
				(G = c(G)),
				z && z.forEach((B) => k(B, O, b.nextSlideMessage)),
				G && G.forEach((B) => k(B, O, b.prevSlideMessage)),
				I() &&
					(Array.isArray(e.pagination.el)
						? e.pagination.el
						: [e.pagination.el]
					).forEach((V) => {
						V.addEventListener("keydown", h)
					}),
				e.el.addEventListener("focus", T, !0),
				e.el.addEventListener("pointerdown", $, !0),
				e.el.addEventListener("pointerup", P, !0)
		}
	function x() {
		a && a.remove()
		let { nextEl: b, prevEl: E } = e.navigation ? e.navigation : {}
		;(b = c(b)),
			(E = c(E)),
			b && b.forEach((D) => D.removeEventListener("keydown", h)),
			E && E.forEach((D) => D.removeEventListener("keydown", h)),
			I() &&
				(Array.isArray(e.pagination.el)
					? e.pagination.el
					: [e.pagination.el]
				).forEach((O) => {
					O.removeEventListener("keydown", h)
				}),
			e.el.removeEventListener("focus", T, !0),
			e.el.removeEventListener("pointerdown", $, !0),
			e.el.removeEventListener("pointerup", P, !0)
	}
	i("beforeInit", () => {
		;(a = W("span", e.params.a11y.notificationClass)),
			a.setAttribute("aria-live", "assertive"),
			a.setAttribute("aria-atomic", "true")
	}),
		i("afterInit", () => {
			e.params.a11y.enabled && M()
		}),
		i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
			e.params.a11y.enabled && L()
		}),
		i("fromEdge toEdge afterInit lock unlock", () => {
			e.params.a11y.enabled && p()
		}),
		i("paginationUpdate", () => {
			e.params.a11y.enabled && C()
		}),
		i("destroy", () => {
			e.params.a11y.enabled && x()
		})
}
function Ls(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({
		history: {
			enabled: !1,
			root: "",
			replaceState: !1,
			key: "slides",
			keepQuery: !1,
		},
	})
	let a = !1,
		r = {}
	const c = (m) =>
			m
				.toString()
				.replace(/\s+/g, "-")
				.replace(/[^\w-]+/g, "")
				.replace(/--+/g, "-")
				.replace(/^-+/, "")
				.replace(/-+$/, ""),
		f = (m) => {
			const w = R()
			let v
			m ? (v = new URL(m)) : (v = w.location)
			const g = v.pathname
					.slice(1)
					.split("/")
					.filter((S) => S !== ""),
				y = g.length,
				h = g[y - 2],
				p = g[y - 1]
			return { key: h, value: p }
		},
		n = (m, w) => {
			const v = R()
			if (!a || !e.params.history.enabled) return
			let g
			e.params.url ? (g = new URL(e.params.url)) : (g = v.location)
			const y = e.slides[w]
			let h = c(y.getAttribute("data-history"))
			if (e.params.history.root.length > 0) {
				let S = e.params.history.root
				S[S.length - 1] === "/" && (S = S.slice(0, S.length - 1)),
					(h = `${S}/${m ? `${m}/` : ""}${h}`)
			} else g.pathname.includes(m) || (h = `${m ? `${m}/` : ""}${h}`)
			e.params.history.keepQuery && (h += g.search)
			const p = v.history.state
			;(p && p.value === h) ||
				(e.params.history.replaceState
					? v.history.replaceState({ value: h }, null, h)
					: v.history.pushState({ value: h }, null, h))
		},
		u = (m, w, v) => {
			if (w)
				for (let g = 0, y = e.slides.length; g < y; g += 1) {
					const h = e.slides[g]
					if (c(h.getAttribute("data-history")) === w) {
						const S = e.getSlideIndex(h)
						e.slideTo(S, m, v)
					}
				}
			else e.slideTo(0, m, v)
		},
		o = () => {
			;(r = f(e.params.url)), u(e.params.speed, r.value, !1)
		},
		l = () => {
			const m = R()
			if (e.params.history) {
				if (!m.history || !m.history.pushState) {
					;(e.params.history.enabled = !1),
						(e.params.hashNavigation.enabled = !0)
					return
				}
				if (((a = !0), (r = f(e.params.url)), !r.key && !r.value)) {
					e.params.history.replaceState || m.addEventListener("popstate", o)
					return
				}
				u(0, r.value, e.params.runCallbacksOnInit),
					e.params.history.replaceState || m.addEventListener("popstate", o)
			}
		},
		d = () => {
			const m = R()
			e.params.history.replaceState || m.removeEventListener("popstate", o)
		}
	i("init", () => {
		e.params.history.enabled && l()
	}),
		i("destroy", () => {
			e.params.history.enabled && d()
		}),
		i("transitionEnd _freeModeNoMomentumRelease", () => {
			a && n(e.params.history.key, e.activeIndex)
		}),
		i("slideChange", () => {
			a && e.params.cssMode && n(e.params.history.key, e.activeIndex)
		})
}
function Is(s) {
	let { swiper: e, extendParams: t, emit: i, on: a } = s,
		r = !1
	const c = Y(),
		f = R()
	t({
		hashNavigation: {
			enabled: !1,
			replaceState: !1,
			watchState: !1,
			getSlideIndex(d, m) {
				if (e.virtual && e.params.virtual.enabled) {
					const w = e.slides.filter((g) => g.getAttribute("data-hash") === m)[0]
					return w ? parseInt(w.getAttribute("data-swiper-slide-index"), 10) : 0
				}
				return e.getSlideIndex(
					N(
						e.slidesEl,
						`.${e.params.slideClass}[data-hash="${m}"], swiper-slide[data-hash="${m}"]`
					)[0]
				)
			},
		},
	})
	const n = () => {
			i("hashChange")
			const d = c.location.hash.replace("#", ""),
				m =
					e.virtual && e.params.virtual.enabled
						? e.slidesEl.querySelector(
								`[data-swiper-slide-index="${e.activeIndex}"]`
						  )
						: e.slides[e.activeIndex],
				w = m ? m.getAttribute("data-hash") : ""
			if (d !== w) {
				const v = e.params.hashNavigation.getSlideIndex(e, d)
				if (typeof v > "u" || Number.isNaN(v)) return
				e.slideTo(v)
			}
		},
		u = () => {
			if (!r || !e.params.hashNavigation.enabled) return
			const d =
					e.virtual && e.params.virtual.enabled
						? e.slidesEl.querySelector(
								`[data-swiper-slide-index="${e.activeIndex}"]`
						  )
						: e.slides[e.activeIndex],
				m = d
					? d.getAttribute("data-hash") || d.getAttribute("data-history")
					: ""
			e.params.hashNavigation.replaceState &&
			f.history &&
			f.history.replaceState
				? (f.history.replaceState(null, null, `#${m}` || ""), i("hashSet"))
				: ((c.location.hash = m || ""), i("hashSet"))
		},
		o = () => {
			if (
				!e.params.hashNavigation.enabled ||
				(e.params.history && e.params.history.enabled)
			)
				return
			r = !0
			const d = c.location.hash.replace("#", "")
			if (d) {
				const w = e.params.hashNavigation.getSlideIndex(e, d)
				e.slideTo(w || 0, 0, e.params.runCallbacksOnInit, !0)
			}
			e.params.hashNavigation.watchState && f.addEventListener("hashchange", n)
		},
		l = () => {
			e.params.hashNavigation.watchState &&
				f.removeEventListener("hashchange", n)
		}
	a("init", () => {
		e.params.hashNavigation.enabled && o()
	}),
		a("destroy", () => {
			e.params.hashNavigation.enabled && l()
		}),
		a("transitionEnd _freeModeNoMomentumRelease", () => {
			r && u()
		}),
		a("slideChange", () => {
			r && e.params.cssMode && u()
		})
}
function As(s) {
	let { swiper: e, extendParams: t, on: i, emit: a, params: r } = s
	;(e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
		t({
			autoplay: {
				enabled: !1,
				delay: 3e3,
				waitForTransition: !0,
				disableOnInteraction: !1,
				stopOnLastSlide: !1,
				reverseDirection: !1,
				pauseOnMouseEnter: !1,
			},
		})
	let c,
		f,
		n = r && r.autoplay ? r.autoplay.delay : 3e3,
		u = r && r.autoplay ? r.autoplay.delay : 3e3,
		o,
		l = new Date().getTime(),
		d,
		m,
		w,
		v,
		g,
		y,
		h
	function p(A) {
		!e ||
			e.destroyed ||
			!e.wrapperEl ||
			(A.target === e.wrapperEl &&
				(e.wrapperEl.removeEventListener("transitionend", p), !h && T()))
	}
	const S = () => {
			if (e.destroyed || !e.autoplay.running) return
			e.autoplay.paused ? (d = !0) : d && ((u = o), (d = !1))
			const A = e.autoplay.paused ? o : l + u - new Date().getTime()
			;(e.autoplay.timeLeft = A),
				a("autoplayTimeLeft", A, A / n),
				(f = requestAnimationFrame(() => {
					S()
				}))
		},
		I = () => {
			let A
			return (
				e.virtual && e.params.virtual.enabled
					? (A = e.slides.filter((G) =>
							G.classList.contains("swiper-slide-active")
					  )[0])
					: (A = e.slides[e.activeIndex]),
				A ? parseInt(A.getAttribute("data-swiper-autoplay"), 10) : void 0
			)
		},
		C = (A) => {
			if (e.destroyed || !e.autoplay.running) return
			cancelAnimationFrame(f), S()
			let z = typeof A > "u" ? e.params.autoplay.delay : A
			;(n = e.params.autoplay.delay), (u = e.params.autoplay.delay)
			const G = I()
			!Number.isNaN(G) &&
				G > 0 &&
				typeof A > "u" &&
				((z = G), (n = G), (u = G)),
				(o = z)
			const B = e.params.speed,
				V = () => {
					!e ||
						e.destroyed ||
						(e.params.autoplay.reverseDirection
							? !e.isBeginning || e.params.loop || e.params.rewind
								? (e.slidePrev(B, !0, !0), a("autoplay"))
								: e.params.autoplay.stopOnLastSlide ||
								  (e.slideTo(e.slides.length - 1, B, !0, !0), a("autoplay"))
							: !e.isEnd || e.params.loop || e.params.rewind
							? (e.slideNext(B, !0, !0), a("autoplay"))
							: e.params.autoplay.stopOnLastSlide ||
							  (e.slideTo(0, B, !0, !0), a("autoplay")),
						e.params.cssMode &&
							((l = new Date().getTime()),
							requestAnimationFrame(() => {
								C()
							})))
				}
			return (
				z > 0
					? (clearTimeout(c),
					  (c = setTimeout(() => {
							V()
					  }, z)))
					: requestAnimationFrame(() => {
							V()
					  }),
				z
			)
		},
		k = () => {
			;(l = new Date().getTime()),
				(e.autoplay.running = !0),
				C(),
				a("autoplayStart")
		},
		$ = () => {
			;(e.autoplay.running = !1),
				clearTimeout(c),
				cancelAnimationFrame(f),
				a("autoplayStop")
		},
		P = (A, z) => {
			if (e.destroyed || !e.autoplay.running) return
			clearTimeout(c), A || (y = !0)
			const G = () => {
				a("autoplayPause"),
					e.params.autoplay.waitForTransition
						? e.wrapperEl.addEventListener("transitionend", p)
						: T()
			}
			if (((e.autoplay.paused = !0), z)) {
				g && (o = e.params.autoplay.delay), (g = !1), G()
				return
			}
			;(o = (o || e.params.autoplay.delay) - (new Date().getTime() - l)),
				!(e.isEnd && o < 0 && !e.params.loop) && (o < 0 && (o = 0), G())
		},
		T = () => {
			;(e.isEnd && o < 0 && !e.params.loop) ||
				e.destroyed ||
				!e.autoplay.running ||
				((l = new Date().getTime()),
				y ? ((y = !1), C(o)) : C(),
				(e.autoplay.paused = !1),
				a("autoplayResume"))
		},
		L = () => {
			if (e.destroyed || !e.autoplay.running) return
			const A = Y()
			A.visibilityState === "hidden" && ((y = !0), P(!0)),
				A.visibilityState === "visible" && T()
		},
		M = (A) => {
			A.pointerType === "mouse" &&
				((y = !0), (h = !0), !(e.animating || e.autoplay.paused) && P(!0))
		},
		x = (A) => {
			A.pointerType === "mouse" && ((h = !1), e.autoplay.paused && T())
		},
		b = () => {
			e.params.autoplay.pauseOnMouseEnter &&
				(e.el.addEventListener("pointerenter", M),
				e.el.addEventListener("pointerleave", x))
		},
		E = () => {
			e.el.removeEventListener("pointerenter", M),
				e.el.removeEventListener("pointerleave", x)
		},
		D = () => {
			Y().addEventListener("visibilitychange", L)
		},
		O = () => {
			Y().removeEventListener("visibilitychange", L)
		}
	i("init", () => {
		e.params.autoplay.enabled && (b(), D(), k())
	}),
		i("destroy", () => {
			E(), O(), e.autoplay.running && $()
		}),
		i("_freeModeStaticRelease", () => {
			;(w || y) && T()
		}),
		i("_freeModeNoMomentumRelease", () => {
			e.params.autoplay.disableOnInteraction ? $() : P(!0, !0)
		}),
		i("beforeTransitionStart", (A, z, G) => {
			e.destroyed ||
				!e.autoplay.running ||
				(G || !e.params.autoplay.disableOnInteraction ? P(!0, !0) : $())
		}),
		i("sliderFirstMove", () => {
			if (!(e.destroyed || !e.autoplay.running)) {
				if (e.params.autoplay.disableOnInteraction) {
					$()
					return
				}
				;(m = !0),
					(w = !1),
					(y = !1),
					(v = setTimeout(() => {
						;(y = !0), (w = !0), P(!0)
					}, 200))
			}
		}),
		i("touchEnd", () => {
			if (!(e.destroyed || !e.autoplay.running || !m)) {
				if (
					(clearTimeout(v),
					clearTimeout(c),
					e.params.autoplay.disableOnInteraction)
				) {
					;(w = !1), (m = !1)
					return
				}
				w && e.params.cssMode && T(), (w = !1), (m = !1)
			}
		}),
		i("slideChange", () => {
			e.destroyed || !e.autoplay.running || (g = !0)
		}),
		Object.assign(e.autoplay, { start: k, stop: $, pause: P, resume: T })
}
function zs(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({
		thumbs: {
			swiper: null,
			multipleActiveThumbs: !0,
			autoScrollOffset: 0,
			slideThumbActiveClass: "swiper-slide-thumb-active",
			thumbsContainerClass: "swiper-thumbs",
		},
	})
	let a = !1,
		r = !1
	e.thumbs = { swiper: null }
	function c() {
		const u = e.thumbs.swiper
		if (!u || u.destroyed) return
		const o = u.clickedIndex,
			l = u.clickedSlide
		if (
			(l && l.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
			typeof o > "u" ||
			o === null
		)
			return
		let d
		u.params.loop
			? (d = parseInt(
					u.clickedSlide.getAttribute("data-swiper-slide-index"),
					10
			  ))
			: (d = o),
			e.params.loop ? e.slideToLoop(d) : e.slideTo(d)
	}
	function f() {
		const { thumbs: u } = e.params
		if (a) return !1
		a = !0
		const o = e.constructor
		if (u.swiper instanceof o)
			(e.thumbs.swiper = u.swiper),
				Object.assign(e.thumbs.swiper.originalParams, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1,
				}),
				Object.assign(e.thumbs.swiper.params, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1,
				}),
				e.thumbs.swiper.update()
		else if (ce(u.swiper)) {
			const l = Object.assign({}, u.swiper)
			Object.assign(l, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
				(e.thumbs.swiper = new o(l)),
				(r = !0)
		}
		return (
			e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
			e.thumbs.swiper.on("tap", c),
			!0
		)
	}
	function n(u) {
		const o = e.thumbs.swiper
		if (!o || o.destroyed) return
		const l =
			o.params.slidesPerView === "auto"
				? o.slidesPerViewDynamic()
				: o.params.slidesPerView
		let d = 1
		const m = e.params.thumbs.slideThumbActiveClass
		if (
			(e.params.slidesPerView > 1 &&
				!e.params.centeredSlides &&
				(d = e.params.slidesPerView),
			e.params.thumbs.multipleActiveThumbs || (d = 1),
			(d = Math.floor(d)),
			o.slides.forEach((g) => g.classList.remove(m)),
			o.params.loop || (o.params.virtual && o.params.virtual.enabled))
		)
			for (let g = 0; g < d; g += 1)
				N(o.slidesEl, `[data-swiper-slide-index="${e.realIndex + g}"]`).forEach(
					(y) => {
						y.classList.add(m)
					}
				)
		else
			for (let g = 0; g < d; g += 1)
				o.slides[e.realIndex + g] && o.slides[e.realIndex + g].classList.add(m)
		const w = e.params.thumbs.autoScrollOffset,
			v = w && !o.params.loop
		if (e.realIndex !== o.realIndex || v) {
			const g = o.activeIndex
			let y, h
			if (o.params.loop) {
				const p = o.slides.filter(
					(S) => S.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
				)[0]
				;(y = o.slides.indexOf(p)),
					(h = e.activeIndex > e.previousIndex ? "next" : "prev")
			} else (y = e.realIndex), (h = y > e.previousIndex ? "next" : "prev")
			v && (y += h === "next" ? w : -1 * w),
				o.visibleSlidesIndexes &&
					o.visibleSlidesIndexes.indexOf(y) < 0 &&
					(o.params.centeredSlides
						? y > g
							? (y = y - Math.floor(l / 2) + 1)
							: (y = y + Math.floor(l / 2) - 1)
						: y > g && o.params.slidesPerGroup,
					o.slideTo(y, u ? 0 : void 0))
		}
	}
	i("beforeInit", () => {
		const { thumbs: u } = e.params
		if (!(!u || !u.swiper))
			if (typeof u.swiper == "string" || u.swiper instanceof HTMLElement) {
				const o = Y(),
					l = () => {
						const m =
							typeof u.swiper == "string" ? o.querySelector(u.swiper) : u.swiper
						if (m && m.swiper) (u.swiper = m.swiper), f(), n(!0)
						else if (m) {
							const w = (v) => {
								;(u.swiper = v.detail[0]),
									m.removeEventListener("init", w),
									f(),
									n(!0),
									u.swiper.update(),
									e.update()
							}
							m.addEventListener("init", w)
						}
						return m
					},
					d = () => {
						if (e.destroyed) return
						l() || requestAnimationFrame(d)
					}
				requestAnimationFrame(d)
			} else f(), n(!0)
	}),
		i("slideChange update resize observerUpdate", () => {
			n()
		}),
		i("setTransition", (u, o) => {
			const l = e.thumbs.swiper
			!l || l.destroyed || l.setTransition(o)
		}),
		i("beforeDestroy", () => {
			const u = e.thumbs.swiper
			!u || u.destroyed || (r && u.destroy())
		}),
		Object.assign(e.thumbs, { init: f, update: n })
}
function $s(s) {
	let { swiper: e, extendParams: t, emit: i, once: a } = s
	t({
		freeMode: {
			enabled: !1,
			momentum: !0,
			momentumRatio: 1,
			momentumBounce: !0,
			momentumBounceRatio: 1,
			momentumVelocityRatio: 1,
			sticky: !1,
			minimumVelocity: 0.02,
		},
	})
	function r() {
		if (e.params.cssMode) return
		const n = e.getTranslate()
		e.setTranslate(n),
			e.setTransition(0),
			(e.touchEventsData.velocities.length = 0),
			e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate })
	}
	function c() {
		if (e.params.cssMode) return
		const { touchEventsData: n, touches: u } = e
		n.velocities.length === 0 &&
			n.velocities.push({
				position: u[e.isHorizontal() ? "startX" : "startY"],
				time: n.touchStartTime,
			}),
			n.velocities.push({
				position: u[e.isHorizontal() ? "currentX" : "currentY"],
				time: j(),
			})
	}
	function f(n) {
		let { currentPos: u } = n
		if (e.params.cssMode) return
		const {
				params: o,
				wrapperEl: l,
				rtlTranslate: d,
				snapGrid: m,
				touchEventsData: w,
			} = e,
			g = j() - w.touchStartTime
		if (u < -e.minTranslate()) {
			e.slideTo(e.activeIndex)
			return
		}
		if (u > -e.maxTranslate()) {
			e.slides.length < m.length
				? e.slideTo(m.length - 1)
				: e.slideTo(e.slides.length - 1)
			return
		}
		if (o.freeMode.momentum) {
			if (w.velocities.length > 1) {
				const $ = w.velocities.pop(),
					P = w.velocities.pop(),
					T = $.position - P.position,
					L = $.time - P.time
				;(e.velocity = T / L),
					(e.velocity /= 2),
					Math.abs(e.velocity) < o.freeMode.minimumVelocity && (e.velocity = 0),
					(L > 150 || j() - $.time > 300) && (e.velocity = 0)
			} else e.velocity = 0
			;(e.velocity *= o.freeMode.momentumVelocityRatio),
				(w.velocities.length = 0)
			let y = 1e3 * o.freeMode.momentumRatio
			const h = e.velocity * y
			let p = e.translate + h
			d && (p = -p)
			let S = !1,
				I
			const C = Math.abs(e.velocity) * 20 * o.freeMode.momentumBounceRatio
			let k
			if (p < e.maxTranslate())
				o.freeMode.momentumBounce
					? (p + e.maxTranslate() < -C && (p = e.maxTranslate() - C),
					  (I = e.maxTranslate()),
					  (S = !0),
					  (w.allowMomentumBounce = !0))
					: (p = e.maxTranslate()),
					o.loop && o.centeredSlides && (k = !0)
			else if (p > e.minTranslate())
				o.freeMode.momentumBounce
					? (p - e.minTranslate() > C && (p = e.minTranslate() + C),
					  (I = e.minTranslate()),
					  (S = !0),
					  (w.allowMomentumBounce = !0))
					: (p = e.minTranslate()),
					o.loop && o.centeredSlides && (k = !0)
			else if (o.freeMode.sticky) {
				let $
				for (let P = 0; P < m.length; P += 1)
					if (m[P] > -p) {
						$ = P
						break
					}
				Math.abs(m[$] - p) < Math.abs(m[$ - 1] - p) ||
				e.swipeDirection === "next"
					? (p = m[$])
					: (p = m[$ - 1]),
					(p = -p)
			}
			if (
				(k &&
					a("transitionEnd", () => {
						e.loopFix()
					}),
				e.velocity !== 0)
			) {
				if (
					(d
						? (y = Math.abs((-p - e.translate) / e.velocity))
						: (y = Math.abs((p - e.translate) / e.velocity)),
					o.freeMode.sticky)
				) {
					const $ = Math.abs((d ? -p : p) - e.translate),
						P = e.slidesSizesGrid[e.activeIndex]
					$ < P
						? (y = o.speed)
						: $ < 2 * P
						? (y = o.speed * 1.5)
						: (y = o.speed * 2.5)
				}
			} else if (o.freeMode.sticky) {
				e.slideToClosest()
				return
			}
			o.freeMode.momentumBounce && S
				? (e.updateProgress(I),
				  e.setTransition(y),
				  e.setTranslate(p),
				  e.transitionStart(!0, e.swipeDirection),
				  (e.animating = !0),
				  ue(l, () => {
						!e ||
							e.destroyed ||
							!w.allowMomentumBounce ||
							(i("momentumBounce"),
							e.setTransition(o.speed),
							setTimeout(() => {
								e.setTranslate(I),
									ue(l, () => {
										!e || e.destroyed || e.transitionEnd()
									})
							}, 0))
				  }))
				: e.velocity
				? (i("_freeModeNoMomentumRelease"),
				  e.updateProgress(p),
				  e.setTransition(y),
				  e.setTranslate(p),
				  e.transitionStart(!0, e.swipeDirection),
				  e.animating ||
						((e.animating = !0),
						ue(l, () => {
							!e || e.destroyed || e.transitionEnd()
						})))
				: e.updateProgress(p),
				e.updateActiveIndex(),
				e.updateSlidesClasses()
		} else if (o.freeMode.sticky) {
			e.slideToClosest()
			return
		} else o.freeMode && i("_freeModeNoMomentumRelease")
		;(!o.freeMode.momentum || g >= o.longSwipesMs) &&
			(i("_freeModeStaticRelease"),
			e.updateProgress(),
			e.updateActiveIndex(),
			e.updateSlidesClasses())
	}
	Object.assign(e, {
		freeMode: { onTouchStart: r, onTouchMove: c, onTouchEnd: f },
	})
}
function Os(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({ grid: { rows: 1, fill: "column" } })
	let a, r, c, f
	const n = () => {
			let v = e.params.spaceBetween
			return (
				typeof v == "string" && v.indexOf("%") >= 0
					? (v = (parseFloat(v.replace("%", "")) / 100) * e.size)
					: typeof v == "string" && (v = parseFloat(v)),
				v
			)
		},
		u = (v) => {
			const { slidesPerView: g } = e.params,
				{ rows: y, fill: h } = e.params.grid,
				p =
					e.virtual && e.params.virtual.enabled
						? e.virtual.slides.length
						: v.length
			;(c = Math.floor(p / y)),
				Math.floor(p / y) === p / y ? (a = p) : (a = Math.ceil(p / y) * y),
				g !== "auto" && h === "row" && (a = Math.max(a, g * y)),
				(r = a / y)
		},
		o = () => {
			e.slides &&
				e.slides.forEach((v) => {
					v.swiperSlideGridSet &&
						((v.style.height = ""),
						(v.style[e.getDirectionLabel("margin-top")] = ""))
				})
		},
		l = (v, g, y) => {
			const { slidesPerGroup: h } = e.params,
				p = n(),
				{ rows: S, fill: I } = e.params.grid,
				C =
					e.virtual && e.params.virtual.enabled
						? e.virtual.slides.length
						: y.length
			let k, $, P
			if (I === "row" && h > 1) {
				const T = Math.floor(v / (h * S)),
					L = v - S * h * T,
					M = T === 0 ? h : Math.min(Math.ceil((C - T * S * h) / S), h)
				;(P = Math.floor(L / M)),
					($ = L - P * M + T * h),
					(k = $ + (P * a) / S),
					(g.style.order = k)
			} else
				I === "column"
					? (($ = Math.floor(v / S)),
					  (P = v - $ * S),
					  ($ > c || ($ === c && P === S - 1)) &&
							((P += 1), P >= S && ((P = 0), ($ += 1))))
					: ((P = Math.floor(v / r)), ($ = v - P * r))
			;(g.row = P),
				(g.column = $),
				(g.style.height = `calc((100% - ${(S - 1) * p}px) / ${S})`),
				(g.style[e.getDirectionLabel("margin-top")] =
					P !== 0 ? p && `${p}px` : ""),
				(g.swiperSlideGridSet = !0)
		},
		d = (v, g) => {
			const { centeredSlides: y, roundLengths: h } = e.params,
				p = n(),
				{ rows: S } = e.params.grid
			if (
				((e.virtualSize = (v + p) * a),
				(e.virtualSize = Math.ceil(e.virtualSize / S) - p),
				e.params.cssMode ||
					(e.wrapperEl.style[e.getDirectionLabel("width")] = `${
						e.virtualSize + p
					}px`),
				y)
			) {
				const I = []
				for (let C = 0; C < g.length; C += 1) {
					let k = g[C]
					h && (k = Math.floor(k)), g[C] < e.virtualSize + g[0] && I.push(k)
				}
				g.splice(0, g.length), g.push(...I)
			}
		},
		m = () => {
			f = e.params.grid && e.params.grid.rows > 1
		},
		w = () => {
			const { params: v, el: g } = e,
				y = v.grid && v.grid.rows > 1
			f && !y
				? (g.classList.remove(
						`${v.containerModifierClass}grid`,
						`${v.containerModifierClass}grid-column`
				  ),
				  (c = 1),
				  e.emitContainerClasses())
				: !f &&
				  y &&
				  (g.classList.add(`${v.containerModifierClass}grid`),
				  v.grid.fill === "column" &&
						g.classList.add(`${v.containerModifierClass}grid-column`),
				  e.emitContainerClasses()),
				(f = y)
		}
	i("init", m),
		i("update", w),
		(e.grid = {
			initSlides: u,
			unsetSlides: o,
			updateSlide: l,
			updateWrapperSize: d,
		})
}
function Ds(s) {
	const e = this,
		{ params: t, slidesEl: i } = e
	t.loop && e.loopDestroy()
	const a = (r) => {
		if (typeof r == "string") {
			const c = document.createElement("div")
			;(c.innerHTML = r), i.append(c.children[0]), (c.innerHTML = "")
		} else i.append(r)
	}
	if (typeof s == "object" && "length" in s)
		for (let r = 0; r < s.length; r += 1) s[r] && a(s[r])
	else a(s)
	e.recalcSlides(),
		t.loop && e.loopCreate(),
		(!t.observer || e.isElement) && e.update()
}
function ks(s) {
	const e = this,
		{ params: t, activeIndex: i, slidesEl: a } = e
	t.loop && e.loopDestroy()
	let r = i + 1
	const c = (f) => {
		if (typeof f == "string") {
			const n = document.createElement("div")
			;(n.innerHTML = f), a.prepend(n.children[0]), (n.innerHTML = "")
		} else a.prepend(f)
	}
	if (typeof s == "object" && "length" in s) {
		for (let f = 0; f < s.length; f += 1) s[f] && c(s[f])
		r = i + s.length
	} else c(s)
	e.recalcSlides(),
		t.loop && e.loopCreate(),
		(!t.observer || e.isElement) && e.update(),
		e.slideTo(r, 0, !1)
}
function Gs(s, e) {
	const t = this,
		{ params: i, activeIndex: a, slidesEl: r } = t
	let c = a
	i.loop && ((c -= t.loopedSlides), t.loopDestroy(), t.recalcSlides())
	const f = t.slides.length
	if (s <= 0) {
		t.prependSlide(e)
		return
	}
	if (s >= f) {
		t.appendSlide(e)
		return
	}
	let n = c > s ? c + 1 : c
	const u = []
	for (let o = f - 1; o >= s; o -= 1) {
		const l = t.slides[o]
		l.remove(), u.unshift(l)
	}
	if (typeof e == "object" && "length" in e) {
		for (let o = 0; o < e.length; o += 1) e[o] && r.append(e[o])
		n = c > s ? c + e.length : c
	} else r.append(e)
	for (let o = 0; o < u.length; o += 1) r.append(u[o])
	t.recalcSlides(),
		i.loop && t.loopCreate(),
		(!i.observer || t.isElement) && t.update(),
		i.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
}
function Hs(s) {
	const e = this,
		{ params: t, activeIndex: i } = e
	let a = i
	t.loop && ((a -= e.loopedSlides), e.loopDestroy())
	let r = a,
		c
	if (typeof s == "object" && "length" in s) {
		for (let f = 0; f < s.length; f += 1)
			(c = s[f]), e.slides[c] && e.slides[c].remove(), c < r && (r -= 1)
		r = Math.max(r, 0)
	} else
		(c = s),
			e.slides[c] && e.slides[c].remove(),
			c < r && (r -= 1),
			(r = Math.max(r, 0))
	e.recalcSlides(),
		t.loop && e.loopCreate(),
		(!t.observer || e.isElement) && e.update(),
		t.loop ? e.slideTo(r + e.loopedSlides, 0, !1) : e.slideTo(r, 0, !1)
}
function Bs() {
	const s = this,
		e = []
	for (let t = 0; t < s.slides.length; t += 1) e.push(t)
	s.removeSlide(e)
}
function Xs(s) {
	let { swiper: e } = s
	Object.assign(e, {
		appendSlide: Ds.bind(e),
		prependSlide: ks.bind(e),
		addSlide: Gs.bind(e),
		removeSlide: Hs.bind(e),
		removeAllSlides: Bs.bind(e),
	})
}
function le(s) {
	const {
		effect: e,
		swiper: t,
		on: i,
		setTranslate: a,
		setTransition: r,
		overwriteParams: c,
		perspective: f,
		recreateShadows: n,
		getEffectParams: u,
	} = s
	i("beforeInit", () => {
		if (t.params.effect !== e) return
		t.classNames.push(`${t.params.containerModifierClass}${e}`),
			f && f() && t.classNames.push(`${t.params.containerModifierClass}3d`)
		const l = c ? c() : {}
		Object.assign(t.params, l), Object.assign(t.originalParams, l)
	}),
		i("setTranslate", () => {
			t.params.effect === e && a()
		}),
		i("setTransition", (l, d) => {
			t.params.effect === e && r(d)
		}),
		i("transitionEnd", () => {
			if (t.params.effect === e && n) {
				if (!u || !u().slideShadows) return
				t.slides.forEach((l) => {
					l.querySelectorAll(
						".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
					).forEach((d) => d.remove())
				}),
					n()
			}
		})
	let o
	i("virtualUpdate", () => {
		t.params.effect === e &&
			(t.slides.length || (o = !0),
			requestAnimationFrame(() => {
				o && t.slides && t.slides.length && (a(), (o = !1))
			}))
	})
}
function me(s, e) {
	const t = re(e)
	return (
		t !== e &&
			((t.style.backfaceVisibility = "hidden"),
			(t.style["-webkit-backface-visibility"] = "hidden")),
		t
	)
}
function be(s) {
	let { swiper: e, duration: t, transformElements: i, allSlides: a } = s
	const { activeIndex: r } = e,
		c = (f) =>
			f.parentElement
				? f.parentElement
				: e.slides.filter(
						(u) => u.shadowRoot && u.shadowRoot === f.parentNode
				  )[0]
	if (e.params.virtualTranslate && t !== 0) {
		let f = !1,
			n
		a
			? (n = i)
			: (n = i.filter((u) => {
					const o = u.classList.contains("swiper-slide-transform") ? c(u) : u
					return e.getSlideIndex(o) === r
			  })),
			n.forEach((u) => {
				ue(u, () => {
					if (f || !e || e.destroyed) return
					;(f = !0), (e.animating = !1)
					const o = new window.CustomEvent("transitionend", {
						bubbles: !0,
						cancelable: !0,
					})
					e.wrapperEl.dispatchEvent(o)
				})
			})
	}
}
function Rs(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({ fadeEffect: { crossFade: !1 } }),
		le({
			effect: "fade",
			swiper: e,
			on: i,
			setTranslate: () => {
				const { slides: c } = e,
					f = e.params.fadeEffect
				for (let n = 0; n < c.length; n += 1) {
					const u = e.slides[n]
					let l = -u.swiperSlideOffset
					e.params.virtualTranslate || (l -= e.translate)
					let d = 0
					e.isHorizontal() || ((d = l), (l = 0))
					const m = e.params.fadeEffect.crossFade
							? Math.max(1 - Math.abs(u.progress), 0)
							: 1 + Math.min(Math.max(u.progress, -1), 0),
						w = me(f, u)
					;(w.style.opacity = m),
						(w.style.transform = `translate3d(${l}px, ${d}px, 0px)`)
				}
			},
			setTransition: (c) => {
				const f = e.slides.map((n) => re(n))
				f.forEach((n) => {
					n.style.transitionDuration = `${c}ms`
				}),
					be({ swiper: e, duration: c, transformElements: f, allSlides: !0 })
			},
			overwriteParams: () => ({
				slidesPerView: 1,
				slidesPerGroup: 1,
				watchSlidesProgress: !0,
				spaceBetween: 0,
				virtualTranslate: !e.params.cssMode,
			}),
		})
}
function Ns(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({
		cubeEffect: {
			slideShadows: !0,
			shadow: !0,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
	})
	const a = (n, u, o) => {
		let l = o
				? n.querySelector(".swiper-slide-shadow-left")
				: n.querySelector(".swiper-slide-shadow-top"),
			d = o
				? n.querySelector(".swiper-slide-shadow-right")
				: n.querySelector(".swiper-slide-shadow-bottom")
		l ||
			((l = W(
				"div",
				`swiper-slide-shadow-cube swiper-slide-shadow-${
					o ? "left" : "top"
				}`.split(" ")
			)),
			n.append(l)),
			d ||
				((d = W(
					"div",
					`swiper-slide-shadow-cube swiper-slide-shadow-${
						o ? "right" : "bottom"
					}`.split(" ")
				)),
				n.append(d)),
			l && (l.style.opacity = Math.max(-u, 0)),
			d && (d.style.opacity = Math.max(u, 0))
	}
	le({
		effect: "cube",
		swiper: e,
		on: i,
		setTranslate: () => {
			const {
					el: n,
					wrapperEl: u,
					slides: o,
					width: l,
					height: d,
					rtlTranslate: m,
					size: w,
					browser: v,
				} = e,
				g = e.params.cubeEffect,
				y = e.isHorizontal(),
				h = e.virtual && e.params.virtual.enabled
			let p = 0,
				S
			g.shadow &&
				(y
					? ((S = e.wrapperEl.querySelector(".swiper-cube-shadow")),
					  S || ((S = W("div", "swiper-cube-shadow")), e.wrapperEl.append(S)),
					  (S.style.height = `${l}px`))
					: ((S = n.querySelector(".swiper-cube-shadow")),
					  S || ((S = W("div", "swiper-cube-shadow")), n.append(S))))
			for (let C = 0; C < o.length; C += 1) {
				const k = o[C]
				let $ = C
				h && ($ = parseInt(k.getAttribute("data-swiper-slide-index"), 10))
				let P = $ * 90,
					T = Math.floor(P / 360)
				m && ((P = -P), (T = Math.floor(-P / 360)))
				const L = Math.max(Math.min(k.progress, 1), -1)
				let M = 0,
					x = 0,
					b = 0
				$ % 4 === 0
					? ((M = -T * 4 * w), (b = 0))
					: ($ - 1) % 4 === 0
					? ((M = 0), (b = -T * 4 * w))
					: ($ - 2) % 4 === 0
					? ((M = w + T * 4 * w), (b = w))
					: ($ - 3) % 4 === 0 && ((M = -w), (b = 3 * w + w * 4 * T)),
					m && (M = -M),
					y || ((x = M), (M = 0))
				const E = `rotateX(${y ? 0 : -P}deg) rotateY(${
					y ? P : 0
				}deg) translate3d(${M}px, ${x}px, ${b}px)`
				L <= 1 &&
					L > -1 &&
					((p = $ * 90 + L * 90),
					m && (p = -$ * 90 - L * 90),
					e.browser &&
						e.browser.isSafari &&
						(Math.abs(p) / 90) % 2 === 1 &&
						(p += 0.001)),
					(k.style.transform = E),
					g.slideShadows && a(k, L, y)
			}
			if (
				((u.style.transformOrigin = `50% 50% -${w / 2}px`),
				(u.style["-webkit-transform-origin"] = `50% 50% -${w / 2}px`),
				g.shadow)
			)
				if (y)
					S.style.transform = `translate3d(0px, ${l / 2 + g.shadowOffset}px, ${
						-l / 2
					}px) rotateX(89.99deg) rotateZ(0deg) scale(${g.shadowScale})`
				else {
					const C = Math.abs(p) - Math.floor(Math.abs(p) / 90) * 90,
						k =
							1.5 -
							(Math.sin((C * 2 * Math.PI) / 360) / 2 +
								Math.cos((C * 2 * Math.PI) / 360) / 2),
						$ = g.shadowScale,
						P = g.shadowScale / k,
						T = g.shadowOffset
					S.style.transform = `scale3d(${$}, 1, ${P}) translate3d(0px, ${
						d / 2 + T
					}px, ${-d / 2 / P}px) rotateX(-89.99deg)`
				}
			const I = (v.isSafari || v.isWebView) && v.needPerspectiveFix ? -w / 2 : 0
			;(u.style.transform = `translate3d(0px,0,${I}px) rotateX(${
				e.isHorizontal() ? 0 : p
			}deg) rotateY(${e.isHorizontal() ? -p : 0}deg)`),
				u.style.setProperty("--swiper-cube-translate-z", `${I}px`)
		},
		setTransition: (n) => {
			const { el: u, slides: o } = e
			if (
				(o.forEach((l) => {
					;(l.style.transitionDuration = `${n}ms`),
						l
							.querySelectorAll(
								".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
							)
							.forEach((d) => {
								d.style.transitionDuration = `${n}ms`
							})
				}),
				e.params.cubeEffect.shadow && !e.isHorizontal())
			) {
				const l = u.querySelector(".swiper-cube-shadow")
				l && (l.style.transitionDuration = `${n}ms`)
			}
		},
		recreateShadows: () => {
			const n = e.isHorizontal()
			e.slides.forEach((u) => {
				const o = Math.max(Math.min(u.progress, 1), -1)
				a(u, o, n)
			})
		},
		getEffectParams: () => e.params.cubeEffect,
		perspective: () => !0,
		overwriteParams: () => ({
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchSlidesProgress: !0,
			resistanceRatio: 0,
			spaceBetween: 0,
			centeredSlides: !1,
			virtualTranslate: !0,
		}),
	})
}
function ae(s, e, t) {
	const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
			s ? ` swiper-slide-shadow-${s}` : ""
		}`,
		a = re(e)
	let r = a.querySelector(`.${i.split(" ").join(".")}`)
	return r || ((r = W("div", i.split(" "))), a.append(r)), r
}
function Vs(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({ flipEffect: { slideShadows: !0, limitRotation: !0 } })
	const a = (n, u) => {
		let o = e.isHorizontal()
				? n.querySelector(".swiper-slide-shadow-left")
				: n.querySelector(".swiper-slide-shadow-top"),
			l = e.isHorizontal()
				? n.querySelector(".swiper-slide-shadow-right")
				: n.querySelector(".swiper-slide-shadow-bottom")
		o || (o = ae("flip", n, e.isHorizontal() ? "left" : "top")),
			l || (l = ae("flip", n, e.isHorizontal() ? "right" : "bottom")),
			o && (o.style.opacity = Math.max(-u, 0)),
			l && (l.style.opacity = Math.max(u, 0))
	}
	le({
		effect: "flip",
		swiper: e,
		on: i,
		setTranslate: () => {
			const { slides: n, rtlTranslate: u } = e,
				o = e.params.flipEffect
			for (let l = 0; l < n.length; l += 1) {
				const d = n[l]
				let m = d.progress
				e.params.flipEffect.limitRotation &&
					(m = Math.max(Math.min(d.progress, 1), -1))
				const w = d.swiperSlideOffset
				let g = -180 * m,
					y = 0,
					h = e.params.cssMode ? -w - e.translate : -w,
					p = 0
				e.isHorizontal()
					? u && (g = -g)
					: ((p = h), (h = 0), (y = -g), (g = 0)),
					e.browser &&
						e.browser.isSafari &&
						((Math.abs(g) / 90) % 2 === 1 && (g += 0.001),
						(Math.abs(y) / 90) % 2 === 1 && (y += 0.001)),
					(d.style.zIndex = -Math.abs(Math.round(m)) + n.length),
					o.slideShadows && a(d, m)
				const S = `translate3d(${h}px, ${p}px, 0px) rotateX(${y}deg) rotateY(${g}deg)`,
					I = me(o, d)
				I.style.transform = S
			}
		},
		setTransition: (n) => {
			const u = e.slides.map((o) => re(o))
			u.forEach((o) => {
				;(o.style.transitionDuration = `${n}ms`),
					o
						.querySelectorAll(
							".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
						)
						.forEach((l) => {
							l.style.transitionDuration = `${n}ms`
						})
			}),
				be({ swiper: e, duration: n, transformElements: u })
		},
		recreateShadows: () => {
			e.params.flipEffect,
				e.slides.forEach((n) => {
					let u = n.progress
					e.params.flipEffect.limitRotation &&
						(u = Math.max(Math.min(n.progress, 1), -1)),
						a(n, u)
				})
		},
		getEffectParams: () => e.params.flipEffect,
		perspective: () => !0,
		overwriteParams: () => ({
			slidesPerView: 1,
			slidesPerGroup: 1,
			watchSlidesProgress: !0,
			spaceBetween: 0,
			virtualTranslate: !e.params.cssMode,
		}),
	})
}
function Ys(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			scale: 1,
			modifier: 1,
			slideShadows: !0,
		},
	}),
		le({
			effect: "coverflow",
			swiper: e,
			on: i,
			setTranslate: () => {
				const { width: c, height: f, slides: n, slidesSizesGrid: u } = e,
					o = e.params.coverflowEffect,
					l = e.isHorizontal(),
					d = e.translate,
					m = l ? -d + c / 2 : -d + f / 2,
					w = l ? o.rotate : -o.rotate,
					v = o.depth
				for (let g = 0, y = n.length; g < y; g += 1) {
					const h = n[g],
						p = u[g],
						S = h.swiperSlideOffset,
						I = (m - S - p / 2) / p,
						C = typeof o.modifier == "function" ? o.modifier(I) : I * o.modifier
					let k = l ? w * C : 0,
						$ = l ? 0 : w * C,
						P = -v * Math.abs(C),
						T = o.stretch
					typeof T == "string" &&
						T.indexOf("%") !== -1 &&
						(T = (parseFloat(o.stretch) / 100) * p)
					let L = l ? 0 : T * C,
						M = l ? T * C : 0,
						x = 1 - (1 - o.scale) * Math.abs(C)
					Math.abs(M) < 0.001 && (M = 0),
						Math.abs(L) < 0.001 && (L = 0),
						Math.abs(P) < 0.001 && (P = 0),
						Math.abs(k) < 0.001 && (k = 0),
						Math.abs($) < 0.001 && ($ = 0),
						Math.abs(x) < 0.001 && (x = 0),
						e.browser &&
							e.browser.isSafari &&
							((Math.abs(k) / 90) % 2 === 1 && (k += 0.001),
							(Math.abs($) / 90) % 2 === 1 && ($ += 0.001))
					const b = `translate3d(${M}px,${L}px,${P}px)  rotateX(${$}deg) rotateY(${k}deg) scale(${x})`,
						E = me(o, h)
					if (
						((E.style.transform = b),
						(h.style.zIndex = -Math.abs(Math.round(C)) + 1),
						o.slideShadows)
					) {
						let D = l
								? h.querySelector(".swiper-slide-shadow-left")
								: h.querySelector(".swiper-slide-shadow-top"),
							O = l
								? h.querySelector(".swiper-slide-shadow-right")
								: h.querySelector(".swiper-slide-shadow-bottom")
						D || (D = ae("coverflow", h, l ? "left" : "top")),
							O || (O = ae("coverflow", h, l ? "right" : "bottom")),
							D && (D.style.opacity = C > 0 ? C : 0),
							O && (O.style.opacity = -C > 0 ? -C : 0)
					}
				}
			},
			setTransition: (c) => {
				e.slides
					.map((n) => re(n))
					.forEach((n) => {
						;(n.style.transitionDuration = `${c}ms`),
							n
								.querySelectorAll(
									".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
								)
								.forEach((u) => {
									u.style.transitionDuration = `${c}ms`
								})
					})
			},
			perspective: () => !0,
			overwriteParams: () => ({ watchSlidesProgress: !0 }),
		})
}
function Fs(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({
		creativeEffect: {
			limitProgress: 1,
			shadowPerProgress: !1,
			progressMultiplier: 1,
			perspective: !0,
			prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
			next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
		},
	})
	const a = (f) => (typeof f == "string" ? f : `${f}px`)
	le({
		effect: "creative",
		swiper: e,
		on: i,
		setTranslate: () => {
			const { slides: f, wrapperEl: n, slidesSizesGrid: u } = e,
				o = e.params.creativeEffect,
				{ progressMultiplier: l } = o,
				d = e.params.centeredSlides
			if (d) {
				const m = u[0] / 2 - e.params.slidesOffsetBefore || 0
				n.style.transform = `translateX(calc(50% - ${m}px))`
			}
			for (let m = 0; m < f.length; m += 1) {
				const w = f[m],
					v = w.progress,
					g = Math.min(Math.max(w.progress, -o.limitProgress), o.limitProgress)
				let y = g
				d ||
					(y = Math.min(
						Math.max(w.originalProgress, -o.limitProgress),
						o.limitProgress
					))
				const h = w.swiperSlideOffset,
					p = [e.params.cssMode ? -h - e.translate : -h, 0, 0],
					S = [0, 0, 0]
				let I = !1
				e.isHorizontal() || ((p[1] = p[0]), (p[0] = 0))
				let C = {
					translate: [0, 0, 0],
					rotate: [0, 0, 0],
					scale: 1,
					opacity: 1,
				}
				g < 0 ? ((C = o.next), (I = !0)) : g > 0 && ((C = o.prev), (I = !0)),
					p.forEach((x, b) => {
						p[b] = `calc(${x}px + (${a(C.translate[b])} * ${Math.abs(g * l)}))`
					}),
					S.forEach((x, b) => {
						let E = C.rotate[b] * Math.abs(g * l)
						e.browser &&
							e.browser.isSafari &&
							(Math.abs(E) / 90) % 2 === 1 &&
							(E += 0.001),
							(S[b] = E)
					}),
					(w.style.zIndex = -Math.abs(Math.round(v)) + f.length)
				const k = p.join(", "),
					$ = `rotateX(${S[0]}deg) rotateY(${S[1]}deg) rotateZ(${S[2]}deg)`,
					P =
						y < 0
							? `scale(${1 + (1 - C.scale) * y * l})`
							: `scale(${1 - (1 - C.scale) * y * l})`,
					T = y < 0 ? 1 + (1 - C.opacity) * y * l : 1 - (1 - C.opacity) * y * l,
					L = `translate3d(${k}) ${$} ${P}`
				if ((I && C.shadow) || !I) {
					let x = w.querySelector(".swiper-slide-shadow")
					if ((!x && C.shadow && (x = ae("creative", w)), x)) {
						const b = o.shadowPerProgress ? g * (1 / o.limitProgress) : g
						x.style.opacity = Math.min(Math.max(Math.abs(b), 0), 1)
					}
				}
				const M = me(o, w)
				;(M.style.transform = L),
					(M.style.opacity = T),
					C.origin && (M.style.transformOrigin = C.origin)
			}
		},
		setTransition: (f) => {
			const n = e.slides.map((u) => re(u))
			n.forEach((u) => {
				;(u.style.transitionDuration = `${f}ms`),
					u.querySelectorAll(".swiper-slide-shadow").forEach((o) => {
						o.style.transitionDuration = `${f}ms`
					})
			}),
				be({ swiper: e, duration: f, transformElements: n, allSlides: !0 })
		},
		perspective: () => e.params.creativeEffect.perspective,
		overwriteParams: () => ({
			watchSlidesProgress: !0,
			virtualTranslate: !e.params.cssMode,
		}),
	})
}
function _s(s) {
	let { swiper: e, extendParams: t, on: i } = s
	t({
		cardsEffect: {
			slideShadows: !0,
			rotate: !0,
			perSlideRotate: 2,
			perSlideOffset: 8,
		},
	}),
		le({
			effect: "cards",
			swiper: e,
			on: i,
			setTranslate: () => {
				const { slides: c, activeIndex: f, rtlTranslate: n } = e,
					u = e.params.cardsEffect,
					{ startTranslate: o, isTouched: l } = e.touchEventsData,
					d = n ? -e.translate : e.translate
				for (let m = 0; m < c.length; m += 1) {
					const w = c[m],
						v = w.progress,
						g = Math.min(Math.max(v, -4), 4)
					let y = w.swiperSlideOffset
					e.params.centeredSlides &&
						!e.params.cssMode &&
						(e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
						e.params.centeredSlides &&
							e.params.cssMode &&
							(y -= c[0].swiperSlideOffset)
					let h = e.params.cssMode ? -y - e.translate : -y,
						p = 0
					const S = -100 * Math.abs(g)
					let I = 1,
						C = -u.perSlideRotate * g,
						k = u.perSlideOffset - Math.abs(g) * 0.75
					const $ =
							e.virtual && e.params.virtual.enabled ? e.virtual.from + m : m,
						P =
							($ === f || $ === f - 1) &&
							g > 0 &&
							g < 1 &&
							(l || e.params.cssMode) &&
							d < o,
						T =
							($ === f || $ === f + 1) &&
							g < 0 &&
							g > -1 &&
							(l || e.params.cssMode) &&
							d > o
					if (P || T) {
						const b = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5
						;(C += -28 * g * b),
							(I += -0.5 * b),
							(k += 96 * b),
							(p = `${-25 * b * Math.abs(g)}%`)
					}
					if (
						(g < 0
							? (h = `calc(${h}px ${n ? "-" : "+"} (${k * Math.abs(g)}%))`)
							: g > 0
							? (h = `calc(${h}px ${n ? "-" : "+"} (-${k * Math.abs(g)}%))`)
							: (h = `${h}px`),
						!e.isHorizontal())
					) {
						const b = p
						;(p = h), (h = b)
					}
					const L = g < 0 ? `${1 + (1 - I) * g}` : `${1 - (1 - I) * g}`,
						M = `
        translate3d(${h}, ${p}, ${S}px)
        rotateZ(${u.rotate ? (n ? -C : C) : 0}deg)
        scale(${L})
      `
					if (u.slideShadows) {
						let b = w.querySelector(".swiper-slide-shadow")
						b || (b = ae("cards", w)),
							b &&
								(b.style.opacity = Math.min(
									Math.max((Math.abs(g) - 0.5) / 0.5, 0),
									1
								))
					}
					w.style.zIndex = -Math.abs(Math.round(v)) + c.length
					const x = me(u, w)
					x.style.transform = M
				}
			},
			setTransition: (c) => {
				const f = e.slides.map((n) => re(n))
				f.forEach((n) => {
					;(n.style.transitionDuration = `${c}ms`),
						n.querySelectorAll(".swiper-slide-shadow").forEach((u) => {
							u.style.transitionDuration = `${c}ms`
						})
				}),
					be({ swiper: e, duration: c, transformElements: f })
			},
			perspective: () => !0,
			overwriteParams: () => ({
				watchSlidesProgress: !0,
				virtualTranslate: !e.params.cssMode,
			}),
		})
}
const Ws = [
	ws,
	ys,
	bs,
	Ss,
	Es,
	xs,
	Ts,
	Ms,
	Cs,
	Ps,
	Ls,
	Is,
	As,
	zs,
	$s,
	Os,
	Xs,
	Rs,
	Ns,
	Vs,
	Ys,
	Fs,
	_s,
]
F.use(Ws)
const qs = new F(".swiper-container", {
	effect: "coverflow",
	preventInteractionOnTransition: !1,
	grabCursor: !0,
	centeredSlides: !0,
	slidesPerView: 1.5,
	coverflowEffect: {
		rotate: -8,
		stretch: 0,
		depth: 200,
		modifier: 4,
		slideShadows: !0,
	},
	loop: !0,
	autoplay: { delay: 5e3 },
	navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
	keyboard: { enabled: !0 },
	mousewheel: { thresholdDelta: 70 },
	breakpoints: { 400: { slidesPerView: 1.5 } },
	pagination: {
		el: ".swiper-pagination",
		dynamicMainBullets: 5,
		clickable: !0,
	},
})

Qe(5e3).then(() => {
  try {
    qs.slideNext()
  } catch(e) {

  }
})

Je.ScrollMagicPluginGsap(et, De, ne)
const js = new U.Controller(),
	Us = new U.Controller(),
	Ks = new U.Controller(),
	Zs = new U.Controller(),
	Qs = new U.Controller(),
	Js = new U.Scene({
		triggerElement: ".gallery",
		triggerHook: 0.2,
		reverse: !1,
	}),
	ei = new U.Scene({
		triggerElement: ".projects",
		triggerHook: 0.85,
		reverse: !1,
	}),
	ti = new U.Scene({
		triggerElement: ".services__profile",
		triggerHook: 0.8,
		reverse: !1,
	}),
	si = new U.Scene({
		triggerElement: ".carrier__vacancy",
		triggerHook: 0.7,
		reverse: !1,
	}),
	ii = new U.Scene({ triggerElement: ".intro", triggerHook: 0.9, reverse: !1 }),
	ri = new ne().to(".gallery", 0.5, {
		opacity: 1,
		ease: te.easeInOut,
		delay: 0.4,
	}),
	ai = new ne().to(".projects", 0.5, {
		opacity: 1,
		ease: te.easeInOut,
		delay: 0.5,
	}),
	ni = new ne()
		.to(".services", 0.5, { opacity: 1, ease: te.easeInOut, delay: 0.3 })
		.to(
			".services__profile-title",
			0.5,
			{ opacity: 1, x: 0, ease: te.easeInOut, delay: 0.3 },
			"-=0.3"
		)
		.to(
			".services__profile-subtitle",
			0.5,
			{ opacity: 1, x: 0, ease: te.easeInOut, delay: 0.3 },
			"-=0.3"
		)
var li = document.querySelectorAll('[data-js="vacancy-item"]')
const He = new ne()
li.forEach(function (s, e) {
	const t = De.to(s, 0.2, { opacity: 1, ease: te.easeInOut })
	He.add(t, 0.1 * e)
})
const oi = De.to(document.querySelector(".carrier__application"), 0.3, {
	opacity: 1,
})
He.add(oi, 1.2)
const di = new ne().to(".intro", 0.5, {
	opacity: 1,
	ease: te.easeInOut,
	delay: 0.4,
})
Js.setTween(ri).addTo(js)
ei.setTween(ai).addTo(Us)
ti.setTween(ni).addTo(Ks)
si.setTween(He).addTo(Zs)
ii.setTween(di).addTo(Qs)
