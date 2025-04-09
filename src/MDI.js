HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

document.addEventListener("keydown", logKey);

function logKey(e) {
  if (e.code == "Escape") {
    my_wmfunc.stopMoving(0, containerElm);
  }
  // if(e.code == "key"){
  // my_wmfunc.stopMoving('windowing_toplevel_container');
  // }
}
// function myPreventDefault(event){
// 	event.preventDefault();
// }

var my_wmfunc = (function () {
	return {
    move: function (divElm, xpos, ypos) {
      divElm.style.left = xpos + "px";
      divElm.style.top = ypos + "px";
    },
    fixBounds: function (divElm, containerElm) {
      // var containerElm = containerElm;

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
      my_wmfunc.move(divElm, aX, aY);
    },
    toggleMax: function (divElm, containerElm) {
      var elem = divElm;
      elem.classList.remove("windowElemMoving");
      if (elem.classList.contains("windowElemMaximized")) {
        elem.classList.remove("windowElemMaximized");
        elem.classList.add("windowElemUnMaximized");
      } else {
        elem.classList.remove("windowElemUnMaximized");
        elem.classList.add("windowElemMaximized");
      }
      my_wmfunc.makeActive(divElm, containerElm);
    },
    makeActive: function (divElm, containerElm) {
      // console.log(divElm);
      // console.log(divElm.id);
      // console.log(divElm.classList);
      // var elem = divElm;
      if (!divElm.classList.contains("windowElemActive")) {
        document.getElementsByClassName("windowElem").forEach((elemb) => {
          elemb.classList.remove("windowElemNotMoving");
          elemb.classList.remove("windowElemActive");
          elemb.classList.add("windowElemInactive");
          elemb.classList.remove("windowElemMoving");
          if ((elemb = divElm)) {
            elemb.classList.remove("windowElemInactive");
            elemb.classList.add("windowElemActive");
            // elemb.classList.add('windowElemMoving');
          }
        });
      }
      my_wmfunc.fixBounds(divElm, containerElm);
    },
    startMoving: function (divElm, containerElm, evt) {
      evt = evt || window.event;
      my_wmfunc.makeActive(divElm, containerElm);
      divElm.classList.remove("windowElemNotMoving");
      divElm.classList.remove("windowElemUnMaximized");

      if (!divElm.classList.contains("windowElemMaximized")) {
        divElm.classList.add("windowElemMoving");

        // var containerElm = document.getElementById(containerID);
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
              document.onpointermove = my_wmfunc.stopMoving(
                divElm,
                containerElm
              );
            } else {
              var posX = evt.clientX,
                posY = evt.clientY,
                aX = posX - diffX,
                aY = posY - diffY;
              if (aX < 0) aX = 0;
              if (aY < 0) aY = 0;
              if (aX + eWi > cWi) aX = cWi - eWi;
              if (aY + eHe > cHe) aY = cHe - eHe;
              my_wmfunc.move(divElm, aX, aY);
            }
          });
      }
    },
    stopMoving: function (divElm, containerElm) {
      // var a = document.createElement("script");
      containerElm.style.cursor = "default";
      document.onmousemove = function () {};
      document.onpointermove = function () {};

      containerElm.getElementsByClassName("windowElem").forEach((elem) => {
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

function reportWindowSize(containerElm) {
  // heightOutput.textContent = window.innerHeight;
  // widthOutput.textContent = window.innerWidth;
  containerElm.getElementsByClassName("windowElem").forEach((elem) => {
    // my_wmfunc.fixBounds(elem, 'windowing_toplevel_container');
    my_wmfunc.fixBounds(elem, containerElm);
  });
}
