/**
 * @file src/services/jwtService.js
 * @description JSON Web Token (JWT) service.
 */

const jwt = require("jsonwebtoken");

/**
 * @function generateToken - Generate a JWT with the specified payload.
 * @param {Object} payload - The payload to include in the JWT.
 * @param {string} secret - The secret key to sign the JWT with.
 * @param {string} expiresIn - The expiration time for the JWT.
 * @returns {string} - The generated JWT.
 */
const generateToken = (payload, secret, expiresIn) => {
  return jwt.sign(payload, secret, { expiresIn });
};

/**
 * @function verifyToken - Verify a JWT and return the payload.
 * @param {string} token - The JWT to verify.
 * @param {string} secret - The secret key to verify the JWT with.
 * @returns {Object} - The payload from the JWT.
 * @throws {Error} - Throws an error if the JWT is invalid.
 */
const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, verifyToken };