const { consoleLog } = require("mocha/lib/reporters/base");

function hasTargetSum(array, target) {
  const seenNumbers ={}
  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}
  
  // Write your algorithm here


/* 
  Write the Big O time complexity of your function here
  Runtime: 0(n^2)
  Space: 0(n)

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  hasTargetSum ([1,2,3,4], 6)
  seeNumbers = {}
  1: true
  2:True
  3: True
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("")

  console.log("Expecting: false")
  console.log("=>", hasTargetSum ([4], 4))

  console.log("")

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6))
}

module.exports = hasTargetSum;
