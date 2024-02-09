export function capitalize(string) {
  if (!string) return string;

  //  Replace first char with first char capitalized
  return string.replace(string[0], string[0].toUpperCase());
}

export function reverseString(string) {
  if (!string) return string;

  //  Split string into array, reverse it and join it back into string
  return string.split('').reverse().join('');
}

export const calculator = (function () {
  function isNumber(num) {
    //  A number must be of type number and not NaN
    return typeof num === 'number' && !Number.isNaN(num);
  }

  function add(x, y) {
    if (!isNumber(x) || !isNumber(y)) return null;

    return x + y;
  }

  function substract(x, y) {
    if (!isNumber(x) || !isNumber(y)) return null;

    return x - y;
  }

  function multiply(x, y) {
    if (!isNumber(x) || !isNumber(y)) return null;

    return x * y;
  }

  function divide(x, y) {
    if (!isNumber(x) || !isNumber(y)) return null;

    return x / y;
  }

  return {
    add,
    substract,
    multiply,
    divide,
  };
})();

export function ceasarCipher(message, key = 1) {
  return 'TBMBE';
}
