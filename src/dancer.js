// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  
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