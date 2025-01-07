import React, {  useState,useEffect } from 'react';
import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';
import nav from "../style/expensetracker.css";



// import { uniqueId } from '../Utils';

// Component/Contener
const transactionData = [

  // { id: uniqueId(), name: 'salary',
  //    amount: 3000, type: 'income'},  
  //    { id: uniqueId(), name: 'Grocery',
  //     amount: 100, type: 'expense'},
  //      { id: uniqueId(), name: 'Camara',
  //       amount: 500, type: 'expense'}
];
function ExpenseTracker() {

const [income, setIncome] = useState(0);
const [expense, setExpense] = useState(0);
const [transactions, setTransactions  ] = useState(transactionData);


const saveState = () => {
  localStorage.setItem('expenseTrackerState',
  JSON.stringify(transactions));
}


const calculateExpenses = () =>{
  let income = 0, expense = 0;

  transactions.forEach((data) =>{

    if (data.type === 'income'){
      income += data.amount;
      // alert("Successfully")
    }      
    else if (data.type === 'expense'){
      expense += data.amount;
      // alert("Successfully")
    }  

  });

saveState();

setIncome(income);
setExpense(expense);
// console.log(income, expense);
}
const handleAddNewTransaction = item => {
  let newTransactions = [...transactions, item];
  setTransactions(newTransactions);
  // console.log(item);
}
const handleDeleteTransaction = id => {
  // console.log(id);
  const newTransactions = transactions.filter((item) => item.id !== id);
  // console.log(newTransactions)
  setTransactions(newTransactions)
}


// useEffect(() =>{
//   calculateExpenses();
// },[]);

useEffect(() =>{
  let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));
  if (localState) {
    setTransactions(localState);
  }else{
    calculateExpenses();
  }
}, []);
useEffect(() =>{
  calculateExpenses();
},  [transactions]);
  return (
<>
<div>
 <nav className='h1'>
  <h1>ExpenseTracker</h1>
  </nav> 
<Expense income={income} expense={expense}/>
<TransactionForm onNewTransaction={handleAddNewTransaction} />
<TransactionHistory  transactions={transactions}
onDeleteTransaction={handleDeleteTransaction}/>
</div>
</>
)
}
export default ExpenseTracker;

