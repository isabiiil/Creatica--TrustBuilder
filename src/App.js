import React from 'react';
import {TransactionList} from './components/TransactionList';

import {AddTransaction} from "./components/addTransactions.jsx"
function App() {
  return (
    <>
  <TransactionList />
    <AddTransaction />
    </>
  );
}

export default App;
