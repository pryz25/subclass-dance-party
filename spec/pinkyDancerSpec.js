describe('pinkyDancer', function() {

  var pinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pinkyDancer = new makePinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node slide up', function() {
    sinon.spy(pinkyDancer.$node, 'slideUp');
    pinkyDancer.step();
    expect(pinkyDancer.$node.slideUp.called).to.be.true;
  });

  it('should have a step function that makes its node slide down', function() {
    sinon.spy(pinkyDancer.$node, 'slideDown');
    pinkyDancer.step();
    expect(pinkyDancer.$node.slideDown.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pinkyDancer, 'step');
      expect(pinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(pinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
