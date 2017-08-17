import { names, qualityBoundaries, sellInBoundaries } from './interesting_data';
import GildedRose from '../gilded_rose';

const tolerances = [ -2, -1, 0, 1, 2 ];

let learned = [];

names.forEach(name => {
  qualityBoundaries.forEach(quality => {
    tolerances.forEach(quality_tolerance => {
      sellInBoundaries.forEach(days_remaining => {
        tolerances.forEach(days_tolerance => {
          let record = {};
          let g = new GildedRose(name, quality + quality_tolerance, days_remaining + days_tolerance);
          record.input = [g.name, g.quality, g.days_remaining];
          g.tick();
          record.output = [g.name, g.quality, g.days_remaining];
          learned.push(record);
        });
      });
    });
  });
});

console.log(JSON.stringify(learned, null, 2));