import React from 'react';
import { connect } from 'react-redux';
import { initialState } from '../appStore';

let id;
if (initialState && initialState.todos) {
	const { todos } = initialState;
	id = todos.length ? todos[todos.length - 1].id + 1 : 0;
}

const AddTodo = ({ dispatch }) => {
	let inputEl;

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

		dispatch({
			type: 'ADD_TODO',
			id: id++,
			text: inputEl.value
		});

		inputEl.value = '';
	};

	return (
		<form onSubmit={addTodo}>
			<input ref={init} type="text" placeholder="enter todo" />
			<button>add todo</button>
		</form>
	);
};

export default connect()(AddTodo);
