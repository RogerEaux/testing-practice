// A capitalize function that takes a string and returns it with the first character capitalized.

import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
} from '../modules/testPractice';

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

  test('String contains spaces', () => {
    expect(reverseString('Reverse me')).toBe('em esreveR');
  });
});

describe('Calculator', () => {
  describe('Add', () => {
    test('Add', () => {
      expect(calculator.add(1, 1)).toBe(2);
    });

    test('One or both of the arguments are non numeric', () => {
      expect(calculator.add('Y', true)).toBe(null);
    });

    test('One or both of the arguments are NaN', () => {
      expect(calculator.add(NaN, 1)).toBe(null);
    });
  });

  describe('Substract', () => {
    test('Substract', () => {
      expect(calculator.substract(1, 1)).toBe(0);
    });

    test('One or both of the arguments are non numeric', () => {
      expect(calculator.substract('Y', true)).toBe(null);
    });

    test('One or both of the arguments are NaN', () => {
      expect(calculator.substract(NaN, 1)).toBe(null);
    });
  });

  describe('Multiply', () => {
    test('Multiply', () => {
      expect(calculator.multiply(1, 1)).toBe(1);
    });

    test('One or both of the arguments are non numeric', () => {
      expect(calculator.multiply('Y', true)).toBe(null);
    });

    test('One or both of the arguments are NaN', () => {
      expect(calculator.multiply(NaN, 1)).toBe(null);
    });
  });

  describe('Divide', () => {
    test('Divide', () => {
      expect(calculator.divide(1, 1)).toBe(1);
    });

    test('One or both of the arguments are non numeric', () => {
      expect(calculator.divide('Y', true)).toBe(null);
    });

    test('One or both of the arguments are NaN', () => {
      expect(calculator.divide(NaN, 1)).toBe(null);
    });

    test('Dividing by 0', () => {
      expect(calculator.divide(1, 0)).toBe(Infinity);
    });

    test('Dividing 0 by 0', () => {
      expect(calculator.divide(0, 0)).toBe(NaN);
    });
  });
});

describe('ceasarCipher', () => {
  test('Ceasar cipher', () => {
    expect(ceasarCipher('SALAD')).toBe('TBMBE');
  });
});
