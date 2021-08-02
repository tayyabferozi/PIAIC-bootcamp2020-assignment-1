import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import { addTransaction } from "../context/actionCreators";

import Box from "./Box";

const Input = () => {
  const [transactionState, setTransactionState] = useState({
    title: "",
    amount: "",
  });

  const { dispatch } = useContext(GlobalContext);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setTransactionState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const addTransactionHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        id: Math.floor(Math.random() * 100000000),
        ...transactionState,
      })
    );
    setTransactionState({
      title: "",
      amount: "",
    });
  };

  return (
    <form>
      <div className="Input">
        <Box heading="ADD NEW TRANSACTION">
          <div className=" d-flex-around">
            <div>
              <input
                name="title"
                type="text"
                value={transactionState.title}
                onChange={inputChangeHandler}
                placeholder="Enter Title.."
              />
              <input
                name="amount"
                type="number"
                value={transactionState.amount}
                onChange={inputChangeHandler}
                placeholder="Enter Amount.."
              />
            </div>
            <div>
              <button onClick={addTransactionHandler} id="Add">
                +
              </button>
            </div>
          </div>
        </Box>
      </div>
    </form>
  );
};

export default Input;
