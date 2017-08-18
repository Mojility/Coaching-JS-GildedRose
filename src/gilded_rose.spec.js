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
      let input = example.input;
      let expected = example.output;
      it(`${input[0]} with quality ${input[1]} and days ${input[2]} should elicit ${expected[1]}, ${expected[2]}`, () => {
        let g = new GildedRose(input[0], input[1], input[2]);
        g.tick();
        expect(g.name).to.equal(expected[0]);
        expect(g.quality).to.equal(expected[1]);
        expect(g.sell_in).to.equal(expected[2]);
      });
    });
  });
});