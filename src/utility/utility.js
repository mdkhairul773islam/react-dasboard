/**
 * Return ellipsis of a given string
 * @param {string} text
 * @param {number} size
 */
const ellipsis = (text, size) => {
  return `${text.split(" ").slice(0, size).join(" ")}...`;
};

const toUpperCase = (text) => {
  return text.toUpperCase();
}
//Output: FLEXIPLE

const toCapitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);;
}
//Output: Abc efg

const toFilter = (str) => {
  var i, frags = str.split('_');
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(' ');
}
//Output: Humpdey Dumpdey


export { ellipsis, toUpperCase, toCapitalize, toFilter };
