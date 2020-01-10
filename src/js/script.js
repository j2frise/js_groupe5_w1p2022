
let speedCaracter =   1000;
let koalaLevel1;
let koalaLevel2;
let koalaLevel3;
let koalaLevel4;

let gameOverLevel1="";
let exitLevel1 ="";
let actionFire1 ="";
let actionAxe1="";
let actionShovel1="";
let exit = "";

let gameOverLevel2="";
let exitLevel2="";
let actionFire2="";
let actionAxe2="";
let actionShovel2="";
let exit2 = "";

let gameOverLevel3="";
let exitLevel3="";
let actionFire3="";
let actionAxe3="";
let actionShovel3="";
let exit3 = "";

let gameOverLevel4="";
let exitLevel4="";
let actionFire4="";
let actionAxe4="";
let actionShovel4="";
let exit4 = "";

let moveKoala;
let speed = 100;

let nbAxe = 1;
let nbExt = 2;
let nbShovel = 0;

let lastScreen = "";
let selectWeap = "axe";

oxo.screens.loadScreen('home', home);

function clean(){
    clearInterval(gameOverLevel1);
    clearInterval(exitLevel1);
    clearInterval(gameOverLevel2);
    clearInterval(exitLevel2);
    clearInterval(gameOverLevel3);
    clearInterval(exitLevel3);
    clearInterval(gameOverLevel4);
    clearInterval(exitLevel4);
    clearInterval(actionShovel1);
    clearInterval(actionFire1);
    clearInterval(actionAxe1);
    clearInterval(actionShovel2);
    clearInterval(actionFire2);
    clearInterval(actionAxe2);
    clearInterval(actionShovel3);
    clearInterval(actionFire3);
    clearInterval(actionAxe3);
}

  function home(){
    clean();
    let start = document.getElementById("start");
    start.addEventListener("click",start_game);

    function start_game(){
        oxo.screens.loadScreen('level1', level1);
    }
  }

  function level1() {
    lastScreen = oxo.screens.getCurrentScreen();
    exit = document.getElementById('exit');
    backup();
    koalaLevel1 = addElement("koala","left",42,"top",40,"#arena");
    oxo.animation.moveElementWithArrowKeys(koalaLevel1, 200);
    let selectAxe1 = document.querySelector(".click_axe .number_weap");
    let selectShovel1 = document.querySelector(".click_shovel .number_weap");
    let selectExt1 = document.querySelector(".click_extinguisher .number_weap");
    selectAxe1.innerHTML = nbAxe;
    selectExt1.innerHTML = nbExt;
    selectShovel1.innerHTML = nbShovel;
    envLevel1();
    openRules("playRules1");
    eventClickWeap();
    actionAxe1 = setInterval(useAxe,1000);
    gameOverLevel1 = setInterval(function(){fire_is_gameover(koalaLevel1)},1000);
    exitLevel1 = setInterval(it_is_exit,1000);

    actionFire1 = setInterval(useExtinguisher,1000);
    actionAxe1 = setInterval(useAxe,1000);
    actionShovel1 = setInterval(function(){useShovel("arena");},1000);
    
    let bord = document.querySelectorAll('.board');
    setInterval(function(){
        for(let ind = 0; ind<bord.length; ind++){
            oxo.elements.onCollisionWithElement(character, ennemy, function() {
                // Character is touched by ennemy
              });
        }
    },1000);
    
  }

  deplace(koalaLevel1);

  function addHandler(para) {
    para.onclick = function() {
      alert('Hello from paragraph');
    }
  }
   
    function level2() {
        lastScreen = oxo.screens.getCurrentScreen();
        exit2 = document.getElementById('exit2');
        clearInterval(gameOverLevel1);
        clearInterval(exitLevel1);
        clearInterval(actionShovel1);
        clearInterval(actionFire1);
        clearInterval(actionAxe1);
        nbShovel = 1;
        backup();
        koalaLevel2 = addElement("koala","left",42,"top",40,"#arena2");
        oxo.animation.moveElementWithArrowKeys(koalaLevel2, 20);
        envLevel2();
        let selectAxe2 = document.querySelector(".click_axe .number_weap");
        let selectShovel2 = document.querySelector(".click_shovel .number_weap");
        let selectExt2 = document.querySelector(".click_extinguisher .number_weap");
        selectAxe2.innerHTML = nbAxe;
        selectExt2.innerHTML = nbExt;
        selectShovel2.innerHTML = nbShovel;
        openRules("playRules2");
        actionAxe2 = setInterval(useAxe,1000);
        eventClickWeap();
        gameOverLevel2 = setInterval(function(){fire_is_gameover(koalaLevel2)},1000);
        exitLevel2 = setInterval(it_is_exit2,1000);
        actionFire2 = setInterval(useExtinguisher,1000);
        actionAxe2 = setInterval(useAxe,1000);
        actionShovel2 = setInterval(function(){useShovel("arena2");},1000);
    }
 
    function level3() {
        lastScreen = oxo.screens.getCurrentScreen();
        exit3 = document.getElementById('exit3');
        clearInterval(gameOverLevel2);
        clearInterval(exitLevel2);
        clearInterval(actionShovel2);
        clearInterval(actionFire2);
        clearInterval(actionAxe2);
        nbShovel = 1;
        backup();
        koalaLevel3 = addElement("koala", "left", 42, "top", 40, "#arena3");
        oxo.animation.moveElementWithArrowKeys(koalaLevel3, 200); 
        envLevel3();
        let selectAxe3 = document.querySelector(".click_axe .number_weap");
        let selectShovel3 = document.querySelector(".click_shovel .number_weap");
        let selectExt3 = document.querySelector(".click_extinguisher .number_weap");
        selectAxe3.innerHTML = nbAxe;
        selectExt3.innerHTML = nbExt;
        selectShovel3.innerHTML = nbShovel;
        openRules("playRules3");
        actionAxe3 = setInterval(useAxe,1000);
        eventClickWeap();
        gameOverLevel3 = setInterval(function(){fire_is_gameover(koalaLevel3)},1000);
        exitLevel3 = setInterval(it_is_exit3,1000);
        actionFire3 = setInterval(useExtinguisher,1000);
        actionAxe3 = setInterval(useAxe,1000);
        actionShovel3 = setInterval(function(){useShovel("arena3");},1000);
    }

    function level4() {
        lastScreen = oxo.screens.getCurrentScreen();
        exit4 = document.getElementById('exit4');
        clearInterval(gameOverLevel3);
        clearInterval(exitLevel3);
        clearInterval(actionShovel3);
        clearInterval(actionFire3);
        clearInterval(actionAxe3);
        nbShovel = 1;
        backup();
        koalaLevel4 = addElement("koala", "left", 42, "top", 40, "#arena4");
        oxo.animation.moveElementWithArrowKeys(koalaLevel4, 20);
        //koala2 = addElement("koala", "left", -35, "down", 350, "#arena4");
        envLevel4();
        let selectAxe4 = document.querySelector(".click_axe .number_weap");
        let selectShovel4 = document.querySelector(".click_shovel .number_weap");
        let selectExt4 = document.querySelector(".click_extinguisher .number_weap");
        selectAxe4.innerHTML = nbAxe;
        selectExt4.innerHTML = nbExt;
        selectShovel4.innerHTML = nbShovel;
        openRules("playRules4");
        actionAxe4 = setInterval(useAxe,1000);
        eventClickWeap();
        gameOverLevel4 = setInterval(function(){fire_is_gameover(koalaLevel4)},1000);
        exitLevel4 = setInterval(it_is_exit4,1000);
        actionFire4 = setInterval(useExtinguisher,1000);
        actionAxe4 = setInterval(useAxe,1000);
        actionShovel4 = setInterval(function(){useShovel("arena4");},1000);
    }

    function level5() {
        //
    }

    function end() {
        clean();
        var menu = document.getElementById("menu");
        menu.addEventListener('click', function() {
            // do something
            oxo.screens.loadScreen('home', home);
    
          });
    }

    function gameover() {
        clean();
        var restart = document.getElementById("restart");
        restart.addEventListener('click', function() {
            // do something
            if(lastScreen === "level1"){
                oxo.screens.loadScreen('level1', level1);
            }
            else if(lastScreen === "level2"){
                oxo.screens.loadScreen('level2', level2);
            }
            else if(lastScreen === "level3"){
                oxo.screens.loadScreen('level3', level3);
            }
            else if(lastScreen === "level4"){
                oxo.screens.loadScreen('level4', level4);
            }
    
          });
    }

  //Create element of game 
  function addElement(ClassElm, x, valX, y, valY, local){
    let defValX = valX == 0 ? valX : valX+'px';
    let defValY = valY == 0 ? valY : valY+'px';
    let styleElm = {};
    styleElm.position = "absolute";

    if(x=="left"){
        styleElm.left = defValX;
    }
    else if(x=="right"){
        styleElm.right = defValX;
    }

    if(y=="top"){
        styleElm.top = defValY;
    }
    else if(y=="down"){
        styleElm.bottom = defValY;
    }
 
    let elementCrea = oxo.elements.createElement({
        type: 'div', // optional
        class: ClassElm, // optional,
        obstacle: false, // optional,
        styles: styleElm, // optional
        appendTo: local // optional
    });
    return elementCrea;
  }


  function autoMoveElement(){
    setInterval(() => {
        var ram = Math.random();
        if (ram <=0.5){
            var targetElm = 'ArrowRight';
        }
        else if (ram >=0.65){
            var targetElm = 'ArrowDown';
        }
        else {
            var targetElm = 'ArrowUp';
        }
        var e = document.dispatchEvent(new KeyboardEvent('keydown',{'key': targetElm}));
        console.log(targetElm)
    }, 3000);

  }

  function envLevel1(){
    addElement("up_bush board","right",38,"top",0,"#arena");
    addElement("down_bush board","left",36,"down",-8,"#arena");
    addElement("left_bush board","left",-6,"top",-1,"#arena");
    addElement("right_bush board","right",-6,"top",0,"#arena");
    addElement("outside_bush_up board","left",139,"top",0,"#arena");
    addElement("outside_bush_down_1 board","left",210,"down",-1,"#arena");
    addElement("outside_bush_down_2 board","right",87.46,"down",-1,"#arena");
    addElement("arrow","left",50,"top",5,"#arena");
    addElement("arrow","right",60,"down",20,"#arena");
    addElement("rock board","left",35,"top",175,"#arena");
    addElement("rock board","left",230,"top",225,"#arena");
    addElement("rock board","left",460,"top",245,"#arena");
    let log1 = addElement("log stop","left",110,"top",85,"#arena");
    log1.style.transform = "rotate(40deg)";
    let log2 = addElement("log stop","left",385,"down",110,"#arena");
    log2.style.transform = "rotate(0deg)";
    addElement("tree board","right",65,"top",65,"#arena");
    addElement("tree board","left",165,"down",125,"#arena");
    addElement("tree board","right",155,"down",55,"#arena");
    addElement("blob_down_left board","left",32,"down",32,"#arena");
    addElement("blob_up_right board","right",110,"top",80,"#arena");
    addElement("blob_down board","left",262,"down",2,"#arena");
    addElement("blob_up board","left",220,"top",20,"#arena");
    addElement("dead_tree_down_left board","left",42,"down",72,"#arena");
    addElement("dead_tree_down_right board","left",130,"down",50,"#arena");
    addElement("dead_tree_down_middle board","left",272,"down",65,"#arena");
    addElement("dead_tree_up_right board","right",130,"top",50,"#arena");
    addElement("burning_tree_down board","left",100,"down",92,"#arena");
    addElement("burning_tree_right board","right",155,"top",85,"#arena");
    addElement("burning_tree_up_left board","left",240,"top",40,"#arena");
    addElement("burning_tree_up_right board","left",339,"top",25,"#arena");
    addFire("right",50,"down",80,2000,"#arena");
    addFire("right",250,"top",190,3500,"#arena");

  }


  function envLevel2(){
    addElement("up_bush board","right",38,"top",0,"#arena2");
    addElement("down_bush board","left",36,"down",-8,"#arena2");
    addElement("left_bush board","left",-6,"top",-1,"#arena2");
    addElement("right_bush board","right",-6,"top",0,"#arena2");
    addElement("arrow","left",50,"top",5,"#arena2");
    addElement("arrow","right",60,"down",20,"#arena2");
    addElement("outside_bush_left board","left",5,"top",110,"#arena2");
    addElement("outside_bush_up_right board","right",139,"top",0,"#arena2");
    addElement("outside_bush_down_right_1 board","right",385,"down",-1,"#arena2");
    addElement("outside_bush_down_right2 board","right",170,"down",5,"#arena2");
    addElement("rock board","left",170,"down",145,"#arena2");
    addElement("rock board","right",170,"down",145,"#arena2");
    addElement("rock board","right",97,"top",119,"#arena2");
    let logs1 = addElement("log stop","right",90,"down",65,"#arena2");
    logs1.style.transform = "rotate(90deg)";
    let logs2 = addElement("log stop","left",270,"top",30,"#arena2");
    logs2.style.transform = "rotate(90deg)";
    let logs3 = addElement("log stop","left",345,"down",150,"#arena2");
    addElement("blob_down_left-2 board","left",52,"down",15,"#arena2");
    addElement("blob_down_righ-2t board","right",250,"down",47,"#arena2");
    addElement("blob_middle_lef2t board","left",232,"top",152,"#arena2");
    addElement("burning_tree_left board","left",248,"top",115,"#arena2");
    addElement("burning_tree_right board","right",300,"down",95,"#arena2");
    addElement("dead_tree_down_left1 board","left",70,"down",86,"#arena2");
    addElement("dead_tree_down_right22 board","right",300,"down",85,"#arena2");
    addElement("dead_tree_right11 board","right",325,"down",80,"#arena2");
    addElement("caterpillar", "right", 300, "down", 35, "#arena2");

    addFire("left",100,"down",200,1000,"#arena2");
    addFire("left",390,"down",300,2000,"#arena2");
    addFire("left",250,"down",50,2500,"#arena2");
    
    addElement("plant1 fleur", "right", 310, "top", 50, "#arena2");
    addElement("plant2 fleur", "left", 430, "down", 200, "#arena2");
  }


