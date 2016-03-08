// Code goes her

var disks = null;
var moves = null;
var ctx = null;
var diskCount = 5;
var intervalMillis = 500;

function doIt() {
  // var x = document.getElementById("e1");
  // var str = x.textContent;
  // console.log("str: " + str);

  // var y = document.getElementById("e2");
  // e2.textContent = str;

  var canvas = document.getElementById('canvas1');
  ctx = canvas.getContext('2d');

  diskCount = parseInt(document.getElementById("diskCount").value);
  intervalMillis = parseInt(document.getElementById("intervalMillis").value);

  var initDisks = [];
  for (var ii = 1; ii <= diskCount; ii++) {
    initDisks.push(ii);
  }
  disks = [initDisks, [], []];
  moves = getMoves(diskCount, 0, 1);
  drawTowers();

  setTimeout(doNextMove, intervalMillis);

  /*
  drawBlock(0, 0, 10);
  drawBlock(1, 1, 11);
  drawBlock(2, 2, 12);

  drawBlock(0, 1, 13);
  drawBlock(1, 2, 14);
  drawBlock(2, 0, 15);

  drawBlock(0, 2, 16);
  drawBlock(1, 0, 17);
  drawBlock(2, 1, 18);

  drawBlock(0, 3, 19);
  drawBlock(1, 3, 19);
  drawBlock(2, 3, 19);
*/
}

function doNextMove()
{
    if (moves.length == 0)
        return;

    var nextMove = moves[0];
    moves.splice(0, 1);
    move(nextMove[0], nextMove[1]);

    setTimeout(doNextMove, intervalMillis);
}

function getMoves(topCount, fromTower, toTower)
{
  var otherTower = -1;
  for (var ii = 0; ii < 3; ii++) {
    if (ii != fromTower && ii != toTower) {
      otherTower = ii;
      break;
    }
  }

  if (topCount == 1) {
    return [[fromTower, toTower]];
  }

  var movesLess1 = getMoves(topCount - 1, fromTower, otherTower);
  movesLess1.push([fromTower, toTower]);
  var moves = movesLess1.concat(getMoves(topCount - 1, otherTower, toTower));
  return moves;
}

function drawTowers()
{
  drawTower(0);
  drawTower(1);
  drawTower(2);
}

function drawTower(tower)
{
  var widths = disks[tower];
  for (var pos = 0; pos < 15; pos++)
    drawBlock(tower, pos, 19, true);

  var count = widths.length;
  for (var pos = 0; pos < count; pos++) {
    drawBlock(tower, pos, widths[count - 1 - pos]);
  }
}

function move(fromTower, toTower)
{
  var fromDisks = disks[fromTower];
  var toDisks = disks[toTower];
  var top = fromDisks[0];
  fromDisks.splice(0, 1);
  toDisks.splice(0, 0, top);
  drawTower(fromTower);
  drawTower(toTower);
}

function drawBlock(tower, pos, width, erase)
{
  var color;
  if (erase)
    color = "rgb(255,255,255)";
  else if (width % 3 == 0)
    color = "rgb(200,0,0)";
  else if (width % 3 == 1)
    color = "rgb(0,200,0)";
  else if (width % 3 == 2)
    color = "rgb(0,0,200)";

  var centerX = 200 * tower + 100;
  var centerY = 500 - (pos * 10 + 5);
  var halfLen = width * 5;


  ctx.fillStyle = color;
  ctx.fillRect (centerX - halfLen, centerY - 5, 2 * halfLen, 10);
}