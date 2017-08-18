import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './components/App';
import reducers from "./reducers";
import './style/index.css';
import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();