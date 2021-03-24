import { all, put, call, takeEvery } from "redux-saga/effects";
import { actions, Types } from "./index";
import { callApi } from "../../util/api";

function* FetchAutoComplete({ keyword }) {
  const { isSuccess, data } = yield call(callApi, {
    url: "./user/search",
    params: { keyword },
  });

  if (isSuccess && data) {
    yield put(actions.setValue("auto"));
  }
}

export default function* () {
  yield all([takeEvery(Types.FetchAutoComplete, FetchAutoComplete)]);
}
