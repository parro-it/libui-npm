import test from 'ava';
import libuiNpm from './';

test('it work!', t => {
	const result = libuiNpm();
	t.is(result, 42);
});
