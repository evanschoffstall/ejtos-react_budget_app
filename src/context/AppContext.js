import React, { createContext, useReducer } from "react";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      var totalExpense =
        state.expenses.reduce((total, exp) => total + exp.cost, 0) +
        action.payload.cost;
      if (totalExpense > state.budget) {
        alert("Cannot increase the allocation! Out of funds");
        return state;
      }
      return {
        ...state,
        expenses: state.expenses.map((exp) =>
          exp.name === action.payload.name
            ? { ...exp, cost: exp.cost + action.payload.cost }
            : exp
        ),
      };
    case "DECREASE_EXPENSE":
      const decreasedExpense = state.expenses.find(
        (exp) => exp.name === action.payload.name
      );
      if (!decreasedExpense || decreasedExpense.cost < action.payload.cost) {
        alert("Cannot decrease the allocation! Funds would become negative");
        return state;
      }
      return {
        ...state,
        expenses: state.expenses.map((exp) =>
          exp.name === action.payload.name
            ? { ...exp, cost: exp.cost - action.payload.cost }
            : exp
        ),
      };
    case "RED_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.map((exp) =>
          exp.name === action.payload.name && exp.cost >= action.payload.cost
            ? { ...exp, cost: exp.cost - action.payload.cost }
            : exp
        ),
        budget: state.budget + action.payload.cost,
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.map((exp) =>
          exp.name === action.payload ? { ...exp, cost: 0 } : exp
        ),
        budget:
          state.budget +
          (state.expenses.find((exp) => exp.name === action.payload)?.cost ||
            0),
      };
    case "SET_BUDGET":
      var totalExpense = state.expenses.reduce(
        (total, exp) => total + exp.cost,
        0
      );
      if (action.payload > 20000) {
        return {
          ...state,
          budget: 20000, // set the budget to the maximum limit
          alert: `The budget exceeds the ${state.currency}20,000 limit by ${
            state.currency
          }${action.payload - 20000}`,
        };
      } else if (action.payload < totalExpense) {
        return {
          ...state,
          budget: totalExpense, // set the budget to the total expense
          alert: `Cannot set the budget! It's less than the total expenses by ${
            totalExpense - action.payload
          }`,
        };
      }
      return {
        ...state,
        budget: action.payload,
        alert: null,
      };
    case "CHG_CURRENCY":
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: "Marketing", name: "Marketing", cost: 50 },
    { id: "Finance", name: "Finance", cost: 300 },
    { id: "Sales", name: "Sales", cost: 70 },
    { id: "Human Resource", name: "Human Resource", cost: 40 },
    { id: "IT", name: "IT", cost: 500 },
  ],
  currency: "£",
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const totalExpenses = state.expenses.reduce(
    (total, item) => total + item.cost,
    0
  );
  const remaining = state.budget - totalExpenses;

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        remaining: remaining,
        dispatch,
        currency: state.currency,
        alert: state.alert,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
