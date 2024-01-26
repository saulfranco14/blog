import rootReducer from './reducer';

const generateInitialState = (reducers) =>
  Object.keys(reducers).reduce((initialState, key) => {
    initialState[key] = reducers[key](undefined, { type: '' });
    return initialState;
  }, {});

const initialState = generateInitialState(rootReducer);

export default initialState;
