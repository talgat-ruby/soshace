import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import 'normalize.css';

import rootReducer from './rootReducer';

import App from './components/App';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={ store }>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
