import { Tama } from '../src/tamagotchi.js';

describe('Tama', function() {
  let winston;
  beforeEach(function() {
    winston = new Tama("Winston");

    jasmine.clock().install();
    winston.setValueTimer("sportLevel", 2000);
    winston.setValueTimer("foodLevel", 1000);
    console.log((winston.sportLevel + 'sport'), (winston.foodLevel + 'food') );
    // winston.setValue("sportLevel");
    // winston.setValue("foodLevel");
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    console.log("afterEach");
  });

  it('should have a name and all levels of 10 when it is created', function() {
    expect(winston.name).toEqual("Winston");
    expect(winston.foodLevel).toEqual(10);
    expect(winston.sportLevel).toEqual(10);

  });
  it('should have a sport level of 5 after 10 seconds', function() {
    // jasmine.clock().tick(3001);
    // expect(winston.foodLevel).toEqual(7);
    jasmine.clock().tick(10001);
    expect(winston.sportLevel).toEqual(5);
  });
  it('should have a food level of 6 after 4001 milliseconds', function() {
    jasmine.clock().tick(4001);
    expect(winston.foodLevel).toEqual(6);
  });




  it('should get very hungry if the food level drops below zero', function() {
    winston.foodLevel = 0;
    expect(winston.didYouGetStarved()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(winston.didYouGetStarved()).toEqual(true);
    console.log(winston);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(8001);
    winston.setValue("foodLevel");
    expect(winston.foodLevel).toEqual(10);
  });

  it('should get very bored if the sport level drops below zero', function() {
    jasmine.clock().tick(20001);
    expect(winston.didYouGetBored()).toEqual(true);
    console.log(winston.sportLevel);
  });

  it('should get very bored if 20 seconds were to pass without sport', function() {

    jasmine.clock().tick(20001);
    expect(winston.didYouGetBored()).toEqual(true);
  });

  it('should have a sport level of ten if it is played with', function() {
    jasmine.clock().tick(9001);
    winston.setValue("sportLevel");
    expect(winston.sportLevel).toEqual(10);
  });
});

//play time

  // it('should have a sport level of 10 when it is created', function() {
  //   winston.sport();
  //   expect(winston.sportLevel).toEqual(10);
  // });


  // it('should have a sport level of 5 after 10001 milliseconds', function() {
  //   jasmine.clock().tick(10001);
  //   expect(winston.setSportLevel).toEqual(5);
  // });
