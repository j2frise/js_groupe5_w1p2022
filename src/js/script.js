
var speedCaracter = 1000;

oxo.screens.loadScreen('home', function() {
    // game.html is loaded, do something

    var start = document.getElementById("start");
    start.addEventListener("click",start_game);

    function start_game(){
        oxo.screens.loadScreen('level1', function() {
            var arena = document.getElementById('arena');
            var koala = addElement("koala","left",42,"top",40,"#arena");
            oxo.animation.moveElementWithArrowKeys(koala, 10); // Move the character slowly
            envLevel1();
            addFire("right",50,"down",80,3000);
            addFire("right",250,"top",190,6000);
            autoMoveElement(koala, 'keydown');
            /*oxo.elements.onCollisionWithElementOnce(koala, fire, function() {
                // Character is touched by ennemy
                alert();
              });*/
        });
    }

  });


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
        var obs = false;
    }
    else{
        var obs = true;
    }

    var element = oxo.elements.createElement({
        type: 'div', // optional
        class: ClassElm, // optional,
        obstacle: false, // optional,
        styles: styleElm, // optional
        appendTo: local // optional
    });
    return element;
  }

  function moveKoala(elm, speed){
    oxo.animation.moveElementWithArrowKeys(elm, speed); // Move the character slowly
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
    var up_bush = addElement("up_bush","right",38,"top",0,"#arena");
    var down_bush = addElement("down_bush","left",36,"down",-8,"#arena");
    var left_bush = addElement("left_bush","left",-6,"top",-1,"#arena");
    var right_bush = addElement("right_bush","right",-6,"top",0,"#arena");

    
    var outside_bush_up = addElement("outside_bush_up","left",139,"top",0,"#arena");
    var outside_bush_down_1 = addElement("outside_bush_down_1","left",210,"down",-1,"#arena");
    var outside_bush_down_2 = addElement("outside_bush_down_2","right",87.46,"down",-1,"#arena");

    var arrow_enter = addElement("arrow","left",50,"top",5,"#arena");
    var arrow_exit = addElement("arrow","right",60,"down",20,"#arena");

    var rock1 = addElement("rock","left",35,"top",175,"#arena");
    var rock2 = addElement("rock","left",230,"top",225,"#arena");
    var rock3 = addElement("rock","left",460,"top",245,"#arena");

    var log1 = addElement("log","left",110,"top",85,"#arena");
    log1.style.transform = "rotate(40deg)";
    var log2 = addElement("log","left",385,"down",110,"#arena");
    log2.style.transform = "rotate(0deg)";

    var tree1 = addElement("tree","right",65,"top",65,"#arena");
    var tree2 = addElement("tree","left",165,"down",125,"#arena");
    var tree3 = addElement("tree","right",155,"down",55,"#arena");

    var blob_down_left = addElement("blob_down_left","left",32,"down",32,"#arena");
    var blob_up_right = addElement("blob_up_right","right",110,"top",80,"#arena");
    var blob_down = addElement("blob_down","left",262,"down",2,"#arena");
    var blob_up = addElement("blob_up","left",220,"top",20,"#arena");


    var dead_tree_down_left = addElement("dead_tree_down_left","left",42,"down",72,"#arena");
    var dead_tree_down_right = addElement("dead_tree_down_right","left",130,"down",50,"#arena");
    var dead_tree_down_middle = addElement("dead_tree_down_middle","left",272,"down",65,"#arena");
    var dead_tree_up_right = addElement("dead_tree_up_right","right",130,"top",50,"#arena");

    var burning_tree_down = addElement("burning_tree_down","left",100,"down",92,"#arena");
    var burning_tree_right = addElement("burning_tree_right","right",155,"top",85,"#arena");
    var burning_tree_up_left = addElement("burning_tree_up_left","left",240,"top",40,"#arena");
    var burning_tree_up_right = addElement("burning_tree_up_right","left",339,"top",25,"#arena");
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
