import React from "react";
import '../Expenses/ExpensesList.css';
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {
    let expensesContent = <p>No Expenses found.</p>;

    if(props.items.length === 0 ) {
      return <h2 className="expenses-list__fallback">Found no expense.</h2>
    }
    return <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
};

export default ExpensesList;