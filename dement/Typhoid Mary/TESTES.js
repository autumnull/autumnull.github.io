movies["TESTES"] = new movie(
	{"testes": 0, "quote1": 13, "quote2": 18, "quote3": 23, "quote4": 28, "timeout sequence": 43},
	[
		{
			item: load_img("Typhoid Mary/TESTES_CAST/001-cloth+testesPICT.png"),
			script: (x) => {x.onmouseup = (ev) => {
				if (ev.x > 0 && ev.x < 25 && ev.y > 0 && ev.y < 100) {
					load_movie("SCAR", "kiss");
				} else if (ev.x > 25 && ev.x < 100 &&
				ev.y > 0 && ev.y < 50) {
					load_movie("ORGANS", "flap");
				} else if (ev.x > 100 && ev.x < 150 &&
				ev.y > 0 && ev.y < 75) {
					load_movie("GLOTTIS", "bend");
				} else if (ev.x > 150 && ev.x < 350 &&
				ev.y > 0 && ev.y < 100) {
					load_movie("WOUND", "wound");
				} else if (ev.x > 350 && ev.x < 400 &&
				ev.y > 0 && ev.y < 100) {
					load_movie("SCAR", "close");
				} else if (ev.x > 400 && ev.x < 500 &&
				ev.y > 0 && ev.y < 150) {
					load_movie("TESTES", "quote1");
				} else if (ev.x > 500 && ev.x < 550 &&
				ev.y > 100 && ev.y < 150) {
					load_movie("GLOTTIS", "spread");
				} else if (ev.x > 500 && ev.x < 575 &&
				ev.y > 0 && ev.y < 150) {
					load_movie("PENES", "allmove");
				} else if (ev.x > 575 && ev.x < 640 &&
				ev.y > 0 && ev.y < 100) {
					load_movie("TITS", "tits"); // top row ends
				} else if (ev.x > 0 && ev.x < 25 &&
				ev.y > 100 && ev.y < 150) {
					load_movie("SCAR", "quote3");
				} else if (ev.x > 0 && ev.x < 50 &&
				ev.y > 150 && ev.y < 250) {
					load_movie("GLOTTIS", "allmove");
				} else if (ev.x > 0 && ev.x < 75 &&
				ev.y > 250 && ev.y < 400) {
					load_movie("TESTES", "quote2");
				} else if (ev.x > 0 && ev.x < 50 &&
				ev.y > 400 && ev.y < 480) {
					load_movie("DIARY", "11th"); // left side ends
				} else if (ev.x > 50 && ev.x < 250 &&
				ev.y > 450 && ev.y < 480) {
					load_movie("TMPOEMS", "poem2");
				} else if (ev.x > 250 && ev.x < 300 &&
				ev.y > 425 && ev.y < 480) {
					load_movie("TESTES", "quote4");
				} else if (ev.x > 300 && ev.x < 400 &&
				ev.y > 400 && ev.y < 480) {
					load_movie("LUNGS", "pull");
				} else if (ev.x > 400 && ev.x < 550 &&
				ev.y > 425 && ev.y < 480) {
					load_movie("TESTES", "quote3");
				} else if (ev.x > 550 && ev.x < 640 &&
				ev.y > 375 && ev.y < 480) {
					load_movie("MEDICAL", "brain"); // bottom row ends
				} else if (ev.x > 575 && ev.x < 640 &&
				ev.y > 100 && ev.y < 200) {
					load_movie("LUNGS", "slide");
				} else if (ev.x > 575 && ev.x < 640 &&
				ev.y > 200 && ev.y < 375) {
					load_movie("HANDS", "hands"); // right side ends
				} else if (ev.x > 25 && ev.x < 125 &&
				ev.y > 125 && ev.y < 250) {
					load_movie("PENES", "disappear");
				} else if (ev.x > 25 && ev.x < 125 &&
				ev.y > 100 && ev.y < 275) {
					load_movie("GLOTTIS", "spread");
				} else if (ev.x > 25 && ev.x < 150 &&
				ev.y > 50 && ev.y < 100) {
					load_movie("LUNGS", "pull");
				} else if (ev.x > 150 && ev.x < 200 &&
				ev.y > 100 && ev.y < 200) {
					load_movie("SCAR", "move");
				} else if (ev.x > 200 && ev.x < 400 &&
				ev.y > 100 && ev.y < 225) {
					load_movie("DIARY", "1st");
				} else if (ev.x > 450 && ev.x < 575 &&
				ev.y > 150 && ev.y < 200) {
					load_movie("TITS", "poppy"); // upper centre ends
				} else if (ev.x > 450 && ev.x < 500 &&
				ev.y > 250 && ev.y < 350) {
					load_movie("PRINTSTORIES", "print17");
				} else if (ev.x > 425 && ev.x < 550 &&
				ev.y > 225 && ev.y < 350) {
					load_movie("TITS", "tits");
				} else if (ev.x > 400 && ev.x < 475 &&
				ev.y > 350 && ev.y < 425) {
					load_movie("ORGANS", "flap");
				} else if (ev.x > 400 && ev.x < 575 &&
				ev.y > 150 && ev.y < 425) {
					load_movie("PRINTSTORIES", "print18");
				} else if (ev.x > 300 && ev.x < 400 &&
				ev.y > 275 && ev.y < 400) {
					load_movie("SCAR", "scar");
				} else if (ev.x > 250 && ev.x < 400 &&
				ev.y > 225 && ev.y < 425) {
					load_movie("HANDS", "hands"); // right lower centre ends
				} else if (ev.x > 75 && ev.x < 150 &&
				ev.y > 325 && ev.y < 375) {
					load_movie("STORIES", "story1");
				} else if (ev.x > 50 && ev.x < 200 &&
				ev.y > 275 && ev.y < 425) {
					load_movie("ARM", "arm");
				} else if (ev.x > 150 && ev.x < 250 &&
				ev.y > 200 && ev.y < 350) {
					load_movie("WOUND", "wound");
				} else if (ev.x > 50 && ev.x < 250 &&
				ev.y > 350 && ev.y < 450) {
					load_movie("WOUND", "wound"); // left lower centre ends
				}
			}}
		},
		{item: load_img("Typhoid Mary/TESTES_CAST/002-.png"), script: (x) => {}},
		{item: load_html('<div style="width: 588px; height: 398px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"...the sexual abuse of children is not an occasional deviant act, but a devastating commonplace fact of everyday life.<br/>25% of rape victims are under 12 years.<br/>70% of prostitutes and 80% of drug users were incest victims.<br/>80% of juvenile offenders were sexually abused.<br/><br/>In a children\'s hospital in Washington, more injury and disease is caused by sexual abuse than there are broken bones and tonsillectomies put together. "<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">from  THE BEST KEPT SECRET:SEXUAL ABUSE OF CHILDREN by Florence Rush 1980 reprinted by permission of the publisher, Prentice Hall / a division of Simon & </span><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times; ">Schuster, Englewood Cliffs, N.J.  p xii<br/></span></div>'), script: (x) => {/**/}},
		{
			item: load_img("Typhoid Mary/TESTES_CAST/004-foetus genitals PICT.png"),
			script: (x) => {x.onmouseup = (ev) => {load_movie("PRINTSTORIES", "print10")}}
		},
		{item: load_html('<div style="width: 588px; height: 86px; text-align: center"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"A child is sexually abused every two seconds."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">The Oprah Winfrey Show, chanel 10, Sydney, 24/5/92<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 583px; height: 172px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">"It is impossible to respond to those who are able to believe in the existence of this world and who take their authority from it."<br/><br/></span><span style="color: #000000; font-size: 18px; line-height: 19px; font-family: Times; ">Georges Bataille: VISIONS OF EXCESS, trans & ed Allan Stoekl, THEORY AND HISTORY OF LITERATURE vol 14, University of Minnesota Press, Minneapolis, 1985, p179<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 589px; height: 288px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">•A third of all women had some sort of sexual encounter as a child with an adult male.<br/><br/>•The average age of the abused child was 8 years 7 months (ie: pre adolescent)<br/><br/>•A fifth of the women in the survey were abused by more than one male relative. For 57.4% of these,  the first abuser was the natural father. Abusers often abused more than one victim, usually in the same family.<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 590px; height: 372px; text-align: left"><span style="color: #000000; font-size: 24px; line-height: 24px; font-family: Times;  font-weight: bold;">•70% of incest was regular, long term and usually a number of times a week.<br/><br/>•The abuse occurred at:  mutual home 77.5%<br/>                                    abuser\'s home 10%<br/>                                    abused\'s home 5.1%<br/><br/>•75% of abuse stops by age 15 (mostly because the abused leaves home)<br/><br/>•30% of abused tell anyone at all while it is going on. Of these: 0.7% told police, 8.9% told </span><span style="color: #000000; font-size: 14px; line-height: 15px; font-family: Times;  font-weight: bold;">mother<br/><br/>Cathy Waldby: BREAKING THE SILENCE: Report based on findings of Women &nbsp;&nbsp;Against  Incest, phone in survey, Sydney 22 - 24 February, 1984, &nbsp;&nbsp;Dympna House Inc., Sydney, 1987<br/></span></div>'), script: (x) => {/**/}},
		{item: load_html('<div style="width: 634px; height: 50px; text-align: left"><span style="color: #dddddd; font-size: 24px; line-height: 25px; font-family: Helvetica;  font-weight: bold;">CLICK SOMEWHERE TO CONTINUE<br/></span></div>'), script: (x) => {/**/}},
		{item: new Audio("Typhoid Mary/TESTES_CAST/010-mmm.wav"), script: (x) => {}},
		null,
		{item: new Audio("Typhoid Mary/TESTES_CAST/012-scrape.wav"), script: (x) => {}},
		null, // global script
		{item: (mv) => {mv.goto("testes")}, script: (x) => {}},
		{item: (mv) => {mv.pause = true}, script: (x) => {}},
		{item: (mv) => {mv.delay = 720}, script: (x) => {}},
		{item: (mv) => {mv.delay = 120}, script: (x) => {}},
		{item: (mv) => {mv.goto("quote1")}, script: (x) => {}},
		{item: (mv) => {load_movie("PRINTSTORIES", "print11")}, script: (x) => {}},
		{item: (mv) => {mv.delay += 320}, script: (x) => {}},
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
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8}]},
{"sounds":[11,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8}]},
{"sounds":[null,null],"script":13,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"transition":9,"sounds":[null,null],"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8},{"style":"opacity: 0.501961;","kind":"bitmap","index":1,"x":-9,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":2,"x":28,"y":48}]},
{"transition":9,"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":3,"x":0,"y":0},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":2,"x":28,"y":48}]},
{"transition":9,"sounds":[null,null],"script":17,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8},{"style":"opacity: 0.501961;","kind":"bitmap","index":1,"x":-9,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":2,"x":28,"y":48}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[9,null],"script":15,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8},{"style":"opacity: 0.501961;","kind":"bitmap","index":1,"x":-9,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":6,"x":31,"y":59}]},
{"sounds":[9,null],"script":14,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8},{"style":"opacity: 0.501961;","kind":"bitmap","index":1,"x":-9,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":7,"x":29,"y":44}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":3,"x":0,"y":0},{"style":"","kind":"text","index":4,"x":29,"y":195}]},
{"sounds":[null,null],"script":18,"sprites":[{"style":"","kind":"bitmap","index":3,"x":0,"y":0},{"style":"","kind":"text","index":4,"x":29,"y":195}]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"sprites":[]},
{"sounds":[null,null],"script":19,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8},{"style":"opacity: 0.501961;","kind":"bitmap","index":1,"x":-9,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":5,"x":36,"y":165}]},
{"sounds":[null,null],"script":13,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8},{"style":"opacity: 0.501961;","kind":"bitmap","index":1,"x":-9,"y":-1},{"style":"filter: invert(1); mix-blend-mode: difference; background: #ffffff;","kind":"text","index":5,"x":36,"y":165}]},
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
{"sounds":[9,null],"script":16,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8},{"style":"","kind":"text","index":8,"x":95,"y":164}]},
{"sounds":[9,null],"script":13,"sprites":[{"style":"","kind":"bitmap","index":0,"x":-1,"y":-8},{"style":"","kind":"text","index":8,"x":95,"y":164}]},
	]
);
