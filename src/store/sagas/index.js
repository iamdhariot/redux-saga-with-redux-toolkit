import { all, fork } from "@redux-saga/core/effects";
//saga watchers
import { watchTest } from "./test.saga";
/**Creating a rootsaga
 * it will combine all sagas and return it
 */

export default function* rootSaga() {
  yield all([fork(watchTest)]);
}
