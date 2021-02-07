function getVowels(s) {
  return s.match(/[aeoui]/g);
}

function getConsonant(s) {
  return s.match(/(?![aeoui])[a-z]/gi);
}

function logArray(a) {
  for (let i = 0; i < a.length; ++i) console.log(a[i]);
}

function vowelsAndConsonants(s) {
  const vowels = getVowels(s);
  const consonants = getConsonant(s);
  logArray(vowels);
  logArray(consonants);
}

vowelsAndConsonants("javascript");
