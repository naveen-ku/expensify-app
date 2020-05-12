import moment from "moment"

export default [
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
