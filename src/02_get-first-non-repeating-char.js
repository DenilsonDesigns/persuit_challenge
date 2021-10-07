/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution(str) {
  // Time: O(2n) => O(n)
  // Where n is the length of `str`, `2n` because we are looping twice consecutively,
  // simplified to O(n)
  // Space: O(m), charMap will have as many entries as there are unique chars in str (m)
  let charMap = {};

  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  for (let char of str) {
    if (charMap[char] === 1) return char;
  }
}

module.exports = solution;
