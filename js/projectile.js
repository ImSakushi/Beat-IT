
document.getElementById('hit').style.display='none';
document.getElementById('hit_h').style.display='none';


document.addEventListener("keydown", function(e) {
    if(e.key==="z" || e.key==="s") {
        if (hitboxActivated == true) {
          console.log("Valide !");
          document.getElementById('hit').style.display='block';
          setTimeout(function() {
              document.getElementById('hit').style.display='none';
          }, 500);
        } else {
            console.log("Non valide !");
        }
    }
    if(e.key==="q" || e.key==="d") {
      if (hitboxActivated == true) {
        console.log("Valide !");
      hit_h.style.top = projectileMoveH + "vh";
        document.getElementById('hit_h').style.display='block';
        setTimeout(function() {
            document.getElementById('hit_h').style.display='none';
        }, 500);
      } else {
        console.log("Non valide !");
      }
    }
});





