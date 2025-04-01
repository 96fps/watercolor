HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

document.addEventListener("keydown", logKey);

function logKey(e) {
	if (e.code == "Escape") {
		mydragg.stopMoving("container");
	}
	// if(e.code == "key"){
	// mydragg.stopMoving('container');
	// }
}
// function myPreventDefault(event){
// 	event.preventDefault();
// }

var mydragg = (function () {
	return {
		move: function (divElm, xpos, ypos) {
			divElm.style.left = xpos + "px";
			divElm.style.top = ypos + "px";
		},
		fixBounds: function (divElm, containerID) {
			var containerElm = document.getElementById(containerID);

			var divTop = parseInt(divElm.style.top),
				divLeft = parseInt(divElm.style.left),
				eWi = parseInt(divElm.style.width),
				eHe = parseInt(divElm.style.height),
				cWi = parseInt(containerElm.getBoundingClientRect().width),
				cHe = parseInt(containerElm.getBoundingClientRect().height);

			if (eWi > cWi + 20) {
				divElm.style.width = cWi - 20 + "px";
			}
			if (eHe > cHe + 20) {
				divElm.style.height = cHe - 20 + "px";
			}

			var aY = divTop,
				aX = divLeft;
			if (aX < 10) aX = 10;
			if (aY < 10) aY = 10;
			if (aX + eWi > cWi - 10) aX = cWi - eWi - 10;
			if (aY + eHe > cHe - 10) aY = cHe - eHe - 10;
			mydragg.move(divElm, aX, aY);
		},
		toggleMax: function (divElm) {
			var elem = document.getElementById(divElm);
			elem.classList.remove("windowElemMoving");
			if (elem.classList.contains("windowElemMaximized")) {
				elem.classList.remove("windowElemMaximized");
				elem.classList.add("windowElemUnMaximized");
			} else {
				elem.classList.remove("windowElemUnMaximized");
				elem.classList.add("windowElemMaximized");
			}
			mydragg.makeActive(divElm);
		},
		makeActive: function (divElm) {
			var elem = document.getElementById(divElm);
			if (!elem.classList.contains("windowElemActive")) {
				document.getElementsByClassName("windowElem").forEach((elemb) => {
					elemb.classList.remove("windowElemNotMoving");
					elemb.classList.remove("windowElemActive");
					elemb.classList.add("windowElemInactive");
					elemb.classList.remove("windowElemMoving");
					if ((elemb = elem)) {
						elemb.classList.remove("windowElemInactive");
						elemb.classList.add("windowElemActive");
						// elemb.classList.add('windowElemMoving');
					}
				});
			}
			mydragg.fixBounds(elem, "container");
		},
		startMoving: function (divElm, containerID, evt) {
			evt = evt || window.event;
			mydragg.makeActive(divElm.id);
			divElm.classList.remove("windowElemNotMoving");
			divElm.classList.remove("windowElemUnMaximized");

			if (!divElm.classList.contains("windowElemMaximized")) {
				divElm.classList.add("windowElemMoving");

				var containerElm = document.getElementById(containerID);
				var posX = evt.clientX,
					posY = evt.clientY,
					divTop = divElm.style.top,
					divLeft = divElm.style.left,
					eWi = parseInt(divElm.style.width),
					eHe = parseInt(divElm.style.height),
					cWi = parseInt(containerElm.getBoundingClientRect().width),
					cHe = parseInt(containerElm.getBoundingClientRect().height);
				// console.log('mov:\t'+posX+','+posY);

				containerElm.style.cursor = "move";
				divTop = divTop.replace("px", "");
				divLeft = divLeft.replace("px", "");
				var diffX = posX - divLeft,
					diffY = posY - divTop;
				(document.onmousemove = function () {}),
					(document.onpointermove = function (evt) {
						evt = evt || window.event;

						if (evt.buttons == 0) {
							document.onpointermove = mydragg.stopMoving("container");
						} else {
							var posX = evt.clientX,
								posY = evt.clientY,
								aX = posX - diffX,
								aY = posY - diffY;
							if (aX < 0) aX = 0;
							if (aY < 0) aY = 0;
							if (aX + eWi > cWi) aX = cWi - eWi;
							if (aY + eHe > cHe) aY = cHe - eHe;
							mydragg.move(divElm, aX, aY);
						}
					});
			}
		},
		stopMoving: function (container) {
			var a = document.createElement("script");
			document.getElementById(container).style.cursor = "default";
			document.onmousemove = function () {};
			document.onpointermove = function () {};

			document.getElementsByClassName("windowElem").forEach((elem) => {
				// if(elem = divElm){

				if (elem.classList.contains("windowElemMoving")) {
					elem.classList.remove("windowElemUnMaximized");
					elem.classList.add("windowElemNotMoving");
				}

				elem.classList.remove("windowElemMoving");
			});
		},
	};
})();

function reportWindowSize() {
	// heightOutput.textContent = window.innerHeight;
	// widthOutput.textContent = window.innerWidth;
	document.getElementsByClassName("windowElem").forEach((elem) => {
		// mydragg.fixBounds(elem, 'container');
		mydragg.fixBounds(elem, "container");
	});
}

window.onresize = reportWindowSize;
