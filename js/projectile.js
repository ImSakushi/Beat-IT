
document.getElementById('hit').style.display='none';
document.getElementById('hit_h').style.display='none';
document.getElementById('projectileH').style.display='none';
document.getElementById('projectileB').style.display='none';

// check if there is a collision between bluemic and redmic

function restart() {
  location.reload();
}

function collision() {
    var hit = document.getElementById('hit');
    var redmic = document.getElementById('redmic');
    var hitRect = hit.getBoundingClientRect();
    var redmicRect = redmic.getBoundingClientRect();

  if (attackh == false) {
    if (attack == false) {
      if (hitRect.top < redmicRect.bottom &&
        hitRect.right > redmicRect.left &&
        hitRect.bottom > redmicRect.top &&
        hitRect.left < redmicRect.right) {
        console.log("collision");
        attack = true;
        setTimeout(function(){attack = false;}, 1000);
        if (switchcolor == 0) {
          vie_j1 = vie_j1 - 1;
          damage.play()
          document.getElementById("vies").innerHTML = vie_j1;
        } else {
          vie_j2 = vie_j2 - 1;
          damage.play()
          document.getElementById("vies").innerHTML = vie_j2;
        }
        if (vie_j1 == 0) {
          setTimeout(function(){
            alert("Joueur 1 a gagné");
            restart()
          }, 1000); 
        }
        if (vie_j2 == 0) {
          setTimeout(function(){
            alert("Joueur 2 a gagné");
            restart()
          }, 1000);
        }
      }
    }
  }
}

// Detect if there a collision between redmic and hit_h, if yes say hey in console

function collisionHaut() {
    var hit_h = document.getElementById('hit_h');
    var redmic = document.getElementById('redmic');
    var hitHRect = hit_h.getBoundingClientRect();
    var redmicRect = redmic.getBoundingClientRect();
    if (attack == false) {
      if (attackh == false) {
        if (hitHRect.top < redmicRect.bottom &&
          hitHRect.right > redmicRect.left &&
          hitHRect.bottom > redmicRect.top &&
          hitHRect.left < redmicRect.right) {
          console.log("collision");
          attackh = true;
          setTimeout(function(){attackh = false;}, 1000);
          if (switchcolor == 0) {
            vie_j1 = vie_j1 - 1;
            damage.play()
            document.getElementById("vies").innerHTML = vie_j1;
          } else {
            vie_j2 = vie_j2 - 1;
            damage.play()
            document.getElementById("vies").innerHTML = vie_j2;
          }
          if (vie_j1 == 0) {
            setTimeout(function(){
              alert("Joueur 1 a gagné");
              restart()
            }, 1000); 
          }
          if (vie_j2 == 0) {
            setTimeout(function(){
              alert("Joueur 2 a gagné");
              restart()
            }, 1000);
          }
        }
      }
    }
  }


function projectileMoveHaut() {
  document.getElementById('projectileH').style.display='block';
  projectileH.animate(
    [
      // keyframes
      { transform: "translate(0vh, 0vh)" },
      { transform: "translate(0vh, 70vh)" },
    ],
    {
      // timing options
      duration: 2500,
      iterations: 1,
    }
  );
  setTimeout(function(){document.getElementById('projectileH').style.display='none';}, 2500);
}

function projectileMoveBas() {
  document.getElementById('projectileB').style.display='block';
  document.getElementById('projectileB').style.rotate='180deg';
  projectileB.animate(
    [
      // keyframes
      { transform: "translate(0vh, 0vh)" },
      { transform: "translate(0vh, 70vh)" },
    ],
    {
      // timing options
      duration: 2500,
      iterations: 1,
    }
    
  );
  setTimeout(function(){document.getElementById('projectileB').style.display='none';}, 2500);
}

// Detect if there a collision between redmic and projectileB, if yes say hey in console



document.addEventListener("keydown", function(e) {
  if (switchcolor == 0) {
    if(e.key==="z" || e.key==="s") {
        if (hitboxActivated == true) {
          console.log("Valide !");
          if (attack == false && attackh == false) {
            document.getElementById('hit').style.display='block';
            collision()
            setTimeout(function() {
                document.getElementById('hit').style.display='none';
            }, 500);
          }
        } else {
            console.log("Non valide !");
        }
    }
    if(e.key==="q" || e.key==="d") {
      if (hitboxActivated == true) {
        console.log("Valide !");
      hit_h.style.top = projectileMoveH + "vh";
        if (attack == false && attackh == false) {
          document.getElementById('hit_h').style.display='block';
          collisionHaut()
          setTimeout(function() {
              document.getElementById('hit_h').style.display='none';
          }, 500);
        }
      } else {
        console.log("Non valide !");
      }
    }
    if(e.key==="s") {
      if (hitboxActivated == true) {
        // projectileMoveHaut()
      }
    }
    if(e.key==="z") {
      if (hitboxActivated == true) {
        // projectileMoveBas()
      }
    }
  } else {
    if(e.key==="ArrowUp" || e.key==="ArrowDown") {
      if (hitboxActivated == true) {
        console.log("Valide !");
        if (attack == false && attackh == false) {
          document.getElementById('hit').style.display='block';
          collision()
          setTimeout(function() {
              document.getElementById('hit').style.display='none';
          }, 500);
        }
      } else {
          console.log("Non valide !");
      }
  }
  if(e.key==="ArrowLeft" || e.key==="ArrowRight") {
    if (hitboxActivated == true) {
      console.log("Valide !");
    hit_h.style.top = projectileMoveH + "vh";
    if (attack == false && attackh == false) {
      document.getElementById('hit_h').style.display='block';
      collisionHaut()
      setTimeout(function() {
          document.getElementById('hit_h').style.display='none';
      }, 500);
    }
    } else {
      console.log("Non valide !");
    }
  }
  if(e.key==="s") {
    if (hitboxActivated == true) {
      // projectileMoveHaut()
    }
  }
  if(e.key==="z") {
    if (hitboxActivated == true) {
      // projectileMoveBas()
    }
  }
  }
});