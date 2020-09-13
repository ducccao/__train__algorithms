let log = console.log;

function checkout(s) {
  let s1 = "abcd";
  let s2 = "abcdef";
  // log(s2.endsWith(s1, 3));
  log(s2.includes(s1, 0));
  //  log(s2.indexOf(s1, 0));
}

function process(s, t, k) {
  let s3 = s;
  let s4 = t;

  let sub_pos = 0;

  if (s.length === t.length) {
    return k >= s.length + t.length ? "Yes" : "No";
  }

  if (s.length > t.length) {
    s3 = s;
    s4 = t;
    // aaaaaaaaaa- aaaaa- 7
    // aaaaa aaaaa

    if (s3.includes(s4, 0)) {
      if (k < s3.length) {
        let sub_pos = s4.length;
        s3 = s3.substr(sub_pos, s3.length);
        return s3 === s4 ? "Yes" : "No";
      }
      return k >= s.length + t.length ? "Yes" : "No";
    }

    for (let i = 0; i < t.length; i++) {
      if (s[i] !== t[i]) {
        sub_pos = i;
        break;
      }
    }
    // log(sub_pos);

    // log(sub_pos);
    s3 = s3.substr(sub_pos, s3.length - 1);
    s4 = s4.substr(sub_pos, s4.length - 1);
    // log(s3);
    // log(s4);
    if (k - s3.length === s4.length) {
      return "Yes";
    }

    return "No";
  } else {
    s3 = t;
    s4 = s;

    // y - yu - 2
    // yu

    //  zzzzzzz -  zzzzz-4
    // zzz
    if (s3.includes(s4, 0)) {
      if (k < s3.length) {
        let sub_pos = s4.length;
        s3 = s3.substr(sub_pos, s3.length);
        return s3 === s4 ? "No" : "Yes";
      }
      return k >= s.length + t.length ? "No" : "Yes";
    }

    for (let i = 0; i < t.length; i++) {
      if (s[i] !== t[i]) {
        sub_pos = i;
        break;
      }
    }
    // log(sub_pos);

    // log(sub_pos);
    s3 = s3.substr(sub_pos, s3.length - 1);
    s4 = s4.substr(sub_pos, s4.length - 1);
    // log(s3);
    // log(s4);
    if (k - s3.length === s4.length) {
      return "No";
    }

    return "Yes";
  }
}

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
  return process(s, t, k);
}

let s = "y";
let t = "yu";
let k = 2;

log(appendAndDelete(s, t, k));

// abcdef  - abc - 3
// abc - yes

// ashley - ash - 2
// ashl - no

//
