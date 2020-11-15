import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import PieChart from "./components/PieChart";
import Home from "./components/Homepage";
import Login from "./components/Login";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransactions";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>
          <Route path="/history">
            <Navbar />
            <GlobalProvider>
              <Balance />
              <IncomeExpenses />
              <TransactionList />
            </GlobalProvider>
          </Route>
          <Route path="/input">
            <Navbar />
            <GlobalProvider>
              <AddTransaction />
            </GlobalProvider>
          </Route>
          <Route path="/">
            <Navbar />
            {/* <PieChart /> */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}