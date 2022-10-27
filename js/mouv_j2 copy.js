var vert = 240;                                                       //
var vertical = vert + "px";                                          // "left"
var hor = 44.5;                                                     //
var horizontal = hor + "%";                                          // "top"
                                                                     // initialisation de la positon du defenseur
document.getElementById('redmic').style.top = vertical;         //
document.getElementById('redmic').style.left = horizontal;      // affectation des valeurs



function redmic_mouv() { // mouvement defenseur
    console.log("event.keyCode="+event.keyCode);

    // systeme mouvement + restrictions
    if(vert != -4){  //restriction mouv
        if(hor != 0){ //restriction mouv
            if(hor != 89){ //restriction mouv
                if(event.keyCode == 38){ // +up (-top*)
                    // console.log("event.keyCode="+event.keyCode);
                    document.getElementById("redmic").style.transitionDuration = "0.1s";
                    vert = vert - 122;
                    vertical = vert + "px";
                    console.log(vertical);
                    document.getElementById('redmic').style.top = vertical;
                }
            }
        }
    }

    if(vert != 484){ //restriction mouv
        if(hor != 0){ //restriction mouv
            if(hor != 89){ //restriction mouv
                if(event.keyCode == 40){ // +down (+top*)
                    // console.log("event.keyCode="+event.keyCode);
                    document.getElementById("redmic").style.transitionDuration = "0.1s";
                    vert = vert + 122;
                    vertical = vert + "px";
                    console.log(vertical);
                    document.getElementById('redmic').style.top = vertical;
                }
            }
        }
    }

    if(hor != 89){ //restriction mouv
        if(vert != 484){ //restriction mouv
            if(vert != -4){ //restriction mouv
                if(event.keyCode == 39){ // +right (+left*)
                    // console.log("event.keyCode="+event.keyCode);
                    document.getElementById("redmic").style.transitionDuration = "0.1s";
                    hor = hor + 44.5;
                    horizontal = hor + "%";
                    console.log(horizontal);
                    document.getElementById('redmic').style.left = horizontal;
                } 
            }
        }
    }

    if(hor != 0){ //restriction mouv
        if(vert != 484){ //restriction mouv
            if(vert != -4){ //restriction mouv
                if(event.keyCode == 37){ //+left (-left*)
                    // console.log("event.keyCode="+event.keyCode);
                    document.getElementById("redmic").style.transitionDuration = "0.1s";
                    hor = hor - 44.5;
                    horizontal = hor + "%";
                    console.log(horizontal);
                    document.getElementById('redmic').style.left = horizontal;
                } 
            }
        }
    }
    
}
document.onkeydown = redmic_mouv; //verication keydown