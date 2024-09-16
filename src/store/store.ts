import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface State {
  isOn: boolean;
}

const asideInitialState: State = {
  isOn: false,
};

interface Action {
  type: "change" | "setOnFalse" | "setOnTrue";
}

const reducer = (state: State = asideInitialState, action: Action): State => {
  switch (action.type) {
    case "change":
      return { isOn: !state.isOn };
    case "setOnFalse":
      return { isOn: false };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer,
});

type AppState = ReturnType<typeof store.getState>;

export const asideSelector = useSelector.withTypes<AppState>();
