function DecToBin(n) {
  var remainder;
  var bin = "";
  while (n !== 0) {
    remainder = n % 2;
    n = Math.floor(n / 2);
    bin += remainder;
  }
  return bin.split("").reverse().join("");
}

function handleOperation()

function btnsClick(e) {
  const res = document.getElementById("res");
  var t = e.target.textContent;
  res.innerHTML += t;
  console.log(t);
  if (t === "C") {
    res.innerHTML = "";
  } else if (t === "=") {
    if (res.textContent.includes("+")) {
        var s = res.textContent;
        s = s.replace("=", "");
        const holder = s.split("-");
        const calcu = holder.map((h) => parseInt(h, "2"));
        var ret = calcu[0] - calcu[1];
        var retInner = DecToBin(ret);
        res.textContent = retInner === "" ? 0 : retInner;
    } else if (res.textContent.includes("-")) {
      var s = res.textContent;
      s = s.replace("=", "");
      const holder = s.split("-");
      const calcu = holder.map((h) => parseInt(h, "2"));
      var ret = calcu[0] - calcu[1];
      var retInner = DecToBin(ret);
      res.textContent = retInner === "" ? 0 : retInner;
    } else if (res.textContent.includes("*")) {
      var s = res.textContent;
      s = s.replace("=", "");
      const holder = s.split("*");
      const calcu = holder.map((h) => parseInt(h, "2"));
      var ret = calcu[0] * calcu[1];
      var retInner = DecToBin(ret);
      res.textContent = retInner === "" ? 0 : retInner;
    } else if (res.textContent.includes("/")) {
      var s = res.textContent;
      s = s.replace("=", "");
      const holder = s.split("/");
      const calcu = holder.map((h) => parseInt(h, "2"));
      var ret = Math.floor(calcu[0] / calcu[1]);
      var retInner = DecToBin(ret);
      res.textContent = retInner === "" ? 0 : retInner;
    }
  }
}

function main() {
  const btn0 = document.getElementById("btn0");
  const btn1 = document.getElementById("btn1");
  const btnClr = document.getElementById("btnClr");
  const btnEql = document.getElementById("btnEql");
  const btnSum = document.getElementById("btnSum");
  const btnSub = document.getElementById("btnSub");
  const btnMul = document.getElementById("btnMul");
  const btnDiv = document.getElementById("btnDiv");

  const btns = document.getElementsByClassName("btn");
  const res = document.getElementById("res");

  for (let i = 0; i < btns.length; ++i) {
    btns[i].addEventListener("click", btnsClick);
  }
}

main();
