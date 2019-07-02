import { combineReducers } from 'redux-immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fromJS } from 'immutable';
import epicRegistries from './epics/epicRegistries';
import { SherpathConstants } from '../constants/SherpathConstants';
import { chapterReducer } from './dukcs/Chapter';

const createDefaultReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    [SherpathConstants.reduxResources.CHAPTER_STATE]: chapterReducer
  });

const configStore = (history) => {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware, routerMiddleware(history)];
  const store = createStore(createDefaultReducers(history), fromJS({}), applyMiddleware(...middlewares));
  epicMiddleware.run(combineEpics(...epicRegistries));
  return store;
};
export { configStore };
