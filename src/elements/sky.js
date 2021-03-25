// let sky = new Sky();
class Sky {
  constructor() {
    this.clouds = [];
    this.stars = [];
    this.color = color(135, 206, 235);
    this.isNight = false;
  }

  // sky.addStar(new Star(0,0, 10));
  addStar(star) {
    this.stars.push(star);
  }

  // sky.addCloud(new Cloud(0,0, 10));
  addCloud(cloud) {
    this.clouds.push(cloud);
  }

  sunrise() {
    this.isNight = false;
    this.color = color(135, 206, 235);
  }

  sunset() {
    this.isNight = true;
    this.color = color(26);
  }

  render() {
    background(this.color);
    if (this.isNight) {
      this._renderStars();
    } else {
      this._renderClouds();
    }
  }

  _renderStars() {
    for (var i = 0; i < this.stars.length; i++) {
      this.stars[i].shiny();
      this.stars[i].render();
    }
  }

  _renderClouds() {
    for (var i = 0; i < this.clouds.length; i++) {
      this.clouds[i].wind();
      this.clouds[i].render();
    }
  }
}
