function getPhoneBookString(fx) {
  let phoneBookstr = [];

  for (let i = 1; i <= +fx[0]; ++i) {
    phoneBookstr.push(fx[i]);
  }
  return phoneBookstr;
}

function getQuery(fx, phoneBookStr) {
  let query = [];
  const staPos = fx.indexOf(phoneBookStr[phoneBookStr.length - 1]);
  const endPos = staPos + +fx[0];

  for (let i = staPos + 1; i < endPos + 1; ++i) {
    query.push(fx[i]);
  }
  return query;
}

function processData(fx) {
  //Enter your code here
  let phoneBookStr = getPhoneBookString(fx);
  let query = getQuery(fx, phoneBookStr);
  let spliter = phoneBookStr.map((p) => {
    return p.split(" ");
  });

  let phoneBook = spliter.map((p) => {
    return {
      name: p[0],
      phone: p[1],
    };
  });

  for (q of query) {
    let f = 0;
    for (pb of phoneBook) {
      if (pb.name === q) {
        console.log(`${pb.name}=${pb.phone}`);
        f = 1;
      }
    }
    if (f === 0) {
      console.log("Not found");
    }
  }
}

function f(x) {
  return x.split("\n");
}

const x = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

const output = `sam=99912222
Not found
harry=12299933`;

processData(f(x));
