"use strict";
(self["webpackChunkpearocr"] = self["webpackChunkpearocr"] || [])
.push([
	[668], {
		2353: (e, t, o) => {
			o.d(t, {
				Z: () => r
			});
			o(71);
			var i = o(4688),
				l = {
					_data: {},
					_changeCallBack: {}
				},
				a = {
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

			function n(e, t, o) {
				"object" == typeof e ? e[t] = o : "function" == typeof e && e(o)
			}
			l.reset = () => {
				l.setFromDict(a, !0), l.save()
			}, l.save = () => {
				let e = {};
				for (const o in l._data) void 0 != a[o] && (e[o] = l._data[o]);
				let t = JSON.stringify(e);
				localStorage.setItem("PearOcrConfig", t)
			}, l.load = () => {
				let e = localStorage.getItem("PearOcrConfig");
				if (e) {
					if (l._data = JSON.parse(e), !l._data["version"] || l._data["version"] != a.version) return console.log("unmatch version, cur:", a.version, " store version:", l._data["version"]), void l.reset();
					for (const e in a) void 0 == l._data[e] && l.set(e, a[e])
				} else l.reset()
			}, l.get = e => l._data[e], l.set = (e, t) => {
				let o = t;
				while ("object" === typeof o && "value" in o) o = o.value;
				if (l._changeCallBack[e] && l._data[e] != o)
					for (const i of l._changeCallBack[e]) n(i, e, o);
				l._data[e] = o
			}, l.setFromDict = (e, t = !1) => {
				for (const o in e)(t || o in l._data) && l.set(o, e[o])
			}, l.getToDict = (e, t = !1) => {
				for (const o in e) {
					let i = l.get(o);
					if (void 0 != i) {
						if (!t && !(o in e)) continue;
						"object" === typeof e[o] && "value" in e[o] ? e[o].value = i : e[o] = i
					}
				}
			}, l.addMonitor = (e, t) => {
				if ("object" != typeof e) void 0 == l._changeCallBack[e] && (l._changeCallBack[e] = []), l._changeCallBack[e].push(t), l._data[e] && n(t, e, l._data[e]);
				else
					for (const o of e) l.addMonitor(o, t)
			}, l.load(), i.ZP.is.mobile ? l._data.limitSideLen = 640 : l._data.limitSideLen = 960;
			const r = l
		},
		7668: (e, t, o) => {
			o.r(t), o.d(t, {
				default: () => ai
			});
			var i = o(3673);

			function l(e, t, o, l, a, n) {
				const r = (0, i.up)("Index");
				return (0, i.wg)(), (0, i.j4)(r)
			}

			function a(e, t, o, l, a, n) {
				const r = (0, i.up)("MainResultView"),
					s = (0, i.up)("ImageList"),
					d = (0, i.up)("UploadImage"),
					c = (0, i.up)("SingleTextView"),
					u = (0, i.up)("q-resize-observer"),
					m = (0, i.up)("q-page");
				return (0, i.wg)(), (0, i.j4)(m, {
					class: "flex flex-center size-alignment"
				}, {
					default: (0, i.w5)((() => [(0, i.Wm)(r), (0, i.Wm)(s), (0, i.Wm)(d), (0, i.Wm)(c), (0, i.Wm)(u, {
						onResize: e.onResize
					}, null, 8, ["onResize"])])),
					_: 1
				})
			}
			var n = o(2323),
				r = o(8880);
			(0, i.dD)("data-v-5b832c48");
			const s = {
					class: "boundDiv ImageList"
				},
				d = ["onClick"],
				c = ["src"],
				u = {
					class: "Toolbar ImageListToolbar text-light-blue"
				},
				m = {
					class: "q-space",
					ref: "gapLine"
				},
				g = {
					key: 1
				};

			function h(e, t, o, l, a, h) {
				const p = (0, i.up)("q-circular-progress"),
					f = (0, i.up)("q-spinner-ios"),
					x = (0, i.up)("q-inner-loading"),
					w = (0, i.up)("q-icon"),
					v = (0, i.up)("q-virtual-scroll"),
					b = (0, i.up)("ToolBtn"),
					I = (0, i.up)("q-item-section"),
					T = (0, i.up)("q-item"),
					y = (0, i.up)("q-list"),
					C = (0, i.up)("q-menu"),
					k = (0, i.up)("ExportPdf"),
					S = (0, i.up)("ExportTxt"),
					_ = (0, i.up)("Configure"),
					D = (0, i.Q2)("close-popup");
				return (0, i.wg)(), (0, i.iD)(i.HY, null, [(0, i._)("div", s, [(0, i.Wm)(v, {
					items: a.RecoDataList,
					"virtual-scroll-horizontal": ""
				}, {
					default: (0, i.w5)((({
						item: t,
						index: o
					}) => [((0, i.wg)(), (0, i.iD)("div", {
						key: o,
						class: (0, n.C_)(["ImageItem relative-position delete", {
							ImageItemUnselected: a.selectedItem !== t,
							ImageItemSelected: a.selectedItem === t
						}]),
						onClick: e => h.onItemClick(t)
					}, [(0, i._)("img", {
						class: "ImageItemSize",
						src: t.url
					}, null, 8, c), (0, i.Wm)(x, {
						showing: void 0 == t.text
					}, {
						default: (0, i.w5)((() => [t.isScaning ? ((0, i.wg)(), (0, i.j4)(p, {
							key: 0,
							"show-value": "",
							class: "text-light-blue q-ma-md",
							value: a.progressVal,
							size: "50px",
							color: "light-blue"
						}, null, 8, ["value"])) : (0, i.kq)("", !0), t.isScaning ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(f, {
							key: 1,
							size: "50%",
							color: "primary"
						}))])),
						_: 2
					}, 1032, ["showing"]), t.isScaning ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(w, {
						key: 0,
						onClick: (0, r.iM)((e => h.onItemDelete(t)), ["stop"]),
						class: (0, n.C_)([{
							DeleteBtnHide: !e.$q.platform.is.mobile
						}, "DeleteBtn DeleteBtnHV"]),
						name: "o_delete_outline"
					}, null, 8, ["onClick", "class"]))], 10, d))])),
					_: 1
				}, 8, ["items"])]), (0, i._)("div", u, [(0, i.Wm)(b, {
					label: e.$t("ImageList.addImage"),
					id: "addImage",
					IconName: "o_add_photo_alternate",
					onClick: h.onUploadClick
				}, null, 8, ["label", "onClick"]), e.$q.platform.is.mobile ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(b, {
					key: 0,
					label: e.$t("ImageList.fromClipboard"),
					id: "fromClipboard",
					IconName: "content_paste",
					onClick: h.onPasteImage
				}, null, 8, ["label", "onClick"])), (0, i._)("div", m, null, 512), ((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.ToolsItems, (t => ((0, i.wg)(), (0, i.j4)(b, {
					key: t.label,
					label: e.$t(t.label),
					IconName: t.icon,
					disable: !(!t.cond || t.cond()),
					onClick: t.func
				}, null, 8, ["label", "IconName", "disable", "onClick"])))), 128)), a.MenuItems.length > 0 ? ((0, i.wg)(), (0, i.iD)("div", g, [(0, i.Wm)(b, {
					label: e.$t("ImageList.more"),
					IconName: "more_horiz"
				}, null, 8, ["label"]), (0, i.Wm)(C, {
					modelValue: a.showMenu,
					"onUpdate:modelValue": t[0] || (t[0] = e => a.showMenu = e)
				}, {
					default: (0, i.w5)((() => [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.MenuItems, (t => ((0, i.wg)(), (0, i.j4)(y, {
						dense: "",
						style: {
							"min-width": "100px"
						},
						key: t.label
					}, {
						default: (0, i.w5)((() => [(0, i.wy)((0, i.Wm)(T, {
							clickable: "",
							disable: !(!t.cond || t.cond()),
							onClick: t.func
						}, {
							default: (0, i.w5)((() => [(0, i.Wm)(I, {
								avatar: ""
							}, {
								default: (0, i.w5)((() => [(0, i.Wm)(w, {
									color: "primary",
									name: t.icon
								}, null, 8, ["name"])])),
								_: 2
							}, 1024), (0, i.Wm)(I, null, {
								default: (0, i.w5)((() => [(0, i.Uk)((0, n.zw)(e.$t(t.label)), 1)])),
								_: 2
							}, 1024)])),
							_: 2
						}, 1032, ["disable", "onClick"]), [
							[D]
						])])),
						_: 2
					}, 1024)))), 128))])),
					_: 1
				}, 8, ["modelValue"])])) : (0, i.kq)("", !0)]), a.ExportPdfShow ? ((0, i.wg)(), (0, i.j4)(k, {
					key: 0,
					modelValue: a.ExportPdfShow,
					"onUpdate:modelValue": t[1] || (t[1] = e => a.ExportPdfShow = e)
				}, null, 8, ["modelValue"])) : (0, i.kq)("", !0), a.ExportTxtShow ? ((0, i.wg)(), (0, i.j4)(S, {
					key: 1,
					modelValue: a.ExportTxtShow,
					"onUpdate:modelValue": t[2] || (t[2] = e => a.ExportTxtShow = e)
				}, null, 8, ["modelValue"])) : (0, i.kq)("", !0), a.ConfigureShow ? ((0, i.wg)(), (0, i.j4)(_, {
					key: 2,
					modelValue: a.ConfigureShow,
					"onUpdate:modelValue": t[3] || (t[3] = e => a.ConfigureShow = e)
				}, null, 8, ["modelValue"])) : (0, i.kq)("", !0)], 64)
			}(0, i.Cn)();
			o(71);
			var p = {
				callBackDict: {},
				keyValDict: {},
				addevent: (e, t, o = !1) => {
					p.callBackDict[e] || (p.callBackDict[e] = []), p.callBackDict[e].push(t), 0 == o && void 0 != p.keyValDict[e] && t(p.keyValDict[e])
				},
				rmevent: (e, t) => {
					if (!p.callBackDict[e]) return;
					let o = p.callBackDict[e].indexOf(t);
					o >= 0 && p.callBackDict[e].splice(o, 1)
				},
				set: (e, t) => {
					if (p.keyValDict[e] = t, p.callBackDict[e])
						for (const o of p.callBackDict[e]) o(t)
				},
				trig: e => {
					p.set(e, !p.keyValDict[e])
				},
				get: e => p.keyValDict[e]
			};
			const f = p;
			o(7965), o(6101), o(979), o(6105), o(2396);
			o.p;

			function x() {
				return new Worker(o.p + "js/AntOcrWorker.0ef2ea9e.worker.js")
			}
			const w = o.p + "f91b0416e9517bfd576b4654bc712562.tf",
				v = o.p + "592ed67e13a2ca0ca7bd0614ff158eb5.tf",
				b = o.p + "644bcca4eea52af1e33121a940e41599.tf",
				I = o.p + "c43b6f3fff445f88847343a445f01c04.tf",
				T = o.p + "36f987338d326a0339fbf5662ec04473.tf",
				y = o.p + "0120c1c55690be53d0d59a49bfa4f228.tf",
				C = o.p + "7ab430b2ff567e1eff986ea092bb78e0.tf",
				k = o.p + "b66f6a54ccc99cf6f08e71e6ab25010d.tf",
				S = o.p + "de3fd5408fa47bb690369bbb82b78ce8.tf",
				_ = o.p + "7ec01f4aebd077a3a9d9d1e6cd7b8e2b.tf",
				D = o.p + "dfbc0cf2d00af43499155509ba1dc806.tf";
			let W = {
				"zh-CHS": [w, v, b],
				"en-US": [w, I, T],
				ja: [w, y, C],
				ko: [w, k, S],
				"zh-CHT": [w, _, D]
			};
			var V = {
				langList: ["zh-CHS", "zh-CHT", "en-US", "ja", "ko"],
				calcProgress: function() {
					let e = V.totalSize[0] + V.totalSize[1] + V.totalSize[2],
						t = V.loadedSize[0] + V.loadedSize[1] + V.loadedSize[2];
					V.onprogress && V.onprogress(t, e)
				},
				downLang: function(e) {
					V.urls = W[e], V.xhrarr ? (V.xhrarr[0].abort(), V.xhrarr[1].abort(), V.xhrarr[2].abort()) : V.xhrarr = [new XMLHttpRequest, new XMLHttpRequest, new XMLHttpRequest], V.totalSize = [2304374, 4362980, 13250], V.loadedSize = [0, 0, 0], V.buffarr = [void 0, void 0, void 0];
					for (let t = 0; t < V.xhrarr.length; t++) {
						let e = V.xhrarr[t];
						e.open("GET", V.urls[t]), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.responseType = "arraybuffer", e.xhrarrID = t, e.onprogress = function(e) {
							e.lengthComputable && (V.totalSize[this.xhrarrID] = e.total, V.loadedSize[this.xhrarrID] = e.loaded, V.calcProgress())
						}, e.onload = function(e) {
							4 === this.readyState && 200 === this.status && (V.buffarr[this.xhrarrID] = this.response, V.buffarr[0] && V.buffarr[1] && V.buffarr[2] && (V.onfinish && V.onfinish(V.buffarr), V.buffarr = void 0))
						}, e.send(null)
					}
				}
			};
			const q = V;
			var P = o(2353),
				L = o(821),
				M = o(4325);
			const {
				t: B
			} = M.i18n.global;
			var Z = {
				createNew: function() {
					var e = {
						isBusy: !1,
						txtCount: 0
					};
					return e.langList = q.langList, e.ocrImage = function(t) {
						let o = document.createElement("canvas"),
							i = o.getContext("2d");
						o.width = t.width, o.height = t.height, i.fillStyle = "white", i.fillRect(0, 0, t.width, t.height), i.drawImage(t, 0, 0);
						var l = i.getImageData(0, 0, t.width, t.height);
						let a = new ArrayBuffer(l.data.length);
						var n = new Uint8Array(a);
						for (let e = 0; e < n.length; e++) n[e] = l.data[e];
						e.init()
							.then((function() {
								e.worker.postMessage({
									cmd: "rec",
									width: t.width,
									height: t.height,
									buffer: a,
									params: e.params,
									unclipRadio: P.Z.get("unclipRadio"),
									limitSideLen: P.Z.get("limitSideLen"),
									splitThres: P.Z.get("splitThres"),
									splitOverlap: P.Z.get("splitOverlap")
								}, [a])
							}))
					}, e.ocrImageUrl = function(t, o) {
						var i = new Image;
						e.isBusy ? e["onError"] && e["onError"]("antocr is busy") : (e.isBusy = !0, i.userData = o, i.onload = function() {
							e.onImageLoad && e.onImageLoad(this, this.userData), e.ocrImage(this)
						}, i.src = t)
					}, e.onmessage = function(t) {
						if ("Init" != t.data)
							if ("recFinish" == t.data[0]) {
								var o = JSON.parse(t.data[3]);
								o.langCode = e.langCode, e.isBusy = !1, e.worker.terminate(), e.worker = void 0, e["onRecognitionCompleted"] && e["onRecognitionCompleted"](o)
							} else "progressCB" == t.data[0] ? e["onProgress"] && e["onProgress"](t.data[1], t.data[2]) : "runError" == t.data[0] && e.onRunError(t.data[1]);
						else e.initPromise[0]()
					}, e.init = function() {
						return e.worker && e.worker.terminate(), e.worker = new x, e.worker.onmessage = e.onmessage, e.worker.onerror = function(t) {
							e.onRunError(t)
						}, new Promise((function(t, o) {
							e.initPromise = [t, o]
						}))
					}, e.onRunError = function(e) {
						L.Z.create({
							title: B("antOcr.runError"),
							persistent: !0,
							message: B("antOcr.runErrorMessage")
						}), console.log("onRunError", e)
					}, e.setLang = function(t) {
						e.onSetLangBegin && e.onSetLangBegin(t), e.params = void 0, q.downLang(t), q.onprogress = e.onprogress, q.onfinish = function(o) {
							e.params = o, e.langCode = t, e.onSetLangFinish && e.onSetLangFinish()
						}
					}, e
				}
			};

			function $(e) {
				let t = Math.min(e[0].x, e[1].x, e[2].x, e[3].x),
					o = Math.min(e[0].y, e[1].y, e[2].y, e[3].y),
					i = Math.max(e[0].x, e[1].x, e[2].x, e[3].x),
					l = Math.max(e[0].y, e[1].y, e[2].y, e[3].y);
				return {
					x: t,
					y: o,
					width: i - t,
					height: l - o
				}
			}

			function R(e) {
				let t = e[1].x - e[0].x,
					o = e[1].y - e[0].y,
					i = Math.sqrt(t * t + o * o);
				t = e[3].x - e[0].x, o = e[3].y - e[0].y;
				let l = Math.sqrt(t * t + o * o);
				return {
					width: Math.round(i),
					height: Math.round(l)
				}
			}

			function z(e, t) {
				let o = e,
					i = $(t),
					l = R(t),
					a = (i.x, i.width, i.y, i.height, document.createElement("canvas")),
					n = a.getContext("2d");
				a.width = i.width, a.height = i.height, n.fillStyle = "white", n.fillRect(0, 0, i.width, i.height);
				let r = Math.atan((t[0].y - t[1].y) / (t[0].x - t[1].x));
				n.drawImage(o, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height);
				let s = document.createElement("canvas"),
					d = s.getContext("2d");
				s.width = i.width, s.height = i.height, d.translate(i.width / 2, i.height / 2), d.rotate(-r), d.drawImage(a, -i.width / 2, -i.height / 2), a.width = l.width, a.height = l.height;
				let c = i.width / 2 - l.width / 2,
					u = i.height / 2 - l.height / 2;
				return n.drawImage(s, -c, -u), {
					width: l.width,
					height: l.height,
					url: a.toDataURL("image/png")
				}
			}
			var E = Z.createNew(),
				F = o(4434);
			let H, Q = {},
				O = 1;
			const {
				t: N
			} = M.i18n.global;

			function U(e) {
				for (let t = 0; t < H.length; t++)
					if (e == H[t].id) return t;
				return -1
			}

			function A(e, t) {
				const o = .7;
				let i = e.rect[0].y,
					l = t.rect[0].y,
					a = e.rect[2].y - e.rect[0].y,
					n = t.rect[2].y - t.rect[0].y;
				return i += a * (1 - o) / 2, l += n * (1 - o) / 2, a *= o, n *= o, !(i + a < l) && !(l + n < i)
			}

			function j() {
				return -1 != navigator.userAgent.indexOf("Firefox")
			}

			function X() {
				var e = new Date,
					t = e.getFullYear(),
					o = e.getMonth() + 1,
					i = e.getDate(),
					l = e.getHours(),
					a = e.getMinutes(),
					n = e.getSeconds();
				return t + "-" + o + "-" + i + "-" + l + "-" + a + "-" + n
			}
			Q.initList = function(e) {
				void 0 == H && (H = e, Q.RecoDataList = H)
			}, Q.selectedId = -1, Q.selectedChangeCB = [], Q.scannedCount = 0, Q.changeSelected = function(e) {
				if (e == Q.selectedId) return;
				Q.selectedId = e;
				let t = U(e);
				t < 0 ? P.Z.set("selectedItem", {}) : P.Z.set("selectedItem", H[t]), f.trig("SeclectedRecoStateChanged")
			}, Q.deleteAll = function() {
				let e = 0;
				while (H.length > e) H[e].isScaning ? e += 1 : H.splice(e, 1);
				Q.changeSelected(e > 0 ? H[0].id : -1)
			}, Q.deleteItem = function(e) {
				let t = U(e);
				H.splice(t, 1), Q.selectedId == e && (H.length > t ? Q.changeSelected(H[t].id) : H.length > 0 ? Q.changeSelected(H[H.length - 1].id) : Q.changeSelected(-1))
			}, Q.getSelectedItem = function() {
				return console.log("getSelectedItem"), Q.selectedId > -1 ? H[U(Q.selectedId)] : void 0
			}, Q.getItemByID = function(e) {
				let t = U(e);
				return t < 0 ? {} : H[t]
			}, Q.addImage = function(e, t) {
				var o = new Image;
				o.onload = function() {
					var e = {};
					e.url = this.src, e.selected = !1, e.id = O, e.filename = this.filename, e.imgWidth = this.width, e.imgHeight = this.height, e.layoutMode = "Auto", O += 1, H.unshift(e), Q.selectedId < 0 && Q.changeSelected(e.id), E.isBusy || Q.recognitionImage()
				}, o.src = e, o.filename = t
			}, Q.refreshItemText = function(e) {
				let t = "",
					o = e.detail,
					i = P.Z.get("recThres");
				"Auto" === e.layoutMode ? (e.ignoreEnter = !1, e.mergeSameLine = !0) : "CombineLine" === e.layoutMode ? e.ignoreEnter = !0 : "SplitLine" === e.layoutMode && (e.ignoreEnter = !1, e.mergeSameLine = !1);
				for (let l = 0; l < o.length; l++) o[l].score < i || ("" !== t ? (e.ignoreEnter || e.mergeSameLine && A(o[l - 1], o[l]) || (t += "\n"), t += o[l].text) : t = o[l].text);
				e.text = t, f.trig("SeclectedRecoStateChanged")
			}, Q.recognitionImage = function(e) {
				let t;
				if (void 0 === E.params) return f.trig("recoErrByNoParams"), !1;
				if (E.isBusy) return !1;
				if (e) t = U(e);
				else {
					if (e = Q.selectedId, e < 0) return;
					if (t = U(e), void 0 != H[t].text) {
						for (t = H.length - 1; t >= 0; t--)
							if (void 0 == H[t].text) {
								e = H[t].id;
								break
							} if (t < 0) return
					}
				}
				void 0 == H[t].text && (f.trig("RecognitionBegin"), E.onRecognitionCompleted = o => {
						t = U(e), t < 0 || (H[t].detail = o, H[t].isScaning = !1, H[t].endTime = (new Date)
							.getTime(), H[t].costTime = H[t].endTime - H[t].startTime, Q.scannedCount++, Q.refreshItemText(H[t]), Q.selectedId == H[t].id && f.trig("SeclectedRecoStateChanged"), console.log("recognitionImage finish cost:", H[t].costTime, "ms"), Q.recognitionImage())
					}, E.onImageLoad = (e, o) => {
						t = U(o), Q.selectedId <= 0 && Q.changeSelected(H[t].id)
					}, H[t].isScaning = !0, H[t].startTime = (new Date)
					.getTime(), E.ocrImageUrl(H[t].url, e), console.log("ocrImageUrl", e))
			}, Q.reRecoAll = function(e) {
				for (const t of H) t.text = void 0;
				Q.recognitionImage(), f.trig("SeclectedRecoStateChanged")
			}, Q.reReco = function(e) {
				void 0 == e && (e = Q.selectedId);
				let t = U(e);
				H[t].text = void 0, Q.recognitionImage(), e == Q.selectedId && f.trig("SeclectedRecoStateChanged")
			}, Q.addFromClipboard = function(e) {
				if (void 0 == e) j() ? F.Z.create({
						type: "warning",
						message: "imagelist.tips_clipboard_firefox_only_hotkey"
					}) : navigator.clipboard.read()
					.then((e => {
						console.log("Pasted content: ", e);
						var t = !1;
						for (let i = 0; i < e.length; i++)
							for (var o of e[i].types) - 1 !== o.indexOf("image") && (t = !0, e[i].getType(o)
								.then((e => {
									let t = URL.createObjectURL(e);
									Q.addImage(t, "Clipboard_" + X() + ".png")
								})));
						t || F.Z.create({
							type: "warning",
							message: N("imagelist.tips_clipboard_no_image")
						})
					}))
					.catch((e => {
						console.log("i18n", M.i18n), F.Z.create({
							type: "negative",
							message: N("imagelist.tips_clipboard_faild")
						})
					}));
				else
					for (const t of e.clipboardData.items) {
						if (0 != t.type.indexOf("image")) continue;
						let o = t.getAsFile(),
							i = URL.createObjectURL(o);
						Q.addImage(i, "Clipboard_" + X() + ".png"), e.preventDefault(), e.stopPropagation()
					}
			}, window.addEventListener("paste", (async function(e) {
				console.log("addFromClipboard", e), Q.addFromClipboard(e)
			})), Q.empty = function() {
				return !H.length
			}, (0, i.dD)("data-v-3dac1f96");
			const Y = ["id"],
				G = {
					key: 1,
					class: "iconlabel block"
				};

			function J(e, t, o, l, a, r) {
				const s = (0, i.up)("q-icon");
				return (0, i.wg)(), (0, i.iD)("div", {
					id: o.id,
					class: (0, n.C_)(["BtnBound", {
						disable: o.disable
					}]),
					style: (0, n.j5)("font-size: " + (o.IconSize ? o.IconSize : "30px"))
				}, [o.IconName ? ((0, i.wg)(), (0, i.j4)(s, {
					key: 0,
					name: o.IconName
				}, null, 8, ["name"])) : (0, i.kq)("", !0), o.label ? ((0, i.wg)(), (0, i.iD)("span", G, (0, n.zw)(o.label), 1)) : (0, i.kq)("", !0)], 14, Y)
			}(0, i.Cn)();
			const K = {
				props: ["IconName", "label", "disable", "IconSize", "id"]
			};
			var ee = o(4554),
				te = o(7518),
				oe = o.n(te);
			K.render = J, K.__scopeId = "data-v-3dac1f96";
			const ie = K;
			oe()(K, "components", {
				QIcon: ee.Z
			}), (0, i.dD)("data-v-02045226");
			const le = ["src"],
				ae = {
					class: "text-weight-bold"
				};

			function ne(e, t, o, l, a, r) {
				const s = (0, i.up)("q-icon"),
					d = (0, i.up)("q-space"),
					c = (0, i.up)("q-btn"),
					u = (0, i.up)("q-bar"),
					m = (0, i.up)("q-header"),
					g = (0, i.up)("q-toolbar"),
					h = (0, i.up)("q-footer"),
					p = (0, i.up)("q-input"),
					f = (0, i.up)("q-select"),
					x = (0, i.up)("q-form"),
					w = (0, i.up)("q-page"),
					v = (0, i.up)("q-page-container"),
					b = (0, i.up)("q-layout"),
					I = (0, i.up)("q-dialog"),
					T = (0, i.up)("q-linear-progress"),
					y = (0, i.up)("q-card-section"),
					C = (0, i.up)("q-card"),
					k = (0, i.Q2)("close-popup");
				return (0, i.wg)(), (0, i.iD)(i.HY, null, [o.modelValue && a.showDialog ? ((0, i.wg)(), (0, i.j4)(I, {
					key: 0,
					ref: "dialog",
					modelValue: o.modelValue,
					onHide: t[7] || (t[7] = t => e.$emit("update:modelValue", !1))
				}, {
					default: (0, i.w5)((() => [(0, i.Wm)(b, {
						view: "Lhh lpR fff",
						container: "",
						class: "bg-white"
					}, {
						default: (0, i.w5)((() => [(0, i.Wm)(m, {
							ref: "header"
						}, {
							default: (0, i.w5)((() => [(0, i.Wm)(u, null, {
								default: (0, i.w5)((() => [(0, i.Wm)(s, {
									name: "o_file_download"
								}), (0, i._)("div", null, (0, n.zw)(e.$t("exportPDF")), 1), (0, i.Wm)(d), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									icon: "close"
								}, null, 512), [
									[k]
								])])),
								_: 1
							})])),
							_: 1
						}, 512), (0, i.Wm)(h, {
							ref: "footer"
						}, {
							default: (0, i.w5)((() => [(0, i.Wm)(g, null, {
								default: (0, i.w5)((() => [(0, i.Wm)(c, {
									dense: "",
									flat: "",
									icon: a.pdfPreviewUrl ? "o_settings" : "o_preview",
									onClick: t[0] || (t[0] = e => {
										a.pdfPreviewUrl ? a.pdfPreviewUrl = void 0 : r.exportPDF(!0)
									}),
									size: "md",
									label: a.pdfPreviewUrl ? e.$t("exportPDF.config") : e.$t("exportPDF.preview")
								}, null, 8, ["icon", "label"]), (0, i.Wm)(d), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									icon: "o_file_download",
									onClick: t[1] || (t[1] = e => r.exportPDF(!1)),
									size: "md",
									label: e.$t("exportPDF.export")
								}, null, 8, ["label"]), [
									[k]
								]), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									size: "md",
									icon: "close",
									label: e.$t("exportPDF.cancel")
								}, null, 8, ["label"]), [
									[k]
								])])),
								_: 1
							})])),
							_: 1
						}, 512), (0, i.Wm)(v, null, {
							default: (0, i.w5)((() => [(0, i.Wm)(w, null, {
								default: (0, i.w5)((() => [a.pdfPreviewUrl ? ((0, i.wg)(), (0, i.iD)("iframe", {
									key: 0,
									ref: "pdfIframe",
									src: a.pdfPreviewUrl,
									frameborder: "0",
									width: "100%",
									style: {
										"min-height": "inherit"
									}
								}, null, 8, le)) : (0, i.kq)("", !0), a.pdfPreviewUrl ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(x, {
									key: 1,
									class: "q-ma-md q-gutter-md"
								}, {
									default: (0, i.w5)((() => [(0, i.Wm)(p, {
										filled: "",
										modelValue: a.fileName,
										"onUpdate:modelValue": t[2] || (t[2] = e => a.fileName = e),
										label: e.$t("exportPDF.filename"),
										"lazy-rules": "",
										rules: [t => t && t.length > 0 || e.$t("exportPDF.mustHaveFilename")]
									}, null, 8, ["modelValue", "label", "rules"]), (0, i.Wm)(f, {
										"map-options": "",
										outlined: "",
										label: e.$t("exportPDF.exportImage"),
										modelValue: a.exportImage.value,
										"onUpdate:modelValue": t[3] || (t[3] = e => a.exportImage.value = e),
										options: a.exportImage.list
									}, null, 8, ["label", "modelValue", "options"]), (0, i.Wm)(f, {
										"map-options": "",
										outlined: "",
										label: e.$t("exportPDF.exportData"),
										modelValue: a.exportData.value,
										"onUpdate:modelValue": t[4] || (t[4] = e => a.exportData.value = e),
										options: a.exportData.list
									}, null, 8, ["label", "modelValue", "options"]), (0, i.Wm)(f, {
										"map-options": "",
										outlined: "",
										label: e.$t("exportPDF.textVisible"),
										modelValue: a.textVisible.value,
										"onUpdate:modelValue": t[5] || (t[5] = e => a.textVisible.value = e),
										options: a.textVisible.list
									}, null, 8, ["label", "modelValue", "options"]), (0, i.Wm)(f, {
										"map-options": "",
										outlined: "",
										label: e.$t("exportPDF.withOriImage"),
										modelValue: a.withOriImage.value,
										"onUpdate:modelValue": t[6] || (t[6] = e => a.withOriImage.value = e),
										options: a.withOriImage.list
									}, null, 8, ["label", "modelValue", "options"])])),
									_: 1
								}))])),
								_: 1
							})])),
							_: 1
						})])),
						_: 1
					})])),
					_: 1
				}, 8, ["modelValue"])) : (0, i.kq)("", !0), a.showInitDialog ? ((0, i.wg)(), (0, i.j4)(I, {
					key: 1,
					modelValue: !0,
					onHide: t[8] || (t[8] = t => e.$emit("update:modelValue", !1)),
					seamless: "",
					position: "bottom"
				}, {
					default: (0, i.w5)((() => [(0, i.Wm)(C, {
						style: {
							width: "350px"
						}
					}, {
						default: (0, i.w5)((() => [(0, i.Wm)(T, {
							value: a.downPrecent,
							color: "pink"
						}, null, 8, ["value"]), (0, i.Wm)(y, {
							class: "row items-center no-wrap"
						}, {
							default: (0, i.w5)((() => [(0, i._)("div", ae, (0, n.zw)(e.$t("exportPDF.downloadingModule")), 1), (0, i.Wm)(d), (0, i.wy)((0, i.Wm)(c, {
								flat: "",
								round: "",
								icon: "close"
							}, null, 512), [
								[k]
							])])),
							_: 1
						})])),
						_: 1
					})])),
					_: 1
				})) : (0, i.kq)("", !0)], 64)
			}(0, i.Cn)();
			var re = o(9587);
			const se = o.p + "97a745e4ec4d6c4f3da96103363915ee.tf";
			let de = {},
				ce = {};
			var ue = {
					Preview: "Preview",
					SaveToFile: "SaveToFile"
				},
				me = {
					NoAttach: "WithoutOriImage",
					AttachOnNext: "OriImageOnNext",
					AttachOnLast: "OriImageOnLast"
				};

			function ge() {
				ce.action = ue.Preview, ce.filename = "Pearocr1", ce.onlyText = !1, ce.visibleText = !0, ce.ImageAttached = me.AttachOnNext, ce.textBGColor = "#faebd7", ce.addPageNum = !0, ce.pageNumPading = 4, ce.pageNumSize = 9, ce.addWatermark = !0, ce.watermarkPading = 4, ce.watermarkSize = 9, ce.watermarkText = "power by pearocr.com"
			}

			function he(e) {
				return e[3]
			}

			function pe(e) {
				return -Math.atan((e[0].y - e[1].y) / (e[0].x - e[1].x))
			}

			function fe(e) {
				let t = {},
					o = e[0],
					i = e[1],
					l = Math.sqrt((o.x - i.x) * (o.x - i.x) * 1 + (o.y - i.y) * (o.y - i.y));
				o = e[1], i = e[2];
				let a = Math.sqrt((o.x - i.x) * (o.x - i.x) * 1 + (o.y - i.y) * (o.y - i.y));
				return t.width = Math.max(l, a), t.height = Math.min(l, a), t
			}

			function xe(e) {
				return de.pageWidth = e.imgWidth, de.pageHeight = e.imgHeight + 2 * ce.watermarkPading + ce.watermarkSize, ce.addPageNum && (de.pageHeight += 2 * ce.pageNumPading + ce.pageNumSize), [de.pageHeight, de.pageWidth]
			}

			function we(e, t) {
				if (!ce.addPageNum) return;
				let o = de.doc;
				o.setFontSize(ce.watermarkSize);
				let i = de.pageHeight - ce.pageNumPading;
				ce.addWatermark && (i -= 2 * ce.watermarkPading + ce.watermarkSize), o.text(e.toString() + " / " + t.toString(), de.pageWidth / 2, i, {
					align: "center",
					baseline: "bottom"
				})
			}

			function ve() {
				if (!ce.addWatermark) return;
				let e = de.doc;
				e.setFontSize(ce.watermarkSize);
				let t = e.getTextColor();
				e.setTextColor("#1a0dbe"), e.textWithLink(ce.watermarkText, de.pageWidth / 2, de.pageHeight - ce.watermarkPading, {
					align: "center",
					baseline: "bottom",
					url: "https://pearocr.com"
				}), e.setTextColor(t)
			}

			function be(e, t, o, i, l) {
				let a = xe(t);
				e.addPage(a, a[1] > a[0] ? "l" : "p"), e.addImage(t.url, "JPEG", 0, 0, t.imgWidth, t.imgHeight, l, "FAST"), we(o, i), ve()
			}
			ge(), de.isInit = !1, de.init = () => {
				if (de.xhr) return;
				let e = new XMLHttpRequest;
				e.open("GET", se), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.responseType = "text", e.onprogress = function(e) {
					e.lengthComputable && f.set("PDFRenderInitProgress", e.loaded / e.total)
				}, e.onload = function(e) {
					4 === this.readyState && 200 === this.status && (de.font = this.response, de.isInit = !0, f.trig("PDFRenderInited"))
				}, e.send(null), de.xhr = e
			};
			var Ie = function() {
				this.addFileToVFS("simhei-normal.ttf", de.font), this.addFont("simhei-normal.ttf", "simhei", "normal"), this.addFont("simhei-normal.ttf", "simhei", "bold"), this.addFont("simhei-normal.ttf", "simhei", "italic"), this.addFont("simhei-normal.ttf", "simhei", "bolditalic")
			};
			let Te;
			re.kH.API.events.push(["addFonts", Ie]), de.render = (e, t) => {
				Object.assign(ce, t), Array.isArray(e) || (e = [e]);
				let o = e.length;
				ce.ImageAttached != me.NoAttach && (o *= 2);
				let i, l = 1,
					a = 1;
				for (const n of e) {
					let e = xe(n),
						t = "img_" + a.toString();
					a++, void 0 == i ? (de.doc = new re.kH({
						orientation: e[1] > e[0] ? "l" : "p",
						unit: "px",
						format: e,
						putOnlyUsedFonts: !0,
						floatPrecision: 16,
						hotfixes: ["px_scaling"]
					}), i = de.doc) : i.addPage(e, e[1] > e[0] ? "l" : "p"), i.setFont("simhei"), !ce.onlyText && ce.visibleText && i.addImage(n.url, "JPEG", 0, 0, n.imgWidth, n.imgHeight, t, "FAST");
					for (const o of n.detail) {
						let e = o.textEdited ? o.textEdited : o.text;
						if (!e) continue;
						i.setFillColor(ce.textBGColor), i.moveTo(o.rect[0].x, o.rect[0].y), i.lineTo(o.rect[1].x, o.rect[1].y), i.lineTo(o.rect[2].x, o.rect[2].y), i.lineTo(o.rect[3].x, o.rect[3].y), i.lineTo(o.rect[0].x, o.rect[0].y), i.fill();
						let t = fe(o.rect);
						i.setFontSize(.85 * t.height);
						let l = i.getFontSize(),
							a = i.context2d.measureText(e)
							.width,
							n = 0;
						a > t.width && (l *= t.width / a, i.setFontSize(.85 * l), a = i.context2d.measureText(e)
							.width), a < t.width && e.length > 1 && (n = (t.width - a) / (e.length - 1), a = t.width);
						let r = pe(o.rect),
							s = he(o.rect);
						i.text(e, s.x, s.y, {
							baseline: "bottom",
							angle: 180 * r / Math.PI,
							charSpace: n
						})
					}
					ce.onlyText || ce.visibleText || i.addImage(n.url, "JPEG", 0, 0, n.imgWidth, n.imgHeight, t, "FAST"), we(l, o), l += 1, ve(), ce.visibleText && ce.ImageAttached == me.AttachOnNext && (be(i, n, l, o, t), l += 1)
				}
				if (a = 1, ce.visibleText && ce.ImageAttached == me.AttachOnLast)
					for (const n of e) {
						a.toString();
						a++, be(i, n, l, o), l += 1
					}
				if (ce.action == ue.Preview) return i.output("datauristring");
				ce.action != ue.SaveToFile || i.save(ce.filename)
			};
			const ye = {
				data() {
					return {
						showDialog: !1,
						showInitDialog: !1,
						downPrecent: 0,
						showText: !0,
						recLangCode: "",
						fileName: "PearOCR",
						pdfPreviewUrl: "",
						model: null,
						exportImage: {
							value: "AllImages",
							list: [{
								label: this.$t("exportPDF.AllImages"),
								value: "AllImages"
							}, {
								label: this.$t("exportPDF.CurrentImage"),
								value: "CurrentImage"
							}]
						},
						exportData: {
							value: "ExportTextImage",
							list: [{
								label: this.$t("exportPDF.ExportTextImage"),
								value: "ExportTextImage"
							}, {
								label: this.$t("exportPDF.ExportTextOnly"),
								value: "ExportTextOnly"
							}]
						},
						textVisible: {
							value: "Visible",
							list: [{
								label: this.$t("exportPDF.Visible"),
								value: "Visible"
							}, {
								label: this.$t("exportPDF.Invisible"),
								value: "Invisible"
							}]
						},
						withOriImage: {
							value: "WithoutOriImage",
							list: [{
								label: this.$t("exportPDF.WithoutOriImage"),
								value: "WithoutOriImage"
							}, {
								label: this.$t("exportPDF.OriImageOnNext"),
								value: "OriImageOnNext"
							}, {
								label: this.$t("exportPDF.OriImageOnLast"),
								value: "OriImageOnLast"
							}]
						}
					}
				},
				props: ["modelValue"],
				emits: ["update:modelValue"],
				created() {
					Te = this, de.isInit ? this.showDialog = !0 : (f.addevent("PDFRenderInitProgress", (function(e) {
						Te.downPrecent = e
					})), f.addevent("PDFRenderInited", (function() {
						Te.showInitDialog = !1, Te.showDialog = !0
					})), this.showInitDialog = !0, de.init())
				},
				methods: {
					exportPDF(e) {
						let t;
						t = "AllImages" === this.exportImage.value ? H : [Q.getSelectedItem()];
						const o = {};
						o.onlyText = "ExportTextOnly" === this.exportData.value, o.filename = this.fileName ? this.fileName : "PearOCR", o.visibleText = "Visible" === this.textVisible.value, o.ImageAttached = this.withOriImage.value, o.action = e ? ue.Preview : ue.SaveToFile, this.pdfPreviewUrl = de.render(t, o)
					}
				}
			};
			var Ce = o(5926),
				ke = o(3066),
				Se = o(3812),
				_e = o(846),
				De = o(2025),
				We = o(8240),
				Ve = o(1762),
				qe = o(9570),
				Pe = o(2652),
				Le = o(4379),
				Me = o(5269),
				Be = o(4842),
				Ze = o(362),
				$e = o(151),
				Re = o(1598),
				ze = o(5589),
				Ee = o(677);
			ye.render = ne, ye.__scopeId = "data-v-02045226";
			const Fe = ye;
			oe()(ye, "components", {
				QDialog: Ce.Z,
				QLayout: ke.Z,
				QHeader: Se.Z,
				QBar: _e.Z,
				QIcon: ee.Z,
				QSpace: De.Z,
				QBtn: We.Z,
				QFooter: Ve.Z,
				QToolbar: qe.Z,
				QPageContainer: Pe.Z,
				QPage: Le.Z,
				QForm: Me.Z,
				QInput: Be.Z,
				QSelect: Ze.Z,
				QCard: $e.Z,
				QLinearProgress: Re.Z,
				QCardSection: ze.Z
			}), oe()(ye, "directives", {
				ClosePopup: Ee.Z
			}), (0, i.dD)("data-v-2f0695ca");
			const He = ["value"];

			function Qe(e, t, o, l, a, r) {
				const s = (0, i.up)("q-icon"),
					d = (0, i.up)("q-space"),
					c = (0, i.up)("q-btn"),
					u = (0, i.up)("q-bar"),
					m = (0, i.up)("q-header"),
					g = (0, i.up)("q-toolbar"),
					h = (0, i.up)("q-footer"),
					p = (0, i.up)("q-input"),
					f = (0, i.up)("q-select"),
					x = (0, i.up)("q-form"),
					w = (0, i.up)("q-page"),
					v = (0, i.up)("q-page-container"),
					b = (0, i.up)("q-layout"),
					I = (0, i.up)("q-dialog"),
					T = (0, i.Q2)("close-popup");
				return o.modelValue ? ((0, i.wg)(), (0, i.j4)(I, {
					key: 0,
					modelValue: o.modelValue,
					onHide: t[6] || (t[6] = t => e.$emit("update:modelValue", !1))
				}, {
					default: (0, i.w5)((() => [(0, i.Wm)(b, {
						view: "Lhh lpR fff",
						container: "",
						class: "bg-white"
					}, {
						default: (0, i.w5)((() => [(0, i.Wm)(m, {
							ref: "header"
						}, {
							default: (0, i.w5)((() => [(0, i.Wm)(u, null, {
								default: (0, i.w5)((() => [(0, i.Wm)(s, {
									name: "o_file_download"
								}), (0, i._)("div", null, (0, n.zw)(e.$t("exportTXT")), 1), (0, i.Wm)(d), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									icon: "close"
								}, null, 512), [
									[T]
								])])),
								_: 1
							})])),
							_: 1
						}, 512), (0, i.Wm)(h, {
							ref: "footer"
						}, {
							default: (0, i.w5)((() => [(0, i.Wm)(g, null, {
								default: (0, i.w5)((() => [(0, i.Wm)(c, {
									dense: "",
									flat: "",
									icon: a.previewTxt ? "o_settings" : "o_preview",
									onClick: t[0] || (t[0] = e => {
										a.previewTxt ? a.previewTxt = void 0 : r.exportTXT(!0)
									}),
									size: "md",
									label: a.previewTxt ? e.$t("exportPDF.config") : e.$t("exportPDF.preview")
								}, null, 8, ["icon", "label"]), (0, i.Wm)(d), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									icon: "o_file_download",
									onClick: t[1] || (t[1] = e => r.exportTXT(!1, "docx")),
									size: "md",
									label: e.$t("exportPDF.exportDocx")
								}, null, 8, ["label"]), [
									[T]
								]), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									icon: "o_file_download",
									onClick: t[2] || (t[2] = e => r.exportTXT(!1, "txt")),
									size: "md",
									label: e.$t("exportPDF.exportTxt")
								}, null, 8, ["label"]), [
									[T]
								]), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									size: "md",
									icon: "close",
									label: e.$t("exportPDF.cancel")
								}, null, 8, ["label"]), [
									[T]
								])])),
								_: 1
							})])),
							_: 1
						}, 512), (0, i.Wm)(v, null, {
							default: (0, i.w5)((() => [(0, i.Wm)(w, null, {
								default: (0, i.w5)((() => [a.previewTxt ? ((0, i.wg)(), (0, i.iD)("textarea", {
									key: 0,
									width: "100%",
									style: {
										"min-height": "inherit"
									},
									class: "textItem",
									value: a.previewTxt
								}, null, 8, He)) : (0, i.kq)("", !0), a.previewTxt ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(x, {
									key: 1,
									class: "q-ma-md q-gutter-md"
								}, {
									default: (0, i.w5)((() => [(0, i.Wm)(p, {
										filled: "",
										modelValue: a.fileName,
										"onUpdate:modelValue": t[3] || (t[3] = e => a.fileName = e),
										label: e.$t("exportPDF.filename"),
										"lazy-rules": "",
										rules: [t => t && t.length > 0 || e.$t("exportPDF.mustHaveFilename")]
									}, null, 8, ["modelValue", "label", "rules"]), (0, i.Wm)(f, {
										outlined: "",
										"map-options": "",
										label: e.$t("exportTXT.exportText"),
										modelValue: a.exportText.value,
										"onUpdate:modelValue": t[4] || (t[4] = e => a.exportText.value = e),
										options: a.exportText.list
									}, null, 8, ["label", "modelValue", "options"]), (0, i.Wm)(f, {
										outlined: "",
										"map-options": "",
										label: e.$t("exportTXT.textDivided"),
										modelValue: a.textDivided.value,
										"onUpdate:modelValue": t[5] || (t[5] = e => a.textDivided.value = e),
										options: a.textDivided.list
									}, null, 8, ["label", "modelValue", "options"])])),
									_: 1
								}))])),
								_: 1
							})])),
							_: 1
						})])),
						_: 1
					})])),
					_: 1
				}, 8, ["modelValue"])) : (0, i.kq)("", !0)
			}(0, i.Cn)();
			var Oe = o(63),
				Ne = o.n(Oe),
				Ue = o(7405),
				Ae = o.n(Ue),
				je = o(7434),
				Xe = o.n(je),
				Ye = o(3139);
			const Ge = o.p + "08dbfb895d58b2c5d17d650577ff10e7.docx";

			function Je(e, t) {
				Xe()
					.getBinaryContent(e, t)
			}

			function Ke(e, t) {
				Je(Ge, (function(o, i) {
					if (o) throw o;
					const l = new(Ae())(i),
						a = new(Ne())(l, {
							paragraphLoop: !0,
							linebreaks: !0
						});
					a.render({
						TEXT: t
					});
					const n = a.getZip()
						.generate({
							type: "blob",
							mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
						});
					(0, Ye.saveAs)(n, e)
				}))
			}

			function et(e, t) {
				const o = document.createElement("a");
				if (o.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), o.setAttribute("download", e), document.createEvent) {
					const e = document.createEvent("MouseEvents");
					e.initEvent("click", !0, !0), o.dispatchEvent(e)
				} else o.click()
			}
			const tt = {
				data() {
					return {
						fileName: "PearOCR",
						previewTxt: "",
						exportText: {
							value: "AllTexts",
							list: [{
								label: this.$t("exportTXT.AllTexts"),
								value: "AllTexts"
							}, {
								label: this.$t("exportTXT.CurrentText"),
								value: "CurrentText"
							}]
						},
						textDivided: {
							value: "DividedTexts",
							list: [{
								label: this.$t("exportTXT.DividedTexts"),
								value: "DividedTexts"
							}, {
								label: this.$t("exportTXT.Undivided"),
								value: "Undivided"
							}]
						}
					}
				},
				props: ["modelValue"],
				emits: ["update:modelValue"],
				methods: {
					exportTXT(e, t) {
						let o, i = "";
						o = "AllTexts" === this.exportText.value ? H : [Q.getSelectedItem()];
						for (const l of o) "DividedTexts" === this.textDivided.value && (i && (i += "\n"), i += "------------ " + l.filename + " ------------\n"), i += l.text, i += "\n";
						i += "\n------------ prower by PearOCR.com ------------\n", e ? this.previewTxt = i : "txt" === t ? et(this.fileName, i) : "docx" === t && Ke(this.fileName, i)
					}
				}
			};
			tt.render = Qe, tt.__scopeId = "data-v-2f0695ca";
			const ot = tt;
			oe()(tt, "components", {
				QDialog: Ce.Z,
				QLayout: ke.Z,
				QHeader: Se.Z,
				QBar: _e.Z,
				QIcon: ee.Z,
				QSpace: De.Z,
				QBtn: We.Z,
				QFooter: Ve.Z,
				QToolbar: qe.Z,
				QPageContainer: Pe.Z,
				QPage: Le.Z,
				QForm: Me.Z,
				QInput: Be.Z,
				QSelect: Ze.Z
			}), oe()(tt, "directives", {
				ClosePopup: Ee.Z
			}), (0, i.dD)("data-v-5c6cf792");
			const it = {
					class: "q-gutter-md row items-start ConfigureGroup"
				},
				lt = {
					class: "q-gutter-md row items-start ConfigureGroup"
				},
				at = {
					key: 0
				},
				nt = {
					class: "q-gutter-md row items-start ConfigureGroup"
				};

			function rt(e, t, o, l, a, r) {
				const s = (0, i.up)("q-icon"),
					d = (0, i.up)("q-space"),
					c = (0, i.up)("q-btn"),
					u = (0, i.up)("q-bar"),
					m = (0, i.up)("q-header"),
					g = (0, i.up)("q-toolbar"),
					h = (0, i.up)("q-footer"),
					p = (0, i.up)("q-input"),
					f = (0, i.up)("q-select"),
					x = (0, i.up)("q-toggle"),
					w = (0, i.up)("q-form"),
					v = (0, i.up)("q-page"),
					b = (0, i.up)("q-page-container"),
					I = (0, i.up)("q-layout"),
					T = (0, i.up)("q-dialog"),
					y = (0, i.Q2)("close-popup");
				return o.modelValue ? ((0, i.wg)(), (0, i.j4)(T, {
					key: 0,
					modelValue: o.modelValue,
					onHide: t[12] || (t[12] = t => e.$emit("update:modelValue", !1))
				}, {
					default: (0, i.w5)((() => [(0, i.Wm)(I, {
						view: "Lhh lpR fff",
						container: "",
						class: "bg-white"
					}, {
						default: (0, i.w5)((() => [(0, i.Wm)(m, {
							ref: "header"
						}, {
							default: (0, i.w5)((() => [(0, i.Wm)(u, null, {
								default: (0, i.w5)((() => [(0, i.Wm)(s, {
									name: "o_settings",
									onClick: r.onIconClicked
								}, null, 8, ["onClick"]), (0, i._)("div", null, (0, n.zw)(e.$t("configure")), 1), (0, i.Wm)(d), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									icon: "close"
								}, null, 512), [
									[y]
								])])),
								_: 1
							})])),
							_: 1
						}, 512), (0, i.Wm)(h, {
							ref: "footer"
						}, {
							default: (0, i.w5)((() => [(0, i.Wm)(g, null, {
								default: (0, i.w5)((() => [(0, i.Wm)(c, {
									dense: "",
									flat: "",
									size: "md",
									icon: "restore",
									onClick: t[0] || (t[0] = e => r.resetConfigure()),
									label: e.$t("configure.reset")
								}, null, 8, ["label"]), (0, i.Wm)(d), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									icon: "o_check",
									onClick: t[1] || (t[1] = e => r.saveConfigure()),
									size: "md",
									label: e.$t("configure.apply")
								}, null, 8, ["label"]), [
									[y]
								]), (0, i.wy)((0, i.Wm)(c, {
									dense: "",
									flat: "",
									size: "md",
									icon: "close",
									label: e.$t("configure.cancel")
								}, null, 8, ["label"]), [
									[y]
								])])),
								_: 1
							})])),
							_: 1
						}, 512), (0, i.Wm)(b, null, {
							default: (0, i.w5)((() => [(0, i.Wm)(v, null, {
								default: (0, i.w5)((() => [(0, i.Wm)(w, {
									class: "q-ma-md q-gutter-md"
								}, {
									default: (0, i.w5)((() => [(0, i._)("div", it, [(0, i.Wm)(p, {
										class: "col",
										modelValue: a.config.highlightErrWordThres,
										"onUpdate:modelValue": t[2] || (t[2] = e => a.config.highlightErrWordThres = e),
										type: "number",
										label: e.$t("configure.errWordThres")
									}, null, 8, ["modelValue", "label"]), (0, i.Wm)(f, {
										class: "col",
										"map-options": "",
										outlined: "",
										modelValue: a.config.errWordHandle.value,
										"onUpdate:modelValue": t[3] || (t[3] = e => a.config.errWordHandle.value = e),
										label: e.$t("configure.errWordHandle"),
										options: a.config.errWordHandle.list
									}, null, 8, ["modelValue", "label", "options"])]), (0, i._)("div", lt, [(0, i.Wm)(p, {
										class: "col",
										modelValue: a.config.recThres,
										"onUpdate:modelValue": t[4] || (t[4] = e => a.config.recThres = e),
										type: "number",
										label: e.$t("configure.errTextThres")
									}, null, 8, ["modelValue", "label"]), (0, i.Wm)(x, {
										class: "col",
										modelValue: a.config.keepLowScore,
										"onUpdate:modelValue": t[5] || (t[5] = e => a.config.keepLowScore = e),
										label: e.$t("configure.errTextHighlight")
									}, null, 8, ["modelValue", "label"])]), (0, i.Wm)(f, {
										outlined: "",
										modelValue: a.config.sortingType.value,
										"onUpdate:modelValue": t[6] || (t[6] = e => a.config.sortingType.value = e),
										label: e.$t("configure.sortingOfNewImages"),
										options: a.config.sortingType.list,
										"map-options": ""
									}, null, 8, ["modelValue", "label", "options"]), a.Advanced ? ((0, i.wg)(), (0, i.iD)("div", at, [(0, i._)("div", nt, [(0, i.Wm)(p, {
										class: "col",
										modelValue: a.config.unclipRadio,
										"onUpdate:modelValue": t[7] || (t[7] = e => a.config.unclipRadio = e),
										label: "Un clip radio"
									}, null, 8, ["modelValue"]), (0, i.Wm)(p, {
										class: "col",
										modelValue: a.config.limitSideLen,
										"onUpdate:modelValue": t[8] || (t[8] = e => a.config.limitSideLen = e),
										label: "limit side length"
									}, null, 8, ["modelValue"]), (0, i.Wm)(p, {
										class: "col",
										modelValue: a.config.splitThres,
										"onUpdate:modelValue": t[9] || (t[9] = e => a.config.splitThres = e),
										label: "split thres"
									}, null, 8, ["modelValue"]), (0, i.Wm)(p, {
										class: "col",
										modelValue: a.config.splitOverlap,
										"onUpdate:modelValue": t[10] || (t[10] = e => a.config.splitOverlap = e),
										label: "split overlap"
									}, null, 8, ["modelValue"])]), (0, i.Wm)(x, {
										modelValue: a.activeEruda,
										"onUpdate:modelValue": t[11] || (t[11] = e => a.activeEruda = e),
										label: "Eruda debug",
										onClick: r.changeActiveEruda
									}, null, 8, ["modelValue", "onClick"])])) : (0, i.kq)("", !0)])),
									_: 1
								})])),
								_: 1
							})])),
							_: 1
						})])),
						_: 1
					})])),
					_: 1
				}, 8, ["modelValue"])) : (0, i.kq)("", !0)
			}(0, i.Cn)();
			const st = {
				data() {
					return {
						activeEruda: !1,
						Advanced: !1,
						numConfigList: [],
						config: {
							errWordHandle: {
								value: "Normal",
								list: [{
									label: this.$t("configure.errWordHandle.Normal"),
									value: "Normal"
								}, {
									label: this.$t("configure.errWordHandle.Highlight"),
									value: "Highlight"
								}, {
									label: this.$t("configure.errWordHandle.IgnoreTwoEnds"),
									value: "IgnoreTwoEnds"
								}, {
									label: this.$t("configure.errWordHandle.IgnoreTwoEndsHighlistOther"),
									value: "IgnoreTwoEndsHighlistOther"
								}]
							},
							highlightErrWordThres: .6,
							recThres: .6,
							unclipRadio: 1.6,
							limitSideLen: 960,
							splitThres: 1,
							splitOverlap: 64,
							keepLowScore: !1,
							sortingType: {
								value: "byAddOrder",
								list: [{
									label: this.$t("configure.sortingType.byAddOrder"),
									value: "byAddOrder"
								}, {
									label: this.$t("configure.sortingType.byFileName"),
									value: "byFileName"
								}]
							}
						}
					}
				},
				props: ["modelValue"],
				emits: ["update:modelValue"],
				created() {
					for (const e in this.config) Object.hasOwnProperty.call(this.config, e) && "number" === typeof this.config[e] && this.numConfigList.push(e);
					console.log(this.numConfigList)
				},
				mounted() {
					this.activeEruda = "true" === localStorage.getItem("active-eruda"), P.Z.getToDict(this.config)
				},
				methods: {
					resetConfigure() {
						P.Z.reset(), P.Z.getToDict(this.config)
					},
					configTurnToNumber() {
						for (const e of this.numConfigList) "string" === typeof this.config[e] && (this.config[e] = parseFloat(this.config[e]))
					},
					saveConfigure() {
						this.configTurnToNumber(), P.Z.setFromDict(this.config), P.Z.save()
					},
					changeActiveEruda(e, t) {
						console.log("localStorage.setItem", this.activeEruda), localStorage.setItem("active-eruda", this.activeEruda ? "true" : "false")
					},
					onIconClicked() {
						this.Advanced || (void 0 === this.iconClickCnt && (this.iconClickCnt = 0), this.iconClickCnt++, 7 === this.iconClickCnt && (this.$q.notify({
							message: "打开高级设置",
							color: "blue",
							timeout: 500
						}), this.Advanced = !0))
					}
				}
			};
			var dt = o(8886);
			st.render = rt, st.__scopeId = "data-v-5c6cf792";
			const ct = st;
			oe()(st, "components", {
				QDialog: Ce.Z,
				QLayout: ke.Z,
				QHeader: Se.Z,
				QBar: _e.Z,
				QIcon: ee.Z,
				QSpace: De.Z,
				QBtn: We.Z,
				QFooter: Ve.Z,
				QToolbar: qe.Z,
				QPageContainer: Pe.Z,
				QPage: Le.Z,
				QForm: Me.Z,
				QInput: Be.Z,
				QSelect: Ze.Z,
				QToggle: dt.Z
			}), oe()(st, "directives", {
				ClosePopup: Ee.Z
			});
			let ut, mt = 1,
				gt = -1;
			const ht = {
				components: {
					ToolBtn: ie,
					ExportPdf: Fe,
					ExportTxt: ot,
					Configure: ct
				},
				data() {
					return {
						ExportPdfShow: !1,
						ExportTxtShow: !1,
						ConfigureShow: !1,
						RecoDataList: [],
						selectedItem: void 0,
						progressVal: 0,
						showMenu: !1,
						MenuItems: [],
						ToolsItems: [{
							label: "menu.exportPDF",
							func: function() {
								ut.ExportPdfShow = !0
							},
							icon: "o_picture_as_pdf",
							cond: this.listNotEmpty
						}, {
							label: "menu.exportTXT",
							cond: this.listNotEmpty,
							func: function() {
								ut.ExportTxtShow = !0
							},
							icon: "o_description"
						}, {
							label: "menu.deleteAllImages",
							func: this.onDeleteAll,
							cond: this.listNotEmpty,
							icon: "o_delete_forever"
						}, {
							label: "menu.reIdentifyAll",
							func: Q.reRecoAll,
							cond: this.listNotEmpty,
							icon: "o_restart_alt"
						}, {
							label: "menu.configure",
							func: function() {
								ut.ConfigureShow = !0
							},
							icon: "o_settings"
						}]
					}
				},
				created() {
					ut = this, Q.initList(ut.RecoDataList), ut.RecoDataList = Q.RecoDataList, f.addevent("RecognitionBegin", (() => {
						ut.progressVal = 0
					})), E.onProgress = function(e, t) {
						ut.progressVal = 50 * e + Math.round(t / 2), 100 === ut.progressVal && (ut.progressVal = 99)
					}, P.Z.addMonitor(["selectedItem"], this)
				},
				mounted() {
					f.addevent("WindowResize", this.onWindowResize, !0), P.Z.addMonitor("uiLangCode", (function() {
						ut.$nextTick((function() {
							ut.adjustToolbar(!0)
						}))
					}))
				},
				methods: {
					adjustToolbar(e) {
						gt = -1;
						const t = ut.$refs.gapLine.offsetWidth;
						if (t > 0 && 0 === ut.MenuItems.length || t <= 0 && 0 === ut.ToolsItems.length) mt = t;
						else {
							if ((mt > 0 || e) && t > 0) {
								const e = ut.MenuItems[ut.MenuItems.length - 1];
								ut.MenuItems.splice(ut.MenuItems.length - 1, 1), ut.ToolsItems.push(e), gt = setTimeout(ut.adjustToolbar, 100)
							} else if (t <= 0) {
								const e = ut.ToolsItems[ut.ToolsItems.length - 1];
								ut.ToolsItems.splice(ut.ToolsItems.length - 1, 1), ut.MenuItems.push(e), gt = setTimeout(ut.adjustToolbar, 100)
							}
							mt = t
						}
					},
					onWindowResize() {
						console.log("onWindowResize"), gt >= 0 && clearTimeout(gt), this.adjustToolbar(!0)
					},
					listNotEmpty() {
						return !Q.empty()
					},
					onUploadClick() {
						f.trig("UploadImage")
					},
					onPasteImage() {
						Q.addFromClipboard()
					},
					onItemClick(e) {
						Q.changeSelected(e.id)
					},
					onDeleteAll() {
						Q.deleteAll(), Q.selectedId > 0 && this.$q.notify({
							message: this.$t("message.waitIdentityFinish"),
							color: "red",
							timeout: 500
						})
					},
					onItemDelete(e) {
						e.isScaning ? this.$q.notify({
							message: this.$t("message.waitIdentityFinish"),
							color: "red",
							timeout: 500
						}) : Q.deleteItem(e.id)
					}
				},
				watch: {
					RecoDataList: {
						deep: !0,
						handler(e) {}
					}
				}
			};
			var pt = o(7369),
				ft = o(6941),
				xt = o(6122),
				wt = o(8506),
				vt = o(6335),
				bt = o(7011),
				It = o(3414),
				Tt = o(2035);
			ht.render = h, ht.__scopeId = "data-v-5b832c48";
			const yt = ht;

			function Ct(e, t, o, l, a, n) {
				return (0, i.wg)(), (0, i.iD)("input", {
					ref: "inputFile",
					type: "file",
					style: {
						display: "none"
					},
					onChange: t[0] || (t[0] = e => n.addImgPreview()),
					accept: "image/*",
					multiple: ""
				}, null, 544)
			}
			let kt;
			oe()(ht, "components", {
				QBtn: We.Z,
				QVirtualScroll: pt.Z,
				QInnerLoading: ft.Z,
				QCircularProgress: xt.Z,
				QSpinnerIos: wt.Z,
				QIcon: ee.Z,
				QSpace: De.Z,
				QMenu: vt.Z,
				QList: bt.Z,
				QItem: It.Z,
				QItemSection: Tt.Z
			}), oe()(ht, "directives", {
				ClosePopup: Ee.Z
			});
			const St = {
				data() {
					return {
						RecoDataList: []
					}
				},
				created() {
					kt = this, Q.initList(kt.RecoDataList), kt.RecoDataList = Q.RecoDataList, f.addevent("UploadImage", (() => {
						kt.$refs.inputFile.dispatchEvent(new MouseEvent("click"))
					}))
				},
				methods: {
					addImgPreview(e) {
						e || (e = this.$refs.inputFile.files);
						for (const t of e) {
							if (!t) return void console.log("error"); {
								if ("image" !== t.type.substring(0, 5)) return;
								const e = new FileReader;
								e.readAsDataURL(t), e.filename = t.name, e.onload = function(t) {
									Q.addImage(this.result, e.filename)
								}
							}
						}
						this.$refs.inputFile.value = ""
					}
				}
			};
			St.render = Ct;
			const _t = St;
			(0, i.dD)("data-v-3c28b0a9");
			const Dt = {
				key: 1,
				style: {
					height: "100%"
				}
			};

			function Wt(e, t, o, l, a, n) {
				const r = (0, i.up)("RecLangToolbar"),
					s = (0, i.up)("RViewImageText"),
					d = (0, i.up)("q-avatar"),
					c = (0, i.up)("RViewText"),
					u = (0, i.up)("q-splitter");
				return (0, i.wg)(), (0, i.iD)(i.HY, null, [(0, i.Wm)(r), (0, i._)("div", {
					class: "MainImageView",
					onClick: t[1] || (t[1] = (...e) => n.onMainImageViewClick && n.onMainImageViewClick(...e))
				}, [e.$q.screen.gt.sm ? ((0, i.wg)(), (0, i.j4)(u, {
					key: 0,
					modelValue: a.splitterModel,
					"onUpdate:modelValue": t[0] || (t[0] = e => a.splitterModel = e),
					style: {
						height: "100%"
					},
					"before-class": "NoScroll",
					"separator-class": {
						splitter_touch: e.$q.platform.has.touch,
						splitter_notouch: !e.$q.platform.has.touch,
						"bg-blue-grey-7": !0
					}
				}, {
					before: (0, i.w5)((() => [(0, i.Wm)(s)])),
					separator: (0, i.w5)((() => [(0, i.Wm)(d, {
						"text-color": "grey-1",
						size: e.$q.platform.has.touch ? "64px" : "46px",
						icon: "more_vert"
					}, null, 8, ["size"])])),
					after: (0, i.w5)((() => [(0, i.Wm)(c, {
						ref: "textView"
					}, null, 512)])),
					_: 1
				}, 8, ["modelValue", "separator-class"])) : (0, i.kq)("", !0), e.$q.screen.gt.sm ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.iD)("div", Dt, ["Image" == a.ViewMode || void 0 == a.selectedItem.text ? ((0, i.wg)(), (0, i.j4)(s, {
					key: 0
				})) : (0, i.kq)("", !0), "Text" == a.ViewMode && void 0 != a.selectedItem.text ? ((0, i.wg)(), (0, i.j4)(c, {
					key: 1,
					ref: "textView"
				}, null, 512)) : (0, i.kq)("", !0)]))])], 64)
			}(0, i.Cn)(), (0, i.dD)("data-v-5423f84b");
			const Vt = {
					class: "MainBox"
				},
				qt = {
					ref: "mainBox",
					class: "imagebox"
				},
				Pt = ["src"],
				Lt = {
					key: 0,
					class: "ToolBarPos ToolbarBorder"
				},
				Mt = {
					class: "Toolbar text-light-blue"
				},
				Bt = ["innerHTML"];

			function Zt(e, t, o, l, a, n) {
				const r = (0, i.up)("RotateText"),
					s = (0, i.up)("ToolBtn"),
					d = (0, i.up)("CommonBar"),
					c = (0, i.up)("q-spinner-box"),
					u = (0, i.up)("q-inner-loading");
				return (0, i.wg)(), (0, i.iD)(i.HY, null, [(0, i._)("div", Vt, [(0, i._)("div", qt, [void 0 != a.selectedItem.url ? ((0, i.wg)(), (0, i.iD)("img", {
					key: 0,
					ref: "img",
					id: "mainImage",
					ondragstart: "return false;",
					src: a.selectedItem.url
				}, null, 8, Pt)) : (0, i.kq)("", !0), a.selectedItem.text && a.selectedItem.imgWidth ? ((0, i.wg)(), (0, i.j4)(r, {
					key: 1,
					class: "poplayer",
					showBorder: a.showBorder,
					showText: a.showText,
					recoItem: a.selectedItem
				}, null, 8, ["showBorder", "showText", "recoItem"])) : (0, i.kq)("", !0)], 512)]), void 0 != a.selectedItem.text ? ((0, i.wg)(), (0, i.iD)("div", Lt, [(0, i._)("div", Mt, [e.$q.screen.gt.sm ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(s, {
					key: 0,
					IconName: "o_article",
					label: e.$t("RViewImageText.text"),
					onClick: t[0] || (t[0] = e => n.switchViewModel("Text"))
				}, null, 8, ["label"])), (0, i.Wm)(s, {
					IconName: "o_text_format",
					label: "",
					disable: !a.showText,
					onClick: t[1] || (t[1] = e => a.showText = !a.showText)
				}, null, 8, ["disable"]), (0, i.Wm)(s, {
					IconName: "o_crop_16_9",
					label: "",
					disable: !a.showBorder,
					onClick: t[2] || (t[2] = e => a.showBorder = !a.showBorder)
				}, null, 8, ["disable"])]), (0, i.Wm)(d, {
					noteText: a.imageScaleVal
				}, null, 8, ["noteText"])])) : (0, i.kq)("", !0), (0, i.Wm)(u, {
					showing: a.selectedItem.isScaning || void 0 == a.selectedItem.url
				}, {
					default: (0, i.w5)((() => [a.selectedItem.isScaning ? ((0, i.wg)(), (0, i.j4)(c, {
						key: 0,
						size: "80px",
						color: "primary"
					})) : (0, i.kq)("", !0), void 0 == a.selectedItem.url ? ((0, i.wg)(), (0, i.iD)("h6", {
						key: 1,
						class: "text-grey-13",
						innerHTML: e.$t("tips.addImage") + "<br>" + (e.$q.platform.is.mobile ? "" : e.$t("tips.readClipboard") + "<br>" + e.$t("tips.CtrlV"))
					}, null, 8, Bt)) : (0, i.kq)("", !0)])),
					_: 1
				}, 8, ["showing"])], 64)
			}(0, i.Cn)();
			let $t = {
					lastId: 0
				},
				Rt = !1;

			function zt(e) {
				let t = e.getAttribute("ImgHandleDataID");
				if (void 0 == t) {
					let o = {
						ele: e,
						srcSize: [e.offsetWidth, e.offsetHeight],
						translate: [0, 0],
						scale: 1,
						maxScaleVal: 10,
						minScaleVal: 128 / Math.max(e.offsetWidth, e.offsetHeight),
						zoomOrigin: [0, 0],
						lastTouchTime: 0,
						applyTransform() {
							this.onScale && this.onScale(this.scale), this.ele.style.transform = "translate(" + this.translate[0].toString() + "px, " + this.translate[1].toString() + "px)scale(" + this.scale.toString() + ")"
						},
						move(e, t) {
							e += this.translate[0], t += this.translate[1];
							let o = this.ele.parentNode,
								i = o.offsetWidth,
								l = o.offsetHeight,
								a = this.ele.offsetWidth * this.scale,
								n = this.ele.offsetHeight * this.scale,
								r = Math.max(i / 2, i - a),
								s = Math.min(i / 2 - a, 0);
							e > r && (e = r), e < s && (e = s), r = Math.max(l / 2, l - n), s = Math.min(l / 2 - n, 0), t > r && (t = r), t < s && (t = s), this.translate[0] = e, this.translate[1] = t
						},
						setPos(e, t) {
							this.translate[0] = e, this.translate[1] = t
						},
						zoom(e) {
							let t = this.zoomOrigin[0] * this.scale,
								o = this.zoomOrigin[1] * this.scale,
								i = this.scale * e;
							this.scale < 1 && i > 1 || this.scale > 1 && i < 1 ? this.scale = 1 : this.scale = i, this.scale > this.maxScaleVal ? this.scale = this.maxScaleVal : this.scale < this.minScaleVal && (this.scale = this.minScaleVal);
							let l = this.zoomOrigin[0] * this.scale,
								a = this.zoomOrigin[1] * this.scale;
							this.move(t - l, o - a)
						},
						setZoomOrigin(e, t) {
							this.zoomOrigin[0] = (e - this.translate[0]) / this.scale, this.zoomOrigin[1] = (t - this.translate[1]) / this.scale
						},
						fillToParent() {
							let e = this.ele.parentNode;
							const t = 5,
								o = 5;
							let i = e.offsetWidth,
								l = e.offsetHeight,
								a = this.ele.offsetWidth,
								n = this.ele.offsetHeight,
								r = Math.min((l - 2 * t) / n, (i - 2 * o) / a);
							r > 1 && (r = 1), this.scale = r, a *= r, n *= r;
							let s = (i - a) / 2,
								d = (l - n) / 2;
							this.setPos(s, d)
						}
					};
					t = $t.lastId.toString(), $t.lastId++, $t[t] = o, e.setAttribute("ImgHandleDataID", t)
				}
				return $t[t]
			}

			function Et(e, t) {
				let o = Math.sqrt(Math.pow(e.pageX - t.pageX, 2) + Math.pow(e.pageX - t.pageX, 2));
				return o
			}

			function Ft(e) {
				e.preventDefault();
				let t = zt(this);
				e || window.event;
				if (t.isMoved = !1, e.touches.length >= 2) clearTimeout(t.OneTouchTimer), t.multPointStart = e.touches, t.setZoomOrigin(e.touches[0].pageX + (e.touches[1].pageX - e.touches[0].pageX) / 2, e.touches[0].pageY + (e.touches[1].pageY - e.touches[0].pageY) / 2), console.log("多点触摸事件");
				else {
					let o = Date.now() - t.lastTouchTime;
					t.lastTouchTime = Date.now(), t.startPosition = [e.touches[0].pageX, e.touches[0].pageY], o > 0 && o <= 250 ? (console.log("zoom", e.touches[0]), t.setZoomOrigin(e.touches[0].pageX, e.touches[0].pageY - this.offsetTop), clearTimeout(t.OneTouchTimer), t.isDoubleTouch = !0) : (t.OneTouchTimer = setTimeout((function() {
						console.log("单击事件", t, e), t.onTap && t.onTap(e)
					}), 350), t.isDoubleTouch = !1)
				}
			}

			function Ht(e) {
				e.preventDefault();
				let t = zt(this);
				t.isMoved = !0, clearTimeout(t.OneTouchTimer), e.touches.length >= 2 ? (console.log("e.touches.length >= 2"), Xt(t, e)) : t.isDoubleTouch ? Yt(t, e) : Gt(t, e)
			}

			function Qt(e) {
				e.preventDefault();
				let t = zt(this);
				1 == e.touches.length && (t.startPosition = [e.touches[0].pageX, e.touches[0].pageY]), t.isMoved || t.isDoubleTouch && jt(t)
			}

			function Ot(e) {
				if ("SPAN" == e.target.tagName) return void(Rt = !1);
				e.preventDefault();
				let t = zt(this);
				t.fillToParent(), t.applyTransform()
			}

			function Nt(e) {
				e.preventDefault();
				let t = zt(this);
				t.setZoomOrigin(e.layerX, e.layerY);
				const o = e.deltaY > 0 ? .8 : 1.2;
				t.zoom(o), t.applyTransform()
			}

			function Ut(e) {
				if (1 == e.button) return;
				if ("SPAN" == e.target.tagName) return void(Rt = !1);
				e.preventDefault(), Rt = !0;
				let t = zt(this);
				t.startPosition = [e.layerX, e.layerY]
			}

			function At(e) {
				if (1 == e.button) {
					let e = zt(this);
					return e.fillToParent(), void e.applyTransform()
				}
			}

			function jt(e) {
				e.fillToParent(), e.applyTransform()
			}

			function Xt(e, t) {
				let o = t.touches,
					i = Et(o[0], o[1]) / Et(e.multPointStart[0], e.multPointStart[1]);
				e.zoom(i), e.multPointStart = t.touches, e.applyTransform()
			}

			function Yt(e, t) {
				let o = 1 + (e.startPosition[1] - t.touches[0].pageY) / 150;
				e.zoom(o), e.applyTransform(), e.startPosition = [t.touches[0].pageX, t.touches[0].pageY]
			}

			function Gt(e, t) {
				let o = [t.touches[0].pageX, t.touches[0].pageY],
					i = [o[0] - e.startPosition[0], o[1] - e.startPosition[1]];
				e.startPosition = o, e.move(i[0], i[1]), e.applyTransform()
			}

			function Jt(e) {
				if (!Rt || 1 != e.buttons) return;
				e.preventDefault();
				let t = zt(this),
					o = [e.layerX, e.layerY],
					i = [o[0] - t.startPosition[0], o[1] - t.startPosition[1]];
				t.startPosition = o, t.move(i[0], i[1]), t.applyTransform()
			}

			function Kt(e) {
				let t = e.getAttribute("ImgHandleDataID");
				t && delete $t[t]
			}

			function eo(e) {
				let t = e.getAttribute("ImgHandleDataID");
				void 0 == t ? (e.addEventListener("touchstart", Ft, !1), e.addEventListener("touchmove", Ht, !1), e.addEventListener("touchend", Qt, !1), e.addEventListener("mousewheel", Nt, !1), e.addEventListener("dblclick", Ot, !1), e.addEventListener("mousedown", Ut, !1), e.addEventListener("mouseup", At, !1), e.addEventListener("mousemove", Jt, !1), e.style.transformOrigin = "0 0") : Kt(e), e.removeAttribute("ImgHandleDataID");
				let o = zt(e);
				return o.fillToParent(), o.applyTransform(), o
			}(0, i.dD)("data-v-b868e8b2");
			const to = {
					class: "PosTextBoxDiv"
				},
				oo = ["onBlur", "onClick"],
				io = ["innerHTML"];

			function lo(e, t, o, l, a, s) {
				return (0, i.wg)(), (0, i.iD)("div", to, [(0, i._)("div", {
					class: "PosTextBox",
					style: (0, n.j5)(a.dCSS),
					ref: "PosTextBox"
				}, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(o.recoItem.detail, (e => (0, i.wy)(((0, i.wg)(), (0, i.iD)("div", {
					id: "rotateBox",
					class: (0, n.C_)(["rotateBox", {
						rotateBoxSelected: o.showText && !this.textBgTransparent && e.selected,
						"bg-deep-orange-2": o.showText && !this.textBgTransparent && !e.selected && e.text !== e.srctext,
						"bg-blue-grey-3": o.showText && !this.textBgTransparent && !e.selected && e.text === e.srctext,
						rotateBoxBorder: o.showBorder && !e.selected,
						rotateBoxBorderSelected: o.showBorder && e.selected
					}]),
					onBlur: t => s.textChange(t, e),
					onClick: t => s.textClick(t, e),
					key: e.rect,
					style: (0, n.j5)(e.textCss + s.getRotateBoxColorStyle())
				}, [o.showText ? ((0, i.wg)(), (0, i.iD)("div", {
					key: 0,
					style: (0, n.j5)(e.textTransform ? e.textTransform : ""),
					class: "tramsformOriLT"
				}, [(0, i._)("span", {
					class: (0, n.C_)({
						errorTextColor: e.score < a.recThres && !e.textEdited,
						editedTextColor: e.textEdited
					}),
					innerHTML: s.getDisplayText(e)
				}, null, 10, io)], 4)) : (0, i.kq)("", !0)], 46, oo)), [
					[r.F8, e.score >= a.recThres || a.keepLowScore]
				]))), 128))], 4)])
			}
			let ao, no;

			function ro(e, t) {
				return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y))
			}

			function so(e) {
				for (let t = 0; t < e.detail.length; t++) {
					const o = e.detail[t];
					if (o.textCss) return;
					o.textCss = "transform: matrix(" + o.trMat[0].toString() + ", " + o.trMat[1].toString() + ", " + o.trMat[2].toString() + ", " + o.trMat[3].toString() + ", " + o.trMat[4].toString() + ", " + o.trMat[5].toString() + ");";
					const i = ro(e.detail[t].rect[0], e.detail[t].rect[1]),
						l = ro(e.detail[t].rect[1], e.detail[t].rect[2]),
						a = Math.min(i, l),
						n = Math.max(i, l);
					e.detail[t].textCss += "width: " + n.toString() + "px;height: " + a.toString() + "px;";
					const r = co(e.detail[t].text, a.toString() + "px");
					let s = a;
					if (n > r + 5) {
						const o = e.detail[t].text.length,
							i = (n - r) / (o - 1);
						e.detail[t].textCss += "letter-spacing: " + i.toString() + "px;"
					} else if (n < r) {
						const e = n / r;
						s = a * e
					}
					s < 12 && (e.detail[t].textTransform = "transform: scale(" + (s / 12)
						.toString() + ");", s = 12), e.detail[t].textCss += "font-size: " + s.toString() + "px;"
				}
			}

			function co(e, t) {
				const o = co.canvas || (co.canvas = document.createElement("canvas")),
					i = o.getContext("2d");
				i.font = t + " " + no;
				const l = i.measureText(e);
				return l.width
			}(0, i.Cn)();
			const uo = {
				data() {
					return {
						dCSS: "",
						ctWidth: 0,
						ctHeight: 0,
						errWordHandle: "Normal",
						recThres: .6,
						keepLowScore: !1,
						highlightErrWordThres: .6,
						textBackground: "#faebd7",
						textColor: "#000000",
						textBgTransparent: !1
					}
				},
				props: ["recoItem", "showBorder", "showText"],
				emits: ["onExitFullScreen"],
				methods: {
					textClick(e, t) {
						e.stopPropagation(), f.set("SingleTextChoose", t)
					},
					getRotateBoxColorStyle() {
						let e = "";
						return e += "color:" + this.textColor + ";", e
					},
					textChange(e, t) {
						e.target.innerText !== t.text ? t.textEdited = e.target.innerText : t.textEdited = "", this.$forceUpdate()
					},
					getDisplayText(e) {
						if (e.text !== e.srctext) return e.text;
						if ("Normal" === this.errWordHandle) return e.text;
						let t, o = "",
							i = !1,
							l = -1;
						const a = this.errWordHandle.indexOf("Highlight") >= 0 ? "<font color=red>" : "",
							n = this.errWordHandle.indexOf("Highlight") >= 0 ? "</font>" : "";
						for (let r = 0; r < e.wordScore.length; r++) {
							const s = e.wordScore[r];
							s < ao.highlightErrWordThres ? (i || (o += a), i = !0) : (i && (o += n), l < 0 && (l = o.length), t = o.length + 1, i = !1), (s >= ao.highlightErrWordThres || "Ignore" !== this.errWordHandle) && (o += e.text[r])
						}
						return i && (o += n), this.errWordHandle.indexOf("Ignore") >= 0 ? l < 0 ? "" : o.slice(l, t) : o
					},
					updata(e) {
						if (!this.$refs.PosTextBox) return;
						const t = this.$refs.PosTextBox.parentNode;
						this.ctHeight = t.offsetHeight, this.ctWidth = t.offsetWidth;
						const o = e.imgWidth,
							i = e.imgHeight;
						this.dCSS = "width: " + o.toString() + "px;height: " + i.toString() + "px;", so(e)
					}
				},
				created() {
					ao = this, P.Z.addMonitor(["errWordHandle", "highlightErrWordThres", "recThres", "keepLowScore", "textBackground", "textColor", "textBgTransparent"], ao), window.onresize = () => (() => {
						ao.updata(ao.recoItem)
					})()
				},
				mounted: function() {
					this.updata(this.recoItem), no = window.getComputedStyle(this.$refs.PosTextBox)
						.fontFamily
				},
				watch: {
					recoItem(e, t) {
						this.updata(e)
					}
				}
			};
			uo.render = lo, uo.__scopeId = "data-v-b868e8b2";
			const mo = uo;
			(0, i.dD)("data-v-15ce297a");
			const go = {
					class: "Toolbar text-light-blue"
				},
				ho = {
					class: "text-grey-6 BtnBound iconlabel"
				},
				po = {
					key: 1,
					class: "text-red-12 BtnBound iconlabel"
				};

			function fo(e, t, o, l, a, r) {
				const s = (0, i.up)("ToolBtn"),
					d = (0, i.up)("q-separator");
				return (0, i.wg)(), (0, i.iD)("div", go, [(0, i._)("div", ho, [(0, i._)("span", null, (0, n.zw)(o.noteText), 1)]), (0, i.Wm)(s, {
					id: "reRecognition",
					IconName: "o_restart_alt",
					onClick: r.onRestartClick,
					label: e.$q.screen.gt.md ? e.$t("bar.reRecognition") : ""
				}, null, 8, ["onClick", "label"]), (0, i.Wm)(s, {
					IconName: "o_delete_outline",
					onClick: r.onDeleteClick,
					label: ""
				}, null, 8, ["onClick"]), a.selectedItem.detail.langCode != a.recLangCode ? ((0, i.wg)(), (0, i.j4)(d, {
					key: 0,
					vertical: "",
					inset: "",
					spaced: ""
				})) : (0, i.kq)("", !0), a.selectedItem.detail.langCode != a.recLangCode ? ((0, i.wg)(), (0, i.iD)("div", po, [(0, i._)("span", null, (0, n.zw)(e.$t("langname." + a.selectedItem.detail.langCode)), 1)])) : (0, i.kq)("", !0)])
			}(0, i.Cn)();
			const xo = {
				components: {
					ToolBtn: ie
				},
				data() {
					return {
						selectedItem: {
							url: "",
							text: void 0
						},
						showBorder: !1,
						showText: !0,
						recLangCode: ""
					}
				},
				props: {
					noteText: {
						default: ""
					}
				},
				created() {
					P.Z.addMonitor(["selectedItem", "recLangCode"], this)
				},
				methods: {
					onRestartClick() {
						Q.reReco()
					},
					onDeleteClick() {
						Q.deleteItem(Q.selectedId)
					}
				}
			};
			var wo = o(5869);
			xo.render = fo, xo.__scopeId = "data-v-15ce297a";
			const vo = xo;
			let bo, Io;
			oe()(xo, "components", {
				QSeparator: wo.Z
			});
			const To = {
				components: {
					RotateText: mo,
					ToolBtn: ie,
					CommonBar: vo
				},
				data() {
					return {
						selectedItem: {
							url: void 0,
							text: void 0
						},
						showBorder: !1,
						showText: !0,
						imageScaleVal: "100%"
					}
				},
				created() {
					P.Z.addMonitor(["selectedItem"], this)
				},
				beforeUnmount() {
					window.onresize = null, Kt(Io.$refs.mainBox), f.rmevent("WindowResize", this.onWindowResize)
				},
				mounted() {
					Io = this, f.addevent("WindowResize", this.onWindowResize, !0)
				},
				watch: {
					selectedItem(e) {
						this.onSelectedChangeCB(e.id)
					}
				},
				methods: {
					switchViewModel(e) {
						f.set("ViewModel", e)
					},
					onWindowResize() {
						Io.$refs.mainBox && Io.selectedItem.imgWidth && (console.log("onWindowResize"), bo.fillToParent(), bo.applyTransform())
					},
					onScale(e) {
						this.imageScaleVal = Math.round(100 * e)
							.toString() + "%"
					},
					onTap(e) {
						const t = Io.$refs.mainBox;
						let o = e.target;
						while (o !== t) {
							if ("rotateBox" === o.id) {
								o._vei.onClick(e);
								break
							}
							o = o.parentNode
						}
						console.log("on tap ", e.target)
					},
					onSelectedChangeCB(e) {
						Io.$nextTick((function() {
							Io.$refs.mainBox && Io.selectedItem.imgWidth && (Io.$refs.mainBox.style.width = Io.selectedItem.imgWidth + "px", Io.$refs.mainBox.style.height = Io.selectedItem.imgHeight + "px", bo = eo(Io.$refs.mainBox), bo.onTap = Io.onTap, Io.onScale(bo.scale), bo.onScale = Io.onScale)
						}))
					}
				}
			};
			var yo = o(5862);
			To.render = Zt, To.__scopeId = "data-v-5423f84b";
			const Co = To;
			oe()(To, "components", {
				QInnerLoading: ft.Z,
				QSpinnerBox: yo.Z
			}), (0, i.dD)("data-v-40844b04");
			const ko = {
					key: 0,
					ref: "mainBox",
					class: "textbox"
				},
				So = ["wrap"],
				_o = {
					key: 1,
					class: "ToolBarPos ToolbarBorder"
				},
				Do = {
					class: "Toolbar text-light-blue"
				},
				Wo = {
					class: "text-grey-13"
				};

			function Vo(e, t, o, l, a, s) {
				const d = (0, i.up)("ToolBtn"),
					c = (0, i.up)("q-icon"),
					u = (0, i.up)("q-item-section"),
					m = (0, i.up)("q-item"),
					g = (0, i.up)("q-separator"),
					h = (0, i.up)("q-list"),
					p = (0, i.up)("q-menu"),
					f = (0, i.up)("q-space"),
					x = (0, i.up)("CommonBar"),
					w = (0, i.up)("q-inner-loading"),
					v = (0, i.Q2)("close-popup");
				return (0, i.wg)(), (0, i.iD)(i.HY, null, [void 0 != a.selectedItem.text ? ((0, i.wg)(), (0, i.iD)("div", ko, [(0, i.wy)((0, i._)("textarea", {
					class: "textItem",
					wrap: a.wordWrap ? "" : "off",
					"onUpdate:modelValue": t[0] || (t[0] = e => a.textEdited = e)
				}, null, 8, So), [
					[r.nr, a.textEdited]
				])], 512)) : (0, i.kq)("", !0), void 0 != a.selectedItem.text ? ((0, i.wg)(), (0, i.iD)("div", _o, [(0, i._)("div", Do, [e.$q.screen.gt.sm ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(d, {
					key: 0,
					IconName: "o_image",
					label: e.$t("RViewText.Image"),
					onClick: t[1] || (t[1] = e => s.switchViewModel("Image"))
				}, null, 8, ["label"])), (0, i.Wm)(d, {
					id: "copyText",
					IconName: "o_content_copy",
					IconSize: "27px",
					label: e.$t("RViewText.Copy"),
					onClick: t[2] || (t[2] = () => {
						s.copyText()
					})
				}, null, 8, ["label"]), (0, i._)("div", null, [(0, i.Wm)(d, {
					IconName: "o_menu",
					IconSize: "27px",
					label: e.$t("RViewText.layout")
				}, null, 8, ["label"]), (0, i.Wm)(p, {
					modelValue: a.showMenu,
					"onUpdate:modelValue": t[3] || (t[3] = e => a.showMenu = e)
				}, {
					default: (0, i.w5)((() => [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.MenuItems, (t => ((0, i.wg)(), (0, i.j4)(h, {
						dense: "",
						key: t.label
					}, {
						default: (0, i.w5)((() => ["separator" != t.label ? (0, i.wy)(((0, i.wg)(), (0, i.j4)(m, {
							key: 0,
							clickable: "",
							onClick: t.func
						}, {
							default: (0, i.w5)((() => [(0, i.Wm)(u, {
								avatar: ""
							}, {
								default: (0, i.w5)((() => [(0, i.Wm)(c, {
									color: t.cond() ? "primary" : "grey",
									name: t.icon
								}, null, 8, ["color", "name"])])),
								_: 2
							}, 1024), (0, i.Wm)(u, null, {
								default: (0, i.w5)((() => [(0, i.Uk)((0, n.zw)(e.$t(t.label)), 1)])),
								_: 2
							}, 1024)])),
							_: 2
						}, 1032, ["onClick"])), [
							[v]
						]) : (0, i.kq)("", !0), "separator" === t.label ? ((0, i.wg)(), (0, i.j4)(g, {
							key: 1
						})) : (0, i.kq)("", !0)])),
						_: 2
					}, 1024)))), 128))])),
					_: 1
				}, 8, ["modelValue"])]), (0, i.Wm)(f)]), e.$q.screen.gt.sm ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(x, {
					key: 0
				}))])) : (0, i.kq)("", !0), (0, i.Wm)(w, {
					showing: "" === a.selectedItem.text
				}, {
					default: (0, i.w5)((() => [(0, i._)("h3", Wo, (0, n.zw)(e.$t("RViewText.noDetectText")), 1)])),
					_: 1
				}, 8, ["showing"])], 64)
			}(0, i.Cn)();
			var qo = o(7939);
			let Po;
			const Lo = {
				components: {
					ToolBtn: ie,
					CommonBar: vo
				},
				data() {
					return {
						textEdited: "",
						selectedItem: {},
						showMenu: !1,
						wordWrap: !0,
						MenuItems: [{
							label: "textLayoutMenu.CombineLine",
							func: function() {
								Po.setLayoutMode("CombineLine")
							},
							icon: "remove",
							cond: function() {
								return "CombineLine" === Po.selectedItem.layoutMode
							}
						}, {
							label: "textLayoutMenu.Auto",
							func: function() {
								Po.setLayoutMode("Auto")
							},
							icon: "o_hdr_auto",
							cond: function() {
								return "Auto" === Po.selectedItem.layoutMode
							}
						}, {
							label: "textLayoutMenu.SplitLine",
							func: function() {
								Po.setLayoutMode("SplitLine")
							},
							icon: "o_receipt",
							cond: function() {
								return "SplitLine" === Po.selectedItem.layoutMode
							}
						}, {
							label: "separator"
						}, {
							label: "textLayoutMenu.WordWrap",
							func: function() {
								Po.wordWrap = !Po.wordWrap
							},
							icon: "o_subdirectory_arrow_left",
							cond: function() {
								return Po.wordWrap
							}
						}]
					}
				},
				created() {
					Po = this, f.addevent("SeclectedRecoStateChanged", Po.onSeclectedRecoStateChanged), P.Z.addMonitor(["selectedItem"], this)
				},
				beforeUnmount() {
					f.rmevent("SeclectedRecoStateChanged", Po.onSeclectedRecoStateChanged)
				},
				mounted() {
					this.textEdited = this.selectedItem.text
				},
				methods: {
					onSeclectedRecoStateChanged() {
						this.textEdited = this.selectedItem.text
					},
					switchViewModel(e) {
						f.set("ViewModel", e)
					},
					setLayoutMode(e) {
						this.selectedItem.layoutMode = e, Q.refreshItemText(this.selectedItem)
					},
					copyText() {
						if (!Po.textEdited) return;
						const e = (0, qo.Z)(Po.textEdited);
						e ? this.$q.notify({
							message: this.$t("message.copySuccess"),
							color: "blue",
							timeout: 500
						}) : this.$q.notify({
							message: this.$t("message.copyFailed"),
							color: "red",
							timeout: 500
						})
					}
				}
			};
			Lo.render = Vo, Lo.__scopeId = "data-v-40844b04";
			const Mo = Lo;
			oe()(Lo, "components", {
				QMenu: vt.Z,
				QList: bt.Z,
				QItem: It.Z,
				QItemSection: Tt.Z,
				QIcon: ee.Z,
				QSeparator: wo.Z,
				QSpace: De.Z,
				QInnerLoading: ft.Z
			}), oe()(Lo, "directives", {
				ClosePopup: Ee.Z
			}), (0, i.dD)("data-v-577ad580");
			const Bo = {
					class: "Toolbar RecLangToolbar text-light-blue"
				},
				Zo = {
					class: "row"
				},
				$o = {
					key: 0,
					class: "text-grey-6 BtnBound iconlabel"
				},
				Ro = {
					class: "text-weight-bold"
				};

			function zo(e, t, o, l, a, r) {
				const s = (0, i.up)("ToolBtn"),
					d = (0, i.up)("q-item-section"),
					c = (0, i.up)("q-item"),
					u = (0, i.up)("q-list"),
					m = (0, i.up)("q-menu"),
					g = (0, i.up)("q-linear-progress"),
					h = (0, i.up)("q-space"),
					p = (0, i.up)("q-card-section"),
					f = (0, i.up)("q-card"),
					x = (0, i.up)("q-dialog"),
					w = (0, i.Q2)("close-popup");
				return (0, i.wg)(), (0, i.iD)(i.HY, null, [(0, i._)("div", Bo, [(0, i._)("div", null, [(0, i._)("div", Zo, [(0, i.Wm)(s, {
					label: e.$t("identityLanguage") + " " + e.$t("langname." + a.recLangCode),
					IconName: "o_subtitles"
				}, null, 8, ["label"]), a.showProgress ? ((0, i.wg)(), (0, i.iD)("div", $o, [(0, i._)("span", null, (0, n.zw)(e.$t("LangToolbar.loading")) + (0, n.zw)(a.progressVal) + "%", 1)])) : (0, i.kq)("", !0)]), (0, i.Wm)(m, {
					modelValue: a.showLangMenu,
					"onUpdate:modelValue": t[0] || (t[0] = e => a.showLangMenu = e)
				}, {
					default: (0, i.w5)((() => [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(a.langList, (t => ((0, i.wg)(), (0, i.j4)(u, {
						dense: "",
						style: {
							"min-width": "100px"
						},
						key: t
					}, {
						default: (0, i.w5)((() => [(0, i.wy)((0, i.Wm)(c, {
							onClick: e => r.onRecLangChang(t),
							clickable: ""
						}, {
							default: (0, i.w5)((() => [(0, i.Wm)(d, null, {
								default: (0, i.w5)((() => [(0, i.Uk)((0, n.zw)(e.$t("langname." + t)), 1)])),
								_: 2
							}, 1024)])),
							_: 2
						}, 1032, ["onClick"]), [
							[w]
						])])),
						_: 2
					}, 1024)))), 128))])),
					_: 1
				}, 8, ["modelValue"])])]), a.showProgressDialog ? ((0, i.wg)(), (0, i.j4)(x, {
					key: 0,
					modelValue: !0,
					onHide: t[1] || (t[1] = t => e.$emit("update:modelValue", !1)),
					seamless: "",
					position: "bottom"
				}, {
					default: (0, i.w5)((() => [(0, i.Wm)(f, {
						style: {
							width: "350px"
						}
					}, {
						default: (0, i.w5)((() => [(0, i.Wm)(g, {
							value: a.progressVal / 100,
							color: "pink"
						}, null, 8, ["value"]), (0, i.Wm)(p, {
							class: "row items-center no-wrap"
						}, {
							default: (0, i.w5)((() => [(0, i._)("div", Ro, (0, n.zw)(e.$t("LangToolbar.loadingTips")), 1), (0, i.Wm)(h)])),
							_: 1
						})])),
						_: 1
					})])),
					_: 1
				})) : (0, i.kq)("", !0)], 64)
			}
			let Eo;
			(0, i.Cn)();
			const Fo = {
				components: {
					ToolBtn: ie
				},
				data() {
					return {
						progressVal: 0,
						showLangMenu: !1,
						langList: q.langList,
						recLangCode: "zh-CHS",
						showProgress: !1,
						showProgressDialog: !1
					}
				},
				mounted() {
					Eo = this, this.recLangCode = P.Z.get("recLangCode"), f.addevent("recoErrByNoParams", (function() {
						Eo.showProgressDialog = !0
					})), E.onprogress = function(e, t) {
						Eo.progressVal = Math.round(e / t * 100)
					}, E.onSetLangFinish = function() {
						P.Z.save(), Eo.showProgress = !1, Eo.showProgressDialog = !1, Eo.progressVal = 0, console.log("antOcr.onSetLangFinish"), Q.recognitionImage()
					}, E.onSetLangBegin = function(e) {
						Eo.showProgress = !0, Eo.progressVal = 0, Eo.langname = e
					}, E.setLang(this.recLangCode)
				},
				methods: {
					onRecLangChang(e) {
						this.recLangCode !== e && (E.isBusy ? this.$q.notify({
							message: this.$t("message.waitIdentityFinish"),
							color: "red",
							timeout: 500
						}) : (E.setLang(e), P.Z.set("recLangCode", e), this.recLangCode = e))
					}
				}
			};
			Fo.render = zo, Fo.__scopeId = "data-v-577ad580";
			const Ho = Fo;
			oe()(Fo, "components", {
				QMenu: vt.Z,
				QList: bt.Z,
				QItem: It.Z,
				QItemSection: Tt.Z,
				QDialog: Ce.Z,
				QCard: $e.Z,
				QLinearProgress: Re.Z,
				QCardSection: ze.Z,
				QSpace: De.Z
			}), oe()(Fo, "directives", {
				ClosePopup: Ee.Z
			});
			const Qo = {
				components: {
					RViewImageText: Co,
					RViewText: Mo,
					RecLangToolbar: Ho
				},
				data() {
					return {
						splitterModel: 60,
						ViewMode: "Text",
						selectedItem: {
							url: "",
							text: void 0
						}
					}
				},
				methods: {
					switchViewModel(e) {
						this.ViewMode !== e && (this.ViewMode = e)
					},
					onMainImageViewClick() {
						f.trig("MainImageViewClick")
					}
				},
				watch: {
					splitterModel(e) {
						f.trig("WindowResize")
					}
				},
				created() {
					P.Z.addMonitor(["selectedItem"], this), f.addevent("ViewModel", this.switchViewModel)
				}
			};
			var Oo = o(9723),
				No = o(5096);
			Qo.render = Wt, Qo.__scopeId = "data-v-3c28b0a9";
			const Uo = Qo;
			oe()(Qo, "components", {
				QSplitter: Oo.Z,
				QAvatar: No.Z
			}), (0, i.dD)("data-v-869eee36");
			const Ao = {
					style: {
						height: "10rem"
					}
				},
				jo = {
					style: {
						height: "50%"
					},
					class: "bg-white imageDiv"
				},
				Xo = {
					ref: "mainBox",
					class: "imagebox"
				},
				Yo = {
					ref: "img",
					ondragstart: "return false;",
					src: ""
				},
				Go = {
					style: {
						height: "50%"
					},
					class: "bg-white"
				};

			function Jo(e, t, o, l, a, s) {
				const d = (0, i.up)("q-btn"),
					c = (0, i.up)("q-space"),
					u = (0, i.up)("q-bar"),
					m = (0, i.up)("q-dialog");
				return (0, i.wg)(), (0, i.j4)(m, {
					modelValue: a.dialog,
					"onUpdate:modelValue": t[4] || (t[4] = e => a.dialog = e),
					"content-class": "mainLayout",
					"full-width": "",
					seamless: "",
					position: a.position
				}, {
					default: (0, i.w5)((() => [(0, i._)("div", null, [(0, i.Wm)(u, {
						class: "bg-blue-grey-3"
					}, {
						default: (0, i.w5)((() => [(0, i._)("div", null, (0, n.zw)(a.curIndex + 1) + "/" + (0, n.zw)(a.itemLength), 1), (0, i.Wm)(d, {
							disable: !(a.curIndex > 0),
							dense: "",
							flat: "",
							icon: "o_chevron_left",
							label: "",
							onClick: t[0] || (t[0] = e => s.jumpTo(-1))
						}, null, 8, ["disable"]), (0, i.Wm)(d, {
							disable: !(a.curIndex + 1 < a.itemLength),
							icon: "o_chevron_right",
							dense: "",
							flat: "",
							label: "",
							onClick: t[1] || (t[1] = e => s.jumpTo(1))
						}, null, 8, ["disable"]), (0, i.Wm)(d, {
							disable: a.textItem.text == a.textVal,
							dense: "",
							flat: "",
							icon: "o_done",
							label: e.$t("SingleText.modify"),
							onClick: s.TextModified
						}, null, 8, ["disable", "label", "onClick"]), (0, i.Wm)(d, {
							disable: a.textItem.text == a.textItem.srctext,
							dense: "",
							flat: "",
							icon: "o_undo",
							label: e.$t("SingleText.restore"),
							onClick: s.TextReset
						}, null, 8, ["disable", "label", "onClick"]), (0, i.Wm)(d, {
							dense: "",
							flat: "",
							icon: "o_delete",
							class: "text-red",
							label: e.$t("SingleText.delete"),
							onClick: s.TextDelete
						}, null, 8, ["label", "onClick"]), (0, i.Wm)(c), (0, i.Wm)(d, {
							dense: "",
							flat: "",
							icon: "close",
							onClick: t[2] || (t[2] = e => a.dialog = !1)
						})])),
						_: 1
					}), (0, i._)("div", Ao, [(0, i._)("div", jo, [(0, i._)("div", Xo, [(0, i._)("img", Yo, null, 512)], 512)]), (0, i._)("div", Go, [(0, i.wy)((0, i._)("textarea", {
						class: "textbox",
						"onUpdate:modelValue": t[3] || (t[3] = e => a.textVal = e)
					}, null, 512), [
						[r.nr, a.textVal]
					])])])])])),
					_: 1
				}, 8, ["modelValue", "position"])
			}(0, i.Cn)();
			const Ko = {
				data() {
					return {
						dialog: !1,
						position: "bottom",
						textVal: "",
						textItem: {},
						curIndex: 0,
						itemLength: 10,
						selectedItem: {}
					}
				},
				created() {
					f.addevent("SingleTextChoose", this.onSingleTextChoose), f.addevent("WindowResize", this.onWindowResize, !0), f.addevent("MainImageViewClick", this.onMainImageViewClick, !0)
				},
				beforeUnmount() {
					f.rmevent("SingleTextChoose", this.onSingleTextChoose), f.rmevent("WindowResize", this.onWindowResize), f.rmevent("MainImageViewClick", this.onMainImageViewClick)
				},
				mounted() {},
				methods: {
					onMainImageViewClick() {
						this.textItem.selected = !1, this.dialog = !1
					},
					onWindowResize() {
						this.$refs.mainBox && eo(this.$refs.mainBox)
					},
					open(e) {
						this.position = e, this.dialog = !0
					},
					TextModified() {
						this.textItem.text = this.textVal, Q.refreshItemText(this.selectedItem)
					},
					TextReset() {
						this.textVal = this.textItem.srctext, this.TextModified()
					},
					TextDelete() {
						this.selectedItem.detail.splice(this.curIndex, 1), this.curIndex === this.selectedItem.detail.length && (this.curIndex -= 1), this.curIndex < 0 ? this.dialog = !1 : f.set("SingleTextChoose", this.selectedItem.detail[this.curIndex]), Q.refreshItemText(this.selectedItem)
					},
					jumpTo(e) {
						f.set("SingleTextChoose", this.selectedItem.detail[this.curIndex + e])
					},
					onSingleTextChoose(e) {
						this.selectedItem = Q.getSelectedItem(), this.itemLength = this.selectedItem.detail.length, this.curIndex = this.selectedItem.detail.indexOf(e), this.textItem.selected = !1, this.textItem = e, this.textItem.selected = !0, this.dialog = !0, this.textVal = e.text, this.$nextTick((function() {
							const e = z(document.getElementById("mainImage"), this.textItem.rect);
							this.$refs.mainBox.style.width = e.width + "px", this.$refs.mainBox.style.height = e.height + "px", this.$refs.img.src = e.url, eo(this.$refs.mainBox)
						}))
					}
				}
			};
			Ko.render = Jo, Ko.__scopeId = "data-v-869eee36";
			const ei = Ko;
			oe()(Ko, "components", {
				QDialog: Ce.Z,
				QBar: _e.Z,
				QBtn: We.Z,
				QSpace: De.Z
			});
			const ti = (0, i.aZ)({
				name: "PageIndex",
				components: {
					ImageList: yt,
					UploadImage: _t,
					MainResultView: Uo,
					SingleTextView: ei
				},
				methods: {
					onResize() {
						f.trig("WindowResize")
					}
				}
			});
			var oi = o(5151);
			ti.render = a;
			const ii = ti;
			oe()(ti, "components", {
				QPage: Le.Z,
				QResizeObserver: oi.Z
			});
			const li = (0, i.aZ)({
				name: "PageIndex",
				components: {
					Index: ii
				},
				data() {
					return {}
				}
			});
			li.render = l;
			const ai = li
		}
	}
]);