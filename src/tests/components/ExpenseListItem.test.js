import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import toJSON from "enzyme-to-json";

test("should render expense list items with details", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
