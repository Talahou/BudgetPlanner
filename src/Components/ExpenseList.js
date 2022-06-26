import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses.map((props) => (
        <ExpenseItem id={props.id} name={props.name} cost={props.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
