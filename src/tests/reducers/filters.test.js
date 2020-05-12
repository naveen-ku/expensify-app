import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values",() => {
    const state = filtersReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual({
		text: "",
		sortBy: "date",
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month"),
	});
})

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined,{type:"SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe("amount")
})

test("should set sortBy to date", () => {
    const currentState={
        text:"",
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
    const action = {type:"SORT_BY_DATE"}
    const state = filtersReducer(currentState,action)
    expect(state.sortBy).toBe("date")
})

test("should setup text filter", () =>{
    const text = "This is my filter"
    const action = {type:"SET_TEXT_FILTER", text:text}
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe("This is my filter")
})

test("should setup startDate filter", () => {
    const startDate = "123"
    const action ={type:"SET_START_DATE", startDate:startDate}
    const state = filtersReducer(undefined,action);
    expect(state.startDate  ).toBe(startDate)
})

test("should setup endDate filter", () => {
    const endDate ="123"
    const action ={type:"SET_END_DATE", endDate:endDate}
    const state = filtersReducer(undefined,action);
    expect(state.endDate  ).toBe(endDate)
})
