$(document).ready(function() {
  window.dancers = [];
  
  var findDistance = function(dancer, partner) {
    var distance = 0;

    var x1 = dancer.offset().left;
    var x2 = partner.offset().left;
    var y1 = dancer.offset().top;
    var y2 = partner.offset().top;

    var yDist = y1 - y2;
    var xDist = x1 - x2;

    distance = Math.sqrt((xDist * xDist) + (yDist * yDist));
    return distance;
  };

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    // window.dancers.push(dancer);
  });
  
  var counter = 0;
  $('.lineUp').on('click', function(event) {
    
    //go through all dancers 
      //for each 
        //set left to 0;
    
    var arrayOfDancers = document.body.getElementsByClassName('dancer');
    
    if (counter % 2 === 0) {
      Array.prototype.forEach.call(arrayOfDancers, function(dancer) {
        dancer.style.left = 0;
        dancer.style.right = '';
      });
      counter++; 
    } else {
      Array.prototype.forEach.call(arrayOfDancers, function(dancer) {
        dancer.style.right = 0;
        dancer.style.left = '';
      });
      counter++;
    }
  });
});

