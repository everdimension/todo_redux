import React from 'react';

const TodoList = ({ todos, onTodoToggle, onTodoRemove }) => (
	<div className="TodosList">
		{todos.map(todo => (
			<Todo key={todo.id}
				{...todo}
				onToggle={() => onTodoToggle(todo.id)}
				onRemove={() => onTodoRemove(todo.id)} />
		))}
	</div>
);

const Todo = ({ text, completed, onToggle, onRemove }) => (
	<p className="TodoItem" style={{
			textDecoration: completed ?
			'line-through' :
			''
		}}>
		<i className="text-muted">todo:</i> {text}
		<button type="button" onClick={onToggle}>
			check
		</button>
		<button type="button" onClick={onRemove}>
			&times;
		</button>
	</p>
);

export default TodoList;
