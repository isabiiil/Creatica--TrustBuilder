import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OrgCard from "./components/OrganizationCard";

import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/addTransactions";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
            <div className="cardRow">
              <OrgCard orgName="UNICEF" />
              <OrgCard orgName="WHO" />
              <OrgCard orgName="St. Jude's" />
              <OrgCard orgName="HackGuild" />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}