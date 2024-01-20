/** Find the first element in the array that meets certain condition
 * @param {array} inputArray
 * @param {function} predicateFn
 * @returns {any} element of inputArray that meets the condition of predicateFn
 */
function filter(inputArray, predicateFn) {
    let returnArray = [];
    for (const element of inputArray) {
      if (predicateFn(element)) {
        returnArray.push(element);
      }
    }
    return returnArray;
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
  

export { filter, isNegative, isLessThanMinusFiveHundred, isUpperCase };
