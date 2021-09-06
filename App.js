import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import RootNavigation from  './src/navigation/Router';
import pokemonReducer from './src/store/reducers/pokemons';
import bagReducer from './src/store/reducers/bag';
import settingReducer from './src/store/reducers/settings';

const rootReducer = combineReducers({
  Pokemons: pokemonReducer,
  Bag: bagReducer,
  Settings:settingReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

