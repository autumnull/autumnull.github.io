movies["PENES"] = new movie(
	{"penes":0,"breathe":38,"quote1":70,"quote2":75,"quote3":80,"quote4":85,"quote5":90,"quote6":95,"timeout sequence":109,"flick":44,"thrust":24,"words":65,"allmove":9,"disappear":59},
	[
		{item: load_img("Typhoid Mary/PENES_CAST/001-cloth+severed penesPICT.png"), script: (x) => {
			x.onmouseup = (ev) => {
				if (ev.x > 0 && ev.x < 25 &&
				ev.y > 0 && ev.y < 50) {
					load_movie("TITS", "tits");
				} else if (ev.x > 25 && ev.x < 125 &&
				ev.y > 0 && ev.y < 35) {
					load_movie("TITS", "tits");
				} else if (ev.x > 75 && ev.x < 150 &&
				ev.y > 0 && ev.y < 100) {
					load_movie("ORGANS", "flap");
				} else if (ev.x > 150 && ev.x < 300 &&
				ev.y > 0 && ev.y < 50) {
					load_movie("DIARY", "13th");
				} else if (ev.x > 275 && ev.x < 375 &&
				ev.y > 0 && ev.y < 100) {
					load_movie("HANDS", "hands");
				} else if (ev.x > 375 && ev.x < 515 &&
				ev.y > 0 && ev.y < 50) {
					load_movie("ARM", "quote1");
				} else if (ev.x > 515 && ev.x < 550 &&
				ev.y > 0 && ev.y < 100) {
					load_movie("WOUND", "wound");
				} else if (ev.x > 550 && ev.x < 640 &&
				ev.y > 0 && ev.y < 50) {
					load_movie("TESTES", "testes"); // top row ends
				} else if (ev.x > 0 && ev.x < 75 &&
				ev.y > 35 && ev.y < 100) {
					load_movie("SCAR", "move");
				} else if (ev.x > 0 && ev.x < 125 &&
				ev.y > 100 && ev.y < 150) {
					load_movie("WOUND", "wound");
				} else if (ev.x > 0 && ev.x < 50 &&
				ev.y > 150 && ev.y < 250) {
					load_movie("MEDICAL", "typhoid");
				} else if (ev.x > 0 && ev.x < 100 &&
				ev.y > 250 && ev.y < 350) {
					load_movie("GLOTTIS", "words");
				} else if (ev.x > 0 && ev.x < 75 &&
				ev.y > 350 && ev.y < 480) {
					load_movie("TESTES", "testes"); // left side ends
				} else if (ev.x > 75 && ev.x < 120 &&
				ev.y > 350 && ev.y < 480) {
					playing.goto("quote2")
				} else if (ev.x > 120 && ev.x < 175 &&
				ev.y > 400 && ev.y < 480) {
					load_movie("HANDS", "hands");
				} else if (ev.x > 175 && ev.x < 227 &&
				ev.y > 375 && ev.y < 480) {
					load_movie("GLOTTIS", "spread");
				} else if (ev.x > 227 && ev.x < 275 &&
				ev.y > 375 && ev.y < 480) {
					playing.goto("quote5")
				} else if (ev.x > 275 && ev.x < 350 &&
				ev.y > 400 && ev.y < 480) {
					load_movie("TITS", "tits");
				} else if (ev.x > 350 && ev.x < 450 &&
				ev.y > 375 && ev.y < 480) {
					load_movie("DIARY", "12th");
				} else if (ev.x > 450 && ev.x < 500 &&
				ev.y > 350 && ev.y < 480) {
					load_movie("HANDS", "hands");
				} else if (ev.x > 500 && ev.x < 575 &&
				ev.y > 375 && ev.y < 480) {
					load_movie("ORGANS", "flap");
				} else if (ev.x > 575 && ev.x < 640 &&
				ev.y > 400 && ev.y < 480) {
					playing.goto("thrust"); // bottom row ends
				} else if (ev.x > 575 && ev.x < 640 &&
				ev.y > 50 && ev.y < 200) {
					load_movie("GLOTTIS", "quote4");
				} else if (ev.x > 600 && ev.x < 640 &&
				ev.y > 200 && ev.y < 300) {
					load_movie("SCAR", "close");
				} else if (ev.x > 575 && ev.x < 640 &&
				ev.y > 300 && ev.y < 400) {
					playing.goto("quote4"); // right side ends
				} else if (ev.x > 150 && ev.x < 275 &&
				ev.y > 50 && ev.y < 100) {
					load_movie("GLOTTIS", "allmove");
				} else if (ev.x > 275 && ev.x < 375 &&
				ev.y > 100 && ev.y < 175) {
					load_movie("TMPOEMS", "poem8");
				} else if (ev.x > 375 && ev.x < 425 &&
				ev.y > 50 && ev.y < 175) {
					playing.goto("breathe");
				} else if (ev.x > 425 && ev.x < 515 &&
				ev.y > 50 && ev.y < 150) {
					playing.goto("quote1");
				} else if (ev.x > 125 && ev.x < 225 &&
				ev.y > 100 && ev.y < 150) {
					playing.goto("flick");
				} else if (ev.x > 225 && ev.x < 275 &&
				ev.y > 100 && ev.y < 225) {
					load_movie("TITS", "tits"); // top centre ends 
				} else if (ev.x > 50 && ev.x < 100 &&
				ev.y > 150 && ev.y < 250) {
					playing.goto("quote3");
				} else if (ev.x > 100 && ev.x < 175 &&
				ev.y > 150 && ev.y < 200) {
					load_movie("TESTES", "testes");
				} else if (ev.x > 200 && ev.x < 225 &&
				ev.y > 150 && ev.y < 375) {
					playing.goto("words");
				} else if (ev.x > 225 && ev.x < 250 &&
				ev.y > 225 && ev.y < 375) {
					load_movie("PRINTSTORIES", "print16");
				} else if (ev.x > 125 && ev.x < 175 &&
				ev.y > 200 && ev.y < 400) {
					load_movie("STORIES", "story3");
				} else if (ev.x > 100 && ev.x < 200 &&
				ev.y > 150 && ev.y < 375) {
					load_movie("SCAR", "kiss");
				} else if (ev.x > 275 && ev.x < 335 &&
				ev.y > 200 && ev.y < 400) {
					load_movie("GLOTTIS", "bend");
				} else if (ev.x > 250 && ev.x < 375 &&
				ev.y > 175 && ev.y < 400) {
					load_movie("WOUND", "wound");
				} else if (ev.x > 375 && ev.x < 450 &&
				ev.y > 175 && ev.y < 375) {
					load_movie("PRINTSTORIES", "print15");
				} else if (ev.x > 425 && ev.x < 500 &&
				ev.y > 150 && ev.y < 325) {
					playing.goto("allmove");
				} else if (ev.x > 450 && ev.x < 550 &&
				ev.y > 200 && ev.y < 350) {
					load_movie("TITS", "poppy");
				} else if (ev.x > 550 && ev.x < 600 &&
				ev.y > 200 && ev.y < 300) {
					load_movie("TESTES", "testes"); // lower centre ends
				}
			}
		}},
		{item: load_img("Typhoid Mary/PENES_CAST/002-.png"), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary/PENES_CAST/003-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("breathe")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/004-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("breathe")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/005-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("breathe")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/006-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("breathe")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/007-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("thrust")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/008-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("disappear")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/009-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("disappear")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/010-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("flick")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/011-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("flick")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/012-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("disappear")}}},
		{item: load_img("Typhoid Mary/PENES_CAST/013-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("disappear")}}},
		{item: load_html('<div style="width: 529px; height: 196px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"... a programming language is a medium not only for expressing </span><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold; font-style: italic;">representations</span><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">  but also for bringing about the </span><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold; font-style: italic;">representational activity</span><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">  of certain machines."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Margaret A Boden: ESCAPING FROM THE CHINESE ROOM extracted from Chapter 8 of COMPUTER MODELS OF MIND 1988, Cambridge University Press.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary/PENES_CAST/015-.png"), script: (x) => {/**/}},
		{item: load_html('<div style="width: 529px; height: 196px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"The inherant procedural consequences of any computer program give it a toehold in semantics, where the semantics in question is not denotational but causal."<br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Margaret A Boden: ESCAPING FROM THE CHINESE ROOM extracted from Chapter 8 of COMPUTER MODELS OF MIND 1988, Cambridge University Press.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary/PENES_CAST/017-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("thrust")}}},
		{item: load_html('<div style="width: 411px; height: 72px; text-align: center"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">He only knows he\'s a man when his cock\'s in your arse.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 529px; height: 201px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"And as long as psychoanalysts maintain the separability of \'phallus\' from \'penis\', they can hold on to their \'phallus\' in the belief that their discourse has no relation to sexual inequality, no relation to politics."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Jane Gallop: FEMINISM AND PSYCHOANALYSIS: THE DAUGHTER\'S SEDUCTION, Macmillan Press, London, 1982, p97<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 529px; height: 244px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Photography is art like sex is fantasy, desire, imagination. It is one\'s own ideas projected onto the world, shaping and distorting the world, framing the world and making it into an object of art or an object of desire."<br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Jane Gallop: THINKING THROUGH THE BODY, (eds) Carol Heilbrun and Nancy Miller, Columbia University Press, NY, 1988, p156<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 499px; height: 148px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"We mustn\'t leave them a single place that\'s any more theirs alone than we are."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Helene Cixous: THE LAUGH OF THE MEDUSA, trans Keith & Paula Cohen, THEORY AND HISTORY OF LITERATURE vol 35, University of Minnesota Press, Minneapolis, 1985, p258<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 619px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary/PENES_CAST/023-squeak.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary/PENES_CAST/024-scratch.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary/PENES_CAST/025-mmm.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary/PENES_CAST/026-faster breathing.2.wav"), script: (x) => {/**/}},
		null, // global script
		{item: (mv) => {mv.goto("thrust")}, script: (x) => {}},
		{item: (mv) => {mv.goto("penes")}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: (mv) => {mv.goto("flick")}, script: (x) => {}},
		{item: (mv) => {mv.goto("allmove")}, script: (x) => {}},
		{item: (mv) => {mv.goto("breathe")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 120}, script: (x) => {}},
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
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"script":28,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[22,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[22,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":2,"x":20,"y":31}]},
{"sounds":[22,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":3,"x":21,"y":27}]},
{"sounds":[22,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":4,"x":17,"y":26},{"style":"","kind":"bitmap","index":6,"x":-4,"y":-3}]},
{"sounds":[22,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":5,"x":17,"y":31},{"style":"","kind":"bitmap","index":6,"x":-4,"y":-3}]},
{"sounds":[22,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":4,"x":17,"y":26}]},
{"sounds":[22,23],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":3,"x":21,"y":27},{"style":"","kind":"bitmap","index":9,"x":218,"y":120},{"style":"","kind":"bitmap","index":12,"x":223,"y":120}]},
{"sounds":[22,23],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":2,"x":20,"y":31},{"style":"","kind":"bitmap","index":10,"x":212,"y":119},{"style":"","kind":"bitmap","index":11,"x":216,"y":107}]},
{"sounds":[22,23],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":8,"x":576,"y":376},{"style":"","kind":"bitmap","index":9,"x":218,"y":120},{"style":"","kind":"bitmap","index":12,"x":223,"y":120}]},
{"sounds":[null,23],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":7,"x":571,"y":349}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":8,"x":576,"y":376}]},
{"sounds":[null,null],"script":31,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[23,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[23,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":8,"x":576,"y":376}]},
{"sounds":[23,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":7,"x":571,"y":349}]},
{"sounds":[23,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":8,"x":576,"y":376}]},
{"sounds":[23,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[23,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":8,"x":576,"y":376}]},
{"sounds":[23,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":7,"x":571,"y":349}]},
{"sounds":[23,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":8,"x":576,"y":376}]},
{"sounds":[null,null],"script":27,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[25,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[25,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":9,"x":218,"y":120},{"style":"","kind":"bitmap","index":12,"x":223,"y":120}]},
{"sounds":[25,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":10,"x":212,"y":119},{"style":"","kind":"bitmap","index":11,"x":216,"y":107}]},
{"sounds":[25,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":9,"x":218,"y":120},{"style":"","kind":"bitmap","index":12,"x":223,"y":120}]},
{"sounds":[null,null],"script":32,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[24,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":2,"x":20,"y":31}]},
{"sounds":[24,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":3,"x":21,"y":27}]},
{"sounds":[24,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":4,"x":17,"y":26},{"style":"","kind":"bitmap","index":6,"x":-4,"y":-3}]},
{"sounds":[24,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":5,"x":17,"y":31},{"style":"","kind":"bitmap","index":6,"x":-4,"y":-3}]},
{"sounds":[24,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":4,"x":17,"y":26}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":3,"x":21,"y":27}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":2,"x":20,"y":31}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"script":30,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"transition":52,"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"bitmap","index":16,"x":472,"y":-3}]},
{"transition":52,"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"script":30,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":29,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":1,"x":100,"y":18}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":29,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"opacity: 0.501961;","kind":"bitmap","index":14,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":13,"x":57,"y":155}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":29,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":1,"x":100,"y":18},{"style":"opacity: 0.501961;","kind":"bitmap","index":14,"x":-1,"y":-1},{"style":"","kind":"text","index":15,"x":56,"y":159}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":29,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"opacity: 0.501961;","kind":"bitmap","index":14,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":17,"x":91,"y":203}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":29,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"opacity: 0.501961;","kind":"bitmap","index":14,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":18,"x":57,"y":134}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":29,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":1,"x":100,"y":18},{"style":"opacity: 0.501961;","kind":"bitmap","index":14,"x":-1,"y":-1},{"style":"","kind":"text","index":19,"x":63,"y":131}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":29,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"opacity: 0.501961;","kind":"bitmap","index":14,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":20,"x":68,"y":168}]},
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
{"sounds":[25,null],"script":33,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"text","index":21,"x":87,"y":172}]},
{"sounds":[25,null],"script":30,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":-3},{"style":"","kind":"text","index":21,"x":87,"y":172}]},
	]
);
