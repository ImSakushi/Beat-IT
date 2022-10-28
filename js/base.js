var bluemic = document.getElementById("bluemic");
var redmic = document.getElementById("redmic");
var i = 0;
var J1 = ["img/bluemic.png", "img/redmic.png"]
var J2 = ["img/redmic.png", "img/bluemic.png"]
var audio = new Audio('sounds/switch.wav');
var damage = new Audio('sounds/damage.wav');
var switchcolor = 0;

let x = 11.5;
let y = 11;

let projectileMove = 11.5;
let projectileMoveH = 27;
let vie_j1 = 3;
let vie_j2 = 3;

document.getElementById("vies").innerHTML = vie_j1;

document.addEventListener("keydown", function(e) {
    var left = parseInt(window.getComputedStyle(bluemic).getPropertyValue("left"));
    if (switchcolor == 0) {
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
    } else if (switchcolor == 1) {
      if(e.key==="ArrowLeft") {
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
    else if(e.key==="ArrowRight") {
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
    if(e.key==="ArrowUp") {
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
    else if(e.key==="ArrowDown") {
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
    }
});

bluemic.style.top = y + "vh";
bluemic.style.left = x + "vh";




redmic.style.top = y + "vh";
redmic.style.left = x + "vh";

hit.style.top = -2 + "vh";
hit.style.left = projectileMove + "vh";

projectileH.style.top = -10 + "vh";
projectileH.style.left = 11 + "vh";

projectileB.style.top = 65 + "vh";
projectileB.style.left = 11 + "vh";

hit_h.style.top = projectileMoveH + "vh";
hit_h.style.left = 1 + "vh";

vies.style.top = 50 + "vh";
vies.style.left = 30 + "vh";

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
        if (switchcolor == 0) {
          switchcolor = 1;
          document.getElementById("vies").innerHTML = vie_j2;
        } else {
          switchcolor = 0;
          document.getElementById("vies").innerHTML = vie_j1;
        }
        document.getElementById("timer").style.color = "white";
        timer = 15;
        if (i == 0) {
          i = 1;
        } else {
          i = 0;
        }
        audio.play();
        document.getElementById('bluemic').src = J1[i];
        document.getElementById('redmic').src = J2[i];
    }
    if(timer == 3) {
        document.getElementById("timer").style.color = "red";
    }
    if(timer%2 == 0) {
        hitboxActivated = false;
        document.getElementById('hitbox').style.display='none';
        document.getElementById('hitbox2').style.display='none';
        document.getElementById('hitbox3').style.display='none';
        document.getElementById('hitbox4').style.display='none';
    }
    if(timer%2 == 1) {
        hitboxActivated = true;
        document.getElementById('hitbox').style.display='block';
        document.getElementById('hitbox2').style.display='block';
        document.getElementById('hitbox3').style.display='block';
        document.getElementById('hitbox4').style.display='block';
    }
}, 1000);


hitbox.style.top = -0.1 + "vh";
hitbox.style.left = 11.5 + "vh";

hitbox2.style.top = 24 + "vh";
hitbox2.style.left = 11.5 + "vh";

hitbox3.style.top = 12 + "vh";
hitbox3.style.left = 0 + "vh";

hitbox4.style.top = 12 + "vh";
hitbox4.style.left = 24 + "vh";