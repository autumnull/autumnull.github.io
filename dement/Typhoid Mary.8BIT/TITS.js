movies["TITS"] = new movie(
	{"quote1":14,"quote2":19,"quote3":24,"quote4":29,"words":34,"tits":0,"timeout sequence":57,"poppy":39},
	[
		{item: load_img("Typhoid Mary.8BIT/TITS_CAST/001-tits+stuffPICT.png"), script: (x) => {
		x.onmouseup = (ev) => {
			if (ev.x > 0 && ev.x < 75 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("LUNGS", "pull");
			} else if (ev.x > 50 && ev.x < 250 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("ARM", "arm");
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 0 && ev.y < 50) {
				playing.goto("words")
			} else if (ev.x > 350 && ev.x < 500 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 500 && ev.x < 600 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("PENES", "flick");
			} else if (ev.x > 600 && ev.x < 640 &&
			ev.y > 0 && ev.y < 18) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 600 && ev.x < 640 &&
			ev.y > 18 && ev.y < 32) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 600 && ev.x < 640 &&
			ev.y > 32 && ev.y < 50) {
				load_movie("HANDS", "hands"); // top row ends
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 75 && ev.y < 100) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 100 && ev.y < 225) {
				load_movie("ARM", "arm");
			} else if (ev.x > 0 && ev.x < 100 &&
			ev.y > 225 && ev.y < 300) {
				load_movie("DIARY", "17th");
			} else if (ev.x > 0 && ev.x < 100 &&
			ev.y > 300 && ev.y < 350) {
				load_movie("LUNGS", "quote4");
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 350 && ev.y < 450) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 450 && ev.y < 480) {
				load_movie("SCAR", "close"); // left side ends
			} else if (ev.x > 50 && ev.x < 125 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("SCAR", "quote2");
			} else if (ev.x > 125 && ev.x < 200 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("ARM", "arm");
			} else if (ev.x > 200 && ev.x < 225 &&
			ev.y > 425 && ev.y < 480) {
				load_movie("LUNGS", "quote3");
			} else if (ev.x > 225 && ev.x < 300 &&
			ev.y > 350 && ev.y < 425) {
				load_movie("LUNGS", "slide");
			} else if (ev.x > 225 && ev.x < 300 &&
			ev.y > 425 && ev.y < 480) {
				load_movie("MEDICAL", "lungs");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("PRINTSTORIES", "print8");
			} else if (ev.x > 400 && ev.x < 500 &&
			ev.y > 435 && ev.y < 480) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 450 && ev.x < 525 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("GLOTTIS", "spread");
			} else if (ev.x > 500 && ev.x < 575 &&
			ev.y > 300 && ev.y < 480) {
				load_movie("LUNGS", "pull");
			} else if (ev.x > 575 && ev.x < 640 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("SCAR", "move"); // bottom row ends
			} else if (ev.x > 500 && ev.x < 640 &&
			ev.y > 50 && ev.y < 100) {
				load_movie("ORGANS", "organs");
			} else if (ev.x > 600 && ev.x < 640 &&
			ev.y > 100 && ev.y < 200) {
				playing.goto("quote3")
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("LUNGS", "slide");
			} else if (ev.x > 575 && ev.x < 640 &&
			ev.y > 300 && ev.y < 350) {
				load_movie("SCAR", "quote1"); // right side ends
			} else if (ev.x > 75 && ev.x < 150 &&
			ev.y > 50 && ev.y < 100) {
				load_movie("PRINTSTORIES", "print7");
			} else if (ev.x > 150 && ev.x < 275 &&
			ev.y > 50 && ev.y < 89) {
				load_movie("PENES", "thrust");
			} else if (ev.x > 125 && ev.x < 250 &&
			ev.y > 89 && ev.y < 150) {
				playing.goto("quote1")
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 50 && ev.y < 100) {
				load_movie("PENES", "quote1");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 50 && ev.y < 125) {
				playing.goto("quote4")
			} else if (ev.x > 400 && ev.x < 500 &&
			ev.y > 50 && ev.y < 75) {
				load_movie("GLOTTIS", "quote1");
			} else if (ev.x > 400 && ev.x < 450 &&
			ev.y > 75 && ev.y < 150) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 80 && ev.x < 175 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("LUNGS", "words");
			} else if (ev.x > 50 && ev.x < 80 &&
			ev.y > 100 && ev.y < 225) {
				load_movie("GLOTTIS", "quote2");
			} else if (ev.x > 100 && ev.x < 200 &&
			ev.y > 200 && ev.y < 250) {
				load_movie("PENES", "breathe");
			} else if (ev.x > 175 && ev.x < 300 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("TMPOEMS", "poem4");
			} else if (ev.x > 250 && ev.x < 400 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("SCAR", "kiss");
			} else if (ev.x > 450 && ev.x < 500 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("GLOTTIS", "allmove");
			} else if (ev.x > 500 && ev.x < 550 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("STORIES", "story7");
			} else if (ev.x > 550 && ev.x < 600 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 425 && ev.x < 500 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 375 && ev.x < 475 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 300 && ev.x < 425 &&
			ev.y > 150 && ev.y < 200) {
				load_movie("GLOTTIS", "spread");
			} else if (ev.x > 300 && ev.x < 375 &&
			ev.y > 200 && ev.y < 250) {
				playing.goto("words") 
			} else if (ev.x > 175 && ev.x < 375 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("GLOTTIS", "bend"); // top centre ends
			} else if (ev.x > 100 && ev.x < 175 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("SCAR", "close");
			} else if (ev.x > 50 && ev.x < 115 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 125 && ev.x < 175 &&
			ev.y > 325 && ev.y < 400) {
				load_movie("GLOTTIS", "bend");
			} else if (ev.x > 175 && ev.x < 375 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("GLOTTIS", "glottis");
			} else if (ev.x > 450 && ev.x < 500 &&
			ev.y > 250 && ev.y < 400) {
				load_movie("DIARY", "18th");
			} else if (ev.x > 500 && ev.x < 550 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("SCAR", "move");
			} else if (ev.x > 400 && ev.x < 450 &&
			ev.y > 300 && ev.y < 375) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 375 && ev.x < 450 &&
			ev.y > 325 && ev.y < 400) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 325 && ev.x < 450 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("LUNGS", "slide");
			} else if (ev.x > 125 && ev.x < 225 &&
			ev.y > 300 && ev.y < 425) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 225 && ev.x < 325 &&
			ev.y > 300 && ev.y < 400) {
				playing.goto("quote2") // lower centre ends
			}
		}
		}},
		{item: load_html('<div style="width: 512px; height: 225px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...the riven condition of modern subjectification... under which the divided body has been distanced from the plane of discourse to return only as symptomatic disturbance on the one hand, and an objectified brutality on the other."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Francis Barker: THE TREMULOUS PRIVATE BODY: ESSAYS ON SUBJECTION Methuen, London, 1984, p75<br/></span></div>'), script: (x) => {/*on mouseUp
  
end mouseUp*/}},
		{item: load_html('<div style="width: 449px; height: 134px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">Where you touch it turns to powder where you touch it blows away. You will do me damage.</span><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times; "><br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Typhoid Mary, Poem number 34<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 513px; height: 48px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">Fucking never leaves you intact.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 514px; height: 153px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...body - as the inadequate name of some uncommanded diversity of drives and contradictions..."</span><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times; ">     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Jane Gallop:  FEMINISM AND PSYCHOANALYSIS: THE DAUGHTER\'S SEDUCTION Macmillan Press, London, 1982, p121<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/TITS_CAST/006-.png"), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/TITS_CAST/007-.png"), script: (x) => {/**/}},
		{item: load_html('<div style="width: 629px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/TITS_CAST/009-.png"), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/TITS_CAST/010-.png"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/TITS_CAST/011-zip.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/TITS_CAST/012-scratch.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/TITS_CAST/013-short sleepgroan.wav"), script: (x) => {/**/}},
		null, // global script
		{item: (mv) => {load_movie("SCAR")}, script: (x) => {}},
		{item: (mv) => {mv.goto("tits")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 480}, script: (x) => {}},
		{item: (mv) => {mv.delay += 680}, script: (x) => {}},
		{item: (mv) => {mv.delay += 220}, script: (x) => {}},
		{item: (mv) => {load_movie("GLOTTIS")}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: (mv) => {mv.goto("poppy")}, script: (x) => {}},
		{item: (mv) => {load_movie("PENES", "disappear")}, script: (x) => {}},
		{item: (mv) => {mv.goto("words")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 120}, script: (x) => {}},
		{item: (mv) => {mv.delay += 60}, script: (x) => {}},
		{item: (mv) => {fadein(1)}, script: (x) => {}},
		{item: (mv) => {fadeout(1)}, script: (x) => {}},
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
{"sounds":[10,null],"script":26,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[10,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[10,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[10,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[10,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[10,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[10,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[10,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[10,null],"script":27,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[10,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-5,"y":0},{"style":"","kind":"text","index":1,"x":67,"y":123}]},
{"sounds":[null,null],"script":14,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-5,"y":0},{"style":"","kind":"text","index":1,"x":67,"y":123}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-5,"y":0},{"style":"","kind":"text","index":2,"x":71,"y":171}]},
{"sounds":[null,null],"script":19,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-5,"y":0},{"style":"","kind":"text","index":2,"x":71,"y":171}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-5,"y":0},{"style":"","kind":"text","index":3,"x":138,"y":189}]},
{"sounds":[null,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-5,"y":0},{"style":"","kind":"text","index":3,"x":138,"y":189}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-5,"y":0},{"style":"","kind":"text","index":4,"x":66,"y":133}]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-5,"y":0},{"style":"","kind":"text","index":4,"x":66,"y":133}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":6,"x":24,"y":19}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":25,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"","kind":"bitmap","index":8,"x":82,"y":323}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"","kind":"bitmap","index":9,"x":78,"y":318}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"","kind":"bitmap","index":9,"x":78,"y":318}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"","kind":"bitmap","index":8,"x":82,"y":323}]},
{"sounds":[11,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0}]},
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
{"sounds":[12,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"","kind":"text","index":7,"x":87,"y":115}]},
{"sounds":[12,null],"script":23,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-2,"y":0},{"style":"","kind":"text","index":7,"x":87,"y":115}]},
	]
);
