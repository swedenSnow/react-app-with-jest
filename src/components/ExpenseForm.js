import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const date = new Date();

const now = moment();
// console.log(now.format("MMM Do, YYYY"));

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense
                ? (props.expense.amount / 100).toString()
                : '',
            createdAt: props.expense
                ? moment(props.expense.createdAt)
                : moment(),
            calenderFocused: false,
            error: '',
        };
    }

    onDescriptionChange = e => {
        const description = e.target.value;
        this.setState(() => ({
            description,
        }));
    };

    onNoteChange = e => {
        const note = e.target.value;
        // Could also use e.persist() instead of a const varible
        // e.persist();
        // this.setState(() => ({ note: e.target.value }));
        this.setState(() => ({
            note,
        }));
    };

    onAmountChange = e => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = createdAt => {
        if (createdAt) {
            this.setState(() => ({
                createdAt,
            }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calenderFocused: focused,
        }));
    };

    onSubmit = e => {
        e.preventDefault();

        if (!this.state.description) {
            this.setState(() => ({
                error: 'Please enter a valid description ',
            }));
        } else if (!this.state.amount) {
            this.setState(() => ({
                error: "Please enter a valid amount. Nothing's free!",
            }));
        } else {
            this.setState(() => ({
                error: '',
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
        // if (!this.state.description || !this.state.amount) {
        // this.setState(() => ({
        //   error: "Please enter a valid desc and amount",
        // }));
        // } else {
        //   this.setState(() => ({
        //     error: "Submitted",
        //   }));
        // }
    };

    render() {
        const {
            description,
            error,
            note,
            amount,
            createdAt,
            calenderFocused,
        } = this.state;
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {error && (
                    <p className="form__error">
                        <strong>{error}</strong>
                    </p>
                )}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Description"
                    autoFocus
                    value={description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Amount"
                    value={amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={createdAt}
                    onDateChange={this.onDateChange}
                    focused={calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    className="textarea"
                    placeholder="Add a note for your expense (optional)"
                    value={note}
                    onChange={this.onNoteChange}
                />
                <div>
                    <button className="button--link">Save Expense</button>
                </div>
            </form>
        );
    }
}

export default ExpenseForm;
