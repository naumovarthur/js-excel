/**
 * Transforms string by change first letter to upper,
 * and rest letters to lower case.
 * @param {string} string - string to transform
 * @return {string}
 */
export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
