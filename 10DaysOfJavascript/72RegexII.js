const checker = ["Mr.", "Mrs."];
const re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;

console.log(re.test("Er.Dr"));
