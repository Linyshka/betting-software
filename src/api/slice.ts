import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { GameTypeID } from '../types/api';

interface GamesState {
  searchTerm: string;
  selectedTypeID: GameTypeID | 'all';
  visibleCount: number;
}

const initialState: GamesState = {
  searchTerm: '',
  selectedTypeID: 'all',
  visibleCount: 20,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.visibleCount = 20;
    },
    setSelectedTypeID(state, action: PayloadAction<GameTypeID | 'all'>) {
      state.selectedTypeID = action.payload;
      state.visibleCount = 20;
    },
    loadMore(state) {
      state.visibleCount += 20;
    },
  },
});

export const { setSearchTerm, setSelectedTypeID, loadMore } = gamesSlice.actions;
export default gamesSlice.reducer;