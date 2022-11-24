(self["webpackChunkpearocr"] = self["webpackChunkpearocr"] || [])
.push([
	[186], {
		2353: (e, t, a) => {
			"use strict";
			a.d(t, {
				Z: () => s
			});
			a(71);
			var o = a(4688),
				n = {
					_data: {},
					_changeCallBack: {}
				},
				l = {
					version: 2,
					errWordHandle: "Normal",
					highlightErrWordThres: .6,
					recThres: .6,
					unclipRadio: 1.6,
					limitSideLen: 960,
					splitThres: 1,
					splitOverlap: 64,
					keepLowScore: !1,
					textBackground: "#faebd7",
					textColor: "#000000",
					textBgTransparent: !1,
					recLangCode: "zh-CHS",
					sortingType: "byFileName",
					uiLangCode: "zh-CHS"
				};

			function i(e, t, a) {
				"object" == typeof e ? e[t] = a : "function" == typeof e && e(a)
			}
			n.reset = () => {
				n.setFromDict(l, !0), n.save()
			}, n.save = () => {
				let e = {};
				for (const a in n._data) void 0 != l[a] && (e[a] = n._data[a]);
				let t = JSON.stringify(e);
				localStorage.setItem("PearOcrConfig", t)
			}, n.load = () => {
				let e = localStorage.getItem("PearOcrConfig");
				if (e) {
					if (n._data = JSON.parse(e), !n._data["version"] || n._data["version"] != l.version) return console.log("unmatch version, cur:", l.version, " store version:", n._data["version"]), void n.reset();
					for (const e in l) void 0 == n._data[e] && n.set(e, l[e])
				} else n.reset()
			}, n.get = e => n._data[e], n.set = (e, t) => {
				let a = t;
				while ("object" === typeof a && "value" in a) a = a.value;
				if (n._changeCallBack[e] && n._data[e] != a)
					for (const o of n._changeCallBack[e]) i(o, e, a);
				n._data[e] = a
			}, n.setFromDict = (e, t = !1) => {
				for (const a in e)(t || a in n._data) && n.set(a, e[a])
			}, n.getToDict = (e, t = !1) => {
				for (const a in e) {
					let o = n.get(a);
					if (void 0 != o) {
						if (!t && !(a in e)) continue;
						"object" === typeof e[a] && "value" in e[a] ? e[a].value = o : e[a] = o
					}
				}
			}, n.addMonitor = (e, t) => {
				if ("object" != typeof e) void 0 == n._changeCallBack[e] && (n._changeCallBack[e] = []), n._changeCallBack[e].push(t), n._data[e] && i(t, e, n._data[e]);
				else
					for (const a of e) n.addMonitor(a, t)
			}, n.load(), o.ZP.is.mobile ? n._data.limitSideLen = 640 : n._data.limitSideLen = 960;
			const s = n
		},
		1186: (e, t, a) => {
			"use strict";
			a.r(t), a.d(t, {
				default: () => E
			});
			var o = a(3673);

			function n(e, t, a, n, l, i) {
				const s = (0, o.up)("NavBar"),
					r = (0, o.up)("router-view"),
					c = (0, o.up)("q-page-container"),
					d = (0, o.up)("q-layout"),
					u = (0, o.up)("Footer");
				return (0, o.wg)(), (0, o.iD)(o.HY, null, [(0, o.Wm)(d, {
					view: "lHh Lpr lFf"
				}, {
					default: (0, o.w5)((() => [(0, o.Wm)(s), (0, o.Wm)(c, null, {
						default: (0, o.w5)((() => [(0, o.Wm)(r)])),
						_: 1
					})])),
					_: 1
				}), (0, o.Wm)(u)], 64)
			}
			var l = a(2323);
			const i = (0, o.Uk)(" PearOCR "),
				s = (0, o.Uk)("v2.1");

			function r(e, t, a, n, r, c) {
				const d = (0, o.up)("q-img"),
					u = (0, o.up)("q-badge"),
					m = (0, o.up)("q-toolbar-title"),
					g = (0, o.up)("q-btn"),
					p = (0, o.up)("q-item-section"),
					w = (0, o.up)("q-item"),
					f = (0, o.up)("q-list"),
					h = (0, o.up)("q-menu"),
					C = (0, o.up)("q-toolbar"),
					_ = (0, o.up)("q-header"),
					v = (0, o.up)("ContactDialog"),
					k = (0, o.Q2)("close-popup");
				return (0, o.wg)(), (0, o.iD)(o.HY, null, [(0, o.Wm)(_, {
					elevated: "",
					class: ""
				}, {
					default: (0, o.w5)((() => [(0, o.Wm)(C, {
						class: "bg-white text-blue-6"
					}, {
						default: (0, o.w5)((() => [e.$q.screen.gt.md ? ((0, o.wg)(), (0, o.j4)(d, {
							key: 0,
							src: r.imgUrl,
							"spinner-color": "white",
							style: {
								"max-height": "32px",
								"max-width": "32px"
							}
						}, null, 8, ["src"])) : (0, o.kq)("", !0), (0, o.Wm)(m, null, {
							default: (0, o.w5)((() => [i, (0, o.Wm)(u, {
								align: "bottom"
							}, {
								default: (0, o.w5)((() => [s])),
								_: 1
							})])),
							_: 1
						}), (0, o.Wm)(g, {
							size: "sm",
							flat: "",
							icon: "feedback",
							padding: "1em",
							label: e.$q.screen.gt.md ? e.$t("NavBar.feedback") : "",
							onClick: c.onFeedback
						}, null, 8, ["label", "onClick"]), (0, o.Wm)(g, {
							size: "sm",
							flat: "",
							icon: "wifi_calling_3",
							padding: "1em",
							label: e.$q.screen.gt.md ? e.$t("NavBar.contactus") : "",
							onClick: t[0] || (t[0] = e => r.contactCardShow = !0)
						}, null, 8, ["label"]), (0, o._)("div", null, [(0, o.Wm)(g, {
							size: "sm",
							flat: "",
							icon: "translate",
							padding: "1em",
							label: e.$q.screen.gt.md ? e.$t("langname." + r.uiLangCode) : ""
						}, null, 8, ["label"]), (0, o.Wm)(h, {
							modelValue: r.showMenu,
							"onUpdate:modelValue": t[1] || (t[1] = e => r.showMenu = e)
						}, {
							default: (0, o.w5)((() => [((0, o.wg)(!0), (0, o.iD)(o.HY, null, (0, o.Ko)(r.LangItems, (e => ((0, o.wg)(), (0, o.j4)(f, {
								dense: "",
								style: {
									"min-width": "100px"
								},
								key: e
							}, {
								default: (0, o.w5)((() => [(0, o.wy)((0, o.Wm)(w, {
									clickable: "",
									onClick: t => c.setUILang(e)
								}, {
									default: (0, o.w5)((() => [(0, o.Wm)(p, null, {
										default: (0, o.w5)((() => [(0, o.Uk)((0, l.zw)(r.langName[e]), 1)])),
										_: 2
									}, 1024)])),
									_: 2
								}, 1032, ["onClick"]), [
									[k]
								])])),
								_: 2
							}, 1024)))), 128))])),
							_: 1
						}, 8, ["modelValue"])])])),
						_: 1
					})])),
					_: 1
				}), (0, o.Wm)(v, {
					modelValue: r.contactCardShow,
					"onUpdate:modelValue": t[2] || (t[2] = e => r.contactCardShow = e)
				}, null, 8, ["modelValue"])], 64)
			}
			var c = a(744),
				d = a.n(c),
				u = a(2353);
			const m = (0, o._)("div", {
					class: "row no-wrap items-center"
				}, [(0, o._)("div", {
					class: "col text-h6 ellipsis"
				}, " 联系方式 ")], -1),
				g = {
					class: "text-subtitle1 text-weight-medium"
				},
				p = {
					class: "text-grey-8"
				};

			function w(e, t, a, n, i, s) {
				const r = (0, o.up)("q-card-section"),
					c = (0, o.up)("q-item-label"),
					d = (0, o.up)("q-item-section"),
					u = (0, o.up)("q-icon"),
					w = (0, o.up)("q-item"),
					f = (0, o.up)("q-list"),
					h = (0, o.up)("q-card"),
					C = (0, o.up)("q-dialog"),
					_ = (0, o.Q2)("ripple");
				return a.modelValue ? ((0, o.wg)(), (0, o.j4)(C, {
					key: 0,
					modelValue: a.modelValue,
					onHide: t[0] || (t[0] = t => e.$emit("update:modelValue", !1))
				}, {
					default: (0, o.w5)((() => [(0, o.Wm)(h, {
						class: "my-card"
					}, {
						default: (0, o.w5)((() => [(0, o.Wm)(r, null, {
							default: (0, o.w5)((() => [m])),
							_: 1
						}), (0, o.Wm)(f, {
							bordered: "",
							padding: "",
							class: "rounded-borders"
						}, {
							default: (0, o.w5)((() => [((0, o.wg)(!0), (0, o.iD)(o.HY, null, (0, o.Ko)(i.contactList, (e => (0, o.wy)(((0, o.wg)(), (0, o.j4)(w, {
								clickable: "",
								key: e.title,
								onClick: e.onClick
							}, {
								default: (0, o.w5)((() => [(0, o.Wm)(d, null, {
									default: (0, o.w5)((() => [(0, o.Wm)(c, null, {
										default: (0, o.w5)((() => [(0, o._)("span", g, (0, l.zw)(e.title), 1)])),
										_: 2
									}, 1024), (0, o.Wm)(c, {
										lines: "2"
									}, {
										default: (0, o.w5)((() => [(0, o._)("span", p, (0, l.zw)(e.desc), 1)])),
										_: 2
									}, 1024)])),
									_: 2
								}, 1024), (0, o.Wm)(d, {
									side: ""
								}, {
									default: (0, o.w5)((() => [(0, o.Wm)(u, {
										name: e.icon,
										color: "blue-5"
									}, null, 8, ["name"])])),
									_: 2
								}, 1024)])),
								_: 2
							}, 1032, ["onClick"])), [
								[_]
							]))), 128))])),
							_: 1
						})])),
						_: 1
					})])),
					_: 1
				}, 8, ["modelValue"])) : (0, o.kq)("", !0)
			}
			let f;
			const h = {
				data() {
					return {
						contactList: [{
							icon: "groups",
							title: "Telegram群组",
							desc: "更新通知，讨论闲聊",
							onClick() {
								window.open("https://t.me/joinchat/6oW2PYIHHQg1N2Nl", "_blank")
							}
						}, {
							icon: "email",
							title: "PearOCR@gmail.com",
							desc: "商务合作，定制开发，技术支持，私下洽谈及其他事宜",
							onClick() {
								const e = navigator.clipboard.writeText("PearOCR@gmail.com");
								e ? f.$q.notify({
									message: f.$t("邮箱已复制到剪贴板"),
									color: "blue",
									timeout: 500
								}) : f.$q.notify({
									message: f.$t("message.copyFailed"),
									color: "red",
									timeout: 500
								})
							}
						}]
					}
				},
				created() {
					f = this
				},
				props: ["modelValue"],
				emits: ["update:modelValue"]
			};
			var C = a(5926),
				_ = a(151),
				v = a(5589),
				k = a(7011),
				b = a(3414),
				L = a(2035),
				y = a(2350),
				q = a(4554),
				Z = a(6489),
				W = a(7518),
				Q = a.n(W);
			h.render = w;
			const S = h;
			Q()(h, "components", {
				QDialog: C.Z,
				QCard: _.Z,
				QCardSection: v.Z,
				QList: k.Z,
				QItem: b.Z,
				QItemSection: L.Z,
				QItemLabel: y.Z,
				QIcon: q.Z
			}), Q()(h, "directives", {
				Ripple: Z.Z
			});
			const $ = {
				name: "NavBar",
				components: {
					ContactDialog: S
				},
				data() {
					return {
						imgUrl: d(),
						showMenu: !1,
						contactCardShow: !1,
						uiLangCode: "zh-CHS",
						LangItems: Object.keys(this.$root.$i18n.messages),
						langName: {
							"en-US": "English",
							"zh-CHS": "简体中文",
							"zh-CHT": "繁體中文"
						}
					}
				},
				created() {
					if (this.uiLangCode = u.Z.get("uiLangCode"), this.uiLangCode) return void(this.$root.$i18n.locale = this.uiLangCode);
					let e = (navigator.language || navigator.userLanguage || navigator.browserLanguage)
						.toLowerCase();
					const t = {
						"zh-cn": "zh-CHS",
						"zh-tw": "zh-CHT",
						"zh-hk": "zh-CHT",
						default: "en-US"
					};
					void 0 === t[e] && (e = "default"), this.$root.$i18n.locale = e
				},
				methods: {
					setUILang(e) {
						console.log("setUILang"), this.uiLangCode !== e && (this.uiLangCode = e, this.$root.$i18n.locale = e, u.Z.set("uiLangCode", e), u.Z.save())
					},
					onFeedback() {
						window.open("https://github.com/PearOCR/pearocr_issue/issues", "_blank")
					}
				}
			};
			var H = a(3812),
				z = a(9570),
				x = a(4027),
				I = a(3747),
				B = a(9721),
				D = a(8240),
				T = a(6335),
				N = a(677);
			$.render = r;
			const V = $;
			Q()($, "components", {
				QHeader: H.Z,
				QToolbar: z.Z,
				QImg: x.Z,
				QToolbarTitle: I.Z,
				QBadge: B.Z,
				QBtn: D.Z,
				QMenu: T.Z,
				QList: k.Z,
				QItem: b.Z,
				QItemSection: L.Z
			}), Q()($, "directives", {
				ClosePopup: N.Z
			}), (0, o.dD)("data-v-31678c8d");
			const U = {
					class: "footer text-grey-14"
				},
				j = (0, o._)("p", null, "", -1),
                // j = (0, o._)("p", null, "友情链接:", -1),
				O = ["href"];

			function P(e, t, a, n, i, s) {
				return (0, o.wg)(), (0, o.iD)("div", U, [j, ((0, o.wg)(!0), (0, o.iD)(o.HY, null, (0, o.Ko)(i.friendLinks, (e => ((0, o.wg)(), (0, o.iD)("a", {
					key: e.name,
					class: "friendLink text-blue-grey-14",
					target: "_blank",
					href: e.link
				}, (0, l.zw)(e.name), 9, O)))), 128))])
			}(0, o.Cn)();
			const F = {
				data() {
					return {
                        friendLinks: []
						// friendLinks: [{
						// 	name: "小众软件",
						// 	link: "https://www.appinn.com/"
						// }, {
						// 	name: "异次元软件世界",
						// 	link: "https://www.iplaysoft.com"
						// }]
					}
				}
			};
			F.render = P, F.__scopeId = "data-v-31678c8d";
			const M = F,
				R = (0, o.aZ)({
					name: "MainLayout",
					components: {
						NavBar: V,
						Footer: M
					},
					setup() {
						return {}
					}
				});
			var Y = a(3066),
				K = a(2652);
			R.render = n;
			const E = R;
			Q()(R, "components", {
				QLayout: Y.Z,
				QPageContainer: K.Z
			})
		},
		744: (e, t, a) => {
			e.exports = a.p + "img/logo.02395c6d.png"
		}
	}
]);