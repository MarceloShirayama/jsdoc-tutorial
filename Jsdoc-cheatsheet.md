# Jsdoc cheatsheet

## Functions

```js
/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */

function foo(n) {
  return n
}
```

See: <https://jsdoc.app/index.html>

## Types

```js
@param {string=} n Optional
@param {string} [n] Optional
@param {(string|number)} n Multiple types
@param {*} n Any type
@param {...string} n Repeatable arguments
@param {string} [n="hi"] Optional with default
@param {string[]} n Array of strings
@return {Promise<string[]>} n Promise fulfilled by array of strings
```

See: <https://jsdoc.app/tags-type.html>

## Variables

```js
/**
 * @type {number}
 */
var FOO = 1
/**
 * @const {number}
 */
const FOO = 1
```

## Typedef

```js
/**
 * A song
 * @typedef {Object} Song
 * @property {string} title - The title
 * @property {string} artist - The artist
 * @property {number} year - The year
 */
/**
 * Plays a song
 * @param {Song} song - The {@link Song} to be played
 */

function play(song) {}
```

See: <https://jsdoc.app/tags-typedef.html>

## Typedef Shorthand

```js
/**
 * A song
 * @typedef {{title: string, artist: string, year: number}} Song
 */
/**
 * Plays a song
 * @param {Song} song - The {@link Song} to be played
 */

function play(song) {}
```

See: <https://jsdoc.app/tags-typedef.html>

## Importing types

```js
/**
 * @typedef {import('./Foo').default} Bar
 */

/**
 * @param {Bar} x
 */

function test(x) {}
```

This syntax is TypeScript-specific.

## Other keywords

```js
/**
 * @throws {FooException}
 * @private
 * @deprecated
 * @see
 *
 * @function
 * @class
 */
```

See the full list: <https://jsdoc.app/index.html#block-tags>

## Renaming

```js
/*
 * @alias Foo.bar
 * @name Foo.bar
 */
 ```

Prefer alias over name. See: <https://jsdoc.app/tags-alias.html>
