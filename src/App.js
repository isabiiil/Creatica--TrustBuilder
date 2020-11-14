import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import { TransactionList } from "./components/TransactionList.jsx";
import { AddTransaction } from "./components/AddTransactions";
import { GlobalProvider } from "./context/GlobalState"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/history">Transaction History</Link>
            </li>
            <li>
              <Link to="/input">Add Transaction</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/history">
            <GlobalProvider>
              <TransactionList />
            </GlobalProvider>
          </Route>
          <Route path="/input">
            <GlobalProvider>
              <AddTransaction />
            </GlobalProvider>
          </Route>
          <Route path="/">
            {/* <Home /> */}
            <h1>Yeet</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}