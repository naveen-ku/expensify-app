import moment from "moment";
import selectExpenses from "../../selectors/expenses";

const expenses = [
	{
		id: "1",
		description: "Water",
		note: "",
		amount: "300",
		createdAt: moment(0).valueOf(),
	},
	{
		id: "2",
		description: "Rent",
		note: "",
		amount: "3000",
		createdAt: moment(0).subtract(4, "days").valueOf(),
	},
	{
		id: "3",
		description: "Food",
		note: "",
		amount: "800",
		createdAt: moment(0).add(4, "days").valueOf(),
	},
];

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should filter by startDate", () => {
    const filters = {
        text:"",
        sortby:"date",
        startDate:moment(0),
        endDate:undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0], expenses[2]]);
})

test("should filter by endDate",() => {
    const filters = {
			text: "",
			sortBy: "date",
			startDate: undefined,
			endDate: moment(0).subtract(2,"days"),
        };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1]]);
})

test("should filter by date", () => {
    const filters = {
        text:"",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test("should filter by amount", () => {
    const filters = {
        text:"",
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})