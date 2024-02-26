import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import addImage from "../add.png";
import removeImage from "../remove.png";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "DECREASE_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              width: "30px",
              height: "30px",
              marginTop: "3px",
              cursor: "pointer",
              opacity: 1,
            }}
            src={addImage}
            alt="Add"
            onClick={() => increaseAllocation(props.name)}
            onMouseOver={(e) => (e.currentTarget.style.opacity = 0.5)}
            onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
          />
        </div>
      </td>
      <td>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              width: "30px",
              height: "30px",
              marginTop: "3px",
              cursor: "pointer",
              opacity: 1,
            }}
            src={removeImage}
            alt="Remove"
            onClick={() => decreaseAllocation(props.name)}
            onMouseOver={(e) => (e.currentTarget.style.opacity = 0.5)}
            onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
          />
        </div>
      </td>
      <td>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TiDelete
            style={{ cursor: "pointer" }}
            size="35px"
            onClick={handleDeleteExpense}
            onMouseOver={(e) => (e.currentTarget.style.opacity = 0.5)}
            onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
          ></TiDelete>
        </div>
      </td>
    </tr>
  );
};

export default ExpenseItem;
