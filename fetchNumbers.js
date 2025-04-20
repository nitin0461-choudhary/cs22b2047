const { timeoutRequest } = require('../utils/timeoutRequest.js');

const fetchNumbers = async (numberid) => {
  let url;
  switch (numberid) {
    case 'p':
      url = 'http://20.244.56.144/evaluation-service/primes';
      break;
    case 'f':
      url = 'http://20.244.56.144/evaluation-service/fibo';
      break;
    // Add other cases here
    default:
      throw new Error('Invalid numberid');
  }

  return await timeoutRequest(url, 500); // Pass URL and timeout.
};
