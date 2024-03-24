import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [formIsOpen, setFormIsOpen] = useState(true);

  const changeFormState = () => {
    setFormIsOpen(!formIsOpen);
  };

  const tilteChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(+event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      id: Math.random(),
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onAddExpense(newExpense);
    setEnteredDate("");
    setEnteredPrice("");
    setEnteredTitle("");
    changeFormState();
  };

  if (formIsOpen) {
    return (
      <div className="new-expense__control">
        <button onClick={changeFormState}>Add New Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={tilteChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={changeFormState}>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
