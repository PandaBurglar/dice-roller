'use strict';
const args = process.argv.slice(2);


// a pure function that rolls that many six sided dice and returns the result.
const diceRoller = numOfDice => {
  
  // converts from string to number
  numOfDice = Number(numOfDice);

  // check num is less than one and returns null.
  if (numOfDice < 1) return null;
  
  // create an array to store the number of dice.
  let randomDiceRollArray = [];

  // loop according to the numOfDice value
  for (let i = 0; i < numOfDice; i++) {

    // randomly choose a number between 1 and 6 and covert to string
    let randomDiceRoll = Math.floor(Math.random()* 6);

    // add the dice roll to the array
    randomDiceRollArray.push(randomDiceRoll);
  }

  // join the random dice roll array with a comma
  let result = randomDiceRollArray.join(', ');

  // return the result
  return result;                                                                                                                                                                                   
}

console.log(`Rolled ${args} dice: ${diceRoller(args)}`)                    