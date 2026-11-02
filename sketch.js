let tickerTime01pixel,
  tickerTime01starCoarse,
  tickerTime01starStrokeCoarse,
  tickerTime01stripe,
  tickerTime01checker,
  tickerTime01checkerInverse,
  tickerTime01weave,
  tickerTime01stitch,
  tickerTime01stitchTriangle,
  tickerTime01diamondCoarse,
  tickerTime01chainCoarse;

let tickerTime10pixel,
  tickerTime10starCoarse,
  tickerTime10starStrokeCoarse,
  tickerTime10stripe,
  tickerTime10checker,
  tickerTime10checkerInverse,
  tickerTime10weave,
  tickerTime10stitch,
  tickerTime10stitchTriangle,
  tickerTime10diamondCoarse,
  tickerTime10chainCoarse;

let tickerTime1000pixel,
  tickerTime1000starCoarse,
  tickerTime1000starStrokeCoarse,
  tickerTime1000stripe,
  tickerTime1000checker,
  tickerTime1000checkerInverse,
  tickerTime1000weave,
  tickerTime1000stitch,
  tickerTime1000stitchTriangle,
  tickerTime1000diamondCoarse,
  tickerTime1000chainCoarse;

//let modeButtonBW = document.getElementById("modeButtonBW");
//let modeButtonColor = document.getElementById("modeButtonColor");

function checkBW() {
  modeButtonBW.checked;
}

function checkColor() {
  modeButtonColor.checked;
}

function checkPixel() {
  styleButtonPixel.checked;
}

function checkStripe() {
  styleButtonStripe.checked;
}

function checkStitch() {
  styleButtonStitch.checked;
}

function checkChecker() {
  styleButtonChecker.checked;
}

function checkCheckerInverse() {
  styleButtonCheckerInverse.checked;
}

function checkStar() {
  styleButtonStar.checked;
}

function checkStarStroke() {
  styleButtonStarStroke.checked;
}

function checkWeave() {
  styleButtonWeave.checked;
}

function checkStitchTriangle() {
  styleButtonStitchTriangle.checked;
}

function checkChain() {
  styleButtonChain.checked;
}

//////////////////////////////////////////////////////////

