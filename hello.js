let Prompt = require('simple-prompt');


//arrow functions are only implicitly returned if they are one liners
//else you will need to name them and call them
hello = () => {

  let questions = [
    {
      question: 'What is your name?',
      required: true
    }
  ];


  var Name = new Prompt(questions);

  Name.create().then(function (error, answers){
    if ( error ){ () =>{ return error }  }
    let name = answers["Whatisyourname?"];

    let greeting = 'Hello ';

    return console.log(greeting + name + '!');
  })
}

hello();
