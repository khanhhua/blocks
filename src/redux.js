import { combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import Start from './stdlib/Start';

const stageSlice = createSlice({
  name: 'stage',
  initialState: {
    blocks: [
      new Start(),
    ],
  },
  reducers: {
    addBlock(state, { payload }) {
      state.blocks.push(payload.block);
    }
  },
});

const paletteSlice = createSlice({
  name: 'palette',
  initialState: { selected: null },
  reducers: {
    selectBlock(state, { payload }) {
      state.selected = payload.blockClass;
    },
  }
});

const rootReducer = combineReducers({
  stage: stageSlice.reducer,
  palette: paletteSlice.reducer,
});

export const store = configureStore(
  {
    reducer: rootReducer,
  },
);
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./redux', () => store.replaceReducer(rootReducer));
}

export const actions = {
  ...stageSlice.actions,
  ...paletteSlice.actions,
};
