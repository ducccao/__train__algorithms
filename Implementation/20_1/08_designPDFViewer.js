let log = console.log;

//
function getHeight(h, word) {
  // var index = [];
  var height = [];
  for (let j = 0; j < word.length; j++) {
    for (let i = 0; i < 26; i++) {
      if (String.fromCharCode(i + 97) === word[j]) {
        //  index.push(i);
        height.push(h[i]);
      }
    }
  }
  return height;
}

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
  return word.length * Math.max(...getHeight(h, word));
}

let h = [
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  7,
];

let word = "abc";

log(designerPdfViewer(h, word));

// find the height of each once.
// get maximum height
// count it
// multiply the count and max height
