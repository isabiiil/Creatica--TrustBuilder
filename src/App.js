import React from 'react';
import Navbar from "./components/Navbar/Navbar.js";
import {TransactionList} from "./components/TransactionList";

import {AddTransaction} from "./components/addTransactions.jsx"
function App() {
  return (
    <>
    <TransactionList />
    <AddTransaction />
    <Navbar />
    </>
  );
}

export default App;
