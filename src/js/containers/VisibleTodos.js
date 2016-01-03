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

// class VisibleTodos extends React.Component {
// 	constructor(props, context) {
// 		super(props);
// 		this.store = context.store;
// 		this.state = this.store.getState();
// 		this.toggleTodo = this.toggleTodo.bind(this);
// 	}
//
// 	componentWillMount() {
// 		this.unsubscribe = this.store.subscribe(() => {
// 			this.setState(this.store.getState());
// 		});
// 	}
//
// 	componentWillUnmount() {
// 		this.unsubscribe();
// 	}
//
// 	getVisibleTodos() {
// 		switch (this.state.visibilityFilter) {
// 			case 'SHOW_ALL':
// 				return this.state.todos;
// 			case 'SHOW_ACTIVE':
// 				return this.state.todos.filter((todo) => !todo.completed);
// 			case 'SHOW_COMPLETED':
// 				return this.state.todos.filter((todo) => todo.completed);
// 			default:
// 				return this.state.todos;
// 		}
// 	}
//
// 	toggleTodo(id) {
// 		this.store.dispatch({
// 			type: 'TOGGLE_TODO',
// 			id
// 		});
// 	}
//
// 	render() {
// 		const visibleTodos = this.getVisibleTodos();
// 		return (
// 			<TodoList
// 				todos={visibleTodos}
// 				onTodoToggle={this.toggleTodo}
// 			/>
// 		);
// 	}
// }
// VisibleTodos.contextTypes = { store: PropTypes.object };

export default VisibleTodos;
