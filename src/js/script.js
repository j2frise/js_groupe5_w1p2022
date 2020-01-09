
var speedCaracter =   1000;
let koala;
let gameOverLevel1;
let exitLevel1;
let actionFire1;
let actionAxe1;
let actionShovel1;
let moveKoala;
let speed = 100;

let nbAxe = 1;
let nbExt = 2;
let nbShovel = 0;

oxo.screens.loadScreen('home', home);

  function home(){
    var start = document.getElementById("start");
    start.addEventListener("click",start_game);

    function start_game(){
        oxo.screens.loadScreen('level1', level1);
    }

    oxo.inputs.listenKey('enter', function() {
        // do something
        oxo.screens.loadScreen('level3', level3);

      });

      oxo.inputs.listenKey('space', function() {
        // do something
        oxo.screens.loadScreen('level4', level4);

      });
  }


  function level1() {
    var arena = document.getElementById('arena');
    var exit = document.getElementById('exit');
    var back = document.querySelectorAll('.bck');
    
    for(let w = 0; w<back.length; w++){
        back[w].addEventListener("click", function(){
            oxo.screens.loadScreen('home', home);
        });
    }

    koala = addElement("koala","left",42,"top",40,"#arena");

    let selectAxe1 = document.querySelector(".click_axe .number_weap");
    let selectShovel1 = document.querySelector(".click_shovel .number_weap");
    let selectExt1 = document.querySelector(".click_extinguisher .number_weap");
    selectAxe1.innerHTML = nbAxe;
    selectExt1.innerHTML = nbExt;
    selectShovel1.innerHTML = nbShovel;
    
    envLevel1();
    openRules("playRules1");
    
    actionAxe1 = setInterval(useAxe,1000);
    eventClickWeap("arena");
    addFire("right",50,"down",80,2000,"#arena");
    addFire("right",250,"top",190,3500,"#arena");
    var board = document.querySelectorAll('.board');

    gameOverLevel1 = setInterval(fire_is_gameover,1000);
    exitLevel1 = setInterval(it_is_exit,1000);
    moveKoala = setInterval(is_move, 1000);
    
    oxo.animation.moveElementWithArrowKeys(koala, speed);
    
  }


    function level2() {
        clearInterval(gameOverLevel1);
        clearInterval(exitLevel1);
        nbShovel = 1;
        var back = document.querySelectorAll('.bck');
        for(let w = 0; w<back.length; w++){
            back[w].addEventListener("click", function(){
                oxo.screens.loadScreen('home', home);
            });
        }

        koala = addElement("koala","left",42,"top",40,"#arena2");
        envLevel2();
        addFire("left",100,"down",200,1000,"#arena2");
        addFire("left",390,"down",300,2000,"#arena2");
        addFire("left",250,"down",50,2500,"#arena2");

        oxo.inputs.listenKey('enter', function() {
            // do something
            oxo.screens.loadScreen('level3', level3);
    
          });
          
        oxo.animation.moveElementWithArrowKeys(koala, speed);
    }

    function level3() {
        nbShovel = 1;
        var back = document.querySelectorAll('.bck');
        for(let w = 0; w<back.length; w++){
            back[w].addEventListener("click", function(){
                oxo.screens.loadScreen('home', home);
            });
        }
        koala = addElement("koala", "left", 42, "top", 40, "#arena3");
        envLevel3();
        
        addFire("left",130,"down",130,500,"#arena3");
        addFire("left",330,"down",170,1000,"#arena3");
        addFire("right",60,"down",240,2000,"#arena3");
        oxo.inputs.listenKey('enter', function() {
            // do something
            oxo.screens.loadScreen('level4', level4);
    
          });
          oxo.animation.moveElementWithArrowKeys(koala, speed);
    }

    function level4() {
        nbShovel = 1;
        var back = document.querySelectorAll('.bck');
        for(let w = 0; w<back.length; w++){
            back[w].addEventListener("click", function(){
                oxo.screens.loadScreen('home', home);
            });
        }
        koala = addElement("koala", "left", 42, "top", 40, "#arena4");
        koala2 = addElement("koala", "left", -35, "down", 350, "#arena4");
        envLevel4();

        addFire("left", 50, "down", 210,1000,"#arena4");
        addFire("left", 200, "down", 380,3000,"#arena4");
        addFire("left", 530, "down", 370,1500,"#arena4");
        addFire("left", 130, "down", 50,1000,"#arena4");
        addFire("left", 445, "down", 130,2500,"#arena4");
        oxo.inputs.listenKey('enter', function() {
            // do something
            oxo.screens.loadScreen('level5', level5);
    
          });
          oxo.animation.moveElementWithArrowKeys(koala, speed);
    }

    function level5() {
        nbShovel = 1;
        var back = document.querySelectorAll('.bck');
        for(let w = 0; w<back.length; w++){
            back[w].addEventListener("click", function(){
                oxo.screens.loadScreen('home', home);
            });
        }
        oxo.inputs.listenKey('enter', function() {
            // do something
            oxo.screens.loadScreen('end', end);
    
          });
          oxo.animation.moveElementWithArrowKeys(koala, speed);
          oxo.animation.moveElementWithArrowKeys(koala1, speed);
          oxo.animation.moveElementWithArrowKeys(koala2, speed);
          oxo.animation.moveElementWithArrowKeys(koala3, speed);
          oxo.animation.moveElementWithArrowKeys(koala4, speed);
    }

    function end() {
        var menu = document.getElementById("menu");
        menu.addEventListener('click', function() {
            // do something
            oxo.screens.loadScreen('home', home);
    
          });
    }


    function gameover() {
        clearInterval(gameOverLevel1);
        clearInterval(exitLevel1);
        var restart = document.getElementById("restart");
        restart.addEventListener('click', function() {
            // do something
            oxo.screens.loadScreen('level1', level1);
    
          });
    }


  //Create element of game 
  function addElement(ClassElm, x, valX, y, valY, local){
    var defValX = valX == 0 ? valX : valX+'px';
    var defValY = valY == 0 ? valY : valY+'px';
    var styleElm = {};
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

    if(ClassElm == "koala"){
        var element = oxo.elements.createElement({
            type: 'div', // optional
            class: ClassElm, // optional,
            obstacle: false, // optional,
            appendTo: local // optional
        });
        oxo.animation.setPosition(element, {x: valX, y: valY});
    }
    else{  
        var element = oxo.elements.createElement({
            type: 'div', // optional
            class: ClassElm, // optional,
            obstacle: false, // optional,
            styles: styleElm, // optional
            appendTo: local // optional
        });
    }

    
    return element;
  }

  function autoMoveElement(){
    //
    //var e = document.dispatchEvent(new Event('keydown',{'key':'ArrowRight'}));
    //var e = document.dispatchEvent(new KeyboardEvent('keydown',{'key':'ArrowRight'}));

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
    var up_bush = addElement("up_bush board","right",38,"top",0,"#arena");

    var down_bush = addElement("down_bush board","left",36,"down",-8,"#arena");
    var left_bush = addElement("left_bush board","left",-6,"top",-1,"#arena");
    var right_bush = addElement("right_bush board","right",-6,"top",0,"#arena");

    
    var outside_bush_up = addElement("outside_bush_up board","left",139,"top",0,"#arena");
    var outside_bush_down_1 = addElement("outside_bush_down_1 board","left",210,"down",-1,"#arena");
    var outside_bush_down_2 = addElement("outside_bush_down_2 board","right",87.46,"down",-1,"#arena");

    var arrow_enter = addElement("arrow","left",50,"top",5,"#arena");
    var arrow_exit = addElement("arrow","right",60,"down",20,"#arena");

    var rock1 = addElement("rock board","left",35,"top",175,"#arena");
    var rock2 = addElement("rock board","left",230,"top",225,"#arena");
    var rock3 = addElement("rock board","left",460,"top",245,"#arena");

    var log1 = addElement("log stop","left",110,"top",85,"#arena");
    log1.style.transform = "rotate(40deg)";
    var log2 = addElement("log stop","left",385,"down",110,"#arena");
    log2.style.transform = "rotate(0deg)";

    var tree1 = addElement("tree board","right",65,"top",65,"#arena");
    var tree2 = addElement("tree board","left",165,"down",125,"#arena");
    var tree3 = addElement("tree board","right",155,"down",55,"#arena");

    var blob_down_left = addElement("blob_down_left board","left",32,"down",32,"#arena");
    var blob_up_right = addElement("blob_up_right board","right",110,"top",80,"#arena");
    var blob_down = addElement("blob_down board","left",262,"down",2,"#arena");
    var blob_up = addElement("blob_up board","left",220,"top",20,"#arena");


    var dead_tree_down_left = addElement("dead_tree_down_left board","left",42,"down",72,"#arena");
    var dead_tree_down_right = addElement("dead_tree_down_right board","left",130,"down",50,"#arena");
    var dead_tree_down_middle = addElement("dead_tree_down_middle board","left",272,"down",65,"#arena");
    var dead_tree_up_right = addElement("dead_tree_up_right board","right",130,"top",50,"#arena");

    var burning_tree_down = addElement("burning_tree_down board","left",100,"down",92,"#arena");
    var burning_tree_right = addElement("burning_tree_right board","right",155,"top",85,"#arena");
    var burning_tree_up_left = addElement("burning_tree_up_left board","left",240,"top",40,"#arena");
    var burning_tree_up_right = addElement("burning_tree_up_right board","left",339,"top",25,"#arena");




    var plant1 = addElement("plant1 fleur", "right", 310, "top", 50, "#arena");
    var plant2 = addElement("plant2 fleur", "left", 430, "down", 70, "#arena");

  }


  function envLevel2(){
    var up_bush = addElement("up_bush board","right",38,"top",0,"#arena2");

    var down_bush = addElement("down_bush board","left",36,"down",-8,"#arena2");
    var left_bush = addElement("left_bush board","left",-6,"top",-1,"#arena2");
    var right_bush = addElement("right_bush board","right",-6,"top",0,"#arena2");
    var arrow_enter = addElement("arrow","left",50,"top",5,"#arena2");
    var arrow_exit = addElement("arrow","right",60,"down",20,"#arena2");
    var outside_bush_left = addElement("outside_bush_left board","left",5,"top",110,"#arena2");
    var outside_bush_up_right = addElement("outside_bush_up_right board","right",139,"top",0,"#arena2");
    var outside_bush_down_right_1 = addElement("outside_bush_down_right_1 board","right",385,"down",-1,"#arena2");
    var outside_bush_down_right2 = addElement("outside_bush_down_right2 board","right",170,"down",5,"#arena2");
    var rock1 = addElement("rock board","left",170,"down",145,"#arena2");
    var rock2 = addElement("rock board","right",170,"down",145,"#arena2");
    var rock3 = addElement("rock board","right",97,"top",119,"#arena2");
    var log1 = addElement("log stop","right",90,"down",65,"#arena2");
    log1.style.transform = "rotate(90deg)";
    var log2 = addElement("log stop","left",270,"top",30,"#arena2");
    log2.style.transform = "rotate(90deg)";
    var log3 = addElement("log stop","left",345,"down",150,"#arena2");
    var blob_down_left = addElement("blob_down_left-2 board","left",52,"down",15,"#arena2");
    var blob_down_right = addElement("blob_down_righ-2t board","right",250,"down",47,"#arena2");
    var blob_middle_left = addElement("blob_middle_lef2t board","left",232,"top",152,"#arena2");
    
    var burning_tree_left = addElement("burning_tree_left board","left",248,"top",115,"#arena2");
    var burning_tree_right = addElement("burning_tree_right board","right",300,"down",95,"#arena2");

    
    var dead_tree_down_left1 = addElement("dead_tree_down_left1 board","left",70,"down",86,"#arena2");
    var dead_tree_down_right22 = addElement("dead_tree_down_right22 board","right",300,"down",85,"#arena2");
    var dead_tree_right11 = addElement("dead_tree_right11 board","right",325,"down",80,"#arena2");

    var caterpillar = addElement("caterpillar", "right", 300, "down", 35, "#arena2");

  }

  
