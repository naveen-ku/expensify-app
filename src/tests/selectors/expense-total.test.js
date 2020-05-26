import getExpenseTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses",() => {
    const total = getExpenseTotal([]);
    expect(total).toBe(0);
})

test("should currectly add a single expense",() => {
    const total = getExpenseTotal([{amount:4}]);
    expect(total).toBe(4);
})

test("should currectly add a multiple expenses",() => {
    const total = getExpenseTotal(expenses);
    expect(total).toBe(4100);
})