let myColor1 = ["#E87DCB", "#6D91C3", "#AF8BA5"];
let posX1 = [10, 200, 350];
let posY1 = [10, 230, 200];
let mySize1 = [100, 60, 70];
let movX1 = 0; // SIZE OF CIRCLE

let myColor2 = ["#5693AB", "#FFD2F3", "#CCE8F4"];
let posX2 = [200, 140, 300];
let posY2 = [80, 270, 70];
let mySize2 = [20, 0, 0];
let movX2 = 0;

function setup() {
  createCanvas(400, 400);
  background(color("lightblue"));

  let xCircleDR = width / 2;
  let yCircleDR = height / 2;

  let cirSize1 = 400;
  let cirSize2 = 350;
  let cirSize3 = 300;
  let cirSize4 = 250;
  let cirSize5 = 200;
  let cirSize6 = 150;

  fill("#0D7A90");
  circle(xCircleDR, yCircleDR, cirSize1);
  fill("#228DA3");
  circle(xCircleDR, yCircleDR, cirSize2);
  fill("#30B1CB");
  circle(xCircleDR, yCircleDR, cirSize3);

  fill("#6BCBDF");
  circle(xCircleDR, yCircleDR, cirSize4);
  fill("#AAECFA");
  circle(xCircleDR, yCircleDR, cirSize5);
  fill("#CBE9EF");
  circle(xCircleDR, yCircleDR, cirSize6);
}

function draw() {
  for (let i = 0; i < 3; i++) {
    let colorIndex1 = int((mySize1[i] + movX1) / 30) % myColor1.length; // Changes color based on size
    fill(color(myColor1[colorIndex1]));
    circle(posX1[i] + movX1, posY1[i] + movX1, mySize1[i] + movX1);
  }
  movX1++;

  for (let i = 0; i < 3; i++) {
    let colorIndex2 = int((mySize2[i] + movX2) / 30) % myColor2.length; // Changes color based on size
    fill(color(myColor2[colorIndex2]));
    circle(posX2[i] + movX1, posY2[i] + movX2, mySize2[i] + movX2);
  }
  movX2++;

  text("niyati ramachandran", 10, 30);
  textSize(12);
  fill(255);
  stroke(1);
  strokeWeight(3);
}

