let prompt =  require('prompt');


prompt.start();



prompt.get(['username'], function( err, result ){
  console.log('username: ', result.username);
  console.log('Hello ' + result.username);
});
