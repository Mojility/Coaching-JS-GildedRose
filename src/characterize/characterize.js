import { names, qualityBoundaries, sellInBoundaries } from './interesting_data';
import GildedRose from '../gilded_rose';

const tolerances = [ -2, -1, 0, 1, 2 ];

let learned = [];

names.forEach(name => {
  qualityBoundaries.forEach(quality => {
    tolerances.forEach(qualityTolerance => {
      sellInBoundaries.forEach(sellIn => {
        tolerances.forEach(sellInTolerance => {
          let record = {};
          let g = new GildedRose(name, quality + qualityTolerance, sellIn + sellInTolerance);
          record.input = [g.name, g.quality, g.sell_in];
          g.tick();
          record.output = [g.name, g.quality, g.sell_in];
          learned.push(record);
        });
      });
    });
  });
});

console.log(JSON.stringify(learned, null, 2));