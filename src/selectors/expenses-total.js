const getExpenseTotal = (expenses) => {
  const amountArr = expenses.map((expense) => expense.amount);
  if (amountArr.length === 0) {
    return 0;
  } else {
    return amountArr.reduce(
      (accumulator, currentValue) => +accumulator + +currentValue
    );
  }
};

export default getExpenseTotal;
