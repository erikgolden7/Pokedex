import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Pokedex from './components/pokedex/pokedex';
import Cards from './components/cards/cards';
import reducers from "./reducers";
import './style/index.css';
import registerServiceWorker from './js/registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<Switch>
				<Route path="/cards" component={Cards} />
				<Route path="/pokedex" component={Pokedex} />
				<Route path="/" component={App} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
