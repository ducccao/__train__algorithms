const btns = document.getElementById("btns");
const temp = document.getElementById("temp");

function initValueButton() {
  return [1, 2, 3, 6, 9, 8, 7, 4];
}
function rotateRightArray(a) {
  //const temp = a[0];
  for (let i = 0; i < a.length; ++i) {
    a[i + 1] = a[i];
  }
  // a[a.length - 1] = temp;

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

  for (let i = 0; i < valueBtnArr.length; ++i) {
    temp.innerHTML += `${valueBtnArr[i]}` + " ";
  }

  const btn5 = document.getElementById("btn5");
  btn5.addEventListener("click", (e) => {
    valueBtnArr = rotateRightArray(valueBtnArr);

    console.log(valueBtnArr);
    temp.innerHTML = "";
    for (let i = 0; i < valueBtnArr.length; ++i) {
      temp.innerHTML += `${valueBtnArr[i]}` + " ";
    }
  });
}

function main() {
  createNineButton();
}

main();
