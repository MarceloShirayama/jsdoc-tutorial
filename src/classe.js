/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

/**
 * Class to create a Programmer
 * @example
 * const newProgrammer = new Programmer({ name: 'foo', 'python' });
 * newProgrammer.getInfo();
 * @see https://github.com/MarceloShirayama/jsdoc
 *
 * @todo Implement the rest of the methods
 */
class Programmer {
  /**
   * @param {{name: string}} user User's information
   * @param {string} language A programming Language
   */
  constructor(user, language) {
    this.name = user.name;
    this.language = language;
  }

  /**
   * Get Programmer information
   * @returns {void}
   */
  getInfo() {
    console.log(`Eu sou ${this.name} e minha linguagem de programação é ${this.language}.`);
  }
}

const programmerOne = new Programmer({ name: 'João' }, 'Python');

programmerOne.getInfo();
