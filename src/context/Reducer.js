import * as actionTypes from "./actionTypes";

const initialState = [{ id: 2314, title: "a", amount: 234 }];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
      };
    case actionTypes.DELETE_TRANSACTION:
      // return state.filter((el) => el.id !== action.transactionId);
      return {
        ...state,
        transactions: state.transactions.filter(
          (el) => el.id !== action.transactionId
        ),
      };
    default:
      return state;
  }
};

export default reducer;
