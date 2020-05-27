const recursiveFibonacci = () => {
	const cache = {};
	return fib = num => {
		if(cache[num]) return cache[num];
		if( num < 2 ) return num;
		const result = fib(num - 1) + fib(num - 2);
		cache[num] = result;
		return result;
	}
}