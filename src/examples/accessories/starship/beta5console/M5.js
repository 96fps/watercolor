
var draw
let rate=1;

// SVG.on(document, 'DOMContentLoaded', function() {
//   draw =SVG('#myRectId');
// //   rect.animate(2000, 1000, 'now').attr({ fill: '#f03' })
// //   var runner = new SVG.Runner(1000)
// // runner.move(100, 100)
//     // draw.children().length
// // runner.element('#myRectId')
// var intervalId;
// if (!intervalId) {
//     intervalId =  setInterval(randomize(), 500);
//   }

// })
// variable to store our intervalID
let intervalId;
let timeoutId;
var draw
var draw2
function runFaster() {
    //document.getElementById("fast").classList.add('sel');
    //document.getElementById("slow").classList.remove('sel');
    document.getElementById("stop").classList.remove('sel');
    document.getElementById("step").classList.remove('sel');
  if (intervalId) {
    stopTextColor();
    clearTimeout(timeoutId);
  }
  // check if an interval has already been set up
  if (!intervalId) {
    intervalId = setInterval(flashTextfaster, 10);
  }
}
function runFast() {
    //document.getElementById("fast").classList.add('sel');
    //document.getElementById("slow").classList.remove('sel');
    document.getElementById("stop").classList.remove('sel');
    document.getElementById("step").classList.remove('sel');
  if (intervalId) {
    stopTextColor();
    clearTimeout(timeoutId);
  }
  // check if an interval has already been set up
  if (!intervalId) {
    intervalId = setInterval(flashText, 10);
  }
}

