/**
 * This function returns the values of the input object as an array
 * @param {object} obj
 */
function solution(obj) {
  // Time: O(n): where n is the number of entries in `obj`
  return Object.values(obj).map((el) => el);
}

module.exports = solution;
