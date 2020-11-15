import React, {useContext} from 'react';
import "../App.css";
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
   useContext(GlobalContext);
  
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.tags} <span>{sign}${Math.abs(transaction.amount)}</span>
    </li>
  )
}