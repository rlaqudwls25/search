import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../common/redux-helper";

export const Types = {
  SetValue: "search/Setvalue",
  FetchAutoComplete: "search/FetchAutoComplete",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  FetchAutoComplete: (keyword) => ({
    type: Types.FetchAutoComplete,
    keyword,
  }),
};

const INITIAL_STATE = {
  keyword: "",
  autoComplete: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
