import { addExpense, editExpense, removeExpense } from "../../actions/expenses";



test("should return remove expense action object", () => {
  const action = removeExpense({ id: "123qwerty" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123qwerty",
  });
});

test("should return edit expense action object", () => {
  const action = editExpense("qwertyuiop", { note: "new note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "qwertyuiop",
    updates: { note: "new note" },
  });
});

test("should set up add expense action object with provided values ", () => {
  const expenseData = {
    description: "Rent",
    amount: 5000,
    createdAt: 1000000,
    note: "This was last month",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String),
    },
  });
});
