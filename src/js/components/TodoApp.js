import React, { PropTypes } from 'react';
import VisibleTodos from '../containers/VisibleTodos';
import FilterLink from '../containers/FilterLink';
import AddTodo from '../containers/AddTodo';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="TodoApp">
				todo app component&nbsp;

				<AddTodo />

				<VisibleTodos />

				<Filters />
			</div>

		);
	}
}


const Filters = () => (
	<div id="filters">
		Show filters:
		<p>
			<FilterLink filter="SHOW_ALL">show all</FilterLink> &nbsp;
			<FilterLink filter="SHOW_COMPLETED">show completed</FilterLink> &nbsp;
			<FilterLink filter="SHOW_ACTIVE">show active</FilterLink>
		</p>
	</div>
);

export default TodoApp;
