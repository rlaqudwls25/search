import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../common/redux-helper";

export const Types = {
  SetValue: "search/Setvalue",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
};

const INITIAL_STATE = {
  user: undefined,
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
