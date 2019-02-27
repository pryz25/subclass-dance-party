var makeInkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = this.$node.addClass('inky');
  // this.$node = this.$node.add( 'div' ).addClass('inky');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this
  // $('.inky').mouseout(function() {
  //   $(this).css("background-image", "url('https://static.giantbomb.com/uploads/original/8/87790/2469741-inky.png')");
  // });
};

makeInkyDancer.prototype = Object.create(makeDancer.prototype);

makeInkyDancer.prototype.constructor = makeInkyDancer;

makeInkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({
    width: '60px',
    opacity: 0
  });
  this.$node.animate({
    width: '30px',
    opacity: 1
  });
};
