import { Actions } from '../actions';
import {DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM, SET_RANDOM_NAME} from '../constants';
import { StoreState } from '../types';

const initialState: StoreState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
};

export function enthusiasm(state: StoreState = initialState, action: Actions) {
    switch(action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel + 1) };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        case SET_RANDOM_NAME:
            return { ...state, languageName: action.payload};
    }
    return state;
}