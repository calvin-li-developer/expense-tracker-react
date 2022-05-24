import React, { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
    const [getFilteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };

    let filteredExpenses = items.filter(item => item.date.getFullYear().toString() === getFilteredYear);

    if (getFilteredYear === 'All')
    {
        filteredExpenses = items;
    }

    return (
        <Card className="expenses">
            <ExpensesFilter yearSelected={getFilteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );

}



export default Expenses;