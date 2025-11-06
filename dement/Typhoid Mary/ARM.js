movies["ARM"] = new movie(
	{"arm": 0, "quote1": 16, "quote2": 20, "quote3": 24, "quote4": 29, "words": 34, "timeout sequence": 46},
	[
		{
			item: load_img("Typhoid Mary/ARM_CAST/001-arm+mouth+cutPICT.png"),
			script: (x) => {x.onmouseup = (ev) => {
				if (ev.x > 0 && ev.x < 30 && ev.y > 0 && ev.y < 30) {
					load_movie("TESTES", "testes");
				} else
				if (ev.x > 0 && ev.x < 75 && ev.y > 0 && ev.y < 50) {
					load_movie("WOUND", "wound");
				} else
				if (ev.x > 75 && ev.x < 160 && ev.y > 0 && ev.y < 50) {
					load_movie("GLOTTIS", "bend");
				} else
				if (ev.x > 160 && ev.x < 250 && ev.y > 0 && ev.y < 75) {
					load_movie("TITS", "tits");
				} else
				if (ev.x > 250 && ev.x < 75 && ev.y > 0 && ev.y < 100) {
					load_movie("DIARY", "3rd");
				} else
				if (ev.x > 310 && ev.x < 375 && ev.y > 0 && ev.y < 75) {
					load_movie("GLOTTIS", "spread");
				} else
				if (ev.x > 375 && ev.x < 450 && ev.y > 0 && ev.y < 75) {
					load_movie("SCAR", "close");
				} else
				if (ev.x > 450 && ev.x < 500 && ev.y > 0 && ev.y < 100) {
					load_movie("TITS", "words");
				} else
				if (ev.x > 500 && ev.x < 640 && ev.y > 0 && ev.y < 50) {
					load_movie("ARM", "quote4"); // top row ends
				} else
				if (ev.x > 0 && ev.x < 100 && ev.y > 50 && ev.y < 100) {
					load_movie("GLOTTIS", "allmove");
				} else
				if (ev.x > 0 && ev.x < 100 && ev.y > 100 && ev.y < 137) {
					load_movie("LUNGS", "quote2");
				} else
				if (ev.x > 0 && ev.x < 120 && ev.y > 137 && ev.y < 175) {
					load_movie("WOUND", "wound");
				} else
				if (ev.x > 0 && ev.x < 120 && ev.y > 175 && ev.y < 225) {
					load_movie("HANDS", "hands");
				} else
				if (ev.x > 0 && ev.x < 75 && ev.y > 225 && ev.y < 275) {
					load_movie("SCAR", "close");
				} else
				if (ev.x > 0 && ev.x < 50 && ev.y > 275 && ev.y < 325) {
					load_movie("ORGANS", "quote4");
				} else
				if (ev.x > 0 && ev.x < 150 && ev.y > 325 && ev.y < 365) {
					load_movie("TITS", "tits");
				} else
				if (ev.x > 0 && ev.x < 50 && ev.y > 365 && ev.y < 480) {
					load_movie("LUNGS", "pull"); // left side ends
				} else
				if (ev.x > 50 && ev.x < 125 && ev.y > 400 && ev.y < 480) {
					load_movie("ORGANS", "flap");
				} else
				if (ev.x > 125 && ev.x < 200 && ev.y > 380 && ev.y < 480) {
					load_movie("TITS", "tits");
				} else
				if (ev.x > 200 && ev.x < 300 && ev.y > 350 && ev.y < 480) {
					load_movie("ORGANS", "organs");
				} else
				if (ev.x > 325 && ev.x < 525 && ev.y > 450 && ev.y < 480) {
					load_movie("TESTES", "testes");
				} else
				if (ev.x > 300 && ev.x < 375 && ev.y > 350 && ev.y < 480) {
					load_movie("WOUND", "wound");
				} else
				if (ev.x > 375 && ev.x < 425 && ev.y > 350 && ev.y < 450) {
					load_movie("DIARY", "5th");
				} else
				if (ev.x > 425 && ev.x < 450 && ev.y > 350 && ev.y < 450) {
					load_movie("STORIES", "story3");
				} else
				if (ev.x > 450 && ev.x < 500 && ev.y > 350 && ev.y < 450) {
					load_movie("PENES", "quote5");
				} else
				if (ev.x > 500 && ev.x < 550 && ev.y > 350 && ev.y < 480) {
					load_movie("TITS", "tits");
				} else
				if (ev.x > 550 && ev.x < 600 && ev.y > 325 && ev.y < 480) {
					load_movie("MEDICAL", "typhoid");
				} else
				if (ev.x > 600 && ev.x < 640 && ev.y > 400 && ev.y < 480) {
					load_movie("ORGANS", "flap"); // bottom row ends
				} else
				if (ev.x > 600 && ev.x < 640 && ev.y > 100 && ev.y < 250) {
					load_movie("SCAR", "kiss");
				} else
				if (ev.x > 550 && ev.x < 640 && ev.y > 50 && ev.y < 150) {
					load_movie("ORGANS", "organs");
				} else
				if (ev.x > 550 && ev.x < 640 && ev.y > 250 && ev.y < 325) {
					load_movie("HANDS", "quote4");
				} else
				if (ev.x > 600 && ev.x < 640 && ev.y > 325 && ev.y < 400) {
					load_movie("TESTES", "testes"); // right side ends
				} else
				if (ev.x > 100 && ev.x < 200 && ev.y > 50 && ev.y < 150) {
					load_movie("HANDS", "hands");
				} else
				if (ev.x > 200 && ev.x < 250 && ev.y > 75 && ev.y < 150) {
					load_movie("MEDICAL", "brain");
				} else
				if (ev.x > 250 && ev.x < 300 && ev.y > 100 && ev.y < 200) {
					load_movie("ARM", "quote3");
				} else
				if (ev.x > 300 && ev.x < 450 && ev.y > 75 && ev.y < 125) {
					load_movie("HANDS", "hands");
				} else
				if (ev.x > 300 && ev.x < 450 && ev.y > 125 && ev.y < 175) {
					load_movie("TITS", "poppy");
				} else
				if (ev.x > 500 && ev.x < 550 && ev.y > 50 && ev.y < 100) {
					load_movie("WOUND", "quote3");
				} else
				if (ev.x > 450 && ev.x < 550 && ev.y > 100 && ev.y < 200) {
					load_movie("ARM", "words");
				} else
				if (ev.x > 525 && ev.x < 600 && ev.y > 150 && ev.y < 250) {
					load_movie("HANDS", "hands");
				} else
				if (ev.x > 50 && ev.x < 150 && ev.y > 150 && ev.y < 325) {
					load_movie("PENES", "disappear");
				} else
				if (ev.x > 150 && ev.x < 250 && ev.y > 150 && ev.y < 250) {
					load_movie("PRINTSTORIES", "print2");
				} else
				if (ev.x > 250 && ev.x < 325 && ev.y > 200 && ev.y < 250) {
					load_movie("PRINTSTORIES", "print1");
				} else
				if (ev.x > 300 && ev.x < 450 && ev.y > 175 && ev.y < 200) {
					load_movie("LUNGS", "slide");
				} else
				if (ev.x > 325 && ev.x < 450 && ev.y > 200 && ev.y < 250) {
					load_movie("ARM", "quote2");
				} else
				if (ev.x > 450 && ev.x < 525 && ev.y > 200 && ev.y < 250) {
					load_movie("WOUND", "wound"); // top centre ends
				} else
				if (ev.x > 150 && ev.x < 250 && ev.y > 250 && ev.y < 300) {
					load_movie("TMPOEMS", "poem1");
				} else
				if (ev.x > 250 && ev.x < 450 && ev.y > 250 && ev.y < 300) {
					load_movie("ORGANS", "organs");
				} else
				if (ev.x > 50 && ev.x < 200 && ev.y > 350 && ev.y < 400) {
					load_movie("ORGANS", "words");
				} else
				if (ev.x > 150 && ev.x < 300 && ev.y > 300 && ev.y < 350) {
					load_movie("ANIMATIONS", "heroin");
				} else
				if (ev.x > 300 && ev.x < 450 && ev.y > 300 && ev.y < 350) {
					load_movie("ARM", "quote1");
				} else
				if (ev.x > 450 && ev.x < 550 && ev.y > 250 && ev.y < 350) {
					load_movie("ANIMATIONS", "heroin"); // lower centre ends
				}
			}}
		},
		{item: load_html('<div style="width: 554px; height: 215px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...the radical alteration of the person which can be indefinitely associated with any other alteration that suddenly arises in collective life, for example, the death of a relative, initiation..."     <br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times;  font-weight: bold;"><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille:VISIONS OF EXCESS: SELECTED WRITINGS 1927-1939 (trans & ed) Allan Stoekl, Theory and History of Literature, vol 14, University of Minnesota Press, Minneapolis, 1985, p70<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 554px; height: 263px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Unproductive expenditures: luxury, mourning, war, cults, the construction of sumptuary monuments, games, spectacles, arts, perverse sexual activity ... in each case the accent is placed on a loss  that must be as great as possible in order for that activity to to take on its true meaning."   <br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times;  font-weight: bold;"><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille:VISIONS OF EXCESS: SELECTED WRITINGS 1927-1939, (trans & ed) Allan Stoekl, Theory and History of Literature, vol 14, University of Minnesota Press, Minneapolis, 1985, p118<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 553px; height: 153px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...for knowledge that has lost the truth of its roots in desire and aggression is in its very objectivity a lie."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Jane Gallop: THINKING THROUGH THE BODY eds Carolyn Heilbrun and Nancy Miller, Columbia University Press, New York, 1988, p144<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary/ARM_CAST/005-.png"), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary/ARM_CAST/006-.png"), script: (x) => {/**/}},
		{item: load_html('<div style="width: 553px; height: 153px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Only the victim can describe the torture, the torturer necessarily uses the hypocritical language of established order and power."<br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Gilles Deleuze: COLDNESS AND CRUELTY from MASOCHISM, Zone Books, New York, 1989, p17<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 629px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary/ARM_CAST/009-short sleepgroan.wav"), script: (x) => {}},
		null,
		{item: new Audio("Typhoid Mary/ARM_CAST/011-faster breathing.2.wav"), script: (x) => {}},
		null, // global script
		{item: (mv) => {mv.goto("arm")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 480}, script: (x) => {}},
		{item: (mv) => {mv.delay += 560}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: (mv) => {mv.delay += 280}, script: (x) => {}},
		{item: (mv) => {mv.delay += 120}, script: (x) => {}},
		{item: (mv) => {mv.goto("words")}, script: (x) => {}},
	],
	[
		(mv) => {
			mv.onStartMovie = (mv) => {
				mv.timeoutLength = 120*60; // 2min
				mv.onTimeout = (mv) => {
					mv.goto("timeout sequence");
				};
			};
		}
	],
	[
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,10],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"script":12,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":13,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":4,"x":-6,"y":0},{"style":"","kind":"text","index":1,"x":50,"y":133}]},
{"sounds":[null,null],"script":12,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":4,"x":-6,"y":0},{"style":"","kind":"text","index":1,"x":50,"y":133}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":14,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":4,"x":-6,"y":0},{"style":"","kind":"text","index":2,"x":47,"y":109}]},
{"sounds":[null,null],"script":12,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":4,"x":-6,"y":0},{"style":"","kind":"text","index":2,"x":47,"y":109}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":13,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":4,"x":-6,"y":0},{"style":"","kind":"text","index":3,"x":48,"y":167}]},
{"sounds":[null,null],"script":12,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":4,"x":-6,"y":0},{"style":"","kind":"text","index":3,"x":48,"y":167}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":4,"x":-6,"y":0},{"style":"","kind":"text","index":6,"x":49,"y":162}]},
{"sounds":[null,null],"script":12,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":4,"x":-6,"y":0},{"style":"","kind":"text","index":6,"x":49,"y":162}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":5,"x":26,"y":-8}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[8,null],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"text","index":7,"x":95,"y":91}]},
{"sounds":[8,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"text","index":7,"x":95,"y":91}]},
	]
);
