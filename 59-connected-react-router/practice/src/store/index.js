import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from "redux-logger"
import createSagaMiddleware from 'redux-saga'
import sagaTask from './saga'
import { routerMiddleware } from 'connected-react-router'
import history from './history'

// 启动saga任务
const saga = createSagaMiddleware();

export default createStore(reducer,
    applyMiddleware(
        routerMiddleware(history),
        saga,
        logger
    )
);

saga.run(sagaTask)