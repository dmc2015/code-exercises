//create a madlib
//a game where you insert words into the structure of a existing
//prompt the user for a noun = person place or thing
//prompt the user for a verb = a action
//prompt a user for a adverb = a word that modifies or quantifies a adjetive, verb, or adverb
//prompt a user for a adjetive = a descriptive word, naming a attribute
//inject the prompts in to the string
//print the string
//use a single output statement for this program
//if your languages supports string interpolation or substitution use it

//js string interpolation
// var replacements = {"%NAME%":"Mike","%AGE%":"26","%EVENT%":"20"},
// str = 'My Name is %NAME% and my age is %AGE%.';
//
// str = str.replace(/%\w+%/g, function(all) {
//   return replacements[all] || all;
// });

//js string supplants http://javascript.crockford.com/remedial.html
// String.prototype.supplant = function (o) {
//   return this.replace(/{([^{}]*)}/g,
//   function (a, b) {
//     var r = o[b];
//     return typeof r === 'string' || typeof r === 'number' ? r : a;
//   }
// );
// };
prompt = require('simple-prompt');
Random = require('random-js');
r = new Random;

words = () => {
  let noun = prompt('Please give a noun');
  let verb = prompt('Please give a verb');
  let adverb = prompt('Please give a adverb');
  let adjetive = prompt('Please give an adjetive');
  return words = { "%NOUN%":noun, "%VERB%":verb, "%ADVERB%":adverb, "%ADJETIVE%":adjetive};
}
words();

let sentences = [
  'Wednesday is hump words[%NOUN%] day, but has anyone asked the camel if he’s happy about it?',
  'If Purple People Eaters are real… where do they find purple people [%NOUN%] to eat?',
  'Sometimes it is better words[%NOUN%] to just walk away from things and go back to them later when you’re in a better frame of mind.'
];

// console.log(sentences);

// console.log(Math.round(.335));

// console.log(r.real(0,3));

// console.log(sentences[0])
// console.log(words())

console.log(      sentences[Math.round(  r.real(0,3)  ) ]  );

console.log( () => {return sentences[Math.round(r.real(0,3))]} );
