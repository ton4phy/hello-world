// Exercise
// Implement the normalizeUrl function, which performs the so-called data normalization.
// It takes the address of the site and returns it with https: // at the beginning.

// The function accepts addresses as ADDRESS or http: // ADDRESS, but always returns the address as https: // ADDRESS

// There are two solutions:

// You can compare the first 8 characters of the argument string with the https: // string.
// You can use the startsWith method to check whether the argument string contains the http: // substring
// And then, based on this, add or not add https: //.

// Call examples:

// normalizeUrl ('google.com'); // 'https://google.com'
// normalizeUrl ('http://ai.fi'); // 'https://ai.fi'
// Definitions
// else - a way to specify a block of code that will be executed if the condition with if is not satisfied

// BEGIN
const normalizeUrl = (url) => {
  let normalizedUrl;
  if (url.startsWith('http://')) {
    normalizedUrl = url.slice(7);
  } else {
    normalizedUrl = url;
  }
  return `https://${normalizedUrl}`;
};
// END

module.exports = normalizeUrl;