function flashTextfaster() {
//   const oElem = document.getElementById("my_box");
//   oElem.className = oElem.className === "go" ? "stop" : "go";

    
draw2.children()[0].attr({'stroke-opacity': 0.0 });
    let max = 0.0;
    let count = 0;
    draw2.children().forEach(e =>
    {

        if (e.attr('stroke-opacity') >= max ){
            max = e.attr('stroke-opacity');
        }

        if (e.attr('stroke-opacity') >= 0.25 ){
            count++;
        }
        e.attr({'stroke-width': 2.0 });
        // e.attr({'stroke-width': ((e.attr('stroke-width')+0.05) )});
        // e.attr({'stroke-width': ((e.attr('stroke-width')*1.1) )});
        // e.attr({'stroke-linecap': "round"});
        // console.log(e);
        // e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.95) + 0.001)});
		
		if (e.attr('stroke-opacity') >= 0.95 ){
            e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.98) + 0.005)});
        }else{

            e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.65) + 0.000)});
        }

        //e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.9) + ( Math.pow(Math.random() ,100)))});
        if(Math.random() >=  0.99 ){
            e.attr({'stroke-opacity': 1.0 });
            // e.attr({'filter': "blurMe" });
             
            // e.attr({'stroke-width': 0.5 });
            // e.attr({'stroke-width': 0.5 }); O

        }
        // e.attr({'stroke-width': 1.0 });
        e.attr({'stroke-width': 0.5 });
        // e.attr({'stroke-width': 1.5 });
    } 
    )
    let rand = Math.floor(Math.random()*draw2.children().length)
    // console.log(rand);
    // console.log(max);
    if ( max <= 0.5 || ( count <= 9 )) {
        draw2.children()[rand].attr({'stroke-opacity': 1.0 });
    }
    draw2.children()[0].attr({'fill-opacity': 1 });
    draw2.children()[0].attr({'stroke-opacity': 0.0 });
    draw2.children()[0].attr({'stroke-width': 0.0 });
    
    for(let i = 1; i< 4; i++){
        let rand = Math.floor(Math.random()*draw2.children().length)
            // console.log(rand);
            // console.log(max);
            if ( max <= 0.75 || ( count <= 20 )) {
                draw2.children()[rand].attr({'stroke-opacity': 1.0 });
            }
            draw2.children()[0].attr({'fill-opacity': 1 });
            draw2.children()[0].attr({'stroke-opacity': 0.0 });
            draw2.children()[0].attr({'stroke-width': 0.0 });
        }
    // draw2.children()[1].attr({'filter': null });
}
function flashText() {
//   const oElem = document.getElementById("my_box");
//   oElem.className = oElem.className === "go" ? "stop" : "go";

    
draw2.children()[0].attr({'stroke-opacity': 0.0 });
    let max = 0.0;
    let count = 0;
    draw2.children().forEach(e =>
    {

        if (e.attr('stroke-opacity') >= max ){
            max = e.attr('stroke-opacity');
        }

        if (e.attr('stroke-opacity') >= 0.25 ){
            count++;
        }
        e.attr({'stroke-width': 2.0 });
        // e.attr({'stroke-width': ((e.attr('stroke-width')+0.05) )});
        // e.attr({'stroke-width': ((e.attr('stroke-width')*1.1) )});
        // e.attr({'stroke-linecap': "round"});
        // console.log(e);
        // e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.95) + 0.001)});
		
		if (e.attr('stroke-opacity') >= 0.95 ){
            e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.98) + 0.005)});
        }else{

            e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.95) + 0.000)});
        }

        //e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.9) + ( Math.pow(Math.random() ,100)))});
        if(Math.random() >=  0.99 ){
            e.attr({'stroke-opacity': 1.0 });
            // e.attr({'filter': "blurMe" });
             
            // e.attr({'stroke-width': 0.5 });
            // e.attr({'stroke-width': 0.5 }); O

        }
        // e.attr({'stroke-width': 1.0 });
        e.attr({'stroke-width': 0.5 });
        // e.attr({'stroke-width': 1.5 });
    } 
    )
    let rand = Math.floor(Math.random()*draw2.children().length)
    // console.log(rand);
    // console.log(max);
    if ( max <= 0.5 || ( count <= 20 )) {
        draw2.children()[rand].attr({'stroke-opacity': 1.0 });
    }
    draw2.children()[0].attr({'fill-opacity': 1 });
    draw2.children()[0].attr({'stroke-opacity': 0.0 });
    draw2.children()[0].attr({'stroke-width': 0.0 });
    
    // draw2.children()[1].attr({'filter': null });
}
function runSlow() {
    //document.getElementById("fast").classList.remove('sel');
    //document.getElementById("slow").classList.add('sel');
    document.getElementById("stop").classList.remove('sel');
    document.getElementById("step").classList.remove('sel');
    
  if (intervalId) {
    stopTextColor();
    clearTimeout(timeoutId);
  }

  // check if an interval has already been set up
  if (!intervalId) {
    intervalId = setInterval(flashTextB, 10);
  }
}
function RateToggle(){
    //RateToggle
    // console.log(rate);
    // console.log(rate+1);
    // console.log((rate+1)%3);
    rate++;
    rate%=3;
    // console.log(rate);
    if(rate == 1){
    document.getElementById("rate").classList.remove('btn_rate_slow');
    document.getElementById("rate").classList.remove('btn_rate_mid');
    document.getElementById("rate").classList.remove('btn_rate_fast');
    document.getElementById("rate").classList.add('btn_rate_slow');
    // console.log(rate);
        console.log('rate 1');
        runSlow();
}else if(rate == 2){
        document.getElementById("rate").classList.remove('btn_rate_slow');
        document.getElementById("rate").classList.remove('btn_rate_mid');
        document.getElementById("rate").classList.remove('btn_rate_fast');
        document.getElementById("rate").classList.add('btn_rate_mid');
        // console.log(rate);
        console.log('rate 2');
        runFast();

    }else if(rate == 0){
        document.getElementById("rate").classList.remove('btn_rate_slow');
        document.getElementById("rate").classList.remove('btn_rate_mid');
        document.getElementById("rate").classList.remove('btn_rate_fast');
        document.getElementById("rate").classList.add('btn_rate_fast');
        // console.log(rate);
        console.log('rate 3');
        runFaster();

    }else{
        rate = 1;
        // RateToggle();
        // console.log(rate);
        // console.log('rate reset');
    }
}
function flashTextB() {
//   const oElem = document.getElementById("my_box");
//   oElem.className = oElem.className === "go" ? "stop" : "go";

    draw2.children()[0].attr({'stroke-opacity': 0.0 });
    let max = 0.0;
    let count = 0;
	
    draw2.children().forEach(e =>
    {

        if (e.attr('stroke-opacity') >= max ){
            max = e.attr('stroke-opacity');
        }

        if (e.attr('stroke-opacity') >= 0.25 ){
            count++;
        }
        e.attr({'stroke-width': 2.0 });
        // e.attr({'stroke-width': ((e.attr('stroke-width')+0.05) )});
        // e.attr({'stroke-width': ((e.attr('stroke-width')*1.1) )});
        // e.attr({'stroke-linecap': "round"});
        // console.log(e);
        if (e.attr('stroke-opacity') >= 0.90 ){
            e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.98) + 0.005)});
        }else{

            e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.95) + 0.000)});
        }
        //e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.9) + ( Math.pow(Math.random() ,100)))});
        if(Math.random() >=  0.999 ){
            // e.attr({'stroke-opacity': 1.0 });
            // e.attr({'filter': "blurMe" });
             
            // e.attr({'stroke-width': 0.5 });
            // e.attr({'stroke-width': 0.5 });
		}
        // e.attr({'stroke-width': 1.0 });
        e.attr({'stroke-width': 0.5 });
        // e.attr({'stroke-width': 1.5 });
    } 
    )

    let rand = Math.floor(Math.random()*draw2.children().length)
    // console.log(rand);
    // console.log(max);
    if ( max <= 0.5 || ( count <= 2 + Math.random()+ Math.random() )) {
        draw2.children()[rand].attr({'stroke-opacity': 1.0 });
    }

    draw2.children()[0].attr({'fill-opacity': 1 });
    draw2.children()[0].attr({'stroke-opacity': 0.0 });
    draw2.children()[0].attr({'stroke-width': 0.0 });
    // draw2.children()[1].attr({'filter': null });
}

