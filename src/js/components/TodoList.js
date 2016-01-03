import React from 'react';

const TodoList = ({ todos, onTodoToggle }) => (
	<div className="TodosList">
		{todos.map(todo => (
			<Todo key={todo.id}
				{...todo}
				onToggle={() => onTodoToggle(todo.id)} />
		))}
	</div>
);

const Todo = ({ text, completed, onToggle }) => (
	<p className="TodoItem" style={{
			textDecoration: completed ?
			'line-through' :
			''
		}}>
		<i className="text-muted">todo:</i> {text}
		<button type="button" onClick={onToggle}>
			check
		</button>
	</p>
);

export default TodoList;
