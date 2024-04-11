function hasTargetSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] + array[j] === target) {
              return true;
          }
      }
  }
  return false
}


// hasTargetSum([3, 8, 12, 4, 11, 7], 10)
/* 
  Write the Big O time complexity of your function here
 o(n^2)
*/

/* 
  Add your pseudocode here
for loop started for i 
for loop started for j to equal i + 1
tries every combination of numbers to see if there sum equals target, return true if it does
return false if no combos return true.
*/

/*
  Add written explanation of your solution here
   using a for loop inside a for loop to iterate over one value first and 
 compare it to each of the other values in the array by adding them together to
 see if there sum is equal to the target. If they all turn out to be false, the first iterator 
 grabs the next indexed number and compares it to all of the other numbers like
 the first time around (to see if there sum equals the target). If all of these combinations
 don't equal the target, return false.
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 8, 34, 87, 12, 45, 66, 13, 41], 78));
}

module.exports = hasTargetSum;
