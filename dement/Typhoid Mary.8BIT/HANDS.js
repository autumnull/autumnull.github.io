movies["HANDS"] = new movie(
	{"quote1":9,"quote2":13,"quote3":17,"quote4":21,"quote5":25,"quote6":29,"quote7":33,"timeout sequence":52,"hands":0,"words":38},
	[
		{item: load_img("Typhoid Mary.8BIT/HANDS_CAST/001-hands+titsPICT.png"), script: (x) => {
		x.onmouseup = (ev) => {
			if (ev.x > 0 && ev.x < 50 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("PENES", "thrust");
			} else if (ev.x > 0 && ev.x < 100 &&
			ev.y > 0 && ev.y < 75) {
				playing.goto("quote3")
			} else if (ev.x > 100 && ev.x < 150 &&
			ev.y > 0 && ev.y < 67) {
				load_movie("PENES", "breathe");
			} else if (ev.x > 150 && ev.x < 200 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("TITS", "tits");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 0 && ev.y < 67) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 0 && ev.y < 25) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 300 && ev.x < 450 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("PENES", "words");
			} else if (ev.x > 450 && ev.x < 500 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("TITS", "tits");
			} else if (ev.x > 500 && ev.x < 575 &&
			ev.y > 0 && ev.y < 25) {
				load_movie("TITS", "poppy");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("ORGANS", "organs"); // top row ends
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 75 && ev.y < 150) {
				load_movie("ORGANS", "quote3");
			} else if (ev.x > 0 && ev.x < 150 &&
			ev.y > 150 && ev.y < 200) {
				load_movie("ARM", "arm");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 230 && ev.y < 250) {
				load_movie("ARM", "arm");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 250 && ev.y < 275) {
				load_movie("ORGANS", "organs");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 275 && ev.y < 290) {
				load_movie("TITS", "tits");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 290 && ev.y < 300) {
				load_movie("LUNGS", "slide");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 300 && ev.y < 320) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 320 && ev.y < 335) {
				load_movie("PENES", "disappear");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 335 && ev.y < 350) {
				load_movie("GLOTTIS", "bend");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 350 && ev.y < 365) {
				load_movie("SCAR", "close");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 365 && ev.y < 380) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 380 && ev.y < 395) {
				playing.goto("quote2")
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 395 && ev.y < 410) {
				playing.goto("quote6")
			} else if (ev.x > 0 && ev.x < 18 &&
			ev.y > 410 && ev.y < 430) {
				playing.goto("quote7")
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 200 && ev.y < 480) {
				load_movie("TITS", "tits"); // left side ends
			} else if (ev.x > 50 && ev.x < 125 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("PENES", "flick");
			} else if (ev.x > 125 && ev.x < 200 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("TITS", "tits");
			} else if (ev.x > 200 && ev.x < 250 &&
			ev.y > 300 && ev.y < 480) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 250 && ev.x < 300 &&
			ev.y > 375 && ev.y < 480) {
				load_movie("MEDICAL", "lungs");
			} else if (ev.x > 300 && ev.x < 325 &&
			ev.y > 375 && ev.y < 480) {
				load_movie("LUNGS", "pull");
			} else if (ev.x > 325 && ev.x < 375 &&
			ev.y > 375 && ev.y < 480) {
				load_movie("SCAR", "quote3");
			} else if (ev.x > 375 && ev.x < 450 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 450 && ev.x < 550 &&
			ev.y > 425 && ev.y < 480) {
				load_movie("STORIES", "story1");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("MEDICAL", "heart"); // bottom row ends
			} else if (ev.x > 564 && ev.x < 640 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("LUNGS", "quote1");
			} else if (ev.x > 575 && ev.x < 640 &&
			ev.y > 150 && ev.y < 300) {
				load_movie("WOUND", "quote2");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 300 && ev.y < 325) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 325 && ev.y < 350) {
				load_movie("ARM", "arm");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 350 && ev.y < 375) {
				load_movie("PENES", "allmove");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 375 && ev.y < 400) {
				load_movie("TITS", "tits"); // right side ends
			} else if (ev.x > 75 && ev.x < 200 &&
			ev.y > 75 && ev.y < 100) {
				load_movie("ARM", "quote4");
			} else if (ev.x > 75 && ev.x < 150 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("PRINTSTORIES", "print6");
			} else if (ev.x > 150 && ev.x < 200 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("WOUND", "quote2");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 67 && ev.y < 150) {
				load_movie("SCAR", "move");
			} else if (ev.x > 400 && ev.x < 500 &&
			ev.y > 50 && ev.y < 150) {
				load_movie("GLOTTIS", "spread");
			} else if (ev.x > 150 && ev.x < 350 &&
			ev.y > 150 && ev.y < 200) {
				load_movie("STORIES", "decompose");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 100 && ev.y < 200) {
				playing.goto("words")
			} else if (ev.x > 500 && ev.x < 575 &&
			ev.y > 25 && ev.y < 100) {
				load_movie("SCAR", "quote3");
			} else if (ev.x > 500 && ev.x < 564 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 525 && ev.x < 575 &&
			ev.y > 150 && ev.y < 250) {
				playing.goto("quote1")
			} else if (ev.x > 400 && ev.x < 450 &&
			ev.y > 150 && ev.y < 200) {
				playing.goto("quote5")
			} else if (ev.x > 400 && ev.x < 500 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("TMPOEMS", "poem3"); // upper centre ends
			} else if (ev.x > 50 && ev.x < 150 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("DIARY", "6th");
			} else if (ev.x > 50 && ev.x < 100 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 450 && ev.x < 575 &&
			ev.y > 150 && ev.y < 350) {
				load_movie("ARM", "arm");
			} else if (ev.x > 100 && ev.x < 150 &&
			ev.y > 300 && ev.y < 400) {
				playing.goto("quote4")
			} else if (ev.x > 150 && ev.x < 200 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 150 && ev.x < 250 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("SCAR", "kiss");
			} else if (ev.x > 250 && ev.x < 400 &&
			ev.y > 200 && ev.y < 250) {
				load_movie("GLOTTIS", "bend");
			} else if (ev.x > 400 && ev.x < 550 &&
			ev.y > 300 && ev.y < 425) {
				load_movie("TITS", "tits");
			} else if (ev.x > 325 && ev.x < 375 &&
			ev.y > 275 && ev.y < 350) {
				load_movie("ARM", "arm");
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 250 && ev.y < 375) {
				load_movie("PRINTSTORIES", "print5");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 250 && ev.y < 400) {
				load_movie("DIARY", "4th"); // lower centre ends
			}
		}
		}},
				{item: load_html('<div style="width: 577px; height: 268px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Abdication and inevitable fatigue - due to the fact that \'being\' is, </span><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold; font-style: italic;">par excellence </span><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">, that which, desired to the point of dread, cannot be endured - plunge human beings into a foggy labyrinth formed by the multitude \'of acquaintences\' with which signs of life and phrases can be exchanged."  </span><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times; ">   <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille: VISIONS OF EXCESS: SELECTED WRITINGS 1927-1939, trans & ed Allan Stoekl, Theory and History of Literature, vol 14, University of Minnesota Press, Minneapolis, 1985 p174<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 578px; height: 172px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...cognition is not solely a matter of formal symbol-manipulation but requires in addition a set of causal relations with the outside world."  <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Margaret A Boden: ESCAPING FROM THE CHINESE ROOM extracted from Chapter 8 of COMPUTER MODELS OF MIND 1988, Cambridge University Press.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 577px; height: 230px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...You can only get to the absolute when you are out of your mind.  After you have forgotten everything. Lost everything: normal life, sight. Goods. Possessions. Bodies. When you are not holding onto anything anymore. You don\'t get there from here ... You can only get there by doing violence to yourself."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Helene Cixous: ANGST John Calder Ltd, London, 1985, p190<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 577px; height: 182px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...I have been sent out into the light never to see him again- you arrive quite painlessly at that old comfort: death - all is lost, there is no reason to go on struggling and you lie down at last in the last bed face turned to the world..."    <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Helene Cixous: ANGST John Calder Ltd, London, 1985, p193<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 577px; height: 196px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...once the play of difference is no longer grounded in some external reality we are obliged to wonder how it is possible to produce any reference or statement at all."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Joan Copjec: CUTTING UP from BETWEEN FEMINISM AND PSYCHOANALYSIS  (ch 13) ed Teresa Brennan, Routledge, London, 1989, p239<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 576px; height: 129px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Narcissus kills himself because he realizes that he loves a fake."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Julia Kristeva: TALES OF LOVE trans Leon Roudiez, Columbia University Press, New York, 1987, p126<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 575px; height: 129px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"I\'m finding myself in my very self: and this is fatal because only death will complete me."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Clarice Lispector: AGUA VIVA (THE STREAM OF LIFE) trans C Lowe and E Fitz, University of Minnesota Press, Minneapolis, 1989, p69<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/HANDS_CAST/009-.png"), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/HANDS_CAST/010-.png"), script: (x) => {/**/}},
		{item: load_html('<div style="width: 623px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/HANDS_CAST/012-scratch.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/HANDS_CAST/013-zip.wav"), script: (x) => {/**/}},
		null, // global script
		{item: (mv) => {mv.goto("words")}, script: (x) => {}},
		{item: (mv) => {mv.goto("hands")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 520}, script: (x) => {}},
		{item: (mv) => {load_movie("DIARY", "9th")}, script: (x) => {}},
		{item: (mv) => {load_movie("ARM")}, script: (x) => {}},
		{item: (mv) => {load_movie("ORGANS")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 120}, script: (x) => {}},
		{item: (mv) => {load_movie("GLOTTIS")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 360}, script: (x) => {}},
		{item: (mv) => {mv.delay += 600}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: null, script: (x) => {/**/}},
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
	],	[
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0}]},
{"sounds":[null,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":1,"x":34,"y":113}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":2,"x":40,"y":131}]},
{"sounds":[null,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":2,"x":40,"y":131}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":23,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":3,"x":37,"y":115}]},
{"sounds":[null,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":3,"x":37,"y":115}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":4,"x":35,"y":123}]},
{"sounds":[null,null],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":4,"x":35,"y":123}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":5,"x":30,"y":140}]},
{"sounds":[null,null],"script":19,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":5,"x":30,"y":140}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":6,"x":36,"y":168}]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":6,"x":36,"y":168}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":7,"x":43,"y":160}]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":8,"x":-6,"y":-1},{"style":"","kind":"text","index":7,"x":43,"y":160}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":9,"x":254,"y":426}]},
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
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[12,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"","kind":"text","index":10,"x":89,"y":124}]},
{"sounds":[12,null],"script":14,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":0},{"style":"","kind":"text","index":10,"x":89,"y":124}]},
	]
);
