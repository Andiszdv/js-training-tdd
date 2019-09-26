'use strict';

/*
 * Create a constant variable named `escapeStr` that contains
 * the following specials characters: /\`"'
 *
 * @notions Primitive and Operators, Variables
 */

// Your code:
const word = "dindon";
const escapeStr = `Le ${() => "dindon"}/ \`  a \' \\\\ dit qu'il était "${word}"`;

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof escapeStr, 'string');
assert.strictEqual(escapeStr.includes("'"), true);
assert.strictEqual(escapeStr.includes('"'), true);
assert.strictEqual(escapeStr.includes('`'), true);
assert.strictEqual(escapeStr.includes('/'), true);
assert.strictEqual(escapeStr.includes('\\'), true);
// End of tests */
