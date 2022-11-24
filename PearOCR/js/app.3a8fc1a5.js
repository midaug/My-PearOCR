(() => {
	"use strict";
	var e = {
			2238: (e, t, r) => {
				r(71), r(7280), r(5363);
				var o = r(8880),
					n = r(9592),
					i = r(3673);

				function a(e, t, r, o, n, a) {
					const l = (0, i.up)("router-view");
					return (0, i.wg)(), (0, i.j4)(l)
				}
				const l = (0, i.aZ)({
					name: "App"
				});
				l.render = a;
				const s = l;
				var d = r(4584),
					p = r(7083),
					g = r(9582);
				const u = [{
						path: "/",
						component: () => Promise.all([r.e(736), r.e(186)])
							.then(r.bind(r, 1186)),
						children: [{
							path: "",
							component: () => Promise.all([r.e(736), r.e(668)])
								.then(r.bind(r, 7668))
						}]
					}, {
						path: "/:catchAll(.*)*",
						component: () => Promise.all([r.e(736), r.e(193)])
							.then(r.bind(r, 2193))
					}],
					c = u,
					x = (0, p.BC)((function() {
						const e = g.r5,
							t = (0, g.p7)({
								scrollBehavior: () => ({
									left: 0,
									top: 0
								}),
								routes: c,
								history: e("")
							});
						return t
					}));
				async function m(e, t) {
					const o = "function" === typeof d["default"] ? await (0, d["default"])({}) : d["default"],
						{
							storeKey: i
						} = await Promise.resolve()
						.then(r.bind(r, 4584)),
						a = "function" === typeof x ? await x({
							store: o
						}) : x;
					o.$router = a;
					const l = e(s);
					return l.use(n.Z, t), {
						app: l,
						store: o,
						storeKey: i,
						router: a
					}
				}
				var f = r(4434),
					T = r(821);
				const h = {
					config: {
						notify: {}
					},
					plugins: {
						Notify: f.Z,
						Dialog: T.Z
					}
				};
				var y = r(1413);
				(0, y.z)("service-worker.js", {
					ready() {},
					registered() {},
					cached() {},
					updatefound() {},
					updated() {},
					offline() {},
					error() {}
				}), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && window.navigator.standalone && r.e(736)
					.then(r.t.bind(r, 9501, 23));
				const b = "";
				async function P({
					app: e,
					router: t,
					store: r,
					storeKey: o
				}, n) {
					let i = !1;
					const a = e => {
							i = !0;
							const r = Object(e) === e ? t.resolve(e)
								.fullPath : e;
							window.location.href = r
						},
						l = window.location.href.replace(window.location.origin, "");
					for (let d = 0; !1 === i && d < n.length; d++) try {
						await n[d]({
							app: e,
							router: t,
							store: r,
							ssrContext: null,
							redirect: a,
							urlPath: l,
							publicPath: b
						})
					} catch (s) {
						return s && s.url ? void(window.location.href = s.url) : void console.error("[Quasar] boot error:", s)
					}!0 !== i && (e.use(t), e.use(r, o), e.mount("#q-app"))
				}
				m(o.ri, h)
					.then((e => Promise.all([Promise.resolve()
							.then(r.bind(r, 4325))
						])
						.then((t => {
							const r = t.map((e => e.default))
								.filter((e => "function" === typeof e));
							P(e, r)
						}))))
			},
			4325: (e, t, r) => {
				r.r(t), r.d(t, {
					default: () => l,
					i18n: () => a
				});
				var o = r(7083),
					n = r(5948);
				const i = {
						"en-US": r(2354),
						"zh-CHS": r(5119),
						"zh-CHT": r(2347)
					},
					a = (0, n.o)({
						locale: "en-US",
						messages: i
					}),
					l = (0, o.xr)((({
						app: e
					}) => {
						e.use(a)
					}))
			},
			4584: (e, t, r) => {
				r.r(t), r.d(t, {
					default: () => i
				});
				var o = r(7083),
					n = r(7874);
				const i = (0, o.h)((function() {
					const e = (0, n.MT)({
						modules: {},
						strict: !1
					});
					return e
				}))
			},
			2354: e => {
				e.exports = JSON.parse('{"ImageList.addImage":"Add Images","ImageList.fromClipboard":"Clipboard","ImageList.more":"More","imagelist.tips_clipboard_no_image":"No image detected in clipboard","imagelist.tips_clipboard_faild":"Failed to read clipboard, please confirm open permissions","NavBar.feedback":"Feedback","NavBar.contactus":"Contact us","RViewImageText.text":"Text","RViewText.Copy":"Copy","RViewText.layout":"Layout","RViewText.Image":"Image","RViewText.noDetectText":"No text detected","SingleText.modify":"Modify","SingleText.restore":"Restore","SingleText.delete":"Delete","bar.reRecognition":"Re-identify","common.loading":"Loading","configure":"Configure","configure.reset":"Reset","configure.apply":"Apply","configure.cancel":"Cancel","configure.errTextHighlight":"Keep text with highlight","configure.errTextThres":"Error text thres","configure.errWordHandle":"Error word handle","configure.errWordHandle.Highlight":"Highlight","configure.errWordHandle.IgnoreTwoEnds":"Ignore tow ends word","configure.errWordHandle.IgnoreTwoEndsHighlistOther":"Ignore two ends and highlist other","configure.errWordHandle.Normal":"As normal character","configure.errWordThres":"Error word threshold","configure.sortingOfNewImages":"Sorting of new images","configure.sortingType.byAddOrder":"Sort by add order","configure.sortingType.byFileName":"Sort by file name","exportPDF":"Export as a PDF document","exportPDF.AllImages":"All images","exportPDF.CurrentImage":"Current images","exportPDF.ExportTextImage":"Export text and image","exportPDF.ExportTextOnly":"Export text only","exportPDF.Invisible":"Invisible","exportPDF.OriImageOnLast":"Original image at the end","exportPDF.OriImageOnNext":"Original image is on the next page","exportPDF.Visible":"Visible","exportPDF.WithoutOriImage":"Original image not included","exportPDF.cancel":"Cancel","exportPDF.config":"Config","exportPDF.export":"Export","exportPDF.exportTxt":"Export txt","exportPDF.exportDocx":"Export docx","exportPDF.exportData":"Export text or image","exportPDF.exportImage":"Items to export","exportPDF.filename":"Filename","exportPDF.mustHaveFilename":"Must have file name","exportPDF.preview":"Preview","exportPDF.textVisible":"Text visible","exportPDF.withOriImage":"Original image","exportPDF.downloadingModule":"Downloading PDF module","exportTXT":"Export as TXT document","exportTXT.AllTexts":"All texts","exportTXT.CurrentText":"Current text","exportTXT.DividedTexts":"Divided texts","exportTXT.Undivided":"Undivided","exportTXT.exportText":"Items to export","exportTXT.textDivided":"Text divided","identityLanguage":"Identify:","LangToolbar.loading":"Loading:","LangToolbar.loadingTips":"Start recognition when the recognition module is loaded","langname.en-US":"English","langname.ja":"Japanese","langname.zh-CHS":"Chinese(Simplified)","langname.zh-CHT":"Chinese(Traditional)","langname.ko":"Korean","menu.configure":"Configure","menu.deleteAllImages":"Delete all images","menu.exportPDF":"Export as PDF","menu.exportTXT":"Export as docx/txt","menu.reIdentifyAll":"Re-identify all","message.copyFailed":"Copy failure","message.copySuccess":"Copy success","message.waitIdentityFinish":"Please wait for identity finish","antOcr.runError":"Runtime error","antOcr.runErrorMessage":"Sorry, a runtime error was encountered, it could be one of the following reasons: 1. The browser version is too old or does not support wasm. 2. The image size is too large or there is not enough memory available","textLayoutMenu.CombineLine":"Single Row","textLayoutMenu.Auto":"Auto layout","textLayoutMenu.SplitLine":"Independent","textLayoutMenu.WordWrap":"Word wrap","tips.addImage":"Click [Add Images] to choose image file","tips.readClipboard":"Click [Clipboard] to read image from clipboard","tips.CtrlV":"Press Ctrl+V to paste the image"}')
			},
			5119: e => {
				e.exports = JSON.parse('{"ImageList.addImage":"增加图像","ImageList.fromClipboard":"读剪贴板","ImageList.more":"更多","imagelist.tips_clipboard_no_image":"在剪贴板内没有检测到图像","imagelist.tips_clipboard_faild":"读取剪贴板失败，请确认开放权限","NavBar.feedback":"意见反馈","NavBar.contactus":"联系我们","RViewImageText.text":"文本","RViewText.Copy":"复制","RViewText.layout":"排版","RViewText.Image":"图像","RViewText.noDetectText":"没有检测到文本","SingleText.modify":"修改","SingleText.restore":"还原","SingleText.delete":"删除","bar.reRecognition":"重新识别","common.loading":"正在加载","configure":"设置","configure.reset":"恢复默认","configure.apply":"应用","configure.cancel":"取消","configure.errTextHighlight":"保持文本且高亮","configure.errTextThres":"错误文本阈值","configure.errWordHandle":"错误字符处理","configure.errWordHandle.Highlight":"高亮","configure.errWordHandle.IgnoreTwoEnds":"忽略两端字符","configure.errWordHandle.IgnoreTwoEndsHighlistOther":"忽略两端字符且高亮其他字符","configure.errWordHandle.Normal":"视为正常字符","configure.errWordThres":"错误字符阈值","configure.sortingOfNewImages":"新增图像的排序方式","configure.sortingType.byAddOrder":"按增加顺序排列","configure.sortingType.byFileName":"按文件名排列","exportPDF":"导出为PDF文档","exportPDF.AllImages":"所有图像","exportPDF.CurrentImage":"当前图像","exportPDF.ExportTextImage":"导出文本和图像","exportPDF.ExportTextOnly":"只导出文本","exportPDF.Invisible":"不可见","exportPDF.OriImageOnLast":"原图放在最后","exportPDF.OriImageOnNext":"原图放在下一页","exportPDF.Visible":"可见","exportPDF.WithoutOriImage":"不附带原图","exportPDF.cancel":"取消","exportPDF.config":"设置","exportPDF.export":"导出","exportPDF.exportTxt":"导出为txt","exportPDF.exportDocx":"导出为docx","exportPDF.exportData":"要导出的内容","exportPDF.exportImage":"要导出的项","exportPDF.filename":"文件名","exportPDF.mustHaveFilename":"必须要有文件名","exportPDF.preview":"预览","exportPDF.textVisible":"文本可见性","exportPDF.withOriImage":"原图像","exportPDF.downloadingModule":"正在下载PDF组件","exportTXT":"导出为docx/txt文档","exportTXT.AllTexts":"所有文本","exportTXT.CurrentText":"当前文本","exportTXT.DividedTexts":"隔开每一项的文本","exportTXT.Undivided":"不隔开每一项的文本","exportTXT.exportText":"要导出的项","exportTXT.textDivided":"文本分割","identityLanguage":"识别语言:","LangToolbar.loading":"加载:","LangToolbar.loadingTips":"待识别模块加载完毕后开始识别","langname.en-US":"英文","langname.ja":"日文","langname.zh-CHS":"简体中文","langname.zh-CHT":"繁体中文","langname.ko":"韩文","menu.configure":"设置","menu.deleteAllImages":"删除所有图像","menu.exportPDF":"导出为PDF","menu.exportTXT":"导出为docx/txt","menu.reIdentifyAll":"重新识别所有图像","message.copyFailed":"复制失败","message.copySuccess":"复制成功","message.waitIdentityFinish":"请等待识别完成","antOcr.runError":"运行错误","antOcr.runErrorMessage":"十分抱歉，遇到了运行错误，可能是以下的原因之一：1.浏览器版本过旧或不支持wasm。 2.图片尺寸过大或可用内存不足","textLayoutMenu.CombineLine":"单行排版","textLayoutMenu.Auto":"自动排版","textLayoutMenu.SplitLine":"独立分行","textLayoutMenu.WordWrap":"自动换行","tips.addImage":"点击[增加图像]选择要识别图片","tips.readClipboard":"点击[读剪贴板]从剪贴板读取图像","tips.CtrlV":"按Ctrl+V粘贴图像"}')
			},
			2347: e => {
				e.exports = JSON.parse('{"ImageList.addImage":"增加圖像","ImageList.fromClipboard":"讀剪貼板","ImageList.more":"更多","imagelist.tips_clipboard_no_image":"在剪貼板內沒有檢測到圖像","imagelist.tips_clipboard_faild":"讀取剪貼板失敗，請確認開放權限","NavBar.feedback":"意見反饋","NavBar.contactus":"联系我们","RViewImageText.text":"文本","RViewText.Copy":"複製","RViewText.layout":"排版","RViewText.Image":"圖像","RViewText.noDetectText":"沒有檢測到文本","SingleText.modify":"修改","SingleText.restore":"還原","SingleText.delete":"刪除","bar.reRecognition":"重新識別","common.loading":"正在加載","configure":"設置","configure.reset":"恢復默認","configure.apply":"應用","configure.cancel":"取消","configure.errTextHighlight":"保持文本且高亮","configure.errTextThres":"錯誤文本閾值","configure.errWordHandle":"錯誤字符處理","configure.errWordHandle.Highlight":"高亮","configure.errWordHandle.IgnoreTwoEnds":"忽略兩端字符","configure.errWordHandle.IgnoreTwoEndsHighlistOther":"忽略兩端字符且高亮其他字符","configure.errWordHandle.Normal":"視為正常字符","configure.errWordThres":"錯誤字符閾值","configure.sortingOfNewImages":"新增圖像的排序方式","configure.sortingType.byAddOrder":"按增加順序排列","configure.sortingType.byFileName":"按文件名排列","exportPDF":"導出為PDF文檔","exportPDF.AllImages":"所有圖像","exportPDF.CurrentImage":"當前圖像","exportPDF.ExportTextImage":"導出文本和圖像","exportPDF.ExportTextOnly":"只導出文本","exportPDF.Invisible":"不可見","exportPDF.OriImageOnLast":"原圖放在最後","exportPDF.OriImageOnNext":"原圖放在下一頁","exportPDF.Visible":"可見","exportPDF.WithoutOriImage":"不附帶原圖","exportPDF.cancel":"取消","exportPDF.config":"設置","exportPDF.export":"導出","exportPDF.exportTxt":"導出爲txt","exportPDF.exportDocx":"導出爲docx","exportPDF.exportData":"要導出的內容","exportPDF.exportImage":"要導出的項","exportPDF.filename":"文件名","exportPDF.mustHaveFilename":"必須要有文件名","exportPDF.preview":"預覽","exportPDF.textVisible":"文本可見性","exportPDF.withOriImage":"原圖像","exportPDF.downloadingModule":"正在下載PDF組件","exportTXT":"導出為TXT文檔","exportTXT.AllTexts":"所有文本","exportTXT.CurrentText":"當前文本","exportTXT.DividedTexts":"隔開每一項的文本","exportTXT.Undivided":"不隔開每一項的文本","exportTXT.exportText":"要導出的項","exportTXT.textDivided":"文本分割","identityLanguage":"識別語言:","LangToolbar.loading":"加載:","LangToolbar.loadingTips":"待識別程式加載完畢后開始識別","langname.en-US":"英文","langname.ja":"日文","langname.zh-CHS":"簡體中文","langname.zh-CHT":"繁體中文","langname.ko":"韓文","menu.configure":"設置","menu.deleteAllImages":"刪除所有圖像","menu.exportPDF":"導出為PDF","menu.exportTXT":"導出為docx/txt","menu.reIdentifyAll":"重新識別所有圖像","message.copyFailed":"複製失敗","message.copySuccess":"複製成功","message.waitIdentityFinish":"請等待識別完成","antOcr.runError":"運行錯誤","antOcr.runErrorMessage":"十分抱歉，遇到了運行錯誤，可能是以下的原因之一：1.瀏覽器版本過舊或不支持wasm。 2.圖片尺寸過大或可用內存不足","textLayoutMenu.CombineLine":"單行排版","textLayoutMenu.Auto":"自動排版","textLayoutMenu.SplitLine":"獨立分行","textLayoutMenu.WordWrap":"自動換行","tips.addImage":"點擊[增加圖像]選擇要識別圖片","tips.readClipboard":"點擊[讀剪貼板]從剪貼板讀取圖像","tips.CtrlV":"按Ctrl+V粘貼圖像"}')
			}
		},
		t = {};

	function r(o) {
		var n = t[o];
		if (void 0 !== n) return n.exports;
		var i = t[o] = {
			exports: {}
		};
		return e[o].call(i.exports, i, i.exports, r), i.exports
	}
	r.m = e, (() => {
		var e = [];
		r.O = (t, o, n, i) => {
			if (!o) {
				var a = 1 / 0;
				for (p = 0; p < e.length; p++) {
					for (var [o, n, i] = e[p], l = !0, s = 0; s < o.length; s++)(!1 & i || a >= i) && Object.keys(r.O)
						.every((e => r.O[e](o[s]))) ? o.splice(s--, 1) : (l = !1, i < a && (a = i));
					if (l) {
						e.splice(p--, 1);
						var d = n();
						void 0 !== d && (t = d)
					}
				}
				return t
			}
			i = i || 0;
			for (var p = e.length; p > 0 && e[p - 1][2] > i; p--) e[p] = e[p - 1];
			e[p] = [o, n, i]
		}
	})(), (() => {
		r.n = e => {
			var t = e && e.__esModule ? () => e["default"] : () => e;
			return r.d(t, {
				a: t
			}), t
		}
	})(), (() => {
		var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
		r.t = function(o, n) {
			if (1 & n && (o = this(o)), 8 & n) return o;
			if ("object" === typeof o && o) {
				if (4 & n && o.__esModule) return o;
				if (16 & n && "function" === typeof o.then) return o
			}
			var i = Object.create(null);
			r.r(i);
			var a = {};
			e = e || [null, t({}), t([]), t(t)];
			for (var l = 2 & n && o;
				"object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l)
				.forEach((e => a[e] = () => o[e]));
			return a["default"] = () => o, r.d(i, a), i
		}
	})(), (() => {
		r.d = (e, t) => {
			for (var o in t) r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, {
				enumerable: !0,
				get: t[o]
			})
		}
	})(), (() => {
		r.f = {}, r.e = e => Promise.all(Object.keys(r.f)
			.reduce(((t, o) => (r.f[o](e, t), t)), []))
	})(), (() => {
		r.u = e => "js/" + e + "." + {
			186: "110206ff",
			193: "d3876e68",
			668: "d40a9bf9"
		} [e] + ".js"
	})(), (() => {
		r.miniCssF = e => "css/" + ({
			143: "app",
			736: "vendor"
		} [e] || e) + "." + {
			143: "71a05fb7",
			186: "04385a6b",
			668: "e46fa6b8",
			736: "a18a64de"
		} [e] + ".css"
	})(), (() => {
		r.g = function() {
			if ("object" === typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (e) {
				if ("object" === typeof window) return window
			}
		}()
	})(), (() => {
		r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)
	})(), (() => {
		var e = {},
			t = "pearocr:";
		r.l = (o, n, i, a) => {
			if (e[o]) e[o].push(n);
			else {
				var l, s;
				if (void 0 !== i)
					for (var d = document.getElementsByTagName("script"), p = 0; p < d.length; p++) {
						var g = d[p];
						if (g.getAttribute("src") == o || g.getAttribute("data-webpack") == t + i) {
							l = g;
							break
						}
					}
				l || (s = !0, l = document.createElement("script"), l.charset = "utf-8", l.timeout = 120, r.nc && l.setAttribute("nonce", r.nc), l.setAttribute("data-webpack", t + i), l.src = o), e[o] = [n];
				var u = (t, r) => {
						l.onerror = l.onload = null, clearTimeout(c);
						var n = e[o];
						if (delete e[o], l.parentNode && l.parentNode.removeChild(l), n && n.forEach((e => e(r))), t) return t(r)
					},
					c = setTimeout(u.bind(null, void 0, {
						type: "timeout",
						target: l
					}), 12e4);
				l.onerror = u.bind(null, l.onerror), l.onload = u.bind(null, l.onload), s && document.head.appendChild(l)
			}
		}
	})(), (() => {
		r.r = e => {
			"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}
	})(), (() => {
		r.p = ""
	})(), (() => {
		var e = (e, t, r, o) => {
				var n = document.createElement("link");
				n.rel = "stylesheet", n.type = "text/css";
				var i = i => {
					if (n.onerror = n.onload = null, "load" === i.type) r();
					else {
						var a = i && ("load" === i.type ? "missing" : i.type),
							l = i && i.target && i.target.href || t,
							s = new Error("Loading CSS chunk " + e + " failed.\n(" + l + ")");
						s.code = "CSS_CHUNK_LOAD_FAILED", s.type = a, s.request = l, n.parentNode.removeChild(n), o(s)
					}
				};
				return n.onerror = n.onload = i, n.href = t, document.head.appendChild(n), n
			},
			t = (e, t) => {
				for (var r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
					var n = r[o],
						i = n.getAttribute("data-href") || n.getAttribute("href");
					if ("stylesheet" === n.rel && (i === e || i === t)) return n
				}
				var a = document.getElementsByTagName("style");
				for (o = 0; o < a.length; o++) {
					n = a[o], i = n.getAttribute("data-href");
					if (i === e || i === t) return n
				}
			},
			o = o => new Promise(((n, i) => {
				var a = r.miniCssF(o),
					l = r.p + a;
				if (t(a, l)) return n();
				e(o, l, n, i)
			})),
			n = {
				143: 0
			};
		r.f.miniCss = (e, t) => {
			var r = {
				186: 1,
				668: 1
			};
			n[e] ? t.push(n[e]) : 0 !== n[e] && r[e] && t.push(n[e] = o(e)
				.then((() => {
					n[e] = 0
				}), (t => {
					throw delete n[e], t
				})))
		}
	})(), (() => {
		var e = {
			143: 0
		};
		r.f.j = (t, o) => {
			var n = r.o(e, t) ? e[t] : void 0;
			if (0 !== n)
				if (n) o.push(n[2]);
				else {
					var i = new Promise(((r, o) => n = e[t] = [r, o]));
					o.push(n[2] = i);
					var a = r.p + r.u(t),
						l = new Error,
						s = o => {
							if (r.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
								var i = o && ("load" === o.type ? "missing" : o.type),
									a = o && o.target && o.target.src;
								l.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", l.name = "ChunkLoadError", l.type = i, l.request = a, n[1](l)
							}
						};
					r.l(a, s, "chunk-" + t, t)
				}
		}, r.O.j = t => 0 === e[t];
		var t = (t, o) => {
				var n, i, [a, l, s] = o,
					d = 0;
				if (a.some((t => 0 !== e[t]))) {
					for (n in l) r.o(l, n) && (r.m[n] = l[n]);
					if (s) var p = s(r)
				}
				for (t && t(o); d < a.length; d++) i = a[d], r.o(e, i) && e[i] && e[i][0](), e[a[d]] = 0;
				return r.O(p)
			},
			o = self["webpackChunkpearocr"] = self["webpackChunkpearocr"] || [];
		o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o))
	})();
	var o = r.O(void 0, [736], (() => r(2238)));
	o = r.O(o)
})();