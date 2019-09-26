'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
String.prototype.toJadenCase = function () {
    return this.split(' ').map(function (item) {
      return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
    }).join(' ');
  };
  
  
 
  
//* Begin of tests
const assert = require('assert');


assert.strictEqual(("How can mirrors be real if our eyes aren't real").toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
assert.strictEqual(("j").toJadenCase(),"J");


//assert.fail('You must write your own tests');
// End of tests */
