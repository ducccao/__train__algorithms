let log = console.log;

function hurdleRace(k, h) {
  return k >= Math.max(...h) ? 0 : Math.abs(Math.max(...h) - k);
}

var k = 4;
var h = [1, 6, 3, 5, 2];

hurdleRace(k, h);
