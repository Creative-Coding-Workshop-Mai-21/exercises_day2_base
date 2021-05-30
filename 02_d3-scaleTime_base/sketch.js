let data = [];

async function setup() {
  createCanvas(400, 300);

  // load data
  data = await d3.csv("data.csv");
  console.log("data", data);

  noLoop();
}

function draw() {
  background(255);
}
