import React from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ id, date, title, amount, onDelete }) => {

    const deleteClickedHandler = () => {
        onDelete(id);
    };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${amount}</div>
                    <button className='expense-item__price' onClick={deleteClickedHandler}>Delete</button>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;