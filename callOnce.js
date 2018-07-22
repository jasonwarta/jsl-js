
const callOnce = (fn) => {
	let called = false;
	return (...params) =>
		called
		? console.warn(`function ${fn.name} called multiple times`)
		: called = true && fn(...params);
};

export default callOnce;
