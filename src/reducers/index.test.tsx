import { enthusiasm } from '.';
import * as actions from '../actions';
import { StoreState } from '../types';

const testStore: StoreState = {
    enthusiasmLevel: 3,
    languageName: 'JS'
};

describe('reducer enthusiasm', () => {
    it('should return initial state', () => {
        expect(enthusiasm(undefined, {} as any))
            .toEqual({ enthusiasmLevel: 1, languageName: 'TypeScript' });
    });

    it('should handle INCREMENT_ENTHUSIASM', () => {
        expect(enthusiasm(testStore, actions.incrementEnthusiasm()))
            .toEqual({ enthusiasmLevel: 4, languageName: 'JS' })
    });

    it('should handle DECREMENT_ENTHUSIASM', () => {
        expect(enthusiasm(testStore, actions.decrementEnthusiasm()))
            .toEqual({ enthusiasmLevel: 2, languageName: 'JS' })
    });

    it('should handle SET_RANDOM_NAME', () => {
        expect(enthusiasm(testStore, actions.setRandomName('test')))
            .toEqual({ enthusiasmLevel: 3, languageName: 'test' })
    });

    it('should handle wrong action type', () => {
        expect(enthusiasm(testStore, { type: 'TEST' } as any))
            .toEqual({ enthusiasmLevel: 3, languageName: 'JS' })
    });
});
