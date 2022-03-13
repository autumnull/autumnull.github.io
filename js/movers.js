var canvas = document.getElementById("artbox");
var ctx = canvas.getContext("2d");

// canvas "size" is different than canvas boundary size,
// so here we set them to be equal.
canvas.width  = canvas.clientWidth;
canvas.height = canvas.clientHeight;

scaleX = canvas.width / 600;
scaleY = canvas.height/ 800;

const TAU = Math.PI * 2;

const moverRadius = 100 * Math.min(scaleX, scaleY);
const moverSpeed = 3 * Math.min(scaleX, scaleY);
const turnRange = 0.5;

movers = []

const colors = [
    "#F90774", // pink
    "#FF0000", // red
    "#FF8700", // orange
    "#EDFF00", // yellow
    "#4EEC59", // green
    "#00FFFD", // cyan
]

function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, TAU, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

class Mover {
    constructor(color, position) {
        this.color = color;
        this.x = position[0];
        this.y = position[1];
        // mover moves with constant speed in a randomly varying direction.
        this.direction = Math.random() * TAU;
    }

    draw() {
        // draw extra circles to simulate screen wrap
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                var x = this.x + dx * canvas.width;
                var y = this.y + dy * canvas.height;

                // generate random opacity between 2 and 4
                var opacity = Math.random() * 3 + 1;
                var opacity_hex = '0' + Math.round(opacity);
                var color = this.color + opacity_hex;

                drawCircle(x, y, moverRadius, color)
            }
        }
    }

    update() {
        this.x += moverSpeed * Math.cos(this.direction);
        this.y += moverSpeed * Math.sin(this.direction);
        this.x %= canvas.width;
        this.y %= canvas.height;

        this.direction += turnRange * (Math.random() - 1 / 2);
    }
}

function setup() {
    var img = new Image();
    img.src = "img/movers.png";
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        draw();
    }

    for (const color of colors) {
        var position = [
            Math.random() * canvas.width,
            Math.random() * canvas.height
        ];
        var mover = new Mover(color, position);
        movers.push(mover);
    }
}

function draw() {
    for (const mover of movers) {
        mover.update();
        mover.draw();
    }
    requestAnimationFrame(draw);
}

setup();
