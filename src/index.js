/* eslint-disable no-unused-vars */

/** full name of user
* @type {string} */
const fullName = 'Name LastName';

/** array list of ages of users
* @type {Array<number>} */
const ages = [19, 20, 21, 22, 23];

/** array list of scores
 * @type {Array<number | string>} */
const scoresAndStrings = [10, '10'];

/** array list of users
 * @type {Array<string>} */
const users = ['João', 'Pedro', 'Maria'];
users.push('Ana');

/** object person
 * @type {{ id: number | string, firstName: string, lastName: string, age: number }} */
const person = {
  id: 1,
  firstName: 'João',
  lastName: 'da Silva',
  age: 30,
};

/**
 * Sum two numbers
 * @param {number} x First Number
 * @param {number} y Second Number
 * @returns {number} numbers sum
 */
function add(x, y) {
  return x + y;
}

/**
 * Add five at number and return a string
 * @param {number} number Number
 * @returns {string} Number + 5
 */
const addTwo = (number) => `O resultado é ${number + 5}`;
