import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="container inc-exp-container">
        <div>
          <h4>Donations</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expenditures</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>
  )
}