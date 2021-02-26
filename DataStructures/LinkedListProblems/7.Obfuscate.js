"use strict";
const _0xe4a0 = [
  "head",
  "1765nFOuCX",
  "217383GUDCXN",
  "utf-8",
  "SIGINT",
  "log",
  "702XbrWMA",
  "1rZalDS",
  "/ret.txt",
  "write",
  "createWriteStream",
  "669222cOOXyF",
  "422261uUSydd",
  "split",
  "stdin",
  "1WlnYZh",
  "data",
  "743593jptWix",
  "830970bWMKmx",
  "End!",
  "replace",
  "resume",
  "1265106KQDxdc",
  "tail",
  "insertNode",
  "next",
];
const _0x5d1b = function (_0x3c4e59, _0x22d65c) {
  _0x3c4e59 = _0x3c4e59 - 0x1e6;
  let _0xe4a035 = _0xe4a0[_0x3c4e59];
  return _0xe4a035;
};
const _0x1af3a3 = _0x5d1b;
(function (_0x49d87d, _0x275285) {
  const _0x423b79 = _0x5d1b;
  while (!![]) {
    try {
      const _0x3475e9 =
        parseInt(_0x423b79(0x1f6)) +
        parseInt(_0x423b79(0x1e6)) * -parseInt(_0x423b79(0x1eb)) +
        parseInt(_0x423b79(0x1fb)) * parseInt(_0x423b79(0x1ec)) +
        -parseInt(_0x423b79(0x1f4)) * -parseInt(_0x423b79(0x1e7)) +
        parseInt(_0x423b79(0x1f7)) +
        -parseInt(_0x423b79(0x1f1)) +
        -parseInt(_0x423b79(0x1f0));
      if (_0x3475e9 === _0x275285) break;
      else _0x49d87d["push"](_0x49d87d["shift"]());
    } catch (_0x3bfc73) {
      _0x49d87d["push"](_0x49d87d["shift"]());
    }
  }
})(_0xe4a0, 0xb160b);
const fs = require("fs");
process[_0x1af3a3(0x1f3)][_0x1af3a3(0x1fa)](),
  process[_0x1af3a3(0x1f3)]["setEncoding"](_0x1af3a3(0x1e8));
let inputString = "",
  currentLine = 0x0;
process["stdin"]["on"](_0x1af3a3(0x1f5), (_0x12b684) => {
  inputString += _0x12b684;
}),
  process["on"](_0x1af3a3(0x1e9), (_0x2b36ef) => {
    const _0x3c0a01 = _0x1af3a3;
    (inputString = inputString[_0x3c0a01(0x1f9)](/\s*$/, "")
      [_0x3c0a01(0x1f2)]("\x0a")
      ["map"]((_0x4fa156) => _0x4fa156[_0x3c0a01(0x1f9)](/\s*$/, ""))),
      console[_0x3c0a01(0x1ea)](_0x3c0a01(0x1f8)),
      main();
  });
function readLine() {
  return inputString[currentLine++];
}
function printSinglyLinkedList(_0x3fb5f8, _0x56dd7b, _0x12d111) {
  const _0x568ef6 = _0x1af3a3;
  while (_0x3fb5f8 != null) {
    console[_0x568ef6(0x1ea)](_0x3fb5f8[_0x568ef6(0x1f5)]),
      (_0x3fb5f8 = _0x3fb5f8[_0x568ef6(0x1fe)]),
      _0x3fb5f8 != null && _0x12d111[_0x568ef6(0x1ee)](_0x56dd7b);
  }
}
class SinglyLinkedList {
  constructor() {
    const _0x30b6f3 = _0x1af3a3;
    (this[_0x30b6f3(0x1ff)] = null), (this["tail"] = null);
  }
  ["insertNode"](_0x114fe4) {
    const _0xabf538 = _0x1af3a3,
      _0x2b40c7 = new SinglyLinkedListNode(_0x114fe4);
    this["head"] === null
      ? ((this[_0xabf538(0x1ff)] = _0x2b40c7),
        (this[_0xabf538(0x1fc)] = _0x2b40c7))
      : (this[_0xabf538(0x1fc)][_0xabf538(0x1fe)] = _0x2b40c7),
      (this[_0xabf538(0x1fc)] = _0x2b40c7);
  }
}
class SinglyLinkedListNode {
  constructor(_0x56a28f) {
    const _0x2216b1 = _0x1af3a3;
    (this[_0x2216b1(0x1f5)] = _0x56a28f), (this["next"] = null);
  }
}
function logll(_0x50d263) {
  const _0x3c613c = _0x1af3a3;
  var _0x28a264 = _0x50d263;
  while (_0x28a264 !== null) {
    console[_0x3c613c(0x1ea)](_0x28a264[_0x3c613c(0x1f5)]),
      (_0x28a264 = _0x28a264[_0x3c613c(0x1fe)]);
  }
}
function lengthList(_0x401a9e) {
  const _0x3db1d1 = _0x1af3a3;
  let _0x1b1a77 = 0x0;
  for (
    var _0x52a735 = _0x401a9e;
    _0x52a735 !== null;
    _0x52a735 = _0x52a735[_0x3db1d1(0x1fe)]
  ) {
    _0x1b1a77++;
  }
  return _0x1b1a77;
}
function CompareLists(_0x24625f, _0x3047ce) {
  const _0x1e05f6 = _0x1af3a3,
    _0x5f0c89 = lengthList(_0x24625f),
    _0x4db618 = lengthList(_0x3047ce);
  if (_0x5f0c89 !== _0x4db618) return 0x0;
  var _0x46addd = 0x1;
  for (
    let _0x26d77 = _0x24625f, _0x217d80 = _0x3047ce;
    _0x26d77 !== null, _0x217d80 !== null;
    _0x26d77 = _0x26d77[_0x1e05f6(0x1fe)], _0x217d80 = _0x217d80["next"]
  ) {
    if (_0x26d77["data"] !== _0x217d80["data"]) {
      _0x46addd = 0x0;
      break;
    }
  }
  return _0x46addd;
}
function main() {
  const _0x27314f = _0x1af3a3,
    _0x59052e = fs[_0x27314f(0x1ef)](__dirname + _0x27314f(0x1ed)),
    _0x5efaef = parseInt(readLine(), 0xa);
  for (let _0x588dbd = 0x0; _0x588dbd < _0x5efaef; _0x588dbd++) {
    const _0x1b019d = parseInt(readLine(), 0xa);
    let _0x363241 = new SinglyLinkedList();
    for (let _0x296af7 = 0x0; _0x296af7 < _0x1b019d; _0x296af7++) {
      const _0x394db3 = parseInt(readLine(), 0xa);
      _0x363241["insertNode"](_0x394db3);
    }
    const _0x51b18e = parseInt(readLine(), 0xa);
    let _0x2dc9e0 = new SinglyLinkedList();
    for (let _0x18ec3e = 0x0; _0x18ec3e < _0x51b18e; _0x18ec3e++) {
      const _0x376f50 = parseInt(readLine(), 0xa);
      _0x2dc9e0[_0x27314f(0x1fd)](_0x376f50);
    }
    let _0x12b6b7 = CompareLists(
      _0x363241[_0x27314f(0x1ff)],
      _0x2dc9e0[_0x27314f(0x1ff)]
    );
    _0x59052e[_0x27314f(0x1ee)]((_0x12b6b7 ? 0x1 : 0x0) + "\x0a");
  }
  _0x59052e["end"]();
}
