const btns = document.getElementById("btns");
const temp = document.getElementById("temp");

function initValueButton() {
  return [1, 2, 3, 6, 9, 8, 7, 4];
}
function rotateRightArray(a) {
  const t = a[a.length - 1];
  for (let i = a.length - 1; i >= 0; --i) {
    a[i] = a[i - 1];
  }
  a[0] = t;

  return a;
}

function createNineButton() {
  for (let i = 1; i <= 9; ++i) {
    const btnID = `btn${i}`;
    const btnClass = `btn`;

    const btni = document.createElement("button");
    btni.id = btnID;
    btni.classList.add(btnClass);

    btns.appendChild(btni);
  }

  var valueBtnArr = initValueButton();
  console.log(valueBtnArr);

  for (let i = 1; i <= 9; i++) {
    const btni = document.getElementById(`btn${i}`);
    if (i === 1) {
      btni.innerHTML = valueBtnArr[0];
    }
    if (i === 2) {
      btni.innerHTML = valueBtnArr[1];
    }
    if (i === 3) {
      btni.innerHTML = valueBtnArr[2];
    }

    if (i === 4) {
      btni.innerHTML = valueBtnArr[7];
    }
    if (i === 6) {
      btni.innerHTML = valueBtnArr[3];
    }
    if (i === 7) {
      btni.innerHTML = valueBtnArr[6];
    }

    if (i === 8) {
      btni.innerHTML = valueBtnArr[5];
    }
    if (i === 9) {
      btni.innerHTML = valueBtnArr[4];
    }
  }
  const btn5 = document.getElementById("btn5");
  btn5.innerHTML = 5;
  btn5.addEventListener("click", (e) => {
    valueBtnArr = rotateRightArray(valueBtnArr);
    console.log(valueBtnArr);
    temp.innerHTML += "<br/>";

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");

    for (let i = 1; i <= 9; i++) {
      const btni = document.getElementById(`btn${i}`);
      if (i === 1) {
        btni.innerHTML = valueBtnArr[0];
      }
      if (i === 2) {
        btni.innerHTML = valueBtnArr[1];
      }
      if (i === 3) {
        btni.innerHTML = valueBtnArr[2];
      }

      if (i === 4) {
        btni.innerHTML = valueBtnArr[7];
      }
      if (i === 6) {
        btni.innerHTML = valueBtnArr[3];
      }
      if (i === 7) {
        btni.innerHTML = valueBtnArr[6];
      }

      if (i === 8) {
        btni.innerHTML = valueBtnArr[5];
      }
      if (i === 9) {
        btni.innerHTML = valueBtnArr[4];
      }
    }
  });
}

function main() {
  createNineButton();
}

main();
