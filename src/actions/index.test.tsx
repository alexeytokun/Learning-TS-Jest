import * as actions from '.';
import * as constants from '../constants';


describe('actions', () => {
    it('checks action creator incrementEnthusiasm to return action INCREMENT_ENTHUSIASM', () => {
        expect(actions.incrementEnthusiasm()).toEqual({ type: constants.INCREMENT_ENTHUSIASM })
    });

    it('checks action creator decrementEnthusiasm to return action DECREMENT_ENTHUSIASM', () => {
        expect(actions.decrementEnthusiasm()).toEqual({ type: constants.DECREMENT_ENTHUSIASM })
    });
});


