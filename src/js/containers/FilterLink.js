import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		active: state.visibilityFilter === ownProps.filter
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => dispatch({
			type: 'SET_VISIBILITY_FILTER',
			filter: ownProps.filter
		})
	};
};

const FilterLink = ({ active, onClick, children }) => {
	const classes = active ? 'active' : '';
	return (
		<a href="#"
			className={classes}
			onClick={onClick}
		>
			{children}
		</a>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterLink);
