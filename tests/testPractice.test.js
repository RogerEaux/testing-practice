// A capitalize function that takes a string and returns it with the first character capitalized.

import { capitalize } from '../modules/testPractice';

test('Empty string', () => {
  expect(capitalize('')).toBe('');
});

test('Happy path', () => {
  expect(capitalize('capital')).toBe('Capital');
});
