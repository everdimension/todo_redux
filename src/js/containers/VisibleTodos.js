import React, { PropTypes } from 'react';
// import store from '../appStore';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';


const getVisibleTodos = (state) => {
	switch (state.visibilityFilter) {
		case 'SHOW_ALL':
			return state.todos;
		case 'SHOW_ACTIVE':
			return state.todos.filter((todo) => !todo.completed);
		case 'SHOW_COMPLETED':
			return state.todos.filter((todo) => todo.completed);
		default:
			return state.todos;
	}
};

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state)
	};
};

const mapDispatchToProps = (dispatch) => {
	console.log('mapDispatchToProps');
	return {
		onTodoToggle: (id) => dispatch({
			type: 'TOGGLE_TODO',
			id
		})
	};
};

const VisibleTodos = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodos;
