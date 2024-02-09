// A capitalize function that takes a string and returns it with the first character capitalized.

import { capitalize, reverseString } from '../modules/testPractice';

describe('Capitalize', () => {
  test('Capitalize', () => {
    expect(capitalize('capital')).toBe('Capital');
  });

  test('Empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('First element in string is a number', () => {
    expect(capitalize('42')).toBe('42');
  });

  test('String is null', () => {
    expect(capitalize(null)).toBe(null);
  });

  test('String is one letter', () => {
    expect(capitalize('f')).toBe('F');
  });
});

describe('Reverse string', () => {
  test('Reverse string', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });

  test('String is empty', () => {
    expect(reverseString('')).toBe('');
  });

  test('String is null', () => {
    expect(reverseString(null)).toBe(null);
  });

  test('String is not a palindrome', () => {
    expect(reverseString('rewind')).toBe('dniwer');
  });
});
