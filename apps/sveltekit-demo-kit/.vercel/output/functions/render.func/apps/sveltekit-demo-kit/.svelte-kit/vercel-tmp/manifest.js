export const manifest = {
	appDir: "_app",
	assets: new Set(["404.png","bg.jpg","favicon.ico","moon.png","mountain.png","road.png","robots.txt","svelte.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-4cedb2ab.js","imports":["_app/immutable/start-4cedb2ab.js","_app/immutable/chunks/index-979af05b.js","_app/immutable/chunks/singletons-c4cdbbd3.js","_app/immutable/chunks/env-public-6aa99648.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
