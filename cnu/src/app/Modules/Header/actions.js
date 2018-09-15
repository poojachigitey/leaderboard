
import {
    NAME,
} from './constants';

export const SET_LOCALE = `${NAME}/SET_LOCALE`;


export function changeLanguage(lang){
    return {
        type: SET_LOCALE,
        lang,
    };
}
