console.log('running');


let r = 255;
let g = 255;
let b = 255;

let rEnd = false;
let gEnd = false;
let bEnd = false;

let cycle = 0;

const paint = () => {
	if (cycle === 0) {
		if (!gEnd) {
			if (g > 170) {
				g--
				if (g === 170) {
					gEnd = true;
					cycle++
				}
			}
		} else if (g < 255) {
			g++ 
			if (g === 255) {
				gEnd = false;
				cycle--
			}
		}
	} else if (cycle === 1) {
		if (!bEnd) {
			if (b > 155) {
				b--
				if (g < 255) g++
				if (b === 155) {
					bEnd = true;
					cycle++;
				}
			}
		} else {
			b--
		}
	} else {
		if (!rEnd) {
			if (r > 155) {
				r--
				if (r === 155) {
					rEnd = true;
				}
			}
		} else {
			if (r === 255 && b === 255 && g === 255 ) {
				rEnd = false;
				bEnd = false;
				gEnd = false;
				cycle = 0;
			} else if (b < 255) {
				b++
			} else if (r < 255) {
				r++
			} else if (r === 255) {
				rEnd = false;
				cycle--;
			}
		}
	}

	document.body.setAttribute('style', `background: rgb(${r}, ${g}, ${b}`);
};

setInterval(paint, 200);