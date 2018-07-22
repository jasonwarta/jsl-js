import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * A protected wrapper for a route object
 * Checks the loggedIn prop for 
 * @param {Object} props React Component props... nothing special here
 * @param {React.Component} props.component The React Component to render
 * @param {Boolean} props.loggedIn This is checked when determining whether to redirect.
 * @return {React.Component}
 */
const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => (
	<Route
		{...rest}
		render={(props) => loggedIn
			? <Component {...props} />
			: <Redirect to='/login' />
		}
	/>
);

export default ProtectedRoute;
