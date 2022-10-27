var vert = 26;                                                       //
var vertical = vert + "vh";                                          // "left"
var hor = 12;                                                     //
var horizontal = hor + "vh";                                          // "top"
                                                                     // initialisation de la positon du defenseur
document.getElementById('redmic').style.top = vertical;         //
document.getElementById('redmic').style.left = horizontal;      // affectation des valeurs



function redmic_mouv() { // mouvement defenseur
    console.log("event.keyCode="+event.keyCode);

    // systeme mouvement + restrictions
    if(vert != 0){  //restriction mouv
        if(hor != 0){ //restriction mouv
            if(hor != 24){ //restriction mouv
                if(event.keyCode == 38){ // +up (-top*)
                    // console.log("event.keyCode="+event.keyCode);
                    document.getElementById("redmic").style.transitionDuration = "0.1s";
                    vert = vert - 13;
                    vertical = vert + "vh";
                    console.log(vertical);
                    document.getElementById('redmic').style.top = vertical;
                }
            }
        }
    }

    if(vert != 52){ //restriction mouv
        if(hor != 0){ //restriction mouv
            if(hor != 24){ //restriction mouv
                if(event.keyCode == 40){ // +down (+top*)
                    // console.log("event.keyCode="+event.keyCode);
                    document.getElementById("redmic").style.transitionDuration = "0.1s";
                    vert = vert + 13;
                    vertical = vert + "vh";
                    console.log(vertical);
                    document.getElementById('redmic').style.top = vertical;
                }
            }
        }
    }

    if(hor != 24){ //restriction mouv
        if(vert != 52){ //restriction mouv
            if(vert != 0){ //restriction mouv
                if(event.keyCode == 39){ // +right (+left*)
                    // console.log("event.keyCode="+event.keyCode);
                    document.getElementById("redmic").style.transitionDuration = "0.1s";
                    projectileMove = projectileMove + 11.5;
                    hor = hor + 12;
                    horizontal = hor + "vh";
                    console.log(horizontal);
                    document.getElementById('redmic').style.left = horizontal;
                } 
            }
        }
    }

    if(hor !=0){ //restriction mouv
        if(vert != 52){ //restriction mouv
            if(vert != 0){ //restriction mouv
                if(event.keyCode == 37){ //+left (-left*)
                    // console.log("event.keyCode="+event.keyCode);
                    document.getElementById("redmic").style.transitionDuration = "0.1s";
                    projectileMove = projectileMove - 11.5;
                    hor = hor - 12;
                    horizontal = hor + "vh";
                    console.log(horizontal);
                    document.getElementById('redmic').style.left = horizontal;
                } 
            }
        }
    }
    
}
document.onkeydown = redmic_mouv; //verication keydown