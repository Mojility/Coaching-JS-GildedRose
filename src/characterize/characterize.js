import { names, qualityBoundaries, sellInBoundaries } from './interesting_data';
import GildedRose from '../gilded_rose';

const tolerances = [ -2, -1, 0, 1, 2 ];

function report(comment, g) {
  console.log(comment, g.name, g.quality, g.days_remaining);
}

names.forEach(name => {
  qualityBoundaries.forEach(quality => {
    tolerances.forEach(quality_tolerance => {
      sellInBoundaries.forEach(sell_in => {
        tolerances.forEach(sell_in_tolerance => {
          let g = new GildedRose(name, quality_tolerance, sell_in_tolerance);
          g.tick();
          if (g.quality !== quality_tolerance || g.days_remaining !== sell_in_tolerance) {
            // report(`Interesting ${quality_tolerance} ${sell_in_tolerance}`, g);
            console.log(`["${name}", [ ${quality_tolerance}, ${sell_in_tolerance} ], [ ${g.quality}, ${g.days_remaining} ]],`);
          }
        });
      });
    });
  });
});
