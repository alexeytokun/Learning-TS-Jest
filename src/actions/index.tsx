import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface SetRandomName {
    payload: string;
    type: constants.SET_RANDOM_NAME;
}

export type Actions = IncrementEnthusiasm | DecrementEnthusiasm | SetRandomName;

export function incrementEnthusiasm() : IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm() : DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

export function setRandomName(name: string): SetRandomName {
    return {
        payload: name,
        type: constants.SET_RANDOM_NAME,
    }
}