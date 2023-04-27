import { combineReducers } from "redux";
import testReducer from "./slices/test.slice";

/**Combining all the reducers as a rootReducers object */

const rootReducer = combineReducers({
  test: testReducer,
});

//exporting rootreducers
export default rootReducer;