function runStop() {
    //document.getElementById("fast").classList.remove('sel');
    //document.getElementById("slow").classList.remove('sel');
    document.getElementById("stop").classList.add('sel');
    document.getElementById("step").classList.remove('sel');
    
    if (intervalId) {
      stopTextColor();
    }
  
    // check if an interval has already been set up
    if (!intervalId) {
      intervalId = setInterval(flashTextC, 10);
      timeoutId = setTimeout(() => {
        stopTextColor();
        }, 2000);

    }
  }
function flashTextC() {
//   const oElem = document.getElementById("my_box");
//   oElem.className = oElem.className === "go" ? "stop" : "go";

    
    draw2.children().forEach(e =>
    {

        
        // e.attr({'stroke-width': 2.0 });
        // e.attr({'stroke-width': ((e.attr('stroke-width')+0.05) )});
        // e.attr({'stroke-width': ((e.attr('stroke-width')*1.1) )});
        // e.attr({'stroke-linecap': "round"});
        // console.log(e);
        // e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.95) + 0.005)});
        //e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.9) + ( Math.pow(Math.random() ,100)))});
        // if(Math.random() >=  0.995 ){
        //     e.attr({'stroke-opacity': 1.0 });
        //     // e.attr({'filter': "blurMe" });
             
        //     // e.attr({'stroke-width': 0.5 });
        //     // e.attr({'stroke-width': 0.5 });
        // }
        // e.attr({'stroke-width': 1.5 });


        if (e.attr('stroke-opacity') >= 0.50 ){
            e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.15) + 0.85)});
        }else{

            e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.85) + 0.000)});
        }

        e.attr({'stroke-width': 0.5 });
    } 
    )
    draw2.children()[0].attr({'fill-opacity': 1 });
    draw2.children()[0].attr({'stroke-opacity': 0.0 });
    draw2.children()[0].attr({'stroke-width': 0.0 });
    // draw2.children()[1].attr({'filter': null });
}

function runStep() {
    //document.getElementById("fast").classList.remove('sel');
    //document.getElementById("slow").classList.remove('sel');
    document.getElementById("stop").classList.remove('sel');
    document.getElementById("step").classList.add('sel');
    //document.getElementById("fast").classList.remove('sel');
    //document.getElementById("slow").classList.remove('sel');
    flashTextD();
    
    if (intervalId) {
      stopTextColor();
    }
    // check if an interval has already been set up
    if (!intervalId) {
      intervalId = setInterval(flashTextC, 10);
      timeoutId = setTimeout(() => {
        // stopTextColor();
        document.getElementById("stop").classList.add('sel');
        document.getElementById("step").classList.remove('sel');
        }, 500);

    }
  }
function flashTextD() {
//   const oElem = document.getElementById("my_box");
//   oElem.className = oElem.className === "go" ? "stop" : "go"; 

    
    draw2.children().forEach(e =>
    {

        if(Math.random() >=  0.85 ){
        //     e.attr({'stroke-opacity': 1.0 });
        //     // e.attr({'filter': "blurMe" });
             
            // e.attr({'stroke-width': 0.5 });
            // e.attr({'stroke-width': 0.5 });
            // e.attr({'stroke-opacity': (1.0)});
            e.attr({'stroke-opacity': ((Math.random()*0.15) + 0.85)});

        }
        else{
          // e.attr({'stroke-opacity': (0.0)});
            e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.25) + 0.000)});
          // e.attr({'stroke-opacity': ((Math.random()*0.5) )});
        }

        // if (e.attr('stroke-opacity') >= 0.50 ){
        //     e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.75) + 0.25)});
        // }else{
        //     e.attr({'stroke-opacity': ((e.attr('stroke-opacity')*0.25) + 0.000)});
        // }

        e.attr({'stroke-width': 0.5 });
    } 
    )
    draw2.children()[0].attr({'fill-opacity': 1 });
    draw2.children()[0].attr({'stroke-opacity': 0.0 });
    draw2.children()[0].attr({'stroke-width': 0.0 });
    // draw2.children()[1].attr({'filter': null });
}

function stopTextColor() {
  clearInterval(intervalId);
  // release our intervalId from the variable
  intervalId = null;
  clearTimeout(timeoutId);
}
SVG.on(document, 'DOMContentLoaded', function() {
    draw2 =SVG('#myRectId');
    // draw2 = draw.clone();
    // draw2.addTo(draw);
//document.getElementById("fast").addEventListener("click",  runFast);
//document.getElementById("slow").addEventListener("click", runSlow);
document.getElementById("stop").addEventListener("click", runStop);
document.getElementById("step").addEventListener("click", runStep);
// document.getElementById("idle").addEventListener("click", Idle);
document.getElementById("rate").addEventListener("click", RateToggle);
runSlow();
RateToggle();
})
