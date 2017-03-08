var args = process.argv.slice(2);

var charactersArr = args[0].replace(/ /g, '').split("");
var letterCountList = {}


function letterCount(charactersArr) {
  for (var i = 0; i < charactersArr.length; i++) {
    if (letterCountList[charactersArr[i]]) {
      letterCountList[charactersArr[i]].push(i);
    } else {
      letterCountList[charactersArr[i]] = [i];
    }
  }
}

letterCount(charactersArr);
console.log(letterCountList);