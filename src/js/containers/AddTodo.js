import React from 'react';
// import store from '../appStore';

function saveTodos(todos) {
	window.localStorage.setItem('todos', JSON.stringify(todos));
}

let id;

const AddTodo = (props, context) => {
	let inputEl;
	let text = '';
	const { store } = context;

	const todos = store.getState().todos;
	id = todos.length
		? todos[todos.length - 1].id + 1
		: 0;

	const init = (node) => {
		console.log('init AddTodo', node);
		if (node) {
			node.focus();
		}
		inputEl = node;
	};

	const addTodo = (evt) => {
		evt.preventDefault();
		if (!inputEl.value.trim()) {
			return;
		}

		store.dispatch({
			type: 'ADD_TODO',
			id: id++,
			text: inputEl.value
		});

		console.log('id is', id);
		saveTodos(store.getState().todos);

		inputEl.value = '';
	};

	return (
		<form onSubmit={addTodo}>
			<input ref={init} type="text" placeholder="enter todo" />
			<button>add todo</button>
		</form>
	);
};

AddTodo.contextTypes = { store: React.PropTypes.object };

export default AddTodo;
