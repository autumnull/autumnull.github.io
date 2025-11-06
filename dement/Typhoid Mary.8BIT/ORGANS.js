movies["ORGANS"] = new movie(
	{"quote1":16,"quote2":20,"quote3":24,"quote4":28,"quote5":32,"flap":44,"timeout sequence":59,"organs":0,"words":38},
	[
		{item: load_img("Typhoid Mary.8BIT/ORGANS_CAST/001-organs+PICT.png"), script: (x) => {
		x.onmouseup = (ev) => {
			if (ev.x > 0 && ev.x < 50 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("GLOTTIS", "bend");
			} else if (ev.x > 50 && ev.x < 125 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("LUNGS", "pull");
			} else if (ev.x > 125 && ev.x < 275 &&
			ev.y > 0 && ev.y < 50) {
				playing.goto("quote1")
			} else if (ev.x > 275 && ev.x < 350 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("SCAR", "kiss");
			} else if (ev.x > 350 && ev.x < 400 &&
			ev.y > 0 && ev.y < 50) {
				playing.goto("quote4")
			} else if (ev.x > 400 && ev.x < 475 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("GLOTTIS", "spread");
			} else if (ev.x > 475 && ev.x < 525 &&
			ev.y > 0 && ev.y < 75) {
				playing.goto("quote5")
			} else if (ev.x > 525 && ev.x < 640 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("LUNGS", "slide"); //top row ends
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 50 && ev.y < 150) {
				load_movie("SCAR", "close");
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("ARM", "arm");
			} else if (ev.x > 0 && ev.x < 150 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("MEDICAL", "lungs");
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("TESTES", "quote1");
			} else if (ev.x > 0 && ev.x < 100 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("TESTES", "testes"); // left side ends
			} else if (ev.x > 100 && ev.x < 200 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("WOUND", "quote5");
			} else if (ev.x > 200 && ev.x < 275 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("HANDS", "quote7");
			} else if (ev.x > 275 && ev.x < 350 &&
			ev.y > 425 && ev.y < 480) {
				load_movie("GLOTTIS", "spread");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 425 && ev.y < 480) {
				load_movie("TITS", "quote2");
			} else if (ev.x > 450 && ev.x < 500 &&
			ev.y > 425 && ev.y < 480) {
				load_movie("PENES", "flick");
			} else if (ev.x > 500 && ev.x < 550 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("GLOTTIS", "quote5"); // bottom row ends
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("LUNGS", "slide"); 
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 50 && ev.y < 200) {
				load_movie("PRINTSTORIES", "print4");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 200 && ev.y < 250) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("ARM", "arm");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("LUNGS", "quote3"); // right side ends
			} else if (ev.x > 50 && ev.x < 100 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("MEDICAL", "typhoid");
			} else if (ev.x > 100 && ev.x < 150 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("MEDICAL", "heart");
			} else if (ev.x > 150 && ev.x < 200 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("PENES", "thrust");
			} else if (ev.x > 200 && ev.x < 350 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 50 && ev.y < 100) {
				load_movie("TITS", "poppy");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 225 && ev.y < 300) {
				load_movie("GLOTTIS", "bend");
			} else if (ev.x > 300 && ev.x < 350 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("DIARY", "9th");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 150 && ev.y < 225) {
				playing.goto("quote3")
			} else if (ev.x > 100 && ev.x < 175 &&
			ev.y > 275 && ev.y < 350) {
				playing.goto("quote3")
			} else if (ev.x > 150 && ev.x < 250 &&
			ev.y > 250 && ev.y < 350) {
				load_movie("TITS", "tits"); // orifices ends
			} else if (ev.x > 50 && ev.x < 200 &&
			ev.y > 50 && ev.y < 150) {
				load_movie("PRINTSTORIES", "print3");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 50 && ev.y < 100) {
				playing.goto("quote2")
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 75 && ev.y < 150) {
				load_movie("SCAR", "move");
			} else if (ev.x > 450 && ev.x < 550 &&
			ev.y > 50 && ev.y < 150) {
				load_movie("DIARY", "8th");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 450 && ev.x < 500 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("HANDS", "words");
			} else if (ev.x > 500 && ev.x < 550 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("LUNGS", "quote4"); // top centre ends
			} else if (ev.x > 50 && ev.x < 150 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("GLOTTIS", "spread");
			} else if (ev.x > 150 && ev.x < 250 &&
			ev.y > 350 && ev.y < 400) {
				load_movie("TESTES", "quote3");
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 300 && ev.y < 400) {
				playing.goto("words")
			} else if (ev.x > 350 && ev.x < 400 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("TITS", "tits");
			} else if (ev.x > 275 && ev.x < 400 &&
			ev.y > 400 && ev.y < 425) {
				load_movie("SCAR", "close");
			} else if (ev.x > 400 && ev.x < 500 &&
			ev.y > 300 && ev.y < 375) {
				load_movie("TMPOEMS", "poem2");
			} else if (ev.x > 400 && ev.x < 500 &&
			ev.y > 375 && ev.y < 425) {
				load_movie("PENES", "breathe");
			} else if (ev.x > 450 && ev.x < 550 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("STORIES", "story2");
			} else if (ev.x > 500 && ev.x < 550 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("ARM", "arm"); // lower centre ends
			}
		}
		}},
		{item: load_html('<div style="width: 576px; height: 220px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"... the necessity of throwing oneself, or something of oneself </span><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold; font-style: italic;">out of oneself</span><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">  remains the psychological or physiological mechanism that in certain cases can have no other end than death."      <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille: VISIONS OF EXCESS: SELECTED WRITINGS 1927-1939, trans & ed Allan Stoekl,Theory and History of Literature, vol 14, University of Minnesota Press, Minneapolis, 1985, p67<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 575px; height: 196px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"The brain itself does not \'manipulate symbols\'; the brain is the medium in which the symbols are floating and in which the they trigger each other."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Margaret A Boden: ESCAPING FROM THE CHINESE ROOM extracted from Chapter 8 of COMPUTER MODELS OF MIND 1988, Cambridge University Press.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 574px; height: 196px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"She realizes that she can no longer pass between dream and reality... that only death has the power to make the love she dreams of definitive."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Helene Cixous: WRITING DIFFERENCES: READINGS FROM THE SEMINAR OF HELENE CIXOUS (ed) Susan Sellers, Open University Press, Milton Keynes, UK, 1988, p79<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 555px; height: 292px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Something has to be dissolved in order to experiment with the first stage of freedom. The moment of freedom, an anguishing </span><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold; font-style: italic;">moment-eclair </span><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">, is in any case ephemeral, <br/>a bolt between disorganization and organization. One has a glimpse of something else. But it can be effectuated only in violence."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Helene Cixous: READING WITH CLARICE LISPECTOR  ed & trans Verena Andermatt Conley, Theory and History of Literature vol 73, University of Minnesota Press, Minneapolis, 1990, p30<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 575px; height: 177px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"I love objects insofar as they don\'t love me. But if I don\'t understand what I write, the fault isn\'t mine. I have to speak because to speak saves. But I have no word to say."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Clarice Lispector: AGUA VIVA (THE STREAM OF LIFE) trans C Lowe and E Fitz, University of Minnesota Press, Minneapolis, 1989, p70<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/ORGANS_CAST/007-.png"), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/ORGANS_CAST/008-.png"), script: (x) => {x.onmouseup = (ev) => {load_movie("MEDICAL", "brain")}}},
		{item: load_img("Typhoid Mary.8BIT/ORGANS_CAST/009-.png"), script: (x) => {x.onmouseup = (ev) => {load_movie("MEDICAL", "heart")}}},
		{item: load_html('<div style="width: 629px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/ORGANS_CAST/011-short sleepgroan.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/ORGANS_CAST/012-sleepgroan.wav"), script: (x) => {/**/}},
		{item: null, script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/ORGANS_CAST/014-scratch.wav"), script: (x) => {/**/}},
		null, // global script
		{item: (mv) => {mv.delay += 240}, script: (x) => {}},
		{item: (mv) => {mv.goto("organs")}, script: (x) => {}},
		{item: (mv) => {load_movie("DIARY", "6th")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 420}, script: (x) => {}},
		{item: (mv) => {load_movie("PENES", "allmove")}, script: (x) => {}},
		{item: (mv) => {load_movie("WOUND")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 560}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: (mv) => {mv.goto("flap")}, script: (x) => {}},
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
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,11],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":1,"x":38,"y":131}]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":1,"x":38,"y":131}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":2,"x":36,"y":156}]},
{"sounds":[null,null],"script":19,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":2,"x":36,"y":156}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":3,"x":43,"y":155}]},
{"sounds":[null,null],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":3,"x":43,"y":155}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":4,"x":44,"y":103}]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":4,"x":44,"y":103}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":5,"x":46,"y":157}]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":5,"x":46,"y":157}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":6,"x":87,"y":51}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":8,"x":363,"y":9}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":7,"x":363,"y":9}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":7,"x":363,"y":9}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":8,"x":363,"y":9}]},
{"sounds":[null,null],"script":23,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[13,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":9,"x":90,"y":91}]},
{"sounds":[13,null],"script":23,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":9,"x":90,"y":91}]},
	]
);
