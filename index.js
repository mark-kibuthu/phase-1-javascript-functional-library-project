// Helper function to determine if a variable is an object
function isObject(obj) {
    return obj === Object(obj);
  }
  
  // myEach function with early termination
  function myEach(collection, callback) {
    if (isObject(collection)) {
      for (let key in collection) {
        if (callback(collection[key], key, collection) === false) break;
      }
    } else { // assuming it's an array
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection) === false) break;
      }
    }
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    let result = [];
    myEach(collection, function(value, key, collection) {
      result.push(callback(value, key, collection));
    });
    return result;
  }
  
  // myReduce function
  function myReduce(collection, callback, acc) {
    let values = Object.values(collection);
    let initial = acc !== undefined ? acc : values[0];
    let startIndex = acc !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < values.length; i++) {
      initial = callback(initial, values[i], collection);
    }
  
    return initial;
  }
  
  // myFind function
  function myFind(collection, predicate) {
    let result;
    myEach(collection, function(value, key, collection) {
      if (predicate(value)) {
        result = value;
        return false; // Break out of the iteration early
      }
    });
    return result;
  }
  
  // myFilter function
  function myFilter(collection, predicate) {
    let result = [];
    myEach(collection, function(value, key, collection) {
      if (predicate(value)) {
        result.push(value);
      }
    });
    return result;
  }
  
  // mySize function
  function mySize(collection) {
    if (isObject(collection)) {
      return Object.keys(collection).length;
    } else { // assuming it's an array
      return collection.length;
    }
  }
  
  // myFirst function
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  // myLast function
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  // myKeys function
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  // myValues function
  function myValues(collection) {
    return Object.values(collection);
  }
  
  // Export functions if needed
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
  };
  