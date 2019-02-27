// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.neighbor = {
    node: null,
    distance: null
  }; // closest object object {object: distance}
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  this.step();
  
  // this one sets the position to some random default point within the body
  this.setPosition(this.top, this.left);

  $('.dancer').mouseover(function() {
    $(this).css("background-image", "url('https://orig00.deviantart.net/fb44/f/2013/021/3/a/1ghostghosted3_by_camdencc-d5saelk.gif')");
  });
  $('.dancer').mouseout(function() {
    $(this).css("background-image", '');
  });

};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(function(){that.step();}, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  //move left position to 0
  this.left = 0;
};

var findDistance = function(dancer, partner) {
  var distance = 0;

  var x1 = dancer.left;
  var x2 = partner.left;
  var y1 = dancer.top;
  var y2 = partner.top;

  var yDist = y1 - y2;
  var xDist = x1 - x2;

  distance = Math.sqrt((xDist * xDist) + (yDist * yDist));
  return distance;
};

makeDancer.prototype.interact = function() { // interact method
  for (var i = 0; i < window.dancers.length; i++) { // each dancer calculates distances to each other
    for (var j = 0; j < window.dancers.length; j++) {
      if (i === j) { //skip
        continue;
      }
      var distance = findDistance(window.dancers[i], window.dancers[j]);// for each dancer in dancer storage
      if (window.dancers[i].neighbor.distance && distance < window.dancers[i].neighbor.distance) { // calculate distance
        window.dancers[i].neighbor.distance = distance;// if distance is less than stored
        window.dancers[i].neighbor.node = window.dancers[j]; // replace node k-v pair
      } else {
        window.dancers[i].neighbor.distance = distance; // if still null
        window.dancers[i].neighbor.node = window.dancers[j]; // insert node k-v pair
      }
    }
  }
  // do something based on distance
  // if neighbor distance is less than 100
  for (var k = 0; k < window.dancers.length; k++) {
    if (window.dancers[k].neighbor.distance < 100) {
      $('.dancer').css({top: window.dancers[k].neighbor.node.top, left: (window.dancers[k].neighbor.node.left)});
      //window.dancers[k].left = window.dancers[k].neighbor.node.left + 30;
    }
  }
}; 