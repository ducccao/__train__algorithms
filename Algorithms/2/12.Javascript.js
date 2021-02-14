function joinedLogger(level, sep) {
  return function f(...s) {
    var ret = "";
    for (let o of s) {
      if (o.level >= level) {
        ret = ret.concat(o.text, sep);
      }
    }
    ret = ret.substr(0, ret.length - 1);
    return ret;
  };
}

function main() {
  const messages = [
    { level: 40, text: "foo" },
    { level: 90, text: "bar" },
    { level: 20, text: "baz" },
    { level: 21, text: "bax" },
  ];
  const level = 21;
  const sep = ";";
  const myLog = joinedLogger(level, sep);
  myLog(...messages);
}

main();
