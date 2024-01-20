/** Find the first element in the array that meets certain condition
 * @param {array} inputArray
 * @param {function} predicateFn
 * @returns {any} element of inputArray that meets the condition of predicateFn
 */
function find(inputArray, predicateFn) {
    for (const element of inputArray) {
      if (predicateFn(element)) {
        return element;
      }
    }
    return undefined;
  }
  
  function isNegative(num) {
    return num < 0;
  }

  function isLessThanMinusFiveHundred(num) {
    return num < -500;
  }

  function isUpperCase(ch){
	return ch.toUpperCase() === ch;
}
  

export { find, isNegative, isLessThanMinusFiveHundred, isUpperCase };
