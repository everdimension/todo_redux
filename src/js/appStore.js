import { createStore } from 'redux';
import todoReducer from './todo';
import visibilityFilterReducer from './visibilityFilterReducer';

const myCombineReducers = function (reducers) {
	return function (state={}, action) {
		return Object.keys(reducers)
			.reduce(function (nextState, key) {
				nextState[key] = reducers[key](state[key], action);
				return nextState;
			}, {});
	};
};

const appReducer = myCombineReducers({
	todos: todoReducer,
	visibilityFilter: visibilityFilterReducer
});
// const appReducer = combineReducers({
// 	todos: todoReducer,
// 	visibilityFilter: visibilityFilterReducer
// });
// const appReducer = function (state={}, action) {
// 	return {
// 		todos: todoReducer(state.todos, action),
// 		visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action)
// 	};
// };

class Store {
	constructor(reducer, initialState) {
		this.reducer = reducer;
		this.state = this.reducer(initialState, {});
		console.log('set state', this.state);
		this.listeners = [];
	}

	getState() {
		return this.state;
	}

	subscribe(listener) {
		this.listeners.push(listener);
	}

	dispatch(action) {
		this.state = this.reducer(this.state, action);
		this.listeners.forEach(listener => listener());
	}

	unsubscribe(listener) {
		this.listeners = this.listeners.filter((currListener) => {
			return currListener !== listener;
		});
	}
}

// const store = createStore(appReducer);

const todoState = JSON.parse(window.localStorage.getItem('todo-state'));
console.log('todoState', todoState);

// const store = new Store(appReducer, todoState || undefined);
const store = createStore(appReducer, todoState || undefined);
store.subscribe(() => {
	window.localStorage.setItem('todo-state', JSON.stringify(store.getState()));
});

export default store;
