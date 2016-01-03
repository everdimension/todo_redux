import { expect } from 'chai';
import todoReducer from '../src/js/todo';

describe('TodoList Reducer', () => {
	it('adds new todo to the list', () => {
		// const todoParams = {
		// 	id: 2,
		// 	text: 'Something needs to be done'
		// };
		const stateBefore = [];
		const stateAfter = [
			{
				id: 2,
				text: 'Something needs to be done',
				completed: false
			}
		];

		const action = {
			type: 'ADD_TODO',
			id: 2,
			text: 'Something needs to be done'
		};

		expect(todoReducer(stateBefore, action))
			.to.deep.equal(stateAfter);

	});

	it('toggles existing todo', () => {
		const stateBefore = [
			{
				id: 2,
				text: 'Something needs to be done',
				completed: false
			},
			{
				id: 3,
				text: 'React redux flux',
				completed: false
			}
		];

		const stateAfter = [
			{
				id: 2,
				text: 'Something needs to be done',
				completed: false
			},
			{
				id: 3,
				text: 'React redux flux',
				completed: true
			}
		];

		const stateAfterAfter = [
			{
				id: 2,
				text: 'Something needs to be done',
				completed: false
			},
			{
				id: 3,
				text: 'React redux flux',
				completed: false
			}
		];

		const action = {
			type: 'TOGGLE_TODO',
			id: 3
		};

		expect(todoReducer(stateBefore, action))
			.to.deep.equal(stateAfter);
		expect(todoReducer(stateAfter, action))
			.to.deep.equal(stateAfterAfter);

	});
});
