export function capitalize(string) {
  if (!string) return string;

  return string.replace(string[0], string[0].toUpperCase());
}

export function reverseString(string) {
  if (!string) return string;

  string = string.split('');
  string.reverse();
  string = string.join('');

  return string;
}
