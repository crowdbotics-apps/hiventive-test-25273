import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard121218823Reducer from '../features/Dashboard121218823/redux/reducers'
import Dashboard222218822Reducer from '../features/Dashboard222218822/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard121218823: Dashboard121218823Reducer,
Dashboard222218822: Dashboard222218822Reducer,

});