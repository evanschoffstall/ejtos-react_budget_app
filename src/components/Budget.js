import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    dispatch({ type: "SET_BUDGET", payload: event.target.value });
    setNewBudget(event.target.value);
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: £</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
