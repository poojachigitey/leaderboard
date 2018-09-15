import {
    updateObject
} from '../../Shared/Utility';
import * as actions from '../actions';
import _ from 'lodash';

const defaultLanguage = _.includes(['en', 'ja','zh','es','ru' ], window.navigator.language) ? window.navigator.language: 'en';
const initialState = {
    lang: defaultLanguage,
};


export const setLanguage = (state = {lang:'vdbjsb'}, action) => {
    return updateObject(state, {
        lang: action.lang
    });
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_LOCALE:
          return setLanguage(state,action);
        default:
            return state;
    }
};

export default reducer;