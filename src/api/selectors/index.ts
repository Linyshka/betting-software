import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { GameItem } from '@customTypes/api';

export const selectFilteredGames = createSelector(
  [
    (state: RootState) => state.games.searchTerm,
    (state: RootState) => state.games.selectedTypeID,
    (state: RootState) => state.games.visibleCount,
    (_: RootState, games: GameItem[]) => games,
  ],
  (searchTerm, selectedTypeID, visibleCount, games) => {
    return games
      .filter(game => {
        const matchesType = selectedTypeID === 'all' || game.gameTypeID === selectedTypeID;
        const matchesSearch = game.gameName.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
      })
      .slice(0, visibleCount);
  }
);
