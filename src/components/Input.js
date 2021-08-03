import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import { addTransaction } from "../context/actionCreators";

import Box from "./Box";
import isEmpty from "../shared/is-empty";

const Input = () => {
  const [transactionState, setTransactionState] = useState({
    title: "",
    amount: "",
  });
  const [errorState, setErrorState] = useState();

  const { dispatch } = useContext(GlobalContext);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setTransactionState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const addTransactionHandler = (e) => {
    e.preventDefault();
    setErrorState("");

    if (isEmpty(transactionState.title) || isEmpty(transactionState.amount)) {
      setErrorState("Please input all fields!");
      return;
    }

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
          {errorState && <div className="msg text-danger">{errorState}</div>}
          <div className=" d-flex-around">
            <div>
              <input
                className={
                  errorState && isEmpty(transactionState.title) ? "error" : ""
                }
                name="title"
                type="text"
                value={transactionState.title}
                onChange={inputChangeHandler}
                placeholder="Enter Title.."
                required
              />
              <input
                className={
                  errorState && isEmpty(transactionState.amount) ? "error" : ""
                }
                name="amount"
                type="number"
                value={transactionState.amount}
                onChange={inputChangeHandler}
                placeholder="Enter Amount.."
                required
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
