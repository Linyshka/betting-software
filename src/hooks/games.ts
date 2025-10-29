// src/store/hooks.ts
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@api/store';

export const useGamesDispatch = () => useDispatch<AppDispatch>();
export const useGamesSelector: TypedUseSelectorHook<RootState> = useSelector;