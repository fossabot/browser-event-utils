/**
 *  Helper util which ensures that a given property actually exists, then calls it if it does
 *
 *  @param {String} method - the event method that you want to call
 *  @return {Function} event handler function
 */
const callIfExists = (method) => (event) => !!(event && event[method]) && event[method]();

export default callIfExists;