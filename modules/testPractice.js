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

export function caesarCipher(message, key = 1) {
  if (typeof message !== 'string') return null;

  //  Cipher uses upper case so all chars must be upper case
  message = message.toUpperCase();

  let encrypted = '';
  for (let i = 0; i < message.length; i += 1) {
    let letterCode = message.charCodeAt(i);

    //  Code is within the upper case letters
    if (letterCode >= 65 && letterCode <= 90) {
      //  Shift letter
      letterCode += key % 26;

      //  Wrap around if shifted code is greater than Z or less than A
      if (letterCode > 90) {
        letterCode -= 26;
      } else if (letterCode < 65) {
        letterCode += 26;
      }
    }

    encrypted += String.fromCharCode(letterCode);
  }

  return encrypted;
}
