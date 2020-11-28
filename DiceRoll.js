/*
* This Program runs a diceroll where you it outputs a random number from a set 
* of numbers that you choose
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-11-25
* Class DiceRoll.
*/


// Imports prompt
// NOTE: you must have installed prompt-sync
const prompt = require('prompt-sync')({sigint: true});

function rollDie (maxValue) {
  var randomInt = (Math.ceil(Math.random() * maxValue));
  return randomInt;
}

//Executes inputs and outputs
function main(){
  // Accepts user input in str form
  const maxValuestr = prompt('Insert the highest number on the die: ');

  // convert the string to a number
  const maxValue = Number(maxValuestr);

  // Checks for invalid characters in same way as try statement
  if (isNaN(maxValue) == true) {
    console.log('Invalid character inputted');
    return;
  }

  // Calls RollDie function
  var rolledNum = rollDie(maxValue);
  console.log('Rolled number: ' + rolledNum);
}

// Calls Main Function
main();
