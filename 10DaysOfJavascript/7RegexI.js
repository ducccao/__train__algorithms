//const re = /ab+c/g;
const r2 = new RegExp("ab+c", "g");
const d1 = /\d/g;
const t1 = /[a-d]/g;
const t2 = /[^a-d]/g;
const t3 = /[a|b]/g;
const t4 = /^(aeoui)(a-z)(aeoui)$/g;

// g global match
// i ignore case
// m multiline
// u unicode
// y sticky. Matches only from the index indicated
// by the lastIndex property of this regular expression in the target string.

//console.log(re.test("babac"));
//console.log(d1.test("112312312300oo"));
//console.log(t4.test("adasdasdza"));

// Test whether 'learn' is contained at the very beginning of a string

// const re = /^learn/;
// const s1 = "learn regular expressions";
// const s2 = "write regular expressions";

// console.log(re.test(s1));
// console.log(re.test(s2));

// const re = /quick\s(brown).+?(jumps)/gi;
// const str = "The Quick Brown Fox Jumps Over The Lazy Dog";
// const res = re.exec(str);
// console.log(res);

// const re = /see (chapter \d+(\.\d)*)/i;
// const s = `For more information on regular expressions, see chapter 3.4.5.2 and chapter 2.3`;
// console.log(s.match(re));

// const re = /learn/;
// const str1 = "Today, we'll learn about regular expressions.";
// const str2 =
//   "Tomorrow, we'll write regular expressions " +
//   "and learn some complex expressions.";
// const str3 = "We're all done now!";

// console.log("A search for ", re, "returns ", str1.search(re), "\n");
// console.log(str1[13]);

// const re = /(.).*\1/;

// const str1 = "wxyz";
// const str2 = "wxyzw";
// const str3 = "wxyzx";
// const str4 = "wxywz";

// console.log("substring:", str1.match(re));
// console.log("substring:", str2.match(re)[0]);
// console.log("substring:", str3.match(re)[0]);
// console.log("substring:", str4.match(re)[0]);

const re = /^([aeoui]).+\1$/;
console.log(re.test("aewxyzae"));

function regexVar(str) {
  //  ^ => first item matches:
  // () => stores matching value captured within
  // [aeiou] => matches any of the characters in the brackets
  // . => matches any character:
  // + => for 1 or more occurrances (this ensures str length > 3)
  // \1 => matches to previously stored match.
  // \2 looks for matched item stored 2 instances ago
  // \3 looks for matched item stored 3 ago, etc

  //  $ ensures that matched item is at end of the sequence

  let re = /^([aeiou]).+\1$/;
  return re;
}
