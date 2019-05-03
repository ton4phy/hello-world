// Exercise
// Implement a function that accepts a credit card number (consisting of 16 letters) 
// as input and returns its hidden version that can be used on the site for display. 
// If the original card had the number 2034399002125581, then the hidden version looks like this ** 5581. 
// In other words, the function replaces the first 12 characters with four asterisks. 
// The number of asterisks is controlled by the second optional parameter. The default is 4

// const hiddenCardNumber = getHiddenCard (2034399002125581);
// console.log (hiddenCardNumber); // **** 5581

// const hiddenCardNumber = getHiddenCard (2034399002125581, 2);
// console.log (hiddenCardNumber); // ** 5581
// **** 5581
// Useful features:

// String.prototype.slice
// String.prototype.padStart

// BEGIN
const getHiddenCard = (cardNumber, starsCount = 4) => {
  const last4Digits = cardNumber.slice(-4);
  return last4Digits.padStart(starsCount + last4Digits.length, '*');
};
// END

module.exports = getHiddenCard;
//or

// BEGIN
const getHiddenCard = (numberCard, val = 4) => {
    let cardNum = '************' + numberCard.slice(-4);
    return cardNum.slice(-(val + 4));
}
// END

module.exports = getHiddenCard;
