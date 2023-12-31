import React, {useState} from 'react';
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import './Expenses.css'
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) =>{
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const FilterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  };
  
  
  
  

//여기서부터 ****************************************************************//
    return (
      <div>
    <Card className='expenses'>
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter ={FilterChangeHandler} 
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />   
       
      </Card>
    </div>
    );
};

export default Expenses;