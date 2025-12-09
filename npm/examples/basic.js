/**
 * Basic Example - Tense Converter API
 *
 * This example demonstrates how to use the Tense Converter API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const tenseconverterAPI = require('../index.js');

// Initialize the API client
const api = new tenseconverterAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = {
  "text": "I am walking down the street, and I can see a dog",
  "tense": "past"
};

// Make the API request using callback
console.log('Making request to Tense Converter API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
