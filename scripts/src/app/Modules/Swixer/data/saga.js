import { put, call } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import * as actions from '../actions';
import axios from 'axios';
import * as constants from '../constants';
import { get } from 'http';
// import scientificToDec from 'scientific-to-decimal';

export default function* saga() {
  try {
    yield [
      takeLatest(actions.GET_RECIVER_ADDRESS, getReciverAddress),
      takeLatest(actions.GET_MARKET_VALUE, getMarketValue),
    ];
  } catch (error) {
    return;
  }
}

export function* getReciverAddress(action) {
  try {
    const body = {
      'destination_address': action.Data.address,
      'from_symbol': action.Data.token1,
      'to_symbol': action.Data.token2,
      'delay_in_seconds': 60,
      'client_address': constants.nodeAddress,
      'node_address': constants.nodeAddress
    }
    const response = yield axios({
      method: 'post',
      url: constants.URL.swapAddressUri,
      body: JSON.stringify(body),
    });
    if (response !== null) {
      const data = {};
      yield put(actions.setReciverAddress(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}

Number.prototype.noExponents= function(){
  var data= String(this).split(/[eE]/);
  if(data.length== 1) return data[0]; 

  var  z= '', sign= this<0? '-':'',
  str= data[0].replace('.', ''),
  mag= Number(data[1])+ 1;

  if(mag<0){
      z= sign + '0.';
      while(mag++) z += '0';
      return z + str.replace(/^\-/,'');
  }
  mag -= str.length;  
  while(mag--) z += '0';
  return str + z;
}


export function* getMarketValue(action) {
  try {
    let value = action.tokensData.value;
    const URI = `${constants.URL.conversionBaseUri}${constants.nodeAddress}&from=${action.tokensData.token1}&to=${action.tokensData.token2}&value=${value.noExponents()}`;


    // const url = yield call(this.getConversionEndPoint(action.tokensData.token1,action.tokensData.token2));
    const response = yield axios({
      method: 'GET',
      url: URI,
    });
    if (response !== null) {
      const data = { expectedTokens: response.data.value / constants.decimals[action.tokensData.token2] }
      yield put(actions.setMarketValue(data));
    }
  }
  catch (error) {
    console.log(error);
  }
}


function getConversionEndPoint(sourceToken, targetToken) {
  // https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=PIVX
  const mix = `${constants.TokenSname.ETH}?convert=${constants.TokenName.PIVX}`;
  const URI = constants.URL.conversionBaseUri + mix;
  return URI;
}


