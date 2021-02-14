let log = console.log;

// 5 - 5/2 = 2 - 1
// 2*3= 6 - 6/2 = 3 - 2
// 3*3 = 9 - 9/2= 4 - 3

function getNumberOfPeopleWhoLikedTheAd(day) {
  if (day === 1) return Math.floor(5 / 2);
  return Math.floor(getNumberOfPeopleWhoGotTheAdShared(day) / 2);
}

function getNumberOfPeopleWhoGotTheAdShared(day) {
  if (day === 1) return 5;
  return getNumberOfPeopleWhoLikedTheAd(day - 1) * 3;
}

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
  let total__people__who__liked__the__ad = 0;
  for (let i = 1; i <= n; i++)
    total__people__who__liked__the__ad += getNumberOfPeopleWhoLikedTheAd(i);
  return total__people__who__liked__the__ad;
}

log(viralAdvertising(4));
