let data = [];

async function setup() {
  createCanvas(600, 400);
  data = await d3.csv("data.csv", d3.autoType);

  console.log(data);

  // we only need to draw the scene once
  noLoop();
}

function draw() {
  background(255);
}
