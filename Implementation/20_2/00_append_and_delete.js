let log = console.log;

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
  log(s, t, k);

  let tem1 = "";
  let tem2 = "";
  let is_diff = false;

  if (s.length <= t.length) {
    if (s.length + t.length > k) {
      return "No";
    }

    for (let i = 0; i < s.length; i++) {
      if (s[i] !== t[i]) {
        // do sth then break
        tem1 = s.slice(i, s.length);
        tem2 = t.slice(i, t.length);
        is_diff = true;
        break;
      }
    }
  } else {
    for (let i = 0; i < t.length; i++) {
      if (s[i] !== t[i]) {
        // do sth then break
        tem1 = s.slice(i, s.length);
        tem2 = t.slice(i, t.length);
        is_diff = true;
        break;
      }
    }
  }

  if (!is_diff) {
    // log(s.length, t.length);
    if (s.length - t.length < k) {
      return "Yes";
    }
  }

  // log(tem1, tem2);

  if (tem1.length + tem2.length === k) {
    return "Yes";
  } else if (s === t && s.length + t.length <= k) {
    return "Yes";
  }
  return "No";
}

let s = "y";
let t = "yu";

let k = 2;

log(appendAndDelete(s, t, k));
