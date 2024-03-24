import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", price: 799, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const getNewExpenseData = (newExpense) => {
    setExpenses((oldExpenses) => {
      return [newExpense, ...oldExpenses];
    });
  };
  return (
    <div>
      <img
        src="background.jpg"
        alt="Background"
        style={{
          position: "fixed",
          objectFit: "cover",
          top: "0",
          zIndex: "-1",
          height: "101vh",
        }}
      />
      <NewExpense onAddExpense={getNewExpenseData} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
