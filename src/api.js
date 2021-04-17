/**
 * @module routes
 */

const express = require('express');

const app = express();

/** @name index
 * @path {get} / */
app.get('/', (req, res) => res.send('Welcome'));
/** @name users
 * @path {post} /users */
app.post('/users', (req, res) => res.send('Welcome user'));
/** @name products
 * @path {delete} /products */
app.delete('/products', (req, res) => res.send('Products'));
/** @name signin
 * @path {post} /signin */
app.post('/users/signin', (req, res) => res.send('Login'));

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('listening on http://localhost:3000'));
