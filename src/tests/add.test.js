const add = (a, b) => a + b ;

test("add", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});
