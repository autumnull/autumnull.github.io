movies["GLOTTIS"] = new movie(
	{"glottis": 0, "bend": 21, "spread": 28, "allmove": 35, "words": 41, "quote1": 47, "quote2": 52, "quote3": 57, "quote4": 62, "quote5": 67, "quote6": 72, "timeout sequence": 82},
	[
		{
			item: load_img("Typhoid Mary/GLOTTIS_CAST/001-glottis+stuffPICT.png"),
			script: (x) => {x.onmouseup = (ev) => {
			if (ev.x > 0 && ev.x < 24 &&
			ev.y > 0 && ev.y < 150) {
				load_movie("SCAR", "close");
			} else if (ev.x > 24 && ev.x < 34 &&
			ev.y > 0 && ev.y < 150) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 34 && ev.x < 50 &&
			ev.y > 0 && ev.y < 150) {
				playing.goto("quote6")
			} else if (ev.x > 100 && ev.x < 150 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("LUNGS", "pull");
			} else if (ev.x > 50 && ev.x < 150 &&
			ev.y > 0 && ev.y < 150) {
				playing.goto("words")
			} else if (ev.x > 150 && ev.x < 200 &&
			ev.y > 0 && ev.y < 300) {
				load_movie("TMPOEMS", "poem7");
			} else if (ev.x > 200 && ev.x < 250 &&
			ev.y > 0 && ev.y < 350) {
				load_movie("PRINTSTORIES", "print13");
			} else if (ev.x > 250 && ev.x < 325 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("DIARY", "7th");
			} else if (ev.x > 325 && ev.x < 500 &&
			ev.y > 0 && ev.y < 25) {
				playing.goto("quote4")
			} else if (ev.x > 500 && ev.x < 550 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 550 && ev.x < 585 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("TITS", "poppy");
			} else if (ev.x > 585 && ev.x < 610 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("ARM", "arm");
			} else if (ev.x > 610 && ev.x < 640 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("SCAR", "close"); // top row ends
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 150 && ev.y < 325) {
				load_movie("MEDICAL", "heart");
			} else if (ev.x > 0 && ev.x < 25 &&
			ev.y > 325 && ev.y < 480) {
				load_movie("WOUND", "wound"); // left side ends
			} else if (ev.x > 25 && ev.x < 50 &&
			ev.y > 325 && ev.y < 480) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 25 && ev.x < 75 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("PENES", "penes");
			} else if (ev.x > 75 && ev.x < 150 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("SCAR", "move");
			} else if (ev.x > 150 && ev.x < 200 &&
			ev.y > 375 && ev.y < 480) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 150 && ev.x < 250 &&
			ev.y > 300 && ev.y < 480) {
				load_movie("PENES", "allmove");
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("LUNGS", "slide");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 425 && ev.y < 480) {
				playing.goto("quote2")
			} else if (ev.x > 450 && ev.x < 550 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 600 && ev.x < 640 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("ARM", "arm");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("PENES", "flick"); // bottom row ends
			} else if (ev.x > 585 && ev.x < 640 &&
			ev.y > 100 && ev.y < 175) {
				load_movie("LUNGS", "pull");
			} else if (ev.x > 585 && ev.x < 610 &&
			ev.y > 175 && ev.y < 350) {
				load_movie("PRINTSTORIES", "print14");
			} else if (ev.x > 610 && ev.x < 640 &&
			ev.y > 175 && ev.y < 350) {
				load_movie("TITS", "tits"); // right side ends
			} else if (ev.x > 350 && ev.x < 400 &&
			ev.y > 125 && ev.y < 200) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 325 && ev.x < 450 &&
			ev.y > 100 && ev.y < 225) {
				load_movie("SCAR", "kiss");
			} else if (ev.x > 300 && ev.x < 475 &&
			ev.y > 75 && ev.y < 250) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 250 && ev.x < 500 &&
			ev.y > 25 && ev.y < 275) {
				load_movie("STORIES", "story4"); // orifice ends
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 275 && ev.y < 425) {
				load_movie("ARM", "arm");
			} else if (ev.x > 250 && ev.x < 300 &&
			ev.y > 300 && ev.y < 350) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 275 && ev.y < 400) {
				load_movie("SCAR", "words");
			} else if (ev.x > 450 && ev.x < 500 &&
			ev.y > 275 && ev.y < 350) {
				load_movie("DIARY", "10th");
			} else if (ev.x > 500 && ev.x < 550 &&
			ev.y > 200 && ev.y < 300) {
				playing.goto("quote3")
			} else if (ev.x > 450 && ev.x < 585 &&
			ev.y > 250 && ev.y < 400) {
				load_movie("TITS", "tits"); // lower right ends
			} else if (ev.x > 550 && ev.x < 585 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("LUNGS", "pull");
			} else if (ev.x > 500 && ev.x < 540 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("WOUND", "quote3");
			} else if (ev.x > 540 && ev.x < 585 &&
			ev.y > 100 && ev.y < 200) {
				playing.goto("quote1") // upper right centre ends
			} else if (ev.x > 70 && ev.x < 85 &&
			ev.y > 190 && ev.y < 250) {
				load_movie("PENES", "breathe");
			} else if (ev.x > 50 && ev.x < 100 &&
			ev.y > 150 && ev.y < 275) {
				load_movie("TITS", "quote4");
			} else if (ev.x > 50 && ev.x < 100 &&
			ev.y > 275 && ev.y < 350) {
				load_movie("TITS", "tits");
			} else if (ev.x > 75 && ev.x < 150 &&
			ev.y > 150 && ev.y < 400) {
				load_movie("PENES", "allmove"); // left centre ends
			}
			}}
		},
		{item: load_img("Typhoid Mary/GLOTTIS_CAST/002-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("spread")}}},
		{item: load_img("Typhoid Mary/GLOTTIS_CAST/003-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("bend")}}},
		{item: load_img("Typhoid Mary/GLOTTIS_CAST/004-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("glottis")}}},
		{item: load_img("Typhoid Mary/GLOTTIS_CAST/005-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("glottis")}}},
		{item: load_img("Typhoid Mary/GLOTTIS_CAST/006-.png"), script: (x) => {}},
		{item: load_html('<div style="width: 533px; height: 234px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...if the other caves in and withdraws under my act, my act drops off the edge of that emptiness and I feel that I will soon follow. In this void, the fear of the boundless begins."<br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times;  font-weight: bold;"><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Jessica Benjamin: THE BONDS OF LOVE: RATIONAL VIOLENCE AND EROTIC DOMINATION, from THE FUTURE OF DIFFERENCE by Hester Eisenstein & Alice Jardine, Copyright Ⓒ 1985 by Rutgers University, The State University of New Jersey.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary/GLOTTIS_CAST/008-.png"), script: (x) => {/**/}},
		{item: load_html('<div style="width: 533px; height: 215px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"To learn a language is to set up the relevant causal connections, not only between words and the world but between words and the many non-introspectable procedures involved in interpreting them."<br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times;  font-weight: bold;"><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Margaret A Boden: ESCAPING FROM THE CHINESE ROOM extracted from Chapter 8 of COMPUTER MODELS OF MIND 1988, Cambridge University Press.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 554px; height: 220px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">(a programmed instruction) "...is not a mere formal pattern - nor even a declarative statement... It is a procedure specification that given a suitable hardware context, can cause the procedure in question to be executed."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Margaret A Boden: ESCAPING FROM THE CHINESE ROOM extracted from Chapter 8 of COMPUTER MODELS OF MIND 1988, Cambridge University Press.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 529px; height: 268px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"To say that sexuality does not exist as such is simultaneously not at all to deny the reality of the sexual in human life and the force and variousness of its experience: on the contrary, it is the beginning of an attempt to displace the particular and limiting representation of it that we know today as \'sexuality\'."<br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times;  font-weight: bold;"><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Stephen Heath: THE SEXUAL FIX, Macmillan Press, London, 1982, p3<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 528px; height: 172px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"The death that \'I\' am provokes horror, there is a choking sensation that does not separate inside from outside but draws them the one into the other indefinitely."<br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times;  font-weight: bold;"><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Julia Kristeva: POWERS OF HORROR trans Leon Roudiez, Columbia University Press, New York, 1982, p25<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 530px; height: 239px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"For the woman\'s unconscious is \'the noise\' in the system, the defect... This unconscious had to be tamed, silenced out of fear that, were it to return in the midst of existing order, it would bring the machine to a deadly halt."<br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times;  font-weight: bold;"><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Josette Feral: THE POWERS OF DIFFERENCE, from THE FUTURE OF DIFFERENCE by Hester Eisenstein & Alice Jardine, Copyright Ⓒ 1985 by Rutgers University, The State University of New Jersey. p90<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 530px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary/GLOTTIS_CAST/015-breath out.wav"), script: (x) => {}},
		{item: new Audio("Typhoid Mary/GLOTTIS_CAST/016-squeak.wav"), script: (x) => {}},
		null,
		{item: new Audio("Typhoid Mary/GLOTTIS_CAST/018-scrape.wav"), script: (x) => {}},
		{item: new Audio("Typhoid Mary/GLOTTIS_CAST/019-breathing2.wav"), script: (x) => {}},
		null, // global script
		{item: (mv) => {mv.goto("bend")}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: (mv) => {mv.delay += 80}, script: (x) => {}},
		{item: (mv) => {mv.goto("spread")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 20}, script: (x) => {}},
		{item: (mv) => {mv.goto("allmove")}, script: (x) => {}},
		{item: (mv) => {mv.goto("glottis")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 180}, script: (x) => {}},
		{item: (mv) => {mv.delay += 120}, script: (x) => {}},
		{item: (mv) => {fadein(0)}, script: (x) => {}},
		{item: (mv) => {fadeout(0)}, script: (x) => {}},
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
{"sounds":[18,null],"script":29,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,null],"script":30,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,17],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,17],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,17],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,17],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[18,17],"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,18],"script":26,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":467,"y":295}]},
{"sounds":[null,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":4,"x":468,"y":295}]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":467,"y":295}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":2,"x":0,"y":331}]},
{"sounds":[null,null],"script":23,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[14,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":2,"x":0,"y":331}]},
{"sounds":[14,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":467,"y":295}]},
{"sounds":[14,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":4,"x":468,"y":295}]},
{"sounds":[14,null],"script":25,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"bitmap","index":1,"x":467,"y":295}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":5,"x":9,"y":216}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":6,"x":53,"y":128}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":8,"x":55,"y":121}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":5,"x":9,"y":200},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":9,"x":60,"y":151}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-1,"y":-1},{"style":"","kind":"text","index":10,"x":59,"y":112}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":27,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":11,"x":62,"y":156}]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":11,"x":62,"y":156}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-1,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":12,"x":58,"y":125}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[15,null],"script":28,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"text","index":13,"x":69,"y":108}]},
{"sounds":[15,null],"script":23,"sprites":[{"style":"","kind":"bitmap","index":0,"x":0,"y":0},{"style":"","kind":"text","index":13,"x":69,"y":108}]},
	]
);
