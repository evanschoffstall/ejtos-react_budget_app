import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  console.log("Budget rendered");
  const { dispatch, budget, currency, alert } = useContext(AppContext);

  const handleBudgetChange = (event) => {
    dispatch({ type: "SET_BUDGET", payload: event.target.value });
  };

  useEffect(() => {
    console.log(alert);
    if (alert) {
      window.alert(alert);
    }
  }, [alert]);

  return (
    <div className="alert alert-secondary">
      <span>Budget: </span>
      <span style={{ marginLeft: "5px" }}>{currency}</span>
      <input
        style={{ flexGrow: 1, maxWidth: "100px" }}
        type="number"
        step="10"
        value={budget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
