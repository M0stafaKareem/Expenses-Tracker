import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses);
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={setFilteredYear}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />

      {filteredExpenses.length === 0 ? (
        <h2 style={{ color: "white", textAlign: "center" }}>
          Found no expenses.
        </h2>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.price}
            date={item.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
