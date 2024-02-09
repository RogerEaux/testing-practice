export function capitalize(string) {
  if (!string) return string;

  //  Replace first char with first char capitalized
  return string.replace(string[0], string[0].toUpperCase());
}

export function reverseString(string) {
  if (!string) return string;

  //  Split string into array, reverse it and join it back into string
  string = string.split('');
  string.reverse();
  string = string.join('');

  return string;
}

export const calculator = (function () {
  function add(x, y) {
    //  Check if input is a number
    if (typeof x !== 'number' || typeof y !== 'number') return null;

    return x + y;
  }

  return {
    add,
  };
})();
