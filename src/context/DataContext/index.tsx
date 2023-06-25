/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {
  Dispatch,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { StateType, ActionType } from "./types";
import { dataReducer } from "./reducers";
import { API } from "@/constants/api";
import axios from "axios";

const initialState: StateType = {
  data: [],
};

const defaultValues = {
  dataState: initialState,
  dispatch: () => null,
};

export const DataContext = createContext<{
  dataState: StateType;
  dispatch: Dispatch<ActionType>;
}>(defaultValues);

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dataState, dispatch] = useReducer(dataReducer, initialState);
  const contextValues = { dataState, dispatch };

  const initialFetch = useCallback(async () => {
    try {
      const response = await axios.get(`${API}/title`);

      if (response) {
        dispatch({
          type: "fetch_data",
          payload: response.data,
        });
      }
    } catch (error) {
      console.error("Error >>>", error);
    }
  }, []);

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <DataContext.Provider value={contextValues}>
      {children}
    </DataContext.Provider>
  );
};
