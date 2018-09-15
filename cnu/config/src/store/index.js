import {
    applyMiddleware,
    createStore
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import ja from 'react-intl/locale-data/ja';
import es from 'react-intl/locale-data/es';
import zh from 'react-intl/locale-data/zh';


addLocaleData(en);
addLocaleData(ru);
addLocaleData(ja);
addLocaleData(es);
addLocaleData(zh);

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, composeWithDevTools(middleware));

sagaMiddleware.run(saga);

export default store;