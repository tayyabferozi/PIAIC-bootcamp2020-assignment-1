import React, { useContext } from "react";

import Box from "./Box";
import { GlobalContext } from "../context/GlobalState";
import { deleteTransaction } from "../context/actionCreators";

const History = () => {
  const { transactions, dispatch } = useContext(GlobalContext);

  const deleteTransactionHandler = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <Box heading="HISTORY">
      {transactions.map((el) => {
        const { id, title, amount } = el;
        return (
          <div
            key={id}
            className={`history-list__item ${
              amount > 0 ? "income" : "expense"
            }`}
            onClick={() => deleteTransactionHandler(id)}
          >
            <span>{title}</span>
            <span>${amount}</span>
          </div>
        );
      })}
    </Box>
  );
};

export default History;
