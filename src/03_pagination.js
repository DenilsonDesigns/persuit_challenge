/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution(pageNumber, itemsPerPage, pageData) {
  let itemsPaginated = [];

  for (let i = 0; i < pageData.length; i += itemsPerPage) {
    itemsPaginated.push(pageData.slice(i, i + itemsPerPage));
  }

  if (pageNumber > itemsPaginated.length) {
    return null;
  }

  if (pageNumber <= 0) {
    return itemsPaginated[0];
  }

  return itemsPaginated[pageNumber - 1];
}

const data = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

module.exports = { solution, data };
