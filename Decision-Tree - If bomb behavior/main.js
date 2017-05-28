var DecisionTree = require('decision-tree');

 var training_data = [
{'material':'Metal','weight':3,'shape':'Round','color':'Brown','quality':'New','behavior':'Disarm'},
{'material':'Metal','weight':3,'shape':'Square','color':'Black','quality':'Old','behavior':'Detonate'},
{'material':'Metal','weight':4,'shape':'Round','color':'Black','quality':'New','behavior':'Disarm'},
{'material':'Metal','weight':4,'shape':'Round','color':'Brown','quality':'Old','behavior':'Secure'},
{'material':'Metal','weight':4,'shape':'Square','color':'Grey','quality':'Normal','behavior':'Disarm'},
{'material':'Metal','weight':4,'shape':'Square','color':'Black','quality':'Normal','behavior':'Detonate'},
{'material':'Metal','weight':5,'shape':'Elipse','color':'Green','quality':'Normal','behavior':'Disarm'},
{'material':'Metal','weight':5,'shape':'Square','color':'Grey','quality':'Old','behavior':'Secure'},
{'material':'Metal','weight':5,'shape':'Round','color':'Grey','quality':'Old','behavior':'Secure'},
{'material':'Metal','weight':5,'shape':'Round','color':'Black','quality':'Normal','behavior':'Disarm'},
{'material':'Metal','weight':6,'shape':'Non-regular','color':'Colorful','quality':'New','behavior':'Secure'},
{'material':'Metal','weight':6,'shape':'Round','color':'Grey','quality':'Old','behavior':'Secure'},
{'material':'Metal','weight':5,'shape':'Round','color':'Grey','quality':'Old','behavior':'Secure'},
{'material':'Metal', 'weight': 1, 'shape':'Non-regular', 'color': 'Colorful', 'quality': 'Old', 'behavior': 'Detonate' },
{'material':'Metal', 'weight': 4,'shape':'Elipse','color':'Gold','quality':'Normal','behavior':'Secure'},
{'material':'Metal', 'weight': 4,'shape':'Square','color':'Gold','quality':'New','behavior':'Disarm'},
{'material':'Metal', 'weight': 3,'shape':'Round','color':'Brown','quality':'Old','behavior':'Secure'},
{'material':'Metal', 'weight': 6,'shape':'Round','color':'Grey','quality':'Normal','behavior':'Secure'},
{'material':'Metal', 'weight': 5,'shape':'Elipse','color':'Grey','quality':'Old','behavior':'Secure'},
{'material':'Metal', 'weight': 2,'shape':'Square','color':'Brown','quality':'New','behavior':'Detonate'},
{'material':'Metal', 'weight': 2,'shape':'Elipse','color':'Brown','quality':'Old','behavior':'Detonate'},
{'material':'Metal', 'weight': 3,'shape':'Non-regular','color':'Black','quality':'Normal','behavior':'Disarm'},
{'material':'Metal', 'weight': 4,'shape':'Round','color':'Colorful','quality':'New','behavior':'Disarm'},
{'material':'Metal', 'weight': 5,'shape':'Square','color':'Gold','quality':'New','behavior':'Secure'},
{'material':'Metal', 'weight': 6,'shape':'Round','color':'Brown','quality':'Normal','behavior':'Secure'},
{'material':'Metal', 'weight': 2,'shape':'Elipse','color':'Grey','quality':'New','behavior':'Detonate'},
{'material':'Metal', 'weight': 3,'shape':'Non-regular','color':'Black','quality':'Normal','behavior':'Disarm'},
{'material':'Metal', 'weight': 2,'shape':'Round','color':'Green','quality':'Normal','behavior':'Detonate'},
{'material':'Metal', 'weight': 3,'shape':'Elipse','color':'Green','quality':'New','behavior':'Disarm'},
{'material':'Metal', 'weight': 4,'shape':'Square','color':'Black','quality':'Normal','behavior':'Secure'},
{'material':'Metal', 'weight': 5,'shape':'Round','color':'Brown','quality':'New','behavior':'Disarm'},
{'material':'Metal', 'weight': 3,'shape':'Non-regular','color':'Black','quality':'Old','behavior':'Detonate'},
{'material':'Metal', 'weight': 4,'shape':'Elipse','color':'Brown','quality':'Old','behavior':'Secure'},
{'material':'Metal', 'weight': 1,'shape':'Non-regular','color':'Colorful','quality':'Normal','behavior':'Disarm'},

{'material':'Aluminum','weight':2,'shape':'Elipse','color':'Grey','quality':'Normal','behavior':'Detonate'},
{'material':'Aluminum','weight':2,'shape':'Elipse','color':'Grey','quality':'New','behavior':'Disarm'},
{'material':'Aluminum','weight':2,'shape':'Round','color':'Colorful','quality':'Old','behavior':'Detonate'},
{'material':'Aluminum','weight':2,'shape':'Round','color':'Green','quality':'New','behavior':'Disarm'},
{'material':'Aluminum','weight':3,'shape':'Round','color':'Green','quality':'Old','behavior':'Detonate'},
{'material':'Aluminum','weight':3,'shape':'Round','color':'Grey','quality':'New','behavior':'Disarm'},
{'material':'Aluminum','weight':4,'shape':'Round','color':'Brown','quality':'New','behavior':'Disarm'},
{'material':'Aluminum','weight':3,'shape':'Round','color':'Black','quality':'Old','behavior':'Secure'},
{'material':'Aluminum','weight':4,'shape':'Round','color':'Grey','quality':'Normal','behavior':'Disarm'},
{'material':'Aluminum','weight':4,'shape':'Round','color':'Brown','quality':'Old','behavior':'Secure'},
{'material':'Aluminum','weight':5,'shape':'Round','color':'Grey','quality':'Normal','behavior':'Detonate'},
{'material':'Aluminum','weight':5,'shape':'Round','color':'Black','quality':'Old','behavior':'Secure'},
{'material':'Aluminum','weight':5,'shape':'Non-regular','color':'Brown','quality':'Old','behavior':'Secure'},
{'material':'Aluminum','weight':6,'shape':'Round','color':'Grey','quality':'Normal','behavior':'Disarm'},
{'material':'Aluminum','weight':6,'shape':'Round','color':'Brown','quality':'Old','behavior':'Secure'},
{'material':'Aluminum','weight':6,'shape':'Elipse','color':'Grey','quality':'Normal','behavior':'Secure'},
{'material':'Aluminum', 'weight':1 ,'shape':'Elipse','color':'Colorful','quality':'New','behavior':'Disarm'},
{'material':'Aluminum', 'weight':2 ,'shape':'Non-regular','color':'Green','quality':'Normal','behavior':'Disarm'},
{'material':'Aluminum', 'weight':2 ,'shape':'Elipse','color':'Black','quality':'Old','behavior':'Detonate'},
{'material':'Aluminum', 'weight':3 ,'shape':'Square','color':'Gold','quality':'New','behavior':'Disarm'},
{'material':'Aluminum', 'weight':3 ,'shape':'Round','color':'Brown','quality':'New','behavior':'Disarm'},
{'material':'Aluminum', 'weight':4 ,'shape':'Round','color':'Black','quality':'Old','behavior':'Secure'},
{'material':'Aluminum', 'weight':4 ,'shape':'Elipse','color':'Brown','quality':'Normal','behavior':'Disarm'},
{'material':'Aluminum', 'weight':5 ,'shape':'Square','color':'Green','quality':'Normal','behavior':'Secure'},
{'material':'Aluminum', 'weight':5 ,'shape':'Elipse','color':'Gold','quality':'Old','behavior':'Secure'},
{'material':'Aluminum', 'weight':5 ,'shape':'Round','color':'Colorful','quality':'Old','behavior':'Secure'},
{'material':'Aluminum', 'weight':6 ,'shape':'Square','color':'Brown','quality':'Normal','behavior':'Secure'},
{'material':'Aluminum', 'weight':6 ,'shape':'Round','color':'Black','quality':'New','behavior':'Disarm'},
{'material':'Aluminum', 'weight':6 ,'shape':'Non-regular','color':'Black','quality':'New','behavior':'Secure'},
{'material':'Aluminum', 'weight':4 ,'shape':'Non-regular','color':'Grey','quality':'Normal','behavior':'Disarm'},
{'material':'Aluminum', 'weight':3 ,'shape':'Elipse','color':'Grey','quality':'Normal','behavior':'Disarm'},
{'material':'Aluminum', 'weight':1 ,'shape':'Round','color':'Brown','quality':'New','behavior':'Disarm'},
{'material':'Aluminum', 'weight':1 ,'shape':'Elipse','color':'Black','quality':'Old','behavior':'Detonate'},
{'material':'Aluminum', 'weight':1 ,'shape':'Square','color':'Gold','quality':'Normal','behavior':'Detonate'},
{'material':'Aluminum', 'weight':4 ,'shape':'Round','color':'Green','quality':'Normal','behavior':'Disarm'},
{'material':'Aluminum', 'weight':3 ,'shape':'Elipse','color':'Grey','quality':'Old','behavior':'Detonate'},

{'material':'Plastic','weight':1,'shape':'Non-regular','color':'Black','quality':'New','behavior':'Detonate'},
{'material':'Plastic','weight':1,'shape':'Square','color':'Brown','quality':'New','behavior':'Disarm'},
{'material':'Plastic','weight':2,'shape':'Non-regular','color':'Brown','quality':'New','behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Round','color':'Gold','quality':'Old','behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Round','color':'Brown','quality':'Old','behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Round','color':'Grey','quality':'New','behavior':'Disarm'},
{'material':'Plastic','weight':3,'shape':'Square','color':'Grey','quality':'Normal','behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Round','color':'Black','quality':'Old','behavior':'Detonate'},
{'material':'Plastic','weight':3,'shape':'Square','color':'Grey','quality':'New','behavior':'Disarm'},
{'material':'Plastic','weight':4,'shape':'Round','color':'Grey','quality':'Old','behavior':'Secure'},
{'material':'Plastic','weight':4,'shape':'Round','color':'Grey','quality':'New','behavior':'Disarm'},
{'material':'Plastic', 'weight':1 ,'shape':'Round','color':'Colorful','quality':'New','behavior':'Detonate'},
{'material':'Plastic', 'weight':1 ,'shape':'Elipse','color':'Black','quality':'Old','behavior':'Detonate'},
{'material':'Plastic', 'weight':2 ,'shape':'Non-regular','color':'Green','quality':'Normal','behavior':'Disarm'},
{'material':'Plastic', 'weight':2 ,'shape':'Elipse','color':'Black','quality':'Old','behavior':'Detonate'},
{'material':'Plastic', 'weight':2 ,'shape':'Round','color':'Brown','quality':'Normal','behavior':'Disarm'},
{'material':'Plastic', 'weight':2 ,'shape':'Square','color':'Gold','quality':'Normal','behavior':'Disarm'},
{'material':'Plastic', 'weight':3 ,'shape':'Round','color':'Brown','quality':'New','behavior':'Disarm'},
{'material':'Plastic', 'weight':3 ,'shape':'Square','color':'Colorful','quality':'Old','behavior':'Detonate'},
{'material':'Plastic', 'weight':3 ,'shape':'Elipse','color':'Black','quality':'Normal','behavior':'Secure'},
{'material':'Plastic', 'weight':3 ,'shape':'Round','color':'Green','quality':'Normal','behavior':'Disarm'},
{'material':'Plastic', 'weight':4 ,'shape':'Elipse','color':'Grey','quality':'Old','behavior':'Secure'},
{'material':'Plastic', 'weight':4 ,'shape':'Square','color':'Brown','quality':'New','behavior':'Disarm'},
{'material':'Plastic', 'weight':4 ,'shape':'Elipse','color':'Black','quality':'Normal','behavior':'Disarm'},
{'material':'Plastic', 'weight':4 ,'shape':'Non-regular','color':'Black','quality':'Normal','behavior':'Secure'},
{'material':'Plastic', 'weight':4 ,'shape':'Square','color':'Green','quality':'New','behavior':'Disarm'},
{'material':'Plastic', 'weight':4 ,'shape':'Round','color':'Brown','quality':'Old','behavior':'Detonate'},
{'material':'Plastic', 'weight':5 ,'shape':'Elipse','color':'Gold','quality':'Normal','behavior':'Secure'},
{'material':'Plastic', 'weight':5 ,'shape':'Round','color':'Green','quality':'Old','behavior':'Secure'},
{'material':'Plastic', 'weight':5 ,'shape':'Non-regular','color':'Grey','quality':'Normal','behavior':'Disarm'},
{'material':'Plastic', 'weight':5 ,'shape':'Elipse','color':'Colorful','quality':'New','behavior':'Disarm'},
{'material':'Plastic', 'weight':5 ,'shape':'Round','color':'Gold','quality':'Normal','behavior':'Disarm'},
{'material':'Plastic', 'weight':5 ,'shape':'Square','color':'Brown','quality':'New','behavior':'Detonate'},
{'material':'Plastic', 'weight':5 ,'shape':'Round','color':'Black','quality':'Normal','behavior':'Secure'},
{'material':'Plastic', 'weight':6 ,'shape':'Round','color':'Brown','quality':'Old','behavior':'Secure'},
{'material':'Plastic', 'weight':6 ,'shape':'Non-regular','color':'Colorful','quality':'New','behavior':'Secure'},
{'material':'Plastic', 'weight':6 ,'shape':'Elipse','color':'Black','quality':'Normal','behavior':'Secure'},
{'material':'Plastic', 'weight':2 ,'shape':'Non-regular','color':'Colorful','quality':'Normal','behavior':'Disarm'},
{'material':'Plastic', 'weight':2 ,'shape':'Elipse','color':'Grey','quality':'Old','behavior':'Detonate'},
{'material':'Plastic', 'weight':3 ,'shape':'Square','color':'Browm','quality':'Normal','behavior':'Disarm'},
{'material':'Plastic', 'weight':5 ,'shape':'Round','color':'Grey','quality':'Old','behavior':'Secure'},
{'material':'Plastic', 'weight':6 ,'shape':'Elipse','color':'Blakc','quality':'Normal','behavior':'Secure'},

{'material':'Wood','weight':1,'shape':'Non-regular','color':'Green','quality':'Normal','behavior':'Disarm'},
{'material':'Wood','weight':2,'shape':'Round','color':'Green','quality':'Normal','behavior':'Detonate'},
{'material':'Wood','weight':4,'shape':'Round','color':'Brown','quality':'Old','behavior':'Detonate'},
{'material':'Wood', 'weight':1 ,'shape':'Round','color':'Brown','quality':'Old','behavior':'Detonate'},
{'material':'Wood', 'weight':1 ,'shape':'Elipse','color':'Grey','quality':'Normal','behavior':'Detonate'},
{'material':'Wood', 'weight':1 ,'shape':'Round','color':'Colorful','quality':'New','behavior':'Detonate'},
{'material':'Wood', 'weight':2 ,'shape':'Elipse','color':'Gold','quality':'Old','behavior':'Detonate'},
{'material':'Wood', 'weight':2 ,'shape':'Non-regular','color':'Grey','quality':'Normal','behavior':'Disarm'},
{'material':'Wood', 'weight':2 ,'shape':'Square','color':'Black','quality':'Normal','behavior':'Disarm'},
{'material':'Wood', 'weight':2 ,'shape':'Elipse','color':'Green','quality':'Old','behavior':'Detonate'},
{'material':'Wood', 'weight':2 ,'shape':'Non-regular','color':'Brown','quality':'Normal','behavior':'Disarm'},
{'material':'Wood', 'weight':3 ,'shape':'Square','color':'Grey','quality':'New','behavior':'Disarm'},
{'material':'Wood', 'weight':3 ,'shape':'Round','color':'Gold','quality':'Old','behavior':'Detonate'},
{'material':'Wood', 'weight':3 ,'shape':'Square','color':'Colorful','quality':'Normal','behavior':'Detonate'},
{'material':'Wood', 'weight':3 ,'shape':'Elipse','color':'Grey','quality':'New','behavior':'Disarm'},
{'material':'Wood', 'weight':3 ,'shape':'Round','color':'Black','quality':'Normal','behavior':'Disarm'},
{'material':'Wood', 'weight':3 ,'shape':'Elipse','color':'Green','quality':'Normal','behavior':'Disarm'},
{'material':'Wood', 'weight':4 ,'shape':'Square','color':'Brown','quality':'New','behavior':'Secure'},
{'material':'Wood', 'weight':4 ,'shape':'Elipse','color':'Grey','quality':'Old','behavior':'Detonate'},
{'material':'Wood', 'weight':4 ,'shape':'Non-regular','color':'Black','quality':'Normal','behavior':'Disarm'},
{'material':'Wood', 'weight':4 ,'shape':'Square','color':'Colorful','quality':'Old','behavior':'Detonate'},
{'material':'Wood', 'weight':4 ,'shape':'Round','color':'Gold','quality':'New','behavior':'Disarm'},
{'material':'Wood', 'weight':4 ,'shape':'Elipse','color':'Grey','quality':'Normal','behavior':'Disarm'},
{'material':'Wood', 'weight':5 ,'shape':'Round','color':'Green','quality':'Old','behavior':'Secure'},
{'material':'Wood', 'weight':5 ,'shape':'Square','color':'Black','quality':'Normal','behavior':'Disarm'},
{'material':'Wood', 'weight':5 ,'shape':'Elipse','color':'Green','quality':'New','behavior':'Disarm'},
{'material':'Wood', 'weight':5 ,'shape':'Round','color':'Brown','quality':'Normal','behavior':'Secure'},
{'material':'Wood', 'weight':6 ,'shape':'Elipse','color':'Green','quality':'New','behavior':'Disarm'},
{'material':'Wood', 'weight':6 ,'shape':'Elipse','color':'Geen','quality':'Old','behavior':'Secure'},
{'material':'Wood', 'weight':6 ,'shape':'Non-regular','color':'Grey','quality':'Normal','behavior':'Secure'},
{'material':'Wood', 'weight':6 ,'shape':'Elipse','color':'Black','quality':'Old','behavior':'Secure'},
{'material':'Wood', 'weight':6 ,'shape':'Round','color':'Grey','quality':'Normal','behavior':'Secure'},

{'material':'Stone', 'weight':1 ,'shape':'Elipse','color':'Black','quality':'Old','behavior':'Detonate'},
{'material':'Stone', 'weight':1 ,'shape':'Round','color':'Grey','quality':'Old','behavior':'Detonate'},
{'material':'Stone', 'weight':1 ,'shape':'Non-regular','color':'Brown','quality':'Normal','behavior':'Disarm'},
{'material':'Stone', 'weight':2 ,'shape':'Round','color':'Gold','quality':'New','behavior':'Disarm'},
{'material':'Stone', 'weight':2 ,'shape':'Elipse','color':'Colorful','quality':'Old','behavior':'Detonate'},
{'material':'Stone', 'weight':2 ,'shape':'Round','color':'Black','quality':'Normal','behavior':'Disarm'},
{'material':'Stone', 'weight':3 ,'shape':'Elipse','color':'Green','quality':'Old','behavior':'Detonate'},
{'material':'Stone', 'weight':3 ,'shape':'Non-regular','color':'Grey','quality':'Normal','behavior':'Disarm'},
{'material':'Stone', 'weight':3 ,'shape':'Elipse','color':'Brown','quality':'Normal','behavior':'Disarm'},
{'material':'Stone', 'weight':4 ,'shape':'Round','color':'Grey','quality':'Old','behavior':'Detonate'},
{'material':'Stone', 'weight':4 ,'shape':'Elipse','color':'Black','quality':'Old','behavior':'Secure'},
{'material':'Stone', 'weight':5 ,'shape':'Round','color':'Green','quality':'Nomral','behavior':'Disarm'},
{'material':'Stone', 'weight':5 ,'shape':'Elipse','color':'Grey','quality':'Old','behavior':'Secure'},
{'material':'Stone', 'weight':6 ,'shape':'Non-regular','color':'Black','quality':'Normal','behavior':'Secure'},
{'material':'Stone', 'weight':6 ,'shape':'Round','color':'Grey','quality':'New','behavior':'Disarm'},
{'material':'Stone', 'weight':6 ,'shape':'Elipse','color':'Colorful','quality':'Normal','behavior':'Secure'},
];

  var test_data = [
  	{'material':'Wood','weight':1,'shape':'Non-regular','color':'Green','quality':'Old','behavior':'Detonate'},
    {'material':'Wood','weight':2,'shape':'Non-regular','color':'Brown','quality':'Old','behavior':'Detonate'},
    {'material':'Wood','weight':2,'shape':'Round','color':'Green','quality':'Old','behavior':'Detonate'},
    {'material':'Wood','weight':3,'shape':'Square','color':'Brown','quality':'Old','behavior':'Detonate'},
    {'material':'Wood', 'weight':4 ,'shape':'Round','color':'Gold','quality':'New','behavior':'Disarm'},
    {'material':'Wood','weight':4,'shape':'Non-regular','color':'Green','quality':'Normal','behavior':'Disarm'},
    {'material':'Wood','weight':5,'shape':'Square','color':'Brown','quality':'Old','behavior':'Secure'},
    {'material':'Wood', 'weight':4 ,'shape':'Round','color':'Colorful','quality':'New','behavior':'Disarm'},
    {'material':'Wood', 'weight':5 ,'shape':'Elipse','color':'Grey','quality':'Old','behavior':'Secure'},
    {'material':'Plastic','weight':1,'shape':'Round','color':'Gold','quality':'Normal','behavior':'Detonate'},
    {'material':'Plastic','weight':2,'shape':'Round','color':'Grey','quality':'Old','behavior':'Disarm'},
    {'material':'Plastic','weight':2,'shape':'Non-regular','color':'Black','quality':'Normal','behavior':'Detonate'},
    {'material':'Plastic', 'weight':4 ,'shape':'Non-regular','color':'Black','quality':'Normal','behavior':'Secure'},
    {'material':'Plastic', 'weight':2 ,'shape':'Square','color':'Gold','quality':'Normal','behavior':'Disarm'},
    {'material':'Plastic','weight':3,'shape':'Elipse','color':'Colorful','quality':'Normal','behavior':'Disarm'},
    {'material':'Plastic','weight':4,'shape':'Round','color':'Grey','quality':'New','behavior':'Disarm'},
    {'material':'Plastic','weight':4,'shape':'Square','color':'Grey','quality':'Normal','behavior':'Secure'},
    {'material':'Plastic','weight':5,'shape':'Square','color':'Brown','quality':'Normal','behavior':'Secure'},
    {'material':'Plastic', 'weight':6 ,'shape':'Elipse','color':'Green','quality':'New','behavior':'Disarm'},
    {'material':'Plastic', 'weight':3 ,'shape':'Non-regular','color':'Black','quality':'Old','behavior':'Detonate'},
    {'material':'Metal','weight':1,'shape':'Round','color':'Grey','quality':'Old','behavior':'Detonate'},
    {'material':'Metal','weight':2,'shape':'Square','color':'Grey','quality':'Old','behavior':'Detonate'},
    {'material':'Metal','weight':5,'shape':'Round','color':'Grey','quality':'Old','behavior':'Secure'},
    {'material':'Metal','weight':3,'shape':'Round','color':'Black','quality':'Old','behavior':'Disarm'},
    {'material':'Metal', 'weight': 2,'shape':'Square','color':'Brown','quality':'New','behavior':'Detonate'},
    {'material':'Metal','weight':4,'shape':'Elipse','color':'Grey','quality':'Normal','behavior':'Disarm'},
    {'material':'Metal','weight':4,'shape':'Square','color':'Grey','quality':'Old','behavior':'Detonate'},
    {'material':'Metal','weight':5,'shape':'Round','color':'Brown','quality':'Old','behavior':'Secure'},
    {'material':'Metal','weight':6,'shape':'Round','color':'Grey','quality':'Old','behavior':'Secure'},
    {'material':'Metal', 'weight':4 ,'shape':'Elipse','color':'Gold','quality':'Normal','behavior':'Disarm'},
    {'material':'Metal', 'weight':6 ,'shape':'Round','color':'Grey','quality':'New','behavior':'Secure'},
    {'material':'Metal', 'weight':3 ,'shape':'Square','color':'Colorful','quality':'Normal','behavior':'Disarm'},
    {'material':'Aluminum','weight':1,'shape':'Elipse','color':'Gold','quality':'Old','behavior':'Detonate'},
    {'material':'Aluminum','weight':2,'shape':'Non-regular','color':'Colorful','quality':'Old','behavior':'Detonate'},
    {'material':'Aluminum', 'weight':6 ,'shape':'Round','color':'Black','quality':'New','behavior':'Disarm'},
    {'material':'Aluminum','weight':3,'shape':'Round','color':'Grey','quality':'Old','behavior':'Detonate'},
    {'material':'Aluminum','weight':4,'shape':'Square','color':'Brown','quality':'Old','behavior':'Secure'},
    {'material':'Aluminum','weight':5,'shape':'Round','color':'Browm','quality':'Normal','behavior':'Disarm'},
    {'material':'Aluminum','weight':6,'shape':'Round','color':'Grey','quality':'Old','behavior':'Secure'},
    {'material':'Aluminum', 'weight':4 ,'shape':'Elipse','color':'Brown','quality':'Old','behavior':'Detonate'},
    {'material':'Aluminum', 'weight':5 ,'shape':'Non-regular','color':'Green','quality':'Normal','behavior':'Secure'},
    {'material':'Aluminum', 'weight':1 ,'shape':'Square','color':'Gold','quality':'Old','behavior':'Detonate'},
    {'material':'Stone','weight':1,'shape':'Round','color':'Grey','quality':'Old','behavior':'Detonate'},
    {'material':'Stone','weight':2,'shape':'Elipse','color':'Brown','quality':'Old','behavior':'Detonate'},
    {'material':'Stone','weight':4,'shape':'Elipse','color':'Black','quality':'Old','behavior':'Secure'},
    {'material':'Stone','weight':6,'shape':'Elipse','color':'Grey','quality':'Old','behavior':'Secure'},
    {'material':'Stone', 'weight':4 ,'shape':'Round','color':'Grey','quality':'Old','behavior':'Detonate'},
    {'material':'Stone', 'weight':5 ,'shape':'Round','color':'Green','quality':'Normal','behavior':'Disarm'},
    {'material':'Stone', 'weight':3 ,'shape':'Elipse','color':'Black','quality':'New','behavior':'Detonate'},
    {'material':'Stone', 'weight':6 ,'shape':'Round','color':'Grey','quality':'Normal','behavior':'Secure'},


  ];

  var class_name = 'behavior';
  var features = ['material','weight','shape','color','quality'];

  var dt = new DecisionTree(training_data, class_name, features);