function envLevel3() {
    var up_bush = addElement("up_bush board", "right", 38, "top", 0, "#arena3");
    var down_bush = addElement("down_bush board", "left", 36, "down", -8, "#arena3");
    var left_bush = addElement("left_bush board", "left", -6, "top", -1, "#arena3");
    var right_bush = addElement("right_bush board", "right", -6, "top", 0, "#arena3");


    var outside_bush_right3 = addElement("outside_bush_right3 board", "right", 30, "top", 90, "#arena3");
    var outside_bush_up = addElement("outside_bush_up board", "left", 139, "top", 0, "#arena3");
    var outside_bush_down_1 = addElement("outside_bush_down_1 board", "left", 210, "down", -1, "#arena3");
    var outside_bush_down_2 = addElement("outside_bush_down_2 board", "right", 87.46, "down", -1, "#arena3");


    var rock1 = addElement("rock board", "left", 115, "down", 325, "#arena3");
    var rock2 = addElement("rock board", "left", 30, "down", 255, "#arena3");
    var rock3 = addElement("rock board", "right", 120, "down", 285, "#arena3");


    var plant1 = addElement("fleur board", "left", 80, "down", 310, "#arena3");
    var plant2 = addElement("fleur board", "left", 350, "down", 80, "#arena3");


    var tree1 = addElement("tree board", "right", 265, "down", 95, "#arena3");



    var log1 = addElement("log stop", "right", 490, "down", 115, "#arena3");
    log1.style.transform = "rotate(-180deg)";
    var log2 = addElement("log stop", "right", 490, "down", 325, "#arena3");
    log2.style.transform = "rotate(90deg)";
    var log3 = addElement("log stop", "right", 210, "down", 55, "#arena3");
    log3.style.transform = "rotate(90deg)";
    var log4 = addElement("log stop", "right", 80, "down", 125, "#arena3");
    log4.style.transform = "rotate(90deg)";



    var blob_down_left = addElement("blob_down_left board", "left", 32, "down", 32, "#arena3");
    var blob_up_right = addElement("blob_up_right board", "right", 50, "top", 145, "#arena3");
    blob_up_right.style.transform = "rotate(90deg)";

    var blob_down = addElement("blob_down board", "left", 272, "down", 130, "#arena3");
    blob_down.style.transform = "rotate(180deg)";
    var blob_up = addElement("blob_up board", "left", 300, "top", 20, "#arena3");
    blob_up.style.transform = "rotateY(-180deg)";


    var burning_tree_down = addElement("burning_tree_down board", "left", 90, "down", 92, "#arena3");
    var burning_tree_right = addElement("burning_tree_right board", "right", 95, "top", 115, "#arena3");
    var burning_tree_up_left = addElement("burning_tree_up_left board", "left", 302, "down", 170, "#arena3");
    burning_tree_up_left.style.transform = "rotateY(180deg)";
    var burning_tree_up_right = addElement("burning_tree_up_right board", "left", 339, "top", 25, "#arena3");

    var dead_tree_down_left = addElement("dead_tree_down_left board", "left", 42, "down", 72, "#arena3");
    var dead_tree_down_right = addElement("dead_tree_down_right board", "left", 130, "down", 50, "#arena3");
    var dead_tree_down_middle = addElement("dead_tree_down_middle board", "left", 422, "top", 35, "#arena3");
    var dead_tree_up_right = addElement("dead_tree_up_right board", "right", 350, "top", 20, "#arena3");


    var caterpillar = addElement("caterpillar", "right", 30, "top", 135, "#arena3");


    var arrow_enter = addElement("arrow", "left", 50, "top", 5, "#arena3");
    var arrow_exit = addElement("arrow", "right", 60, "down", 20, "#arena3");

    var caterpillar = addElement("caterpillar", "right", 30, "top", 135, "#arena3");

}

