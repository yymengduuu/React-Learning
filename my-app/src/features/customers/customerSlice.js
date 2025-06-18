import { createStore } from "redux";

const initialStateCustmer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustmer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

const store = createStore(customerReducer);

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/create",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullname) {
  return {
    type: "customer/updateName",
    payload: fullname,
  };
}

store.dispatch(createCustomer("John Doe", "1234567890"));
