import React from 'react';

/**
 * @todo Write Class Description
 * @extends React.Component
 * @class
 */
class ErrorBoundary extends React.Component {
	/**
	 * @constructor
	 * @param {object} props - This components props.
	 */
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			info: null,
		};
	}

	/**
	 * Invoked when an error ocurrs anywhere in the component tree below
	 * this component. Can be used for cleanup and/or for displaying a
	 * fallback UI instead of the crashed component tree.
	 * @param {any} error - The error that caused the crash.
	 * @param {object} info - An object with information about the error.
	 */
	componentDidCatch(error, info) {
		// Display fallback UI
		this.setState({
			hasError: true,
			error: error,
			info: info,
		});
		// You can also log the error to an error reporting service
		console.log(error, info);
	}

	/**
	 * Renders the ErrorBoundary component.
	 * @return {React.Component}
	 */
	render() {
		const {hasError, error, info} = this.state;
		if(hasError) {
			// You can render any custom fallback UI
			return (
				<React.Fragment>
					<h1> Something went wrong. </h1>
					<h3>Error</h3>
					<p>{JSON.stringify(error, null, 2)}</p>
					<h3>Info</h3>
					<p>{JSON.stringify(info, null, 2)}</p>
				</React.Fragment>
			);
		}
		return this.props.children;
	}
}

ErrorBoundary.defaultProps = {

};

ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;
