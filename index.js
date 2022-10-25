function isPalindrome(word) {
  // Write a function to where if the input is a palindrome then it will return true if not then it will return false
  const length = word.length;
  for (let w = 0; w < length/2; w++) {
    if (word[w] !== word[length - 1 - w]) {
      return false
    }
  }
  return true
}

/* 
  function
    inside function
    if the string that is provided is a palindrome the function will return true
    else the function will return false  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
