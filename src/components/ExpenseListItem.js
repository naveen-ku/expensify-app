import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <h2>
        <Link to={`edit/${id}`}>{description}</Link>
      </h2>
      <p>
        {amount}-{createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
