movies["WOUND"] = new movie(
	{"quote1":14,"quote2":20,"quote3":25,"quote4":30,"quote5":35,"quote6":40,"fall":50,"timeout sequence":67,"wound":0,"words":45},
	[
		{item: load_img("Typhoid Mary.8BIT/WOUND_CAST/001-wound+stuffPICT.png"), script: (x) => {
		x.onmouseup = (ev) => {
			if (ev.x > 0 && ev.x < 25 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("TITS", "tits");
			} else if (ev.x > 25 && ev.x < 75 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("SCAR", "kiss");
			} else if (ev.x > 75 && ev.x < 100 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 100 && ev.x < 250 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("ARM", "arm");
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("PENES", "flick");
			} else if (ev.x > 350 && ev.x < 400 &&
			ev.y > 0 && ev.y < 100) {
				playing.goto("quote1")
			} else if (ev.x > 400 && ev.x < 450 &&
			ev.y > 0 && ev.y < 75) {
				load_movie("SCAR", "move");
			} else if (ev.x > 450 && ev.x < 500 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 500 && ev.x < 550 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 550 && ev.x < 620 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("PENES", "thrust");
			} else if (ev.x > 620 && ev.x < 640 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("GLOTTIS", "quote2"); // top row ends
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 75 && ev.y < 125) {
				load_movie("SCAR", "kiss");
			} else if (ev.x > 0 && ev.x < 100 &&
			ev.y > 125 && ev.y < 250) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 0 && ev.x < 25 && 
			ev.y > 250 && ev.y < 375) {
				load_movie("MEDICAL", "brain");
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 250 && ev.y < 400) {
				load_movie("TESTES", "testes");
			} else if (ev.x > 0 && ev.x < 100 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("TITS", "tits"); // left side ends
			} else if (ev.x > 100 && ev.x < 150 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("SCAR", "scar"); 
			} else if (ev.x > 150 && ev.x < 200 &&
			ev.y > 350 && ev.y < 480) {
				playing.goto("quote3")
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 325 && ev.y < 480) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 300 && ev.x < 350 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("DIARY", "20th");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("LUNGS", "pull");
			} else if (ev.x > 450 && ev.x < 550 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("PENES", "quote2");
			} else if (ev.x > 550 && ev.x < 575 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 575 && ev.x < 625 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("TITS", "poppy");
			} else if (ev.x > 625 && ev.x < 640 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("LUNGS", "slide"); // bottom row ends
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 50 && ev.y < 150) {
				load_movie("TESTES", "quote3");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("LUNGS", "allmove");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("SCAR", "close");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 300 && ev.y < 350) {
				load_movie("TITS", "tits"); // right side ends 
			} else if (ev.x > 165 && ev.x < 200 &&
			ev.y > 125 && ev.y < 175) {
				load_movie("ARM", "arm");
			} else if (ev.x > 125 && ev.x < 165 &&
			ev.y > 150 && ev.y < 180) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 100 && ev.x < 150 &&
			ev.y > 180 && ev.y < 225) {
				playing.goto("quote6")
			} else if (ev.x > 75 && ev.x < 125 &&
			ev.y > 225 && ev.y < 300) {
				load_movie("TESTES", "testes"); // 4 diamonds ends
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 225 && ev.y < 325) {
				load_movie("GLOTTIS", "bend");
			} else if (ev.x > 175 && ev.x < 250 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("TMPOEMS", "poem6");
			} else if (ev.x > 375 && ev.x < 450 &&
			ev.y > 250 && ev.y < 325) {
				load_movie("ORGANS", "organs");
			} else if (ev.x > 450 && ev.x < 550 &&
			ev.y > 225 && ev.y < 300) {
				load_movie("GLOTTIS", "spread");
			} else if (ev.x > 125 && ev.x < 175 &&
			ev.y > 175 && ev.y < 300) {
				load_movie("ORGANS", "quote5");
			} else if (ev.x > 200 && ev.x < 250 &&
			ev.y > 300 && ev.y < 325) {
				load_movie("ARM", "quote1");
			} else if (ev.x > 300 && ev.x < 450 &&
			ev.y > 325 && ev.y < 350) {
				load_movie("SCAR", "quote2");
			} else if (ev.x > 350 && ev.x < 375 &&
			ev.y > 225 && ev.y < 325) {
				load_movie("PRINTSTORIES", "print12");
			} else if (ev.x > 450 && ev.x < 550 &&
			ev.y > 300 && ev.y < 400) {
				playing.goto("quote2")
			} else if (ev.x > 175 && ev.x < 325 &&
			ev.y > 175 && ev.y < 225) {
				playing.goto("quote5") // wound ends
			} else if (ev.x > 325 && ev.x < 425 &&
			ev.y > 125 && ev.y < 225) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 425 && ev.x < 550 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("STORIES", "story5");
			} else if (ev.x > 100 && ev.x < 200 &&
			ev.y > 300 && ev.y < 350) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 425 && ev.x < 550 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("PRINTSTORIES", "print11");
			} else if (ev.x > 50 && ev.x < 250 &&
			ev.y > 75 && ev.y < 125) {
				playing.goto("words")
			} else if (ev.x > 100 && ev.x < 175 &&
			ev.y > 125 && ev.y < 175) {
				load_movie("LUNGS", "quote4");
			} else if (ev.x > 250 && ev.x < 450 &&
			ev.y > 75 && ev.y < 125) {
				load_movie("LUNGS", "pull");
			} else if (ev.x > 200 && ev.x < 325 &&
			ev.y > 125 && ev.y < 175) {
				load_movie("ARM", "words");
			} else if (ev.x > 50 && ev.x < 100 &&
			ev.y > 250 && ev.y < 400) {
				load_movie("DIARY", "19th");
			}
		}}},
		{item: load_html('<div style="width: 579px; height: 177px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"The fact of remaining open to possibilities bordering on madness ... keeps the work of reflection continually subordinate to something else and just here reflection comes to an end."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille: EROTISM: DEATH AND SENSUALITY trans Mary Dalwood, City LightsBooks, San Francisco, 1986, p260 <br/>    </span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 579px; height: 316px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Here is the original fear. I didn\'t make up this story. I swear I want to tell the truth. Those who have lived it have gone silent: that\'s why its so difficult to get at. You would have to cut the throat of silence itself to tear out the story... Ten years and the wound still gapes. The blood won\'t clot. The wound in his lungs. The wound in my breast. The hand at my throat that won\'t let go..."     <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">From ANGST by Helene Cixous, translated by Jo Levy. Copyright Ⓒ this translation Jo Levy 1985. Reproduced by permission of The Calder Educational Trust, London.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 578px; height: 220px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"I believe that one can only begin to advance on the path of discovery of writing or of anything else from mourning and in the reparation of mourning... of having to find again, urgently, the entry, the breath, to keep the trace."          <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Susan Sellers (editor): WRITING DIFFERENCES: READINGS FROM THE SEMINAR OF HELENE CIXOUS Open University Press, Milton Keynes, UK, 1988, p6<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 578px; height: 249px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"A \'something\' that I do not recognize as a thing. A weight of meaninglessness, about which there is nothing insignificant and which crushes me. On the edge of non-existence and hallucination, of a reality that if I acknowledge it, annihilates me. There, abject and abjection are my safeguards. The primers of my culture."       <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Julia Kristeva: POWERS OF HORROR trans Leon Roudiez, Columbia University Press, NY, 1987, p2  <br/> </span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 578px; height: 249px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"The body\'s inside... shows up in order to compensate for the collapse of the border between inside and outside. It is as if the skin... no longer guaranteed the integrity of one\'s \'own and clean self\' but, scraped or transparent, invisible or taut, gave way before the abjection of its contents."          <br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Julia Kristeva: POWERS OF HORROR trans Leon Roudiez, Columbia University Press, NY, 1987, p53 <br/>   </span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 577px; height: 230px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">I wear my diamonds when I\'m feeling poor <br/>I can feel the gun in my mouth <br/>fuck me dead <br/>bone fragments and peace<br/>blood instead of tears<br/>dead not sex and always desiring always wet and diamonds on my left hand.<br/><br/></span><span style="color: #dddddd; font-size: 18px; line-height: 19px; font-family: Times; ">Typhoid Mary Poem 19<br/></span></div>'), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/WOUND_CAST/008-.png"), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/WOUND_CAST/009-.png"), script: (x) => {/**/}},
		{item: load_html('<div style="width: 619px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/WOUND_CAST/011-breath out.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/WOUND_CAST/012-mmm.wav"), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/WOUND_CAST/013-.png"), script: (x) => {/**/}},
		{item: load_img("Typhoid Mary.8BIT/WOUND_CAST/014-.png"), script: (x) => {/**/}},
		{item: null, script: (x) => {/**/}},
		{item: null, script: (x) => {/**/}},
		{item: null, script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/WOUND_CAST/018-mmhuh.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/WOUND_CAST/019-scrape.wav"), script: (x) => {/**/}},
		null, // global script
		{item: (mv) => {mv.delay += 720}, script: (x) => {}},
		{item: (mv) => {load_movie("ORGANS")}, script: (x) => {}},
		{item: (mv) => {mv.goto("wound")}, script: (x) => {}},
		{item: (mv) => {load_movie("HANDS")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 520}, script: (x) => {}},
		{item: (mv) => {mv.goto("fall")}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
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
{"sounds":[17,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[17,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[17,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[17,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[17,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[17,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[null,18],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[null,18],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[null,18],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[null,18],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[null,18],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[null,18],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":1,"x":37,"y":149}]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":1,"x":37,"y":149}]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":1,"x":37,"y":149}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":2,"x":32,"y":82}]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":2,"x":32,"y":82}]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":2,"x":32,"y":82}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":3,"x":27,"y":136}]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":3,"x":27,"y":136}]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":3,"x":27,"y":136}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":4,"x":34,"y":111}]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":4,"x":34,"y":111}]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":4,"x":34,"y":111}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":5,"x":30,"y":112}]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":5,"x":30,"y":112}]},
{"sounds":[null,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":5,"x":30,"y":112}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":6,"x":52,"y":123}]},
{"sounds":[null,null],"script":24,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":6,"x":52,"y":123}]},
{"sounds":[null,null],"script":23,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":7,"x":-6,"y":0},{"style":"","kind":"text","index":6,"x":52,"y":123}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":26,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"","kind":"bitmap","index":8,"x":96,"y":272}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"","kind":"bitmap","index":13,"x":163,"y":137},{"style":"","kind":"bitmap","index":12,"x":169,"y":139}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"","kind":"bitmap","index":13,"x":163,"y":137},{"style":"","kind":"bitmap","index":12,"x":169,"y":149}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"","kind":"bitmap","index":13,"x":163,"y":137},{"style":"","kind":"bitmap","index":12,"x":169,"y":328}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"","kind":"bitmap","index":13,"x":163,"y":137},{"style":"","kind":"bitmap","index":12,"x":169,"y":435}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"","kind":"bitmap","index":13,"x":163,"y":137},{"style":"","kind":"bitmap","index":12,"x":169,"y":476}]},
{"sounds":[11,null],"script":26,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"","kind":"bitmap","index":13,"x":163,"y":137}]},
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
{"sounds":[10,null],"script":27,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"","kind":"text","index":9,"x":81,"y":203}]},
{"sounds":[10,null],"script":25,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-4,"y":0},{"style":"","kind":"text","index":9,"x":81,"y":203}]},
	]
);
