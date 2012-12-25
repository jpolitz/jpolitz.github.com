var CELLWIDTH = 40;
var STONERADIUS = CELLWIDTH / 2.5;
var W = 'white';
var w = 'littlewhite';
var B = 'black';
var b = 'littleblack';
var K = 'blank';
var M = 'mark';
var G = 'goodmark';
/*: Context,
    {0-width: { 0-height: W U B U K U M U G}},  // white/black/blank/red/green
    {left|right|top|bottom: boolean}            // wall?
    -> Void */
function drawBoard(ctx, arr, border) {
  var boardWidth = arr[0].length + 1;
  var boardHeight = arr.length + 1;
  var pixelWidth = boardWidth * CELLWIDTH;
  var pixelHeight = boardHeight * CELLWIDTH;
  ctx.moveTo(0,0);
  ctx.fillStyle = "#da8";
  ctx.fillRect(0,0,pixelWidth,pixelHeight);
  ctx.fillStyle = "333";
  if (typeof border === 'undefined') {
    border = { left: false, right: false, top: false, bottom: false };
  }
  if (border.full) {
    border = { left: true, right: true, top: true, bottom: true };
  }
  function getOffset(b) { return b ? 1 : 0; }
  var left = getOffset(border.left);
  var right = getOffset(border.right);
  var top = getOffset(border.top);
  var bottom = getOffset(border.bottom);
  for(var i = left; i < boardWidth; i++) {
    console.log('line');
    ctx.beginPath();
    ctx.moveTo(i * CELLWIDTH, (bottom * CELLWIDTH));
    ctx.lineTo(i * CELLWIDTH, pixelHeight - (bottom * CELLWIDTH));
    ctx.closePath();
    ctx.stroke();
  }
  for(var i = top; i < boardHeight; i++) {
    ctx.beginPath();
    ctx.moveTo((left * CELLWIDTH), i * CELLWIDTH);
    ctx.lineTo(pixelWidth - (right * CELLWIDTH), i * CELLWIDTH);
    ctx.closePath();
    ctx.stroke();
  }
  function doFill(ctx, elt, x, y) {
    console.log("x, y is: ", x, y);
    console.log("elt is: ", elt);
    function draw(color, radius) {
      if (typeof radius === 'undefined') { radius = STONERADIUS; }
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(x,y,radius,0,Math.PI*2,true);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    switch(elt) {
      case B: draw("#333"); break;
      case b: draw("#333", STONERADIUS * .6); break;
      case W: draw("#eee"); break;
      case w: draw("#eee", STONERADIUS * .6); break;
      case M: draw("#f00", STONERADIUS * 0.75); break;
      case G: draw("#0f0", STONERADIUS * 0.75); break;
      case K: break;
    }
  }
  for(var i = 0; i < boardHeight - 1; i++) {
    for(var j = 0; j < boardWidth - 1; j++) {
      console.log("i, j is: ", i, j);
      doFill(ctx,
             arr[i][j],
             (j + 1) * CELLWIDTH,
             (i + 1) * CELLWIDTH);
    }
  }
}
function drawBoardAt(id, board, boundary) {
  drawBoard(document.getElementById(id).getContext('2d'), board, boundary);
}
