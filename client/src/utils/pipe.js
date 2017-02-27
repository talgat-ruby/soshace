export default (...args) => (...fns) => (
	fns.reduce((result, fn) => [fn(...result)], args)
);