function process(s) {
  return isNaN(Number(s)) ? "Bad String" : Number(s);
}

const s = `123`;
const s2 = "abc";
const s3 = `1ab`;
console.log(process(s), process(s2), process(s3));
