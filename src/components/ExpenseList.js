import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import "../App.css";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <table className="table allocation">
      <thead className="thead-light">
        <tr style={{ backgroundColor: "#212529", color: "#fff" }}>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col" style={{ textAlign: "center" }}>
            Increase by 10
          </th>
          <th scope="col" style={{ textAlign: "center" }}>
            Decrease by 10
          </th>
          <th scope="col" style={{ textAlign: "center" }}>
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
