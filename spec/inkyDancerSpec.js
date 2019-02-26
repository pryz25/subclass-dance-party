describe('inkyDancer', function() {

  var inkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    inkyDancer = new makeInkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(inkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate', function() {
    sinon.spy(inkyDancer.$node, 'animate');
    inkyDancer.step();
    expect(inkyDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(inkyDancer, 'step');
      expect(inkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(inkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(inkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
