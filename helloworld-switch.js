let prompt =  require('prompt');


prompt.start();



prompt.get(['username'], function( err, result ){
  console.log('username: ', result.username);



  switch(result.username){
    // case (result.username.match(/^don/)).input:
    case "don":
      console.log('Hello ' + result.username);
      break;
    case "ben":
      console.log('Good day ' + result.username);
      break;
    case "bob":
      console.log('Farwell You Scalliwag ' + result.username);
      break;

  }
});
