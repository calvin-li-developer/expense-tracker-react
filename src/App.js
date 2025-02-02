import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: 'e5',
    title: 'Teddy Bear',
    amount: 14.12,
    date: new Date(2019, 5, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {

  const [getExpenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    }
    );
  };

  const DeleteExpenseHandler = itemID => {
    setExpenses(prevExpenses => {
      const updatedExpenses = prevExpenses.filter(item => item.id !== itemID);
      return [...updatedExpenses];
    }
    );
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={getExpenses}
        onDeleteExpense={DeleteExpenseHandler}
      />
    </div>
  );
}

export default App;
