/*
@title: The Mona Lisa
@author: xevaly
@snapshot: monalisa.png
*/

const width = 55;
const height = 80;

const amount = bt.randIntInRange(25, 50)
const eyeDirection = bt.randIntInRange(1,3);

setDocDimensions(width, height);

const finalLines = [];

let data = ` |34#_|7#* |27#_|1#,|2#a|1#d|1#8|10#b|2#a|1#,|1#_|1#* |24#,|1#a|1#d|1#8|5#I|1#8|15#b|1#a|1#,|1#* |22#,|1#8|8#I|1#8|20#a|1#,|1#* |20#,|1#d|1#8|9#I|1#8|22#b|1#,|1#* |19#d|1#8|5#P|2#"|4# |1#"|2#Y|2#8|20#b|1#,|1#* |17#,|1#d|1#8|2#"|1#'|1#_|2#,|2#-|8#,|4#.|1#;|1#Z|3#Y|1#8|13#,|1#* |16#,|1#8|1#I|2#l|1#'|1#"|1# |16#;|2#l|1#"|1#Z|3#I|3#8|10#,|1#* |15#,|1#I|1#8|2#l|1#;|1#'|1# |18#;|1#l|1#Z|5#8|3#I|3#8|7#,|1#* |13#,|1#I|2#8|2#Z|1#l|1#;|1#.|1# |18#;|1#l|2#Z|5#8|6#I|1#8|6#,|1#* |12#,|1#I|2#8|3#Z|1#l|1#;|1#.|1# |16#.|1#;|5#l|3#Z|3#8|6#I|1#8|4#b|1#* |11#,|1#I|2#8|4#Z|1#;|2# |17#\`|1#;|5#'|2#l|2#Z|2#8|7#I|1#8|4#,|1#* |11#I|2#8|5#Z|1#;|1#'|1# |24#.|1#;|1#l|1#Z|3#8|7#I|1#8|3#b|1#* |11#I|2#8|5#Z|1#;|1# |1#_|1#,|1#a|3#,|1# |6#.|1#,|1#a|5#,|1#_|2#.|1#l|1#;|1#l|2#Z|3#8|8#I|1#8|3#* |11#I|2#8|5#I|1#Z|9#,|1# |2#.|1#Z|14#;|1#l|2#Z|2#8|8#I|1#8|3#,|1#* |11#I|2#8|5#I|1#Z|2#<|@@@2#>|1#Z|1#|1# |2#I|1#Z|3#<|@@@2#>|1#Z|4#;|2#l|2#Z|2#8|9#I|1#8|2#I|1#* |10#,|1#I|2#8|5#;|1# |3#\`|1#"|3# |1#;|1#I|1# |2#I|1#Z|2#;|1# |1#\`|1#"|3# |5#;|2#l|2#Z|1#8|10#I|1#8|3#* |10#I|2#8|6#l|1# |12#\`|1#;|2# |10#.|1#;|1#l|2#Z|2#8|10#I|1#8|3#,|1#* |9#,|1#I|2#8|6#Z|1#;|1# |11#;|3# |8#.|1#;|2#l|2#Z|3#8|10#I|1#8|3#I|1#* |9#I|3#8|6#Z|1#l|1#;|1# |4#.|2#,|1# |3#\`|1#;|2# |7#,|1#;|2#l|3#Z|3#8|11#I|1#8|3#* |9#I|2#8|8#Z|1#;|2#.|3#;|1#(|1#_|1# |4#_|1#)|1# |6#,|1#;|3#l|2#Z|4#8|11#I|1#8|3#,|1#* |9#I|2#8|8#Z|1#l|1#;|5#'|1# |1#\`|1#-|2#'|1#Z|1#;|1#.|1# |3#.|1#,|1#;|4#l|2#Z|4#8|11#I|1#8|3#b|1#* |9#]|1#I|1#8|9#Z|1#;|4#'|1# |3#"|1#;|1#l|6#;|1#.|2#;|3#l|3#Z|4#8|11#I|1#8|4#,|1#* |9#I|2#8|9#Z|1#l|1#.|1#;|2#"|1#Y|1#8|2#b|1#d|1#8|3#P|1#"|1#;|2#,|1#.|2#;|1#l|3#Z|5#8|11#I|1#8|4#I|1#* |9#I|2#8|10#Z|1#l|1#;|1#.|1#;|1# |1#\`|1#"|1#P|3#"|1#;|3#,|1#.|2#;|1#l|3#Z|7#8|11#I|1#8|5#* |9#I|2#8|12#Z|1#l|1#;|2#.|1# |1#\`|1#;|3#l|1#;|4#l|3#Z|8#W|1#8|11#I|1#8|5#* |9#\`|1#I|2#8|13#Z|1#l|1#;|1#.|1# |4#,|1#;|2#l|3#Z|8#W|1#M|1#Z|1#8|11#I|1#8|5#* |10#I|2#8|16#Z|1#b|1#a|2#l|3#Z|9#W|2#M|1#Z|3#8|10#I|1#8|6#,|1#* |10#\`|1#I|2#8|17#b|1#"|1#W|2#Z|5#W|3#M|2#Z|6#I|1#8|9#I|1#8|6#b|1#* |11#\`|1#I|2#8|17#;|1#Z|2#M|6#Z|8#l|2#I|1#8|9#I|1#8|7#* |12#\`|1#I|2#8|16# |1#\`|1#;|1#l|1#Z|11#l|5#8|9#I|1#8|7#,|1#* |13#I|2#8|16#,|1# |1#\`|1#;|1#l|3#Z|4#l|6#;|2#.|1#Y|1#8|8#I|1#8|7#b|1#,|1#* |12#,|1#I|2#8|16#b|1# |3#.|1#;|2#l|7#;|3#.|1#;|1#.|2#8|8#I|1#8|8#b|1#,|1#* |12#I|2#8|15#P|1#Z|1#I|1#;|1#.|1# |2#.|1#\`|1#;|3#.|1#;|3#.|2#;|1# |1#.|3#8|8#I|1#8|10#,|1#* |12#I|2#8|12#P|1#Z|1#;|2#'|1#;|2#.|1# |3#;|1#.|1# |1#.|1#;|1#.|1# |2#.|1#;|1#.|1# |1#.|2# |1#Y|1#8|7#I|1#8|11#b|1#,|1#* |11#,|1#I|2#8|9#P|1#Z|1#;|2#'|1# |24#\`|1#8|7#I|1#8|13#b|1#,|1#* |11#I|2#8|9#'|1# |30#8|6#I|1#8|16#b|1#* |10#,|1#I|2#8|9# |30#,|1#8|6#I|1#8|17#* |9#,|1#d|1#8|11# |30#d|1#8|6#I|1#8|10#Z|7#* |6#,|1#a|1#d|1#8|12#I|1# |30#8|7#I|1#8|4#Z|13#* |4#,|1#d|1#8|15#'|1# |30#8|6#I|1#Z|18#* |2#,|1#d|1#8|12#P|1#'|1#8|1#P|1#'|1# |31#Y|1#8|3#Z|21#* |1#,|1#8|13#,|1# |2#"|1# |33#,|1#Z|24#*d|1#8|15#,|1# |32#,|1#Z|27#*8|18#a|1#,|1# |6#_|1# |20#,|1#Z|20#8|9#*8|21#b|1#a|1#,|1#_|1#d|1#'|1# |18#,|1#Z|17#8|14#*8|28#b|3#a|3#,|3#_|6#,|1#Z|15#8|18#*8|41#Z|15#8|21#*8|40#Z|14#8|23#*8|39#Z|14#8|24#*8|37#Z|14#8|26#*8|37#Z|14#8|26#*8|36#Z|14#8|14# |1#B|1#Y|1# |1#X|1#E|1#V|1#A|1#L|1#Y|1# |1#8|2#*8|35#Z|14#8|14# |2#1|1#/|1#1|1#0|1#/|1#2|1#0|1#2|1#4|1# |1#8|2#*8|34#Z|14#8|29#`;

