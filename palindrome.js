//search string
//compare each letter in string to another string
//if the string is matched go to if statement
//in the if statement reverse the letters from the first matching character to a seconds
//log the palindrome
//log the palindrome length
//return true
//if there is no palindrome return false

function palindrome ( word ) {
  word = word.toLowerCase();
  for ( letter in word ){
    for( i = 0; i < word.length; i += 1 ){
      console.log(word[letter]);
      console.log(word[i + 1]);
      console.log(word[letter] == word[i + 1]);
      if (word[letter] == word[i + 1] && word.substring(letter, i + 2).length > 2){
        console.log('palindrome length', word.substring(letter, i + 2).length)
        console.log('palindrome', word.substring(letter, i + 2));
        return true;
      }
    }
  }
  return false;
};


word = 'Anna';

palindrome(word);
