import { EnthusiasmAction } from '../actions';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants';
import { StoreState } from '../types';

const initialState: StoreState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
};

export function enthusiasm(state: StoreState = initialState, action: EnthusiasmAction) {
    switch(action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel + 1) };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }
    return state;
}