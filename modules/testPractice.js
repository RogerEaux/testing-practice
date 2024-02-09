export function capitalize(string) {
  if (!string) return string;

  return string.replace(string[0], string[0].toUpperCase());
}
