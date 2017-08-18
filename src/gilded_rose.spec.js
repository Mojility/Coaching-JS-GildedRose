import { describe, it } from 'mocha';
import { expect } from 'chai';
import GildedRose from './gilded_rose';
import examples from './test_data/examples';

describe('GuildedRose', () => {
  it('should exist', () => {
    expect(GildedRose).to.exist;
  });

  describe("gold master", () => {
    examples.forEach(example => {
      it('should conform to the example', () => {
        let input = example.input;
        let expected = example.output;
        let g = new GildedRose(input[0], input[1], input[2]);
        g.tick();
        expect(g.name).to.equal(expected[0]);
        expect(g.quality).to.equal(expected[1]);
        expect(g.days_remaining).to.equal(expected[2]);
      })
    });
  });
});