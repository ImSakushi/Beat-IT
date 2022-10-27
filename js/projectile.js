
document.getElementById('hit').style.display='none';


document.addEventListener("keydown", function(e) {
    if(e.key==="z" || e.key==="q" || e.key==="s" || e.key==="d") {
        if (hitboxActivated == true) {
          console.log("Valide !");
        // hit.style.left = projectileMove + "vh";
          document.getElementById('hit').style.display='block';
          setTimeout(function() {
              document.getElementById('hit').style.display='none';
          }, 500);
        } else {
            console.log("Non valide !");
        }
    }
});



