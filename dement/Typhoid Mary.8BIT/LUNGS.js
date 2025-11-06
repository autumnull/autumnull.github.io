movies["LUNGS"] = new movie(
	{"pull":26,"quote1":59,"quote2":64,"quote3":69,"quote4":74,"timeout sequence":84,"lungs":0,"words":53,"allmove":42,"slide":33},
	[
		{item: load_img("Typhoid Mary.8BIT/LUNGS_CAST/001-lungs+stuffPICT.png"), script: (x) => {
		x.onmouseup = (ev) => {
			if (ev.x > 0 && ev.x < 60 &&
			ev.y > 0 && ev.y < 100) {
				playing.goto("words")
			} else if (ev.x > 60 && ev.x < 100 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("WOUND", "words");
			} else if (ev.x > 100 && ev.x < 125 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("ARM", "quote2");
			} else if (ev.x > 125 && ev.x < 200 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("PRINTSTORIES", "print10");
			} else if (ev.x > 200 && ev.x < 250 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 250 && ev.x < 300 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("MEDICAL", "lungs");
			} else if (ev.x > 300 && ev.x < 350 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("TITS", "tits");
			} else if (ev.x > 450 && ev.x < 500 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("ORGANS", "organs");
			} else if (ev.x > 500 && ev.x < 580 &&
			ev.y > 0 && ev.y < 40) {
				load_movie("ARM", "arm");
			} else if (ev.x > 500 && ev.x < 580 &&
			ev.y > 40 && ev.y < 70) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 500 && ev.x < 580 &&
			ev.y > 70 && ev.y < 100) {
				load_movie("TITS", "poppy");
			} else if (ev.x > 580 && ev.x < 640 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("WOUND", "quote4"); 
			} else if (ev.x > 580 && ev.x < 640 &&
			ev.y > 50 && ev.y < 150) {
				load_movie("ORGANS", "flap"); // top row ends
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("ORGANS", "quote1");
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 200 && ev.y < 250) {
				load_movie("ARM", "arm");
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("PENES", "quote3");
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("SCAR", "kiss");
			 // left side ends
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("HANDS", "quote4");
			} else if (ev.x > 50 && ev.x < 125 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("ORGANS", "quote4");
			} else if (ev.x > 125 && ev.x < 150 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("HANDS", "hands"); 
			} else if (ev.x > 150 && ev.x < 175 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("ARM", "arm");
			} else if (ev.x > 175 && ev.x < 200 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("SCAR", "close");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 300 && ev.x < 350 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("TMPOEMS", "poem5");
			} else if (ev.x > 450 && ev.x < 550 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("GLOTTIS", "bend");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("ORGANS", "organs");
			 // bottom row ends 
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("GLOTTIS", "quote5"); 
			} else if (ev.x > 500 && ev.x < 640 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("STORIES", "story6");
			} else if (ev.x > 500 && ev.x < 640 &&
			ev.y > 300 && ev.y < 350) {
				load_movie("PENES", "quote4");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 350 && ev.y < 400) {
				load_movie("DIARY", "16th"); // right side ends 
			} else if (ev.x > 190 && ev.x < 250 &&
			ev.y > 220 && ev.y < 275) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 150 && ev.x < 250 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("GLOTTIS", "spread");
			 } else if (ev.x > 250 && ev.x < 300 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("MEDICAL", "heart"); 
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 250 && ev.y < 350) {
				playing.goto("words")
			} else if (ev.x > 350 && ev.x < 400 &&
			ev.y > 200 && ev.y < 250) {
				load_movie("WOUND", "words");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("WOUND", "quote3");
			} else if (ev.x > 400 && ev.x < 475 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("PENES", "disappear");
			} else if (ev.x > 400 && ev.x < 500 &&
			ev.y > 250 && ev.y < 350) {
				load_movie("PRINTSTORIES", "print9");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 300 && ev.y < 350) {
				playing.goto("quote2") // heart ends 
			} else if (ev.x > 150 && ev.x < 200 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("HANDS", "quote5"); 
			} else if (ev.x > 50 && ev.x < 175 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("SCAR", "kiss");
			} else if (ev.x > 75 && ev.x < 150 &&
			ev.y > 200 && ev.y < 300) {
				playing.goto("quote3")
			} else if (ev.x > 75 && ev.x < 150 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("ARM", "arm"); 
			} else if (ev.x > 475 && ev.x < 550 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("SCAR", "move");
			} else if (ev.x > 300 && ev.x < 350 &&
			ev.y > 350 && ev.y < 400) {
				load_movie("PENES", "quote1");
			} else if (ev.x > 450 && ev.x < 580 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("SCAR", "quote3");
			} else if (ev.x > 400 && ev.x < 475 &&
			ev.y > 150 && ev.y < 200) {
				load_movie("TITS", "quote3");
			} else if (ev.x > 175 && ev.x < 250 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("DIARY", "15th");
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 100 && ev.y < 200) {
				playing.goto("quote1")
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("WOUND", "quote5"); // end other 
			}
		}
		}},
		{item: load_img("Typhoid Mary.8BIT/LUNGS_CAST/002-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("pull")}}},
		{item: load_img("Typhoid Mary.8BIT/LUNGS_CAST/003-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("pull")}}},
		{item: load_img("Typhoid Mary.8BIT/LUNGS_CAST/004-.png"), script: (x) => {x.onmouseup = (ev) => {playing.goto("pull")}}},
		{item: load_img("Typhoid Mary.8BIT/LUNGS_CAST/005-.png"), script: (x) => {
		x.onmouseup = (ev) => {
			if (ev.x > 0 && ev.x < 60 &&
			ev.y > 0 && ev.y < 100) {
				playing.goto("words")
			} else if (ev.x > 60 && ev.x < 100 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("WOUND", "words");
			} else if (ev.x > 100 && ev.x < 125 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("ARM", "quote2");
			} else if (ev.x > 125 && ev.x < 200 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("PRINTSTORIES", "print10");
			} else if (ev.x > 200 && ev.x < 250 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 250 && ev.x < 300 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("MEDICAL", "lungs");
			} else if (ev.x > 300 && ev.x < 350 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("HANDS", "hands");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("TITS", "tits");
			} else if (ev.x > 450 && ev.x < 500 &&
			ev.y > 0 && ev.y < 100) {
				load_movie("ORGANS", "organs");
			} else if (ev.x > 500 && ev.x < 580 &&
			ev.y > 0 && ev.y < 40) {
				load_movie("ARM", "arm");
			} else if (ev.x > 500 && ev.x < 580 &&
			ev.y > 40 && ev.y < 70) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 500 && ev.x < 580 &&
			ev.y > 70 && ev.y < 100) {
				load_movie("TITS", "tits");
			} else if (ev.x > 580 && ev.x < 640 &&
			ev.y > 0 && ev.y < 50) {
				load_movie("WOUND", "quote4"); 
			} else if (ev.x > 580 && ev.x < 640 &&
			ev.y > 50 && ev.y < 150) {
				load_movie("ORGANS", "flap"); // top row ends
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("ORGANS", "quote1");
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 200 && ev.y < 250) {
				load_movie("ARM", "arm");
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("PENES", "quote3");
			} else if (ev.x > 0 && ev.x < 75 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("SCAR", "kiss");
			 // left side ends
			} else if (ev.x > 0 && ev.x < 50 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("HANDS", "quote4");
			} else if (ev.x > 50 && ev.x < 125 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("ORGANS", "quote4");
			} else if (ev.x > 125 && ev.x < 150 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("HANDS", "hands"); 
			} else if (ev.x > 150 && ev.x < 175 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("ARM", "arm");
			} else if (ev.x > 175 && ev.x < 200 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("SCAR", "close");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("ORGANS", "flap");
			} else if (ev.x > 300 && ev.x < 350 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("TMPOEMS", "poem5");
			} else if (ev.x > 450 && ev.x < 550 &&
			ev.y > 350 && ev.y < 480) {
				load_movie("GLOTTIS", "bend");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 400 && ev.y < 480) {
				load_movie("ORGANS", "organs");
			 // bottom row ends 
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("GLOTTIS", "quote5"); 
			} else if (ev.x > 500 && ev.x < 640 &&
			ev.y > 250 && ev.y < 300) {
				load_movie("STORIES", "story6");
			} else if (ev.x > 500 && ev.x < 640 &&
			ev.y > 300 && ev.y < 350) {
				load_movie("PENES", "quote4");
			} else if (ev.x > 550 && ev.x < 640 &&
			ev.y > 350 && ev.y < 400) {
				load_movie("DIARY", "16th"); // right side ends 
			} else if (ev.x > 190 && ev.x < 250 &&
			ev.y > 220 && ev.y < 275) {
				load_movie("WOUND", "wound");
			} else if (ev.x > 150 && ev.x < 250 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("GLOTTIS", "spread");
			 } else if (ev.x > 250 && ev.x < 300 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("MEDICAL", "heart"); 
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 250 && ev.y < 350) {
				playing.goto("words")
			} else if (ev.x > 350 && ev.x < 400 &&
			ev.y > 200 && ev.y < 250) {
				load_movie("WOUND", "words");
			} else if (ev.x > 300 && ev.x < 400 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("WOUND", "quote3");
			} else if (ev.x > 400 && ev.x < 475 &&
			ev.y > 200 && ev.y < 300) {
				load_movie("PENES", "disappear");
			} else if (ev.x > 400 && ev.x < 500 &&
			ev.y > 250 && ev.y < 350) {
				load_movie("PRINTSTORIES", "print9");
			} else if (ev.x > 200 && ev.x < 300 &&
			ev.y > 300 && ev.y < 350) {
				playing.goto("quote2") // heart ends 
			} else if (ev.x > 150 && ev.x < 200 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("HANDS", "quote5"); 
			} else if (ev.x > 50 && ev.x < 175 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("SCAR", "kiss");
			} else if (ev.x > 75 && ev.x < 150 &&
			ev.y > 200 && ev.y < 300) {
				playing.goto("quote3")
			} else if (ev.x > 75 && ev.x < 150 &&
			ev.y > 300 && ev.y < 400) {
				load_movie("ARM", "arm"); 
			} else if (ev.x > 475 && ev.x < 550 &&
			ev.y > 150 && ev.y < 250) {
				load_movie("SCAR", "move");
			} else if (ev.x > 300 && ev.x < 350 &&
			ev.y > 350 && ev.y < 400) {
				load_movie("PENES", "quote1");
			} else if (ev.x > 450 && ev.x < 580 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("SCAR", "quote3");
			} else if (ev.x > 400 && ev.x < 475 &&
			ev.y > 150 && ev.y < 200) {
				load_movie("TITS", "quote3");
			} else if (ev.x > 175 && ev.x < 250 &&
			ev.y > 100 && ev.y < 200) {
				load_movie("DIARY", "15th");
			} else if (ev.x > 250 && ev.x < 350 &&
			ev.y > 100 && ev.y < 200) {
				playing.goto("quote1")
			} else if (ev.x > 350 && ev.x < 450 &&
			ev.y > 100 && ev.y < 150) {
				load_movie("WOUND", "quote5"); // end other 
			}
		}
		}},
		{item: load_img("Typhoid Mary.8BIT/LUNGS_CAST/006-.png"), script: (x) => {/**/}},
		{item: load_html('<div style="width: 529px; height: 172px; text-align: left"><span style="color: #d6d6d6; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Outside you\'d think there was nowhere to run to anymore, and you\'d be right. But there is still suffering and flesh to bear it."<br/><br/></span><span style="color: #d6d6d6; font-size: 18px; line-height: 19px; font-family: Times; ">From </span><span style="color: #d6d6d6; font-size: 18px; line-height: 19px; font-family: Times; ">ANGST</span><span style="color: #d6d6d6; font-size: 18px; line-height: 19px; font-family: Times; "> by Helene Cixous, translated by Jo Levy. Copyright Ⓒ this translation Jo Levy 1985. Reproduced by permission of The Calder Educational Trust, London.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 529px; height: 268px; text-align: left"><span style="color: #d6d6d6; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"You go from the impossible to the impossible through all the possibilities of fraud: you fill all the places you have no right to. Whether you like it or not, no one knows and you don\'t forget you know nothing either... You owe the right to fill those places to someone else..."<br/><br/></span><span style="color: #d6d6d6; font-size: 18px; line-height: 19px; font-family: Times; ">From </span><span style="color: #d6d6d6; font-size: 18px; line-height: 19px; font-family: Times; ">ANGST</span><span style="color: #d6d6d6; font-size: 18px; line-height: 19px; font-family: Times; "> by Helene Cixous, translated by Jo Levy. Copyright Ⓒ this translation Jo Levy 1985. Reproduced by permission of The Calder Educational Trust, London.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 529px; height: 268px; text-align: left"><span style="color: #d6d6d6; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...sexuality is organized according to what has been said... consequently discourse makes impossible any direct and peaceable relation to the body, to the world and to pleasure... For the sequence of discourse, having once marked us, endlessly reproduces itself."<br/><br/></span><span style="color: #d6d6d6; font-size: 18px; line-height: 19px; font-family: Times; ">Michele Montrelay: INQUIRY INTO FEMININITY, from FRENCH FEMINIST THOUGHT, (ed) Toril Moi, Basil Blackwell Ltd, Oxford, 1987, p232<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 518px; height: 220px; text-align: left"><span style="color: #d6d6d6; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"Sacrifice is nothing other than the production of sacred things... thus, to a certain extent, the function of representation engages the very life of the one who assumes it."<br/><br/></span><span style="color: #d6d6d6; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille: VISIONS OF EXCESS Allan Stoekl (trans & ed) THEORY AND HISTORY OF LITERATURE vol 14, University of Minnesota Press, Minneapolis, 1985, p120 <br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 628px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/LUNGS_CAST/012-sigh.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/LUNGS_CAST/013-faster breathing.2.wav"), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary.8BIT/LUNGS_CAST/014-mmm.wav"), script: (x) => {/**/}},
		null, // global script
		{item: (mv) => {mv.goto("lungs")}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: (mv) => {mv.delay += 20}, script: (x) => {}},
		{item: (mv) => {mv.goto("slide")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 60}, script: (x) => {}},
		{item: (mv) => {mv.goto("allmove")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 120}, script: (x) => {}},
		{item: (mv) => {mv.delay += 420}, script: (x) => {}},
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
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[12,null],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[12,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":1,"x":164,"y":0}]},
{"sounds":[12,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":1,"x":164,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":19,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":2,"x":401,"y":199}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":3,"x":401,"y":199}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":3,"x":401,"y":199}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":3,"x":401,"y":199}]},
{"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":2,"x":401,"y":199}]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[11,null],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":2,"x":401,"y":199}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":3,"x":401,"y":199},{"style":"","kind":"bitmap","index":1,"x":164,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":3,"x":401,"y":199},{"style":"","kind":"bitmap","index":1,"x":164,"y":0}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":3,"x":401,"y":199},{"style":"","kind":"bitmap","index":1,"x":164,"y":0}]},
{"sounds":[null,null],"script":20,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"bitmap","index":2,"x":401,"y":199}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference;","kind":"bitmap","index":4,"x":47,"y":85}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-9,"y":-2},{"style":"","kind":"text","index":6,"x":71,"y":167}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-9,"y":-2},{"style":"","kind":"text","index":7,"x":67,"y":120}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-9,"y":-2},{"style":"","kind":"text","index":8,"x":63,"y":121}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":22,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-9,"y":-2},{"style":"","kind":"text","index":9,"x":50,"y":136}]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"opacity: 0.501961;","kind":"bitmap","index":5,"x":-9,"y":-2},{"style":"","kind":"text","index":9,"x":50,"y":136}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[13,null],"script":21,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":10,"x":93,"y":159}]},
{"sounds":[13,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-5,"y":0},{"style":"","kind":"text","index":10,"x":93,"y":159}]},
	]
);
