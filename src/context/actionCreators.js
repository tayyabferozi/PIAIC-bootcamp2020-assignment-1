import * as actionTypes from "./actionTypes";

export const addTransaction = (transaction) => {
  return { type: actionTypes.ADD_TRANSACTION, transaction };
};

export const deleteTransaction = (transactionId) => {
  return { type: actionTypes.DELETE_TRANSACTION, transactionId };
};
