import React, { useState } from 'react';

import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
/* 현재 나오는 Item들을 Display 해주는 블록*/
const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!')
    
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
 