function envLevel4() {
    var up_bush = addElement("up_bush board", "right", 38, "top", 0, "#arena4");
    var bush_down4 = addElement("bush_down4 board", "left", -5, "down", -5, "#arena4");
    var bush_left4 = addElement("bush_left4 board", "left", -6, "top", -8, "#arena4");
    var right_bush = addElement("right_bush board", "right", -6, "top", 0, "#arena4");


    var arrow_enter = addElement("arrow", "left", 50, "top", 5, "#arena4");
    var arrow_exit = addElement("arrow", "right", 60, "down", 20, "#arena4");


    var outside_bush_left = addElement("outside_bush_left board", "left", 5, "top", 90, "#arena4");
    outside_bush_left.style.transform = "rotateX(180deg)";
    var outside_bush_left2 = addElement("outside_bush_left board", "left", 5, "top", 290, "#arena4");
    outside_bush_left2.style.transform = "rotateX(180deg)";
    var outside_bush_up_right = addElement("outside_bush_up_right board", "left", 259, "top", 0, "#arena4");
    var outside_bush_down_right_1 = addElement("outside_bush_down_right_1 board", "right", 155, "down", -1, "#arena4");
    var outside_bush_down_right2 = addElement("outside_bush_down_right2 board", "left", 190, "down", 5, "#arena4");
    var outside_bush_right = addElement("outside_bush_right board", "right", 5, "top",115, "#arena4");


    var rock1 = addElement("rock board", "left", 190, "top", 95, "#arena4");
    var rock2 = addElement("rock board", "left", 330, "top", 55, "#arena4");
    var rock3 = addElement("rock board", "right", 107, "top", 189, "#arena4");
    var rock4 = addElement("rock board", "right", 257, "top", 169, "#arena4");


    var log1 = addElement("log stop", "right", 180, "down", 265, "#arena4");
    log1.style.transform = "rotate(90deg)";
    var log2 = addElement("log stop", "left", 120, "top", 50, "#arena4");
    log2.style.transform = "rotate(-180deg)";
    var log3 = addElement("log stop", "left", 270, "top", 90, "#arena4");
    var log4 = addElement("log stop", "left", 140, "down", 90, "#arena4");
    log4.style.transform = "rotate(-90deg)";
    var log5 = addElement("log stop", "right", 90, "down", 50, "#arena4");
    log5.style.transform = "rotate(-90deg)";


    var blob_down_left = addElement("blob_down_left-2 board", "right", 52, "top", 25, "#arena4");
    var blob_down_right = addElement("blob_down_righ-2t board", "right", 350, "down", 47, "#arena4");
 

    var burning_tree_left = addElement("burning_tree_left board", "left", 348, "down", 95, "#arena4");
    var burning_tree_right = addElement("burning_tree_right board", "right", 90, "down", 345, "#arena4");


    var dead_tree_down_left1 = addElement("dead_tree_down_left1 board", "left", 290, "down", 126, "#arena4");
    var dead_tree_down_right22 = addElement("dead_tree_down_right22 board", "right", 260, "down", 135, "#arena4");
    var dead_tree_right11 = addElement("dead_tree_right11 board", "right", 270, "top", 80, "#arena4");


    var caterpillar = addElement("caterpillar", "right", 375, "top", 35, "#arena4");

    var plant1 = addElement("plant1 fleur", "right", 310, "top", 50, "#arena4");
    var plant2 = addElement("plant2 fleur", "left", 430, "down", 70, "#arena4");


    var tree1 = addElement("tree board", "left", 165, "down", 195, "#arena4");

    var caterpillar = addElement("caterpillar", "right", 375, "top", 35, "#arena4");
}

