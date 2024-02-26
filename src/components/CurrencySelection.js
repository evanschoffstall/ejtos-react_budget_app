import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    dispatch({ type: "CHG_CURRENCY", payload: event.target.value });
    setNewCurrency(event.target.value);
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ backgroundColor: "#94E499" }}
    >
      <span>Currency: </span>
      <select
        style={{ backgroundColor: "#94E499" }}
        value={newCurrency}
        onChange={handleCurrencyChange}
      >
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;