function envLevel3() {
    addElement("up_bush board", "right", 38, "top", 0, "#arena3");
    addElement("down_bush board", "left", 36, "down", -8, "#arena3");
    addElement("left_bush board", "left", -6, "top", -1, "#arena3");
    addElement("right_bush board", "right", -6, "top", 0, "#arena3");
    addElement("outside_bush_right3 board", "right", 30, "top", 90, "#arena3");
    addElement("outside_bush_up board", "left", 139, "top", 0, "#arena3");
    addElement("outside_bush_down_1 board", "left", 210, "down", -1, "#arena3");
    addElement("outside_bush_down_2 board", "right", 87.46, "down", -1, "#arena3");
    addElement("rock board", "left", 115, "down", 325, "#arena3");
    addElement("rock board", "left", 30, "down", 255, "#arena3");
    addElement("rock board", "right", 120, "down", 285, "#arena3");
    addElement("fleur board", "left", 80, "down", 310, "#arena3");
    addElement("fleur board", "left", 350, "down", 80, "#arena3");
    addElement("tree board", "right", 265, "down", 95, "#arena3");
    let logss1 = addElement("log stop", "right", 490, "down", 115, "#arena3");
    logss1.style.transform = "rotate(-180deg)";
    let logss2 = addElement("log stop", "right", 490, "down", 325, "#arena3");
    logss2.style.transform = "rotate(90deg)";
    let logss3 = addElement("log stop", "right", 210, "down", 55, "#arena3");
    logss3.style.transform = "rotate(90deg)";
    let logss4 = addElement("log stop", "right", 80, "down", 125, "#arena3");
    logss4.style.transform = "rotate(90deg)";
    addElement("blob_down_left board", "left", 32, "down", 32, "#arena3");
    let blob_up_right = addElement("blob_up_right board", "right", 50, "top", 145, "#arena3");
    blob_up_right.style.transform = "rotate(90deg)";
    let blob_down = addElement("blob_down board", "left", 272, "down", 130, "#arena3");
    blob_down.style.transform = "rotate(180deg)";
    let blob_up = addElement("blob_up board", "left", 300, "top", 20, "#arena3");
    blob_up.style.transform = "rotateY(-180deg)";
    addElement("burning_tree_down board", "left", 90, "down", 92, "#arena3");
    addElement("burning_tree_right board", "right", 95, "top", 115, "#arena3");
    let burning_tree_up_left = addElement("burning_tree_up_left board", "left", 302, "down", 170, "#arena3");
    burning_tree_up_left.style.transform = "rotateY(180deg)";
    addElement("burning_tree_up_right board", "left", 339, "top", 25, "#arena3");
    addElement("dead_tree_down_left board", "left", 42, "down", 72, "#arena3");
    addElement("dead_tree_down_right board", "left", 130, "down", 50, "#arena3");
    addElement("dead_tree_down_middle board", "left", 422, "top", 35, "#arena3");
    addElement("dead_tree_up_right board", "right", 350, "top", 20, "#arena3");
    addElement("caterpillar", "right", 30, "top", 135, "#arena3");
    addElement("arrow", "left", 50, "top", 5, "#arena3");
    addElement("arrow", "right", 60, "down", 20, "#arena3");
    addElement("caterpillar", "right", 30, "top", 135, "#arena3");

    addFire("left",130,"down",130,500,"#arena3");
    addFire("left",330,"down",170,1000,"#arena3");
    addFire("right",60,"down",240,2000,"#arena3");

    
    addElement("plant1 fleur", "right", 310, "top", 230, "#arena3");
    addElement("plant2 fleur", "left", 430, "down", 70, "#arena3");
    addElement("plant1 fleur", "right", 110, "top", 50, "#arena3");
    addElement("plant2 fleur", "left", 120, "down", 190, "#arena3");

}

