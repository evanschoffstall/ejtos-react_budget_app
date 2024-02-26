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
        <div
          style={{
            backgroundColor: "#212529",
            color: "#fff",
            width: "100%", // make the div extend the full width of the page
            position: "fixed", // fix the div at the top of the page
            top: "0", // position at the top
            left: "0", // position at the left
            paddingBottom: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "6px",
            }}
          >
            <img src={logo} alt="logo" style={{ width: "60px" }} />
            <h1
              className="mt-3"
              style={{ paddingLeft: "6px", marginTop: "0px" }}
            >
              Company's Budget Allocation
            </h1>
          </div>
        </div>
        <div style={{ paddingTop: "100px" }}>
          <div className="row mt-3">
            <div className="col-sm">
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
        <h3 className="mt-3">Allocation</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Change allocation</h3>
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
