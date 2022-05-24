import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
    const [getTitle, setTitle] = useState('');
    const [getAmount, setAmount] = useState('');
    const [getDate, setDate] = useState('');

    // const [userInput, setUserInput] = useState(
    //     {
    //         getTitle: '',
    //         getAmount: '',
    //         getDate: ''
    //     }
    // );

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     getTitle: event.target.value            
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, getTitle: event.target.value }
        // });
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     getAmount: event.target.value
        // });
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     getDate: event.target.value
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: getTitle,
            amount: +getAmount,
            date: new Date(getDate)
        };

        onSaveExpenseData(expenseData);
        setAmount('');
        setTitle('');
        setDate('');

        // console.log(expenseData);
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={getTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={getAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2022-12-31' value={getDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};


export default ExpenseForm;