import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import toJSON from "enzyme-to-json";

test("should correctly render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={99} />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
    const wrapper = shallow(
      <ExpensesSummary expenseCount={10} expensesTotal={999} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  