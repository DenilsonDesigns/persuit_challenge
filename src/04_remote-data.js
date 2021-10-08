/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
const axios = require("axios");

const plaxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

async function solution() {
  const [todos, users] = await fetchData();
  const userMap = buildMapFromArr(users, "id", "username");
  const todoMap = buildMapFromArrFilter(todos, "userId", "completed");

  return buildCompletedTodoList(userMap, todoMap);
}

function buildCompletedTodoList(userObj, todoObj) {
  const rArr = [];

  for (const [k, v] of Object.entries(userObj)) {
    rArr.push({
      username: v,
      completed: todoObj[k],
    });
  }

  return rArr;
}

function fetchData() {
  return Promise.all([plaxios.get("/todos"), plaxios.get("/users")]).then(
    (res) => {
      return [res[0].data, res[1].data];
    }
  );
}

function buildMapFromArr(obj, key, value) {
  const rMap = {};

  for (const entry of obj) {
    rMap[entry[key]] = entry[value];
  }

  return rMap;
}

function buildMapFromArrFilter(obj, key, filterCond) {
  const rMap = {};
  for (const entry of obj) {
    if (entry[filterCond]) {
      rMap[entry[key]] ? rMap[entry[key]]++ : (rMap[entry[key]] = 1);
    }
  }

  return rMap;
}

module.exports = solution;
