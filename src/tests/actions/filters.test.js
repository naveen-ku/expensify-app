import moment from "moment";
import {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("should setup setTextFilter with default values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should setup setTextFilter with provided values", () => {
  const action = setTextFilter("random text");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "random text",
  });
});

test("should setup setStartDate", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should setup setEndDate", () => {
  const action = setEndDate(moment(9));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(9),
  });
});

test("should setup sortByAmount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should setup sortByDate", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});
