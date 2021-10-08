const solution = require("./04_remote-data");

test("all users have been accounted for", async () => {
  // Arrange
  const expected = 10;

  // Act
  const actual = await solution();

  // Assert
  expect(actual.length).toBe(expected);
});

test("all objects in array have `username` and `completed` properties", async () => {
  const actual = await solution();

  expect(actual.every((obj) => typeof obj.username !== "undefined")).toBe(true);
  expect(actual.every((obj) => typeof obj.completed !== "undefined")).toBe(
    true
  );
});

test("`username` property is of type `string`", async () => {
  const actual = await solution();

  expect(actual.every((obj) => typeof obj.username === "string")).toBe(true);
});

test("`completed` property is of type `number`", async () => {
  const actual = await solution();

  expect(actual.every((obj) => typeof obj.completed === "number")).toBe(true);
});

// @NOTE: Jest reports code coverage of 100% for this file, but I disagree, in real world
// I would write unit tests for all functions defined in file.
