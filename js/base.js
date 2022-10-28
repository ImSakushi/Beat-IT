var bluemic = document.getElementById("bluemic");
var redmic = document.getElementById("redmic");

let x = 11.5;
let y = 11;

let projectileMove = 11.5;
let projectileMoveH = 27;
let vie_j1 = 3;

document.addEventListener("keydown", function(e) {
    var left = parseInt(window.getComputedStyle(bluemic).getPropertyValue("left"));
    if(e.key==="q") {
        bluemic.animate(
            [
              // keyframes
              { transform: "translate(0vh, 0vh)" },
              { transform: "translate(-11vh, 0vh)" },
            ],
            {
              // timing options
              duration: 100,
              iterations: 1,
            }
          );
    }
    else if(e.key==="d") {
        bluemic.animate(
            [
              // keyframes
              { transform: "translate(0vh, 0vh)" },
              { transform: "translate(11vh, 0vh)" },
            ],
            {
              // timing options
              duration: 100,
              iterations: 1,
            }
          );
    }
    var top = parseInt(window.getComputedStyle(bluemic).getPropertyValue("top"));
    if(e.key==="z") {
        bluemic.animate(
            [
              // keyframes
              { transform: "translate(0vh, 0vh)" },
              { transform: "translate(0vh, -11vh)" },
            ],
            {
              // timing options
              duration: 100,
              iterations: 1,
            }
          );
    }
    else if(e.key==="s") {
        bluemic.animate(
            [
              // keyframes
              { transform: "translate(0vh, 0vh)" },
              { transform: "translate(0vh, 11vh)" },
            ],
            {
              // timing options
              duration: 100,
              iterations: 1,
            }
          );
    }
});

bluemic.style.top = y + "vh";
bluemic.style.left = x + "vh";




redmic.style.top = y + "vh";
redmic.style.left = x + "vh";

hit.style.top = -2 + "vh";
hit.style.left = projectileMove + "vh";

hit_h.style.top = projectileMoveH + "vh";
hit_h.style.left = 1 + "vh";

// hit.style.left =  0 + "vh";


// Coordonées souris

document.addEventListener("click", function(e) {
    console.log("X: " + e.clientX + " Y: " + e.clientY);
});

var hitboxActivated = false;

// Le timer 15s

var timer = 15;
var interval = setInterval(function() {
    console.log(timer);
    timer--;
    document.getElementById("timer").innerHTML = timer;
    if(timer <= 0) {
        console.log("Switch");
        document.getElementById("timer").style.color = "white";
        timer = 15;
    }
    if(timer == 3) {
        document.getElementById("timer").style.color = "red";
    }
    if(timer%2 == 0) {
        hitboxActivated = false;
        document.getElementById('hitbox').style.display='none';
    }
    if(timer%2 == 1) {
        hitboxActivated = true;
        document.getElementById('hitbox').style.display='block';
    }
}, 1000);


hitbox.style.top = 3 + "vh";
hitbox.style.left = 11.5 + "vh";


