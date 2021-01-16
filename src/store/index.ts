import { combineReducers, Action, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import companies from './companies/reducers';
import jobs from './jobs/reducers';

const rootReducer = combineReducers({
  companies,
  jobs,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
