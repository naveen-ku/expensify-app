import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onSubmit(expense) {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  }
  onRemove() {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-header__title">Edit Expense</h1>
        </div >
        <div className="content-container form">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button onClick={this.onRemove} className="button ">Remove</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
