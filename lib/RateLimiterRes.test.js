const expect = require('chai').expect;
const RateLimiterRes = require('./RateLimiterRes');

describe('RateLimiterRes response object', () => {
  let rateLimiterRes;
  beforeEach(function() {
    rateLimiterRes = new RateLimiterRes();
  });

  it('setup defaults on construct', () => {
    expect(rateLimiterRes.msBeforeNext === 0 && rateLimiterRes.points === 0).to.be.true;
  });

  it('msBeforeNext set and get', () => {
    rateLimiterRes.msBeforeNext = 123;
    expect(rateLimiterRes.msBeforeNext).to.equal(123);
  });

  it('points set and get', () => {
    rateLimiterRes.points = 4;
    expect(rateLimiterRes.points).to.equal(4);
  });
});