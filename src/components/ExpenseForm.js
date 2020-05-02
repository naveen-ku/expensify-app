import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "../../node_modules/react-dates/lib/css/_datepicker.css";

const now = moment();
setTimeout(console.log(now.format("MMM do YYYY")), 2000);

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      note: "",
      amount: "",
      createdAt: moment(),
      calenderFocused: false,
    };
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onNoteChange(e) {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onDateChange(createdAt) {
    this.setState(() => ({ createdAt }));
  }
  onFocusChange({ focused }) {
    this.setState(() => ({ calenderFocused: focused }));
  }
  onAmountChange(e) {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
