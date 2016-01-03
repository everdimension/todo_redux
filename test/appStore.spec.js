import store from '../src/js/appStore';
import { expect } from 'chai';

describe('Todo Store', () => {
	it('initiates an empty store', () => {
		expect(store.getState().todos)
			.to.deep.equal([]);
	});

	it('dispatches action and updates state', () => {

		store.dispatch({
			type: 'ADD_TODO',
			id: 0,
			text: 'first task'
		});

		const stateAfter = [
			{
				id: 0,
				text: 'first task',
				completed: false
			}
		];

		expect(store.getState().todos)
			.to.deep.equal(stateAfter);
	});

	it('has visibilityFilter', () => {
		store.dispatch({
			type: 'SET_VISIBILITY_FILTER',
			filter: 'SHOW_COMPLETED'
		});

		const stateAfter = 'SHOW_COMPLETED';

		expect(store.getState().visibilityFilter)
			.to.equal(stateAfter);

	});
});
