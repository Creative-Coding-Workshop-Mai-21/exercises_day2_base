let data = [];
async function setup() {
  createCanvas(400, 300);

  data = await d3.csv("data.csv", d3.autoType);
  console.log("data", data);

  noLoop();
}

function draw() {
  background(255);

  text("intentionally left blank, look at console", 100, 100);
}
