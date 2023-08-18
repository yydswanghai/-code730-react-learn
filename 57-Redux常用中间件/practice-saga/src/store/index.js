import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from "redux-logger"
import createSagaMiddleware from 'redux-saga'
import sagaTask from './saga'

const saga = createSagaMiddleware();

export default createStore(reducer,
    applyMiddleware(
        saga,
        logger
    )
);

saga.run(sagaTask)