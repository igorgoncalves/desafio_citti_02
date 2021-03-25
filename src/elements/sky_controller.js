class SkyController {
  putStarsInSky(nStars, sky) {
    for (var i = 0; i < nStars; i++) {
      let randomX = random(0, 700);
      let randomY = random(0, 200);
      let star = new Star(randomX, randomY, 5);
      sky.addStar(star);
    }
  }

  putCloudsInSky(nClouds, sky) {
    for (var i = 0; i < nClouds; i++) {
      let randomX = random(0, 700);
      let randomY = random(0, 200);
      let cloud = new Cloud(randomX, randomY, random(15, 50));
      sky.addCloud(cloud);
    }
  }

  watchTheHour(sky) {
    let now = hour();
    if (now > 18) {
      sky.sunset();
    }
    if (now < 18 && now > 6) {
      sky.sunrise();
    }
  }
}
