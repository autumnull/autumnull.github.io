movies["SCAR"] = new movie(
	{"scar": 0, "move": 17, "kiss": 28, "close": 36, "words": 44, "quote1": 50, "quote2": 55, "quote3": 60, "quote4": 65, "quote5": 70, "timeout sequence": 80},
	[
		{
			item: load_img("Typhoid Mary/SCAR_CAST/001-scar+stuffPICT.png"),
			script: (x) => {x.onmouseup = (ev) => {
			if (ev.x > 0 && ev.x < 50 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("PENES", "flick");
			} else if (ev.x > 50 && ev.x < 150 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 150 && ev.x < 250 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("WOUND", "quote4");
			} else if (ev.x > 250 && ev.x < 300 &&
			ev.y > 0 && ev.y < 150) {
				playing.goto("quote1")
			} else if (ev.x > 300 && ev.x < 350 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("TITS", "quote3");
			} else if (ev.x > 475 && ev.x < 525 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("TITS", "poppy");
			} else if (ev.x > 575 && ev.x < 620 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 450 && ev.x < 575 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 620 && ev.x < 640 &&
			ev.y > 0 && ev.y < 75) {
				playing.goto("quote4") // top row ends
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 50 && ev.y < 125) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 0 && ev.x < 100 &&
			ev.y > 125 && ev.y < 175) {
				load_movie("PENES", "quote1");
			} else if (ev.x > 0 && ev.x < 100 &&
			ev.y > 175 && ev.y < 225) {
				load_movie("PENES", "disappear");
			} else if (ev.x > 50 && ev.x < 175 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 0 && ev.x < 200 &&
			ev.y > 225 && ev.y < 300) {
				load_movie("ARM", "arm");
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 300 && ev.y < 375) {
				load_movie("ARM", "words");
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 375 && ev.y < 425) {
				load_movie("PENES", "quote2");
			} else if (ev.x > 0 && ev.x < 100 &&
			ev.y > 425 && ev.y < 480) {
				load_movie("ORGANS", "organs"); // left side ends 
			} else if (ev.x > 100 && ev.x < 150 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("ARM", "arm");
			} else if (ev.x > 150 && ev.x < 250 &&
			ev.y > 425 && ev.y < 480) {
				load_movie("MEDICAL", "lungs");
			} else if (ev.x > 250 && ev.x < 325 &&
			ev.y > 425 && ev.y < 480) {
				playing.goto("quote5")
			} else if (ev.x > 325 && ev.x < 400 &&
			ev.y > 425 && ev.y < 480) {
				load_movie("HANDS", "quote2");
			} else if (ev.x > 400 && ev.x < 475 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 475 && ev.x < 550 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("PRINTSTORIES", "print20");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("GLOTTIS", "bend"); // bottom row ends
			} else if (ev.x > 575 && ev.x < 640 &&
			ev.y > 75 && ev.y < 150) {
				load_movie("LUNGS", "quote2");
			} else if (ev.x > 575 && ev.x < 640 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("TITS", "tits");
			} else if (ev.x > 575 && ev.x < 640 &&
			ev.y > 250 && ev.y < 325) {
				load_movie("PENES", "quote6");
			} else if (ev.x > 600 && ev.x < 640 &&
			ev.y > 325 && ev.y < 400) {
				load_movie("WOUND", "quote2"); // right side ends
			} else if (ev.x > 200 && ev.x < 250 &&
			ev.y > 275 && ev.y < 300) {
				load_movie("ARM", "arm");
			} else if (ev.x > 200 && ev.x < 250 &&
			ev.y > 235 && ev.y < 275) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 250 && ev.x < 260 &&
			ev.y > 235 && ev.y < 275) {
				load_movie("PENES", "breathe");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("GLOTTIS", "spread");
			} else if (ev.x > 300 && ev.x < 375 &&
			ev.y > 150 && ev.y < 200) {
				load_movie("GLOTTIS", "spread"); 
			} else if (ev.x > 375 && ev.x < 425 &&
			ev.y > 125 && ev.y < 200) {
				load_movie("STORIES", "story2");
			} else if (ev.x > 300 && ev.x < 375 &&
			ev.y > 200 && ev.y < 275) {
				load_movie("PRINTSTORIES", "print21");
			} else if (ev.x > 300 && ev.x < 450 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("TMPOEMS", "poem9"); // orifices end
			} else if (ev.x > 100 && ev.x < 175 &&
			ev.y > 150 && ev.y < 225) {
				load_movie("GLOTTIS", "bend");
			} else if (ev.x > 175 && ev.x < 300 &&
			ev.y > 150 && ev.y < 225) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 50 && ev.x < 150 &&
			ev.y > 50 && ev.y < 150) {
				playing.goto("words")
			} else if (ev.x > 150 && ev.x < 250 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("TITS", "words");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 50 && ev.y < 100) {
				load_movie("HANDS", "quote5");
			} else if (ev.x > 400 && ev.x < 450 &&
			ev.y > 50 && ev.y < 100) {
				load_movie("ORGANS", "quote4");
			} else if (ev.x > 500 && ev.x < 575 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("ARM", "arm");
			} else if (ev.x > 425 && ev.x < 500 &&
			ev.y > 100 && ev.y < 200) {
				playing.goto("quote2")
			} else if (ev.x > 75 && ev.x < 200 &&
			ev.y > 300 && ev.y < 350) {
				load_movie("TITS", "tits");
			} else if (ev.x > 450 && ev.x < 575 &&
			ev.y > 200 && ev.y < 250) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 50 && ev.x < 200 &&
			ev.y > 350 && ev.y < 425) {
				playing.goto("quote3")
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 300 && ev.y < 350) {
				playing.goto("words")
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 350 && ev.y < 425) {
				load_movie("DIARY", "21st");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 325 && ev.y < 425) {
				load_movie("DIARY", "1st");
			} else if (ev.x > 400 && ev.x < 500 &&
			ev.y > 275 && ev.y < 400) {
				load_movie("LUNGS", "slide");
			} else if (ev.x > 500 && ev.x < 575 &&
			ev.y > 250 && ev.y < 350) {
				load_movie("ARM", "arm");
			} else if (ev.x > 375 && ev.x < 500 &&
			ev.y > 200 && ev.y < 275) {
				load_movie("PRINTSTORIES", "print19");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 275 && ev.y < 325) {
				load_movie("DIARY", "21st");
			} else if (ev.x > 550 && ev.x < 600 &&
			ev.y > 325 && ev.y < 400) {
				load_movie("GLOTTIS", "quote1");
			}
			}}
		},
		{item: load_img("Typhoid Mary/SCAR_CAST/002-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("kiss")}}},
		{item: load_img("Typhoid Mary/SCAR_CAST/003-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("close")}}},
		{item: load_img("Typhoid Mary/SCAR_CAST/004-.png"), script: (x) => {}},
		{item: load_html('<div style="width: 551px; height: 244px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Everything is false in fantasy. And everything is false with a lie that knows neither hesitation nor shame... The truth as pursued by science is true only provided that it be without meaning, and nothing has meaning unless it be fiction."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille: VISIONS OF EXCESS, (trans & ed) Allan Stoekl, Theory and History of Literature vol 14, University of Minnesota Press, Minneapolis, 1985<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary/SCAR_CAST/006-.png"), script: (x) => {/**/}},
		{item: load_html('<div style="width: 552px; height: 225px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...sexual violence causes a wound that rarely heals of its own accord; it has to be closed, and will not remain closed without constant attention based on anguish. Primary anguish bound up with sexual disturbance signifies death."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille: EROTISM: DEATH AND SENSUALITY , trans Mary Dalwood, City Light Books, San Francisco, 1986<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 529px; height: 129px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"The division between men and women is lived as a division within woman."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Jane Gallop: FEMINISM AND PSYCHOANALYSIS:THE DAUGHTER\'S SEDUCTION, Macmillan Press, London, 1982, p106<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 547px; height: 244px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Artist, politicians and scientists have the responsibility of lying to him; those who dominate existence in this way are almost always those who know best how to lie to themselves, hence those who lie best to others."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille: VISIONS OF EXCESS, trans & ed Allan Stoekl, THEORY AND HISTORY OF LITERATURE, vol 14, University of Minnesota Press, Minneapolis, 1985, p224 <br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 511px; height: 167px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Censor the body and you censor breath and speech at the same time."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Helene Cixous: THE LAUGH OF THE MEDUSA, from NEW FRENCH FEMINISMS, trans Keith & Paule Cohen, THEORY AND HISTORY OF LITERATURE vol 35, University of Minnesota Press, Minneapolis, 1985, p 251<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 625px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary/SCAR_CAST/012-sigh.wav"), script: (x) => {}},
		{item: new Audio("Typhoid Mary/SCAR_CAST/013-scrape.wav"), script: (x) => {}},
		{item: new Audio("Typhoid Mary/SCAR_CAST/014-mmhuh.wav"), script: (x) => {}},
		null, // global script
		{item: (mv) => {mv.goto("scar")}, script: (x) => {}},
		{item: (mv) => {mv.goto("move")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 80}, script: (x) => {}},
		{item: (mv) => {mv.goto("kiss")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 120}, script: (x) => {}},
		{item: (mv) => {mv.delay += 40}, script: (x) => {}},
		{item: (mv) => {mv.goto("close")}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: (mv) => {mv.delay += 520}, script: (x) => {}},
		{item: (mv) => {load_movie("PRINTSTORIES", "print17")}, script: (x) => {}},
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
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[11,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,13],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":309,"y":108}]},
{"sounds":[null,13],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":309,"y":108},{"style":"","kind":"bitmap","index":2,"x":204,"y":229}]},
{"sounds":[null,13],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":2,"x":204,"y":229}]},
{"sounds":[null,null],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":2,"x":204,"y":229}]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":309,"y":108},{"style":"","kind":"bitmap","index":2,"x":204,"y":229}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":2,"x":204,"y":229}]},
{"sounds":[null,null],"script":19,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":2,"x":204,"y":229}]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,12],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":309,"y":108}]},
{"sounds":[null,12],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":309,"y":108}]},
{"sounds":[null,12],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,12],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,12],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":309,"y":108}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":3,"x":7,"y":16}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":23,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-3,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":4,"x":49,"y":126}]},
{"sounds":[null,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-3,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":4,"x":49,"y":126}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-3,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":6,"x":44,"y":121}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-3,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":7,"x":58,"y":176}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":23,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-3,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":8,"x":57,"y":116}]},
{"sounds":[null,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-3,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":8,"x":57,"y":116}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":19,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-3,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":9,"x":57,"y":170}]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-3,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":9,"x":57,"y":170}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[12,null],"script":19,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"text","index":10,"x":79,"y":120}]},
{"sounds":[12,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"text","index":10,"x":79,"y":120}]},
	]
);
