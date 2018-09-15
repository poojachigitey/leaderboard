import * as actionTypes from '../actions';
import { updateObject } from '../../Shared/Utility';

const initialState = {
    activeSessions: 0,
    expectedTokens: 0,
    reciverAddress: '',
    step2: false,
    step3: false,
};


export const setSessions = (state = initialState.sessions, action) => {
    return updateObject(state, { sessions: action.SessionsStats, loading: true });
};
export const setActiveSessions = (state = initialState.activeSessions, action) => {
    return updateObject(state, { activeSessions: action.activeSessions.count, loading: true });
};

export const setMarketValue = (state = initialState.expectedTokens, action) => {
    return updateObject(state, action.marketValue);
};

export const setReciverAddress = (state = initialState.reciverAddress, action) => {
    return updateObject(state, action.reciverAddress);
};
export const toggleStep2 = (state = initialState.step2, action) => {
    return updateObject(state, { step2: action.payload });
};
export const toggleStep3 = (state = initialState.step3, action) => {
    return updateObject(state, { step3: action.payload });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_RECIVER_ADDRESS:
            return setReciverAddress(state, action);
        case actionTypes.SET_MARKET_VALUE:
            return setMarketValue(state, action);
        case actionTypes.SET_STEP2:
            return toggleStep2(state, action);
        case actionTypes.SET_STEP3:
            return toggleStep3(state, action);
        default:
            return state;
    }
};

export default reducer;