function envLevel5() {
    var up_bush = addElement("up_bush board", "right", 38, "top", 0, "#arena5");

    var down_bush = addElement("down_bush board", "left", 36, "down", -8, "#arena5");
    var left_bush = addElement("left_bush board", "left", -6, "top", -1, "#arena5");
    var right_bush = addElement("right_bush board", "right", -6, "top", 0, "#arena5");
    var arrow_enter = addElement("arrow", "left", 50, "top", 5, "#arena5");
    var arrow_exit = addElement("arrow", "right", 60, "down", 20, "#arena5");
    var outside_bush_left = addElement("outside_bush_left board", "left", 5, "top", 110, "#arena5");
    var outside_bush_up_right = addElement("outside_bush_up_right board", "right", 139, "top", 0, "#arena5");
    var outside_bush_down_right_1 = addElement("outside_bush_down_right_1 board", "right", 385, "down", -1, "#arena5");
    var outside_bush_down_right2 = addElement("outside_bush_down_right2 board", "right", 170, "down", 5, "#arena5");
    var rock1 = addElement("rock board", "left", 170, "down", 145, "#arena5");
    var rock2 = addElement("rock board", "right", 170, "down", 145, "#arena5");
    var rock3 = addElement("rock board", "right", 97, "top", 119, "#arena5");
    var log1 = addElement("log stop", "right", 90, "down", 65, "#arena5");
    log1.style.transform = "rotate(90deg)";
    var log2 = addElement("log stop", "left", 270, "top", 30, "#arena5");
    log2.style.transform = "rotate(90deg)";
    var log3 = addElement("log stop", "left", 345, "down", 150, "#arena5");
    var blob_down_left = addElement("blob_down_left-2 board", "left", 52, "down", 15, "#arena5");
    var blob_down_right = addElement("blob_down_righ-2t board", "right", 250, "down", 47, "#arena5");
    var blob_middle_left = addElement("blob_middle_lef2t board", "left", 232, "top", 152, "#arena5");

    var burning_tree_left = addElement("burning_tree_left board", "left", 248, "top", 115, "#arena5");
    var burning_tree_right = addElement("burning_tree_right board", "right", 300, "down", 95, "#arena5");


    var dead_tree_down_left1 = addElement("dead_tree_down_left1 board", "left", 70, "down", 86, "#arena5");
    var dead_tree_down_right22 = addElement("dead_tree_down_right22 board", "right", 300, "down", 85, "#arena5");
    var dead_tree_right11 = addElement("dead_tree_right11 board", "right", 325, "down", 80, "#arena5");

}

  function addFire(x, valX, y, valY, time,local){
    setTimeout(function(){
        var fireCreate = createFire(x, y, valX, valY,local);
    },time);
  }

  function createFire(x, y, valX, valY,local){
       var fire = addElement("fire",x,valX,y,valY,local);
  }

  function collision(first, second) {
        var sw = first.offsetHeight;
        var sh = first.offsetWidth;
        var sy = first.offsetTop;
        var sx = first.offsetLeft;

        var ax = second.offsetLeft;
        var ay = second.offsetTop;
        var vx = ( ax >= sx && ax <= (sx + sw) );
        var vy = ( ay >= sy && ay <= (sy + sh) );
        if ( vx && vy ) {
        console.log("ay >= sy : "+ay+" >= "+sy);
        console.log("collision");
        }
    }

    function eventClickWeap(place,action1,action2,action3,local) {
        var cursor_axe = document.querySelector(".click_axe");
        var cursor_shovel = document.querySelector(".click_shovel");
        var cursor_extinguisher = document.querySelector(".click_extinguisher");

        cursor_axe.addEventListener("click",function(){
            changeCursor("cursor_axe", place);
            clearInterval(action2);
            action1 = setInterval(useAxe,1000);
            clearInterval(action3);
        });

        cursor_shovel.addEventListener("click",function(){
            changeCursor("cursor_shovel", place);
            action2 = setInterval(useShovel,1000);
            clearInterval(action1);
            clearInterval(action3);
        });

        cursor_extinguisher.addEventListener("click",function(){
            changeCursor("cursor_extinguisher", place);
            action3 = setInterval(useExtinguisher,100);
            clearInterval(action2);
            clearInterval(action1);
        });

        document.addEventListener('keydown', (event) => {
            const nameKey = event.key;
            console.log(nameKey);
            if (nameKey === '2' || nameKey === 'numpad 2' || nameKey === 'é') {
                changeCursor("cursor_axe", place);
                clearInterval(action2);
                action1 = setInterval(useAxe,1000);
                clearInterval(action3);
            }
            else if(nameKey === '3' || nameKey === 'numpad 3' || nameKey === '\"'){
                changeCursor("cursor_shovel", place);
                action2 = setInterval(function(){useShovel(local);},1000);
                clearInterval(action1);
                clearInterval(action3);
            }
            else if(nameKey === '1' || nameKey === 'numpad 1' || nameKey === '&'){
                changeCursor("cursor_extinguisher", place);
                action3 = setInterval(useExtinguisher,100);
                clearInterval(action2);
                clearInterval(action1);
            }
        }, false);
    }

    function changeCursor(cursor, place) {
        var selectPlace = document.getElementById(place);
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

    function fire_is_gameover(){
        var fire = document.querySelectorAll('.fire');
        for(let j = 0; j < fire.length; j++){    
            oxo.elements.onCollisionWithElement(koala, fire[j], function() {
                // Character is touched by ennemy
                return oxo.screens.loadScreen('gameover', gameover);
            });
        }
    }

    function useExtinguisher(){
        let fires = document.querySelectorAll('.fire');
        for(let p = 0; p < fires.length; p++){   
            fires[p].addEventListener('click',function(){
                if(nbExt >= 1){
                    removeElement("fire",p);
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
    }

    function useAxe(){
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

    
    function useShovel(local){
        let listFlower = document.querySelectorAll('.fleur');
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


    addBonus(px, py, local){
        let alea = Math.random();
        let elemnt;
        if(alea >= 0.5){
            elemnt = addElement("axe1", "left", px, "top", py, local);
            
        }
        else {
            elemnt = addElement("extinguisher1", "left", px, "top", py, local);
        }

        setTimeout(function(){
            elemnt.remove();
        },1500);
    }

    function it_is_exit(){  
        oxo.elements.onCollisionWithElement(koala, exit, function() {
            // Character is touched by ennemy
            return oxo.screens.loadScreen('level2', level2);
        });
    }

    function is_move(){

        var stop = document.querySelectorAll('.stop');
        var nbErrorStop = 0;
        for(let i = 0; i < stop.length; i++){  
            
        }
    }

    function openRules(id) {
        var playRules = document.getElementById(id);
        var click = document.querySelector(".help");
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