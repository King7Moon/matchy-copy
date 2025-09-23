/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animals } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: two params. 1st is Array of animals
//                2nd is string representing which animal
// O: returns the animals object if it exists. returns  null if it does not.
// C: for loop
// E

function search(animalArray, animalString){
    for (let i = 0; i < animalArray.length; i++){
        if (animalArray[i].name === animalString){
            return animalArray[i];

        } 
        
    } return null;
    
} 


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: An array of animals, a string for the name of an animal to search,
//                      and an object that represents the replacement animal
// O: replaces the chosen animal with the new one, only if it exists
// C: "otherwise do nothing"?? 
// E:

// lets break it down
// animals represents the animals array. It is an array of objects. I will need to access the name of each object,
// if it exists for what is being searched for then I will replace it with my replacement object. 
function replace(animals, name, replacement){
// iterate over the animals array
for (let i = 0; i < animals.length; i++){
    // condition 
    if (animals[i].name === name){
        // how do we manipulate an object?
            animals[i] = replacement;
    } return;
}
// if animal name exists then replace it with replacement

}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:two param's: an array of animals and name of animal to search
// O: if that searched animal exists, remove it
// C:
// E:
 
function remove(animals, name){
// iterate through the animals array
for (let i = 0; i < animals.length; i++){
    //condition, do this if...
    if (animals[i].name === name){
        // remove it from the array 
        animals.splice(i, 1);
        
    } return;
}
 }

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I:
// O:
// C:
// E:

function add(animals, animal){
    
// if the animal meets the conditions
if (animal.name && animal.name.length > 0
    && animal.species && animal.species.length > 0
    && animals.filter(a => a.name === animal.name).length === 0
    ){
        animals.push(animal);
    }
    // add animal to object array
    
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}