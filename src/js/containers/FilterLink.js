import React, { PropTypes } from 'react';
// import store from '../appStore';


class FilterLink extends React.Component {
	constructor(props, context) {
		super(props);
		this.store = context.store;
		this.state = this.store.getState();
	}

	componentWillMount() {
		this.unsubscribe = this.store.subscribe(() => {
			this.setState(this.store.getState());
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const props = this.props;
		const state = this.state;
		const classes = state.visibilityFilter === props.filter ? 'active' : '';

		const newAction = {
			type: 'SET_VISIBILITY_FILTER',
			filter: props.filter
		};

		return (
			<a href="#"
				className={classes}
				onClick={() => this.store.dispatch(newAction)}
			>
				{props.children}
			</a>
		);
	}
}
FilterLink.contextTypes = { store: PropTypes.object };

export default FilterLink;
