function todoReducer(state={}, action) {
	switch (action.type) {
		case 'ADD_TODO':
			let { text, id, completed } = action;

			return {
				text,
				id,
				completed: completed || false
			};
		case 'TOGGLE_TODO':
			return Object.assign(state, {
				completed: !state.completed
			});

		default:
			return state;

	}
}

export default function todoListReducer(state=[], action) {
	switch (action.type) {
		case 'ADD_TODO':
			const newState = [
				...state,
				todoReducer(undefined, action)
			];

			return newState;

		case 'TOGGLE_TODO':
			return state.map((todo) => {
				if (todo.id === action.id) {
					return todoReducer(todo, action);
				}

				return todo;
			});

		default:
			return state;
	}
}