function envLevel4() {
    addElement("up_bush board", "right", 38, "top", 0, "#arena4");
    addElement("bush_down4 board", "left", -5, "down", -5, "#arena4");
    addElement("bush_left4 board", "left", -6, "top", -8, "#arena4");
    addElement("right_bush board", "right", -6, "top", 0, "#arena4");
    addElement("arrow", "left", 50, "top", 5, "#arena4");
    addElement("arrow", "right", 60, "down", 20, "#arena4");
    let outside_bush_left = addElement("outside_bush_left board", "left", 5, "top", 90, "#arena4");
    outside_bush_left.style.transform = "rotateX(180deg)";
    let outside_bush_left2 = addElement("outside_bush_left board", "left", 5, "top", 290, "#arena4");
    outside_bush_left2.style.transform = "rotateX(180deg)";
    addElement("outside_bush_up_right board", "left", 259, "top", 0, "#arena4");
    addElement("outside_bush_down_right_1 board", "right", 155, "down", -1, "#arena4");
    addElement("outside_bush_down_right2 board", "left", 190, "down", 5, "#arena4");
    addElement("outside_bush_right board", "right", 5, "top",115, "#arena4");
    addElement("rock board", "left", 190, "top", 95, "#arena4");
    addElement("rock board", "left", 330, "top", 55, "#arena4");
    addElement("rock board", "right", 107, "top", 189, "#arena4");
    addElement("rock board", "right", 257, "top", 169, "#arena4");
    var logsss1 = addElement("log stop", "right", 180, "down", 265, "#arena4");
    logsss1.style.transform = "rotate(90deg)";
    var logsss2 = addElement("log stop", "left", 120, "top", 50, "#arena4");
    logsss2.style.transform = "rotate(-180deg)";
    var logsss3 = addElement("log stop", "left", 270, "top", 90, "#arena4");
    var logsss4 = addElement("log stop", "left", 140, "down", 90, "#arena4");
    logsss4.style.transform = "rotate(-90deg)";
    var logsss5 = addElement("log stop", "right", 90, "down", 50, "#arena4");
    logsss5.style.transform = "rotate(-90deg)";
    addElement("blob_down_left-2 board", "right", 52, "top", 25, "#arena4");
    addElement("blob_down_righ-2t board", "right", 350, "down", 47, "#arena4");
    addElement("burning_tree_left board", "left", 348, "down", 95, "#arena4");
    addElement("burning_tree_right board", "right", 90, "down", 345, "#arena4");
    addElement("dead_tree_down_left1 board", "left", 290, "down", 126, "#arena4");
    addElement("dead_tree_down_right22 board", "right", 260, "down", 135, "#arena4");
    addElement("dead_tree_right11 board", "right", 270, "top", 80, "#arena4");
    addElement("caterpillar", "right", 375, "top", 35, "#arena4");
    addElement("plant1 fleur", "right", 310, "top", 50, "#arena4");
    addElement("plant2 fleur", "left", 430, "down", 70, "#arena4");
    addElement("tree board", "left", 165, "down", 195, "#arena4");
    addElement("caterpillar", "right", 375, "top", 35, "#arena4");


    
    addElement("plant1 fleur", "right", 310, "top", 50, "#arena4");
    addElement("plant2 fleur", "left", 430, "down", 70, "#arena4");
    addElement("plant1 fleur", "right", 110, "top", 50, "#arena4");
    addElement("plant2 fleur", "left", 120, "down", 190, "#arena4");

    
    addFire("left", 50, "down", 210,1000,"#arena4");
    addFire("left", 200, "down", 380,3000,"#arena4");
    addFire("left", 530, "down", 370,1500,"#arena4");
    addFire("left", 130, "down", 50,1000,"#arena4");
    addFire("left", 445, "down", 130,2500,"#arena4");
}

