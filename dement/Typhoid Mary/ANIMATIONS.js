movies["ANIMATIONS"] = new movie(
	{"heroin": 0},
	[
		{
			item: load_img("Typhoid Mary/ANIMATIONS_CAST/001-.png"),
			script: (x) => {x.onmouseup = (ev) => {load_movie("SCAR")}}
		},
		{item: load_img("Typhoid Mary/ANIMATIONS_CAST/002-.png"), script: (x) => {}},
		{item: load_img("Typhoid Mary/ANIMATIONS_CAST/003-.png"), script: (x) => {}},
		{item: load_img("Typhoid Mary/ANIMATIONS_CAST/004-.png"), script: (x) => {}},
		{item: load_img("Typhoid Mary/ANIMATIONS_CAST/005-.png"), script: (x) => {}},
		{item: load_img("Typhoid Mary/ANIMATIONS_CAST/006-.png"), script: (x) => {}},
		{item: load_img("Typhoid Mary/ANIMATIONS_CAST/007-.png"), script: (x) => {}},
		{
			item: load_img("Typhoid Mary/ANIMATIONS_CAST/008-.png"),
			script: (x) => {x.onmouseup = (ev) => {load_movie("WOUND")}}
		},
		null, // global script
		{item: (mv) => {mv.delay += 60}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: (mv) => {mv.delay += 120}, script: (x) => {}}
	],
	[
		(mv) => {
			mv.onStartMovie = (mv) => {
				mv.timeoutLength = 120*60; // 2min
				mv.onTimeout = (mv) => {
					load_movie("TESTES", "timeout sequence");
				};
			};
		}
	],
	[
{"sounds":[null,null],"script":9,"sprites":[{"style":"","kind":"bitmap","index":1,"x":232,"y":152}]},
{"sounds":[null,null],"script":9,"sprites":[{"style":"","kind":"bitmap","index":2,"x":209,"y":122}]},
{"sounds":[null,null],"script":9,"sprites":[{"style":"","kind":"bitmap","index":3,"x":222,"y":142}]},
{"sounds":[null,null],"script":9,"sprites":[{"style":"","kind":"bitmap","index":4,"x":252,"y":169}]},
{"sounds":[null,null],"script":9,"sprites":[{"style":"","kind":"bitmap","index":5,"x":259,"y":180}]},
{"sounds":[null,null],"script":9,"sprites":[{"style":"","kind":"bitmap","index":6,"x":269,"y":189}]},
{"sounds":[null,null],"script":11,"sprites":[{"style":"","kind":"bitmap","index":0,"x":136,"y":144}]},
{"sounds":[null,null],"script":10,"sprites":[{"style":"","kind":"bitmap","index":0,"x":136,"y":144},{"style":"","kind":"bitmap","index":7,"x":433,"y":408}]},
	]
);
