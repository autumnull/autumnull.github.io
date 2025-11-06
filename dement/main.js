var fps = 3;
const movies = {};
var playing = null;
var audio_playing = [null, null];
var audio_fade = [0, 0];
var main_stage = document.querySelector("#main-stage");
var fade_stage = document.querySelector("#fade-stage");

function clear_audio() {
	for (audio of audio_playing) {
		if (audio) audio.pause();
	}
	audio_playing = [null, null];
	audio_fade = [0, 0];
}

function fadein(channel, ticks = -1) {
	if (ticks == -1) ticks = 15*60/fps;
	audio_fade[channel] = 1/ticks;
}

function fadeout(channel, ticks = -1) {
	if (ticks == -1) ticks = 15*60/fps;
	audio_fade[channel] = -1/ticks;
}

const movie = function(labels, cast, global_scripts, score) {
	this.frame = 0;
	this.frametimer = 60/fps;
	this.paused = false;
	this.delay = 0;
	this.onStartMovie = (mv) => {};
	this.onTimeout = (mv) => {};
	this.timeoutLength = 180 * 60; // 3mins default
	this.timeoutLapsed = 0;
	this.transition = false;
	this.filmloops = [];
	this.labels = labels;
	this.cast = cast;
	this.global_scripts = global_scripts;
	this.score = score;

	this.goto = function(label) {
		console.log("goto", label);
		this.pause = false;
		this.delay = 0;
		fade_stage.style.opacity = 0;
		fade_stage.childNodes = [];
		if (typeof label == "number") {
			this.frame = label - 1;
		} else {
			this.frame = this.labels[label] - 1;
		}
		clear_audio();
	}

	this.render = function(stage) {
		console.log(playing.frame);
		fr = this.score[this.frame];
		stage.replaceChildren();
		for (sprite of fr.sprites) {
			var elem = null;
			if (sprite.kind == "filmloop") {
				var fl = null;
				for (l of this.filmloops) {
					if (l.id == sprite.index) {
						fl = l;
						break;
					}
				}
				if (!fl) {
					fl = {
						"id": sprite.index,
						"stage": document.createElement('div'),
						"framestart": this.frame,
						"movie": new movie(
							{},
							this.cast,
							[],
							this.cast[sprite.index].item,
						),
					};
					this.filmloops.push(fl);
				}
				elem = fl.stage;
				let nframes = fl.movie.score.length;
				fl.movie.frame = (this.frame - fl.framestart) % nframes;
				fl.movie.render(fl.stage);
			} else {
				elem = this.cast[sprite.index].item.cloneNode(true);
			}
			var f = this.cast[sprite.index].script;
			f(elem);
			if (!elem.onmouseup) {
				// let clicks pass through
				elem.style.pointerEvents = "none";
			}
			elem.style = elem.style.cssText + sprite.style;
			elem.style.left = sprite.x + "px";
			elem.style.top = sprite.y + "px";
			elem.style.width = sprite.w + "px";
			elem.style.height = sprite.h + "px";
			stage.append(elem);
		}
		for (let i = 0; i < 2; i++) {
			let new_audio = null;
			if (fr.sounds[i]) {
				new_audio = this.cast[fr.sounds[i]].item;
			}
			let old_audio = audio_playing[i];
			if (old_audio != new_audio) {
				if (new_audio) {
					new_audio.currentTime = 0;
					new_audio.play();
				}
				if (old_audio) {
					old_audio.pause();
				}
			}
			audio_playing[i] = new_audio;
		}
	};

	this.runscripts = function() {
		fr = this.score[this.frame];
		if (fr.script) {
			scriptfunc = this.cast[fr.script].item;
			scriptfunc(this);
		}
	}
}

function load_img(src) {
	const img = new Image();
	img.src = src;
	return img;
}

function load_html(txt) {
	const e = document.createElement('div');
	e.innerHTML = txt;
	return e.firstElementChild;
}

function load_video(src) {
	const video = document.createElement('video');
	video.src = src;
	return video;
}

function load_movie(mv, label = null) {
	console.log("load_movie", mv, label);
	clear_audio();
	playing = movies[mv];
	playing.frametimer = 60 / fps;
	playing.timeoutLapsed = 0;
	playing.pause = false;
	playing.delay = 0;
	if (label) {
		if (typeof label == "number") {
			playing.frame = label;
		} else {
			playing.frame = playing.labels[label];
		}
	} else {
		playing.frame = 0;
	}
	fade_stage.style.opacity = 0;
	fade_stage.childNodes = [];
	for (c of playing.global_scripts) {
		c(playing);
	}
	playing.onStartMovie(playing);
	playing.render(main_stage);
}

function printFrom(start, end) {
	console.log("printFrom", start, end);
	for (let i = start; i <= end; i++) {
		playing.frame = i-1;
		playing.render(main_stage);
		main_stage.style.overflow = "visible";
		window.print();
		main_stage.style.overflow = "hidden";
	}
}

function run() {
	playing.timeoutLapsed++;
	if (playing.timeoutLapsed == playing.timeoutLength) {
		playing.onTimeout(playing);
	}
	for (let i = 0; i < 2; i++) {
		if (audio_fade[i] != 0 && audio_playing[i]) {
			let newvol = audio_playing[i].volume + audio_fade[i];
			if (newvol > 1) {
				newvol = 1;
				audio_fade[i] = 0;
			}
			if (newvol < 0) {
				newvol = 0;
				audio_fade[i] = 0;
			}
			audio_playing[i].volume = newvol;
		}
	}
	if (playing.pause) {
		null;
	} else if (playing.transition) {
		//switch (playing.transition) {
		//	case 23:
		//		let h = fade_stage.style.height;
		//		console.log(h);
		//		let height = h ? parseFloat(h) : 0;
		//		if (height < 1) {
		//			fade_stage.style.height = height + 1 / 120 + 'px';
		//		} else {
		//			main_stage.replaceChildren.apply(main_stage, fade_stage.childNodes);
		//			fade_stage.style.height = 0;
		//			playing.transition = false;
		//		}
		//		break;
		//	case 3:
		//	case 9:
		//	case 51:
		//	case 52:
				let o = fade_stage.style.opacity;
				let opacity = o ? parseFloat(o) : 0;
				if (opacity < 1) {
					fade_stage.style.opacity = opacity + 1 / 120;
				} else {
					main_stage.replaceChildren.apply(main_stage, fade_stage.childNodes);
					fade_stage.style.opacity = 0;
					playing.transition = false;
				}
		//		break;
		//	default:
		//		throw new Error("Unknown transition: " + playing.transition);
		//}
	} else if (0 < playing.frametimer) {
		playing.frametimer--;
		if (playing.frametimer == 0) playing.runscripts();
	} else if (0 < playing.delay) {
		playing.delay --;
	} else {
		playing.frame += 1;
		playing.frametimer = 60 / fps;
		let transition = playing.score[playing.frame].transition;
		if (transition) {
			playing.transition = true;
			fade_stage.style.opacity = 0;
			playing.render(fade_stage);
		} else {
			playing.render(main_stage);
		}
	}
	window.requestAnimationFrame(run);
}
