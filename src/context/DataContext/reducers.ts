import { StateType, ActionType } from "./types";

export const dataReducer = (dataState: StateType, action: ActionType) => {
  switch (action.type) {
    case "fetch_data":
      return { ...dataState, data: action.payload };
    default:
      return dataState;
  }
};
