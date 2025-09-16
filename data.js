/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create animal variable
var animal = {};
//dot notation adding species with a value
animal.species = "canine";

// bracket notation
animal["name"] = "dog";

// giving my animal var an empty array called noises
animal["noises"] = [];

console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
// noises assigned to empty array

// give noises first element using brackewt notation
noises[0] = "bark";

// add another noise element to the end
noises.push("growl");

// replace bark with howl
noises.unshift("howl");

// use bracket syntax again to add another noise
noises[3] = "woof";


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;

animal.noises.push("roar");


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Objects can be accessed via bracket notation or dot notation.
 * 
 * 2. What are the different ways of accessing elements on arrays?
 * Arrays are indexed lists unlike objects and can only be accessed through bracket notation. 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// var named animals assigned to empty array

var animals = [];
//push animal into animals
animals.push(animal);

//create duck
var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
};
//push duck to animals

animals.push(duck);

//create two more animals objects and add them to animals

var cat = {
  species: "feline",
  name: "Tonya",
  noises: ["meow", "hiss", "psst-psst", "roar"]
}; 
animals.push(cat);

var goat = {
  species: "capra hircus",
  name: "Rachel",
  noises: ["baah", "moo"]
};
animals.push(goat);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////









/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}