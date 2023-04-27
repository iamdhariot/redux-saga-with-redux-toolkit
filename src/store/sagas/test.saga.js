import { call, delay, put, takeLatest } from "@redux-saga/core/effects"; //importing effects

// actions which we are going to dispatch
import { testSuccess, testFailure } from "../slices/test.slice";
import { Api } from "../../api";
import { endpoint } from "../../api/Url";

/**Saga watcher for test
 * generator function
 */
export function* watchTest() {
  /**takeLatest: to take latest dispatch
   * @params type  i.e slicename/actionname
   */
  yield takeLatest("test/testRequest", getTest);
}

/**getTest will be called on the dispatch of testRequest */
function* getTest(action) {
  try {
    const { loginId, password, isSuccess } = action.payload;
    yield delay(1000);
    const data = yield call(Api, {
      method: "GET",
      endpoint: isSuccess
        ? endpoint.publicholidays
        : endpoint.publicholidaysNotExist, // just for demo
      //token:action.payload.token
      // body:action.payload.request
    });
    const payload = data;
    yield put(testSuccess(payload));
  } catch (error) {
    const payload = { error: error.title }; //depends on the api
    yield put(testFailure(payload));
  }
}