function envLevel5() {
    //
}


  function addFire(x, valX, y, valY, time,local){
    setTimeout(function(){
       addElement("fire",x,valX,y,valY,local);
    },time);
  }

 
  function collision(first, second) {
        let sw = first.offsetHeight;
        let sh = first.offsetWidth;
        let sy = first.offsetTop;
        let sx = first.offsetLeft;

        let ax = second.offsetLeft;
        let ay = second.offsetTop;
        let vx = ( ax >= sx && ax <= (sx + sw) );
        let vy = ( ay >= sy && ay <= (sy + sh) );
        if ( vx && vy ) {
        console.log("ay >= sy : "+ay+" >= "+sy);
        console.log("collision");
        }
    }


    function eventClickWeap() {
        let cursor_axe = document.querySelector(".click_axe");
        let cursor_shovel = document.querySelector(".click_shovel");
        let cursor_extinguisher = document.querySelector(".click_extinguisher");
        
        cursor_axe.addEventListener("click",function(){
            selectWeap = "axe";
        });

        cursor_shovel.addEventListener("click",function(){
            selectWeap = "shovel";
        });

        cursor_extinguisher.addEventListener("click",function(){
            selectWeap = "ext";
        });

        document.addEventListener('keydown', (event) => {
            const nameKey = event.key;
            //console.log(nameKey);
            if (nameKey === '2' || nameKey === 'numpad 2' || nameKey === 'é') {
                selectWeap = "axe";
            }
            else if(nameKey === '3' || nameKey === 'numpad 3' || nameKey === '\"'){
                selectWeap = "shovel";
            }
            else if(nameKey === '1' || nameKey === 'numpad 1' || nameKey === '&'){
                selectWeap = "ext";
            }
        }, false);
    }

    function changeCursor(cursor, place) {
        let selectPlace = document.getElementById(place);
        if(cursor == "cursor_axe"){
            selectPlace.classList.add("cursor_axe");
            selectPlace.classList.remove("cursor_shovel");
            selectPlace.classList.remove("cursor_extinguisher");
        }
        else if(cursor == "cursor_shovel"){
            selectPlace.classList.add("cursor_shovel");
            selectPlace.classList.remove("cursor_axe");
            selectPlace.classList.remove("cursor_extinguisher");
        }
        else if(cursor == "cursor_extinguisher"){
            selectPlace.classList.add("cursor_extinguisher");
            selectPlace.classList.remove("cursor_shovel");
            selectPlace.classList.remove("cursor_axe");
        }
    }
    

    function removeElement(elementId,pos) {
        // Removes an element from the document
        let elSup = document.getElementsByClassName(elementId)[pos];
        elSup.remove();
    }

    function fire_is_gameover(koala){
        let ListOfFire = document.querySelectorAll('.fire');
        for(let j = 0; j < ListOfFire.length; j++){    
            oxo.elements.onCollisionWithElement(koala, ListOfFire[j], function() {
                // Character is touched by ennemy
                return oxo.screens.loadScreen('gameover', gameover);
            });
        }
    }

    function useExtinguisher(){
        if(selectWeap == "ext"){ 
            let fires = document.querySelectorAll('.fire');
            console.log(fires);    
            for(let p = 0; p < fires.length; p++){  
                deleteFire(fires[p],p);
            }
        }
    }

    function deleteFire(ele,index){
        ele.addEventListener('click',function(){
            if(nbExt >= 1){
                removeElement("fire",index);
                nbExt--;
                let selectExt1 = document.querySelector(".click_extinguisher .number_weap");
                selectExt1.innerHTML = nbExt;
                if(nbExt == 0){
                    let selectExt1Img1 = document.querySelector(".click_extinguisher .circle__weap.red");
                    let selectExt1Img2 = document.querySelector(".click_extinguisher .circle__weap.none");
                    selectExt1Img1.classList.add('hide');
                    selectExt1Img2.classList.remove('hide');
                }
            }
        });
    }

    function useAxe(){
        if(selectWeap == "axe"){     
            let listLogs = document.querySelectorAll('.log');
            for(let z = 0; z < listLogs.length; z++){   
                listLogs[z].addEventListener('click',function(){
                    if(nbAxe >= 1){
                        let audioTree = document.querySelector(".treenoise");
                        audioTree.play();
                        removeElement("log",z);
                        nbAxe--;
                        let selectAxe1 = document.querySelector(".click_axe .number_weap");
                        selectAxe1.innerHTML = nbAxe;
                        if(nbAxe == 0){
                            let selectAxe1Img1 = document.querySelector(".click_axe .circle__weap.red");
                            let selectAxe1Img2 = document.querySelector(".click_axe .circle__weap.none");
                            selectAxe1Img1.classList.add('hide');
                            selectAxe1Img2.classList.remove('hide');
                        }
                    }               
                });
            }
        }
    }

    
    function useShovel(local){
        if(selectWeap == "shovel"){     
            let listFlower = document.querySelectorAll('.fleur');
            console.log(listFlower.length);
            for(let y = 0; y < listFlower.length; y++){
                listFlower[y].addEventListener('click',function(){
                    let posX = listFlower[y].offsetLeft;
                    let posY = listFlower[y].offsetTop;
                    addBonus(posX, posY, local);
                    let audioDig = document.querySelector(".dignoise");
                    audioDig.play();
                    removeElement("fleur",y);
                });
            }
        }
    }


  function  addBonus(px, py, local){
        let alea = Math.random();
        let elemnt;
        if(alea <= 0.3){
            elemnt = addElement("axe1", "left", px, "top", py, local);
            nbAxe++;
            let selectAxe2 = document.querySelector(".click_axe .number_weap");
            selectAxe2.innerHTML = nbAxe; 
            setTimeout(function(){
                elemnt.remove();
            },1500); 
        }
        else if(alea >= 0.6) {
            elemnt = addElement("extinguisher1", "left", px, "top", py, local);
            nbExt++;
            console.log(nbExt);
            let selectExt2 = document.querySelector(".click_extinguisher .number_weap");
            selectExt2.innerHTML = nbExt;
            setTimeout(function(){
                elemnt.remove();
            },1500);
        }
        
    }

    function it_is_exit(){  
        oxo.elements.onCollisionWithElement(koalaLevel1, exit, function() {
            // Character is touched by ennemy
            return oxo.screens.loadScreen('level2', level2);
        });
    }

    function it_is_exit2(){  
        oxo.elements.onCollisionWithElement(koalaLevel2, exit2, function() {
            // Character is touched by ennemy
            return oxo.screens.loadScreen('level3', level3);
        });
    }

    function it_is_exit3(){  
        oxo.elements.onCollisionWithElement(koalaLevel3, exit3, function() {
            // Character is touched by ennemy
            return oxo.screens.loadScreen('level4', level4);
        });
    }

    function it_is_exit4(){  
        oxo.elements.onCollisionWithElement(koalaLevel4, exit4, function() {
            // Character is touched by ennemy
            return oxo.screens.loadScreen('end', end);
        });
    }

    function is_move(){

        /*let stop = document.querySelectorAll('.stop');
        let nbErrorStop = 0;
        for(let i = 0; i < stop.length; i++){  
            
        }*/
    }

    function openRules(id) {
        let playRules = document.getElementById(id);
        let click = document.querySelector(".help");
        click.addEventListener("click", function() {
            if (
            (playRules.style.display = "none") &&
            !playRules.classList.contains("is__open")
            ) {
            playRules.classList.toggle("is__open");
            playRules.style.display = "flex";
            return;
            }
            playRules.classList.toggle("is__open");
            playRules.style.display = "none";
        });
    }

function backup(){
    let back = document.querySelectorAll('.bck');
    for(let w = 0; w<back.length; w++){
        back[w].addEventListener("click", function(){
            oxo.screens.loadScreen('home', home);
        });
    }
}
    