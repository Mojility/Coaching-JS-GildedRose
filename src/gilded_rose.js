export default class GuildedRose {

  constructor(name, quality, sell_in) {
    this.name = name;
    this.quality = quality;
    this.sell_in = sell_in;
  }

  tick() {
    if (this.name !== 'Aged Brie' && this.name !== 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.quality > 0) {
        if (this.name !== 'Sulfuras, Hand of Ragnaros') {
          this.quality = this.quality - 1;
        }
      } else if (this.quality < 50) {
        this.quality = this.quality + 1;
        if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.sell_in < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }

          if (this.sell_in < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
        }
      }
    }
    if (this.name !== 'Sulfuras, Hand of Ragnaros') {
      this.sell_in = this.sell_in - 1;
    }
    if (this.sell_in < 0) {
      if (this.name !== 'Aged Brie') {
        if (this.name !== 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > 0) {
            if (this.name !== 'Sulfuras, Hand of Ragnaros') {
              this.quality = this.quality - 1;
            }
          }
        } else {
          this.quality = this.quality - this.quality;
        }
      } else if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
  }
}
