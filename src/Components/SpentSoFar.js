import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const SpentSoFar = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  );
};
export default SpentSoFar;
