import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const getNewExpenseData = (newExpense) => {
    props.onAddExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={getNewExpenseData} />
    </div>
  );
}

export default NewExpense;
