
var speedCaracter =   1000;
let koala;
let gameOverLevel1;
let exitLevel1;
let moveKoala;
let speed = 100;

oxo.screens.loadScreen('home', home);

  function home(){
    var start = document.getElementById("start");
    start.addEventListener("click",start_game);

    function start_game(){
        oxo.screens.loadScreen('level1', level1);
    }
  }


  function level1() {
    var arena = document.getElementById('arena');
    var exit = document.getElementById('exit');
    koala = addElement("koala","left",42,"top",40,"#arena");
    
    envLevel1();
    addFire("right",50,"down",80,3000);
    addFire("right",250,"top",190,6000);
    var board = document.querySelectorAll('.board');

    gameOverLevel1 = setInterval(fire_is_gameover,1000);
    exitLevel1 = setInterval(it_is_exit,1000);
    moveKoala = setInterval(is_move, 1000);


    function fire_is_gameover(){
        var fire = document.querySelectorAll('.fire');
        for(let j = 0; j < fire.length; j++){    
            oxo.elements.onCollisionWithElement(koala, fire[j], function() {
                // Character is touched by ennemy
                return oxo.screens.loadScreen('gameover', gameover);
            });
        }
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
    
    oxo.animation.moveElementWithArrowKeys(koala, speed);
    
  }


    function level2() {
        clearInterval(gameOverLevel1);
        clearInterval(exitLevel1);

        koala = addElement("koala","left",42,"top",40,"#arena2");
        envLevel2();

        oxo.inputs.listenKey('enter', function() {
            // do something
            oxo.screens.loadScreen('level3', level3);
    
          });
    }

    function level3() {
        oxo.inputs.listenKey('enter', function() {
            // do something
            oxo.screens.loadScreen('level4', level4);
    
          });
    }

    function level4() {
        oxo.inputs.listenKey('enter', function() {
            // do something
            oxo.screens.loadScreen('level5', level5);
    
          });
    }

    function level5() {
        oxo.inputs.listenKey('enter', function() {
            // do something
            oxo.screens.loadScreen('end', end);
    
          });
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

  }

  function addFire(x, valX, y, valY, time){
      var fire;
    setTimeout(function(){
        fire = createFire(x, y, valX, valY);
    },time);
    return fire;
  }

  function createFire(x, y, valX, valY){
       var fire = addElement("fire",x,valX,y,valY,"#arena");
       return fire;
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
