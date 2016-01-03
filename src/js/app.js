import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './appStore';
import TodoApp from './components/TodoApp';
require('normalize.css');

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('app')
);