// mozna predykowac klase dla obiektu
//   var predicted_class = dt.predict({
//   	'material': "Wood",
//   	'weight': 2,
//     'shape': 'Round',
//     'color': 'Green',
//     'quality': 'New'
//   });
// test_data.forEach(function(element){
//     tmp=dt.predict({
//            'material':element.material,
//            'weight': element.weight,
//            'shape': element.shape,
//            'color': element.color,
//            'quality': element.quality
//        });
//     console.log(tmp + " rzeczywiste: " + element.behavior)
// });


var accuracy = dt.evaluate(test_data);
var treeModel = dt.toJSON();

// console.log(training_data.length);
// console.log(test_data.length);
// console.log((accuracy).toPrecision(2));





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
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }

    // Explore East
    var newLocation = exploreInDirection(currentLocation, 'Right', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }

    // Explore South
    var newLocation = exploreInDirection(currentLocation, 'Down', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }

    // Explore West
    var newLocation = exploreInDirection(currentLocation, 'Left', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }
  }

  // No valid path found
  return false;

};

// This function will check a location's status
// (a location is "valid" if it is on the grid, is not an "obstacle",
// and has not yet been visited by our algorithm)
// Returns "Valid", "Invalid", "Blocked", or "Goal"
var locationStatus = function(location, grid) {
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
    grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = 'Visited';
  }

  return newLocation;
};


// OK. We have the functions we need--let's run them to get our shortest path!

// Create a 4x4 grid
// Represent the grid as a 2-dimensional array
var gridSize = 4;
var grid = [];
for (var i=0; i<gridSize; i++) {
  grid[i] = [];
  for (var j=0; j<gridSize; j++) {
    grid[i][j] = 'Empty';
  }
}

// Think of the first index as "distance from the top row"
// Think of the second index as "distance from the left-most column"

// This is how we would represent the grid with obstacles above
grid[0][0] = "Start";
//grid[2][2] = "Goal";

grid[1][1] = "Obstacle";
grid[1][2] = "Obstacle";
grid[1][3] = "Obstacle";
grid[2][1] = "Obstacle";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var x = getRandomInt(1,3);
var y = getRandomInt(1,3);
console.log("Goal at X:"+x + " Y:"+ y);
grid[x][y]= "Goal";
console.log(findShortestPath([0,0], grid));

var tmp = getRandomInt(0 ,test_data.length);
var object = {
  material: test_data[tmp].material,
  weight:test_data[tmp].weight,
  shape:test_data[tmp].shape,
  color:test_data[tmp].color,
  quality:test_data[tmp].quality,
}
console.log(object);
console.log(dt.predict(object));
