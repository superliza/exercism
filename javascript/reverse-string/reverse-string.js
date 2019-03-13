export const reverseString = (words) => {
  let reverseString = '';
  for (let index = words.length - 1; index >= 0; index--) {
    reverseString += words[index];
  }
  return reverseString;
}