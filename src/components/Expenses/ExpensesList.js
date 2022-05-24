import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items, onDelete }) => {
    

    if (items.length === 0)
    {
        let expensesContent = <p>Found no expenses.</p>;
        return <h2 className='expenses-list__fallback'>{expensesContent}</h2>;
    }

    const getDeletedID = itemID =>
    {
        onDelete(itemID);
    }

    return (
        <ul className='expenses-list'>
            {
                items.map(item =>
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                        id={item.id}
                        onDelete={getDeletedID}
                    />)
            }
        </ul>
        );
}

export default ExpensesList;