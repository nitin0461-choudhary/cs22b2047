const axios = require('axios');

/**
 * Makes an HTTP GET request with a timeout.
 * @param {string} url - The URL to send the GET request to.
 * @param {number} timeout - Timeout duration in milliseconds.
 * @returns {Promise<Array>} - Returns data if successful; returns an empty array on error or timeout.
 */
const timeoutRequest = async (url, timeout = 500) => {
  try {
    const response = await axios.get(url, { timeout });
    return response.data.numbers; // Assumes response follows the { numbers: [] } structure.
  } catch (error) {
    console.error('Request timed out or failed:', error.message);
    return []; // Return an empty array if timeout or error occurs.
  }
};

module.exports = { timeoutRequest };