function setEyes() {
  let s = `1# |1# |1# |`;
  s = s.replace(RegExp("^(?:.*?" + ' ' + "){" + eyeDirection + "}"), x => x.replace(RegExp(' ' + "$"), 'O'));
  data = data.replaceAll('@@@', s);
}

setEyes()

const scaleFactor = 0.206;
const lineSpacing = 0.59;
const letterSpacing = 2.8;


function decodeData(data) {
  let output = '';
  let index = 0;
  while (index < data.length) {
    let char = data[index];

    if (char === '*') {
      output += '\n';
      index++;
    } else if (char === '|') {
      index++;
      let numStr = '';
      while (index < data.length && /[0-9]/.test(data[index])) {
        numStr += data[index];
        index++;
      }

      if (data[index] === '#') {
        index++;
        let count = parseInt(numStr, 10);

        if (index < data.length && data[index] !== '*' && data[index] !== '|' && data[index] !== '\n') {
          let repeatChar = data[index];
          index++;
          output += repeatChar.repeat(count);
        } else {
          output += ' '.repeat(count);
        }
      } else {
        console.log(data[index - 5], data[index - 4], data[index - 3], data[index - 2], data[index - 1], data[index], data[index + 1])
        console.error("Invalid format: '#' expected after number");
        break;
      }
    } else {
      output += char;
      index++;
    }
  }
  return output;
}

