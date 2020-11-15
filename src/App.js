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
        <Navbar />
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