async function setup() {
  createCanvas(windowWidth, windowHeight);

  tickerTime01pixel = await loadFont("/TESTTickerTime-index-01_pixel.otf");
  tickerTime10pixel = await loadFont("/TESTTickerTime-index-10_pixel.otf");
  tickerTime1000pixel = await loadFont("/TESTTickerTime-index-1000_pixel.otf");

  //tickerTime01stripe = await loadFont("/TESTTickerTime-index-01_stripe.otf");
  //tickerTime10stripe = await loadFont("/TESTTickerTime-index-10_stripe.otf");
  //tickerTime1000stripe = await loadFont("/TESTTickerTime-index-1000_stripe.otf");

  //tickerTime01stitch = await loadFont("/TESTTickerTime-index-01_stich.otf");
  //tickerTime10stich = await loadFont("/TESTTickerTime-index-10_stich.otf");
  tickerTime1000stich = await loadFont("/TESTTickerTime-index-1000_stitch.otf");

  tickerTime01checker = await loadFont("/TESTTickerTime-index-01_checker.otf");
  tickerTime10checker = await loadFont("/TESTTickerTime-index-10_checker.otf");
  tickerTime1000checker = await loadFont(
    "/TESTTickerTime-index-1000_checker.otf"
  );

  tickerTime01checkerInverse = await loadFont(
    "/TESTTickerTime-index-01_checker-inverse.otf"
  );
  tickerTime10checkerInverse = await loadFont(
    "/TESTTickerTime-index-10_checker-inverse.otf"
  );
  tickerTime1000checkerInverse = await loadFont(
    "/TESTTickerTime-index-1000_checker-inverse.otf"
  );

  tickerTime01starCoarse = await loadFont(
    "/TESTTickerTime-index-01_star-coarse.otf"
  );
  tickerTime10starCoarse = await loadFont(
    "/TESTTickerTime-index-10_star-coarse.otf"
  );
  tickerTime1000starCoarse = await loadFont(
    "/TESTTickerTime-index-1000_star-coarse.otf"
  );

  //tickerTime01starStrokeCoarse = await loadFont("/TESTTickerTime-index-01_star+stroke-coarse.otf");
  tickerTime10starStrokeCoarse = await loadFont(
    "/TESTTickerTime-index-10_star+stroke-coarse.otf"
  );
  tickerTime1000starStrokeCoarse = await loadFont(
    "/TESTTickerTime-index-1000_star+stroke-coarse.otf"
  );

  tickerTime01weave = await loadFont("/TESTTickerTime-index-01_weave.otf");
  //tickerTime10weave = await loadFont("/TESTTickerTime-index-10_weave.otf");
  //tickerTime1000weave = await loadFont("/TESTTickerTime-index-1000_weave.otf");

  tickerTime01stitchTriangle = await loadFont(
    "/TESTTickerTime-index-01_stitch-triangle.otf"
  );
  tickerTime10stitchTriangle = await loadFont(
    "/TESTTickerTime-index-10_stitch-triangle.otf"
  );
  tickerTime1000stitchTriangle = await loadFont(
    "/TESTTickerTime-index-1000_stitch-triangle.otf"
  );

  tickerTime01chain = await loadFont(
    "/TESTTickerTime-index-01_chain-coarse.otf"
  );
  tickerTime10chain = await loadFont(
    "/TESTTickerTime-index-10_chain-coarse.otf"
  );
  tickerTime1000chain = await loadFont(
    "/TESTTickerTime-index-1000_chain-coarse.otf"
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  let w = windowWidth;
  let yr = str(year());
  let yr1 = int(yr[0]);
  let yr2 = int(yr[2]);
  let yr3 = int(yr[3]);

  let mo = nf(month(), 2);
  let d = nf(day(), 2);
  let h = nf(hour(), 2);
  let m = nf(minute(), 2);
  let s = nf(second(), 2);

  let mo1 = 0;
  let mo2 = 4;
  // let mo1 = int(mo[0]);
  // let mo2 = int(mo[1]);
  let d1 = int(d[0]);
  let d2 = int(d[1]);

  let h1 = int(h[0]);
  let h2 = int(h[1]);
  let m1 = int(m[0]);
  let m2 = int(m[1]);
  let s1 = int(s[0]);
  let s2 = int(s[1]);

  ///////// TIME DISPLAY /////////

  let x = 80;
  let y = height - 50;
  //let displayMonth = nf(month(), 2);
  let displayMonth = `04`;
  let displayDay = nf(day(), 2);
  let displayYear = nf(year(), 4);
  let displayHour = hour();
  let displayMinute = nf(minute(), 2);
  let displaySecond = nf(second(), 2);
  let noon;
  let colon = " : ";
  let slash = " / ";
  let space = " ";

  if (h >= 12) {
    h = h - 12;
    displayHour = nf(h, 2);
    noon = " PM";
  } else {
    displayHour = nf(h, 2);
    noon = " AM";
  }

  if (modeButtonBW.checked) {
    textFont("Arial");
    textSize(14);
    fill(255);
    text(displayMonth, x, y);
    x += textWidth(displayMonth);
    text(slash, x, y);
    x += textWidth(" w ");
    text(displayDay, x, y);
    x += textWidth(displayDay);
    text(slash, x, y);
    x += textWidth(" w ");
    text(displayYear, x, y);
    x += textWidth(displayYear * 1.2);
    text(displayHour, x, y);
    x += textWidth(displayHour);
    text(colon, x, y);
    x += textWidth(" w ");
    text(displayMinute, x, y);
    x += textWidth(displayMinute);
    text(colon, x, y);
    x += textWidth(" w ");
    text(displaySecond, x, y);
    x += textWidth(displaySecond);

    text(noon, x, y);
  } else if (modeButtonColor.checked) {
    textFont("Arial");
     textSize(14);
    fill("#FFFF11");
    text(displayMonth, x, y);
    x += textWidth(displayMonth);
    fill(255);
    text(slash, x, y);
    x += textWidth(" w ");
    fill("#008118");
    text(displayDay, x, y);
    x += textWidth(displayDay);
    fill(255);
    text(slash, x, y);
    x += textWidth(" w ");
    fill("#3911FF");
    text(displayYear, x, y);
    x += textWidth(displayYear * 1.2);
    fill("#F453FF");
    text(displayHour, x, y);
    x += textWidth(displayHour);
    fill(255);
    text(colon, x, y);
    x += textWidth(" w ");
    fill("#780C02");
    text(displayMinute, x, y);
    x += textWidth(displayMinute);
    fill(255);
    text(colon, x, y);
    x += textWidth(" w ");
    fill("#E82300");
    text(displaySecond, x, y);
    x += textWidth(displaySecond);
    fill(255);
    text(noon, x, y);
  }

  // let noon;
  // let clockH;
  // //clockH.addClass('clockH');

  // if (h >= 12) {
  //   h = h - 12;
  //   clockH = nf(h, 2);
  //   noon = 'PM';

  // } else {
  //   clockH = nf(h, 2);
  //   noon = 'AM';
  // }

  // textFont("Times New Roman");
  // textSize(50);
  // fill(255);
  // text(clockH + ':' +m1+m2 + ':' +s1+s2 + noon, 25, height - 25);

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  let fontSize = windowHeight * 0.33;
  let xIncrement = fontSize * 0.9;
  let yStart = windowHeight * 0.1;
  let yIncrement = windowHeight * 0.029;

  // CURRENT NOT WORKING STYLES USE PIXEL //
  if (styleButtonPixel.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonPixel.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStripe.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStripe.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStitch.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStitch.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonChecker.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000checker);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10checker);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01checker);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10checker);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01checker);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10checker);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01checker);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10checker);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01checker);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10checker);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01checker);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10checker);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01checker);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10checker);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01checker);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10checker);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01checker);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10checker);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01checker);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10checker);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01checker);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10checker);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01checker);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10checker);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000checker);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonChecker.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000checker);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10checker);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01checker);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10checker);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01checker);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10checker);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01checker);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10checker);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01checker);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10checker);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01checker);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10checker);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01checker);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10checker);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01checker);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10checker);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01checker);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10checker);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01checker);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10checker);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01checker);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10checker);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01checker);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10checker);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000checker);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonCheckerInverse.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000checkerInverse);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10checkerInverse);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01checkerInverse);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10checkerInverse);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01checkerInverse);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10checkerInverse);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01checkerInverse);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10checkerInverse);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01checkerInverse);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10checkerInverse);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01checkerInverse);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10checkerInverse);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01checkerInverse);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10checkerInverse);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01checkerInverse);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10checkerInverse);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01checkerInverse);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10checkerInverse);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01checkerInverse);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10checkerInverse);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01checkerInverse);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10checkerInverse);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01checkerInverse);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10checkerInverse);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000checkerInverse);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonCheckerInverse.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000checkerInverse);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10checkerInverse);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01checkerInverse);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10checkerInverse);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01checkerInverse);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10checkerInverse);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01checkerInverse);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10checkerInverse);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01checkerInverse);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10checkerInverse);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01checkerInverse);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10checkerInverse);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01checkerInverse);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10checkerInverse);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01checkerInverse);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10checkerInverse);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01checkerInverse);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10checkerInverse);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01checkerInverse);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10checkerInverse);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01checkerInverse);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10checkerInverse);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01checkerInverse);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10checkerInverse);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000checkerInverse);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStar.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000starCoarse);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10starCoarse);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01starCoarse);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10starCoarse);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01starCoarse);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10starCoarse);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01starCoarse);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10starCoarse);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01starCoarse);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10starCoarse);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01starCoarse);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10starCoarse);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01starCoarse);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10starCoarse);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01starCoarse);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10starCoarse);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01starCoarse);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10starCoarse);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01starCoarse);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10starCoarse);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01starCoarse);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10starCoarse);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01starCoarse);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10starCoarse);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000starCoarse);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStar.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000starCoarse);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10starCoarse);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01starCoarse);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10starCoarse);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01starCoarse);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10starCoarse);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01starCoarse);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10starCoarse);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01starCoarse);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10starCoarse);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01starCoarse);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10starCoarse);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01starCoarse);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10starCoarse);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01starCoarse);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10starCoarse);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01starCoarse);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10starCoarse);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01starCoarse);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10starCoarse);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01starCoarse);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10starCoarse);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01starCoarse);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10starCoarse);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000starCoarse);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStarStroke.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStarStroke.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonWeave.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonWeave.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000pixel);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01pixel);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10pixel);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01pixel);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10pixel);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01pixel);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10pixel);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01pixel);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10pixel);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01pixel);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10pixel);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01pixel);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10pixel);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000pixel);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStitchTriangle.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000stitchTriangle);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10stitchTriangle);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01stitchTriangle);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10stitchTriangle);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01stitchTriangle);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10stitchTriangle);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01stitchTriangle);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10stitchTriangle);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01stitchTriangle);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10stitchTriangle);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01stitchTriangle);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10stitchTriangle);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01stitchTriangle);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10stitchTriangle);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01stitchTriangle);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10stitchTriangle);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01stitchTriangle);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10stitchTriangle);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01stitchTriangle);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10stitchTriangle);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01stitchTriangle);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10stitchTriangle);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01stitchTriangle);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10stitchTriangle);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000stitchTriangle);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonStitchTriangle.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000stitchTriangle);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10stitchTriangle);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01stitchTriangle);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10stitchTriangle);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01stitchTriangle);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10stitchTriangle);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01stitchTriangle);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10stitchTriangle);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01stitchTriangle);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10stitchTriangle);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01stitchTriangle);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10stitchTriangle);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01stitchTriangle);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10stitchTriangle);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01stitchTriangle);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10stitchTriangle);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01stitchTriangle);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10stitchTriangle);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01stitchTriangle);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10stitchTriangle);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01stitchTriangle);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10stitchTriangle);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01stitchTriangle);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10stitchTriangle);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000stitchTriangle);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonChain.checked && modeButtonBW.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000chain);
      fill("white");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10chain);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01chain);
      text(yr3, x, yStart + yIncrement * 3);
      textFont(tickerTime10chain);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01chain);
      text(mo2, x, yStart + yIncrement * 5);
      textFont(tickerTime10chain);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01chain);
      text(d2, x, yStart + yIncrement * 7);
      textFont(tickerTime10chain);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01chain);
      text(h2, x, yStart + yIncrement * 9);
      textFont(tickerTime10chain);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01chain);
      text(m2, x, yStart + yIncrement * 11);
      textFont(tickerTime10chain);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01chain);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10chain);
      text(s1, x, yStart + yIncrement * 14);
      textFont(tickerTime01chain);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10chain);
      text(m1, x, yStart + yIncrement * 16);
      textFont(tickerTime01chain);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10chain);
      text(h1, x, yStart + yIncrement * 18);
      textFont(tickerTime01chain);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10chain);
      text(d1, x, yStart + yIncrement * 20);
      textFont(tickerTime01chain);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10chain);
      text(mo1, x, yStart + yIncrement * 22);
      textFont(tickerTime01chain);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10chain);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000chain);
      text(yr1, x, yStart + yIncrement * 25);
    }
  } else if (styleButtonChain.checked && modeButtonColor.checked) {
    for (let x = 0; x < w; x += xIncrement) {
      textSize(fontSize);
      textFont(tickerTime1000chain);
      fill("#3911FF");
      text(yr1, x, yStart + yIncrement);
      textFont(tickerTime10chain);
      text(yr2, x, yStart + yIncrement * 2);
      textFont(tickerTime01chain);
      text(yr3, x, yStart + yIncrement * 3);
      fill("#FFFF11");
      textFont(tickerTime10chain);
      text(mo1, x, yStart + yIncrement * 4);
      textFont(tickerTime01chain);
      text(mo2, x, yStart + yIncrement * 5);
      fill("#008118");
      textFont(tickerTime10chain);
      text(d1, x, yStart + yIncrement * 6);
      textFont(tickerTime01chain);
      text(d2, x, yStart + yIncrement * 7);
      fill("#F453FF");
      textFont(tickerTime10chain);
      text(h1, x, yStart + yIncrement * 8);
      textFont(tickerTime01chain);
      text(h2, x, yStart + yIncrement * 9);
      fill("#780C02");
      textFont(tickerTime10chain);
      text(m1, x, yStart + yIncrement * 10);
      textFont(tickerTime01chain);
      text(m2, x, yStart + yIncrement * 11);
      fill("#E82300");
      textFont(tickerTime10chain);
      text(s1, x, yStart + yIncrement * 12);
      textFont(tickerTime01chain);
      text(s2, x, yStart + yIncrement * 13);
      textFont(tickerTime10chain);
      text(s1, x, yStart + yIncrement * 14);
      fill("#780C02");
      textFont(tickerTime01chain);
      text(m2, x, yStart + yIncrement * 15);
      textFont(tickerTime10chain);
      text(m1, x, yStart + yIncrement * 16);
      fill("#F453FF");
      textFont(tickerTime01chain);
      text(h2, x, yStart + yIncrement * 17);
      textFont(tickerTime10chain);
      text(h1, x, yStart + yIncrement * 18);
      fill("#008118");
      textFont(tickerTime01chain);
      text(d2, x, yStart + yIncrement * 19);
      textFont(tickerTime10chain);
      text(d1, x, yStart + yIncrement * 20);
      fill("#FFFF11");
      textFont(tickerTime01chain);
      text(mo2, x, yStart + yIncrement * 21);
      textFont(tickerTime10chain);
      text(mo1, x, yStart + yIncrement * 22);
      fill("#3911FF");
      textFont(tickerTime01chain);
      text(yr3, x, yStart + yIncrement * 23);
      textFont(tickerTime10chain);
      text(yr2, x, yStart + yIncrement * 24);
      textFont(tickerTime1000chain);
      text(yr1, x, yStart + yIncrement * 25);
    }
  }
}
