import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Actions } from './actions/';
import Hello from './containers/Hello';
import './index.css';
import { enthusiasm } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { StoreState } from './types';

const store = createStore<StoreState, Actions, any, any>(enthusiasm);


ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
