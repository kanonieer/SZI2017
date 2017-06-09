$(document).ready(function() {
  var testModel;
  $("#decision-tree").click(function(e){
        e.preventDefault();
        testModel = id3(saper_examples,'isBomb',saper_features);
        //drawGraph(testModel,'canvas');
        //renderSamples(saper_samples,$("#samples"),testModel,'isBomb',saper_features);
        //renderTrainingData(saper_examples,$("#training"),'isBomb',saper_features);
        $("#percentage").append(calcError( saper_samples, testModel, 'isBomb' ))
        //console.log(calcError( saper_samples, testModel, 'isBomb' ));
  });  

  $("#start").click(() => {


  // utworzenie planszy
  var gridSize = 10;
  var grid = [];

  for (var i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (var j = 0; j < gridSize; j++) {
      grid[i][j] = 'Empty';
    }
  }
  var originalAttributes = $("#tmp").attr('style');

  var resetSaper = function() {
   // Reset from original
    $("#tmp").attr('style',originalAttributes);
    $("#tmp").empty();

  };

  resetSaper();
  
  var boardSize = (420 / gridSize) - 4;
  var box = document.querySelector('#row_wrapper');
  //czyści poprzednią plansze
  box.innerHTML = '';

  for (var boardX = 0; boardX < gridSize; boardX++) {
    for (var boardY = 0; boardY < gridSize; boardY++) {
      var boxEle = document.createElement('div');
      boxEle.id = boardX + ":" + boardY;
      boxEle.style.width = boardSize + "px";
      boxEle.style.height = boardSize + "px";
      boxEle.style.border = "2px solid black";
      box.appendChild(boxEle);
    }
  }
  // Start location will be in the following format:
  // [distanceFromTop, distanceFromLeft]
  var findShortestPath = function(startCoordinates, grid) {
    var distanceFromTop = startCoordinates[0];
    var distanceFromLeft = startCoordinates[1];


    // Each "location" will store its coordinates
    // and the shortest path required to arrive there
    var location = {
      distanceFromTop: distanceFromTop,
      distanceFromLeft: distanceFromLeft,
      path: [],
      status: 'Start'
    };

    // Initialize the queue with the start location already inside
    var queue = [location];

    // Loop through the grid searching for the goal
    while (queue.length > 0) {
      // Take the first location off the queue
      var currentLocation = queue.shift();

      // Explore North
      var newLocation = exploreInDirection(currentLocation, 'Up', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === ('Valid'|| 'Empty')) {
        queue.push(newLocation);
      }

      // Explore East
      var newLocation = exploreInDirection(currentLocation, 'Right', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === ('Valid'|| 'Empty')) {
        queue.push(newLocation);
      }

      // Explore South
      var newLocation = exploreInDirection(currentLocation, 'Down', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === ('Valid'|| 'Empty')) {
        queue.push(newLocation);
      }

      // Explore West
      var newLocation = exploreInDirection(currentLocation, 'Left', grid);
      if (newLocation.status === 'Goal') {
        return newLocation.path;
      } else if (newLocation.status === ('Valid'|| 'Empty')) {
        queue.push(newLocation);
      }
    }

    // No valid path found
    return false;

  };
  var count = 0;
  // This function will check a location's status
  // (a location is "valid" if it is on the grid, is not an "obstacle",
  // and has not yet been visited by our algorithm)
  // Returns "Valid", "Invalid", "Blocked", or "Goal"
  var locationStatus = function(location, grid) {
    count += 1;
    var gridSize = grid.length;
    var dft = location.distanceFromTop;
    var dfl = location.distanceFromLeft;

    if (location.distanceFromLeft < 0 ||
        location.distanceFromLeft >= gridSize ||
        location.distanceFromTop < 0 ||
        location.distanceFromTop >= gridSize) {

      // location is not on the grid--return false
      return 'Invalid';
    } else if (grid[dft][dfl] === 'Goal') {
      return 'Goal';
    } else if (grid[dft][dfl] !== 'Empty') {
      // location is either an obstacle or has been visited
      return 'Blocked';
    } else {
      return 'Valid';
    }
  };


  // Explores the grid from the given location in the given
  // direction
  var exploreInDirection = function(currentLocation, direction, grid) {
    var newPath = currentLocation.path.slice();
    newPath.push(direction);

    var dft = currentLocation.distanceFromTop;
    var dfl = currentLocation.distanceFromLeft;

    if (direction === 'Up') {
      dft -= 1;
    } else if (direction === 'Right') {
      dfl += 1;
    } else if (direction === 'Down') {
      dft += 1;
    } else if (direction === 'Left') {
      dfl -= 1;
    }

    var newLocation = {
      distanceFromTop: dft,
      distanceFromLeft: dfl,
      path: newPath,
      status: 'Unknown'
    };
    newLocation.status = locationStatus(newLocation, grid);

    // If this new location is valid, mark it as 'Visited'
    if (newLocation.status === 'Valid') {
      grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = 'Valid';
    }

    return newLocation;
  };

  // utworzenie sapera
  var createSaper = function() {
    var saper = document.createElement('canvas');
    saper.id = "saper";
    saper.style.width = boardSize + "px";
    saper.style.height = boardSize + "px";
    saper.style.border = "2px solid black";
    saper.style.backgroundColor = "orange";
    saper.style.position = "absolute";
    document.getElementById("tmp").appendChild(saper);
  };

  // funkcja generująca randomową liczbę
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



  // generowanie bomb w randomowych miejscach
  var bombAmount = 3;
  var bomb = [];

  var bombArrayForTree = [];
  for( var i = 0; i<bombAmount; i++){
    bombArrayForTree.push({x:-1,y:-1,bombObject:saper_samples[getRandomInt(0,25)]});    
  }
  
  var generateBomb = function() {
  var bombX;
  var bombY;
    for (var bombI = 0; bombI < bombAmount; bombI++) {
      bombX = getRandomInt(1, gridSize - 1);
      bombY = getRandomInt(1, gridSize - 1);
      
      if (grid[bombX][bombY] === "Goal") {
        bombI--;
      } else {
        bomb[bombI] = [bombX, bombY];
        grid[bombX][bombY] = "Goal";
        document.getElementById(bombX + ":" + bombY).style.backgroundColor = "green";
        //Dodanie pozycji bomb w tablicy bomb dla drzewa
        bombArrayForTree[bombI].x = bombX;
        bombArrayForTree[bombI].y = bombY;
        console.log("Goal at X:" + bombX + " Y:" + bombY);
        //console.log(bomb[bombI]);
      }
    }
  };

  // generowanie przeszkód w randomowych miejscach
  var obstacleAmount = 3;
  var generateObstacle = function() {
  var obstacleX;
  var obstacleY;
    for (var obstacleI = 0; obstacleI < obstacleAmount; obstacleI++) {
      obstacleX = getRandomInt(1, gridSize - 1);
      obstacleY = getRandomInt(1, gridSize - 1);

      if (grid[obstacleX][obstacleY] === "Obstacle") {
        obstacleI--;
      } else if (grid[obstacleX][obstacleY] === "Goal") {
        obstacleI--;
      } else {
        grid[obstacleX][obstacleY] = "Obstacle";
        document.getElementById(obstacleX + ":" + obstacleY).style.backgroundColor = "red";
      }
    }
  };

  // mechanika poruszania się saperem
  var moving = function() {
    var tmp = boardSize + 4;
    var turn = "-=" + tmp + "px";

    for (var i = 0; i < bombPath.length; i++) {
      if (bombPath[i] == "Down") {
        $(saper).delay(200).animate({
          bottom: turn
        }, 100);
      } else if (bombPath[i] == "Up") {
        $(saper).delay(200).animate({
          top: turn
        }, 100);
      } else if (bombPath[i] == "Right") {
        $(saper).delay(200).animate({
          right: turn
        }, 100);
      } else if (bombPath[i] == "Left") {
        $(saper).delay(200).animate({
          left: turn
        }, 100);
      }
    }
  };
    // mechanika poruszania się saperem
  var moving3 = function(direction) {
    var tmp = boardSize + 4;
    var turn = "-=" + tmp + "px";
    console.log("Moving "+direction);
    var speed = 50;
      if (direction == "Down") {
        $(saper).delay(speed).animate({
          bottom: turn
        }, 100);
      } else if (direction == "Up") {
        $(saper).delay(speed).animate({
          top: turn
        }, 100);
      } else if (direction == "Right") {
        $(saper).delay(speed).animate({
          right: turn
        }, 100);
      } else if (direction == "Left") {
        $(saper).delay(speed).animate({
          left: turn
        }, 100);
      }
  };

  var moving2=function(){
    var x=actualX;
    var y=actualY;
    for(tmp=0; tmp<bombPath.length; tmp++){
      if(bombPath[tmp]=="Up"){
        x=x-1;
        document.getElementById(x+":"+y).style.backgroundColor="orange";
        console.log(x+":"+y);
      }
      else if(bombPath[tmp]=="Down"){
        x=x+1;
        document.getElementById(x+":"+y).style.backgroundColor="orange";
        console.log(x+":"+y);
      }
      else if(bombPath[tmp]=="Left"){
        y=y-1;
        document.getElementById(x+":"+y).style.backgroundColor="orange";
        console.log(x+":"+y);
      }
      else if(bombPath[tmp]=="Right"){
        y=y+1;
        document.getElementById(x+":"+y).style.backgroundColor="orange";
        console.log(x+":"+y);
      }
    }
  };


  createSaper();
  generateBomb();
  generateObstacle();

  //var startPos = [0, 0];
  var actualX=0;
  var actualY=0;

  for (var index = 0; index < bombAmount; index++) {
    var bombPath = findShortestPath([actualX,actualY], grid);
    //moving2();
    for(i = 0; i<bombPath.length; i++){
      if(bombPath[i]=="Down"){
        actualX=actualX+1;
      }
      else if(bombPath[i]=="Up"){
        actualX=actualX-1;
      }
      else if(bombPath[i]=="Right"){
        actualY=actualY+1;
      }
      else if(bombPath[i]=="Left"){
        actualY=actualY-1;
      }
      moving3(bombPath[i]);
    }
    // console.log(locationStatus(location, grid));
    //startPos = bomb[index];
    console.log(bombPath);
    console.log(bombArrayForTree[index].bombObject);
    console.log('Predykcja:'+ predict( testModel, bombArrayForTree[index].bombObject)); 
    //moving();
    //console.log(grid[bomb[index][0]][bomb[index][1]] );
    grid[actualX][actualY]='Valid';
    //console.log(grid[bomb[index][0]][bomb[index][1]] );
  }
  console.log(count);

  // zastosowanie algorytmu i przypisanie do zmiennej bombPath
  });

});