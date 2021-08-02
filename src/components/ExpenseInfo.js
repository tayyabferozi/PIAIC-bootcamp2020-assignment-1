import React, { useContext, useState, useEffect } from "react";

import { GlobalContext } from "../context/GlobalState";
import { moneyFormatter } from "../shared/money-formatter";
import Box from "./Box";

const ExpenseInfo = () => {
  const { transactions } = useContext(GlobalContext);
  const [balanceState, setBalanceState] = useState({ income: 0, expense: 0 });

  useEffect(() => {
    let i = 0,
      e = 0;
    transactions.forEach((el) => {
      let { amount } = el;
      amount = Number(amount);
      if (amount >= 0) i += amount;
      else e += amount;
    });
    setBalanceState({ income: i, expense: e });
  }, [transactions]);

  return (
    <Box heading="YOUR BALANCE" headStyle={{ margin: 0 }}>
      <h1>
        {Math.abs(balanceState.income) >= Math.abs(balanceState.expense)
          ? ""
          : "-"}
        {moneyFormatter(balanceState.income + balanceState.expense)}
      </h1>
      <div className="MiniBoxes-Wrapper">
        <div className="MiniBox">
          <h5>INCOME</h5>
          <span className="text-success">
            {moneyFormatter(balanceState.income)}
          </span>
        </div>
        <div className="MiniBox">
          <h5>EXPENSE</h5>
          <span className="text-danger">
            {moneyFormatter(balanceState.expense)}
          </span>
        </div>
      </div>
    </Box>
  );
};

export default ExpenseInfo;
