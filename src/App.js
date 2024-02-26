import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.png";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import RemainingBudget from "./components/Remaining";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1 style={{ paddingTop: "13px", fontSize: "30px" }}>
              Company's Budget Allocation
            </h1>
          </div>
        </div>
        <div className="content">
          <h3 className="mt-3" style={{ paddingBottom: "15px" }}>
            Overview
          </h3>
          <div className="row mt-3">
            <div className="col-sm" style={{ paddingBottom: "15px" }}>
              <Budget />
            </div>
            <div className="col-sm">
              <RemainingBudget />
            </div>
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          </div>
        </div>
        <h3 className="mt-3" style={{ paddingBottom: "0px" }}>
          Allocation
        </h3>
        <div className="row">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3" style={{ marginBottom: "-10px" }}>
          Change allocation
        </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
