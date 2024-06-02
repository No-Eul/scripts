// ==UserScript==
// @name         ViewBox Indicator
// @namespace    https://github.com/No-Eul
// @version      1.0
// @description  Show regular tank view box in a tech tree of Sniper or Smasher which have a larger view box.
// @author       NoEul
// @license      MIT License - https://github.com/No-Eul/scripts/raw/master/LICENSE.txt
// @source       https://github.com/No-Eul/scripts
// @supportURL   https://github.com/No-Eul/scripts/issues
// @updateURL    https://github.com/No-Eul/scripts/raw/Diep.io/ViewBoxIndicator.user.js
// @downloadURL  https://github.com/No-Eul/scripts/raw/Diep.io/ViewBoxIndicator.user.js
// @match        *://diep.io/*
// @icon         https://diep.io/favicon.ico
// ==/UserScript==

(() => {
	const canvas = document.createElement("canvas");
	canvas.id = "viewbox-indicator";
	[canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];
	[canvas.style.position, canvas.style.inset, canvas.style.pointerEvents] = ["absolute", "0", "none"];
	document.getElementById("canvas").after(canvas);

	let context = canvas.getContext("2d");

	window.addEventListener("resize", () => {
		[canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];
		draw(context);
	});

	let range = 0;
	window.addEventListener("keydown", event => {
		if (event.code === "KeyZ" && !event.repeat) {
			range = ++range % 5;
			draw(context, range);
		}
	});

	function draw(ctx, range) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.lineWidth = 1;
		ctx.globalAlpha = 0.5;
		switch (range) {
			case 1: {
				ctx.strokeStyle = "red";
				ctx.strokeRect(
					canvas.width * 0.05, canvas.height * 0.05,
					canvas.width * 0.9, canvas.height * 0.9
				);
				break;
			}
			case 2: {
				ctx.strokeStyle = "red";
				ctx.strokeRect(
					canvas.width * 0.075, canvas.height * 0.075,
					canvas.width * 0.85, canvas.height * 0.85
				);
				ctx.strokeStyle = "yellow";
				ctx.strokeRect(
					canvas.width / 36, canvas.height / 36,
					canvas.width * 17 / 18, canvas.height * 17 / 18
				);
				break;
			}
			case 3: {
				ctx.strokeStyle = "red";
				ctx.strokeRect(
					canvas.width * 0.1, canvas.height * 0.1,
					canvas.width * 0.8, canvas.height * 0.8
				);
				ctx.strokeStyle = "yellow";
				ctx.strokeRect(
					canvas.width / 18, canvas.height / 18,
					canvas.width * 8 / 9, canvas.height * 8 / 9
				);
				ctx.strokeStyle = "green";
				ctx.strokeRect(
					canvas.width / 34, canvas.height / 34,
					canvas.width * 16 / 17, canvas.height * 16 / 17
				);
				break;
			}
			case 4: {
				ctx.strokeStyle = "red";
				ctx.strokeRect(
					canvas.width * 0.15, canvas.height * 0.15,
					canvas.width * 0.7, canvas.height * 0.7
				);
				ctx.strokeStyle = "yellow";
				ctx.strokeRect(
					canvas.width / 9, canvas.height / 9,
					canvas.width * 7 / 9, canvas.height * 7 / 9
				);
				ctx.strokeStyle = "green";
				ctx.strokeRect(
					canvas.width * 3 / 34, canvas.height * 3 / 34,
					canvas.width * 14 / 17, canvas.height * 14 / 17
				);
				ctx.strokeStyle = "blue";
				ctx.strokeRect(
					canvas.width * 0.0625, canvas.height * 0.0625,
					canvas.width * 0.875, canvas.height * 0.875
				);
				break;
			}
		}
	}
})();
