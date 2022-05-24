import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (getExpenseData) => {
        const expenseData = {
            ...getExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const endEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={endEditingHandler}
            />}
        </div>
    );
};

export default NewExpense;