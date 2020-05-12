import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"

test("should set default state",() => {
    const state = expensesReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual([])

})

test("should remove expense by id", () => {
    const action = {
        type:"REMOVE_EXPENSE",
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], expenses[2]])
})
test("should not remove expense if id is not found", () => {
    const action = {
        type:"REMOVE_EXPENSE",
        id:-53
      }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
})

test("should add an expense", () => {
    const  expense={
        id:4,
        description:"Clothes",
        note:"",
        amount:1500,
        createdAt:10000
    }
    const action ={
        type:"ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})
test("should edit expense by id", () => {
    const action = {
        type:"EDIT_EXPENSE",
        id:expenses[1].id,
        updates:{
            description:"Kiraya"
        }
    }
    const state = expensesReducer(expenses,action);
    expect(state[1].description).toEqual(action.updates.description)
})

test("should not edit expense if id is not found", () => {
    const action = {
        type:"EDIT_EXPENSE",
        id:-53,
        updates:{
            description:"Aabra ka daabra"
        }
      }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
})
