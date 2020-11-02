
import  DrumReducer  from './reducers/reducer';
import {createStore} from 'redux'


export const store = createStore(
    DrumReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  );