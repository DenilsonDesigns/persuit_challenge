/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution(str) {
  const charMap = {};

  for (const char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  for (const char of str) {
    if (charMap[char] === 1) return char;
  }
}

module.exports = solution;