const asciiArt = decodeData(data);

const lines = asciiArt.split('\n');

let startX = 5;
let startY = height - 7;

lines.forEach((line, index) => {
  const x = startX;
  const y = startY - index * scaleFactor * 10 * lineSpacing;

  const textPolylines = bt.text(line, [x, y], scaleFactor, [
    letterSpacing,
    lineSpacing,
  ]);

  finalLines.push(...textPolylines);
});
// Draw all lines
drawLines(finalLines);


// box
drawLines([
  [
    [5, height - 7],
    [5, height - 73],
    [50, height - 73],
    [50, height - 7],
    [5, height - 7],
  ]
])

let shards = []
let startPoint;
startPoint = randomPointOnEdgeOrShard();


function randomPointOnEdgeOrShard() {
  if (shards.length === 0 || !bt.randIntInRange(0, 1)) {
    // edge point
    let edge = bt.randIntInRange(0, 1) ? true : false;
    let side = bt.randIntInRange(0, 1) ? true : false;
    return [
      edge ? bt.randIntInRange(5, 50) : side ? 5 : 50,
      edge ? (side ? 7 : 73) : bt.randIntInRange(7, 73),
    ];
  } else {
    // shard point
    const randomShard = shards[bt.randIntInRange(0, shards.length - 1)];
    const [p1, p2] = randomShard;


    const t = bt.rand();
    return [
      p1[0] + t * (p2[0] - p1[0]),
      p1[1] + t * (p2[1] - p1[1]),
    ];
  }
}




function doLinesIntersect(line1, line2) {
  const [p1, p2] = line1;
  const [q1, q2] = line2;

  function crossProduct(a, b) {
    return a[0] * b[1] - a[1] * b[0];
  }

  function subtractPoints(a, b) {
    return [a[0] - b[0], a[1] - b[1]];
  }

  const r = subtractPoints(p2, p1);
  const s = subtractPoints(q2, q1);
  const rxs = crossProduct(r, s);
  const qpxr = crossProduct(subtractPoints(q1, p1), r);

  if (rxs === 0 && qpxr === 0) {
    // Collinear case: check for overlap
    return null;
  }
  if (rxs === 0 && qpxr !== 0) {
    return null; // Parallel but not collinear
  }

  const t = crossProduct(subtractPoints(q1, p1), s) / rxs;
  const u = crossProduct(subtractPoints(q1, p1), r) / rxs;

  if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
    return [p1[0] + t * r[0], p1[1] + t * r[1]]; // Intersection point
  }

  return null; // No intersection
}

function calculateDistance(pointA, pointB) {
  return Math.sqrt(
    Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2)
  );
}

Array(amount).fill(1).map((x, y) => x + y).forEach(i => {
  let randomPoint = randomPointOnEdgeOrShard();
  let newLine = [startPoint, randomPoint];

  let nearestIntersection = null;
  let shortestDistance = Infinity;

  // intersection with shard
  for (const shard of shards) {
    const intersection = doLinesIntersect(newLine, shard);
    if (intersection) {
      const distance = calculateDistance(startPoint, intersection);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestIntersection = intersection;
      }
    }
  }
  // closer line?
  if (nearestIntersection) {
    newLine = [startPoint, nearestIntersection];
  }

  drawLines([newLine]);
  shards.push(newLine);

  startPoint = randomPointOnEdgeOrShard();
});
