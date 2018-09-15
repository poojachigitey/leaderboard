
import {
    NAME,
} from './constants';



export const GET_RECIVER_ADDRESS = `${NAME}/GET_RECIVER_ADDRESS`;
export const SET_RECIVER_ADDRESS = `${NAME}/SET_RECIVER_ADDRESS`;

export const GET_MARKET_VALUE = `${NAME}/GET_MARKET_VALUE`;
export const SET_MARKET_VALUE = `${NAME}/SET_MARKET_VALUE`;

export const SET_STEP2 = `${NAME}/SET_STEP2`;
export const SET_STEP3 = `${NAME}/SET_STEP3`;


export function getReciverAddress(addressData) {
    return {
        type: GET_RECIVER_ADDRESS,
        addressData
    };
}

export function setReciverAddress(recivedAddress) {
    return {
        type: SET_RECIVER_ADDRESS,
        recivedAddress
    };
}


export function getMarketValue(tokensData) {
    return {
        type: GET_MARKET_VALUE,
        tokensData
    };
}

export function setMarketValue(marketValue) {
    return {
        type: SET_MARKET_VALUE,
        marketValue
    };
}

export function setStep2(data) {
    return {
        type: SET_STEP2,
        payload: data
    };
}
export function setStep3(data) {
    return {
        type: SET_STEP3,
        payload: data
    };
}