if (!self.define) {
	let e, n = {};
	const i = (i, c) => (i = new URL(i + ".js", c)
		.href, n[i] || new Promise((n => {
			if ("document" in self) {
				const e = document.createElement("script");
				e.src = i, e.onload = n, document.head.appendChild(e)
			} else e = i, importScripts(i), n()
		}))
		.then((() => {
			let e = n[i];
			if (!e) throw new Error(`Module ${i} didn’t register its module`);
			return e
		})));
	self.define = (c, l) => {
		const f = e || ("document" in self ? document.currentScript.src : "") || location.href;
		if (n[f]) return;
		let o = {};
		const r = e => i(e, f),
			s = {
				module: {
					uri: f
				},
				exports: o,
				require: r
			};
		n[f] = Promise.all(c.map((e => s[e] || r(e))))
			.then((e => (l(...e), o)))
	}
}
define(["./workbox-cb3ce6c3"], (function(e) {
	"use strict";
	e.setCacheNameDetails({
		prefix: "pearocr"
	}), self.addEventListener("message", (e => {
		e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
	})), e.precacheAndRoute([{
		url: "0120c1c55690be53d0d59a49bfa4f228.tf",
		revision: null
	}, {
		url: "08dbfb895d58b2c5d17d650577ff10e7.docx",
		revision: null
	}, {
		url: "js/1754d87da2dc1f61e3a642488156c1ba.wasm",
		revision: null
	}, {
		url: "36f987338d326a0339fbf5662ec04473.tf",
		revision: null
	}, {
		url: "592ed67e13a2ca0ca7bd0614ff158eb5.tf",
		revision: null
	}, {
		url: "644bcca4eea52af1e33121a940e41599.tf",
		revision: null
	}, {
		url: "7ab430b2ff567e1eff986ea092bb78e0.tf",
		revision: null
	}, {
		url: "7ec01f4aebd077a3a9d9d1e6cd7b8e2b.tf",
		revision: null
	}, {
		url: "97a745e4ec4d6c4f3da96103363915ee.tf",
		revision: null
	}, {
		url: "b66f6a54ccc99cf6f08e71e6ab25010d.tf",
		revision: null
	}, {
		url: "c43b6f3fff445f88847343a445f01c04.tf",
		revision: null
	}, {
		url: "css/186.04385a6b.css",
		revision: null
	}, {
		url: "css/668.e46fa6b8.css",
		revision: null
	}, {
		url: "css/app.71a05fb7.css",
		revision: null
	}, {
		url: "css/vendor.a18a64de.css",
		revision: null
	}, {
		url: "de3fd5408fa47bb690369bbb82b78ce8.tf",
		revision: null
	}, {
		url: "dfbc0cf2d00af43499155509ba1dc806.tf",
		revision: null
	}, {
		url: "js/ea4e471eb7373b3a9fa53a71c5759116.wasm",
		revision: null
	}, {
		url: "f91b0416e9517bfd576b4654bc712562.tf",
		revision: null
	}, {
		url: "favicon.ico",
		revision: "e48f5cb1a4285b90eb09a7d6a774dc99"
	}, {
		url: "fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",
		revision: null
	}, {
		url: "fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",
		revision: null
	}, {
		url: "fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",
		revision: null
	}, {
		url: "fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",
		revision: null
	}, {
		url: "fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",
		revision: null
	}, {
		url: "fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",
		revision: null
	}, {
		url: "fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.53e02ee0.woff",
		revision: null
	}, {
		url: "fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.6a798765.woff2",
		revision: null
	}, {
		url: "fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e6315a5.woff",
		revision: null
	}, {
		url: "fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.3f63ea8f.woff2",
		revision: null
	}, {
		url: "iconfont/iconfont.css",
		revision: "32ee34f8f94fc5efac2c05d7046c86a0"
	}, {
		url: "iconfont/iconfont.ttf",
		revision: "764e458139c606d1979434d874741f95"
	}, {
		url: "iconfont/iconfont.woff",
		revision: "1857c930751402c6c2cb69801f8aeb03"
	}, {
		url: "iconfont/iconfont.woff2",
		revision: "2801b21df61ce562b1b18915796c3af2"
	}, {
		url: "icons/apple-icon-120x120.png",
		revision: "5e14f459e808992e1ab04c1a24e943a3"
	}, {
		url: "icons/apple-icon-152x152.png",
		revision: "02088a5adb9e5a737da02925b3153ce8"
	}, {
		url: "icons/apple-icon-167x167.png",
		revision: "1da0040962671312c506ae11ec7f607d"
	}, {
		url: "icons/apple-icon-180x180.png",
		revision: "292368c7c247c34a33633cfe86496cc9"
	}, {
		url: "icons/apple-launch-1125x2436.png",
		revision: "cf9d641d6f4faa1e1de2acecb118067e"
	}, {
		url: "icons/apple-launch-1170x2532.png",
		revision: "4e62e7b0e79e05062e2e2523aab0fa5f"
	}, {
		url: "icons/apple-launch-1242x2208.png",
		revision: "f78fb4a6a2660768ec6f746595414303"
	}, {
		url: "icons/apple-launch-1242x2688.png",
		revision: "5a62c9430d0fc339967412d796e0d217"
	}, {
		url: "icons/apple-launch-1284x2778.png",
		revision: "d47d9d064a935467fc18ccf50d562bb9"
	}, {
		url: "icons/apple-launch-1536x2048.png",
		revision: "04fc07c35a8dc6079cc69441011713d7"
	}, {
		url: "icons/apple-launch-1620x2160.png",
		revision: "0c12f0e36118869864ed09bb243cced5"
	}, {
		url: "icons/apple-launch-1668x2224.png",
		revision: "f20c3e91a4893300b17a255111b85bfb"
	}, {
		url: "icons/apple-launch-1668x2388.png",
		revision: "e83a6bb4b697630bab5b57793462ec30"
	}, {
		url: "icons/apple-launch-2048x2732.png",
		revision: "586574fdd4b7bb6b6dd9258f11443f18"
	}, {
		url: "icons/apple-launch-750x1334.png",
		revision: "30309a9c883452a7c61a862152d9c831"
	}, {
		url: "icons/apple-launch-828x1792.png",
		revision: "29e1545c0cee1bad7fc0ac561a2e3ce6"
	}, {
		url: "icons/favicon-128x128.png",
		revision: "fce2b2d8869fc6e913e9b4a71b72554b"
	}, {
		url: "icons/favicon-16x16.png",
		revision: "0b92e70b8f68e83e00aef0a6fa787026"
	}, {
		url: "icons/favicon-32x32.png",
		revision: "71c812cbd1a59a2813bdbbdd4a51ec9b"
	}, {
		url: "icons/favicon-96x96.png",
		revision: "8c87d9b6824cd84d816ce1f432cd47f1"
	}, {
		url: "icons/icon-128x128.png",
		revision: "fce2b2d8869fc6e913e9b4a71b72554b"
	}, {
		url: "icons/icon-192x192.png",
		revision: "01a76d6a1856af70bbf8bd2c7725ee50"
	}, {
		url: "icons/icon-256x256.png",
		revision: "86330e3f5ec487b01bd071105d758401"
	}, {
		url: "icons/icon-384x384.png",
		revision: "df67a86833fcb64b96c12defa3ce86e8"
	}, {
		url: "icons/icon-512x512.png",
		revision: "9a23abfd73fb1d4c61ff18d8702f1533"
	}, {
		url: "icons/ms-icon-144x144.png",
		revision: "4eb02338dff8653bc6ac862c937187a4"
	}, {
		url: "icons/safari-pinned-tab.svg",
		revision: "99ee41b449cf95be2edf0e1e47c887e2"
	}, {
		url: "img/logo.02395c6d.png",
		revision: null
	}, {
		url: "index.html",
		revision: "017e99f1913e1845502ec08bb394d29f"
	}, {
		url: "js/186.110206ff.js",
		revision: null
	}, {
		url: "js/193.d3876e68.js",
		revision: null
	}, {
		url: "js/668.d40a9bf9.js",
		revision: null
	}, {
		url: "js/AntOcrWorker.0ef2ea9e.worker.js",
		revision: null
	}, {
		url: "js/app.3a8fc1a5.js",
		revision: null
	}, {
		url: "js/vendor.e2d90a20.js",
		revision: null
	}, {
		url: "manifest.json",
		revision: "0fd69c3f6db443ac8073f10dbcb747e2"
	}, {
		url: "pearocr.png",
		revision: "1bf129ed6f0bce7fa3a2a57665829734"
	}], {}), e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"), {
		denylist: [/service-worker\.js$/, /workbox-(.)*\.js$/, /my\.html$/],
        updateViaCache: 'all'
	}))
}));